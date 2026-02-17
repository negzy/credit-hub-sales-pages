import type { Metadata } from "next";
import Link from "next/link";
import TypeformEmbed from "@/components/TypeformEmbed";

export const metadata: Metadata = {
  title: "Credit GPS™ Assessment | The Credit Hub",
  description:
    "Find out exactly where you stand and what steps to take to become funding ready. Takes less than 2 minutes.",
};

const GPS_FORM_ID = "01KH9PEHS9BKDDCFAQJBQZPGSD";

export default function GpsPage() {
  return (
    <div className="relative min-h-screen bg-[#000000] embed-page-glow">
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 pb-32 sm:px-6 sm:py-16 sm:pb-16 lg:px-8">
        {/* Top section */}
        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Credit GPS™ Assessment
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            Find out exactly where you stand and what steps to take to become
            funding ready. This takes less than 2 minutes.
          </p>
          {/* Gradient divider */}
          <div
            className="mx-auto mt-10 h-px w-24 rounded-full bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"
            aria-hidden
          />
        </header>

        {/* Typeform embed */}
        <div className="mt-10 w-full overflow-visible">
          <TypeformEmbed formId={GPS_FORM_ID} className="rounded-xl" />
        </div>

        {/* Back link - extra spacing on mobile so it's not hidden */}
        <p className="mt-8 pb-8 text-center sm:pb-0">
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
