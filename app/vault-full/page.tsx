"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BUREAUS = [
  { value: "", label: "All bureaus" },
  { value: "experian", label: "Experian" },
  { value: "equifax", label: "Equifax" },
  { value: "transunion", label: "TransUnion" },
  { value: "unknown", label: "Unknown" },
] as const;
const TYPES = [
  { value: "", label: "All types" },
  { value: "bank", label: "Bank" },
  { value: "credit_union", label: "Credit union" },
  { value: "fintech", label: "Fintech" },
] as const;

interface InstitutionRow {
  id: string;
  name: string;
  type: string;
  primaryBureau: string;
  bureausPulled: string[];
  tags: string[];
  products: string[];
}

export default function VaultFullPage() {
  const router = useRouter();
  const [institutions, setInstitutions] = useState<InstitutionRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [bureau, setBureau] = useState("");
  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [tag, setTag] = useState("");
  const [q, setQ] = useState("");

  useEffect(() => {
    setPage(1);
  }, [bureau, type, state, tag, q]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (bureau) params.set("bureau", bureau);
    if (type) params.set("type", type);
    if (state.trim()) params.set("state", state.trim());
    if (tag) params.set("tag", tag);
    if (q) params.set("q", q);
    params.set("page", String(page));
    setLoading(true);
    fetch(`/api/vault?${params}`, { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (data.tier !== "paid") {
          router.replace("/vault/unlock?next=/vault-full");
          return;
        }
        setInstitutions(data.institutions ?? []);
        setTotal(data.total ?? 0);
        setPage(data.page ?? 1);
        setTotalPages(data.totalPages ?? 1);
      })
      .catch(() => router.replace("/vault/unlock?next=/vault-full"))
      .finally(() => setLoading(false));
  }, [bureau, type, state, tag, q, page, router]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-white sm:text-3xl">Full Vault</h1>
        <p className="mt-2 text-gray-400">
          Every institution — bureau pulls, approval factors, and positioning notes.
        </p>
      </div>

      <div className="mt-8 space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <span className="font-medium text-white">Filters</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <input
            type="search"
            placeholder="Search name or notes..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="min-w-[180px] rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00]"
          />
          <select
            value={bureau}
            onChange={(e) => setBureau(e.target.value)}
            className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00]"
          >
            {BUREAUS.map((b) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00]"
          >
            {TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-28 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00]"
          />
          <input
            type="text"
            placeholder="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-28 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00]"
          />
        </div>
      </div>

      {loading ? (
        <p className="mt-8 text-center text-gray-500">Loading...</p>
      ) : institutions.length === 0 ? (
        <p className="mt-8 text-center text-gray-500">
          {total === 0
            ? "No institutions in the database yet. Run the import against your production Neon DB (see docs/DEPLOY.md)."
            : "No institutions match your filters."}
        </p>
      ) : (
        <>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {institutions.map((inst) => (
              <div
                key={inst.id}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-shadow hover:border-white/20"
              >
                <h3 className="font-semibold text-white">{inst.name}</h3>
                <p className="mt-1 text-xs text-gray-500">
                  {inst.primaryBureau} · {inst.type}
                </p>
                {inst.tags.length > 0 && (
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
                  href={`/vault-full/${inst.id}`}
                  className="mt-3 inline-block text-sm font-medium text-[#ff7a00] hover:underline"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white disabled:opacity-50 hover:bg-white/10"
              >
                Previous
              </button>
              <span className="px-3 text-sm text-gray-400">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white disabled:opacity-50 hover:bg-white/10"
              >
                Next
              </button>
            </div>
          )}

          <p className="mt-6 text-center text-sm text-gray-500">{total} institutions</p>
        </>
      )}
    </div>
  );
}
