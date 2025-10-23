import { CountryGuideContent } from '../types';

interface BenefitsAndRisksProps {
  data: {
    benefitsPackage?: string[];
    countryStats?: CountryGuideContent['countryStats'];
    misclassificationRisks?: string;
  };
}

export default function BenefitsAndRisks({ data }: BenefitsAndRisksProps) {
  return (
    <div className="space-y-8">
      {/* Country Stats */}
      {data.countryStats && (
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-black mb-4">Quick Facts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <span className="text-sm text-black/60">Capital</span>
              <p className="font-medium text-black">{data.countryStats.capital}</p>
            </div>
            <div>
              <span className="text-sm text-black/60">Currency</span>
              <p className="font-medium text-black">{data.countryStats.currency}</p>
            </div>
            <div>
              <span className="text-sm text-black/60">Population</span>
              <p className="font-medium text-black">{data.countryStats.population}</p>
            </div>
            <div>
              <span className="text-sm text-black/60">Payroll Freq</span>
              <p className="font-medium text-black">{data.countryStats.payrollFrequency}</p>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Package */}
      {data.benefitsPackage && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-4">Competitive Benefits Package</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {data.benefitsPackage.map((benefit, index) => (
              <li key={index} className="flex items-center text-green-800">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Misclassification Risks */}
      {data.misclassificationRisks && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-3">Risks of Misclassification</h3>
          <p className="text-red-800">{data.misclassificationRisks}</p>
        </div>
      )}
    </div>
  );
}
