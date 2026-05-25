"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter, Github, Dribbble, Youtube } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const socials = [
  { Icon: Instagram, label: "Instagram", handle: "@lumen.studio", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", handle: "/company/lumen", href: "#" },
  { Icon: Twitter, label: "X", handle: "@lumenstudio", href: "#" },
  { Icon: Dribbble, label: "Dribbble", handle: "/lumen", href: "#" },
  { Icon: Github, label: "GitHub", handle: "/lumen-studio", href: "#" },
  { Icon: Youtube, label: "YouTube", handle: "@lumenstudio", href: "#" },
];

export function Socials() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-fluid">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Find us · 05</Eyebrow>
          <Reveal delay={0.08}>
            <h2 className="heading-display mt-5 text-4xl md:text-5xl">
              In the wild,
              <br />
              <span className="italic text-gold-gradient">in your feed.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map(({ Icon, label, handle, href }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <Link
                href={href}
                data-cursor="hover"
                className="group flex items-center justify-between rounded-3xl border border-ink-900/8 bg-white/60 px-6 py-5 transition-all duration-500 hover:border-gold-400/50 hover:bg-white"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-ink-900/10 transition-colors group-hover:bg-ink-900 group-hover:text-cream-50">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-display text-lg">{label}</p>
                    <p className="text-sm text-ink-900/55">{handle}</p>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-[0.28em] text-ink-900/40 transition-colors group-hover:text-gold-500">
                  Follow
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
