import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

export function Eyebrow({ children, className, align = "left", variant = "light" }: Props) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em]",
        variant === "light" ? "text-ink-900/60" : "text-cream-50/60",
        align === "center" && "justify-center",
        className
      )}
    >
      <span className="h-px w-10 bg-gold-400/70" />
      {children}
    </p>
  );
}
