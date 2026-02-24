/**
 * Scrape Doctor of Credit (and optionally other sources), then save/update Institution records.
 * Run: npm run vault:scrape
 */
import "dotenv/config";
import { runAllScrapes } from "../lib/scraper";
import { prisma } from "../lib/db";

function slugToName(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .slice(0, 80);
}

function extractSlugFromUrl(url: string): string | null {
  try {
    const path = new URL(url).pathname;
    const segments = path.split("/").filter(Boolean);
    const last = segments[segments.length - 1];
    if (last && last.length > 2) return last;
    return segments[0] ?? null;
  } catch {
    return null;
  }
}

async function main() {
  console.log("Running scrapers...");
  const results = await runAllScrapes();
  let created = 0;
  let updated = 0;

  for (const r of results) {
    if (r.status !== "success" || !r.data) continue;
    const { links = [], snippets = [] } = r.data;
    const seen = new Set<string>();

    for (const link of links) {
      const slug = extractSlugFromUrl(link);
      if (!slug || seen.has(slug)) continue;
      seen.add(slug);
      const name = slugToName(slug);
      if (name.length < 3) continue;
      const note = snippets[0]?.slice(0, 500) ?? `From ${r.url}`;
      const existing = await prisma.institution.findFirst({
        where: { name: { contains: name.slice(0, 30) } },
      });
      if (existing) {
        await prisma.institution.update({
          where: { id: existing.id },
          data: {
            notes: [existing.notes, note].filter(Boolean).join("\n\n").slice(0, 2000),
            lastVerifiedAt: new Date(),
          },
        });
        updated++;
      } else {
        await prisma.institution.create({
          data: {
            name,
            type: "bank",
            primaryBureau: "unknown",
            bureausPulled: "[]",
            products: "[]",
            approvalFactors: "[]",
            notes: note,
            sourceLinks: "[]",
            tags: "[]",
            lastVerifiedAt: new Date(),
          },
        });
        created++;
      }
    }

    if (snippets.length > 0 && links.length === 0) {
      const name = `From ${new URL(r.url).hostname}`;
      const note = snippets.slice(0, 3).join("\n\n").slice(0, 1500);
      const existing = await prisma.institution.findFirst({
        where: { name },
      });
      if (!existing) {
        await prisma.institution.create({
          data: {
            name,
            type: "bank",
            primaryBureau: "unknown",
            bureausPulled: "[]",
            products: "[]",
            approvalFactors: "[]",
            notes: note,
            sourceLinks: "[]",
            tags: "[]",
            lastVerifiedAt: new Date(),
          },
        });
        created++;
      }
    }
  }

  console.log(`Done. Created ${created}, updated ${updated} institutions.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
