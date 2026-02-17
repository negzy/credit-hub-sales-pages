import type { Metadata } from "next";
import Link from "next/link";
import CalEmbed from "@/components/CalEmbed";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Book: Credit Reset DFY | The Credit Hub",
  description: "Schedule a call to get started with Done-For-You credit repair.",
};

export default function BookCreditResetPage() {
  return (
    <div className="relative min-h-screen bg-[#000000] embed-page-glow">
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Book: Credit Reset DFY
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            Schedule a call to get started with Done-For-You credit positioning and optimization.
          </p>
          <div
            className="mx-auto mt-10 h-px w-24 rounded-full bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"
            aria-hidden
          />
        </header>

        <div className="mt-10 w-full">
          <CalEmbed calLink={LINKS.cal.creditReset} className="rounded-xl" />
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-[#FF6A00] hover:text-[#FF6A00]/80 transition-colors"
          >
            ← Back to The Credit Hub
          </Link>
        </p>
      </div>
    </div>
  );
}
