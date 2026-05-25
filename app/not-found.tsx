import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center pt-32">
      <div className="container-fluid text-center">
        <p className="eyebrow justify-center">
          <span className="h-px w-10 bg-gold-400" /> 404
        </p>
        <h1 className="heading-display mt-6 text-[clamp(3rem,12vw,9rem)]">
          Lost in <span className="italic text-gold-gradient">transit.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base text-ink-900/65">
          The page you're looking for isn't here. Let's get you back to the
          studio.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink-900 px-6 py-4 text-cream-50 transition-all duration-500 hover:bg-ink-700"
        >
          Return home
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </Link>
      </div>
    </section>
  );
}
