'use client';
import * as React from 'react';

export type CostRow = {
  provider: string;
  platformFee: string;
  fx: string;
  payoutSpeed: string;
  notes?: string;
};

export function CostTable({ rows }: { rows: CostRow[] }) {
  return (
    <div className="mt-8 rounded-2xl border border-black/10 bg-white overflow-hidden">
      <div className="grid grid-cols-5 bg-neutral-50 text-sm font-medium text-neutral-700">
        <div className="px-4 py-3">Provider</div>
        <div className="px-4 py-3">Platform Fee</div>
        <div className="px-4 py-3">FX</div>
        <div className="px-4 py-3">Payout Speed</div>
        <div className="px-4 py-3">Notes</div>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-5 text-sm border-t border-black/5">
          <div className="px-4 py-3 font-medium text-neutral-900">{r.provider}</div>
          <div className="px-4 py-3">{r.platformFee}</div>
          <div className="px-4 py-3">{r.fx}</div>
          <div className="px-4 py-3">{r.payoutSpeed}</div>
          <div className="px-4 py-3 text-neutral-600">{r.notes || '-'}</div>
        </div>
      ))}
    </div>
  );
}
