'use client';

import { CountryGuideIndexItem } from '../../../../modules/country-guides/types';
import CountryCard from './CountryCard';
import EmptyState from './EmptyState';

interface CountryGridProps {
  countries: CountryGuideIndexItem[];
  onClearFilters: () => void;
  selectedCountries?: CountryGuideIndexItem[];
  onCountryToggle?: (country: CountryGuideIndexItem) => void;
  showCheckbox?: boolean;
}

export default function CountryGrid({ 
  countries, 
  onClearFilters, 
  selectedCountries = [], 
  onCountryToggle, 
  showCheckbox = false 
}: CountryGridProps) {
  if (countries.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {countries.map((country) => (
        <CountryCard 
          key={country.slug} 
          country={country}
          isSelected={selectedCountries.some(c => c.slug === country.slug)}
          onToggleSelect={onCountryToggle}
          showCheckbox={showCheckbox}
        />
      ))}
    </div>
  );
}
