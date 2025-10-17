"use client";
import { useEffect, useState } from "react";
import type { Region } from "../types";

export function FilterBar({ regions }: { regions: Region[] }) {
  const [q, setQ] = useState<string>("");
  const [active, setActive] = useState<Region>("All");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q0 = params.get("q") ?? "";
    const r0 = (params.get("region") as Region) ?? "All";
    setQ(q0);
    setActive(r0);
  }, []);

  const writeParams = (nextQ: string, nextR: Region) => {
    const p = new URLSearchParams(window.location.search);
    if (nextQ) p.set("q", nextQ);
    else p.delete("q");
    if (nextR && nextR !== "All") p.set("region", nextR);
    else p.delete("region");
    history.replaceState({}, "", `?${p.toString()}`);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="sticky top-16 z-[1] mb-6 rounded-2xl border border-black/5 bg-white p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            writeParams(e.target.value, active);
          }}
          aria-label="Search countries"
          placeholder="Search countries…"
          className="w-full sm:w-96 rounded-full border border-black/10 bg-white px-4 py-2 outline-none focus:border-black/20"
        />
        <div className="flex flex-wrap gap-2">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => {
                setActive(r);
                writeParams(q, r);
              }}
              className={`rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/[0.03] ${
                active === r ? "bg-[#D6FF57] font-semibold text-[#0C2E1C]" : "bg-white"
              }`}
            >
              {r}
            </button>
          ))}
          {(q || active !== "All") && (
            <button
              onClick={() => {
                setQ("");
                setActive("All");
                writeParams("", "All");
              }}
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
