"use client";
import { cn } from "@/lib/utils";

export function Skeleton({
  className,
}: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse bg-slate-200/80 dark:bg-slate-700/50",
        "relative overflow-hidden rounded-md",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent",
        className
      )}
    />
  );
}
