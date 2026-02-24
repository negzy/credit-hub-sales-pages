/**
 * Placeholder links — replace with your real URLs.
 *
 * Cal.com: use the path only (e.g. "username" or "username/event-type").
 * Booking pages: /book/capital-access, /book/credit-reset, /book/evolution
 */

export const LINKS = {
  premiumSkool: "https://www.skool.com/tch/plans",
  creditGpsQuiz: "/gps",
  capitalAccessDfy: "https://www.skool.com/tch/classroom/9401ae72?md=6400f844b13d4a70a399189a0037052b",
  creditResetDfy: "https://www.skool.com/tch/classroom/19f70a61?md=887988f68af94feba5373bf90071b10f",
  evolutionApply: "/evolution",
  contact: "https://www.skool.com/@nuelnelson",

  /** Full vault access — Skool classroom; after purchase, users unlock at /vault/unlock */
  vaultFullAccessSkool: "https://www.skool.com/tch/classroom/ab2591f9?md=e28a9bde72eb4b308c2b731c9631d554",

  /** Affiliates / partner program */
  affiliatesApply: "#",
  /** Skool community — affiliates get their invite link here */
  affiliatesSkool: "https://www.skool.com/tch",
  /** Affiliates countdown end (ISO date). Leave empty "" to hide countdown. */
  affiliatesCountdownEnd: "2025-04-15T23:59:59",

  /** Cal.com scheduler paths (username/event-type or full URL). Used for /book/* pages. */
  cal: {
    capitalAccess: "credithub/funding",
    creditReset: "credithub/credit",
    evolution: "credithub/evolution",
  },
} as const;
