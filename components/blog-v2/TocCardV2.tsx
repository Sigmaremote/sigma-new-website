"use client";
import * as React from "react";

export function TocCardV2({
  items,
  rootSelector,
}: {
  items: { id: string; text: string }[];
  rootSelector?: string; // e.g., "#toc-root"
}) {
  const [active, setActive] = React.useState<string | null>(null);
  const limited = React.useMemo(() => items.slice(0, 7), [items]);

  // Scrollspy
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );
    limited.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [limited]);

  // Smooth scroll with offset (uses scroll-mt on headings)
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  if (!limited.length) return null;

  // Sticky card height is viewport minus some padding so it never overflows
  const cardMaxHeight = "calc(100vh - 140px)";

          return (
            <aside className="hidden lg:block self-start sticky top-20 w-64 flex-shrink-0">
              <div
                className="rounded-lg border shadow-sm bg-[#F9F7F3] border-[#E4DED2] p-5 md:p-6 overflow-auto"
                style={{ maxHeight: cardMaxHeight }}
              >
        {/* Title row */}
        <div className="flex items-center gap-2 mb-3">
          <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-70">
            <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h12v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
          <div className="uppercase text-[12px] tracking-wide text-[#7A7369] font-medium">
            Table of contents
          </div>
        </div>

        {/* Links */}
        <nav className="text-[#383833] text-[14px] leading-[1.55]">
          {limited.map((it, i) => {
            const isActive = active === it.id;
            return (
              <div
                key={it.id}
                className={`pl-3 border-l-2 ${
                  isActive ? "border-[#D6FF57] font-semibold" : "border-transparent"
                } ${i > 0 ? "pt-1.5" : ""}`}
              >
                <a
                  href={`#${it.id}`}
                  onClick={(e) => onNavClick(e, it.id)}
                  className="block py-1.5 hover:underline transition-transform duration-150 hover:translate-x-[2px] focus:outline-none focus:ring-1 focus:ring-[#E4DED2]"
                >
                  {it.text}
                </a>

                {/* subtle separators like Deel (between items) */}
                {i < limited.length - 1 && (
                  <div className="ml-[-3px] border-t border-[#EEE6D9] my-1" />
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

