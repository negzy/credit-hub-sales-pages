"use client";

import React from "react";

/**
 * Cal.com embed via iframe.
 * calLink should be the path part only, e.g. "username" or "username/event-type".
 * Full URL becomes: https://cal.com/username/event-type
 */
type CalEmbedProps = {
  /** Cal.com path: username or username/event-type (e.g. "negzy" or "negzy/30min") */
  calLink: string;
  className?: string;
};

export default function CalEmbed({ calLink, className = "" }: CalEmbedProps) {
  const embedUrl = calLink
    ? `https://cal.com/${calLink.replace(/^\/+|\/+$/g, "").replace(/^https?:\/\/cal\.com\/?/, "")}?embed=true`
    : "";

  if (!calLink) {
    return (
      <div className={`flex min-h-[400px] items-center justify-center rounded-xl border border-white/10 bg-white/5 ${className}`}>
        <p className="text-gray-500">Booking link not configured. Add your Cal.com path in lib/links.ts (e.g. username/event-type).</p>
      </div>
    );
  }

  return (
    <div className={`min-h-[600px] w-full overflow-hidden rounded-xl ${className}`}>
      <iframe
        title="Book a call"
        src={embedUrl}
        className="h-[700px] min-h-[600px] w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
