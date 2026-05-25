"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-fluid">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>FAQ · 03</Eyebrow>
            <Reveal delay={0.08}>
              <h2 className="heading-display mt-5 text-4xl md:text-5xl lg:text-6xl">
                Common
                <br />
                <span className="italic text-gold-gradient">questions.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-sm text-base text-ink-900/65">
                A short list. Anything else, ask us on the call — we don't
                hide behind boilerplate.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-ink-900/10 border-y border-ink-900/10">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      data-cursor="hover"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-start justify-between gap-6 py-7 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl text-ink-900 md:text-2xl">
                        {f.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition-colors group-hover:bg-ink-900 group-hover:text-cream-50"
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-7 pr-12 text-base leading-relaxed text-ink-900/70">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
