'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X, ChevronDown, MapPin } from 'lucide-react';
import { CountryGuideIndexItem, Region } from '../../../../modules/country-guides/types';

interface CountryMultiSelectProps {
  selectedCountries: CountryGuideIndexItem[];
  onSelectionChange: (countries: CountryGuideIndexItem[]) => void;
  allCountries: CountryGuideIndexItem[];
}

const regions: Region[] = [
  'North America',
  'South America', 
  'Europe',
  'Asia',
  'Africa',
  'Oceania',
  'Middle East'
];

export default function CountryMultiSelect({ 
  selectedCountries, 
  onSelectionChange, 
  allCountries 
}: CountryMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter countries based on search and region
  const filteredCountries = allCountries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         country.capital?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const handleCountryToggle = (country: CountryGuideIndexItem) => {
    const isSelected = selectedCountries.some(c => c.slug === country.slug);
    
    if (isSelected) {
      // Remove country
      onSelectionChange(selectedCountries.filter(c => c.slug !== country.slug));
    } else {
      // Add country (max 4)
      if (selectedCountries.length < 4) {
        onSelectionChange([...selectedCountries, country]);
      }
    }
  };

  const removeCountry = (countrySlug: string) => {
    onSelectionChange(selectedCountries.filter(c => c.slug !== countrySlug));
  };

  const isCountrySelected = (country: CountryGuideIndexItem) => {
    return selectedCountries.some(c => c.slug === country.slug);
  };

  return (
    <div className="w-full" data-country-picker>
      <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
        {/* Selected Countries Display - Compact Chips */}
        {selectedCountries.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedCountries.map(country => (
              <div
                key={country.slug}
                className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1.5 text-sm hover:bg-black/10 transition-colors"
              >
                <span>{country.flagEmoji}</span>
                <span>{country.name}</span>
                <button
                  onClick={() => removeCountry(country.slug)}
                  className="hover:bg-black/20 rounded-full p-0.5 transition-colors"
                  aria-label={`Remove ${country.name}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Search Input */}
        <div className="mt-3">
          <input
            type="text"
            placeholder="Search by country or region…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/10"
            onFocus={() => setIsOpen(true)}
          />
        </div>

        {/* Region Filter Pills */}
        <div className="mt-3 flex flex-wrap gap-2">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region as Region | 'All')}
              data-active={selectedRegion === region}
              className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 data-[active=true]:bg-black/90 data-[active=true]:text-white transition-colors"
            >
              {region}
            </button>
          ))}
        </div>

        {/* Toggle Selection Button */}
        <div className="mt-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black transition-colors"
          >
            <span>{isOpen ? 'Hide' : 'Show'} country selection</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Compact Country Selection */}
        {isOpen && (
          <div className="mt-4 p-3 border-t border-black/10">
            <div className="text-sm text-black/70 mb-3">Select countries to compare:</div>
            <div className="flex flex-wrap gap-2">
              {filteredCountries.map(country => {
                const isSelected = isCountrySelected(country);
                const isDisabled = !isSelected && selectedCountries.length >= 4;
                
                return (
                  <button
                    key={country.slug}
                    onClick={() => handleCountryToggle(country)}
                    disabled={isDisabled}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors ${
                      isSelected
                        ? 'bg-[#D6FF57] text-black border border-[#D6FF57]'
                        : isDisabled
                        ? 'text-black/40 cursor-not-allowed bg-black/5'
                        : 'bg-white border border-black/10 text-black hover:bg-black/5'
                    }`}
                  >
                    <span>{country.flagEmoji}</span>
                    <span>{country.name}</span>
                  </button>
                );
              })}
            </div>
            {filteredCountries.length === 0 && (
              <div className="text-center text-black/50 text-sm py-4">
                No countries found matching your search.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
