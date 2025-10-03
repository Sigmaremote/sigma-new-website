'use client';

import { useState, useEffect } from 'react';
import { debounce } from '../../../../modules/country-guides/lib/format';

interface SearchBarProps {
  onSearch: (query: string) => void;
  resultCount: number;
  totalCount: number;
}

export default function SearchBar({ onSearch, resultCount, totalCount }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const debouncedSearch = debounce((searchQuery: string) => {
    onSearch(searchQuery);
  }, 200);

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg 
            className="h-5 w-5 text-black/40" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search countries, currencies, or regions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-black/10 rounded-full bg-white text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-200"
        />
      </div>
      <p className="mt-2 text-sm text-black/60">
        Showing {resultCount} of {totalCount} countries
      </p>
    </div>
  );
}
