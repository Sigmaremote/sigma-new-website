'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Container from '../../../components/Container';
import Hero from './_components/Hero';
import SearchBar from './_components/SearchBar';
import RegionPills from './_components/RegionPills';
import TagFilters from './_components/TagFilters';
import CountryGrid from './_components/CountryGrid';
import BottomCTA from './_components/BottomCTA';
import FAQLanding from './_components/FAQLanding';
import CompareBar from './_components/CompareBar';
import { countryIndexList } from '../../../modules/country-guides/data/indexList';
import { CountryGuideIndexItem } from '../../../modules/country-guides/types';

export default function CountryGuidesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedRegion, setSelectedRegion] = useState(searchParams.get('region') || 'all');
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get('tags')?.split(',').filter(Boolean) || []
  );
  const [selectedCountries, setSelectedCountries] = useState<CountryGuideIndexItem[]>([]);

  // Parse compare selection from URL on load
  useEffect(() => {
    const pickParam = searchParams.get('pick');
    if (pickParam) {
      const countrySlugs = pickParam.split(',');
      const countries = countrySlugs
        .map(slug => countryIndexList.find((country: CountryGuideIndexItem) => country.slug === slug.trim()))
        .filter(Boolean) as CountryGuideIndexItem[];
      setSelectedCountries(countries);
    }
  }, [searchParams]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedRegion !== 'all') params.set('region', selectedRegion);
    if (selectedTags.length > 0) params.set('tags', selectedTags.join(','));
    if (selectedCountries.length > 0) params.set('pick', selectedCountries.map(c => c.slug).join(','));
    
    const newUrl = params.toString() ? `?${params.toString()}` : '';
    router.replace(`/country-guides${newUrl}`, { scroll: false });
  }, [searchQuery, selectedRegion, selectedTags, selectedCountries, router]);

  const filteredCountries = useMemo(() => {
    return countryIndexList.filter(country => {
      // Search filter
      const matchesSearch = !searchQuery || 
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.capital?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.currency?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.language?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Region filter
      const matchesRegion = selectedRegion === 'all' || country.region === selectedRegion;
      
      // Tag filter
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => country.tags?.includes(tag as any));
      
      return matchesSearch && matchesRegion && matchesTags;
    });
  }, [searchQuery, selectedRegion, selectedTags]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedTags([]);
  };

  const handleCountryToggle = (country: CountryGuideIndexItem) => {
    const isSelected = selectedCountries.some(c => c.slug === country.slug);
    
    if (isSelected) {
      setSelectedCountries(selectedCountries.filter(c => c.slug !== country.slug));
    } else {
      if (selectedCountries.length < 4) {
        setSelectedCountries([...selectedCountries, country]);
      }
    }
  };

  const handleRemoveCountry = (countrySlug: string) => {
    setSelectedCountries(selectedCountries.filter(c => c.slug !== countrySlug));
  };

  const handleClearCompare = () => {
    setSelectedCountries([]);
  };

  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which countries have the lowest employer on-costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mexico typically has the lowest employer costs at ~25-30%, followed by Colombia at ~30-35%. These costs include social security, benefits, and mandatory contributions."
        }
      },
      {
        "@type": "Question",
        "name": "Which countries require a 13th salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Latin American countries including Mexico, Colombia, and Argentina require a 13th salary (aguinaldo). This is typically paid in December and represents one month's additional salary."
        }
      },
      {
        "@type": "Question",
        "name": "Where is onboarding fastest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mexico offers the fastest onboarding with EOR services, typically taking 1-3 days. Colombia and Argentina usually take 3-5 days for complete setup and first payroll."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between EOR and contractor hiring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EOR (Employer of Record) provides full employment with benefits and compliance, while contractors offer flexibility but limited protection. EOR is recommended for long-term hires."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sigmaremote.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Country Guides",
        "item": "https://sigmaremote.com/country-guides"
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      <main className="min-h-screen bg-white">
        <Container>
          <div className="py-12 space-y-16">
            {/* Hero Section */}
            <div className="text-center">
              <Hero />
            </div>

            {/* Controls */}
            <div id="countries" className="space-y-6">
              {/* Search Bar */}
              <SearchBar 
                onSearch={setSearchQuery}
                resultCount={filteredCountries.length}
                totalCount={countryIndexList.length}
              />

            {/* Filters Row */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <RegionPills 
                selectedRegion={selectedRegion} 
                onRegionChange={setSelectedRegion} 
              />
              <TagFilters 
                selectedTags={selectedTags}
                onTagsChange={setSelectedTags}
              />
            </div>

              {/* Countries Grid */}
              <CountryGrid 
                countries={filteredCountries}
                onClearFilters={clearFilters}
                selectedCountries={selectedCountries}
                onCountryToggle={handleCountryToggle}
                showCheckbox={true}
              />
            </div>

            {/* Bottom CTA */}
            <BottomCTA />

            {/* FAQ Section */}
            <FAQLanding />
          </div>
        </Container>

        {/* Sticky Compare Bar */}
        <CompareBar
          selectedCountries={selectedCountries}
          onRemoveCountry={handleRemoveCountry}
          onClearAll={handleClearCompare}
        />
      </main>
    </>
  );
}
