import Link from 'next/link';
import { routes } from '@/lib/routes';

export default function WhyCheaper() {
  const comparisonData = [
    {
      feature: 'Platform fee',
      sigma: '2%',
      competitors: '3-5%',
    },
    {
      feature: 'FX transparency',
      sigma: 'Real-time rates',
      competitors: 'Hidden spreads',
    },
    {
      feature: 'Onboarding speed',
      sigma: 'Same day',
      competitors: '1-2 weeks',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">
            Why Sigma is cheaper
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. See how we compare to the competition.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-black/10">
            <table className="w-full">
              <thead className="bg-black/5">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-black">
                    Sigma
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-black/70">
                    Deel/Remote/Payoneer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-black/5">
                    <td className="px-6 py-4 text-sm font-medium text-black">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-black">
                      <span className="inline-flex items-center rounded-full bg-[#D1FF94] px-3 py-1 text-xs font-medium">
                        {row.sigma}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-black/70">
                      {row.competitors}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={routes.compare('vs-deel')}
              className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white transition-colors"
            >
              Compare vs Deel
            </Link>
            <Link
              href={routes.compare('vs-payoneer')}
              className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white transition-colors"
            >
              Compare vs Payoneer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
