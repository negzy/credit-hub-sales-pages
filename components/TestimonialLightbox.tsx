"use client";

import { useEffect, useCallback, useState } from "react";

type Props = {
  src: string | null;
  onClose: () => void;
};

export default function TestimonialLightbox({ src, onClose }: Props) {
  const [zoomed, setZoomed] = useState(false);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!src) return;
    setZoomed(false);
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [src, handleKey]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="View testimonial"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
        aria-label="Close"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setZoomed((z) => !z);
        }}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-10 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
        aria-label={zoomed ? "Zoom out" : "Zoom in"}
      >
        {zoomed ? "Zoom out" : "Zoom in"}
      </button>

      <div
        className="flex items-center justify-center max-w-[95vw] max-h-[85vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Testimonial"
          className={`max-h-[85vh] w-auto object-contain transition-transform duration-200 ${
            zoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setZoomed((z) => !z)}
          draggable={false}
        />
      </div>
    </div>
  );
}
