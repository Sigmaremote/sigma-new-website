"use client";
import Link from "next/link";
import { useEffect, useMemo, useState, ReactNode } from "react";
import { Briefcase, CreditCard, FileText, Wallet } from "lucide-react";
import type { CoverageCountry, CoverageRegion } from "./data";
import { coverageCadanaCountries as ALL } from "./data";

// --- NEW: Premium pill component ---
function CountryPillPremium({ c }: { c: CoverageCountry }) {
  return (
    <Link
      href={`/resources/network-coverage/${c.iso2.toLowerCase()}`}
      title={`${c.name} coverage`}
      className={[
        // Direct styling without gradient wrapper
        "group relative rounded-2xl",
        // Elevation
        "shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_rgba(12,46,28,0.06)]",
        // Hover/focus motion
        "transition-transform duration-150 ease-out hover:-translate-y-0.5",
      ].join(" ")}
    >
      <div
        className={[
          "flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5",
          "border border-black/10",
          "ring-0 group-hover:ring-1 group-hover:ring-[#0C2E1C]/10",
        ].join(" ")}
      >
        {/* Flag avatar with mini ring */}
        <span
          className={[
            "inline-flex h-6 w-6 items-center justify-center rounded-full text-base",
            "bg-white shadow-sm ring-1 ring-black/10",
          ].join(" ")}
          aria-hidden
        >
          {c.flag}
        </span>

        {/* Label */}
        <span className="truncate text-sm font-medium tracking-tight text-[#0C2E1C]">
          {c.name}
        </span>

        {/* Chevron */}
        <svg
          className="ml-auto h-3.5 w-3.5 text-[#0C2E1C]/40 opacity-0 transition-opacity group-hover:opacity-100"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M7 5l5 5-5 5" />
        </svg>
      </div>

      {/* Strong keyboard focus */}
      <span className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2E1C] focus-visible:ring-offset-2 focus-visible:ring-offset-white" />
    </Link>
  );
}

// --- EXISTING: Hero (updated with green gradient and more spacing) ---
export function CoverageHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0C2E1C] via-[#162A21] to-[#1F3B2E] p-10 text-white mb-12">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <h1 className="text-4xl font-semibold tracking-tight">Check out all the countries we cover</h1>
      <p className="mt-3 max-w-2xl text-base/6 text-white/80">
        Discover the breadth of SigmaRemote infrastructure. Search by country or filter by region
        to uncover payroll, payments, and wallet details for a market.
      </p>
    </section>
  );
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search Country",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="mt-6">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search countries"
        placeholder={placeholder}
        className="w-full rounded-full border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/20 focus:ring-1 focus:ring-[#0C2E1C]/20"
      />
    </div>
  );
}

// --- UPDATED: Region section uses premium pills + count + divider ---
export function RegionSection({
  region,
  countries,
}: {
  region: CoverageRegion;
  countries: CoverageCountry[];
}) {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0C2E1C]">
          {region}
          <span className="ml-2 align-middle text-sm font-normal text-[#0C2E1C]/55">
            ({countries.length})
          </span>
        </h2>
        <div className="h-px w-1/2 bg-gradient-to-r from-black/10 to-transparent" />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {countries.map((c) => (
          <CountryPillPremium key={c.iso2} c={c} />
        ))}
      </div>
    </section>
  );
}

export function BottomCTA() {
  return (
    <section className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-b from-[#FFE6D9] to-[#FFD9C8] p-10 text-center">
      <h3 className="text-3xl font-semibold text-[#0C2E1C]">
        Ready to transform your global payments?
      </h3>
      <p className="mx-auto mt-2 max-w-2xl text-sm text-[#0C2E1C]/75">
        Book a personalized demo to see how SigmaRemote helps you pay contractors globally, reduce
        FX losses, and build stronger relationships with your workforce.
      </p>
      <Link
        href="/contact"
        className="mt-5 inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-5 py-2.5 text-sm font-semibold text-[#0C2E1C] hover:opacity-90"
      >
        Book a demo
      </Link>
    </section>
  );
}

// --- NEW: Premium Country Detail Components ---
const regionGradients: Record<string, string> = {
  Africa: "from-[#0C2E1C] to-[#193926]",
  Asia: "from-[#0D3C3A] to-[#157B6E]",
  Europe: "from-[#0A223D] to-[#17345B]",
  "North America": "from-[#0C2E1C] to-[#3B6B3B]",
  "South America": "from-[#0C2E1C] to-[#658D3D]",
  Oceania: "from-[#0C2E1C] to-[#275F3F]",
};

function CountryDetailHero({
  name,
  iso2,
  region,
  flag,
  paymentSupported,
  payoutCutoff,
}: {
  name: string;
  iso2: string;
  region: string;
  flag: string;
  paymentSupported: string[];
  payoutCutoff?: string;
}) {
  const gradient = regionGradients[region] ?? "from-[#0C2E1C] to-[#1F3B2E]";
  
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-12 text-white mb-12`}>
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 h-80 w-80 bg-white/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 bg-white/3 blur-2xl rounded-full" />
      
      <div className="relative z-10">
        {/* Header with flag and country info */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold tracking-tight flex items-center gap-4 mb-2">
              <span className="text-6xl">{flag}</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <span>{name}</span>
                  <span className="text-2xl font-normal text-white/70">{iso2}</span>
                </div>
                <p className="text-xl text-white/80 mt-1">{region}</p>
              </div>
            </h1>
          </div>
        </div>

        {/* Key metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-sm text-white/70 mb-1">Payout Rails</div>
            <div className="text-3xl font-bold">{paymentSupported.length}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-sm text-white/70 mb-1">Avg. Settlement</div>
            <div className="text-3xl font-bold">{payoutCutoff ?? "1–2 days"}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-sm text-white/70 mb-1">FX Fee</div>
            <div className="text-3xl font-bold">0–1%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-white/60">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}


// --- NEW: Cadana-style Table Component ---
function CountryDetailTable({ c }: { c: CoverageCountry }) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200/50 bg-white shadow-sm">
      {/* Table Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/50">
        <div className="grid grid-cols-4 px-6 py-4">
          <div className="text-sm font-semibold text-[#0C2E1C] uppercase tracking-wide">Category</div>
          <div className="text-sm font-semibold text-[#0C2E1C] uppercase tracking-wide">Offerings</div>
          <div className="text-sm font-semibold text-[#0C2E1C] uppercase tracking-wide">Details</div>
          <div className="text-sm font-semibold text-[#0C2E1C] uppercase tracking-wide">Status</div>
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-100">
        {/* Solutions Row */}
        <div className="grid grid-cols-4 px-6 py-5 hover:bg-gray-50/50 transition-colors duration-150">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0C2E1C] to-[#1F3B2E] text-white">
              <Briefcase className="h-4 w-4" />
            </div>
            <span className="font-semibold text-[#0C2E1C]">Solutions</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {c.solutions.map((solution) => (
              <span
                key={solution}
                className="inline-flex items-center rounded-lg bg-green-50 text-green-700 px-2.5 py-1 text-xs font-medium border border-green-200/50"
              >
                {solution}
              </span>
            ))}
          </div>
          <div className="text-sm text-[#0C2E1C]/70">
            Manage contractor payments and compliance administration efficiently
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2.5 py-1 text-xs font-medium">
              Available
            </span>
          </div>
        </div>

        {/* Payment Row */}
        <div className="grid grid-cols-4 px-6 py-5 hover:bg-gray-50/50 transition-colors duration-150">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0C2E1C] to-[#1F3B2E] text-white">
              <CreditCard className="h-4 w-4" />
            </div>
            <span className="font-semibold text-[#0C2E1C]">Payment</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {c.paymentSupported.map((method) => (
              <span
                key={method}
                className="inline-flex items-center rounded-lg bg-blue-50 text-blue-700 px-2.5 py-1 text-xs font-medium border border-blue-200/50"
              >
                {method}
              </span>
            ))}
          </div>
          <div className="text-sm text-[#0C2E1C]/70">
            {c.payoutLimits && `Limits: ${c.payoutLimits}`} • {c.payoutCutoff && `Settlement: ${c.payoutCutoff}`}
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2.5 py-1 text-xs font-medium">
              Active
            </span>
          </div>
        </div>

        {/* EOR Row */}
        <div className="grid grid-cols-4 px-6 py-5 hover:bg-gray-50/50 transition-colors duration-150">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0C2E1C] to-[#1F3B2E] text-white">
              <FileText className="h-4 w-4" />
            </div>
            <span className="font-semibold text-[#0C2E1C]">EOR</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {(c.eorOfferings ?? ["Gross to net calculations"]).map((offering) => (
              <span
                key={offering}
                className="inline-flex items-center rounded-lg bg-purple-50 text-purple-700 px-2.5 py-1 text-xs font-medium border border-purple-200/50"
              >
                {offering}
              </span>
            ))}
          </div>
          <div className="text-sm text-[#0C2E1C]/70">
            SigmaRemote calculates compliant payroll lines; statutory remittance varies by market
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2.5 py-1 text-xs font-medium">
              Available
            </span>
          </div>
        </div>

        {/* Wallet Row */}
        <div className="grid grid-cols-4 px-6 py-5 hover:bg-gray-50/50 transition-colors duration-150">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0C2E1C] to-[#1F3B2E] text-white">
              <Wallet className="h-4 w-4" />
            </div>
            <span className="font-semibold text-[#0C2E1C]">Wallet</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {(c.walletOfferings ?? ["Card", "Crypto", "Foreign Bank Accounts"]).map((offering) => (
              <span
                key={offering}
                className="inline-flex items-center rounded-lg bg-orange-50 text-orange-700 px-2.5 py-1 text-xs font-medium border border-orange-200/50"
              >
                {offering}
              </span>
            ))}
          </div>
          <div className="text-sm text-[#0C2E1C]/70">
            Access your funds through multiple channels with integrated wallet solutions
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2.5 py-1 text-xs font-medium">
              Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CountryDetailContent({ c }: { c: CoverageCountry }) {
  return (
    <>
      <CountryDetailHero
        name={c.name}
        iso2={c.iso2}
        region={c.region}
        flag={c.flag}
        paymentSupported={c.paymentSupported}
        payoutCutoff={c.payoutCutoff}
      />

      {/* Coverage Details */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#0C2E1C] mb-6">Coverage Details</h2>
        <CountryDetailTable c={c} />
      </div>

      <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-[#0C2E1C]">
              Similar Region: {c.region}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent ml-6" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {ALL.filter((x) => x.region === c.region && x.iso2 !== c.iso2).map((x) => (
              <Link
                key={x.iso2}
                href={`/resources/network-coverage/${x.iso2.toLowerCase()}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{x.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-[#0C2E1C] truncate">{x.name}</div>
                      <div className="text-xs text-[#0C2E1C]/60">{x.iso2}</div>
                    </div>
                  </div>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0C2E1C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Professional CTA Section */}
        <section className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0C2E1C] via-[#1F3B2E] to-[#2D4A3A] p-12 text-white">
          {/* Background decorative elements */}
          <div className="absolute -top-20 -right-20 h-80 w-80 bg-white/5 blur-3xl rounded-full" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 bg-white/3 blur-2xl rounded-full" />
          
          <div className="relative z-10 text-center">
            <h3 className="text-4xl font-bold mb-4">
              Ready to expand to {c.name}?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Start paying contractors in {c.name} with our comprehensive payroll and payment solutions. 
              Get set up in minutes with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-[#0C2E1C] px-8 py-4 text-lg font-bold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
    </>
  );
}
