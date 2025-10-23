"use client";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

type Item = { 
  text: string; 
  tone?: "negative" | "neutral" | "positive";
  tooltip?: string;
};
type Props = {
  competitorName: string;
  competitor: Item[];
  sigma: Item[];
  /** controls the Sigma column background: 'tinted' | 'none' */
  sigmaTint?: "tinted" | "none";
};

function Row({
  left,
  right,
  index,
}: {
  left?: Item;
  right?: Item;
  index: number;
}) {
  // Helper function to render competitor icon based on tone
  const renderCompetitorIcon = (item?: Item) => {
    if (!item) return null;
    
    const tone = item.tone || "neutral";
    const tooltip = item.tooltip;
    
    let Icon, colorClass;
    
    if (tone === "negative") {
      Icon = XCircle;
      colorClass = "text-rose-500";
    } else if (tone === "neutral") {
      Icon = MinusCircle;
      colorClass = "text-amber-500";
    } else {
      // For positive competitor points (rare case)
      Icon = CheckCircle2;
      colorClass = "text-emerald-600";
    }
    
    return (
      <span 
        className="mt-1 inline-flex h-5 w-5 items-center justify-center group/icon" 
        aria-hidden="true"
        title={tooltip}
      >
        <Icon className={cn("h-5 w-5", colorClass)} />
        {tooltip && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
            {tooltip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
          </div>
        )}
      </span>
    );
  };

  return (
    <div
      role="row"
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-10",
        "px-4 sm:px-6 py-5 md:py-5",
        index % 2 === 0 ? "bg-white" : "bg-slate-50",
        "transition-colors"
      )}
    >
      {/* Competitor cell */}
      <div role="cell" className="flex items-start gap-4">
        {renderCompetitorIcon(left)}
        <p className="text-slate-700 text-[15px] sm:text-base leading-7">
          {left?.text ?? ""}
        </p>
      </div>

      {/* Sigma cell (no per-row background now) */}
      <div role="cell" className="flex items-start gap-4">
        <span 
          className="mt-1 inline-flex h-5 w-5 items-center justify-center group/icon" 
          aria-hidden="true"
          title={right?.tooltip}
        >
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          {right?.tooltip && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              {right.tooltip}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
            </div>
          )}
        </span>
        <p className="text-slate-900 text-[15px] sm:text-base leading-7">
          {right?.text ?? ""}
        </p>
      </div>
    </div>
  );
}

export default function CompareMatrix({
  competitorName,
  competitor,
  sigma,
  sigmaTint = "tinted",
}: Props) {
  const len = Math.max(competitor.length, sigma.length);
  const rows = useMemo(
    () =>
      Array.from({ length: len }).map((_, i) => ({
        left: competitor[i],
        right: sigma[i],
      })),
    [len, competitor, sigma]
  );

  return (
    <div
      role="table"
      aria-label={`Comparison: ${competitorName} vs Sigma`}
      className={cn(
        "group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white max-w-6xl mx-auto"
      )}
    >
      {/* --- Sigma column continuous background overlay --- */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-full lg:w-1/2",
          sigmaTint === "tinted" ? "bg-emerald-50" : "bg-transparent",
          // smooth lift on hover anywhere over the table, only if tinted
          sigmaTint === "tinted" ? "transition-colors duration-200 group-hover:bg-emerald-100" : ""
        )}
      />

      {/* Headers */}
      <div
        role="row"
        className="hidden lg:grid grid-cols-2 bg-slate-100/70 text-slate-900 relative"
      >
        <div role="columnheader" className="px-6 py-5">
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">Competitor</div>
          <div className="text-2xl md:text-3xl font-semibold">{competitorName}</div>
        </div>

        <div role="columnheader" className="px-6 py-5 relative">
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">Sigma Advantage</div>
          {/* Title in black per feedback */}
          <div className="text-2xl md:text-3xl font-semibold text-slate-900">Sigma</div>
          <span
            aria-hidden="true"
            className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-slate-300"
          />
        </div>
      </div>

      {/* Rows */}
      <div role="rowgroup" className="relative">
        {rows.map((r, i) => (
          <Row key={i} index={i} left={r.left} right={r.right} />
        ))}
      </div>
    </div>
  );
}
