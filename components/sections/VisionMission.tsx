"use client";

import { Compass, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const cards = [
  {
    icon: Compass,
    label: "Vision",
    title: "A future where brands feel as crafted as their products.",
    body: "We imagine a market where category leaders are recognized not by the loudest message, but by the precision of their identity — visual, verbal, and interactive.",
  },
  {
    icon: Target,
    label: "Mission",
    title: "Translate ambition into work that ages well.",
    body: "To partner with a small number of teams each year and help them ship the brand, the product, and the AI layer they would be proud of in a decade.",
  },
];

export function VisionMission() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-fluid">
        <div className="mb-14 max-w-2xl">
          <Eyebrow>Compass · 02</Eyebrow>
          <Reveal delay={0.08}>
            <h2 className="heading-display mt-5 text-4xl md:text-6xl">
              Where we look,
              <br />
              <span className="italic text-gold-gradient">where we go.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const dark = i === 1;
            return (
              <Reveal key={c.label} delay={i * 0.1}>
                <div
                  className={`relative h-full overflow-hidden rounded-[32px] border p-10 ${
                    dark
                      ? "border-ink-700 bg-ink-900 text-cream-50"
                      : "border-ink-900/8 bg-white/70 text-ink-900"
                  }`}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full ${
                      dark ? "glow-gold opacity-40" : "glow-rose opacity-50"
                    }`}
                  />
                  <div className="relative">
                    <div
                      className={`mb-8 grid h-12 w-12 place-items-center rounded-2xl border ${
                        dark
                          ? "border-cream-50/15 bg-cream-50/[0.04]"
                          : "border-ink-900/10 bg-ink-900/[0.03]"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          dark ? "text-gold-300" : "text-ink-900"
                        }`}
                        strokeWidth={1.4}
                      />
                    </div>
                    <p
                      className={`text-[11px] uppercase tracking-[0.32em] ${
                        dark ? "text-cream-50/55" : "text-ink-900/55"
                      }`}
                    >
                      {c.label}
                    </p>
                    <h3 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                      {c.title}
                    </h3>
                    <p
                      className={`mt-6 max-w-xl text-base leading-relaxed ${
                        dark ? "text-cream-50/70" : "text-ink-900/65"
                      }`}
                    >
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
