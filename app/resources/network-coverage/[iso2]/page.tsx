import type { Metadata as Meta2 } from "next";
import Link from "next/link";
import {
  coverageCadanaCountries as ALL,
  type CoverageCountry as CC,
} from "@/modules/network-coverage-cadana/data";
import { CountryDetailContent } from "@/modules/network-coverage-cadana/components";
import { ScriptLDWebPage } from "@/lib/seo-network-coverage-cadana";

type Params = { iso2: string };

export function generateMetadata({ params }: { params: Params }): Meta2 {
  const iso = params.iso2.toUpperCase();
  const c = ALL.find((x) => x.iso2 === iso);
  const title = c ? `${c.name} Coverage | SigmaRemote` : "Country Coverage | SigmaRemote";
  return {
    title,
    description:
      "Solutions, payout rails, limits, and wallet options. Explore SigmaRemote coverage for this country.",
    alternates: {
      canonical: `https://www.sigmaremote.com/resources/network-coverage/${params.iso2}`,
    },
  };
}

export default function CountryDetailPage({ params }: { params: Params }) {
  const iso = params.iso2.toUpperCase();
  const c = ALL.find((x) => x.iso2 === iso);

  if (!c) {
    return (
      <main className="mx-auto w-full max-w-7xl px-4 md:px-8 py-10">
        <p className="text-sm text-[#0C2E1C]/70">
          Not found. Go back to{" "}
          <Link href="/resources/network-coverage" className="underline">
            all countries
          </Link>
          .
        </p>
      </main>
    );
  }

  return (
    <>
      <ScriptLDWebPage
        url={`https://www.sigmaremote.com/resources/network-coverage/${params.iso2}`}
        name={`${c.name} Coverage`}
        headline={`${c.name}: Solutions and Payout Rails`}
      />
      <main className="mx-auto w-full max-w-5xl px-4 md:px-8 py-8">
        <Link href="/resources/network-coverage" className="text-sm text-[#0C2E1C]/70 underline">
          ← Back to all countries
        </Link>

        <div className="mt-8">
          <CountryDetailContent c={c} />
        </div>
      </main>
    </>
  );
}
