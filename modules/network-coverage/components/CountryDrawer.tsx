"use client";
import { useEffect, useState } from "react";
import type { Coverage } from "../types";
import { COUNTRIES } from "../data/countries";
import Link from "next/link";

export function CountryDrawer() {
  const [item, setItem] = useState<Coverage | null>(null);

  useEffect(() => {
    const handler = () => {
      const params = new URLSearchParams(window.location.search);
      const iso = (params.get("country") ?? "").toUpperCase();
      setItem(COUNTRIES.find((c) => c.iso2 === iso) ?? null);
    };
    handler();
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20" onClick={() => closeDrawer()}>
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-black/5 p-4">
          <h4 className="text-lg font-semibold text-[#0C2E1C]">{item.country}</h4>
          <button
            onClick={() => closeDrawer()}
            className="rounded-full border border-black/10 px-2 py-1 text-sm"
          >
            Close
          </button>
        </div>
        <div className="space-y-4 p-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-[#0C2E1C]/75">Availability</span>
            <span className={`font-medium ${item.available ? "text-[#0C2E1C]" : "text-[#0C2E1C]/50"}`}>
              {item.available ? "Available" : "Coming soon"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#0C2E1C]/75">Payroll</span>
            <span className="font-medium text-[#0C2E1C]">
              {item.payroll_supported ? "Supported" : "Not available"}
            </span>
          </div>
          <div>
            <p className="text-[#0C2E1C]/75 mb-1">Payout rails:</p>
            <ul className="list-disc pl-5 space-y-1">
              {item.payout.local_bank && <li>Local bank</li>}
              {item.payout.mobile_money && <li>Mobile money</li>}
              {item.payout.usd_wallet && <li>USD wallet</li>}
              {item.payout.usdc && <li>USDC</li>}
              {item.payout.usdt && <li>USDT</li>}
              {item.payout.card_payout && <li>Card payout</li>}
              {item.payout.wire_swift && <li>Wire / SWIFT</li>}
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#0C2E1C]/75">Typical speed</span>
            <span className="font-medium text-[#0C2E1C]">{item.settlement_time}</span>
          </div>
          {item.fx_note && (
            <div className="rounded-lg bg-[#F2F3F1] p-3 text-[#0C2E1C]">
              <strong className="text-xs">FX note: </strong>
              <span className="text-xs">{item.fx_note}</span>
            </div>
          )}
          {item.kyc_tier && (
            <div className="text-xs text-[#0C2E1C]/70">KYC tier: {item.kyc_tier}</div>
          )}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-4 py-2 text-sm font-semibold text-[#0C2E1C] hover:opacity-90"
            >
              Book a demo
            </Link>
            <Link
              href="/blog/payoneer-alternatives-2025"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#0C2E1C] hover:bg-black/[0.03]"
            >
              Read: Payoneer Alternatives (2025)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function closeDrawer() {
  const p = new URLSearchParams(window.location.search);
  p.delete("country");
  history.replaceState({}, "", `?${p.toString()}`);
  window.dispatchEvent(new Event("popstate"));
}
