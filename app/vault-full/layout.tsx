import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Vault | Funding Intelligence | The Credit Hub",
  description: "Full database — every institution, bureau pulls, approval factors.",
};

export default function VaultFullLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-gray-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/vault-full" className="text-lg font-semibold text-white">
            Full Vault
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/vault"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-[#ff7a00]"
            >
              Lite vault
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-[#ff7a00]"
            >
              The Credit Hub
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
