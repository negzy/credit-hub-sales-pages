import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm text-gray-600">
          Built for people who are ready to move. We’re here when you are.
        </p>
        <Link
          href="#"
          className="mt-4 inline-block text-sm font-medium text-accent-red hover:text-accent-red-dark focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
        >
          Get in touch
        </Link>
      </div>
    </footer>
  );
}
