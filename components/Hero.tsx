import React from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export default function Hero() {
  return (
    <section className="relative px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8">
      {/* Soft orange glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 rounded-full bg-accent-orange/10 blur-[100px]"
        style={{ width: "min(80vw, 600px)", height: "280px" }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          The Credit Hub
        </h1>
        <p className="mt-6 text-xl text-gray-300 sm:text-2xl lg:text-3xl">
          Learn the system. Fix your credit. Secure capital. Build the machine.
        </p>
        <p className="mt-8 text-sm text-gray-500 sm:text-base">
          Over $30M funded • 2,000+ credit restorations • 200+ automated credit
          & funding businesses built
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={LINKS.premiumSkool}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-accent-orange px-8 py-4 text-center text-base font-medium text-white transition-colors hover:bg-accent-orange-dim focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-surface-dark sm:w-auto"
          >
            Join Premium on Skool
          </Link>
          <Link
            href={LINKS.creditGpsQuiz}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg border border-surface-border bg-surface-card px-8 py-4 text-center text-base font-medium text-white transition-colors hover:border-accent-orange/50 hover:bg-surface-card/80 sm:w-auto"
          >
            Take the Credit GPS Quiz
          </Link>
        </div>
        <p className="mt-12 text-xs font-medium uppercase tracking-wider text-gray-500">
          Jump to section
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#credit-reset"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-accent-orange/30 hover:text-accent-orange"
          >
            Credit Reset
          </a>
          <a
            href="#capital-access"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-accent-orange/30 hover:text-accent-orange"
          >
            Capital Access
          </a>
          <a
            href="#premium"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-accent-orange/30 hover:text-accent-orange"
          >
            Premium
          </a>
          <a
            href="#evolution"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-accent-orange/30 hover:text-accent-orange"
          >
            Evolution
          </a>
        </div>
      </div>
    </section>
  );
}
