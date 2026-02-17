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

  /** Cal.com scheduler paths (username/event-type or full URL). Used for /book/* pages. */
  cal: {
    capitalAccess: "credithub/funding",
    creditReset: "credithub/credit",
    evolution: "credithub/evolution",
  },
} as const;
