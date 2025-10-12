import { Metadata } from 'next';
import { buildJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About - SigmaRemote',
  description: 'Learn about SigmaRemote and our mission to simplify global payroll.',
  alternates: {
    canonical: 'https://sigmaremote.com/about',
  },
};

export default function AboutPage() {
  const jsonLd = buildJsonLd({
    type: 'home',
    title: 'About - SigmaRemote',
    description: 'Learn about SigmaRemote and our mission to simplify global payroll.',
    url: 'https://sigmaremote.com/about',
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
              About SigmaRemote
            </h1>
            <p className="text-xl text-black/70 mb-12 max-w-3xl mx-auto">
              We're building the future of global payroll, making it simple for companies 
              to hire and pay talent anywhere in the world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">160+</div>
                <div className="text-sm text-black/60">Countries supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">24h</div>
                <div className="text-sm text-black/60">Average onboarding time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">2%</div>
                <div className="text-sm text-black/60">Transparent platform fee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
