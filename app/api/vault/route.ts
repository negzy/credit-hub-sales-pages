import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { tierFromRequest, FREE_VAULT_LIMIT } from "@/lib/vault-access";
import { parseJsonArray } from "@/lib/vault-types";

export const dynamic = "force-dynamic";

const PAGE_SIZE_FREE = 20;
const PAGE_SIZE_PAID = 24;

/** Curated major banks shown on free vault — full bureau info, so visitors see what they’re missing. */
const FEATURED_VAULT_NAMES = [
  "Chase",
  "JPMorgan",
  "Bank of America",
  "Wells Fargo",
  "Citi",
  "U.S. Bank",
  "Capital One",
  "PNC",
  "Truist",
  "TD Bank",
  "American Express",
  "US Bank",
  "Citibank",
];

export async function GET(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get("cookie");
    const tier = await tierFromRequest(cookieHeader);
    const { searchParams } = new URL(request.url);
    const lite = searchParams.get("lite") === "1";

    // Free/lite: curated major banks only, with full bureau info
    const bureau = lite ? undefined : (searchParams.get("bureau") ?? undefined);
    const type = lite ? undefined : (searchParams.get("type") ?? undefined);
    const tag = lite ? undefined : (searchParams.get("tag") ?? undefined);
    const state = lite ? undefined : (searchParams.get("state") ?? undefined);
    const q = lite ? undefined : (searchParams.get("q") ?? undefined);
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const fullList = searchParams.get("full") === "1";

    const where: Record<string, unknown> = {};
    if (bureau) where.primaryBureau = bureau;
    if (type) where.type = type;
    if (state && state.trim()) where.state = { contains: state.trim() };
    if (tag) {
      where.tags = { contains: tag };
    }
    if (q && q.trim()) {
      const term = q.trim();
      where.OR = [{ name: { contains: term } }, { notes: { contains: term } }];
    }

    const orderBy = { name: "asc" as const };
    const total = await prisma.institution.count({ where });

    if ((tier === "paid" && !lite) || fullList) {
      const pageSize = PAGE_SIZE_PAID;
      const totalPages = Math.max(1, Math.ceil(total / pageSize));
      const skip = (page - 1) * pageSize;
      const institutions = await prisma.institution.findMany({
        where,
        orderBy,
        skip,
        take: pageSize,
      });
      const list = institutions.map((i) => ({
        id: i.id,
        name: i.name,
        type: i.type,
        primaryBureau: i.primaryBureau,
        bureausPulled: parseJsonArray(i.bureausPulled),
        tags: parseJsonArray(i.tags),
        products: parseJsonArray(i.products),
        locked: false,
      }));
      return NextResponse.json({
        institutions: list,
        tier: "paid",
        total,
        page,
        totalPages,
        limited: false,
      });
    }

    // Lite: return only curated major banks, with full bureau info, in display order
    const featuredWhere = {
      OR: FEATURED_VAULT_NAMES.map((n) => ({ name: { contains: n } })),
    } as const;
    const featuredRaw = await prisma.institution.findMany({
      where: featuredWhere,
      orderBy: { name: "asc" },
    });
    const list = featuredRaw
      .sort((a, b) => {
        const ai = FEATURED_VAULT_NAMES.findIndex((n) => a.name.toLowerCase().includes(n.toLowerCase()));
        const bi = FEATURED_VAULT_NAMES.findIndex((n) => b.name.toLowerCase().includes(n.toLowerCase()));
        if (ai >= 0 && bi >= 0) return ai - bi;
        if (ai >= 0) return -1;
        if (bi >= 0) return 1;
        return a.name.localeCompare(b.name);
      })
      .map((i) => ({
        id: i.id,
        name: i.name,
        type: i.type,
        primaryBureau: i.primaryBureau,
        bureausPulled: parseJsonArray(i.bureausPulled),
        tags: parseJsonArray(i.tags),
        products: parseJsonArray(i.products),
        locked: false,
      }));

    return NextResponse.json({
      institutions: list,
      tier: "free",
      total,
      page: 1,
      totalPages: 1,
      limited: true,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch vault" }, { status: 500 });
  }
}
