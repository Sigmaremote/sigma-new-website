"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Small pill with flag + label
function FlagChip({ code, label }: { code: string; label: string }) {
  // code must be 2-letter ISO (lowercase), e.g. br, ro, qa, eu, ky, hn, ar, ca, be, py, ro, vn, mm
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1.5",
        "shadow-sm ring-1 ring-black/10"
      )}
      aria-label={label}
    >
      <span className={cn("fi", `fi-${code.toLowerCase()}`, "rounded-sm")} />
      <span className="font-satoshi text-[13px] text-black/80">{label}</span>
    </div>
  );
}

type RowProps = {
  items: { code: string; label: string }[];
  reverse?: boolean;
  speed?: number; // seconds per loop
};

function MarqueeRow({ items, reverse = false, speed = 28 }: RowProps) {
  // Duplicate content for seamless loop
  return (
    <div className="relative overflow-hidden">
      <div
        className={cn(
          "flex gap-3 whitespace-nowrap group",
          reverse ? "marquee-right" : "marquee-left"
        )}
        style={
          {
            "--marquee-duration": `${speed}s`,
          } as React.CSSProperties
        }
      >
        <div className="flex gap-3">
          {items.map((it, i) => (
            <FlagChip key={`a-${i}-${it.code}`} {...it} />
          ))}
        </div>
        <div className="flex gap-3" aria-hidden>
          {items.map((it, i) => (
            <FlagChip key={`b-${i}-${it.code}`} {...it} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FlagMarquee() {
  // Rows from your screenshots (extend freely)
  const row1 = [
    { code: "ar", label: "Argentina" },
    { code: "gn", label: "Guinea" },
    { code: "gb-sct", label: "Scotland" }, // not in flag-icons → fallback to GB if needed
    { code: "ec", label: "Ecuador" },
    { code: "eu", label: "Europe" },
    { code: "br", label: "Brazil" },
    { code: "ro", label: "Romania" },
    { code: "vn", label: "Vietnam" },
  ].map((x) => ({ ...x, code: x.code.replace("gb-sct", "gb") })); // fallback

  const row2 = [
    { code: "ca", label: "Canada" },
    { code: "be", label: "Belgium" },
    { code: "py", label: "Paraguay" },
    { code: "ar", label: "Argentina" },
    { code: "mm", label: "Myanmar" },
    { code: "ky", label: "Cayman" },
    { code: "qa", label: "Qatar" },
    { code: "hn", label: "Honduras" },
  ];

  const row3 = [
    { code: "ca", label: "Canada" },
    { code: "be", label: "Belgium" },
    { code: "py", label: "Paraguay" },
    { code: "ar", label: "Argentina" },
  ];

  const row4 = [
    { code: "mm", label: "Myanmar" },
    { code: "ky", label: "Cayman" },
    { code: "qa", label: "Qatar" },
    { code: "hn", label: "Honduras" },
  ];

  return (
    <div className="rounded-[20px] bg-[#D9FF93] p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <h3 className="font-satoshi text-black font-semibold tracking-tight leading-[1.2] text-[22px] sm:text-[24px] text-center">
        160+ countries
      </h3>

      <div className="mt-4 space-y-3">
        <MarqueeRow items={row1} reverse={false} speed={20} />
        <MarqueeRow items={row2} reverse={true}  speed={22} />
        <MarqueeRow items={row3} reverse={false} speed={21} />
        <MarqueeRow items={row4} reverse={true}  speed={23} />
      </div>

      <p className="mt-4 text-center font-satoshi text-[13px] font-medium leading-[1.3] text-black/60">
        To hire from.
      </p>
    </div>
  );
}
