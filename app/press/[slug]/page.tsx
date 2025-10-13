import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { pressArticles } from '@/modules/press/data/pressIndex';
import { PressArticle } from '@/modules/press/types';
import Hero from './_components/Hero';
import Article from './_components/Article';
import MetaBlock from './_components/MetaBlock';
import ShareRow from './_components/ShareRow';
import NewsCTA from './_components/NewsCTA';

interface PressReleasePageProps {
  params: {
    slug: string;
  };
}

async function getPressRelease(slug: string): Promise<{ article: PressArticle; content: string } | null> {
  // Find article in press index
  const article = pressArticles.find(a => a.slug === slug);
  if (!article) {
    return null;
  }

  // Read markdown content
  const contentPath = path.join(process.cwd(), 'modules/press/data/articles', `${slug}.md`);
  
  try {
    const content = fs.readFileSync(contentPath, 'utf8');
    return { article, content };
  } catch (error) {
    console.error(`Failed to read content for ${slug}:`, error);
    return null;
  }
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export async function generateStaticParams() {
  return pressArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PressReleasePageProps): Promise<Metadata> {
  const result = await getPressRelease(params.slug);
  
  if (!result) {
    return {
      title: 'Press Release Not Found',
    };
  }

  const { article } = result;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sigmaremote.com';
  
  return {
    title: article.title,
    description: article.summary || article.title.substring(0, 160),
    openGraph: {
      title: article.title,
      description: article.summary || article.title.substring(0, 160),
      type: 'article',
      publishedTime: article.dateISO,
      authors: article.author ? [article.author] : undefined,
      images: article.coverImage ? [article.coverImage] : undefined,
      url: `${siteUrl}/press/${article.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary || article.title.substring(0, 160),
      images: article.coverImage ? [article.coverImage] : undefined,
    },
  };
}

export default async function PressReleasePage({ params }: PressReleasePageProps) {
  const result = await getPressRelease(params.slug);

  if (!result) {
    notFound();
  }

  const { article, content } = result;
  const readingTime = calculateReadingTime(content);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sigmaremote.com';
  const canonicalUrl = `${siteUrl}/press/${article.slug}`;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    description: article.summary || content.substring(0, 160),
    author: article.author ? [{ "@type": "Person", name: article.author }] : undefined,
    publisher: { 
      "@type": "Organization", 
      name: "SigmaRemote",
      url: siteUrl
    },
    mainEntityOfPage: canonicalUrl,
    image: article.coverImage ? [article.coverImage] : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          <Hero article={article} readingTime={readingTime} />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-12">
            {/* Main Content */}
            <div className="space-y-10">
              <div className="mt-8">
                <ShareRow title={article.title} url={canonicalUrl} />
              </div>
              
              <div className="mt-8">
                <Article content={content} />
              </div>
              
              <MetaBlock />
              
              <NewsCTA />
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents placeholder */}
                <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                  <h3 className="font-satoshi text-lg font-semibold text-neutral-900 mb-4">
                    Quick Facts
                  </h3>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>Published:</span>
                      <span className="font-medium text-neutral-900">
                        {new Date(article.dateISO).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    {article.author && (
                      <div className="flex justify-between">
                        <span>Author:</span>
                        <span className="font-medium text-neutral-900">{article.author}</span>
                      </div>
                    )}
                    {article.location && (
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-medium text-neutral-900">{article.location}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Read time:</span>
                      <span className="font-medium text-neutral-900">{readingTime} min</span>
                    </div>
                  </div>
                </div>

                {/* Share Section */}
                <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                  <h3 className="font-satoshi text-lg font-semibold text-neutral-900 mb-4">
                    Share This Release
                  </h3>
                  <div className="space-y-3">
                    <ShareRow title={article.title} url={canonicalUrl} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
