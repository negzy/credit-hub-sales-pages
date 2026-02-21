"use client";

import React, { useState } from "react";

const PLACEHOLDER = "[YOUR LINK]";

const TEMPLATES = [
  {
    title: "For DMs / personal",
    body: "Hey! Wanted to share something that’s helped a lot of people with credit and funding. The Credit Hub has a community plus done-for-you options—Premium to learn the system, or DFY if you want it handled. If you’re looking to fix your credit or get funded, check it out: [YOUR LINK]",
  },
  {
    title: "Short & punchy (Twitter/X)",
    body: "If you’re trying to get funded or fix your credit, The Credit Hub is worth a look. Community + DFY options. [YOUR LINK]",
  },
  {
    title: "Testimonial style",
    body: "I’ve been in The Credit Hub for a bit—they actually walk you through credit and funding, not just theory. Premium to learn or DFY if you want it done. Here’s the link: [YOUR LINK]",
  },
  {
    title: "For Skool owners / creators",
    body: "Fellow community builder here. The Credit Hub does credit repair + funding (learn or done-for-you). If your audience cares about credit or capital, this is a solid referral. [YOUR LINK]",
  },
];

function TemplateCard({
  title,
  body,
  resolvedBody,
  canCopy,
}: {
  title: string;
  body: string;
  resolvedBody: string;
  canCopy: boolean;
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (!canCopy) return;
    navigator.clipboard.writeText(resolvedBody).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-white">{title}</h3>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!canCopy}
          className="shrink-0 rounded-lg bg-accent-orange/20 px-3 py-1.5 text-xs font-medium text-accent-orange transition-colors hover:bg-accent-orange/30 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="mt-3 whitespace-pre-line text-sm text-gray-400">{resolvedBody}</p>
    </div>
  );
}

export default function InvitationTemplates() {
  const [affiliateLink, setAffiliateLink] = useState("");
  const link = affiliateLink.trim();
  const hasLink = link.length > 0;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
        <label htmlFor="affiliate-link" className="block text-sm font-medium text-white">
          Paste your affiliate link
        </label>
        <p className="mt-1 text-xs text-gray-500">
          Enter your Skool invite link once—all templates below will auto-fill. Then copy and paste anywhere.
        </p>
        <input
          id="affiliate-link"
          type="url"
          inputMode="url"
          placeholder="https://www.skool.com/..."
          value={affiliateLink}
          onChange={(e) => setAffiliateLink(e.target.value)}
          className="mt-3 w-full rounded-lg border border-white/20 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-accent-orange focus:outline-none focus:ring-1 focus:ring-accent-orange"
        />
      </div>
      {TEMPLATES.map((t, i) => (
        <TemplateCard
          key={i}
          title={t.title}
          body={t.body}
          resolvedBody={hasLink ? t.body.replace(PLACEHOLDER, link) : t.body}
          canCopy={hasLink}
        />
      ))}
    </div>
  );
}
