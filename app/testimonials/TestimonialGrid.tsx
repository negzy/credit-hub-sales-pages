"use client";

import { useState } from "react";
import Image from "next/image";
import TestimonialLightbox from "@/components/TestimonialLightbox";

type Props = { images: string[] };

export default function TestimonialGrid({ images }: Props) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src) => (
          <button
            key={src}
            type="button"
            onClick={() => setLightboxSrc(src)}
            className="relative rounded-xl overflow-hidden border border-surface-border bg-surface-card shadow-glow-orange-sm aspect-[3/4] w-full text-left focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-surface-dark hover:ring-2 hover:ring-accent-orange/50 transition"
          >
            <Image
              src={src}
              alt="Testimonial"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              unoptimized
            />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
              <span className="rounded-full bg-white/20 p-2">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </span>
            </span>
          </button>
        ))}
      </div>
      <TestimonialLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
