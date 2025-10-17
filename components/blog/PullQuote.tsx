import { cn } from "@/lib/utils";

interface PullQuoteProps {
  children: React.ReactNode;
  cite?: string;
  className?: string;
}

export function PullQuote({ children, cite, className }: PullQuoteProps) {
  return (
    <blockquote
      className={cn(
        "border-l-2 border-[var(--sr-accent)] pl-4 italic text-[var(--sr-text)] my-6",
        className
      )}
    >
      <p className="text-[17px] leading-7">
        {children}
      </p>
      {cite && (
        <cite className="block mt-3 text-sm not-italic text-[var(--sr-muted)] font-medium">
          — {cite}
        </cite>
      )}
    </blockquote>
  );
}
