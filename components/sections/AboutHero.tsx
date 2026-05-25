"use client";

import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { SplitText } from "@/components/ui/SplitText";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[80svh] overflow-hidden pt-40 grain">
      <AuroraBackground />

      <div className="container-fluid relative z-10 flex min-h-[60svh] flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="eyebrow"
        >
          <span className="h-px w-10 bg-gold-400" /> About the studio
        </motion.p>

        <h1 className="heading-display mt-6 text-[clamp(2.8rem,11vw,11rem)]">
          <span className="block">
            <SplitText text="We make brands" delay={1.85} />
          </span>
          <span className="block">
            <span className="italic text-gold-gradient">
              <SplitText text="feel inevitable." delay={2.2} />
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.9 }}
          className="mt-10 max-w-2xl font-display text-xl text-ink-900/75 md:text-2xl"
        >
          Lumen is a 22-person studio of designers, engineers, strategists and
          ML researchers — building the brands and products that shape the next
          decade of consumer and B2B technology.
        </motion.p>
      </div>
    </section>
  );
}
