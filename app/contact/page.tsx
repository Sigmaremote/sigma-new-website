import { Metadata } from 'next';
import { buildJsonLd } from '@/lib/seo';
import ContactUsSection from '@/components/sections/about/ContactUsSection';
import CTAShowcase from '../_components/sections/CTAShowcase';

export const metadata: Metadata = {
  title: 'Contact - SigmaRemote',
  description: 'Get in touch with SigmaRemote for global payroll solutions.',
  alternates: {
    canonical: 'https://sigmaremote.com/contact',
  },
};

export default function ContactPage() {
  const jsonLd = buildJsonLd({
    type: 'home',
    title: 'Contact - SigmaRemote',
    description: 'Get in touch with SigmaRemote for global payroll solutions.',
    url: 'https://sigmaremote.com/contact',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactUsSection />
      <div className="py-16 lg:py-24">
        <CTAShowcase title="Ready to get started?" />
      </div>
    </>
  );
}
