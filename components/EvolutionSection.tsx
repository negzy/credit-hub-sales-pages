import React from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";

const TRACKS = [
  {
    title: "Funding Business Track",
    bullets: [
      "Build your offer + pricing (credit repair, funding, capital access)",
      "Set up intake, pipelines, onboarding, and fulfillment SOPs",
      "Lead flow system (ads, Skool funnel, organic)",
      "Sales scripts + follow-up automations",
      "Delivery structure so you can scale beyond referrals",
    ],
  },
  {
    title: "Skool Growth Track",
    bullets: [
      "Community positioning + niche clarity",
      "Content + engagement system (posting cadence, prompts, gamification)",
      "Discovery ranking strategy + weekly growth actions",
      "Monetization setup (free → premium → high ticket)",
      "Templates + tools to execute faster (without guessing)",
    ],
  },
];

const WHO_FOR = [
  "You want to build a Funding Business OR scale a Skool community",
  "You want systems and automation instead of manual hustle",
  "You want consistent lead flow (not random spikes)",
  "You want a step-by-step build plan and feedback as you implement",
  "You're serious about execution",
];

const WHO_NOT_FOR = [
  "You want \"quick money\" with no work",
  "You won't follow a process or implement between calls",
  "You want a course only (no coaching, no build)",
  "You're not ready to operate like a business owner",
];

const PILLARS = [
  {
    title: "Foundation & Positioning",
    description: "Offer creation, niche clarity, pricing, and a clear \"why you\" narrative.",
  },
  {
    title: "Automation Infrastructure",
    description: "CRM, intake, pipelines, onboarding, workflows, follow-ups.",
  },
  {
    title: "Acquisition Engine",
    description: "Ads strategy + Skool funnel + organic systems that create consistent leads.",
  },
  {
    title: "Delivery Systems",
    description: "For Funding Track: fulfillment workflows, funding processes, compliance basics, client experience. For Skool Track: content engine, engagement loops, retention, and monetization flow.",
  },
  {
    title: "Scale & Team",
    description: "SOPs, delegation, hiring VAs, and operational rhythm.",
  },
];

const WHAT_YOU_GET = [
  "Weekly implementation calls (cohort style)",
  "Systems + automation setup frameworks",
  "Templates, scripts, and SOP library",
  "Direct feedback on your build (offers, funnel, workflows)",
  "Private community access + accountability",
];

const TIMELINE = [
  { phase: "Month 1", focus: "Foundation + system design" },
  { phase: "Month 2", focus: "Build automation + fulfillment" },
  { phase: "Month 3", focus: "Launch acquisition engine + optimize" },
  { phase: "Month 4", focus: "Scale: team, retention, and weekly growth cadence" },
];

const OUTCOMES = [
  "A functioning business engine with systems installed",
  "Clear offer + onboarding + delivery structure",
  "A repeatable acquisition flow",
  "Momentum + a plan to scale",
];

const EVOLUTION_FAQ = [
  { q: "Do I have to choose a track right away?", a: "No. You'll choose during onboarding, and you can pivot if your goals change." },
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
            Build a real business with systems — not guesswork.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            A 4-month, done-with-you program where we install the offer, automation, and acquisition engine — so you can scale either:
          </p>
          <ul className="mx-auto mt-4 max-w-xl list-disc list-inside text-left text-gray-300 space-y-1">
            <li>a <strong className="text-white">Funding Business</strong> (credit + capital services), or</li>
            <li>a <strong className="text-white">Skool Community</strong> (audience + membership growth).</li>
          </ul>
          <div className="mt-10">
            <Link
              href={LINKS.evolutionApply}
              target="_blank"
              rel="noopener noreferrer"
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
              <span className="font-semibold text-[#FF6A00]">200+</span> automated businesses built
            </li>
          </ul>
          <p className="mt-6 text-gray-400">
            Built by a fintech entrepreneur and systems architect. The playbooks come from real operations.
          </p>
        </div>

        {/* Pick your track */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Pick your track
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-400">
            Same system. Two outcomes. Choose what you're building.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {TRACKS.map((track, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
              >
                <h4 className="text-lg font-semibold text-white sm:text-xl">{track.title}</h4>
                <ul className="mt-4 space-y-2">
                  {track.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6A00]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Who this is for
          </h3>
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
            Five pillars. Installed with you over 4 months.
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
            By the end of 4 months, members typically have:
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
            We don’t promise income guarantees. Results depend on your effort, offer, and market. We focus on systems + execution.
          </p>
        </div>

        {/* Pricing */}
        <div className="mt-24 rounded-2xl border border-[#FF6A00]/25 bg-[#FF6A00]/5 p-8 backdrop-blur-sm sm:p-12">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Choose your plan
            </h3>
            <p className="mt-6 text-2xl font-semibold text-[#FF6A00]">
              $997/month for 4 months
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              Cohort-based. Done-with-you. Limited seats.
            </p>
            <div className="mt-8">
              <Link
                href={LINKS.evolutionApply}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-[#FF6A00] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#e55f00] focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 focus:ring-offset-black"
              >
                Apply to Join
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        {EVOLUTION_FAQ.length > 0 && (
          <div className="mt-24 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">FAQ</h3>
            <dl className="mt-4 space-y-4">
              {EVOLUTION_FAQ.map((item, i) => (
                <div key={i}>
                  <dt className="font-medium text-gray-200">{item.q}</dt>
                  <dd className="mt-1 text-sm text-gray-400">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Risk Reversal */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
          <p className="text-center text-sm text-gray-500 leading-relaxed">
            Evolution is implementation-focused mentorship. We provide the frameworks, playbooks, and direct feedback. Results depend on your implementation. No guarantees on revenue or outcomes—we’re here to help you build the machine; you run it.
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
              target="_blank"
              rel="noopener noreferrer"
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
