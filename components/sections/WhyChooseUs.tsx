"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Award, Layers, Users, Cpu, Sparkles, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "End-to-end ownership",
    body: "From strategy to launch to the 90 days after — one studio, one accountable team.",
  },
  {
    icon: Users,
    title: "Senior-only teams",
    body: "Average 9 years of practice. The people who pitch you are the people who ship.",
  },
  {
    icon: Cpu,
    title: "AI built-in",
    body: "Our own ML team partners on every engagement — for content, ops, and product.",
  },
  {
    icon: Award,
    title: "Awarded craft",
    body: "38 Awwwards, FWA and Communication Arts honors across brand, web and motion.",
  },
  {
    icon: Sparkles,
    title: "Bilingual by default",
    body: "Identity systems and interfaces designed for Arabic and English in parallel.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    body: "Performance, accessibility and longevity baked into every system we ship.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-fluid">
        <div className="mb-14 grid items-end gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Why Lumen · 03</Eyebrow>
            <Reveal delay={0.08}>
              <h2 className="heading-display mt-5 text-4xl md:text-6xl">
                Six reasons teams
                <br />
                <span className="italic text-gold-gradient">keep choosing us.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <p className="max-w-md text-base text-ink-900/65 md:justify-self-end md:text-right">
              We don't pitch on price and we don't compete on volume. We
              compete on the work, the partnership, and the standard of the
              outcome.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 0.06}>
                <div
                  data-cursor="hover"
                  className="group relative h-full overflow-hidden rounded-3xl border border-ink-900/8 bg-white/70 p-7 transition-all duration-500 hover:border-gold-400/40 hover:bg-white"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-100/0 transition-all duration-500 group-hover:bg-rose-100/60 group-hover:blur-2xl"
                  />
                  <div className="relative">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-ink-900/10 bg-ink-900/[0.02]">
                      <Icon className="h-5 w-5 text-ink-900" strokeWidth={1.4} />
                    </div>
                    <h3 className="mt-6 font-display text-xl">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                      {r.body}
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
