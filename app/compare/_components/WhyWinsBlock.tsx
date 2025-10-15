"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  bullets: string[];
  imageSrc?: string; // default: /compare/why-sigma-remote-wins.png
  className?: string;
  size?: "standard" | "compact" | "wide"; // NEW
};

export default function WhyWinsBlock({
  bullets,
  imageSrc = "/compare/why-sigma-remote-wins.png",
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
        {/* Outer dark container */}
        <div className={cn(
          "relative overflow-hidden rounded-3xl bg-[#0E2C22]",
          compact ? "lg:min-h-[480px]" : wide ? "lg:min-h-[420px]" : "lg:min-h-[560px]"
        )}>
          {/* Slightly lighter inset on the left to match the reference */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-6 left-6 right-[50%] rounded-3xl bg-[#12382A]"
          />

          {/* Content grid */}
          <div className={cn(
            "relative grid grid-cols-1 lg:grid-cols-2",
            compact ? "gap-8 px-6 py-8" : wide ? "gap-12 lg:gap-x-20 px-8 md:px-10 py-8" : "gap-10 lg:gap-14 px-8 md:px-10 py-12"
          )}>
            {/* Left: framed image card */}
            <div className={cn(
              "relative flex justify-center",
              wide ? "lg:justify-start lg:-translate-x-4" : "lg:justify-start"
            )}>
              <div className={cn(
                "relative hover:-translate-y-0.5 transition-all duration-200",
                compact ? "max-w-[66%]" : wide ? "max-w-[72%]" : "max-w-[72%]"
              )}>
                <Image
                  src={imageSrc}
                  alt="Why SigmaRemote Wins — product overview"
                  width={640}
                  height={800}
                  className="w-full h-auto object-contain rounded-xl"
                  priority={false}
                />
              </div>
            </div>

            {/* Right: text + bullets */}
            <div className="max-w-xl text-white">
              <h3 className="text-3xl md:text-4xl font-semibold text-white">
                Why SigmaRemote Wins
              </h3>
              <p className="mt-4 text-slate-300 leading-7">
                Key advantages that make SigmaRemote the smarter choice for global payroll.
              </p>

              <ul className="mt-8 space-y-5">
                {bullets.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 leading-7 transition-transform duration-200 will-change-transform hover:translate-x-0.5">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center" aria-hidden="true">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    </span>
                    <span className="text-slate-100">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
