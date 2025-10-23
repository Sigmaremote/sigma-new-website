"use client";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CompareChecklist({
  title,
  points,
  variant = "sigma",
}: {
  title: string;
  points: { text: string }[];
  variant?: "sigma" | "competitor";
}) {
  const isSigma = variant === "sigma";
  return (
    <div>
      {/* Micro-label above each column */}
      <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
        {isSigma ? "Sigma Advantage" : "Competitor Overview"}
      </p>
      
      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <ul className="mt-6 space-y-5">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3 text-[15px] sm:text-base text-slate-700 leading-relaxed">
            {/* bullet */}
            {isSigma ? (
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 ring-1 ring-emerald-200 transition-transform hover:scale-110">
                <Check className="h-3.5 w-3.5 text-emerald-700" />
              </span>
            ) : (
              <span className="mt-1 inline-flex h-5 w-5 rounded-full border border-rose-400" />
            )}
            <span className="max-w-prose">{p.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
