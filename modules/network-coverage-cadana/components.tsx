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
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${gradient} p-10 text-white mb-10`}>
      <div className="absolute -top-10 -right-10 h-48 w-48 bg-white/10 blur-2xl rounded-full" />
      <div className="relative">
        <h1 className="text-4xl font-semibold tracking-tight flex items-center gap-3">
          <span>{flag}</span> {name}
          <span className="text-lg font-normal">{iso2}</span>
        </h1>
        <p className="mt-1 text-md/6 text-white/80">{region}</p>
        <div className="mt-4 flex flex-wrap gap-6 text-sm text-white/90">
          <Metric label="Payout Rails" value={paymentSupported.length.toString()} />
          <Metric label="Avg. Settlement" value={payoutCutoff ?? "1–2 days"} />
          <Metric label="FX Fee" value="0–1 %" />
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

function DataCard({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <section className="rounded-2xl bg-gradient-to-b from-white to-[#FAFAFA] p-6 shadow-sm hover:shadow-md transition-all duration-150">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0C2E1C]">
        {icon} {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function TagRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <div
          key={t}
          className="inline-flex items-center rounded-md bg-[#F2F3F1] px-3 py-1.5 text-xs font-medium text-[#0C2E1C] shadow-inner hover:shadow-sm transition-all duration-150 cursor-default"
          title={`${t} - Click for more details`}
        >
          {t}
        </div>
      ))}
    </div>
  );
}

function KeyVal({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-4 shadow-sm">
      <div className="text-xs text-[#0C2E1C]/60">{label}</div>
      <div className="text-sm font-semibold text-[#0C2E1C] mt-1">{value}</div>
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

      <div className="space-y-8">
        <DataCard title="Solutions" icon={<Briefcase className="h-5 w-5 text-[#0C2E1C]" />}>
          <TagRow items={c.solutions} />
          <p className="mt-3 text-sm text-[#0C2E1C]/75">
            Manage contractor payments and compliance administration efficiently.
          </p>
        </DataCard>

        <DataCard title="Payment" icon={<CreditCard className="h-5 w-5 text-[#0C2E1C]" />}>
          <p className="text-sm font-medium text-[#0C2E1C]/80">Supported</p>
          <TagRow items={c.paymentSupported} />
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <KeyVal label="Local Payout Limits" value={c.payoutLimits ?? "None"} />
            <KeyVal label="Payout Cutoff Times" value={c.payoutCutoff ?? "1–2 days"} />
          </div>
        </DataCard>

        <DataCard title="EOR" icon={<FileText className="h-5 w-5 text-[#0C2E1C]" />}>
          <TagRow items={c.eorOfferings ?? ["Gross to net calculations"]} />
          <p className="mt-2 text-sm text-[#0C2E1C]/75">
            SigmaRemote calculates compliant payroll lines; statutory remittance varies by market.
          </p>
        </DataCard>

        <DataCard title="Wallet" icon={<Wallet className="h-5 w-5 text-[#0C2E1C]" />}>
          <TagRow items={c.walletOfferings ?? ["Card", "Crypto", "Foreign Bank Accounts"]} />
        </DataCard>

        <section className="mt-10">
          <h3 className="text-lg font-semibold text-[#0C2E1C] mb-3">
            Similar Region: {c.region}
          </h3>
          <div className="flex overflow-x-auto gap-3 pb-3 snap-x snap-mandatory">
            {ALL.filter((x) => x.region === c.region).map((x) => (
              <Link
                key={x.iso2}
                href={`/resources/network-coverage/${x.iso2.toLowerCase()}`}
                className="snap-start flex-shrink-0"
              >
                <div className="rounded-xl border border-black/5 bg-white p-3 shadow-sm hover:shadow-md transition-all duration-150 flex items-center gap-2">
                  <span className="text-lg">{x.flag}</span>
                  <span className="text-sm font-medium text-[#0C2E1C]">{x.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
