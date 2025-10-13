import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { PressArticle } from '@/modules/press/types';
import Image from 'next/image';

interface HeroProps {
  article: PressArticle;
  readingTime?: number;
}

export default function Hero({ article, readingTime }: HeroProps) {
  const publishedDate = new Date(article.dateISO);
  const formattedDate = publishedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div>
        <Link 
          href="/press" 
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Press Releases
        </Link>
      </div>

      {/* Press Release Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium uppercase tracking-[0.08em]">
        Press Release
      </div>

      {/* Title */}
      <h1 className="font-satoshi text-[32px] md:text-[40px] lg:text-[48px] font-extrabold tracking-tight text-neutral-900 leading-[1.1] max-w-4xl">
        {article.title}
      </h1>

      {/* Summary/Lead paragraph */}
      {article.summary && (
        <p className="font-satoshi text-[18px] md:text-[20px] leading-relaxed text-neutral-800 font-light max-w-3xl">
          {article.summary}
        </p>
      )}

      {/* Meta row */}
      <div className="flex items-center gap-6 text-sm text-neutral-600 pt-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <time dateTime={article.dateISO} className="font-medium">
            {formattedDate}
          </time>
        </div>
        
        {article.location && (
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">{article.location}</span>
          </div>
        )}
        
        {article.author && (
          <div className="flex items-center gap-2">
            <span className="font-medium">By {article.author}</span>
          </div>
        )}
        
        {readingTime && (
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="font-medium">{readingTime} min read</span>
          </div>
        )}
      </div>

      {/* Cover image */}
      {article.coverImage && (
        <div className="mt-8">
          <Image
            src={article.coverImage}
            alt={article.title}
            width={800}
            height={450}
            className="w-full h-auto rounded-2xl shadow-lg border border-neutral-200"
            priority
          />
        </div>
      )}
    </div>
  );
}
