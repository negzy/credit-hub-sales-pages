import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { tierFromRequest, FREE_VAULT_LIMIT } from "@/lib/vault-access";
import { parseJsonArray } from "@/lib/vault-types";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const cookieHeader = request.headers.get("cookie");
    const tier = await tierFromRequest(cookieHeader);

    const institution = await prisma.institution.findUnique({ where: { id } });
    if (!institution) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (tier === "free") {
      const freeIds = await prisma.institution.findMany({
        orderBy: { name: "asc" },
        take: FREE_VAULT_LIMIT,
        select: { id: true },
      });
      const inFreeTier = freeIds.some((r) => r.id === id);
      if (!inFreeTier) {
        return NextResponse.json(
          { error: "Unlock the full vault to view this institution", code: "VAULT_LOCKED" },
          { status: 403 }
        );
      }
    }

    return NextResponse.json({
      id: institution.id,
      name: institution.name,
      type: institution.type,
      primaryBureau: institution.primaryBureau,
      bureausPulled: parseJsonArray(institution.bureausPulled),
      products: parseJsonArray(institution.products),
      approvalFactors: parseJsonArray(institution.approvalFactors),
      notes: institution.notes,
      lastVerifiedAt: institution.lastVerifiedAt?.toISOString() ?? null,
      tags: parseJsonArray(institution.tags),
      state: institution.state,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch institution" }, { status: 500 });
  }
}
