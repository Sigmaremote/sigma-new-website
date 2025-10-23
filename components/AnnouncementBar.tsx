"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PressItem } from "@/lib/press";

type Props = {
  showViewAll?: boolean;   // show "View all" at the end
  showDate?: boolean;      // show date pill
  className?: string;
  darkSurface?: boolean;   // force dark pill (default true on light hero)
};

function Dot() {
  return <span className="inline-block h-2 w-2 rounded-full bg-red-500" aria-hidden />;
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="12" height="12" aria-hidden {...props}>
      <path fill="currentColor" d="M6 2a1 1 0 0 1 2 0v1h4V2a1 1 0 1 1 2 0v1h1.2A1.8 1.8 0 0 1 17 4.8V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4.8A1.8 1.8 0 0 1 4.8 3H6V2Zm9 5H5v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7Z" />
    </svg>
  );
}

function DatePill({ iso, dark }: { iso: string; dark: boolean }) {
  const d = new Date(iso);
  const label = d.toLocaleDateString(undefined, { month: "short", day: "numeric" }); // e.g., Oct 1

  const pillSurface = dark
    ? "bg-white/10 text-white/80"
    : "bg-black/5 text-black/70";

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-[2px] ${pillSurface}`}>
      <CalendarIcon className={dark ? "text-white/70" : "text-black/60"} />
      <span className="font-satoshi text-[12px] leading-none">{label}</span>
    </span>
  );
}

export default function AnnouncementBar({
  showViewAll = true,
  showDate = true,
  className,
  darkSurface = true,
}: Props) {
  const [item, setItem] = useState<PressItem | null>(null);

  useEffect(() => {
    fetch("/api/press/latest")
      .then((r) => r.json())
      .then((arr) => setItem(arr?.items?.[0] ?? null))
      .catch(() => setItem(null));
  }, []);

  if (!item) return null;

  const surface = darkSurface
    ? "backdrop-blur-sm bg-[#0F172A]/90 text-white border-white/15 ring-white/10 hover:-translate-y-[1px] hover:shadow-md focus-visible:ring-2 focus-visible:ring-white/30 transition"
    : "backdrop-blur-sm bg-white/90 text-black border-black/10 ring-black/5 hover:-translate-y-[1px] hover:shadow-md focus-visible:ring-2 focus-visible:ring-black/20 transition";

  return (
    <div className={`flex justify-center pt-6 ${className || ""}`}>
      <section aria-label="Latest press" role="region">
        <div className="animate-[fadeIn_180ms_ease-out]">
          <div
            className={[
              "group inline-flex items-center gap-3 rounded-full",
              "border px-4 py-2 shadow-sm ring-1",
              surface,
            ].join(" ")}
            role="status"
          >
            {/* main link */}
            <Link
              href={`/press/${item.slug}`}
              className="flex min-w-0 items-center gap-2 outline-none"
              aria-label={`Open press: ${item.title}`}
            >
              <Dot />
              <span className="font-satoshi text-[12px] font-medium opacity-90 shrink-0">
                News
              </span>
              <span
                className="font-satoshi text-[12px] opacity-85 overflow-hidden text-ellipsis whitespace-nowrap max-w-[64ch]"
                title={item.title}
              >
                {item.title}
              </span>
            </Link>

            {/* date pill */}
            {showDate && (
              <span className="hidden sm:inline">
                <DatePill iso={item.date} dark={darkSurface} />
              </span>
            )}

            {/* actions */}
            {showViewAll && (
              <Link
                href="/press"
                className="font-satoshi text-[12px] opacity-80 hover:opacity-100 underline-offset-2 hover:underline"
                aria-label="View all press"
              >
                View all
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
