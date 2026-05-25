"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-fluid">
        <div className="relative isolate overflow-hidden rounded-[36px] border border-ink-900/8 bg-cream-50 p-10 md:p-20">
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="pointer-events-none absolute -left-20 -top-20 h-[420px] w-[420px] glow-rose"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="pointer-events-none absolute -bottom-24 -right-12 h-[440px] w-[440px] glow-gold"
          />

          <div className="relative grid items-end gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">Next step</p>
              <Reveal delay={0.05}>
                <h2 className="heading-display mt-5 text-[clamp(2.4rem,6vw,5rem)]">
                  Have a brief, an idea or
                  <br />
                  <span className="italic text-gold-gradient">a deadline?</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="flex flex-col items-start gap-6 md:items-end">
                <p className="max-w-md text-base text-ink-900/65 md:text-right">
                  We respond within one working day with a tailored plan, a
                  realistic timeline, and a transparent quote.
                </p>
                <Magnetic>
                  <Link
                    href="/services#contact"
                    data-cursor="hover"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink-900 px-7 py-5 text-cream-50 transition-all duration-500 hover:bg-ink-700"
                  >
                    <span>Start a project</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-400 text-ink-900 transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
