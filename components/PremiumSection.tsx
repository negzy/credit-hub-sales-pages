import React from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";

const FEATURES = [
  {
    name: "Fundability System",
    description:
      "What lenders actually look for and how to position yourself so you qualify. No more guessing—clear criteria and a step-by-step path to fundability.",
    icon: (
      <svg className="h-8 w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    name: "Rapid Repair",
    description:
      "Dispute strategy and execution frameworks that work. Learn the process, the timelines, and how to run rounds yourself—or know exactly what to expect from DFY.",
    icon: (
      <svg className="h-8 w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Business Credit Setup",
    description:
      "Entity structure, tradelines, and the right sequencing so business credit works for you. Build the foundation that lenders and programs expect.",
    icon: (
      <svg className="h-8 w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    name: "Funding Lab",
    description:
      "Applications, approvals, and capital access playbooks. Where to apply, in what order, and how to stay compliant so you don’t leave money on the table.",
    icon: (
      <svg className="h-8 w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Execution Vault",
    description:
      "Templates, scripts, and step-by-step workflows. No reinventing the wheel—use what’s already built and proven so you can focus on doing the work.",
    icon: (
      <svg className="h-8 w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

export default function PremiumSection() {
  return (
    <section
      id="premium"
      className="scroll-mt-20 border-t border-surface-border bg-surface-dark px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Premium — Learn + Implement
          </h2>
          <p className="mt-4 text-2xl font-medium text-accent-orange sm:text-3xl">
            $97/month
          </p>
        </div>

        {/* Problem section */}
        <div className="mt-20 rounded-2xl border border-surface-border bg-surface-card/60 p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-orange/10 text-accent-orange">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Most people don’t know what lenders actually look for
              </h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                They guess. They apply in the wrong order. They miss the prep work that makes approvals possible. That costs time, inquiries, and money. Premium gives you the real criteria and the exact sequence—so you stop guessing and start executing.
              </p>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            What you get
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-400">
            Five modules. One system. Full access on Skool.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-surface-border bg-surface-card/80 p-6 shadow-glow-orange-sm transition-all hover:border-accent-orange/30 hover:shadow-glow-border sm:p-8"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-orange/10 text-accent-orange transition-colors group-hover:bg-accent-orange/20">
                    {feature.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-white sm:text-xl">
                      {feature.name}
                    </h4>
                    <p className="mt-2 text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who it's for / Who it's not for */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-accent-orange/20 bg-surface-card/80 p-6 shadow-glow-orange-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-orange/15">
                <svg className="h-5 w-5 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Who it’s for</h3>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed">
              You want to learn the system and run it yourself. You’re ready to put in the work and prefer having the full playbook, templates, and community so you can implement at your pace. You’re good with $97/month for ongoing access and updates.
            </p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface-card/80 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-500/20">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Who it’s not for</h3>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed">
              If you want someone else to do everything for you with no effort on your side, DFY is a better fit. If you’re not ready to implement and just want to browse, the free community might be enough for now.
            </p>
          </div>
        </div>

        {/* Value positioning */}
        <div className="mt-20 rounded-2xl border border-accent-orange/25 bg-surface-card/80 p-8 shadow-glow-border sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              One system. No gatekeeping.
            </h3>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Everything we teach—fundability, repair, business credit, funding, and execution—lives inside Premium. No upsells to “unlock” the real strategy. You get the full roadmap and the tools. The only variable is how fast you run it.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href={LINKS.premiumSkool}
            className="inline-block rounded-xl bg-accent-orange px-10 py-4 text-lg font-medium text-white shadow-glow-orange-sm transition-all hover:bg-accent-orange-dim hover:shadow-glow-orange focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-surface-dark"
          >
            Join Premium
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Already in the free community? Upgrading takes less than a minute.
          </p>
        </div>
      </div>
    </section>
  );
}
