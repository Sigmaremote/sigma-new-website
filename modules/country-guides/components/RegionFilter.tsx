import { Region } from '../types';

interface RegionFilterProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export default function RegionFilter({ selectedRegion, onRegionChange }: RegionFilterProps) {
  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'North America', label: 'North America' },
    { value: 'South America', label: 'South America' }
  ];

  return (
    <div className="relative">
      <select
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="appearance-none bg-white border border-black/10 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-[#D6FF57] focus:border-[#D6FF57] transition-colors cursor-pointer"
      >
        {regions.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
