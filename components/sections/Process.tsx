"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 py-28 text-cream-50 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[480px] w-[480px] glow-gold opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[440px] w-[440px] glow-rose opacity-25"
      />

      <div className="container-fluid relative">
        <div className="mb-16 max-w-2xl">
          <Eyebrow variant="dark">Process · 04</Eyebrow>
          <Reveal delay={0.08}>
            <h2 className="heading-display mt-5 text-4xl md:text-6xl">
              From brief to
              <br />
              <span className="italic text-gold-gradient">compounding outcomes.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-gold-400/60 via-cream-50/15 to-transparent md:left-1/2 md:block"
          />
          <ol className="space-y-10">
            {process.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <li key={p.step}>
                  <Reveal delay={i * 0.08}>
                    <div
                      className={`grid items-start gap-6 md:grid-cols-2 ${
                        left ? "" : "md:[direction:rtl]"
                      }`}
                    >
                      <div className="md:[direction:ltr]">
                        <div className="relative flex items-center gap-4">
                          <motion.span
                            whileInView={{ scale: [0, 1] }}
                            transition={{
                              duration: 0.7,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            viewport={{ once: true }}
                            className="grid h-12 w-12 place-items-center rounded-full bg-gold-400 font-display text-ink-900"
                          >
                            {p.step}
                          </motion.span>
                          <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                            {p.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-base leading-relaxed text-cream-50/70 md:[direction:ltr] md:max-w-md">
                        {p.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
