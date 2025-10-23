'use client';

import { Check, X, AlertTriangle } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  payoneer: {
    text: string;
    status: 'good' | 'warning' | 'bad';
  };
  sigmaRemote: {
    text: string;
    status: 'good' | 'warning' | 'bad';
  };
}

interface PayoneerComparisonTableProps {
  rows: ComparisonRow[];
}

export function PayoneerComparisonTable({ rows }: PayoneerComparisonTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-black/5 overflow-hidden my-8">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-black/5">
          <thead className="bg-[#F2F3F1]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Feature
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-black">
                Payoneer
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-black">
                SigmaRemote
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-black/5">
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-black/5">
                <td className="px-6 py-4 text-sm font-medium text-black">
                  {row.feature}
                </td>
                <td className="px-6 py-4 text-sm text-black">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {row.payoneer.status === 'good' ? (
                        <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-4 w-4 text-green-600" strokeWidth={2.5} />
                        </div>
                      ) : row.payoneer.status === 'warning' ? (
                        <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                          <X className="h-4 w-4 text-red-600" strokeWidth={2.5} />
                        </div>
                      )}
                    </div>
                    <div 
                      className="flex-1"
                      dangerouslySetInnerHTML={{ __html: row.payoneer.text }}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-black">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {row.sigmaRemote.status === 'good' ? (
                        <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-4 w-4 text-green-600" strokeWidth={2.5} />
                        </div>
                      ) : row.sigmaRemote.status === 'warning' ? (
                        <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                          <X className="h-4 w-4 text-red-600" strokeWidth={2.5} />
                        </div>
                      )}
                    </div>
                    <div 
                      className="flex-1"
                      dangerouslySetInnerHTML={{ __html: row.sigmaRemote.text }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
