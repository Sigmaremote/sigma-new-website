'use client';

import { useState, useMemo } from 'react';
import Container from '../../../components/Container';
import SearchBar from '../../../modules/country-guides/components/SearchBar';
import RegionFilter from '../../../modules/country-guides/components/RegionFilter';
import CountryCard from '../../../modules/country-guides/components/CountryCard';
import { countryIndexList } from '../../../modules/country-guides/data/indexList';

export default function CountryGuidesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredCountries = useMemo(() => {
    return countryIndexList.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           country.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === 'all' || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Your Global Hiring Guide
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Explore hiring laws, employer costs, and compliance requirements for countries around the world. 
              Make informed decisions about your global team expansion.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <SearchBar onSearch={setSearchQuery} />
            </div>
            <div className="sm:w-64">
              <RegionFilter 
                selectedRegion={selectedRegion} 
                onRegionChange={setSelectedRegion} 
              />
            </div>
          </div>

          {/* Counter */}
          <div className="mb-8">
            <p className="text-black/70">
              Showing {filteredCountries.length} of {countryIndexList.length} countries
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCountries.map((country) => (
              <CountryCard key={country.slug} country={country} />
            ))}
          </div>

          {filteredCountries.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black/60 text-lg">No countries found matching your criteria.</p>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
