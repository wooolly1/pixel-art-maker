"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { SplitText } from "@/components/ui/SplitText";
import { Magnetic } from "@/components/ui/Magnetic";
import { Marquee } from "@/components/ui/Marquee";

const tickerWords = [
  "Branding",
  "AI Solutions",
  "Web",
  "Identity",
  "Automation",
  "Mobile",
  "Campaigns",
  "UI / UX",
  "SEO",
  "Motion",
];

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(6px)"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden pt-32 grain"
    >
      <AuroraBackground />

      <div className="container-fluid relative z-10 flex min-h-[calc(100svh-8rem)] flex-col justify-between">
        <motion.div style={{ y, opacity, filter: blur }} className="pt-6 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="relative grid h-6 w-6 place-items-center">
              <span className="absolute inset-0 animate-pulse-glow rounded-full bg-rose-300/50 blur-md" />
              <Sparkles className="relative h-4 w-4 text-gold-500" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-ink-900/60">
              Lumen Studio · Est. 2017 · Beirut / Dubai
            </span>
          </motion.div>

          <h1 className="heading-display text-[clamp(3rem,11vw,11rem)] text-ink-900">
            <span className="block">
              <SplitText text="Designed" delay={1.8} />
              <span className="mx-3 inline-block align-middle">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="inline-block h-[2px] w-[clamp(60px,11vw,180px)] bg-gold-400 align-middle"
                />
              </span>
              <SplitText text="for" delay={2.1} />
            </span>
            <span className="block">
              <span className="italic text-gold-gradient">
                <SplitText text="what's next." delay={2.3} />
              </span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-10 md:grid-cols-12"
          >
            <p className="font-sans text-base text-ink-900/75 md:col-span-5 md:text-lg">
              We are a creative tech studio building brand systems, products and
              AI tooling for teams shaping tomorrow's category leaders.
            </p>

            <div className="md:col-span-7 md:flex md:items-end md:justify-end">
              <div className="flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Link
                    href="/services#contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink-900 px-6 py-4 text-cream-50 transition-all duration-500 hover:bg-ink-700"
                    data-cursor="hover"
                  >
                    <span className="text-sm">Start a project</span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-400 text-ink-900 transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Magnetic>
                <Magnetic strength={14}>
                  <Link
                    href="#work"
                    className="group inline-flex items-center gap-3 rounded-full border border-ink-900/15 bg-cream-50/40 px-6 py-4 text-sm text-ink-900 backdrop-blur transition-colors hover:bg-cream-50"
                    data-cursor="hover"
                  >
                    See the work
                    <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            { k: "Awwwards", v: "38 honors" },
            { k: "Practices", v: "10 services" },
            { k: "Languages", v: "EN / AR / FR" },
            { k: "Clients", v: "Global" },
          ].map((s) => (
            <div
              key={s.k}
              className="glass rounded-2xl px-5 py-4"
              data-cursor="hover"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-ink-900/55">
                {s.k}
              </p>
              <p className="mt-1 font-display text-lg text-ink-900">{s.v}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-y border-ink-900/10 bg-cream-100/70 py-5 backdrop-blur">
        <Marquee speed={50}>
          {tickerWords.map((w, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-display text-2xl tracking-tight text-ink-900/85 md:text-3xl">
                {w}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
