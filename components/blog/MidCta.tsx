import Link from "next/link";
import { cn } from "@/lib/utils";

interface MidCtaProps {
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function MidCta({
  title = "Pay global contractors without FX losses.",
  buttonText = "Book a 15-min demo →",
  buttonHref = "/demo",
  className,
}: MidCtaProps) {
  return (
    <div
      className={cn(
        "my-10 rounded-2xl border border-[var(--sr-border)] p-5 flex flex-col md:flex-row gap-4 bg-[var(--sr-surface)]",
        className
      )}
    >
      <div className="text-lg font-semibold text-[var(--sr-text)]">
        {title}
      </div>
      <Link
        href={buttonHref}
        className="ml-auto inline-flex items-center rounded-xl px-4 py-2 font-medium hover:opacity-90 transition-opacity duration-200"
        style={{ background: "var(--sr-accent)", color: "var(--sr-accent-ink)" }}
      >
        {buttonText}
      </Link>
    </div>
  );
}
