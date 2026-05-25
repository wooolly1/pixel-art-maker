"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const go = (n: number) => setI((p) => (p + n + total) % total);

  return (
    <section className="relative py-28 md:py-40">
      <div className="container-fluid">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Voices · 04</Eyebrow>
            <Reveal delay={0.1}>
              <h2 className="heading-display mt-5 text-4xl md:text-5xl lg:text-6xl">
                What partners
                <br />
                <span className="italic text-gold-gradient">say.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-3">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous"
                  className="grid h-12 w-12 place-items-center rounded-full border border-ink-900/15 transition-all hover:bg-ink-900 hover:text-cream-50"
                  data-cursor="hover"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next"
                  className="grid h-12 w-12 place-items-center rounded-full border border-ink-900/15 transition-all hover:bg-ink-900 hover:text-cream-50"
                  data-cursor="hover"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="ml-4 text-sm text-ink-900/55 tabular-nums">
                  {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="relative md:col-span-8">
            <Quote
              aria-hidden
              className="absolute -left-2 -top-6 h-20 w-20 text-gold-400/40"
              strokeWidth={1}
            />
            <div className="relative min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-2xl leading-snug text-ink-900 md:text-3xl lg:text-[2.3rem]"
                >
                  "{testimonials[i].quote}"
                  <footer className="mt-10 flex items-center gap-4">
                    <div className="h-px w-12 bg-gold-400" />
                    <div>
                      <p className="text-base text-ink-900">
                        {testimonials[i].name}
                      </p>
                      <p className="text-sm text-ink-900/55">
                        {testimonials[i].title}
                      </p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
