import { Metadata } from 'next';
import { CountryGuideContent } from '../modules/country-guides/types';

export function generateCountryPageMetadata(content: CountryGuideContent): Metadata {
  const title = `Hiring in ${content.name}: Payroll, Compliance, and Employer Costs | SigmaRemote`;
  const description = `Complete guide to hiring in ${content.name}. Learn about employment laws, payroll costs, compliance requirements, and best practices for global teams.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: content.lastUpdatedISO,
      modifiedTime: content.lastUpdatedISO,
      images: content.ogImage ? [content.ogImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: content.ogImage ? [content.ogImage] : undefined,
    },
    alternates: {
      canonical: `https://country-guide.sigmaremote.com/country-guides/${content.slug}`,
    },
  };
}

export function generateIndexPageMetadata(): Metadata {
  return {
    title: 'Country Hiring Guides - SigmaRemote',
    description: 'Explore hiring laws, employer costs, and compliance for Mexico, Colombia, Argentina, and Brazil. Complete guides for global hiring.',
    openGraph: {
      title: 'Country Hiring Guides - SigmaRemote',
      description: 'Explore hiring laws, employer costs, and compliance for Mexico, Colombia, Argentina, and Brazil. Complete guides for global hiring.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Country Hiring Guides - SigmaRemote',
      description: 'Explore hiring laws, employer costs, and compliance for Mexico, Colombia, Argentina, and Brazil. Complete guides for global hiring.',
    },
  };
}

export function generateCountryPageJsonLd(content: CountryGuideContent) {
  const baseUrl = 'https://country-guide.sigmaremote.com';
  
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/country-guides/${content.slug}`,
    url: `${baseUrl}/country-guides/${content.slug}`,
    name: `Hiring in ${content.name}: Payroll, Compliance, and Employer Costs`,
    description: content.intro,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      name: 'SigmaRemote',
      url: baseUrl,
    },
    datePublished: content.lastUpdatedISO,
    dateModified: content.lastUpdatedISO,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Country Guides',
          item: `${baseUrl}/country-guides`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: content.name,
          item: `${baseUrl}/country-guides/${content.slug}`,
        },
      ],
    },
  };

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Hiring in ${content.name}: Payroll, Compliance, and Employer Costs`,
    description: content.intro,
    author: {
      '@type': 'Organization',
      name: 'SigmaRemote',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SigmaRemote',
    },
    datePublished: content.lastUpdatedISO,
    dateModified: content.lastUpdatedISO,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/country-guides/${content.slug}`,
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return [webPage, article, faqPage];
}
