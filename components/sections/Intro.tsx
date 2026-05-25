"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Intro() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative py-32 md:py-44">
      <div className="container-fluid relative">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Studio · 01</Eyebrow>
            <Reveal delay={0.1}>
              <h2 className="heading-display mt-6 text-4xl md:text-5xl lg:text-6xl">
                A studio of
                <br />
                <span className="italic text-gold-gradient">
                  designers, engineers
                </span>
                <br />
                and strategists.
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={0.15}>
              <p className="font-display text-2xl leading-snug text-ink-900/85 md:text-3xl lg:text-[2.2rem]">
                Lumen is the studio that ambitious teams come to when they want
                their next chapter to feel inevitable —{" "}
                <span className="italic text-ink-900/55">
                  the brand obvious in hindsight, the product clearly the future.
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {[
                  {
                    n: "01",
                    t: "Brand, product & AI under one roof",
                    d: "No handoff loss. Strategy, design, engineering and ML in the same room, on the same Friday.",
                  },
                  {
                    n: "02",
                    t: "Senior-only project teams",
                    d: "You work with the people who pitched you. We staff lean and we stay accountable.",
                  },
                ].map((b) => (
                  <div key={b.n} className="group relative">
                    <span className="font-display text-5xl text-gold-400/60">
                      {b.n}
                    </span>
                    <h3 className="mt-3 font-display text-xl text-ink-900">
                      {b.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                      {b.d}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <motion.div
          style={{ y }}
          aria-hidden
          className="pointer-events-none absolute -right-20 top-10 hidden md:block"
        >
          <div className="h-72 w-72 rounded-full glow-rose" />
        </motion.div>
      </div>
    </section>
  );
}
