"use client";
import { useScrollAnimation } from "./useScrollAnimation";
import { cn } from "@/lib/utils";

interface StaggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export default function StaggeredAnimation({
  children,
  className,
  staggerDelay = 100,
  threshold = 0.1,
}: StaggeredAnimationProps) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <div
              key={index}
              className="transition-all duration-700 ease-out motion-reduce:transition-none"
              style={{
                transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
              }}
            >
              {child}
            </div>
          ))
        : children
      }
    </div>
  );
}
