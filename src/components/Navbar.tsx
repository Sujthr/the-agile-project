"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/videos", label: "Videos" },
  { href: "/qa", label: "Q&A" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <span className="inline-flex w-8 h-8 rounded-lg bg-primary text-white items-center justify-center text-sm font-black">
            AP
          </span>
          The Agile Project
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-600"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white animate-fade-in">
          <ul className="flex flex-col px-6 py-4 gap-1 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 px-3 rounded-lg transition-colors hover:text-primary hover:bg-primary/5 ${
                    isActive(link.href)
                      ? "text-primary bg-primary/5 font-semibold"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
