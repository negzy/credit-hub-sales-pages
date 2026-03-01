import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import {
  CREDIT_INSIDE_COMMUNITY,
  CREDIT_OUTSIDE_COMMUNITY,
  FUNDING_SCREENSHOTS,
  FUNDING_REVIEW_STYLE,
  FUNDING_VIDEOS,
} from "@/lib/testimonials-data";

export const metadata: Metadata = {
  title: "Testimonials — The Credit Hub",
  description:
    "Real results from Credit Hub members: credit repair wins and funding success stories.",
};

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-surface-border px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-gray-400 max-w-2xl">{subtitle}</p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function ImageGrid({ urls }: { urls: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {urls.map((src) => (
        <div
          key={src}
          className="relative rounded-xl overflow-hidden border border-surface-border bg-surface-card shadow-glow-orange-sm aspect-[4/5] sm:aspect-[3/4]"
        >
          <Image
            src={src}
            alt="Testimonial"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}

function VideoCard({ src, label }: { src: string; label: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-surface-border bg-surface-card shadow-glow-orange-sm">
      <video
        src={src}
        controls
        playsInline
        className="w-full aspect-video bg-black"
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
      <p className="p-3 text-sm font-medium text-gray-300">{label}</p>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      {/* Hero */}
      <section className="border-b border-surface-border px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Testimonials
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Real results from people who learned the system, fixed their credit,
            and secured funding.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Credit repair wins and capital access stories — from inside the
            community and out.
          </p>
        </div>
      </section>

      {/* Credit — Inside Community */}
      <Section
        title="Credit — Inside community"
        subtitle="Screenshots and wins shared inside The Credit Hub community."
      >
        <ImageGrid urls={CREDIT_INSIDE_COMMUNITY} />
      </Section>

      {/* Credit — Outside Community */}
      <Section
        title="Credit — Outside community"
        subtitle="Testimonials and feedback from outside the community."
      >
        <ImageGrid urls={CREDIT_OUTSIDE_COMMUNITY} />
      </Section>

      {/* Funding — Screenshots */}
      <Section
        title="Funding — Screenshot testimonials"
        subtitle="Funding success screenshots and messages from members."
      >
        <ImageGrid urls={FUNDING_SCREENSHOTS} />
      </Section>

      {/* Funding — Review style */}
      <Section
        title="Funding — Review-style testimonials"
        subtitle="Structured reviews and longer-form feedback."
      >
        <ImageGrid urls={FUNDING_REVIEW_STYLE} />
      </Section>

      {/* Funding — Video */}
      <Section
        title="Funding — Video testimonials"
        subtitle="Short video testimonials and collages."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FUNDING_VIDEOS.map(({ src, label }) => (
            <VideoCard key={src} src={src} label={label} />
          ))}
        </div>
      </Section>

      {/* Back to home / CTA */}
      <section className="border-t border-surface-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-gray-400">
            Ready to get started? Join the community or pick a path that fits.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent-orange px-6 py-3 text-sm font-semibold text-black shadow-glow-button transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-surface-dark"
          >
            Back to The Credit Hub
          </Link>
        </div>
      </section>

      <footer className="border-t border-surface-border px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-gray-500">
            Built for people who are ready to move. We're here when you are.
          </p>
        </div>
      </footer>
    </main>
  );
}
