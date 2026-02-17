import React from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";

const WHO_FOR = [
  "You need capital and want it done for you, not DIY",
  "You’re willing to get funding-ready (we handle the prep)",
  "You want a clear process: intake → strategy → applications → approvals",
  "You’re ready to follow the steps and stay in the loop",
];

const PROCESS_STEPS = [
  {
    title: "Funding Readiness",
    description: "We get you ready: inquiry removal where applicable, business setup, NAICS adjustment, and the right sequencing so you’re positioned to qualify.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Positioning",
    description: "We align your file, entity, and documents with what lenders and programs look for—so applications aren’t dead on arrival.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Applications",
    description: "We run the application process in the right order, with the right programs, so you’re not wasting inquiries or time.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Approvals",
    description: "We track submissions, follow up, and work toward approvals. You get updates; we handle the back-and-forth.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function CtaButton() {
  return (
    <Link
      href={LINKS.capitalAccessDfy}
      className="inline-block rounded-xl bg-[#FF7A00] px-8 py-4 text-base font-semibold text-white shadow-glow-button transition-all hover:bg-[#e66d00] hover:shadow-glow-orange focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 focus:ring-offset-[#0B0B0F]"
    >
      Start Capital Access DFY
    </Link>
  );
}

export default function CapitalAccessSection() {
  return (
    <section
      id="capital-access"
      className="scroll-mt-20 bg-[#0B0B0F] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* 1. Hero */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Capital Access DFY
          </h2>
          <p className="mt-4 text-xl text-gray-400 sm:text-2xl">
            Done-For-You Funding — We Secure Capital For You
          </p>
          <div className="mt-10">
            <CtaButton />
          </div>
        </div>

        {/* 2. Problem */}
        <div className="mt-24 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-10">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Why most people get denied
          </h3>
          <p className="mt-4 leading-relaxed text-gray-400">
            It’s usually not bad credit alone. It’s positioning. Applying before you’re ready. Applying to the wrong programs in the wrong order. Missing the prep—inquiry cleanup, entity structure, NAICS, documentation—that underwriters expect. Random applying burns inquiries and time. We fix the positioning first, then run applications the right way so you’re not guessing.
          </p>
        </div>

        {/* 3. Who This Is For */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Who this is for
          </h3>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {WHO_FOR.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF7A00]/20 text-[#FF7A00]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Process Steps */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            The process
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-400">
            Four steps. We handle the work; you get the updates.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF7A00]/15 text-[#FF7A00]">
                  {step.icon}
                </div>
                <h4 className="mt-4 font-semibold text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Why This Works — comparison */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-2 text-red-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="font-semibold">Random applying</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>• Apply everywhere and hope something sticks</li>
              <li>• Burn inquiries without fixing positioning</li>
              <li>• No clear order or strategy</li>
              <li>• Denials stack up; options shrink</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#FF7A00]/30 bg-[#FF7A00]/5 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-2 text-[#FF7A00]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Strategic applying</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>• Get funding-ready first (prep, structure, cleanup)</li>
              <li>• Apply in the right order to the right programs</li>
              <li>• We run the process; you get updates</li>
              <li>• Maximize approval odds and capital access</li>
            </ul>
          </div>
        </div>

        {/* 6. Investment */}
        <div className="mt-24 rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Investment
            </h3>
            <p className="mt-6 text-lg text-gray-300">
              <span className="font-semibold text-white">$397 to start</span> — for those who qualify and are funding-ready. That covers getting you ready and setting the foundation.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              <span className="font-semibold text-white">10% success fee</span> on the total funding we secure for you, paid after the money is in. No success, no extra fee.
            </p>
          </div>
        </div>

        {/* 7. Expectations */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
          <p className="text-center text-sm text-gray-500">
            We don’t guarantee specific funding amounts or approval timelines. Outcomes depend on your file, lender criteria, and market conditions. We do the work properly, keep you updated, and align our fee with your success.
          </p>
        </div>

        {/* 8. CTA Footer */}
        <div className="mt-24 text-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
