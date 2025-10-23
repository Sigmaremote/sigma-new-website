"use client";
import { useMemo, useState } from "react";
import {
  coverageCadanaCountries,
  coverageCadanaRegions,
  type CoverageRegion,
} from "@/modules/network-coverage-cadana/data";
import {
  RegionSection,
  SearchBar,
} from "@/modules/network-coverage-cadana/components";

export function DirectoryContent() {
  const [q, setQ] = useState("");

  const filteredByQuery = useMemo(() => {
    const v = q.trim().toLowerCase();
    if (!v) return coverageCadanaCountries;
    return coverageCadanaCountries.filter(
      (c) => c.name.toLowerCase().includes(v) || c.iso2.toLowerCase().includes(v),
    );
  }, [q]);

  return (
    <div className="-mt-4">
      <SearchBar value={q} onChange={setQ} />

      {coverageCadanaRegions.map((region) => {
        const inRegion = filteredByQuery.filter((c) => c.region === region);
        if (!inRegion.length) return null;
        return <RegionSection key={region} region={region as CoverageRegion} countries={inRegion} />;
      })}
    </div>
  );
}
