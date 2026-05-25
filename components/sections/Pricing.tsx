"use client";

import { Check } from "lucide-react";
import { pricing } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import Link from "next/link";

export function Pricing() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-fluid">
        <div className="mb-14 grid items-end gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Engagements · 02</Eyebrow>
            <Reveal delay={0.08}>
              <h2 className="heading-display mt-5 text-4xl md:text-6xl">
                Pick a starting point,
                <br />
                <span className="italic text-gold-gradient">we'll shape the rest.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <p className="max-w-md text-base text-ink-900/65 md:justify-self-end md:text-right">
              All prices in USD, billed in clear milestones. Every engagement
              starts with a structured discovery — never with a black box.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((p, i) => {
            const dark = p.accent === "ink";
            const popular = p.popular;
            return (
              <Reveal key={p.name} delay={i * 0.1}>
                <div
                  data-cursor="hover"
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border p-8 transition-all duration-500 hover-lift ${
                    dark
                      ? "border-ink-700 bg-ink-900 text-cream-50"
                      : popular
                        ? "border-gold-400/50 bg-white shadow-[0_30px_60px_-30px_rgba(201,168,118,0.45)]"
                        : "border-ink-900/8 bg-white/70"
                  }`}
                >
                  {popular && (
                    <span className="absolute right-6 top-6 rounded-full bg-gold-shine bg-[length:200%_100%] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-ink-900 animate-shine">
                      Most loved
                    </span>
                  )}

                  <p
                    className={`text-[11px] uppercase tracking-[0.32em] ${
                      dark ? "text-cream-50/55" : "text-ink-900/55"
                    }`}
                  >
                    {p.name}
                  </p>
                  <h3 className="mt-6 font-display text-5xl tracking-tight">
                    {p.price}
                  </h3>
                  <p
                    className={`mt-1 text-xs uppercase tracking-[0.28em] ${
                      dark ? "text-cream-50/55" : "text-ink-900/55"
                    }`}
                  >
                    {p.period}
                  </p>

                  <p
                    className={`mt-6 text-sm leading-relaxed ${
                      dark ? "text-cream-50/70" : "text-ink-900/70"
                    }`}
                  >
                    {p.description}
                  </p>

                  <ul className="mt-8 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full ${
                            dark
                              ? "bg-gold-400/15 text-gold-300"
                              : "bg-gold-100 text-gold-600"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        <span className={dark ? "text-cream-50/85" : "text-ink-900/80"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className={`mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition-all duration-500 ${
                      dark
                        ? "bg-gold-400 text-ink-900 hover:bg-gold-300"
                        : popular
                          ? "bg-ink-900 text-cream-50 hover:bg-ink-700"
                          : "border border-ink-900/15 text-ink-900 hover:bg-ink-900 hover:text-cream-50"
                    }`}
                  >
                    Start with {p.name}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
