"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ServicesShowcase() {
  const featured = services.slice(0, 8);

  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Practices · 02</Eyebrow>
            <Reveal delay={0.1}>
              <h2 className="heading-display mt-5 text-4xl md:text-6xl">
                What we do, <span className="italic text-gold-gradient">end to end.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-3 text-sm text-ink-900 transition-all hover:bg-ink-900 hover:text-cream-50"
              data-cursor="hover"
            >
              All services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.06,
              }}
            >
              <ServiceCard service={s} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  const dark = index % 5 === 2;

  return (
    <Link
      href={`/services#${service.slug}`}
      data-cursor="hover"
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border p-7 transition-all duration-700 hover-lift ${
        dark
          ? "border-ink-700 bg-ink-900 text-cream-50"
          : "border-ink-900/8 bg-white/70 text-ink-900"
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full transition-all duration-700 group-hover:scale-125 ${
          dark ? "bg-gold-400/15 blur-2xl" : "bg-rose-200/40 blur-2xl"
        }`}
      />
      <div className="relative flex items-start justify-between">
        <div
          className={`grid h-12 w-12 place-items-center rounded-2xl border transition-transform duration-500 group-hover:-rotate-6 ${
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
          / {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-12">
        <h3 className="font-display text-2xl tracking-tight">
          {service.title}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${
            dark ? "text-cream-50/65" : "text-ink-900/65"
          }`}
        >
          {service.short}
        </p>
        <div
          className={`mt-6 flex items-center gap-2 text-sm font-medium ${
            dark ? "text-gold-300" : "text-ink-900"
          }`}
        >
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
        </div>
      </div>
    </Link>
  );
}
