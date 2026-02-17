import React from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";
import { IconFunding, IconCreditRepair, IconMentorship, IconSystems } from "./icons";

const CARDS = [
  {
    id: "premium",
    icon: <IconSystems />,
    title: "Premium",
    price: "$97/mo",
    tagline: "Learn + Implement",
    description: "Full access on Skool: learn the system and implement at your pace.",
    items: [
      { name: "Fundability System", detail: "What lenders look for and how to position yourself." },
      { name: "Rapid Repair", detail: "Dispute strategy and execution frameworks." },
      { name: "Business Credit Setup", detail: "Entity structure, tradelines, and sequencing." },
      { name: "Funding Lab", detail: "Applications, approvals, and capital access playbooks." },
      { name: "Execution Vault", detail: "Templates, scripts, and step-by-step workflows." },
    ],
    cta: "Join Premium",
    href: LINKS.premiumSkool,
  },
  {
    id: "capital-access",
    icon: <IconFunding />,
    title: "Capital Access DFY",
    price: "$397 to start + 10% success fee",
    tagline: "We secure capital for you",
    description: "Intake → strategy → applications → approvals → compliance. We run the process; you get funded. No hard pull to take the Credit GPS Quiz.",
    items: [],
    cta: "Start Capital Access DFY",
    href: LINKS.capitalAccessDfy,
  },
  {
    id: "credit-reset",
    icon: <IconCreditRepair />,
    title: "Credit Reset DFY",
    price: "One-time $597",
    tagline: "We handle disputes + rebuilding",
    description: "Audit → dispute strategy → rounds → tracking → rebuild plan. We do the work; you get updates. Results vary; we don’t guarantee specific outcomes.",
    items: [],
    cta: "Start Credit Reset DFY",
    href: LINKS.creditResetDfy,
  },
  {
    id: "evolution",
    icon: <IconMentorship />,
    title: "Evolution",
    price: "$597/mo for 6 months",
    tagline: "Done-with-you mentorship to build a credit/funding business",
    description: "Systems, automation, offer design, fulfillment, SOPs, client acquisition, KPI dashboard, and scaling support. For people building an actual operating business.",
    items: [],
    cta: "Apply for Evolution",
    href: LINKS.evolutionApply,
  },
];

export default function PathCards() {
  return (
    <section id="path" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Choose your path
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
          Four ways to move forward. Pick the one that fits where you are.
        </p>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {CARDS.map((card) => (
            <article
              key={card.id}
              className="rounded-2xl border border-surface-border bg-surface-card/80 p-8 shadow-glow-orange-sm transition-shadow hover:shadow-glow-orange"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-orange/10">
                  {card.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-accent-orange">{card.tagline}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gray-400">{card.price}</p>
                </div>
              </div>
              <p className="mt-6 text-gray-300">{card.description}</p>
              {card.items.length > 0 && (
                <ul className="mt-6 space-y-4">
                  {card.items.map((item, i) => (
                    <li key={i}>
                      <span className="font-medium text-white">{item.name}</span>
                      <span className="text-gray-400"> — {item.detail}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8">
                <Link
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-accent-orange px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-orange-dim focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-surface-dark"
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
