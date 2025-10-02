import { notFound } from 'next/navigation';
import Container from '../../../../components/Container';
import AtAGlance from '../../../../modules/country-guides/components/AtAGlance';
import MinimumWage from '../../../../modules/country-guides/components/MinimumWage';
import DataTable from '../../../../modules/country-guides/components/DataTable';
import BenefitsAndRisks from '../../../../modules/country-guides/components/BenefitsAndRisks';
import Faq from '../../../../modules/country-guides/components/Faq';
import CtaBlock from '../../../../modules/country-guides/components/CtaBlock';
import { countryContent } from '../../../../modules/country-guides/data/content';
import { generateCountryPageMetadata, generateCountryPageJsonLd } from '../../../../lib/seo';

interface CountryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'mexico' },
    { slug: 'colombia' },
    { slug: 'argentina' },
    { slug: 'brazil' },
  ];
}

export async function generateMetadata({ params }: CountryPageProps) {
  const content = countryContent[params.slug];
  if (!content) {
    return {};
  }
  return generateCountryPageMetadata(content);
}

export default function CountryPage({ params }: CountryPageProps) {
  const content = countryContent[params.slug];
  
  if (!content) {
    notFound();
  }

  const jsonLd = generateCountryPageJsonLd(content);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-white">
        <Container>
          <div className="py-12">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-black/60">
                <li><a href="/" className="hover:text-black">Home</a></li>
                <li>/</li>
                <li><a href="/country-guides" className="hover:text-black">Country Guides</a></li>
                <li>/</li>
                <li className="text-black">{content.name}</li>
              </ol>
            </nav>

            {/* Hero */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Hiring in {content.name}: Payroll, Compliance, and Employer Costs
              </h1>
              <p className="text-xl text-black/70 leading-relaxed max-w-4xl">
                {content.intro}
              </p>
            </div>

            {/* At-a-Glance */}
            <div className="mb-12">
              <AtAGlance data={content.atAGlance} />
            </div>

            {/* Minimum Wage */}
            <div className="mb-12">
              <MinimumWage data={content.minimumWage} />
            </div>

            {/* Hiring Options */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl border border-black/5 p-8">
                <h2 className="text-2xl font-semibold text-black mb-6">Hiring Options</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Contractors</h3>
                    <p className="text-black/70 leading-relaxed">{content.hiringOptions.contractors}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Employer of Record (EOR)</h3>
                    <p className="text-black/70 leading-relaxed">{content.hiringOptions.eor}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Own Entity</h3>
                    <p className="text-black/70 leading-relaxed">{content.hiringOptions.ownEntity}</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-black/10 my-12" />

            {/* Employer Costs */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-black mb-4">Employer Costs and Payroll Contributions</h2>
                <p className="text-black/70 leading-relaxed">{content.employerCostsIntro}</p>
              </div>
              <DataTable data={content.costTable} caption="Employer cost breakdown by role" />
            </div>

            {/* Compliance */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl border border-black/5 p-8">
                <h2 className="text-2xl font-semibold text-black mb-6">Compliance Quick Guide</h2>
                <ul className="space-y-3">
                  {content.complianceBullets.map((bullet, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-[#D6FF57] rounded-full mt-2 mr-3"></span>
                      <span className="text-black/70">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits and Risks */}
            <div className="mb-12">
              <BenefitsAndRisks data={{
                benefitsPackage: content.benefitsPackage,
                countryStats: content.countryStats,
                misclassificationRisks: content.misclassificationRisks
              }} />
            </div>

            <hr className="border-black/10 my-12" />

            {/* Paying Workers */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl border border-black/5 p-8">
                <h2 className="text-2xl font-semibold text-black mb-6">
                  Paying workers in {content.name} the easy way
                </h2>
                <p className="text-black/70 leading-relaxed text-lg">{content.payingWorkers}</p>
              </div>
            </div>

            {/* UX Comparison */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl border border-black/5 p-8">
                <h2 className="text-2xl font-semibold text-black mb-6">Why teams switch to Sigma</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-black/5">
                    <thead className="bg-[#F2F3F1]">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black/60 uppercase tracking-wider">
                          Need
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black/60 uppercase tracking-wider">
                          Old Way
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black/60 uppercase tracking-wider">
                          With Sigma
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-black/5">
                      {content.uxRows.map((row, index) => (
                        <tr key={index} className="hover:bg-black/5">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                            {row.need}
                          </td>
                          <td className="px-6 py-4 text-sm text-black/70">
                            {row.oldWay}
                          </td>
                          <td className="px-6 py-4 text-sm text-black/70">
                            {row.withSigma}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-12">
              <CtaBlock />
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <Faq faqs={content.faq} />
            </div>

            {/* Footer Notice */}
            <div className="mt-16 pt-8 border-t border-black/10">
              <p className="text-sm text-black/50 text-center">
                Updated {new Date(content.lastUpdatedISO).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}. Consult local experts for personalized advice.
              </p>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
