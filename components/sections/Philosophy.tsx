"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const lines = [
  "We design for the next ten years, not the next ten weeks.",
  "Strategy without craft is bureaucracy. Craft without strategy is decoration.",
  "If a system can't be explained on a single page, it isn't a system yet.",
  "We use AI where it earns its place — and only there.",
  "We ship like a product team and care like a brand team.",
];

export function Philosophy() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative py-28 md:py-40">
      <div className="container-fluid">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Philosophy · 06</Eyebrow>
          <Reveal delay={0.08}>
            <h2 className="heading-display mt-5 text-4xl md:text-6xl">
              How we think
              <br />
              <span className="italic text-gold-gradient">about the work.</span>
            </h2>
          </Reveal>
        </div>

        <motion.ul style={{ y }} className="divide-y divide-ink-900/10">
          {lines.map((l, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <li
                data-cursor="hover"
                className="group flex items-baseline gap-8 py-8 transition-colors hover:text-gold-500"
              >
                <span className="font-display text-base text-ink-900/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-2xl tracking-tight md:text-4xl">
                  {l}
                </p>
              </li>
            </Reveal>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
