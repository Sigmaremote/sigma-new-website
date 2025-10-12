import { Metadata } from 'next';
import { buildJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Pricing - SigmaRemote',
  description: 'Transparent pricing for global payroll. 2% platform fee with no hidden costs.',
  alternates: {
    canonical: 'https://sigmaremote.com/pricing',
  },
};

export default function PricingPage() {
  const jsonLd = buildJsonLd({
    type: 'home',
    title: 'Pricing - SigmaRemote',
    description: 'Transparent pricing for global payroll. 2% platform fee with no hidden costs.',
    url: 'https://sigmaremote.com/pricing',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto">
              No setup fees, no monthly minimums, no hidden costs. Just a simple 2% platform fee.
            </p>
            
            <div className="bg-[#EAFDB3] rounded-2xl p-8 max-w-md mx-auto">
              <div className="text-4xl font-bold text-black mb-2">2%</div>
              <div className="text-lg text-black/70 mb-4">Platform fee</div>
              <div className="text-sm text-black/60">
                Per transaction, no hidden fees
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a
                href="https://cal.com/globalpayroll/demo-25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-8 py-4 text-base font-semibold text-black hover:brightness-95 transition-colors"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
