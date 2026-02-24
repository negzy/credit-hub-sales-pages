"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function VaultUnlockForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/vault-full";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/vault/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Invalid password");
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-xl font-semibold text-white">Unlock full vault</h1>
      <p className="mt-2 text-sm text-gray-400">
        After purchasing in the Skool classroom, you’ll receive instructions with your unlock password.
        Enter it below to access the full database — every institution, bureau pulls, approval factors, and positioning notes.
      </p>
      <form onSubmit={handleSubmit} className="mt-6">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Vault password"
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-lg text-white placeholder:text-gray-500 focus:border-[#ff7a00] focus:outline-none focus:ring-1 focus:ring-[#ff7a00]"
          autoFocus
        />
        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading || !password.trim()}
          className="mt-4 w-full rounded-lg bg-[#ff7a00] py-3 font-medium text-white transition-colors hover:bg-[#e66d00] disabled:opacity-50"
        >
          {loading ? "Unlocking..." : "Unlock"}
        </button>
      </form>
      <Link href="/vault" className="mt-4 block text-center text-sm text-[#ff7a00] hover:underline">
        ← Back to vault
      </Link>
    </div>
  );
}

export default function VaultUnlockPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md px-4 py-12 text-center text-gray-400">Loading...</div>}>
      <VaultUnlockForm />
    </Suspense>
  );
}
