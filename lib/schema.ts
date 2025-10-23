export interface BlogPost {
  slug: string;
  title: string;
  dek?: string;
  excerpt: string;
  author: { name: string; url: string };
  datePublished: string;
  tags?: string[];
  coverImage?: boolean | string;
  keyTakeaways?: string[];
  faq?: { q: string; a: string }[];
  related?: { title: string; href: string }[];
  image?: string;
}

export function blogSchema(post: BlogPost) {
  const base = 'https://www.sigmaremote.com';
  const url = `${base}/blog/${post.slug}`;
  const img = post.image || post.coverImage || 'https://framerusercontent.com/images/7PVdnLLWFnOOVEhlu5NLszpYRY.png';

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: post.title,
      url,
      description: post.excerpt,
      inLanguage: 'en'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Resources',
          item: `${base}/resources`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${base}/blog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: url
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      image: img,
      datePublished: post.datePublished,
      author: {
        '@type': 'Person',
        name: post.author.name,
        url: post.author.url
      },
      publisher: {
        '@type': 'Organization',
        name: 'SigmaRemote',
        url: base
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      }
    },
    ...(post.faq && post.faq.length > 0 ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faq.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a
        }
      }))
    }] : [])
  ];
}
