'use client';

interface EmptyStateProps {
  onClearFilters: () => void;
}

export default function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 bg-black/5 rounded-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-black/40" 
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
        <h3 className="text-lg font-semibold text-black mb-2">
          No countries found
        </h3>
        <p className="text-black/60 mb-6">
          Try adjusting your search or filters to find what you're looking for.
        </p>
        <button
          onClick={onClearFilters}
          className="bg-lime text-black px-6 py-3 rounded-full font-medium hover:bg-lime-fallback transition-colors duration-200"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}
