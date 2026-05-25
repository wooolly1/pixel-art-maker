"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services & Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "container-fluid mt-4 transition-all duration-500",
          scrolled && "mt-2"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500",
            scrolled
              ? "border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(15,20,40,0.18)]"
              : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" className="group flex items-center gap-2">
            <LumenMark />
            <span className="font-display text-[18px] tracking-tight">
              Lumen
            </span>
            <span className="ml-1 hidden text-[10px] uppercase tracking-[0.32em] text-ink-900/50 sm:inline">
              · Studio
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    active
                      ? "text-ink-900"
                      : "text-ink-900/70 hover:text-ink-900"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-ink-900/[0.06]"
                    />
                  )}
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/services#contact"
              className="group hidden items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm text-cream-50 transition-all duration-300 hover:bg-ink-700 md:inline-flex"
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/15 bg-white/60 backdrop-blur md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="container-fluid mt-3 md:hidden"
          >
            <div className="glass rounded-3xl p-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-base",
                    pathname === l.href
                      ? "bg-ink-900 text-cream-50"
                      : "text-ink-900/80 hover:bg-ink-900/[0.05]"
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/services#contact"
                className="mt-1 flex items-center justify-between rounded-2xl bg-gold-400 px-4 py-3 text-cream-50"
              >
                <span>Start a project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function LumenMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className="text-ink-900"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lm" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#C9A876" />
          <stop offset="1" stopColor="#1A1D24" />
        </linearGradient>
      </defs>
      <circle cx="14" cy="14" r="13" fill="none" stroke="currentColor" strokeOpacity="0.18" />
      <circle cx="14" cy="14" r="6" fill="url(#lm)" />
      <circle cx="14" cy="14" r="9.5" fill="none" stroke="url(#lm)" strokeOpacity="0.5" />
    </svg>
  );
}
