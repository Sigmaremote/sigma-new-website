'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CountryMultiSelect from './_components/CountryMultiSelect';
import CompareTable from './_components/CompareTable';
import { CountryGuideIndexItem } from '../../../modules/country-guides/types';
import { countryIndexList } from '../../../modules/country-guides/data/indexList';

export default function ComparePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCountries, setSelectedCountries] = useState<CountryGuideIndexItem[]>([]);

  // Parse URL params on load
  useEffect(() => {
    const countriesParam = searchParams.get('countries');
    if (countriesParam) {
      const countrySlugs = countriesParam.split(',');
      const countries = countrySlugs
        .map(slug => countryIndexList.find((country: CountryGuideIndexItem) => country.slug === slug.trim()))
        .filter(Boolean) as CountryGuideIndexItem[];
      
      setSelectedCountries(countries);
    }
  }, [searchParams]);

  // Update URL when selection changes
  const handleCountrySelection = (countries: CountryGuideIndexItem[]) => {
    setSelectedCountries(countries);
    
    if (countries.length > 0) {
      const slugs = countries.map(c => c.slug).join(',');
      router.push(`/country-guides/compare?countries=${slugs}`, { scroll: false });
    } else {
      router.push('/country-guides/compare', { scroll: false });
    }
  };

  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = [
    'All', 'LATAM', 'EMEA', 'APAC', 'North America', 'South America', 
    'Europe', 'Asia', 'Africa', 'Oceania'
  ];

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    if (region === 'All') {
      // Show all countries
    } else if (region === 'LATAM') {
      // Pre-select LATAM countries
      const latamCountries = countryIndexList.filter(country => 
        country.region === 'North America' || country.region === 'South America'
      );
      handleCountrySelection(latamCountries.slice(0, 4));
    } else if (region === 'EMEA') {
      // Pre-select EMEA countries
      const emeaCountries = countryIndexList.filter(country => 
        country.region === 'Europe' || country.region === 'Africa' || country.region === 'Middle East'
      );
      handleCountrySelection(emeaCountries.slice(0, 4));
    } else if (region === 'APAC') {
      // Pre-select APAC countries
      const apacCountries = countryIndexList.filter(country => 
        country.region === 'Asia' || country.region === 'Oceania'
      );
      handleCountrySelection(apacCountries.slice(0, 4));
    } else {
      // Filter by specific region
      const regionCountries = countryIndexList.filter(country => country.region === region);
      handleCountrySelection(regionCountries.slice(0, 4));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/country-guides" 
            className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> 
            Back to all countries
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
            Compare Countries
          </h1>
          <p className="mt-2 text-black/70">
            Compare key metrics across different countries to make informed hiring decisions.
          </p>
          
          {/* Preset Region Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => handleRegionSelect(region)}
                data-active={selectedRegion === region}
                className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 data-[active=true]:bg-black/90 data-[active=true]:text-white transition-colors"
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Country Multi-Select */}
        <div className="mb-8">
          <CountryMultiSelect
            selectedCountries={selectedCountries}
            onSelectionChange={handleCountrySelection}
            allCountries={countryIndexList}
          />
        </div>

        {/* Content */}
        {selectedCountries.length > 0 ? (
          <div className="space-y-6">
            {/* Comparison Title */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black">
                Comparison: {selectedCountries.map(c => c.name).join(' vs ')}
              </h2>
              <p className="mt-2 text-black/70">
                Key employer cost and compliance metrics, based on 2025 data.
              </p>
            </div>

            {/* Actions Row */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
              <p className="text-sm text-black/50">
                Comparing {selectedCountries.length} countries
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const csv = generateCSV(selectedCountries);
                    navigator.clipboard.writeText(csv);
                  }}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 transition-colors"
                >
                  Copy CSV
                </button>
                <button
                  onClick={() => {
                    const csv = generateCSV(selectedCountries);
                    downloadCSV(csv, 'country-comparison.csv');
                  }}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 transition-colors"
                >
                  Download CSV
                </button>
              </div>
            </div>

            {/* Comparison Table */}
            <CompareTable countries={selectedCountries} />

            {/* Bottom CTA */}
            <div className="mt-10 rounded-2xl bg-[#0C2E1C] text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  Need help with global hiring?
                </h3>
                <p className="text-white/80">
                  Our team can help you navigate compliance and set up payroll in any of these countries.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/country-guides/compare?countries=mexico,colombia,argentina"
                  className="bg-[#D1FF94] text-black px-6 py-3 rounded-full font-medium hover:bg-[#C8FF66] transition-colors duration-200 text-center"
                >
                  See Countries Comparison
                </Link>
                <a 
                  href="https://cal.com/globalpayroll/demo-25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors duration-200 text-center"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Choose up to 4 countries to compare
              </h3>
              <p className="text-black/70 mb-6">
                Select countries from the picker above to see a detailed comparison of key metrics.
              </p>
              <button
                onClick={() => {
                  document.querySelector('[data-country-picker]')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="px-6 py-3 bg-[#D1FF94] text-black rounded-full font-medium hover:bg-[#C8FF66] transition-colors"
              >
                Select Countries
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// CSV generation helper
function generateCSV(countries: CountryGuideIndexItem[]): string {
  const headers = [
    'Country',
    'Region',
    'Currency',
    'Employer Contributions',
    'Payroll Cycle',
    '13th Salary',
    'Onboarding Time',
    'Capital',
    'Language'
  ];

  const rows = countries.map(country => [
    country.name,
    country.region,
    country.currency || 'N/A',
    country.employerOnCostHint || 'N/A',
    country.payrollCycleHint || 'N/A',
    country.requires13th ? 'Yes' : 'No',
    'N/A', // This would need to come from detailed country data
    country.capital || 'N/A',
    country.language || 'N/A'
  ]);

  return [headers, ...rows].map(row => 
    row.map(cell => `"${cell}"`).join(',')
  ).join('\n');
}

// CSV download helper
function downloadCSV(csv: string, filename: string): void {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
