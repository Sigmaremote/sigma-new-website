import { Metadata } from 'next';
import { CountryGuideContent } from '../modules/country-guides/types';

const baseUrl = 'https://sigmaremote.com';

export interface SEOConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  noindex?: boolean;
}

export interface JsonLdData {
  type: 'home' | 'article' | 'compare';
  title: string;
  description: string;
  url?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  faq?: Array<{ q: string; a: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function buildJsonLd(data: JsonLdData) {
  const jsonLdArray = [];

  // WebPage
  const webPage: any = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': data.url || baseUrl,
    url: data.url || baseUrl,
    name: data.title,
    description: data.description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      name: 'SigmaRemote',
      url: baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    datePublished: data.publishedTime || new Date().toISOString(),
    dateModified: data.modifiedTime || new Date().toISOString(),
  };

  // Add organization info for home page
  if (data.type === 'home') {
    webPage.about = {
      '@type': 'Organization',
      name: 'SigmaRemote',
      url: baseUrl,
      logo: `${baseUrl}/logo/sigma-logo-1.avif`,
      description: 'Global payroll platform for hiring and paying contractors and employees worldwide',
      sameAs: [
        'https://twitter.com/sigmaremote',
        'https://linkedin.com/company/sigmaremote',
      ],
    };
  }

  if (data.breadcrumbs) {
    webPage.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: data.breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  }

  jsonLdArray.push(webPage);

  // Article (for article and compare pages)
  if (data.type === 'article' || data.type === 'compare') {
    const article: any = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      author: {
        '@type': 'Organization',
        name: 'SigmaRemote',
      },
      publisher: {
        '@type': 'Organization',
        name: 'SigmaRemote',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo/sigma-logo-1.avif`,
        },
      },
      datePublished: data.publishedTime || new Date().toISOString(),
      dateModified: data.modifiedTime || new Date().toISOString(),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': data.url || baseUrl,
      },
    };

    if (data.image) {
      article.image = {
        '@type': 'ImageObject',
        url: data.image,
      };
    }

    jsonLdArray.push(article);
  }

  // FAQPage
  if (data.faq && data.faq.length > 0) {
    const faqPage = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faq.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    };
    jsonLdArray.push(faqPage);
  }

  return jsonLdArray;
}

/**
 * Global SEO helper function for generating metadata
 * Use this in server components with generateMetadata()
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    url,
    image,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    keywords,
    noindex = false,
  } = config;

  const fullTitle = title.includes('Sigma') ? title : `${title} | SigmaRemote`;
  const canonicalUrl = url ? `${baseUrl}${url}` : baseUrl;
  const ogImage = image || `${baseUrl}/landing-page-images/og-image.avif`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      type,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'SigmaRemote',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@sigmaremote',
      site: '@sigmaremote',
    },
  };

  // Add article-specific metadata
  if (type === 'article') {
    metadata.openGraph!.type = 'article';
    if (publishedTime) {
      metadata.openGraph!.publishedTime = publishedTime;
    }
    if (modifiedTime) {
      metadata.openGraph!.modifiedTime = modifiedTime;
    }
    if (author) {
      metadata.openGraph!.authors = [author];
    }
  }

  return metadata;
}

// Note: PageHead is not used in this implementation as we're using Next.js metadata API
// This function is kept for potential future use but should be implemented as a React component

// Legacy functions for backward compatibility
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
      canonical: `https://sigmaremote.com/country-guides/${content.slug}`,
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
  return buildJsonLd({
    type: 'article',
    title: `Hiring in ${content.name}: Payroll, Compliance, and Employer Costs`,
    description: content.intro,
    url: `${baseUrl}/country-guides/${content.slug}`,
    image: content.ogImage,
    publishedTime: content.lastUpdatedISO,
    modifiedTime: content.lastUpdatedISO,
    faq: content.faq,
    breadcrumbs: [
      { name: 'Home', url: baseUrl },
      { name: 'Country Guides', url: `${baseUrl}/country-guides` },
      { name: content.name, url: `${baseUrl}/country-guides/${content.slug}` },
    ],
  });
}
