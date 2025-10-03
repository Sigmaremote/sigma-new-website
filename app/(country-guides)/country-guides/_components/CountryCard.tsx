'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Percent, Calendar, Banknote, Info, Gavel, Zap, Gift, ArrowRight, Check } from 'lucide-react';
import { CountryGuideIndexItem } from '../../../../modules/country-guides/types';
import { getRegionColor } from '../../../../modules/country-guides/lib/format';

interface CountryCardProps {
  country: CountryGuideIndexItem;
  isSelected?: boolean;
  onToggleSelect?: (country: CountryGuideIndexItem) => void;
  showCheckbox?: boolean;
}

export default function CountryCard({ country, isSelected = false, onToggleSelect, showCheckbox = false }: CountryCardProps) {
  const getFactIcon = (type: string) => {
    switch (type) {
      case 'employer':
        return <Percent className="h-4 w-4 text-black/60" aria-hidden="true" />;
      case 'payroll':
        return <Calendar className="h-4 w-4 text-black/60" aria-hidden="true" />;
      case 'currency':
        return <Banknote className="h-4 w-4 text-black/60" aria-hidden="true" />;
      default:
        return null;
    }
  };

  const getHoverIcon = (highlight: string) => {
    if (highlight.toLowerCase().includes('13th') || highlight.toLowerCase().includes('salary')) {
      return <Gift className="h-4 w-4 text-black/60" aria-hidden="true" />;
    }
    if (highlight.toLowerCase().includes('onboarding') || highlight.toLowerCase().includes('fast')) {
      return <Zap className="h-4 w-4 text-black/60" aria-hidden="true" />;
    }
    if (highlight.toLowerCase().includes('termination') || highlight.toLowerCase().includes('severance') || highlight.toLowerCase().includes('mandatory') || highlight.toLowerCase().includes('insurance')) {
      return <Gavel className="h-4 w-4 text-black/60" aria-hidden="true" />;
    }
    return <Info className="h-4 w-4 text-black/60" aria-hidden="true" />;
  };

  const getFacts = () => {
    const facts = [];
    
    if (country.employerOnCostHint) {
      facts.push({
        icon: getFactIcon('employer'),
        label: 'Employer Contributions (%)',
        value: country.employerOnCostHint
      });
    }
    
    if (country.payrollCycleHint) {
      facts.push({
        icon: getFactIcon('payroll'),
        label: 'Payroll cycle',
        value: country.payrollCycleHint
      });
    }
    
    if (country.currency) {
      facts.push({
        icon: getFactIcon('currency'),
        label: 'Currency',
        value: country.currency
      });
    }
    
    return facts.slice(0, 3); // Max 3 facts
  };

  const getHoverHighlights = () => {
    if (country.hoverHighlights && country.hoverHighlights.length > 0) {
      return country.hoverHighlights.slice(0, 3);
    }
    
    // Fallback: derive from existing data
    const highlights = [];
    if (country.requires13th) {
      highlights.push('13th salary required');
    }
    if (country.tags?.includes('Fast onboarding')) {
      highlights.push('Onboarding ~3 days');
    } else {
      highlights.push('Onboarding ~5 days');
    }
    return highlights;
  };

  const facts = getFacts();
  const hoverHighlights = getHoverHighlights();

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleSelect) {
      onToggleSelect(country);
    }
  };

  return (
    <Link 
      href={`/country-guides/${country.slug}`}
      className="group relative rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:outline-none"
      role="link"
      aria-label={`View ${country.name} hiring guide`}
    >
      {/* Image with flag badge */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={country.image}
          alt={`${country.name} skyline`}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
        
        {/* Checkbox */}
        {showCheckbox && (
          <button
            onClick={handleCheckboxClick}
            className={`absolute top-3 left-3 rounded-md border border-black/20 bg-white/90 backdrop-blur p-1 shadow-sm transition-all hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/30 ${
              isSelected ? 'bg-[#D6FF57] border-[#D6FF57]' : ''
            }`}
            aria-label={`${isSelected ? 'Remove' : 'Add'} ${country.name} to comparison`}
          >
            {isSelected && <Check className="h-3 w-3 text-black" />}
          </button>
        )}
        
        {country.flagEmoji && (
          <div className="absolute top-3 right-3 text-lg bg-white/90 backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center shadow-sm">
            {country.flagEmoji}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="relative p-4 space-y-3">
        {/* Country name and region */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-black/90 text-lg">{country.name}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRegionColor(country.region)}`}>
            {country.region}
          </span>
        </div>

        {/* Facts */}
        <div className="space-y-3">
          {facts.length > 0 ? (
            facts.map((fact, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="mt-[2px] flex-shrink-0">
                  {fact.icon}
                </div>
                <div className="flex-1 min-w-0 max-w-none">
                  <div className="text-[11px] uppercase tracking-wide text-black/45">
                    {fact.label}
                  </div>
                  <div className="text-[15px] font-semibold text-black leading-6" style={{whiteSpace: 'nowrap', overflow: 'hidden', minWidth: 'max-content'}}>
                    {fact.value}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-sm text-black/50 italic">
              Key facts available in the guide
            </div>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-white/95 backdrop-blur-sm border-t border-black/10 p-3 transition-all duration-200">
          <div className="space-y-2">
            {hoverHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2 text-[14px] text-black/80">
                {getHoverIcon(highlight)}
                <span>{highlight}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-black/10">
              <span className="text-[14px] font-semibold underline underline-offset-4">
                View guide
              </span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
