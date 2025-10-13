import { Metadata } from 'next';
import { buildJsonLd } from '@/lib/seo';
import WhySigmaExistsSection from './_components/WhySigmaExistsSection';
import WhatWeDoSection from './_components/WhatWeDoSection';
import CTAShowcase from '../_components/sections/CTAShowcase';

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
      <WhySigmaExistsSection />
      <WhatWeDoSection />
      <div className="py-16 lg:py-24">
        <CTAShowcase title="Let's build your Global Team with Sigma" />
      </div>
    </>
  );
}
