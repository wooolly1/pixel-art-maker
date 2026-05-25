"use client";

import Image from "next/image";
import { team } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Team() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="container-fluid">
        <div className="mb-14 grid items-end gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Studio · 05</Eyebrow>
            <Reveal delay={0.08}>
              <h2 className="heading-display mt-5 text-4xl md:text-6xl">
                The people you'll
                <br />
                <span className="italic text-gold-gradient">work with.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <p className="max-w-md text-base text-ink-900/65 md:justify-self-end md:text-right">
              Twenty-two practitioners across strategy, brand, product, motion
              and machine learning — held together by a shared standard for
              the work.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <article
                data-cursor="hover"
                className="group relative overflow-hidden rounded-[28px] border border-ink-900/8 bg-white"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream-50">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-cream-50/70">
                    {m.role}
                  </p>
                  <h3 className="mt-1 font-display text-2xl tracking-tight">
                    {m.name}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
