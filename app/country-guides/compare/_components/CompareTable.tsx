'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';
import { CountryGuideIndexItem } from '../../../../modules/country-guides/types';

interface CompareTableProps {
  countries: CountryGuideIndexItem[];
}

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-flex items-center gap-1"
      >
        {children}
        <Info className="h-3 w-3 text-black/40" />
      </div>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg shadow-lg z-10 max-w-xs">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
        </div>
      )}
    </div>
  );
}

interface Metric {
  key: string;
  label: string;
  getValue: (country: CountryGuideIndexItem) => string;
  tooltip?: (country: CountryGuideIndexItem) => string;
}

export default function CompareTable({ countries }: CompareTableProps) {
  const metrics: Metric[] = [
    {
      key: 'employerContributions',
      label: 'Employer Contributions (%)',
      getValue: (country: CountryGuideIndexItem) => country.employerOnCostHint || 'N/A',
      tooltip: (country: CountryGuideIndexItem) => 
        `Mandatory employer contributions in ${country.name} (social security, health, pension, housing, etc.) typically add ${country.employerOnCostHint || '25-30%'} on top of gross salary.`
    },
    {
      key: 'payrollCycle',
      label: 'Payroll Cycle',
      getValue: (country: CountryGuideIndexItem) => country.payrollCycleHint || 'N/A'
    },
    {
      key: 'currency',
      label: 'Currency',
      getValue: (country: CountryGuideIndexItem) => country.currency || 'N/A'
    },
    {
      key: 'thirteenthSalary',
      label: '13th Salary',
      getValue: (country: CountryGuideIndexItem) => country.requires13th ? 'Yes' : 'No'
    },
    {
      key: 'onboardingTime',
      label: 'Onboarding Time',
      getValue: (country: CountryGuideIndexItem) => {
        // This would ideally come from detailed country data
        // For now, using placeholder based on region
        if (country.region === 'North America') return '~3 days';
        if (country.region === 'South America') return '~5 days';
        return '~5 days';
      }
    },
    {
      key: 'region',
      label: 'Region',
      getValue: (country: CountryGuideIndexItem) => country.region
    }
  ];

  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto lg:overflow-x-visible">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th 
                scope="col" 
                className="sticky left-0 bg-white px-3 py-3 text-left text-xs font-semibold text-black/70 border-b border-black/10 z-10"
              >
                Metric
              </th>
              {countries.map(country => (
                <th 
                  key={country.slug}
                  scope="col" 
                  className="px-3 py-3 text-center text-xs font-semibold text-black/70 border-b border-black/10 min-w-[200px]"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-lg">{country.flagEmoji}</span>
                    <span>{country.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {metrics.map(metric => (
              <tr key={metric.key} className="hover:bg-black/5">
                <th 
                  scope="row" 
                  className="sticky left-0 bg-white px-3 py-3 text-left text-[15px] font-semibold text-black/80 border-b border-black/5 z-10"
                >
                  {metric.key === 'employerContributions' && metric.tooltip ? (
                    <Tooltip content={metric.tooltip(countries[0])}>
                      <span>{metric.label}</span>
                    </Tooltip>
                  ) : (
                    metric.label
                  )}
                </th>
                {countries.map(country => (
                  <td 
                    key={`${country.slug}-${metric.key}`}
                    className="px-3 py-3 text-center text-[15px] text-black/80 border-b border-black/5 align-top"
                  >
                    {metric.getValue(country)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden">
        {countries.map(country => (
          <div key={country.slug} className="border-b border-black/10 last:border-b-0">
            <div className="p-4">
              {/* Country Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{country.flagEmoji}</span>
                <div>
                  <h3 className="font-semibold text-black">{country.name}</h3>
                  <p className="text-sm text-black/50">{country.region}</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {metrics.map(metric => (
                  <div key={metric.key} className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-black/70">
                      {metric.key === 'employerContributions' && metric.tooltip ? (
                        <Tooltip content={metric.tooltip(country)}>
                          <span>{metric.label}</span>
                        </Tooltip>
                      ) : (
                        metric.label
                      )}
                    </span>
                    <span className="text-sm text-black font-medium">
                      {metric.getValue(country)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
