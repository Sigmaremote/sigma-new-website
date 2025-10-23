import { Metadata } from 'next';
import { buildJsonLd, generateMetadata as generateSEOMetadata } from '@/lib/seo';
import ContactUsSection from '@/components/sections/about/ContactUsSection';
import CTAShowcase from '../_components/sections/CTAShowcase';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact SigmaRemote',
  description: 'Get in touch with SigmaRemote for global payroll solutions. Book a demo or speak with our team.',
  url: '/contact',
  keywords: [
    'contact SigmaRemote',
    'global payroll demo',
    'book demo',
    'sales team',
    'support',
    'get started',
  ],
});

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
