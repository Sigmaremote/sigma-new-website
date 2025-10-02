import { CountryGuideContent } from '../types';

interface MinimumWageProps {
  data: CountryGuideContent['minimumWage'];
}

export default function MinimumWage({ data }: MinimumWageProps) {
  if (!data) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-blue-900 mb-3">Minimum Wage (2025)</h3>
      <div className="space-y-2">
        <p className="text-blue-800 font-medium">{data.dailyRate}</p>
        <p className="text-blue-700">or {data.monthlyRate}</p>
        {data.northernBorder && (
          <p className="text-blue-700">Higher in Northern Border Zone ({data.northernBorder})</p>
        )}
        <small className="text-blue-600 text-sm">Source: {data.source}</small>
      </div>
    </div>
  );
}
