import { Metadata } from 'next';
import Script from 'next/script';
import CountryGuideLayout from '../_components/CountryGuideLayout';
import CountryHero from '../_components/CountryHero';
import AtAGlance from '../_components/AtAGlance';
import HiringOptions from '../_components/HiringOptions';
import EmployerCostsTable from '../_components/EmployerCostsTable';
import QuickComplianceChecklist from '../_components/QuickComplianceChecklist';
import PayingWorkers from '../_components/PayingWorkers';
import WhySigmaMatrix from '../_components/WhySigmaMatrix';
import CTAHireBanner from '../_components/CTAHireBanner';
import FAQAccordion from '../_components/FAQAccordion';
import Breadcrumbs from '../_components/Breadcrumbs';
import CountrySwitcher from '../_components/CountrySwitcher';
import { countryContent } from '../../../modules/country-guides/data/content';
import { countryIndexList } from '../../../modules/country-guides/data/indexList';

const content = countryContent.mexico;
const mexicoData = countryIndexList.find(country => country.slug === 'mexico');

// Generate metadata for SEO
export const metadata: Metadata = {
  title: `${content.hero?.title || `Hiring in ${content.name}: Payroll, Compliance, and Employer Costs`} | Sigma`,
  description: content.intro,
  alternates: {
    canonical: 'https://country-guide.sigmaremote.com/country-guides/mexico',
  },
  openGraph: {
    title: content.hero?.title || `Hiring in ${content.name}: Payroll, Compliance, and Employer Costs`,
    description: content.intro,
    type: 'article',
    url: 'https://country-guide.sigmaremote.com/country-guides/mexico',
    images: [
      {
        url: '/api/og?title=Mexico%20Hiring%20Guide',
        width: 1200,
        height: 630,
        alt: `Hiring in ${content.name} - Sigma Country Guide`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.hero?.title || `Hiring in ${content.name}: Payroll, Compliance, and Employer Costs`,
    description: content.intro,
    images: ['/api/og?title=Mexico%20Hiring%20Guide'],
  },
};

// TOC items for navigation
const tocItems = [
  { id: 'at-a-glance', title: 'At a Glance' },
  { id: 'hiring-options', title: 'Hiring Options' },
  { id: 'employer-costs', title: 'Employer Costs' },
  { id: 'compliance', title: 'Compliance' },
  { id: 'paying-workers', title: 'Paying Workers' },
  { id: 'why-sigma', title: 'Why Sigma' },
  { id: 'faq', title: 'FAQ' },
];

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://country-guide.sigmaremote.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Country Guides',
          item: 'https://country-guide.sigmaremote.com/country-guides',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: content.name,
          item: `https://country-guide.sigmaremote.com/country-guides/${content.slug}`,
        },
      ],
    },
    {
      '@type': 'Article',
      headline: content.hero?.title || `Hiring in ${content.name}: Payroll, Compliance, and Employer Costs`,
      about: `${content.name} hiring, payroll, compliance`,
      description: content.intro,
      author: {
        '@type': 'Organization',
        name: 'Sigma',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Sigma',
        logo: {
          '@type': 'ImageObject',
          url: 'https://country-guide.sigmaremote.com/logo/sigma-logo-1.avif',
        },
      },
      datePublished: content.lastUpdatedISO,
      dateModified: content.lastUpdatedISO,
      url: `https://country-guide.sigmaremote.com/country-guides/${content.slug}`,
    },
    {
      '@type': 'FAQPage',
      mainEntity: content.faq.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
};

export default function MexicoPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CountryGuideLayout tocItems={tocItems}>
        <div className="max-w-[820px] mx-auto space-y-10 md:space-y-14">
          {/* Breadcrumbs - Desktop */}
          <div className="hidden lg:block">
            <Breadcrumbs countryName={content.name} />
          </div>

          {/* Country Switcher */}
          <CountrySwitcher />

          {/* Hero Section */}
          <CountryHero 
            content={content} 
            heroImage={mexicoData?.image || "/countries-images/Mexico_City_Reforma_Street.jpg"}
          />

          {/* At-a-Glance */}
          <AtAGlance data={content.atAGlance} />

          {/* Hiring Options */}
          <HiringOptions content={content} />

          {/* Employer Costs */}
          <EmployerCostsTable 
            data={content.costTable} 
            intro={content.employerCostsIntro}
          />

          {/* Compliance */}
          <QuickComplianceChecklist complianceBullets={content.complianceBullets} />

          {/* Paying Workers */}
          <PayingWorkers content={content} />

          {/* Why Sigma Matrix */}
          <WhySigmaMatrix uxRows={content.uxRows} />

          {/* CTA Banner */}
          <CTAHireBanner />

          {/* FAQ */}
          <FAQAccordion faqs={content.faq} />

          {/* Footer Notice */}
          <div className="pt-8 border-t border-black/10">
            <p className="text-sm text-ink-400 text-center">
              Updated {new Date(content.lastUpdatedISO).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long',
                day: 'numeric'
              })}. Consult local experts for personalized advice.
            </p>
          </div>
        </div>
      </CountryGuideLayout>
    </>
  );
}