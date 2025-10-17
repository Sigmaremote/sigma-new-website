"use client";
import type { Coverage } from "../types";
import { useCallback } from "react";

function RailIcon({ label, on }: { label: string; on?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] ${
        on
          ? "border-[#0C2E1C]/20 bg-[#F2F3F1] text-[#0C2E1C]"
          : "border-black/10 text-[#0C2E1C]/50"
      }`}
      title={label}
    >
      {label}
    </span>
  );
}

export function CountryCard({ data }: { data: Coverage }) {
  const open = useCallback(() => {
    const p = new URLSearchParams(window.location.search);
    p.set("country", data.iso2);
    history.replaceState({}, "", `?${p.toString()}`);
    window.dispatchEvent(new Event("popstate"));
  }, [data.iso2]);

  return (
    <article
      onClick={open}
      className="group cursor-pointer rounded-2xl border border-black/5 bg-white p-5 hover:shadow-sm transition-shadow"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex rounded-full bg-[#F2F3F1] px-3 py-1 text-xs font-medium">
          {data.region}
        </span>
        <span
          className={`text-[11px] font-semibold ${
            data.available ? "text-[#0C2E1C]/70" : "text-[#0C2E1C]/40"
          }`}
        >
          {data.available ? "Available" : "Coming soon"}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-[#0C2E1C] group-hover:underline">
        {data.country}
      </h3>
      <p className="mt-1 text-sm text-[#0C2E1C]/75 min-h-[38px]">
        {data.notes ?? "Coverage details and supported rails."}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <RailIcon label="Bank" on={!!data.payout.local_bank} />
        <RailIcon label="Mobile" on={!!data.payout.mobile_money} />
        <RailIcon label="Wallet" on={!!data.payout.usd_wallet} />
        <RailIcon label="USDC" on={!!data.payout.usdc} />
        <RailIcon label="USDT" on={!!data.payout.usdt} />
        <RailIcon label="Card" on={!!data.payout.card_payout} />
      </div>
      <div className="mt-4 text-xs text-[#0C2E1C]/60">
        Speed: {data.settlement_time}
      </div>
    </article>
  );
}
