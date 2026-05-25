"use client";

import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { SplitText } from "@/components/ui/SplitText";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden pt-40 grain">
      <AuroraBackground />

      <div className="container-fluid relative z-10 flex min-h-[58svh] flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="eyebrow"
        >
          <span className="h-px w-10 bg-gold-400" /> Services & Contact
        </motion.p>

        <h1 className="heading-display mt-6 text-[clamp(2.8rem,11vw,11rem)]">
          <span className="block">
            <SplitText text="Ten practices," delay={1.85} />
          </span>
          <span className="block">
            <span className="italic text-gold-gradient">
              <SplitText text="one studio." delay={2.2} />
            </span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.9 }}
          className="mt-10 grid gap-8 md:grid-cols-12"
        >
          <p className="font-display text-xl text-ink-900/75 md:col-span-6 md:text-2xl">
            From brand and identity to product, mobile, performance and AI —
            built by senior teams, billed transparently, shipped together.
          </p>
          <div className="md:col-span-5 md:col-start-8 md:flex md:items-end">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-ink-900 px-6 py-4 text-cream-50 transition-all duration-500 hover:bg-ink-700"
              data-cursor="hover"
            >
              <span className="text-sm">Skip to contact</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
