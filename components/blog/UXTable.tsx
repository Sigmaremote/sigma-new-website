'use client';
import * as React from 'react';

export type UXRow = {
  criterion: string;
  sigma: string;
  competitor: string;
};

export function UXTable({ rows }: { rows: UXRow[] }) {
  return (
    <div className="mt-8 rounded-2xl border border-black/10 bg-white overflow-hidden">
      <div className="grid grid-cols-3 bg-neutral-50 text-sm font-medium text-neutral-700">
        <div className="px-4 py-3">Criterion</div>
        <div className="px-4 py-3">SigmaRemote</div>
        <div className="px-4 py-3">Competitor</div>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-3 text-sm border-t border-black/5">
          <div className="px-4 py-3 font-medium text-neutral-900">{r.criterion}</div>
          <div className="px-4 py-3">{r.sigma}</div>
          <div className="px-4 py-3">{r.competitor}</div>
        </div>
      ))}
    </div>
  );
}
