import Link from "next/link";
import Hero from "@/components/Hero";
import OfferCard from "@/components/OfferCard";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";

const PATH_CARDS = [
  {
    title: "Learn",
    description: "Premium membership on Skool. Full system: fundability, repair, business credit, funding lab, and execution vault.",
    ctaText: "Join Premium on Skool",
    href: "#premium",
  },
  {
    title: "Done-For-You Funding",
    description: "We get you funding-ready and secure capital. $397 to start, then 10% success fee on what we secure.",
    ctaText: "Apply for Capital Access DFY",
    href: "#capital-access",
  },
  {
    title: "Done-For-You Credit",
    description: "We handle your credit repair: strategy, disputes, progress tracking. One-time $597.",
    ctaText: "Start Credit Reset DFY",
    href: "#credit-reset",
  },
  {
    title: "Evolution",
    description: "Done-with-you mentorship to build your own credit/funding business. 6 months, $597/mo.",
    ctaText: "Apply for Evolution",
    href: "#evolution",
    variant: "compact" as const,
  },
];

const FAQ_ITEMS = [
  {
    question: "Which one do I start with?",
    answer:
      "If you want to learn and do it yourself, start with Premium. If you need funding or credit fixed now and want it done for you, go with Capital Access DFY or Credit Reset DFY. If you want to build a business in this space with guidance, Evolution is for you.",
  },
  {
    question: "Do I need strong credit for funding?",
    answer:
      "Not necessarily. We work with people at different stages. The Capital Access DFY program includes getting you funding-ready—inquiry removal, business setup, NAICS adjustment—so we can position you for the best outcome. We’ll tell you honestly if you’re not a fit yet.",
  },
  {
    question: "How fast can I get results?",
    answer:
      "It depends on your file and what you’re doing. Credit repair and funding both have variables we can’t control (bureaus, lenders). We move quickly and keep you updated. No one can promise a specific timeline; we focus on doing the work right.",
  },
  {
    question: "What does the success fee mean?",
    answer:
      "For Capital Access DFY: you pay $397 to get funding-ready. Once we secure funding for you, you pay 10% of the total amount funded. Nothing upfront beyond the $397. You pay the success fee after the money hits.",
  },
  {
    question: "Can I do Premium and DFY?",
    answer:
      "Yes. A lot of people are in the free community or Premium and also use a DFY service when they want something handled for them. They’re built to work together.",
  },
  {
    question: "What if I’m not ready yet?",
    answer:
      "Join the free community on Skool. Learn, ask questions, and when you’re ready for Premium or a DFY offer, you’ll know. No pressure.",
  },
];

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* Choose your path */}
      <section
        id="choose-path"
        className="border-t border-gray-100 bg-gray-50/50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
            Choose your path
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            Pick the option that matches where you are and what you want.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PATH_CARDS.map((card, i) => (
              <OfferCard
                key={i}
                title={card.title}
                description={card.description}
                ctaText={card.ctaText}
                href={card.href}
                variant={card.variant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium */}
      <section
        id="premium"
        className="scroll-mt-8 border-t border-gray-100 px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-accent-orange">Premium Membership</p>
          <h2 className="mt-1 text-2xl font-semibold text-gray-900 sm:text-3xl">
            Learn the full system on Skool
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            $97/month gets you access to everything we teach: fundability, rapid
            repair, business credit setup, the funding lab, and the execution
            vault. You learn at your pace and implement.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-red" />
              Fundability System
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-red" />
              Rapid Repair
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-red" />
              Business Credit Setup
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-red" />
              Funding Lab
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-red" />
              Execution Vault
            </li>
          </ul>
          <div className="mt-8">
            <Link
              href="#"
              className="inline-block rounded-lg bg-accent-red px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-red-dark focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
            >
              Join Premium on Skool
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              Already inside the free community? Upgrading takes less than a minute.
            </p>
          </div>
        </div>
      </section>

      {/* Capital Access DFY */}
      <section
        id="capital-access"
        className="scroll-mt-8 border-t border-gray-100 bg-gray-50/50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-accent-orange">Done-For-You Funding</p>
          <h2 className="mt-1 text-2xl font-semibold text-gray-900 sm:text-3xl">
            Capital Access DFY
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            $397 to start—for people who qualify and are funding-ready. That
            covers getting you ready and setting the foundation: inquiry removal
            where applicable, business setup, NAICS adjustment if needed, and
            the right preparation and sequencing. After we secure funding for
            you, we charge a 10% success fee on the total amount funded. You
            pay that after the money is in.
          </p>
          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-medium text-gray-900">Who this is for</h3>
            <p className="mt-2 text-gray-600">
              People who are serious about getting funded and are willing to get
              funding-ready. You’re ready to follow the process and want it
              handled for you.
            </p>
            <h3 className="mt-4 font-medium text-gray-900">Who this is not for</h3>
            <p className="mt-2 text-gray-600">
              If you’re not ready to commit to the steps or you’re just
              exploring, the free community or Premium is a better fit. We’re
              clear about that so nobody wastes time.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="#"
              className="inline-block rounded-lg bg-accent-red px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-red-dark focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
            >
              Apply for Capital Access DFY
            </Link>
          </div>
        </div>
      </section>

      {/* Credit Reset DFY */}
      <section
        id="credit-reset"
        className="scroll-mt-8 border-t border-gray-100 px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-accent-orange">Done-For-You Credit</p>
          <h2 className="mt-1 text-2xl font-semibold text-gray-900 sm:text-3xl">
            Credit Reset DFY
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            $597 one-time. We onboard you, pull your reports, build a strategy,
            and run disputes and letters where appropriate. We track progress
            and keep you in the loop. You can expect a clear process and
            updates; results and timelines depend on your file. We don’t
            guarantee specific outcomes—no one can—but we do the work properly.
          </p>
          <div className="mt-8">
            <Link
              href="#"
              className="inline-block rounded-lg bg-accent-red px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-red-dark focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
            >
              Start Credit Reset DFY
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              Results vary; timelines depend on your file. We don’t make guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section
        id="evolution"
        className="scroll-mt-8 border-t border-gray-100 bg-gray-50/50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-accent-orange">Mentorship</p>
          <h2 className="mt-1 text-2xl font-semibold text-gray-900 sm:text-3xl">
            Credit Hub Evolution
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            This is not part of Premium. $597/month for 6 months. Done-with-you
            mentorship for building a credit and funding business—systems,
            automation, and scaling. You get implementation help, systems and
            automations, accountability, review of your numbers and KPIs, and
            support to build a real operating model.
          </p>
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50/80 px-4 py-3 text-sm text-gray-700">
            <strong>Commitment:</strong> This is a 6-month program for serious
            builders. Not for dabblers. We’re here to help you build something
            that runs.
          </p>
          <div className="mt-8">
            <Link
              href="#"
              className="inline-block rounded-lg bg-accent-red px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-red-dark focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
            >
              Apply for Evolution
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
            Straight answers. No fluff.
          </p>
          <div className="mt-10">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
