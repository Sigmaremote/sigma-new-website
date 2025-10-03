import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { CountryGuideContent } from '../../../modules/country-guides/types';

interface CountryHeroProps {
  content: CountryGuideContent;
  heroImage: string;
}

export default function CountryHero({ content, heroImage }: CountryHeroProps) {
  const lastUpdated = new Date(content.lastUpdatedISO).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="relative mb-16">
      {/* Content */}
      <div className="space-y-6 mb-8">
        {/* Title and Meta */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4 leading-tight">
            {content.hero?.title || `Hiring in ${content.name}: Payroll, Compliance, and Employer Costs`}
          </h1>
          
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-ink-400 text-sm mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{content.region}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Updated {lastUpdated}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>

        {/* Intro */}
        <p className="text-lg text-ink-600 leading-relaxed max-w-4xl">
          {content.intro}
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="https://www.sigmaremote.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#D6FF57] text-black font-semibold rounded-full hover:brightness-95 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D6FF57] focus:ring-offset-2"
          >
            Get a Free Payroll Setup
          </a>
          <a
            href="https://cal.com/globalpayroll/demo-25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#F2F3F1] text-[#0C2E1C] font-semibold rounded-full hover:bg-[#F2F3F1]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2F3F1] focus:ring-offset-2"
          >
            Talk to Sales
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
        <Image
          src={heroImage}
          alt={`${content.name} landscape`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
    </section>
  );
}
