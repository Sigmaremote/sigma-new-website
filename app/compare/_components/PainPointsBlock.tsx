"use client";

import Image from "next/image";
import { XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  competitorName: string;
  bullets: string[];
  imageSrc?: string; // default: public/compare/pain-points-with-deel.png
  className?: string;
  size?: "standard" | "compact" | "wide"; // NEW
};

export default function PainPointsBlock({
  competitorName,
  bullets,
  imageSrc = "/compare/pain-points-with-deel.png",
  className,
  size = "standard",
}: Props) {
  const compact = size === "compact";
  const wide = size === "wide";
  return (
    <section className={cn("relative", className)}>
      <div className={cn(
        "mx-auto px-8 md:px-10",
        compact ? "max-w-5xl py-10" : wide ? "max-w-7xl py-8" : "max-w-6xl py-12"
      )}>
        {/* Outer yellow container */}
        <div className={cn(
          "relative overflow-hidden rounded-3xl bg-yellow-300 ring-1 ring-yellow-300/70",
          compact ? "lg:min-h-[480px]" : wide ? "lg:min-h-[420px]" : "lg:min-h-[560px]"
        )}>
          {/* Darker right overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-6 right-6 left-[55%] rounded-3xl bg-yellow-400/70"
          />

          {/* Content */}
          <div className={cn(
            "relative grid grid-cols-1 lg:grid-cols-2",
            compact ? "gap-8 px-6 py-8" : wide ? "gap-12 lg:gap-x-20 px-8 md:px-10 py-8" : "gap-10 lg:gap-14 px-8 md:px-10 py-12"
          )}>
            {/* Left column */}
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Pain Points with {competitorName}
              </h3>
              <p className="mt-4 text-slate-800 leading-7 max-w-prose">
                What frustrates fast-moving teams and global contractors when using {competitorName}:
              </p>

              <ul className="mt-8 space-y-5">
                {bullets.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-900 leading-7 transition-transform duration-200 will-change-transform hover:translate-x-0.5">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center">
                      <XCircle className="h-5 w-5 text-rose-500" aria-hidden="true" />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column (image card) */}
            <div className={cn(
              "relative flex justify-center",
              wide ? "lg:justify-end lg:translate-x-4" : "lg:justify-end"
            )}>
              <div className={cn(
                "relative hover:-translate-y-0.5 transition-all duration-200",
                compact ? "max-w-[66%]" : wide ? "max-w-[72%]" : "max-w-[72%]"
              )}>
                <Image
                  src={imageSrc}
                  alt="Pain points example transfer flow"
                  width={640}
                  height={800}
                  className="w-full h-auto object-contain rounded-xl"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
