"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-nav-bg text-nav-text">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="border border-white px-2 py-1 text-xs font-bold leading-tight tracking-wider">
            BBBC
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
          >
            Home
          </Link>
          <Link
            href="/episodes"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
          >
            Episodes
          </Link>
          <Link
            href="/about"
            className="text-sm tracking-wide transition-opacity hover:opacity-70"
          >
            About
          </Link>
        </div>

        {/* Search Icon (decorative for now) */}
        <div className="hidden md:block">
          <svg
            className="h-5 w-5 text-white opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 px-6 pb-4 md:hidden">
          <Link
            href="/"
            className="block py-3 text-sm tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/episodes"
            className="block py-3 text-sm tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            Episodes
          </Link>
          <Link
            href="/about"
            className="block py-3 text-sm tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
