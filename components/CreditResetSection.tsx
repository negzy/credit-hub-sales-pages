import React from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";

const WHAT_WE_HANDLE = [
  {
    title: "Credit Analysis & Strategy",
    description:
      "We pull and review your reports, identify what’s holding you back, and build a clear strategy—disputes, paydowns, timing—so every move supports approval readiness.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Bureau Optimization",
    description:
      "Disputes, validation requests, and bureau communication where appropriate. We handle the paperwork and follow-up so your file reflects accuracy and fairness.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Score Improvement Positioning",
    description:
      "We focus on the levers that actually move the needle for approvals—utilization, mix, recency—so you’re positioned for better rates and access, not just a number.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0111.814 2.062c.776.776 1.339 1.8 1.587 2.869.075.303.075.606.075.909V18M2.25 18L2.25 18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021 18v-2.25a2.25 2.25 0 00-.75-1.688l-2.5-2.25a2.25 2.25 0 00-1.5-.563H15" />
      </svg>
    ),
  },
  {
    title: "Approval Preparation",
    description:
      "We align your profile with what lenders look for—clean reports, strong positioning, documentation readiness—so when you apply, you’re prepared.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const WHO_FOR = [
  "You want your credit fixed and positioned, not DIY trial and error",
  "You’re ready for someone to run disputes and strategy for you",
  "You’re building toward approvals (funding, housing, better terms)",
  "You want clear updates and a single point of accountability",
];

const PROCESS_STEPS = [
  { title: "Intake", description: "We onboard you, pull your reports, and gather what we need to build your strategy." },
  { title: "Strategy", description: "We map your file, identify priorities, and lay out the plan—disputes, timing, next steps." },
  { title: "Optimization", description: "We execute: bureau work, validation, and follow-up. We track progress and keep you updated." },
  { title: "Positioning", description: "We align your profile for approval readiness—score levers, mix, and documentation." },
  { title: "Preparation", description: "We get you ready for the next phase: funding, applications, or whatever you’re building toward." },
];

function CtaButton({ variant = "primary" }: { variant?: "primary" | "footer" }) {
  const label = variant === "footer" ? "Enroll in Credit Reset DFY" : "Get Started";
  return (
    <Link
      href={LINKS.creditResetDfy}
      className="inline-block rounded-xl bg-[#ff7a00] px-8 py-4 text-base font-semibold text-white shadow-glow-button transition-all hover:bg-[#e66d00] hover:shadow-glow-orange focus:outline-none focus:ring-2 focus:ring-[#ff7a00] focus:ring-offset-2 focus:ring-offset-black"
    >
      {label}
    </Link>
  );
}

export default function CreditResetSection() {
  return (
    <section
      id="credit-reset"
      className="scroll-mt-20 bg-black px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* 1. Hero */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Credit Reset DFY
          </h2>
          <p className="mt-4 text-xl text-[#ff7a00] sm:text-2xl">
            Done-For-You Credit Positioning & Optimization
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            We fix the foundation and improve your approval strength—so you’re positioned for funding, better terms, and next steps instead of guessing alone.
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
            It’s often credit structure. Inaccurate or unfair items on the report. High utilization. Wrong mix. Applying before the file is ready. Lenders and programs have clear criteria; if your profile doesn’t match, you get denied. We fix the structure first—analysis, disputes, positioning—so you’re approval-ready instead of burning applications.
          </p>
        </div>

        {/* 3. What This Program Does */}
        <div className="mt-24 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-10">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Positioning & approval readiness
          </h3>
          <p className="mt-4 leading-relaxed text-gray-400">
            Credit Reset DFY isn’t just “dispute and wait.” We focus on positioning: cleaning the file, improving how you’re scored, and getting you ready for approvals. The goal is a stronger profile so when you apply for funding, housing, or better terms, you’re in a position to qualify.
          </p>
        </div>

        {/* 4. What We Handle For You */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            What we handle for you
          </h3>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {WHAT_WE_HANDLE.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-colors hover:border-[#ff7a00]/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff7a00]/15 text-[#ff7a00]">
                  {item.icon}
                </div>
                <h4 className="mt-4 font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Who This Is For */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Who this is for
          </h3>
          <div className="mx-auto mt-10 max-w-2xl">
            <ul className="space-y-4">
              {WHO_FOR.map((item, i) => (
                <li key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff7a00]/20 text-[#ff7a00]">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 6. Investment */}
        <div className="mt-24 rounded-2xl border border-[#ff7a00]/20 bg-[#ff7a00]/5 p-8 backdrop-blur-xl sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Investment
            </h3>
            <p className="mt-6 text-2xl font-semibold text-[#ff7a00]">
              $597 one-time
            </p>
            <p className="mt-4 text-gray-300">
              One price. No monthly fees, no surprises. We’re clear about what’s included: intake, strategy, bureau optimization, positioning, and preparation. Results and timelines vary by file—we don’t guarantee specific score moves or deletions—but we’re transparent about the process and the value.
            </p>
          </div>
        </div>

        {/* 7. Process */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            The process
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-400">
            Five steps. We run the work; you get the updates.
          </p>
          <div className="mt-12 space-y-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:items-center"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ff7a00]/15 text-lg font-semibold text-[#ff7a00]">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{step.title}</h4>
                  <p className="mt-1 text-sm text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Expected Outcomes */}
        <div className="mt-24 rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl sm:p-12">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Expected outcomes
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400 leading-relaxed">
            The aim is a stronger credit profile: cleaner reports, better positioning for score improvement, and readiness for approvals. Many clients see score movement and improved approval odds over time. We don’t promise specific numbers or timelines—bureaus and lenders vary—but we do the work properly and keep you informed so you know where you stand.
          </p>
        </div>

        {/* 9. Final CTA */}
        <div className="mt-24 text-center">
          <CtaButton variant="footer" />
        </div>
      </div>
    </section>
  );
}
