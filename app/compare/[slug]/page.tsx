import { Metadata } from 'next';
import { buildJsonLd } from '@/lib/seo';
import Link from 'next/link';

interface ComparePageProps {
  params: {
    slug: string;
  };
}

const competitorData: Record<string, { name: string; description: string; painPoints: string[]; comparison: any[] }> = {
  'vs-deel': {
    name: 'Deel',
    description: 'Compare Sigma vs Deel for global payroll and contractor management.',
    painPoints: [
      'High platform fees (3-5%)',
      'Hidden FX spreads',
      'Slow onboarding process',
      'Limited USD wallet options',
    ],
    comparison: [
      { feature: 'Platform fee', sigma: '2%', competitor: '3-5%' },
      { feature: 'FX transparency', sigma: 'Real-time rates', competitor: 'Hidden spreads' },
      { feature: 'Onboarding', sigma: '24 hours', competitor: '1-2 weeks' },
      { feature: 'USD wallets', sigma: 'FDIC-insured', competitor: 'Limited options' },
    ],
  },
  'vs-remote': {
    name: 'Remote',
    description: 'Compare Sigma vs Remote for global employment and payroll.',
    painPoints: [
      'Expensive EOR services',
      'Complex pricing structure',
      'Limited contractor support',
      'Slow customer support',
    ],
    comparison: [
      { feature: 'Platform fee', sigma: '2%', competitor: '4-6%' },
      { feature: 'Contractor support', sigma: 'Full support', competitor: 'Limited' },
      { feature: 'Customer support', sigma: '24/7', competitor: 'Business hours' },
      { feature: 'Pricing transparency', sigma: 'Simple 2%', competitor: 'Complex tiers' },
    ],
  },
  'vs-payoneer': {
    name: 'Payoneer',
    description: 'Compare Sigma vs Payoneer for global payments and freelancer management.',
    painPoints: [
      'High transaction fees',
      'Limited compliance features',
      'No EOR services',
      'Poor user experience',
    ],
    comparison: [
      { feature: 'Transaction fee', sigma: '2%', competitor: '3-5%' },
      { feature: 'EOR services', sigma: 'Full EOR', competitor: 'None' },
      { feature: 'Compliance', sigma: 'Automated', competitor: 'Manual' },
      { feature: 'User experience', sigma: 'Modern', competitor: 'Outdated' },
    ],
  },
  'vs-rippling': {
    name: 'Rippling',
    description: 'Compare Sigma vs Rippling for HR and payroll management.',
    painPoints: [
      'US-focused platform',
      'Limited global reach',
      'Complex setup process',
      'High monthly fees',
    ],
    comparison: [
      { feature: 'Global reach', sigma: '160+ countries', competitor: 'Limited' },
      { feature: 'Setup complexity', sigma: 'Simple', competitor: 'Complex' },
      { feature: 'Monthly fees', sigma: 'None', competitor: '$8+/employee' },
      { feature: 'Global compliance', sigma: 'Built-in', competitor: 'Add-on' },
    ],
  },
  'vs-gusto': {
    name: 'Gusto',
    description: 'Compare Sigma vs Gusto for payroll and HR services.',
    painPoints: [
      'US-only platform',
      'No global capabilities',
      'Limited contractor support',
      'Basic reporting features',
    ],
    comparison: [
      { feature: 'Global support', sigma: '160+ countries', competitor: 'US only' },
      { feature: 'Contractor support', sigma: 'Full support', competitor: 'Limited' },
      { feature: 'Reporting', sigma: 'Advanced', competitor: 'Basic' },
      { feature: 'Compliance', sigma: 'Global', competitor: 'US only' },
    ],
  },
  'vs-ontop': {
    name: 'Ontop',
    description: 'Compare Sigma vs Ontop for contractor management and payments.',
    painPoints: [
      'Limited country coverage',
      'High fees for small teams',
      'Basic compliance features',
      'Slow payment processing',
    ],
    comparison: [
      { feature: 'Country coverage', sigma: '160+ countries', competitor: '50+ countries' },
      { feature: 'Small team pricing', sigma: '2% flat', competitor: 'Higher rates' },
      { feature: 'Compliance', sigma: 'Full EOR', competitor: 'Basic' },
      { feature: 'Payment speed', sigma: 'Instant', competitor: '1-3 days' },
    ],
  },
  'vs-veem': {
    name: 'Veem',
    description: 'Compare Sigma vs Veem for international payments.',
    painPoints: [
      'No employment services',
      'Limited compliance support',
      'High FX fees',
      'Basic reporting',
    ],
    comparison: [
      { feature: 'Employment services', sigma: 'Full EOR', competitor: 'None' },
      { feature: 'Compliance', sigma: 'Automated', competitor: 'Manual' },
      { feature: 'FX fees', sigma: 'Transparent', competitor: 'Hidden spreads' },
      { feature: 'Reporting', sigma: 'Advanced', competitor: 'Basic' },
    ],
  },
  'vs-paypal': {
    name: 'PayPal',
    description: 'Compare Sigma vs PayPal for global payments.',
    painPoints: [
      'High transaction fees',
      'No employment services',
      'Limited compliance features',
      'Poor customer support',
    ],
    comparison: [
      { feature: 'Transaction fee', sigma: '2%', competitor: '3-5%' },
      { feature: 'Employment services', sigma: 'Full EOR', competitor: 'None' },
      { feature: 'Compliance', sigma: 'Built-in', competitor: 'None' },
      { feature: 'Customer support', sigma: '24/7', competitor: 'Limited' },
    ],
  },
  'vs-wise': {
    name: 'Wise',
    description: 'Compare Sigma vs Wise for international money transfers.',
    painPoints: [
      'No employment services',
      'Limited compliance support',
      'No contractor management',
      'Basic reporting',
    ],
    comparison: [
      { feature: 'Employment services', sigma: 'Full EOR', competitor: 'None' },
      { feature: 'Contractor management', sigma: 'Full platform', competitor: 'None' },
      { feature: 'Compliance', sigma: 'Automated', competitor: 'Manual' },
      { feature: 'Reporting', sigma: 'Advanced', competitor: 'Basic' },
    ],
  },
  'vs-hyperwallet': {
    name: 'Hyperwallet',
    description: 'Compare Sigma vs Hyperwallet for global payout solutions.',
    painPoints: [
      'No employment services',
      'Limited compliance features',
      'High fees for small amounts',
      'Complex integration',
    ],
    comparison: [
      { feature: 'Employment services', sigma: 'Full EOR', competitor: 'None' },
      { feature: 'Compliance', sigma: 'Built-in', competitor: 'Limited' },
      { feature: 'Small amount fees', sigma: '2% flat', competitor: 'Higher rates' },
      { feature: 'Integration', sigma: 'Simple', competitor: 'Complex' },
    ],
  },
};

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const competitor = competitorData[params.slug];
  if (!competitor) {
    return {
      title: 'Compare - SigmaRemote',
      description: 'Compare Sigma with other global payroll solutions.',
    };
  }

  return {
    title: `Sigma vs ${competitor.name} - Global Payroll Comparison | SigmaRemote`,
    description: competitor.description,
    alternates: {
      canonical: `https://sigmaremote.com/compare/${params.slug}`,
    },
  };
}

export default function ComparePage({ params }: ComparePageProps) {
  const competitor = competitorData[params.slug];
  
  if (!competitor) {
    return (
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-6">Page not found</h1>
            <p className="text-xl text-black/70 mb-8">The comparison page you're looking for doesn't exist.</p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-8 py-4 text-base font-semibold text-black hover:brightness-95 transition-colors"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const jsonLd = buildJsonLd({
    type: 'compare',
    title: `Sigma vs ${competitor.name} - Global Payroll Comparison`,
    description: competitor.description,
    url: `https://sigmaremote.com/compare/${params.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-black mb-6">
              Sigma vs {competitor.name}
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              {competitor.description}
            </p>
          </div>

          {/* Pain Points */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black mb-8 text-center">
              Common pain points with {competitor.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {competitor.painPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black/70">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black mb-8 text-center">
              How Sigma compares
            </h2>
            <div className="overflow-hidden rounded-2xl border border-black/10 max-w-4xl mx-auto">
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
                      {competitor.name}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  {competitor.comparison.map((row, index) => (
                    <tr key={index} className="hover:bg-black/5">
                      <td className="px-6 py-4 text-sm font-medium text-black">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-black">
                        <span className="inline-flex items-center rounded-full bg-[#D6FF57] px-3 py-1 text-xs font-medium">
                          {row.sigma}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-black/70">
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black mb-6">
              Ready to switch to Sigma?
            </h2>
            <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
              Experience the difference with transparent pricing, faster onboarding, and better compliance.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://cal.com/globalpayroll/demo-25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-8 py-4 text-base font-semibold text-black hover:brightness-95 transition-colors"
              >
                Book a demo
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-black px-8 py-4 text-base font-semibold text-black hover:bg-black hover:text-white transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
