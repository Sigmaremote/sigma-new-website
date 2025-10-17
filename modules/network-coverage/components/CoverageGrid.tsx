"use client";
import { useEffect, useState, useMemo } from "react";
import type { Coverage, Region } from "../types";
import { CountryCard } from "./CountryCard";
import { CountryDrawer } from "./CountryDrawer";

export function CoverageGrid({ countries }: { countries: Coverage[] }) {
  const [q, setQ] = useState<string>("");
  const [region, setRegion] = useState<Region>("All");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q0 = params.get("q") ?? "";
    const r0 = (params.get("region") as Region) ?? "All";
    setQ(q0);
    setRegion(r0);

    const handler = () => {
      const params = new URLSearchParams(window.location.search);
      const q1 = params.get("q") ?? "";
      const r1 = (params.get("region") as Region) ?? "All";
      setQ(q1);
      setRegion(r1);
    };

    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const filtered = useMemo(() => {
    return countries.filter((c) => {
      const inRegion = !region || region === "All" || c.region === region;
      const inQuery =
        !q ||
        c.country.toLowerCase().includes(q) ||
        c.iso2.toLowerCase().includes(q) ||
        c.notes?.toLowerCase().includes(q);
      return inRegion && inQuery;
    }).sort((a, b) => a.country.localeCompare(b.country));
  }, [q, region, countries]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {filtered.map((c) => (
        <CountryCard key={c.iso2} data={c} />
      ))}
      {filtered.length === 0 && (
        <div className="col-span-full rounded-xl border border-black/5 bg-white p-6 text-sm">
          No results. Try a different region or search term.
        </div>
      )}
      {/* Drawer portal (renders selected country details) */}
      <CountryDrawer />
    </div>
  );
}
