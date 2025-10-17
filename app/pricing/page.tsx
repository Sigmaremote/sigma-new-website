import { Metadata } from 'next';
import { buildJsonLd } from '@/lib/seo';
import { Pricing } from '@/components/ui/pricing-cards';
import { GlobalPayrollSection } from '@/components/ui/global-payroll-section';
import { CompetitorReplacementSection } from '@/components/ui/competitor-replacement';
import { FeaturesCompare } from '@/components/ui/features-compare';
import FaqSection from '@/components/ui/FaqSection';
import GlobalReach from '@/app/_components/sections/GlobalReach';

export const metadata: Metadata = {
  title: 'Pricing - SigmaRemote',
  description: 'Fair pricing for global payroll. Contractors, Employer of Record, and Gig Pay solutions.',
  alternates: {
    canonical: 'https://sigmaremote.com/pricing',
  },
};

export default function PricingPage() {
  const jsonLd = buildJsonLd({
    type: 'home',
    title: 'Pricing - SigmaRemote',
    description: 'Fair pricing for global payroll. Contractors, Employer of Record, and Gig Pay solutions.',
    url: 'https://sigmaremote.com/pricing',
  });

  const columns = ['Sigma', 'Deel', 'Remote.com', 'Gusto'];
  const rows = [
    { feature: 'Global Payroll', values: [true, true, true, true] },
    { feature: 'USD Savings Wallet for workers', values: [true, false, false, false] },
    { feature: 'Local Benefits', values: [true, false, false, false] },
    { feature: 'Crypto and Local bank transfers', values: [true, true, false, false] },
    { feature: 'Slack Support', values: [true, false, false, false] },
    { feature: 'Instant payouts', values: [true, true, false, false] },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Pricing />
      <GlobalPayrollSection />
      <CompetitorReplacementSection />
      <FeaturesCompare
        title="Features"
        columns={columns}
        rows={rows}
      />
      <FaqSection />
      <GlobalReach />
    </>
  );
}
