'use client';

import * as React from 'react';
import { Check, X, Info } from 'lucide-react';

type Row = { feature: string; values: boolean[] };

export function FeaturesCompare({
  title = 'Features',
  columns,
  rows,
  emphasizeIndex = 0, // 0 = Sigma kolona (blago istaknuta)
}: {
  title?: string;
  columns: string[];   // npr: ['Sigma', 'Deel', 'Remote.com', 'Gusto']
  rows: Row[];         // values.length === columns.length
  emphasizeIndex?: number;
}) {
  const BG = '#0E2C1E';
  const LIME = '#CFF86A';

  const gridTemplate = {
    display: 'grid',
    gridTemplateColumns: `minmax(240px,1fr) repeat(${columns.length}, 150px)`,
    alignItems: 'center',
  } as React.CSSProperties;

  return (
    <section className="mt-16">
      <div className="mx-auto max-w-6xl rounded-2xl px-5 pb-8 pt-6" style={{ background: BG }}>
        {/* header pill */}
        <div className="mx-auto max-w-5xl rounded-2xl bg-white px-6 py-4 shadow-sm sticky top-16 z-10">
          <div className="grid gap-y-0" style={gridTemplate}>
            <div className="text-2xl md:text-3xl font-extrabold text-neutral-900">{title}</div>
            {columns.map((c, i) => (
              <div key={i} className="text-center text-base md:text-lg font-semibold text-neutral-800">
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* desktop/tablet table */}
        <div className="mx-auto mt-4 max-w-5xl hidden sm:block">
          <div className="relative" style={{ isolation: 'isolate' }}>
            {/* JEDNA kontinuirana traka za celu Sigma kolonu */}
            <div 
              className="absolute rounded-lg pointer-events-none"
              style={{
                top: 0,
                bottom: 0,
                left: 'calc(240px + 4px)', // feature column width + small margin
                width: '142px', // column width minus margins
                background: 'rgba(255,255,255,0.04)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                zIndex: 0
              }}
              aria-hidden="true"
            />
            
            {/* ROWS (each row keeps the SAME gridTemplate) */}
            <div className="relative" style={{ zIndex: 1 }}>
              {rows.map((r, ri) => (
                <div
                  key={ri}
                  className={`grid gap-y-0 ${ri === 0 ? '' : 'border-t border-white/10'} py-5 md:py-6`}
                  style={gridTemplate}
                >
                  <div className="pl-2 text-white/90 text-[15px] md:text-base">{r.feature}</div>
                  {r.values.map((v, vi) => (
                    <div key={vi} className="flex items-center justify-center">
                      {v ? (
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(207,248,106,0.18)]"
                              title="Included" aria-label={`${columns[vi]}: included`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="#CFF86A" strokeWidth="3"
                               strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white"
                              title="Not included" aria-label={`${columns[vi]}: not included`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3"
                               strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* mobile cards */}
        <div className="sm:hidden mt-4 space-y-3">
          {rows.map((r, ri) => (
            <div key={ri} className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-white font-medium mb-3">{r.feature}</div>
              <div className="grid grid-cols-2 gap-3">
                {columns.map((c, i) => {
                  const v = r.values[i];
                  const emphas = i === emphasizeIndex;
                  return (
                    <div key={c} className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2">
                      <span className={`text-xs ${emphas ? 'font-semibold text-white' : 'text-white/80'}`}>{c}</span>
                      {v ? (
                        <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${emphas ? 'bg-[rgba(207,248,106,0.28)]' : 'bg-[rgba(207,248,106,0.18)]'}`}>
                          <Check className="h-4 w-4" color={LIME} />
                        </span>
                      ) : (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white">
                          <X className="h-4 w-4 text-neutral-500" />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
