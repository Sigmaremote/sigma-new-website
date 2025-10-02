'use client';

import { useState } from 'react';
import { Download, Copy, Info } from 'lucide-react';
import { CostRow } from '../../../modules/country-guides/types';

interface EmployerCostsTableProps {
  data: CostRow[];
  intro: string;
}

export default function EmployerCostsTable({ data, intro }: EmployerCostsTableProps) {
  const [copied, setCopied] = useState(false);

  const convertToCSV = () => {
    const headers = ['Scenario', 'Gross USD', 'Employer On-Cost', 'Monthly Total', 'Time to Onboard', 'Notes'];
    const rows = data.map(row => [
      row.scenario || 'N/A',
      row.grossUSDExample ? `$${row.grossUSDExample.toLocaleString()}` : 'N/A',
      row.employerOnCostPct || 'N/A',
      row.monthlyEmployerTotalUSD || 'N/A',
      row.timeToOnboard || 'N/A',
      row.notes || 'N/A'
    ]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    
    return csvContent;
  };

  const handleCopyCSV = async () => {
    try {
      await navigator.clipboard.writeText(convertToCSV());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy CSV:', err);
    }
  };

  const handleDownloadCSV = () => {
    const csvContent = convertToCSV();
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'employer-costs.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="employer-costs" className="mb-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-ink-900 mb-4">Employer Costs and Payroll Contributions</h2>
        <p className="text-ink-600 leading-relaxed">{intro}</p>
      </div>
      
      <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
        {/* Table Actions */}
        <div className="px-6 py-4 border-b border-black/5 bg-brand-lime-50 flex justify-end gap-3">
          <button
            onClick={handleCopyCSV}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm text-ink-600 hover:text-ink-900 hover:bg-white rounded-lg transition-colors"
            title="Copy as CSV"
          >
            <Copy className="h-4 w-4" />
            {copied ? 'Copied!' : 'Copy CSV'}
          </button>
          <button
            onClick={handleDownloadCSV}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm text-ink-600 hover:text-ink-900 hover:bg-white rounded-lg transition-colors"
            title="Download CSV"
          >
            <Download className="h-4 w-4" />
            Download CSV
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-separate border-spacing-0">
            <caption className="sr-only">Employer cost breakdown by role</caption>
            <thead>
              <tr>
                <th className="w-[180px] sticky top-0 z-10 bg-white text-xs font-semibold text-black/70 border-b border-black/10 p-3 text-left">
                  Scenario
                </th>
                <th className="w-[100px] sticky top-0 z-10 bg-white text-xs font-semibold text-black/70 border-b border-black/10 p-3 text-right">
                  Gross USD
                </th>
                <th className="w-[120px] sticky top-0 z-10 bg-white text-xs font-semibold text-black/70 border-b border-black/10 p-3 text-right">
                  Employer On-Cost
                </th>
                <th className="w-[120px] sticky top-0 z-10 bg-white text-xs font-semibold text-black/70 border-b border-black/10 p-3 text-right">
                  Monthly Total
                </th>
                <th className="w-[120px] sticky top-0 z-10 bg-white text-xs font-semibold text-black/70 border-b border-black/10 p-3 text-center">
                  Time to Onboard
                </th>
                <th className="min-w-[200px] sticky top-0 z-10 bg-white text-xs font-semibold text-black/70 border-b border-black/10 p-3 text-left">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-brand-lime-50/50 transition-colors">
                  <td className="align-top p-3 text-[15px] text-black/80 border-b border-black/5">
                    {row.scenario}
                  </td>
                  <td className="align-top p-3 text-[15px] text-black/80 border-b border-black/5 text-right tabular-nums">
                    {row.grossUSDExample ? `$${row.grossUSDExample.toLocaleString()}` : 'N/A'}
                  </td>
                  <td className="align-top p-3 text-[15px] text-black/80 border-b border-black/5 text-right tabular-nums">
                    {row.employerOnCostPct || 'N/A'}
                  </td>
                  <td className="align-top p-3 text-[15px] text-black/80 border-b border-black/5 text-right tabular-nums">
                    {row.monthlyEmployerTotalUSD || 'N/A'}
                  </td>
                  <td className="align-top p-3 text-[15px] text-black/80 border-b border-black/5 text-center">
                    {row.timeToOnboard || 'N/A'}
                  </td>
                  <td className="align-top p-3 text-[15px] text-black/80 border-b border-black/5">
                    <div className="flex items-start gap-2 max-w-full">
                      <span className="text-sm leading-tight break-words">{row.notes || 'N/A'}</span>
                      {row.notes && (
                        <Info className="h-3 w-3 text-ink-400 mt-0.5 flex-shrink-0" />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
