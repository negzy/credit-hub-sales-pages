"use client";

import React, { useState } from "react";

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

function TemplateCard({ title, body }: { title: string; body: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(body).then(() => {
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
          className="shrink-0 rounded-lg bg-accent-orange/20 px-3 py-1.5 text-xs font-medium text-accent-orange transition-colors hover:bg-accent-orange/30"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="mt-3 whitespace-pre-line text-sm text-gray-400">{body}</p>
    </div>
  );
}

export default function InvitationTemplates() {
  return (
    <div className="space-y-6">
      <p className="text-center text-sm text-gray-500">
        Replace [YOUR LINK] with your Skool invite link before sharing.
      </p>
      {TEMPLATES.map((t, i) => (
        <TemplateCard key={i} title={t.title} body={t.body} />
      ))}
    </div>
  );
}
