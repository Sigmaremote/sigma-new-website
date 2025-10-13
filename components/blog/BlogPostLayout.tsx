'use client';

import * as React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CostRow, CostTable } from './CostTable';
import { UXRow, UXTable } from './UXTable';

export type FAQ = { q: string; a: string };

export type BlogPostData = {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  author: { name: string; url: string };
  datePublished: string; // ISO
  tags?: string[];
  // Sections
  intro: string[]; // paragraphs
  costTable?: { rows: CostRow[]; caption?: string };
  uxTable?: { rows: UXRow[]; caption?: string };
  body?: { heading: string; paragraphs: string[] }[];
  faq?: FAQ[];
  // Image (for schema & social)
  image?: string; // absolute URL preferred
};

export function BlogPostLayout({ data }: { data: BlogPostData }) {
  const baseUrl = 'https://www.sigmaremote.com';
  const url = `${baseUrl}/blog/${data.slug}`;
  const image =
    data.image || 'https://framerusercontent.com/images/7PVdnLLWFnOOVEhlu5NLszpYRY.png';

  const jsonld = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.title,
      url,
      description: data.excerpt,
      inLanguage: 'en',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Resources', item: `${baseUrl}/resources` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: data.title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.excerpt,
      image,
      datePublished: data.datePublished,
      author: { '@type': 'Person', name: data.author.name, url: data.author.url },
      publisher: { '@type': 'Organization', name: 'SigmaRemote', url: baseUrl },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity:
        data.faq?.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })) ?? [],
    },
  ]);

  return (
    <>
      <Script id="blog-jsonld" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: jsonld }} />

      <section className="w-full bg-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-24">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            {data.title}
          </h1>
          {data.subtitle && (
            <p className="mt-2 text-lg text-neutral-600">{data.subtitle}</p>
          )}
          <div className="mt-3 text-sm text-neutral-500">
            By{' '}
            <Link href={data.author.url} className="underline underline-offset-2">
              {data.author.name}
            </Link>{' '}
            • {new Date(data.datePublished).toLocaleDateString()}
          </div>

          {/* Intro */}
          <div className="mt-8 space-y-4">
            {data.intro.map((p, i) => (
              <p key={i} className="text-neutral-800 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Cost Table */}
          {data.costTable && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-neutral-900">Cost Comparison</h2>
              <p className="mt-2 text-sm text-neutral-600">
                {data.costTable.caption ||
                  'Benchmarking platform fees, FX, and payout speed vs common providers.'}
              </p>
              <CostTable rows={data.costTable.rows} />
            </div>
          )}

          {/* UX Table */}
          {data.uxTable && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-neutral-900">UX & Ops Comparison</h2>
              <p className="mt-2 text-sm text-neutral-600">
                {data.uxTable.caption || 'Critical workflow differences for real operations.'}
              </p>
              <UXTable rows={data.uxTable.rows} />
            </div>
          )}

          {/* Mid-post CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-12 rounded-3xl bg-[#0E2C1E] text-white p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-white/70">Switch to flat, FX-free USD</p>
                <h4 className="mt-1 text-2xl font-semibold">
                  Let's build your Global Team with Sigma
                </h4>
                <p className="mt-2 text-white/80">
                  USD wallets, fast onboarding, compliance built-in. See it in action.
                </p>
              </div>
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 transition-all hover:scale-105"
                style={{background:'#CFF86A',color:'#0E2C1E'}}
              >
                Get a Free Payroll Setup <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Body sections */}
          {data.body && data.body.length > 0 && (
            <div className="mt-10 space-y-10">
              {data.body.map((b, i) => (
                <section key={i}>
                  <h2 className="text-xl font-semibold text-neutral-900">{b.heading}</h2>
                  <div className="mt-3 space-y-4">
                    {b.paragraphs.map((p, j) => (
                      <p key={j} className="text-neutral-800 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* FAQ */}
          {data.faq && data.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-neutral-900">FAQs</h2>
              <div className="mt-4 space-y-6">
                {data.faq.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-medium text-neutral-900">{f.q}</h3>
                    <p className="mt-2 text-neutral-800">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back */}
          <div className="mt-10">
            <Link href="/blog" className="text-sm text-neutral-700 hover:underline">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * 🔒 TEMPLATE RULES (globalno važe za sve blogove)
 * 1) H1 + subtitle + meta → obavezno.
 * 2) Intro (2–4 pasusa) → obavezno.
 * 3) CostTable i/ili UXTable → bar jedan obavezno; oba preporučeno.
 * 4) Srednji CTA blok → obavezno.
 * 5) Body sekcije (H2 + paragrafi) → opciono, ali strukturisano.
 * 6) FAQ (3–5 Q&A) → preporučeno; puni JSON-LD.
 * 7) JSON-LD uvek: [WebPage, BreadcrumbList, Article, FAQPage].
 */
