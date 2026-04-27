"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/getting-started", label: "Getting Started" },
  { href: "/curricula", label: "Curricula" },
  { href: "/enrollment", label: "Enrollment" },
  { href: "/staff-and-accreditation", label: "Staff & Accreditation" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[var(--color-rule)] bg-[var(--color-paper)]">
      <div className="bg-[var(--color-forest-deep)] text-white/90">
        <div className="mx-auto max-w-6xl px-6 py-1.5 text-[0.72rem] tracking-[0.18em] uppercase font-sans flex items-center justify-between">
          <span>Established 1977 · Authorized King James Version 1611</span>
          <span className="hidden sm:inline">508-966-0873 · Bellingham, MA</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-4 group">
          <Image
            src="/biu-logo.jpeg"
            alt="Baptist International University seal"
            width={64}
            height={64}
            className="rounded-full"
            priority
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[1.35rem] text-[var(--color-forest-deep)]">
              Baptist International University
            </span>
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-ink-muted)]">
              School of the Scriptures
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 font-sans text-[0.875rem]">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  active
                    ? "text-[var(--color-forest-deep)]"
                    : "text-[var(--color-ink-muted)] hover:text-[var(--color-forest-deep)]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--color-gold)]" />
                )}
              </Link>
            );
          })}
          <a
            href="https://bellinghambbc.com/give/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-forest)] text-[var(--color-forest-deep)] font-sans text-[0.8rem] tracking-[0.12em] uppercase hover:bg-[var(--color-forest)] hover:text-white transition-colors"
          >
            Donate
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-[var(--color-rule)]"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
            <path
              d="M0 1h18M0 7h18M0 13h18"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-rule)] bg-[var(--color-cream)]">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col font-sans text-sm">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 border-b border-[var(--color-rule)] last:border-0 text-[var(--color-ink)] hover:text-[var(--color-forest-deep)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://bellinghambbc.com/give/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center px-4 py-2 border border-[var(--color-forest)] text-[var(--color-forest-deep)] tracking-[0.12em] uppercase text-[0.8rem]"
            >
              Donate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
