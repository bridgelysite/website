"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/creation-societe-pologne", label: "Société en Pologne" },
  { href: "/llc-usa", label: "LLC aux USA" },
  { href: "/packs-digitaux", label: "Packs & Guides" }, // Changed from single pack to general packs page
  { href: "/consulting-international", label: "Consulting" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-slate-200">
      <nav className="container-bridgely flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[color:var(--color-primary)] flex items-center justify-center text-white text-xs font-bold">
            B
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-900">Bridgely</span>
            <span className="text-[11px] uppercase tracking-wide text-slate-500">
              Europe & USA
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${
                pathname === item.href
                  ? "text-[color:var(--color-primary)]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/consulting-international" className="btn-primary text-sm">
            Parler à un expert
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/consulting-international"
            className="btn-primary text-xs px-4 py-2 h-auto"
          >
            Expert
          </Link>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="text-lg">☰</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-bridgely py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm font-medium ${
                  pathname === item.href
                    ? "text-[color:var(--color-primary)]"
                    : "text-slate-700"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* The main CTA is now in the navbar, but we can keep it here or remove it. 
                The user said "visible immédiatement pas caché". Since it's visible above, 
                we could remove it here to avoid duplication, or keep it for clarity. 
                I'll keep it as a secondary larger button. */}
            <Link
              href="/consulting-international"
              className="btn-primary text-center w-full text-sm mt-2"
              onClick={() => setOpen(false)}
            >
              Parler à un expert
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
