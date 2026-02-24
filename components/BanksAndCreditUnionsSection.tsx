import React from "react";
import Link from "next/link";

const MAJOR_BANKS = [
  "Chase",
  "Bank of America",
  "Wells Fargo",
  "Citi",
  "U.S. Bank",
  "Capital One",
  "PNC",
  "Truist",
  "TD Bank",
  "American Express",
];

const CREDIT_UNIONS = [
  "Navy Federal Credit Union",
  "Pentagon Federal Credit Union",
  "USAA",
  "Alliant Credit Union",
  "First Tech Federal Credit Union",
  "SchoolsFirst FCU",
  "Boeing Employees Credit Union",
  "State Employees’ Credit Union",
];

export default function BanksAndCreditUnionsSection() {
  return (
    <section className="border-t border-surface-border bg-[#0B0B0F] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Banks & credit unions we track
        </h2>
        <p className="mt-3 text-center text-gray-400">
          From major banks to regional credit unions — bureau pulls, business cards, and criteria in one place.
        </p>

        <div className="mt-10">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Major banks</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {MAJOR_BANKS.map((name) => (
              <li key={name}>
                <span className="inline-block rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Credit unions</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {CREDIT_UNIONS.map((name) => (
              <li key={name}>
                <span className="inline-block rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/vault"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-orange hover:underline"
          >
            See full list in Funding Intelligence Vault
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </p>
      </div>
    </section>
  );
}
