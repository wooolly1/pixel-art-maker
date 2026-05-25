"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Github, Twitter } from "lucide-react";

const cols = [
  {
    title: "Studio",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/services#contact" },
    ],
  },
  {
    title: "Practices",
    links: [
      { label: "Branding & Identity", href: "/services#branding" },
      { label: "Website Development", href: "/services#web" },
      { label: "AI Solutions", href: "/services#ai" },
      { label: "Automation", href: "/services#automation" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@lumen.agency", href: "mailto:hello@lumen.agency" },
      { label: "+961 1 555 901", href: "tel:+9611555901" },
      { label: "Beirut · Dubai · Remote", href: "/about" },
    ],
  },
];

const socials = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Twitter, label: "X / Twitter", href: "#" },
  { Icon: Github, label: "GitHub", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative isolate mt-32 overflow-hidden bg-ink-900 text-cream-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full glow-gold opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[520px] w-[520px] rounded-full glow-rose opacity-30"
      />

      <div className="container-fluid relative z-10 pb-12 pt-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-cream-100/60">
              <span className="h-px w-8 bg-gold-400/70" /> The studio
            </p>
            <h2 className="heading-display mt-4 text-[clamp(2.6rem,6vw,5.4rem)] text-cream-50">
              Let's design what's
              <br />
              <span className="text-gold-gradient italic">next.</span>
            </h2>
            <Link
              href="/services#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-cream-100/20 bg-cream-100/[0.04] px-5 py-3 text-sm text-cream-50 transition-all duration-300 hover:bg-cream-100/10"
            >
              Start a project
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </div>

          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:max-w-2xl">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-[11px] uppercase tracking-[0.32em] text-cream-100/40">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="link-underline text-cream-50/90"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 h-px w-full divider-gold opacity-50" />

        <div className="mt-8 flex flex-col items-start justify-between gap-6 text-sm text-cream-100/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Lumen Studio. All rights reserved.</p>
          <p className="font-arabic text-base text-cream-50/80">
            استوديو لومن — تصميم وتطوير المستقبل.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-cream-100/15 transition-all duration-300 hover:bg-cream-100/10 hover:text-gold-300"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="container-fluid pointer-events-none select-none pb-2 text-[clamp(7rem,22vw,22rem)] leading-none tracking-tightest text-cream-50/[0.04] font-display"
      >
        Lumen.
      </div>
    </footer>
  );
}
