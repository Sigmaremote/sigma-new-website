"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface StickyTocProps {
  items: TocItem[];
  className?: string;
}

export function StickyToc({ items, className }: StickyTocProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -80% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "hidden lg:block sticky top-[96px]",
        className
      )}
    >
      <nav>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block text-[15px] transition-colors duration-200",
                  activeId === item.id
                    ? "text-[var(--sr-accent)] font-medium"
                    : "text-[var(--sr-muted)] hover:underline"
                )}
                style={{ paddingLeft: `${item.level * 12}px` }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
