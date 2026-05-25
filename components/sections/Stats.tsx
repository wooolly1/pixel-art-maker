"use client";

import { stats } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 py-24 text-cream-50 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] glow-gold opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[480px] w-[480px] glow-rose opacity-30"
      />

      <div className="container-fluid relative">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-l border-cream-50/15 px-6 md:first:border-l-0">
                <p className="font-display text-[clamp(3rem,8vw,6rem)] leading-none tracking-tight text-cream-50">
                  <span className="text-gold-gradient">
                    <Counter value={s.value} />
                  </span>
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.32em] text-cream-50/55">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
