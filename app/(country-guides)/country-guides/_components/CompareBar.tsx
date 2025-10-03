'use client';

import { X } from 'lucide-react';
import { CountryGuideIndexItem } from '../../../../modules/country-guides/types';
import { useRouter } from 'next/navigation';

interface CompareBarProps {
  selectedCountries: CountryGuideIndexItem[];
  onRemoveCountry: (countrySlug: string) => void;
  onClearAll: () => void;
}

export default function CompareBar({ selectedCountries, onRemoveCountry, onClearAll }: CompareBarProps) {
  const router = useRouter();

  const handleCompare = () => {
    const slugs = selectedCountries.map(c => c.slug).join(',');
    router.push(`/country-guides/compare?countries=${slugs}`);
  };

  if (selectedCountries.length === 0) return null;

  return (
    <div 
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-3xl w-[calc(100%-2rem)] z-50"
      role="region"
      aria-label="Country comparison selection"
    >
      <div className="rounded-2xl border border-black/10 bg-white p-3 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          {/* Left side - Selection info and chips */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="text-sm font-medium text-black whitespace-nowrap">
              Comparing {selectedCountries.length} countries
            </span>
            
            <div className="flex gap-2 flex-wrap">
              {selectedCountries.map(country => (
                <div
                  key={country.slug}
                  className="flex items-center gap-2 bg-black/5 text-black px-2 py-1 rounded-full text-sm font-medium border border-black/10"
                >
                  <span>{country.flagEmoji}</span>
                  <span className="truncate max-w-[100px]">{country.name}</span>
                  <button
                    onClick={() => onRemoveCountry(country.slug)}
                    className="hover:bg-black/10 rounded-full p-0.5 transition-colors"
                    aria-label={`Remove ${country.name}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={onClearAll}
              className="px-3 py-1.5 text-sm text-black/70 hover:text-black hover:bg-black/5 rounded-full transition-colors"
            >
              Clear
            </button>
            <button
              onClick={handleCompare}
              className="px-4 py-1.5 bg-[#D6FF57] text-black rounded-full font-medium hover:bg-[#C4E84A] transition-colors text-sm"
            >
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
