import React from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export default function FinalCTA() {
  return (
    <section className="border-t border-surface-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-surface-border bg-surface-card/80 p-10 sm:p-16">
        {/* Soft glow */}
        <div
          className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-accent-orange/15 blur-[80px]"
          aria-hidden
        />
        <div className="relative text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pick your path. Then execute.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Start with the Credit GPS Quiz, join Premium, or apply for Evolution.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href={LINKS.creditGpsQuiz}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg bg-accent-orange px-8 py-4 text-center text-base font-medium text-white transition-colors hover:bg-accent-orange-dim focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-surface-dark sm:w-auto"
            >
              Take Credit GPS Quiz
            </Link>
            <Link
              href={LINKS.premiumSkool}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border border-surface-border bg-surface-card px-8 py-4 text-center text-base font-medium text-white transition-colors hover:border-accent-orange/50 hover:bg-surface-card/80 sm:w-auto"
            >
              Join Premium
            </Link>
            <Link
              href={LINKS.evolutionApply}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border border-surface-border bg-surface-card px-8 py-4 text-center text-base font-medium text-white transition-colors hover:border-accent-orange/50 hover:bg-surface-card/80 sm:w-auto"
            >
              Apply for Evolution
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
