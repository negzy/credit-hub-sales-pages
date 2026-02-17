import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          orange: "#ff7a00",
          "orange-dim": "#e66d00",
          "orange-glow": "rgba(255, 122, 0, 0.35)",
        },
        surface: {
          dark: "#0A0A0B",
          "capital-access": "#0B0B0F",
          card: "#141416",
          border: "#27272a",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "gradient-dark": "linear-gradient(180deg, #0A0A0B 0%, #111113 50%, #0A0A0B 100%)",
      },
      boxShadow: {
        "glow-orange": "0 0 60px rgba(255, 122, 0, 0.15)",
        "glow-orange-sm": "0 0 30px rgba(255, 122, 0, 0.1)",
        "glow-border": "0 0 0 1px rgba(255, 122, 0, 0.4), 0 0 24px rgba(255, 122, 0, 0.12)",
        "glow-button": "0 0 32px rgba(255, 122, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
