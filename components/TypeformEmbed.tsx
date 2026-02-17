"use client";

import React from "react";
import Script from "next/script";

const TYPEFORM_SCRIPT = "https://embed.typeform.com/next/embed.js";

type TypeformEmbedProps = {
  formId: string;
  className?: string;
};

export default function TypeformEmbed({ formId, className = "" }: TypeformEmbedProps) {
  return (
    <>
      <Script src={TYPEFORM_SCRIPT} strategy="afterInteractive" />
      <div
        data-tf-live={formId}
        data-tf-inline-on-mobile
        data-tf-medium="snippet"
        data-tf-full-screen
        className={`typeform-embed-mobile min-h-[60vh] w-full sm:min-h-[500px] ${className}`}
      />
    </>
  );
}
