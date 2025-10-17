"use client";
import * as React from 'react';

export function TocCard({ items }:{ items:{id:string;text:string}[] }) {
  const [active, setActive] = React.useState<string | null>(null);
  const limited = React.useMemo(()=>items.slice(0,7), [items]);

  React.useEffect(()=>{
    const obs = new IntersectionObserver(
      (entries)=>{
        entries.forEach(e=>{
          if (e.isIntersecting) setActive(e.target.id);
        });
      }, { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );
    limited.forEach(it=>{
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return ()=>obs.disconnect();
  }, [limited]);

  if (!limited.length) return null;
  return (
    <aside className="hidden lg:block sticky top-24 w-64">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="text-sm font-medium mb-3 text-gray-500">Table of contents</div>
        <nav className="space-y-2">
          {limited.map(it=>{
            const isActive = active === it.id;
            return (
              <a key={it.id} href={`#${it.id}`}
                 className={`block text-[15px] hover:underline ${isActive ? "font-semibold" : ""}`}>
                <span className="inline-block w-1.5 h-1.5 mr-2 align-middle rounded-full"
                      style={{ background: isActive ? '#D6FF57' : 'transparent', border:'1px solid #E5E7EB' }} />
                {it.text}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
