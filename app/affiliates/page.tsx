import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/links";
import Countdown from "@/components/Countdown";
import InvitationTemplates from "@/components/InvitationTemplates";

export const metadata: Metadata = {
  title: "Affiliate Program | The Credit Hub",
  description:
    "Partner with The Credit Hub. Refer clients to our offers and earn. Simple terms, timely payouts.",
};

const HOW_IT_WORKS = [
  { step: 1, title: "Get your link", description: "Go to The Credit Hub on Skool, sign in, and copy your unique affiliate link from the Invite button." },
  { step: 2, title: "Share everywhere", description: "Share your link with your audience, network, socials—anywhere people care about credit, funding, or building a business." },
  { step: 3, title: "Get paid", description: "When someone joins a paid tier or signs up through your link, you earn. We’ll share the exact commission structure when you’re in." },
];

const WHAT_YOU_PROMOTE = [
  { name: "Premium", price: "$97/month", note: "Recurring commission when your referral joins." },
  { name: "Capital Access DFY", price: "$397 + 10% success fee", note: "Earn when your referral starts." },
  { name: "Credit Reset DFY", price: "$597 one-time", note: "Earn when your referral enrolls." },
  { name: "Evolution", price: "$597/month × 6", note: "Recurring commission for the program." },
];

const GET_LINK_STEPS = [
  "Go to The Credit Hub on Skool and sign in.",
  "Click the “Invite” (or referral) button in the community.",
  "Copy your unique affiliate link and share it.",
];

const FAQ = [
  {
    q: "When do I get paid?",
    a: "Payouts run on a set schedule (e.g. monthly or bi-weekly). Exact timing and method (PayPal, Venmo, etc.) are shared when you’re approved.",
  },
  {
    q: "How do I track my referrals?",
    a: "You can track referrals and earnings in your Skool affiliate dashboard. Log into Skool, open the community, and use the Affiliates / Invite section to see your stats.",
  },
  {
    q: "What can I promote?",
    a: "Premium ($97/mo), Capital Access DFY, Credit Reset DFY, and Evolution. We’ll give you clear do’s and don’ts so you stay compliant.",
  },
  {
    q: "Do I need to be a member first?",
    a: "Typically yes—you’ll need to be in the community to get your invite link. Join The Credit Hub on Skool, then use the Invite button to get your link.",
  },
  {
    q: "Is there a limit to how much I can earn?",
    a: "No cap. The more qualified referrals you bring, the more you earn. We’ll share the exact commission structure and payout details when you’re in.",
  },
];

export default function AffiliatesPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0B]">
      {/* Simple nav */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-black"
          >
            The Credit Hub
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-accent-orange"
          >
            Main site
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8">
        <div
          className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 rounded-full bg-accent-orange/10 blur-[100px]"
          style={{ width: "min(80vw, 500px)", height: "200px" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Earn when you refer.
          </h1>
          <p className="mt-5 text-lg text-gray-400 sm:text-xl">
            Partner with The Credit Hub. Share your link—when someone joins Premium, signs up for DFY, or applies for Evolution, you earn.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={LINKS.affiliatesSkool}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-accent-orange px-8 py-4 text-base font-medium text-white transition-colors hover:bg-accent-orange-dim focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-black"
            >
              Get your link on Skool
            </Link>
            <Link
              href={LINKS.affiliatesApply}
              className="inline-block rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Apply / Register for payouts
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Already in the community? Go to Skool, click Invite, and copy your link.
          </p>
          {LINKS.affiliatesCountdownEnd && (
            <div className="mt-12 max-w-xl mx-auto">
              <Countdown
                endDate={LINKS.affiliatesCountdownEnd}
                label="Limited time — higher commission window ends soon."
                ctaLabel="Get your link now"
                ctaHref={LINKS.affiliatesSkool}
              />
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            How it works
          </h2>
          <div className="mt-12 space-y-8">
            {HOW_IT_WORKS.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 rounded-xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-orange/15 text-lg font-semibold text-accent-orange">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can promote */}
      <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            What you can promote
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-gray-400">
            Four offers. Every referral that converts can earn you commission.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {WHAT_YOU_PROMOTE.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="mt-1 text-accent-orange">{item.price}</p>
                <p className="mt-2 text-sm text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get your affiliate link */}
      <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Get your affiliate link
          </h2>
          <p className="mt-3 text-center text-gray-400">
            Follow these steps to get your unique referral link.
          </p>
          <ol className="mt-10 space-y-4">
            {GET_LINK_STEPS.map((step, i) => (
              <li key={i} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-orange/15 text-sm font-semibold text-accent-orange">
                  {i + 1}
                </span>
                <span className="text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link
              href={LINKS.affiliatesSkool}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-accent-orange px-8 py-4 text-base font-medium text-white transition-colors hover:bg-accent-orange-dim focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-black"
            >
              Open The Credit Hub on Skool
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            Not a member yet? Join the community first, then come back and get your link.
          </p>
        </div>
      </section>

      {/* Invitation templates */}
      <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Invitation templates
          </h2>
          <p className="mt-3 text-center text-gray-400">
            Copy, paste your link where it says [YOUR LINK], and share.
          </p>
          <div className="mt-10">
            <InvitationTemplates />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <dt className="font-medium text-white">{item.q}</dt>
                <dd className="mt-2 text-gray-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Ready to partner?
          </h2>
          <p className="mt-4 text-gray-400">
            Get your link on Skool, or register for payouts if we’ve asked you to.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={LINKS.affiliatesSkool}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-accent-orange px-8 py-4 text-base font-medium text-white transition-colors hover:bg-accent-orange-dim focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-black"
            >
              Get your link now
            </Link>
            <Link
              href={LINKS.affiliatesApply}
              className="inline-block rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Register for payouts
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/"
            className="text-sm font-medium text-accent-orange hover:underline"
          >
            ← Back to The Credit Hub
          </Link>
        </div>
      </footer>
    </main>
  );
}
