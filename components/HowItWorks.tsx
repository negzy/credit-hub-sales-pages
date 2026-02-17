import React from "react";

const STEPS = [
  { num: 1, title: "Take Credit GPS", desc: "Answer a short quiz so we can map your situation. No hard pull—it’s not a credit check." },
  { num: 2, title: "Get your roadmap", desc: "You’ll see where you stand and what path makes the most sense." },
  { num: 3, title: "Pick your path", desc: "Premium to learn, DFY to get it done for you, or Evolution to build the business." },
  { num: 4, title: "Execute with support", desc: "Follow the system with access to the community and, if applicable, your dedicated track." },
  { num: 5, title: "Track progress", desc: "Metrics and KPIs so you know where you are and what’s next." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-t border-surface-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-400">
          Simple. Clear. No guesswork.
        </p>
        <div className="mt-16 space-y-10">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="flex gap-6 rounded-2xl border border-surface-border bg-surface-card/50 p-6 sm:p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-orange/15 text-xl font-semibold text-accent-orange">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
