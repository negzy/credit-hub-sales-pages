"use client";

import React, { useState } from "react";
import Link from "next/link";

const ANCHORS = [
  { label: "Credit Reset", href: "#credit-reset" },
  { label: "Capital Access", href: "#capital-access" },
  { label: "Premium", href: "#premium" },
  { label: "Evolution", href: "#evolution" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
<nav className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-black"
        >
          The Credit Hub
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {ANCHORS.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-accent-orange"
            >
              {a.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-gray-400 hover:bg-surface-card hover:text-white md:hidden"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-surface-border px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {ANCHORS.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-accent-orange"
              >
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
