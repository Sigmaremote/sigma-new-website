"use client";
import Link from "next/link";
import { coverageCadanaCountries as ALL, type CoverageCountry } from "./data";
import CountryTableView from "./table-view";

export default function CountryDetailClient({ country }: { country: CoverageCountry }) {

  return (
    <main className="mx-auto w-full max-w-6xl px-4 md:px-8 py-8 space-y-8">
      {/* Back */}
      <Link href="/resources/network-coverage" className="text-sm text-[#0C2E1C]/70 underline">
        ← Back to all countries
      </Link>

      {/* Hero summary (compact like yours; keep Sigma styling) */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0C2E1C] to-[#193926] p-8 text-white">
        <h1 className="text-3xl font-semibold tracking-tight flex items-center gap-3">
          <span className="text-2xl">{country.flag}</span> {country.name}
          <span className="text-lg font-light">{country.iso2}</span>
        </h1>
        <p className="mt-1 text-sm text-white/80">{country.region}</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Stat label="Payout Rails" value={(country.paymentSupported?.length ?? 0).toString()} />
          <Stat label="Avg. Settlement" value={country.payoutCutoff ?? "1–2 days"} />
          <Stat label="FX Fee" value="0–1 %" />
        </div>
      </section>

      {/* Coverage Details */}
      <section>
        <h2 className="text-base font-semibold text-[#0C2E1C] mb-6">Coverage Details</h2>
        <CountryTableView c={country} />
      </section>

      {/* Similar region */}
      <section className="mt-8">
        <h3 className="text-sm font-semibold text-[#0C2E1C] mb-3">Similar Region: {country.region}</h3>
        <div className="flex flex-wrap gap-2">
          {ALL.filter((x) => x.region === country.region).map((x) => (
            <Link
              key={x.iso2}
              href={`/resources/network-coverage/${x.iso2.toLowerCase()}`}
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm hover:bg-black/[0.03]"
            >
              <span className="text-base">{x.flag}</span>
              <span>{x.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA (Sigma colors) */}
      <section className="rounded-3xl bg-gradient-to-r from-[#0C2E1C] to-[#193926] p-8 text-center text-white">
        <h3 className="text-xl font-semibold">Ready to expand to {country.name}?</h3>
        <p className="mt-1 text-sm text-white/80">
          Start paying contractors in {country.name}. Get set up in minutes with our team.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-[#D6FF57] px-5 py-2.5 text-sm font-semibold text-[#0C2E1C] hover:opacity-90"
          >
            Get Started Today
          </Link>
          <Link
            href="/pricing"
            className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/10 px-4 py-3">
      <div className="text-[11px] uppercase tracking-wide text-white/70">{label}</div>
      <div className="text-base font-semibold">{value}</div>
    </div>
  );
}

