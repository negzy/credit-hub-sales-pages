"use client";

import React, { useState, useEffect } from "react";

type CountdownProps = {
  /** ISO date string (e.g. "2025-04-15T23:59:59") */
  endDate: string;
  /** Label above the timer */
  label?: string;
  /** CTA shown below the timer */
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

function getTimeLeft(end: Date) {
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds, expired: false };
}

export default function Countdown({
  endDate,
  label = "Limited time — higher commission window ends soon.",
  ctaLabel = "Get your link now",
  ctaHref = "#",
  className = "",
}: CountdownProps) {
  const end = new Date(endDate);
  const isValid = !Number.isNaN(end.getTime());
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => (isValid ? getTimeLeft(end) : { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }));

  useEffect(() => {
    if (!isValid) return;
    setMounted(true);
    const t = setInterval(() => setTimeLeft(getTimeLeft(new Date(endDate))), 1000);
    return () => clearInterval(t);
  }, [endDate, isValid]);

  if (!isValid || !mounted || timeLeft.expired) return null;

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className={`rounded-2xl border border-accent-orange/30 bg-accent-orange/5 px-6 py-8 sm:px-10 sm:py-10 ${className}`}>
      <p className="text-center text-sm font-medium text-accent-orange sm:text-base">{label}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold tabular-nums text-white sm:text-4xl">{days}</span>
          <span className="mt-1 text-xs uppercase tracking-wider text-gray-400">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold tabular-nums text-white sm:text-4xl">{hours}</span>
          <span className="mt-1 text-xs uppercase tracking-wider text-gray-400">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold tabular-nums text-white sm:text-4xl">{minutes}</span>
          <span className="mt-1 text-xs uppercase tracking-wider text-gray-400">Mins</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold tabular-nums text-white sm:text-4xl">{seconds}</span>
          <span className="mt-1 text-xs uppercase tracking-wider text-gray-400">Secs</span>
        </div>
      </div>
      {ctaLabel && ctaHref && (
        <p className="mt-8 text-center">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-accent-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-orange-dim"
          >
            {ctaLabel}
          </a>
        </p>
      )}
    </div>
  );
}
