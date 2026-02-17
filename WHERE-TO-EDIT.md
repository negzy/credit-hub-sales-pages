# Where to Edit Your Credit Hub Site

Your project lives at: **Desktop → Credit-hub-sales-pages**

---

## Folder structure (what you need)

```
Credit-hub-sales-pages/
├── app/
│   ├── globals.css      ← Site-wide styles (colors, fonts, background)
│   ├── layout.tsx       ← Page wrapper, metadata (title, description)
│   └── page.tsx         ← Main page order + FAQ content
│
├── components/
│   ├── Nav.tsx              ← Top navigation bar
│   ├── Hero.tsx             ← Hero section + “Jump to section” buttons
│   ├── PremiumSection.tsx   ← Premium ($97/mo) section
│   ├── CapitalAccessSection.tsx  ← Capital Access DFY section
│   ├── CreditResetSection.tsx    ← Credit Reset DFY section
│   ├── EvolutionSection.tsx      ← Evolution section
│   ├── HowItWorks.tsx        ← “How it works” steps
│   ├── Differentiators.tsx  ← “What makes this different”
│   ├── FAQAccordion.tsx     ← FAQ accordion (questions open/close)
│   ├── FinalCTA.tsx        ← Final call-to-action section
│   ├── PathCards.tsx       ← “Choose your path” cards (not on main flow now)
│   ├── TypeformEmbed.tsx   ← Typeform embed (used on /gps, /evolution)
│   ├── CalEmbed.tsx        ← Cal.com scheduler embed (used on /book/*)
│   └── icons.tsx           ← SVG icons used in components
│
├── app/book/               ← Cal.com booking pages
│   ├── capital-access/     ← /book/capital-access
│   ├── credit-reset/       ← /book/credit-reset
│   └── evolution/          ← /book/evolution
│
├── lib/
│   └── links.ts            ← All button links (edit this to add your URLs)
│
├── tailwind.config.ts      ← Colors, shadows, theme
├── package.json            ← Dependencies and scripts
├── next.config.js          ← Next.js config
└── WHERE-TO-EDIT.md        ← This file
```

**Ignore:** `.next` (build output) and `node_modules` (dependencies). You don’t need to edit those.

---

## How to open the project in Cursor

1. **File → Open Folder** (or **File → Open…** on Mac).
2. Go to **Desktop**.
3. Select the **Credit-hub-sales-pages** folder and click **Open**.

You should then see the `app`, `components`, and `lib` folders in the sidebar.

---

## Quick reference: what to edit

| To change… | Open this file |
|------------|----------------|
| Button links (Skool, Cal.com, etc.) | `lib/links.ts` |
| Cal.com scheduler paths (for /book/* pages) | `lib/links.ts` → `LINKS.cal` |
| Hero headline, subtitle, trust line | `components/Hero.tsx` |
| Credit Reset DFY content | `components/CreditResetSection.tsx` |
| Capital Access DFY content | `components/CapitalAccessSection.tsx` |
| Premium content | `components/PremiumSection.tsx` |
| Evolution content | `components/EvolutionSection.tsx` |
| FAQ questions and answers | `app/page.tsx` (search for `FAQ_ITEMS`) |
| Top nav links | `components/Nav.tsx` |
| Section order on the page | `app/page.tsx` |
| Orange color / global styles | `tailwind.config.ts` and `app/globals.css` |

---

## If you don’t see the sidebar

- **View → Explorer** (or press `Ctrl+Shift+E` on Windows/Linux, `Cmd+Shift+E` on Mac) to show the file list.
- Click the folder icon at the top of the sidebar to browse files.
