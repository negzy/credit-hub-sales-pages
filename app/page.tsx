import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BanksAndCreditUnionsSection from "@/components/BanksAndCreditUnionsSection";
import PremiumSection from "@/components/PremiumSection";
import CapitalAccessSection from "@/components/CapitalAccessSection";
import CreditResetSection from "@/components/CreditResetSection";
import EvolutionSection from "@/components/EvolutionSection";
import HowItWorks from "@/components/HowItWorks";
import Differentiators from "@/components/Differentiators";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";

const FAQ_ITEMS = [
  {
    question: "Is the Credit GPS a hard pull?",
    answer:
      "No. The Credit GPS is a quiz we use to understand your situation and recommend a path. It is not a credit check and does not result in a hard pull on your report.",
  },
  {
    question: "Do you guarantee deletions or approvals?",
    answer:
      "No. Credit repair and funding both depend on bureaus, lenders, and your specific file. We don’t guarantee deletions, specific score changes, or funding amounts. We do the work properly and keep you updated; outcomes vary.",
  },
  {
    question: "How fast can I see progress?",
    answer:
      "It depends on your path and your file. Credit repair has bureau response times we can’t control. Funding has underwriting timelines. We move quickly on our side and give you clear expectations. No one can promise a specific date.",
  },
  {
    question: "What if I’m starting from scratch?",
    answer:
      "That’s fine. A lot of people start with little or no business credit and limited personal credit. The Credit GPS helps us see where you are. From there, we recommend a path—often Premium to learn the system, or a DFY track if you want it done for you.",
  },
  {
    question: "What if I already tried credit repair before?",
    answer:
      "We can still help. Files change; new issues show up, and strategy matters. We do a fresh audit and build a plan. If you’ve had bad experiences before, we get it—we focus on clear process and communication.",
  },
  {
    question: "What do I get inside Premium?",
    answer:
      "Full access to the Skool community and all modules: Fundability System, Rapid Repair, Business Credit Setup, Funding Lab, and Execution Vault. You learn the system and implement at your pace with templates and support.",
  },
  {
    question: "What’s the difference between DFY vs Evolution?",
    answer:
      "DFY (Capital Access or Credit Reset) means we do the work for you—funding or credit repair. Evolution is done-with-you mentorship to build your own credit/funding business: systems, automation, client acquisition, and scaling. DFY is for getting your own outcome; Evolution is for building the machine that serves others.",
  },
  {
    question: "How does payment work?",
    answer:
      "Premium is paid on Skool when you join. DFY services have their own payment flow—Capital Access has a $397 start fee and 10% success fee after funding; Credit Reset is a one-time $597. Evolution is $597/month for 6 months. You’ll get the exact payment link when you apply or sign up.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <BanksAndCreditUnionsSection />
      <CreditResetSection />
      <CapitalAccessSection />
      <PremiumSection />
      <EvolutionSection />
      <HowItWorks />
      <Differentiators />
      <section id="faq" className="scroll-mt-20 border-t border-surface-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-400">
            Straight answers. No fluff.
          </p>
          <div className="mt-12">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>
      <FinalCTA />
      <footer className="border-t border-surface-border px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-gray-500">
            Built for people who are ready to move. We’re here when you are.
          </p>
        </div>
      </footer>
    </main>
  );
}
