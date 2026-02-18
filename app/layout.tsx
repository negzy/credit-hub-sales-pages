import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "The Credit Hub — Learn. Fix. Fund. Build.",
  description:
    "Learn the system. Fix your credit. Secure capital. Build the machine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-surface-dark">
      <body className="min-h-screen font-sans noise-overlay grid-pattern">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
