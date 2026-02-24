import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funding Intelligence Vault | The Credit Hub",
  description: "Know which bureau a bank pulls, what they care about, and how to position.",
};

export default function VaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-gray-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/vault" className="text-lg font-semibold text-white">
            Funding Intelligence Vault
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-[#ff7a00]"
          >
            ← The Credit Hub
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
