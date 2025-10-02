import { CostRow } from '../types';

interface DataTableProps {
  data: CostRow[];
  caption?: string;
}

export default function DataTable({ data, caption }: DataTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-black/5">
          {caption && (
            <caption className="sr-only">{caption}</caption>
          )}
          <thead className="bg-[#F2F3F1]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-black/60 uppercase tracking-wider">
                Scenario
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black/60 uppercase tracking-wider">
                Gross USD
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black/60 uppercase tracking-wider">
                Employer On-Cost
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black/60 uppercase tracking-wider">
                Monthly Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black/60 uppercase tracking-wider">
                Time to Onboard
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black/60 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-black/5">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-black/5">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  {row.scenario}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {row.grossUSDExample ? `$${row.grossUSDExample.toLocaleString()}` : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {row.employerOnCostPct || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {row.monthlyEmployerTotalUSD || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {row.timeToOnboard || 'N/A'}
                </td>
                <td className="px-6 py-4 text-sm text-black/70">
                  {row.notes || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
