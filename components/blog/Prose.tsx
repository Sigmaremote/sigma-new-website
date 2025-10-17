import { cn } from "@/lib/utils";

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none",
        "prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[var(--sr-text)]",
        "prose-h1:text-4xl prose-h1:tracking-tight prose-h1:mb-3",
        "prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl",
        "prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl",
        "prose-p:text-[17px] prose-p:leading-7 prose-p:text-[var(--sr-text)]",
        "prose-a:text-[var(--sr-accent)] prose-a:no-underline hover:prose-a:underline",
        "prose-strong:text-[var(--sr-text)] prose-strong:font-semibold",
        "prose-ul:my-3 prose-ol:my-3",
        "prose-li:my-1.5 prose-li:text-[var(--sr-text)]",
        "prose-blockquote:border-l-2 prose-blockquote:border-[var(--sr-accent)] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[var(--sr-text)]",
        "prose-hr:my-10 prose-hr:border-[var(--sr-border)]",
        "prose-code:text-sm prose-code:bg-[var(--sr-card)] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-[var(--sr-text)]",
        "prose-pre:bg-[var(--sr-card)] prose-pre:text-[var(--sr-text)] prose-pre:rounded-xl prose-pre:p-4",
        "prose-img:rounded-xl prose-img:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
