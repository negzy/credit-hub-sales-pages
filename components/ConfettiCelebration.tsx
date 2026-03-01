"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

function fireConfetti(options: { size?: "big" | "small" } = {}) {
  if (typeof window === "undefined") return;
  import("canvas-confetti").then(({ default: confetti }) => {
    const count = options.size === "big" ? 120 : 35;
    const defaults = { origin: { y: 0.75 }, zIndex: 9999 };
    confetti({ ...defaults, particleCount: count, spread: options.size === "big" ? 80 : 60 });
    if (options.size === "big") {
      confetti({ ...defaults, particleCount: count * 0.6, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ ...defaults, particleCount: count * 0.6, angle: 120, spread: 55, origin: { x: 1 } });
    }
  });
}

export default function ConfettiCelebration() {
  const pathname = usePathname();
  const isTestimonials = pathname === "/testimonials";
  const scrollMilestones = useRef(new Set<number>());
  const raf = useRef<number | null>(null);

  const checkScroll = useCallback(() => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    if (scrollHeight <= 0) return;
    const pct = Math.round((scrollTop / scrollHeight) * 100);
    const steps = [25, 50, 75, 100];
    for (const step of steps) {
      if (pct >= step && !scrollMilestones.current.has(step)) {
        scrollMilestones.current.add(step);
        fireConfetti({ size: "small" });
      }
    }
  }, []);

  useEffect(() => {
    if (isTestimonials) {
      fireConfetti({ size: "big" });
    } else {
      fireConfetti({ size: "small" });
    }
  }, [pathname, isTestimonials]);

  useEffect(() => {
    if (!isTestimonials) return;
    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(checkScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isTestimonials, checkScroll]);

  return null;
}
