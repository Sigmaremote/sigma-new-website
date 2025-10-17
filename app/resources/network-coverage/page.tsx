import type { Metadata } from "next";
import {
  CoverageHero,
} from "@/modules/network-coverage-cadana/components";
import { ScriptLDWebPage } from "@/lib/seo-network-coverage-cadana";
import { DirectoryContent } from "./DirectoryContent";

export const metadata: Metadata = {
  title: "Network Coverage | SigmaRemote",
  description:
    "Discover coverage by region. Open any country to view solutions, payout rails, and wallet options.",
  alternates: { canonical: "https://www.sigmaremote.com/resources/network-coverage" },
};

export default function CoverageDirectoryPage() {
  return (
    <>
      <ScriptLDWebPage
        url="https://www.sigmaremote.com/resources/network-coverage"
        name="Network Coverage"
        headline="Network Coverage: Countries and Payout Rails"
      />
      <main className="mx-auto w-full max-w-7xl px-4 md:px-8 py-10">
        <CoverageHero />
        <DirectoryContent />
      </main>
    </>
  );
}
