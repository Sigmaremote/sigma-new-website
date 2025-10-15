"use client";
import { useScrollAnimation } from "./useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideInLeft" | "slideInRight";
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const animationClasses = {
    fadeUp: "translate-y-8 opacity-0",
    fadeIn: "opacity-0",
    slideInLeft: "-translate-x-8 opacity-0",
    slideInRight: "translate-x-8 opacity-0",
  };

  const visibleClasses = {
    fadeUp: "translate-y-0 opacity-100",
    fadeIn: "opacity-100",
    slideInLeft: "translate-x-0 opacity-100",
    slideInRight: "translate-x-0 opacity-100",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
