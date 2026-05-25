"use client";

import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-fluid">
        <div className="mb-14 max-w-2xl">
          <Eyebrow>Detailed services · 01</Eyebrow>
          <Reveal delay={0.08}>
            <h2 className="heading-display mt-5 text-4xl md:text-6xl">
              All ten,
              <br />
              <span className="italic text-gold-gradient">deep dives.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            const dark = i % 4 === 3;
            return (
              <Reveal key={s.slug} delay={(i % 4) * 0.06}>
                <article
                  id={s.slug}
                  data-cursor="hover"
                  className={`group relative h-full overflow-hidden rounded-[28px] border p-8 transition-all duration-500 hover-lift ${
                    dark
                      ? "border-ink-700 bg-ink-900 text-cream-50"
                      : "border-ink-900/8 bg-white/70 text-ink-900"
                  }`}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full transition-all duration-700 group-hover:scale-125 ${
                      dark ? "glow-gold opacity-30" : "glow-rose opacity-40"
                    }`}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div
                        className={`grid h-12 w-12 place-items-center rounded-2xl border ${
                          dark
                            ? "border-cream-50/15 bg-cream-50/[0.04]"
                            : "border-ink-900/10 bg-ink-900/[0.03]"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${dark ? "text-gold-300" : "text-ink-900"}`}
                          strokeWidth={1.4}
                        />
                      </div>
                      <span
                        className={`text-[10px] uppercase tracking-[0.28em] ${
                          dark ? "text-cream-50/40" : "text-ink-900/40"
                        }`}
                      >
                        / {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-8 font-display text-3xl tracking-tight md:text-4xl">
                      {s.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-md text-base leading-relaxed ${
                        dark ? "text-cream-50/70" : "text-ink-900/70"
                      }`}
                    >
                      {s.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className={`rounded-full border px-3 py-1 text-xs ${
                            dark
                              ? "border-cream-50/15 text-cream-50/80"
                              : "border-ink-900/10 text-ink-900/70"
                          }`}
                        >
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex items-center justify-between">
                      <span
                        className={`text-sm ${
                          dark ? "text-gold-300" : "text-ink-900/70"
                        }`}
                      >
                        Engage this practice
                      </span>
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${
                          dark
                            ? "bg-cream-50/10 text-cream-50"
                            : "bg-ink-900/[0.05] text-ink-900"
                        }`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
