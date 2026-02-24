"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";

interface InstitutionRow {
  id: string;
  name: string;
  type?: string;
  primaryBureau?: string;
  bureausPulled?: string[];
  tags?: string[];
  products?: string[];
  locked?: boolean;
}

export default function VaultPage() {
  const [institutions, setInstitutions] = useState<InstitutionRow[]>([]);
  const [tier, setTier] = useState<"free" | "paid">("free");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limited, setLimited] = useState(false);
  const [loading, setLoading] = useState(true);
  // Lite: no search/filters — only first 20 so full list stays gated
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", "1");
    params.set("lite", "1");
    setLoading(true);
    fetch(`/api/vault?${params}`)
      .then((r) => r.json())
      .then((data) => {
        setInstitutions(data.institutions ?? []);
        setTier(data.tier ?? "free");
        setTotal(data.total ?? 0);
        setPage(data.page ?? 1);
        setTotalPages(data.totalPages ?? 1);
        setLimited(data.limited ?? false);
      })
      .catch(() => setInstitutions([]))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-white sm:text-3xl">
          Funding Intelligence Vault
        </h1>
        <p className="mt-2 text-gray-400">
          Know which bureau a bank pulls, what they care about, and how to position.
        </p>
      </div>

      {/* Preview: major banks with full bureau info — then premium CTA */}
      <div className="mt-8 rounded-xl border border-[#ff7a00]/30 bg-[#ff7a00]/5 p-6 text-center">
        <p className="text-lg font-medium text-white">
          Preview: major banks with bureau pulls and positioning. The full vault has{" "}
          <span className="text-[#ff7a00]">{total}</span> institutions.
        </p>
        <p className="mt-2 text-gray-400">
          Search, filter by bureau and state, and get approval factors and notes for every lender.
        </p>
        <Link
          href={LINKS.vaultFullAccessSkool}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg bg-[#ff7a00] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#e66d00]"
        >
          Get Full Access →
        </Link>
        <p className="mt-3 text-sm text-gray-400">
          Already purchased?{" "}
          <Link href="/vault/unlock" className="font-medium text-[#ff7a00] hover:underline">
            Unlock the full vault here
          </Link>
        </p>
      </div>

      {loading ? (
        <p className="mt-8 text-center text-gray-500">Loading...</p>
      ) : institutions.length === 0 ? (
        <p className="mt-8 text-center text-gray-500">
          No institutions to show. The database may be empty — run the import against your production database (see docs/DEPLOY.md).
        </p>
      ) : (
        <>
          <div className="mt-8">
            <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">
              Major banks — bureau & positioning
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {institutions.map((inst) => (
                <div
                  key={inst.id}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-shadow hover:border-white/20"
                >
                  <h3 className="font-semibold text-white">{inst.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {inst.primaryBureau !== "unknown" ? inst.primaryBureau : "—"} · {inst.type}
                  </p>
                  {inst.bureausPulled && inst.bureausPulled.length > 0 && (
                    <p className="mt-1.5 text-xs text-gray-400">
                      Pulls: {inst.bureausPulled.join(", ")}
                    </p>
                  )}
                  {inst.tags && inst.tags.length > 0 && (
                    <p className="mt-2 flex flex-wrap gap-1">
                      {inst.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded bg-[#ff7a00]/10 px-1.5 py-0.5 text-xs text-[#ff7a00]"
                        >
                          {t}
                        </span>
                      ))}
                    </p>
                  )}
                  <Link
                    href={`/vault/${inst.id}`}
                    className="mt-3 inline-block text-sm font-medium text-[#ff7a00] hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Full vault: {total} institutions with search and filters.
          </p>
        </>
      )}
    </div>
  );
}
