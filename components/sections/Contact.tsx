"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const services = [
  "Branding",
  "Web",
  "Mobile",
  "UI/UX",
  "Marketing",
  "AI / Automation",
];

const budgets = ["< $10k", "$10k – $40k", "$40k – $100k", "$100k +"];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [selServices, setSelServices] = useState<string[]>(["Branding"]);
  const [budget, setBudget] = useState(budgets[1]);
  const [sent, setSent] = useState(false);

  const toggleService = (s: string) =>
    setSelServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", company: "", message: "" });
    }, 3500);
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-20 h-[420px] w-[420px] glow-rose opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-[420px] w-[420px] glow-gold opacity-40"
      />

      <div className="container-fluid relative">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Contact · 04</Eyebrow>
            <Reveal delay={0.08}>
              <h2 className="heading-display mt-5 text-4xl md:text-5xl lg:text-6xl">
                Tell us
                <br />
                <span className="italic text-gold-gradient">about it.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base text-ink-900/65">
                One thoughtful message goes a long way. We respond within one
                working day with a tailored plan.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-10 space-y-4">
                <li className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-ink-900/10 bg-white/70">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a
                    href="mailto:hello@lumen.agency"
                    className="link-underline text-base"
                  >
                    hello@lumen.agency
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-ink-900/10 bg-white/70">
                    <Phone className="h-4 w-4" />
                  </span>
                  <a href="tel:+9611555901" className="link-underline text-base">
                    +961 1 555 901
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-ink-900/10 bg-white/70">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-base">
                    Mar Mikhael · Beirut · Lebanon
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form
              onSubmit={onSubmit}
              className="relative md:col-span-7 md:col-start-6"
            >
              <div className="glass rounded-[28px] p-6 md:p-10">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                  <div className="md:col-span-2">
                    <Field
                      label="Company / Brand"
                      value={form.company}
                      onChange={(v) => setForm({ ...form, company: v })}
                    />
                  </div>
                </div>

                <div className="mt-7">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-ink-900/55">
                    What do you need?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => {
                      const active = selServices.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          data-cursor="hover"
                          className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                            active
                              ? "border-ink-900 bg-ink-900 text-cream-50"
                              : "border-ink-900/15 text-ink-900 hover:border-ink-900/40"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-7">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-ink-900/55">
                    Budget
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => {
                      const active = budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          data-cursor="hover"
                          className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                            active
                              ? "border-gold-400 bg-gold-100 text-ink-900"
                              : "border-ink-900/15 text-ink-900 hover:border-ink-900/40"
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-7">
                  <label className="block">
                    <span className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-ink-900/55">
                      Tell us about the project
                    </span>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      required
                      placeholder="A few sentences on context, goals and timeline."
                      className="w-full resize-none rounded-2xl border border-ink-900/10 bg-white/60 px-4 py-3 text-base text-ink-900 outline-none transition-all focus:border-gold-400 focus:bg-white"
                    />
                  </label>
                </div>

                <div className="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                  <p className="text-xs text-ink-900/55">
                    By submitting you agree to our quiet, no-spam privacy
                    practice.
                  </p>
                  <button
                    type="submit"
                    data-cursor="hover"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink-900 px-6 py-4 text-cream-50 transition-all duration-500 hover:bg-ink-700"
                  >
                    <span className="text-sm">Send brief</span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-400 text-ink-900 transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 grid place-items-center rounded-[28px] bg-cream-50/95 backdrop-blur"
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-gold-100 text-gold-600">
                        <Check className="h-6 w-6" strokeWidth={2} />
                      </span>
                      <p className="font-display text-3xl">Brief received.</p>
                      <p className="max-w-xs text-sm text-ink-900/65">
                        We'll reply within one working day from
                        hello@lumen.agency.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-ink-900/55">
        {label}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-ink-900/10 bg-white/60 px-4 py-3 text-base text-ink-900 outline-none transition-all focus:border-gold-400 focus:bg-white"
      />
    </label>
  );
}
