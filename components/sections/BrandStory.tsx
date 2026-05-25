"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function BrandStory() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="container-fluid">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Story · 01</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="heading-display mt-5 text-4xl md:text-5xl lg:text-6xl">
                A studio born from the
                <br />
                <span className="italic text-gold-gradient">
                  same room.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={0.12}>
              <p className="font-display text-2xl leading-snug text-ink-900/85 md:text-3xl">
                We started in 2017 around one shared belief — that the best
                work happens when strategy, design and engineering sit in the
                same room from day one.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-ink-900/65">
                Eight years and a hundred and twenty launches later, that
                belief still holds. We've worked with founders building their
                first product and with public companies repositioning for the
                next era. The brief changes; the conviction doesn't. We do not
                outsource taste, we do not subcontract craft, and we do not
                staff a junior team behind a senior pitch.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-6 text-base leading-relaxed text-ink-900/65">
                Today, Lumen is a 22-person studio across Beirut, Dubai and
                remote, working in English, Arabic and French — with a small,
                deliberate roster of partners we get to know well and stay
                with for years.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
