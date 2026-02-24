"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface InstitutionDetail {
  id: string;
  name: string;
  type: string;
  primaryBureau: string;
  bureausPulled: string[];
  products: string[];
  approvalFactors: string[];
  notes: string | null;
  lastVerifiedAt: string | null;
  tags: string[];
  state: string | null;
}

export default function VaultInstitutionPage() {
  const params = useParams();
  const id = params.id as string;
  const [data, setData] = useState<InstitutionDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    fetch(`/api/vault/${id}`)
      .then((r) => {
        if (r.status === 403) {
          setLocked(true);
          return null;
        }
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then(setData)
      .catch(() => setError("Not found"));
  }, [id]);

  if (locked) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-gray-400">Unlock the full database to view this institution.</p>
        <Link
          href="/vault/unlock"
          className="mt-4 inline-block rounded-lg bg-[#ff7a00] px-6 py-2 text-white hover:bg-[#e66d00]"
        >
          Unlock full database
        </Link>
        <Link href="/vault" className="mt-4 block text-sm text-[#ff7a00] hover:underline">
          ← Back to vault
        </Link>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-gray-400">{error ?? "Loading..."}</p>
        <Link href="/vault" className="mt-4 block text-sm text-[#ff7a00] hover:underline">
          ← Back to vault
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <Link href="/vault" className="text-sm font-medium text-[#ff7a00] hover:underline">
        ← Back to vault
      </Link>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-6">
        <h1 className="text-2xl font-semibold text-white">{data.name}</h1>
        <p className="mt-1 text-sm text-gray-500">
          {data.primaryBureau} · {data.type}
          {data.state ? ` · ${data.state}` : ""}
        </p>
        {data.bureausPulled.length > 0 && (
          <section className="mt-4">
            <h2 className="text-sm font-semibold text-gray-300">Bureau(s) pulled</h2>
            <p className="mt-1 text-gray-400">{data.bureausPulled.join(", ")}</p>
          </section>
        )}
        {data.products.length > 0 && (
          <section className="mt-4">
            <h2 className="text-sm font-semibold text-gray-300">Products</h2>
            <p className="mt-1 text-gray-400">{data.products.join(", ")}</p>
          </section>
        )}
        {data.approvalFactors.length > 0 && (
          <section className="mt-4">
            <h2 className="text-sm font-semibold text-gray-300">Approval factors</h2>
            <p className="mt-1 text-gray-400">{data.approvalFactors.join(", ")}</p>
          </section>
        )}
        {data.notes && (
          <section className="mt-4">
            <h2 className="text-sm font-semibold text-gray-300">Notes</h2>
            <p className="mt-1 whitespace-pre-line text-gray-400">{data.notes}</p>
          </section>
        )}
        {data.tags.length > 0 && (
          <section className="mt-4">
            <h2 className="text-sm font-semibold text-gray-300">Tags</h2>
            <div className="mt-1 flex flex-wrap gap-2">
              {data.tags.map((t) => (
                <span
                  key={t}
                  className="rounded bg-[#ff7a00]/10 px-2 py-0.5 text-xs text-[#ff7a00]"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}
        {data.lastVerifiedAt && (
          <p className="mt-4 text-xs text-gray-500">
            Last verified: {new Date(data.lastVerifiedAt).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}
