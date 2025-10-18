"use client";
import type { CoverageCountry } from "./data";

export default function CountryCardsView({ c }: { c: CoverageCountry }) {
  // If you already have a premium card layout component, render it here.
  // Temporary minimal card set to keep the toggle functional:
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#0C2E1C]">Solutions</h3>
        <p className="mt-2 text-sm text-[#0C2E1C]/75">
          Manage contractor payments and compliance. See Payment and Wallet for rails.
        </p>
      </div>
    </div>
  );
}
