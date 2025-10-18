"use client";
import type { CoverageCountry } from "./data";

export default function CountryTableView({ c }: { c: CoverageCountry }) {
  return (
    <div className="mx-auto w-full">
      {/* SOLUTIONS */}
      <SectionSimple title="Solutions">
        <Block>
          <PillRow items={c.solutions} />
          <p className="mt-3 text-sm text-[#0C2E1C]/75">
            Manage your contractor payments. Handle hiring and admin for contractors with compliance.
          </p>
        </Block>
      </SectionSimple>

      {/* PAYMENT */}
      <SectionSimple title="Payment">
        <Block>
          <SubLabel>Supported</SubLabel>
          <PillRow items={c.paymentSupported} />
        </Block>
        <BlockGrid>
          <KV label="Local Payout Limits" value={c.payoutLimits ?? "None"} />
          <KV label="Payout Cutoff Times" value={c.payoutCutoff ?? "1–2 days"} />
        </BlockGrid>
      </SectionSimple>

      {/* EOR */}
      <SectionSimple title="EOR">
        <Block>
          <SubLabel>Offerings</SubLabel>
          <PillRow items={c.eorOfferings ?? ["Gross to net calculations"]} />
          <p className="mt-3 text-sm text-[#0C2E1C]/75">
            SigmaRemote can calculate compliant payroll line items; statutory remittance may vary by market.
          </p>
        </Block>
      </SectionSimple>

      {/* WALLET */}
      <SectionSimple title="Wallet">
        <Block>
          <SubLabel>Offerings</SubLabel>
          <PillRow items={c.walletOfferings ?? ["Card", "Crypto", "Foreign Bank Accounts"]} />
        </Block>
      </SectionSimple>
    </div>
  );
}

/* ── Minimal table primitives (Cadana-like) ───────────────────────────────── */

function SectionSimple({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-black/[0.06] first:border-t-0">
      <div className="grid grid-cols-1 md:grid-cols-[220px,1fr] gap-2 md:gap-8 py-6">
        <h2 className="px-1 text-xl md:text-[22px] font-semibold text-[#0C2E1C]">{title}</h2>
        <div className="space-y-6">{children}</div>
      </div>
      <div className="h-px w-full bg-black/[0.06]" />
    </section>
  );
}

function Block({ children }: { children: React.ReactNode }) {
  return <div className="px-1">{children}</div>;
}

function BlockGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-1">{children}</div>;
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[13px] font-semibold text-[#0C2E1C]">{label}</div>
      <div className="mt-1 text-sm text-[#0C2E1C]/75">{value}</div>
    </div>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-[#0C2E1C]/55">
      {children}
    </div>
  );
}

function PillRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-8 md:gap-3">
      {items.map((t) => (
        <span
          key={t}
          className="inline-flex items-center rounded-md bg-[#F2F3F1] px-2.5 py-1.5 text-xs font-semibold text-[#0C2E1C]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
