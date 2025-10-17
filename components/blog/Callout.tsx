import { cn } from "@/lib/utils";

interface CalloutProps {
  tone: "note" | "warning" | "success" | "stat" | "case" | "example";
  children: React.ReactNode;
  className?: string;
}

const getLabel = (tone: string) => {
  switch (tone) {
    case "warning":
      return "Warning";
    case "stat":
      return "Stat";
    case "case":
    case "example":
      return "Example";
    default:
      return "Note";
  }
};

export function Callout({ tone, children, className }: CalloutProps) {
  const label = getLabel(tone);
  const isWarning = tone === "warning";

  return (
    <div
      className={cn(
        "my-4 rounded-xl border border-[var(--sr-border)] pl-4 pr-5 py-3 relative",
        isWarning && "bg-[#201a00]",
        className
      )}
    >
      <div 
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ background: "var(--sr-accent)" }}
      />
      <div className="text-sm text-[var(--sr-muted)] mb-1">{label}</div>
      <div className="text-[17px] leading-7 text-[var(--sr-text)]">{children}</div>
    </div>
  );
}
