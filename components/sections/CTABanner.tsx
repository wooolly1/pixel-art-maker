"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

export function CTABanner() {
  const words = [
    "Branding",
    "AI",
    "Mobile",
    "Web",
    "Identity",
    "Automation",
    "Marketing",
    "UX",
  ];
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-fluid">
        <div className="relative isolate overflow-hidden rounded-[36px] bg-ink-900 text-cream-50">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 glow-gold opacity-50"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-0 h-[440px] w-[440px] glow-rose opacity-25"
          />

          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="grid items-end gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cream-50/55">
                  · Now booking Q3
                </p>
                <h2 className="heading-display mt-5 text-[clamp(2.4rem,7vw,5.5rem)]">
                  Ready when
                  <br />
                  <span className="italic text-gold-gradient">you are.</span>
                </h2>
              </div>
              <div className="md:col-span-5 md:flex md:items-end md:justify-end">
                <Link
                  href="#contact"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 rounded-full bg-gold-400 px-7 py-5 text-ink-900 transition-all duration-500 hover:bg-gold-300"
                >
                  <span>Start a project</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 text-cream-50"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </div>
            </div>

            <div className="mt-14 -mx-8 md:-mx-16">
              <Marquee speed={45}>
                {words.map((w, i) => (
                  <div key={i} className="flex items-center gap-10">
                    <span className="font-display text-4xl tracking-tight text-cream-50/85 md:text-5xl">
                      {w}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
