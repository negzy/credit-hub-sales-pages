import React from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";

const WHO_FOR = [
  "Want to start a credit or funding business",
  "Want automation instead of manual work",
  "Want clients consistently",
  "Want to scale beyond referrals",
  "Want systems, not guesswork",
];

const WHO_NOT_FOR = [
  "Want quick money with no effort",
  "Aren’t willing to learn systems",
  "Don’t want to implement",
  "Aren’t serious about building a business",
];

const PILLARS = [
  {
    title: "Foundation & Positioning",
    description: "Offer creation, niche clarity, pricing strategy.",
  },
  {
    title: "Automation Infrastructure",
    description: "CRM, onboarding, pipelines, workflows.",
  },
  {
    title: "Acquisition Engine",
    description: "Ads strategy, Skool funnel, organic systems.",
  },
  {
    title: "Delivery Systems",
    description: "Credit repair workflows, funding processes, fulfillment structure.",
  },
  {
    title: "Scaling & Team",
    description: "Hiring VAs, delegation, SOPs, optimization.",
  },
];

const WHAT_YOU_GET = [
  "Weekly mentorship calls",
  "System architecture guidance",
  "Automation setup frameworks",
  "Funding & credit business playbooks",
  "Client acquisition strategies",
  "Templates & SOPs",
  "Private community access",
  "Direct feedback on implementation",
];

const TIMELINE = [
  { phase: "Month 1–2", focus: "Foundation + systems setup" },
  { phase: "Month 3–4", focus: "Client acquisition + automation refinement" },
  { phase: "Month 5–6", focus: "Scaling + optimization + delegation" },
];

const OUTCOMES = [
  "A functioning automated business",
  "Client acquisition process",
  "Systems installed",
  "Revenue momentum",
  "Scalable infrastructure",
];

export default function EvolutionSection() {
  return (
    <section
      id="evolution"
      className="scroll-mt-20 bg-[#000000] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[#FF6A00]">
            Evolution
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Build Your Automated Credit & Funding Business.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            A 6-month done-with-you mentorship to help you install the systems, automation, and acquisition engine needed to generate clients consistently.
          </p>
          <div className="mt-10">
            <Link
              href={LINKS.evolutionApply}
              className="inline-block rounded-xl bg-[#FF6A00] px-8 py-4 text-base font-semibold text-white shadow-[0_0_32px_rgba(255,106,0,0.35)] transition-all hover:bg-[#e55f00] hover:shadow-[0_0_40px_rgba(255,106,0,0.25)] focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 focus:ring-offset-black"
            >
              Apply to Join
            </Link>
          </div>
        </div>

        {/* Authority */}
        <div className="mt-24 rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Track record
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            <li className="text-gray-300">
              <span className="font-semibold text-[#FF6A00]">$30M+</span> funding generated
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-[#FF6A00]">2,000+</span> credit profiles restored
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-[#FF6A00]">200+</span> automated funding businesses built
            </li>
          </ul>
          <p className="mt-6 text-gray-400">
            Built by a fintech entrepreneur, systems architect, and funding strategist—not a guru. The playbooks come from running real operations.
          </p>
        </div>

        {/* Who This Is For */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Who this is for
          </h3>
          <p className="mt-2 text-gray-400">
            People who:
          </p>
          <ul className="mt-6 space-y-3">
            {WHO_FOR.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FF6A00]" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who This Is NOT For */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Who this is not for
          </h3>
          <p className="mt-2 text-gray-400">
            People who:
          </p>
          <ul className="mt-6 space-y-3">
            {WHO_NOT_FOR.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gray-500" />
                <span className="text-gray-500">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* The Evolution System */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            The Evolution System
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-400">
            Five core pillars. Installed with you over 6 months.
          </p>
          <div className="mt-12 space-y-4">
            {PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6A00]/15 text-sm font-semibold text-[#FF6A00]">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">{pillar.title}</h4>
                    <p className="mt-1 text-gray-400">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div className="mt-24 rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            What you get
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {WHAT_YOU_GET.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <svg className="h-5 w-5 shrink-0 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Timeline
          </h3>
          <div className="mt-12 space-y-6">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-semibold text-[#FF6A00]">{item.phase}</span>
                <span className="text-gray-300">{item.focus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-24 rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Typical outcomes
          </h3>
          <p className="mt-4 text-gray-400">
            By the end of 6 months, members typically have:
          </p>
          <ul className="mt-6 space-y-3">
            {OUTCOMES.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <svg className="h-5 w-5 shrink-0 text-[#FF6A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-white/10 pt-6 text-sm text-gray-500">
            We don’t promise income guarantees. Results depend on your implementation and market. We focus on systems and execution.
          </p>
        </div>

        {/* Pricing */}
        <div className="mt-24 rounded-2xl border border-[#FF6A00]/25 bg-[#FF6A00]/5 p-8 backdrop-blur-sm sm:p-12">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Pricing
            </h3>
            <p className="mt-6 text-2xl font-semibold text-[#FF6A00]">
              $597/month for 6 months
            </p>
            <p className="mt-4 text-gray-300">
              The commitment is intentional. Consistency over 6 months is what creates results—implementation, refinement, and scaling don’t happen in a weekend. This is for serious builders.
            </p>
            <div className="mt-8">
              <Link
                href={LINKS.evolutionApply}
                className="inline-block rounded-xl bg-[#FF6A00] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#e55f00] focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 focus:ring-offset-black"
              >
                Apply for Evolution
              </Link>
            </div>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
          <p className="text-center text-sm text-gray-500 leading-relaxed">
            Evolution is mentorship and systems guidance. We provide the frameworks, playbooks, and direct feedback. Results depend on your implementation. No guarantees on revenue or outcomes—we’re here to help you build the machine; you run it.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to Build Something Real?
          </h3>
          <div className="mt-8">
            <Link
              href={LINKS.evolutionApply}
              className="inline-block rounded-xl bg-[#FF6A00] px-10 py-4 text-lg font-semibold text-white shadow-[0_0_32px_rgba(255,106,0,0.35)] transition-all hover:bg-[#e55f00] focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 focus:ring-offset-black"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Footer - Credit Hub only */}
        <footer className="mt-24 border-t border-white/10 pt-10 text-center">
          <p className="text-sm text-gray-500">The Credit Hub</p>
        </footer>
      </div>
    </section>
  );
}
