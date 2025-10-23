'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type SecondaryBlogCTAProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function SecondaryBlogCTA({
  eyebrow = '💡 See real numbers for your corridor',
  title = 'Compare live pricing',
  description = 'See how much your team can save in real markets with transparent FX.',
  ctaLabel = 'Book a demo',
  ctaHref = '/contact',
  className = '',
}: SecondaryBlogCTAProps) {
  return (
    <section className={`my-12 rounded-2xl bg-[#0E2C1E] p-8 text-center shadow-lg shadow-black/20 ${className}`}>
      <p className="mb-2 text-sm text-white">{eyebrow}</p>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-xl text-white/80">
        {description}
      </p>
      <div className="mt-6">
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-2xl bg-[#E8F843] px-5 py-2.5 text-sm font-medium text-black transition hover:bg-[#CFF86A]"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
