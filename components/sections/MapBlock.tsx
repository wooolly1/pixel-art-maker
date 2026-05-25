"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const dots = [
  { x: 22, y: 38, label: "Beirut" },
  { x: 28, y: 50, label: "Dubai" },
  { x: 50, y: 30, label: "London" },
  { x: 18, y: 28, label: "New York" },
  { x: 78, y: 60, label: "Singapore" },
];

export function MapBlock() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-fluid">
        <div className="mb-12 grid items-end gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Where we work · 06</Eyebrow>
            <Reveal delay={0.08}>
              <h2 className="heading-display mt-5 text-4xl md:text-5xl">
                Two studios,
                <br />
                <span className="italic text-gold-gradient">one network.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <p className="max-w-md text-base text-ink-900/65 md:justify-self-end md:text-right">
              Beirut and Dubai are home. The clients are everywhere. We've
              shipped work across 14 countries.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="relative isolate overflow-hidden rounded-[32px] border border-ink-900/8 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 glow-rose opacity-50"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] glow-gold opacity-40"
            />

            <div className="relative aspect-[16/9] w-full">
              <svg
                viewBox="0 0 100 60"
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 h-full w-full"
                aria-hidden
              >
                <defs>
                  <pattern
                    id="dotmap"
                    width="1.5"
                    height="1.5"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="0.4" cy="0.4" r="0.18" fill="rgba(15,20,40,0.18)" />
                  </pattern>
                  <mask id="continents">
                    <rect width="100" height="60" fill="black" />
                    <ellipse cx="20" cy="30" rx="14" ry="10" fill="white" />
                    <ellipse cx="50" cy="22" rx="10" ry="9" fill="white" />
                    <ellipse cx="55" cy="42" rx="8" ry="7" fill="white" />
                    <ellipse cx="78" cy="32" rx="10" ry="8" fill="white" />
                    <ellipse cx="82" cy="50" rx="6" ry="5" fill="white" />
                  </mask>
                </defs>
                <rect
                  width="100"
                  height="60"
                  fill="url(#dotmap)"
                  mask="url(#continents)"
                />
              </svg>

              {dots.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${d.x}%`, top: `${d.y}%` }}
                >
                  <span className="relative grid place-items-center">
                    <span className="absolute h-8 w-8 animate-ping rounded-full bg-gold-400/30" />
                    <span className="relative h-3 w-3 rounded-full bg-gold-400 ring-4 ring-gold-100" />
                  </span>
                  <span className="absolute left-5 top-1 whitespace-nowrap rounded-full bg-ink-900/85 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-cream-50 backdrop-blur">
                    {d.label}
                  </span>
                </motion.div>
              ))}

              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-ink-900/80 px-4 py-2 text-cream-50 backdrop-blur">
                <MapPin className="h-4 w-4 text-gold-300" />
                <span className="text-xs uppercase tracking-[0.28em]">
                  HQ · Mar Mikhael, Beirut
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
