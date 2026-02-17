import React from "react";
import Link from "next/link";

export type OfferCardVariant = "primary" | "secondary" | "compact";

type OfferCardProps = {
  title: string;
  description: string;
  ctaText: string;
  href?: string;
  variant?: OfferCardVariant;
  className?: string;
};

export default function OfferCard({
  title,
  description,
  ctaText,
  href = "#",
  variant = "primary",
  className = "",
}: OfferCardProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={`
        rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md
        ${isCompact ? "sm:col-span-1" : ""}
        ${className}
      `}
    >
      <h3
        className={
          isCompact
            ? "text-base font-semibold text-gray-900"
            : "text-lg font-semibold text-gray-900 sm:text-xl"
        }
      >
        {title}
      </h3>
      <p
        className={
          isCompact
            ? "mt-2 text-sm text-gray-600"
            : "mt-3 text-gray-600 sm:text-base"
        }
      >
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 inline-block rounded-lg bg-accent-red px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-red-dark focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
      >
        {ctaText}
      </Link>
    </div>
  );
}
