import { UXRow } from '../../../modules/country-guides/types';

interface WhySigmaMatrixProps {
  uxRows: UXRow[];
}

export default function WhySigmaMatrix({ uxRows }: WhySigmaMatrixProps) {
  return (
    <section id="why-sigma" className="mb-16">
      <div className="bg-white rounded-2xl border border-black/5 p-8">
        <h2 className="text-2xl font-semibold text-ink-900 mb-6">Why teams switch to Sigma</h2>
        <div className="overflow-x-auto lg:overflow-x-visible">
          <table className="w-full table-fixed border-separate border-spacing-0">
            <caption className="sr-only">Comparison of traditional hiring vs Sigma approach</caption>
            <thead className="bg-white">
              <tr>
                <th className="w-[30%] text-left text-xs font-semibold text-black/70 border-b border-black/10 p-3 sticky left-0 bg-white z-10">
                  Need
                </th>
                <th className="text-left text-xs font-semibold text-black/70 border-b border-black/10 p-3">
                  Old Way
                </th>
                <th className="text-left text-xs font-semibold text-black/70 border-b border-black/10 p-3">
                  With Sigma
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {uxRows.map((row, index) => (
                <tr key={index} className="hover:bg-black/[0.035] transition-colors">
                  <td className="align-top p-3 text-[15px] font-medium text-black/80 border-b border-black/5 sticky left-0 bg-white z-10">
                    {row.need}
                  </td>
                  <td className="align-top p-3 text-[15px] text-black/80 border-b border-black/5">
                    {row.oldWay}
                  </td>
                  <td className="align-top p-3 text-[15px] text-black/80 border-b border-black/5">
                    {row.withSigma}
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
