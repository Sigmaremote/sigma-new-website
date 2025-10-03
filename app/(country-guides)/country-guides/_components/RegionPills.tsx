'use client';

import { Region } from '../../../../modules/country-guides/types';

interface RegionPillsProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const regions: { value: string; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Middle East', label: 'Middle East' },
  { value: 'North America', label: 'North America' },
  { value: 'South America', label: 'South America' },
  { value: 'Oceania', label: 'Oceania' },
];

export default function RegionPills({ selectedRegion, onRegionChange }: RegionPillsProps) {
  return (
    <div className="inline-flex gap-2 flex-wrap">
      {regions.map((region) => (
        <button
          key={region.value}
          onClick={() => onRegionChange(region.value)}
          data-active={selectedRegion === region.value}
          className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 data-[active=true]:bg-black/90 data-[active=true]:text-white transition-colors duration-200"
        >
          {region.label}
        </button>
      ))}
    </div>
  );
}
