"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Portfolio() {
  return (
    <section id="work" className="relative py-28 md:py-40">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Selected work · 03</Eyebrow>
            <Reveal delay={0.1}>
              <h2 className="heading-display mt-5 text-4xl md:text-6xl">
                Recent <span className="italic text-gold-gradient">cases.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="#"
              className="group inline-flex items-center gap-2 text-sm text-ink-900/80 link-underline"
              data-cursor="hover"
            >
              View archive
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 3) * 0.08,
              }}
              className={layoutSpan(i)}
            >
              <ProjectCard project={p} tall={isTall(i)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function layoutSpan(i: number) {
  switch (i) {
    case 0:
      return "md:col-span-7";
    case 1:
      return "md:col-span-5";
    case 2:
      return "md:col-span-4";
    case 3:
      return "md:col-span-4";
    case 4:
      return "md:col-span-4";
    case 5:
      return "md:col-span-12";
    default:
      return "md:col-span-6";
  }
}

function isTall(i: number) {
  return i === 0 || i === 5;
}

function ProjectCard({
  project,
  tall,
}: {
  project: (typeof projects)[number];
  tall: boolean;
}) {
  return (
    <Link
      href="#"
      data-cursor="hover"
      className={`group relative block overflow-hidden rounded-[28px] border border-ink-900/8 bg-ink-900 ${
        tall ? "aspect-[16/11]" : "aspect-[4/3]"
      }`}
    >
      <Image
        src={project.cover}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover opacity-90 transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-7 text-cream-50">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-cream-50/15 bg-cream-50/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.28em] backdrop-blur">
            {project.year}
          </span>
          <motion.span
            className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/10 backdrop-blur"
            whileHover={{ rotate: 45, scale: 1.05 }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cream-50/65">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
