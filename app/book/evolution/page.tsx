import type { Metadata } from "next";
import Link from "next/link";
import CalEmbed from "@/components/CalEmbed";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Book: Evolution Mentorship | The Credit Hub",
  description: "Apply to work with us to build and scale your automated credit and funding business.",
};

export default function BookEvolutionPage() {
  return (
    <div className="relative min-h-screen bg-[#000000] embed-page-glow">
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Book: Evolution Mentorship
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            Schedule a call to apply for the 6-month done-with-you mentorship and build your automated credit and funding business.
          </p>
          <div
            className="mx-auto mt-10 h-px w-24 rounded-full bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"
            aria-hidden
          />
        </header>

        <div className="mt-10 w-full">
          <CalEmbed calLink={LINKS.cal.evolution} className="rounded-xl" />
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
