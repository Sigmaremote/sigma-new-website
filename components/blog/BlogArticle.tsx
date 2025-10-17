'use client';

import * as React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, Quote, Info, ShieldAlert, CheckCircle, ArrowUp } from 'lucide-react';
import { Prose } from './Prose';
import { Callout as CalloutComponent } from './Callout';
import { PullQuote } from './PullQuote';
import { StickyToc } from './StickyToc';
import { MidCta } from './MidCta';

/** Sigma palette */
const COLORS = { dark: '#0E2C1E', lime: '#CFF86A', yellow: '#FFE95C', peach: '#FFB480' };

/** ---------- Data Types ---------- */
export type FAQ = { q: string; a: string };
export type ComparisonRow = { left: string; middle: string; right: string };

export type Section =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'steps'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'callout'; tone: 'note'|'warning'|'success'|'stat'|'case'|'example'; text: string }
  | { type: 'labeled'; kind: 'example'|'stat'|'case'; text: string }
  | { type: 'table'; caption?: string; rows: ComparisonRow[] }
  | { type: 'image'; alt: string; src?: string };

export type BlogData = {
  slug: string;
  title: string;
  dek?: string;
  excerpt: string;
  author: { name: string; url: string };
  datePublished: string;
  tags?: string[];
  coverImage?: boolean | string;
  keyTakeaways?: string[];
  sections: Section[];
  faq?: FAQ[];
  related?: { title: string; href: string }[];
  image?: string;
};

/** ---------- Helpers ---------- */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function replaceEmDashes(text: string): string {
  return text.replace(/—/g, ':');
}

function calculateReadingTime(sections: Section[]): number {
  let wordCount = 0;
  sections.forEach((s) => {
    if (s.type === 'p') wordCount += s.text.split(' ').length;
    if (s.type === 'h2' || s.type === 'h3') wordCount += s.text.split(' ').length;
    if (s.type === 'bullets' || s.type === 'steps') {
      s.items.forEach((item) => (wordCount += item.split(' ').length));
    }
  });
  return Math.max(3, Math.ceil(wordCount / 200));
}

function buildJsonLd(d: BlogData) {
  const base = 'https://www.sigmaremote.com';
  const url = `${base}/blog/${d.slug}`;
  const img = d.image || 'https://framerusercontent.com/images/7PVdnLLWFnOOVEhlu5NLszpYRY.png';
  return JSON.stringify([
    { '@context':'https://schema.org','@type':'WebPage', name:d.title, url, description:d.excerpt, inLanguage:'en' },
    { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
      { '@type':'ListItem', position:1, name:'Resources', item:`${base}/resources` },
      { '@type':'ListItem', position:2, name:'Blog', item:`${base}/blog` },
      { '@type':'ListItem', position:3, name:d.title, item:url },
    ]},
    { '@context':'https://schema.org','@type':'Article', headline:d.title, description:d.excerpt, image:img,
      datePublished:d.datePublished, author:{ '@type':'Person', name:d.author.name, url:d.author.url },
      publisher:{ '@type':'Organization', name:'SigmaRemote', url:base }, mainEntityOfPage:{ '@type':'WebPage', '@id':url } },
    { '@context':'https://schema.org','@type':'FAQPage',
      mainEntity:(d.faq??[]).map(f=>({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })) }
  ]);
}

/** ---------- UI Components ---------- */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#CFF86A] text-[#0E2C1E] text-sm font-semibold tracking-wide uppercase">
      {children}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm text-sm text-neutral-700 font-medium hover:bg-[#CFF86A] hover:border-transparent transition-all duration-200">
      {children}
    </span>
  );
}

function KeyTakeaways({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="my-6 rounded-xl border border-[var(--sr-border)] bg-[var(--sr-card)]">
      <div className="px-5 py-4 border-l-4" style={{ borderColor: "var(--sr-accent)" }}>
        <h3 className="text-lg font-semibold text-[var(--sr-text)] mb-3">
          Key Takeaways
        </h3>
        <ul className="space-y-2 text-[var(--sr-text)]">
          {items.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--sr-accent)] flex-shrink-0" />
              <span className="text-[15px] leading-6">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TableOfContents({ sections, className }: { sections: Section[]; className?: string }) {
  const [activeId, setActiveId] = React.useState<string>("");
  
  const headings = sections
    .map((s, idx) => (s.type === 'h2' ? { text: s.text, id: `s-${idx}` } : null))
    .filter(Boolean) as { text: string; id: string }[];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -80% 0%" }
    );

    headings.forEach((h) => {
      const element = document.getElementById(h.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className={`rounded-3xl border border-black/10 bg-white/80 backdrop-blur-sm p-6 shadow-sm ${className || ''}`}>
      <h3 className="text-lg font-bold text-neutral-900 mb-4">
        On this page
      </h3>
      <ul className="space-y-3">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`text-sm leading-relaxed transition-all duration-200 block py-1 px-3 -mx-3 rounded-lg ${
                activeId === h.id
                  ? "text-[#0E2C1E] bg-[#CFF86A]/30 font-semibold"
                  : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


function LabeledBlock({ kind, text }: { kind: 'example' | 'stat' | 'case'; text: string }) {
  const labels = {
    example: 'Example',
    stat: 'Stat to Know',
    case: 'Case Study',
  };

  return (
    <div className="rounded-2xl border border-black/10 bg-neutral-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="flex gap-4">
        <div className="w-1 rounded-full bg-[#0E2C1E] flex-shrink-0 group-hover:w-1.5 transition-all duration-300" />
        <div>
          <div className="text-xs uppercase tracking-wider text-[#0E2C1E] mb-3 font-bold">
            {labels[kind]}
          </div>
          <p className="text-neutral-900 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

function CompTable({ rows, caption }: { rows: ComparisonRow[]; caption?: string }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-black/10 bg-white shadow-sm">
      {caption && <p className="text-sm text-neutral-600 p-6 pb-0">{caption}</p>}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-black/10 bg-neutral-100">
            <th className="text-left p-5 text-sm font-bold text-neutral-900">Criterion</th>
            <th className="text-left p-5 text-sm font-bold text-neutral-900">SigmaRemote</th>
            <th className="text-left p-5 text-sm font-bold text-neutral-900">Alternative</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-black/5 last:border-0 hover:bg-neutral-100/50 transition-colors">
              <td className="p-5 text-sm text-neutral-800">{row.left}</td>
              <td className="p-5 text-sm text-neutral-800 font-medium">{row.middle}</td>
              <td className="p-5 text-sm text-neutral-800">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MidPostCTA() {
  return (
    <div className="rounded-3xl bg-[#0E2C1E] p-12 text-center shadow-xl relative overflow-hidden group">
      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Build Your Global Workforce?
        </h3>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Take the first step toward building a global workforce. With the right strategies and solutions, you can access the best talent worldwide.
        </p>
        <Link
          href="/book-demo"
          className="inline-block px-10 py-5 bg-[#CFF86A] text-[#0E2C1E] rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Book a Demo
        </Link>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-[#0E2C1E] text-white shadow-xl hover:scale-110 transition-all duration-300 z-40"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

/** ---------- Main Component ---------- */
export function BlogArticle({ data }: { data: BlogData }) {
  const readingTime = calculateReadingTime(data.sections);
  
  // Build ToC from H2s and H3s
  const tocItems = data.sections
    .map((section, idx) => {
      if (section.type === 'h2' || section.type === 'h3') {
        return {
          id: slugify(section.text),
          text: section.text,
          level: section.type === 'h2' ? 0 : 1
        };
      }
      return null;
    })
    .filter(Boolean) as { id: string; text: string; level: number }[];

  // Track H2 count for MidCta insertion
  let h2Count = 0;
  let midCtaInserted = false;

  return (
    <>
      <ScrollToTop />
      
      <article className="min-h-screen" style={{ backgroundColor: "var(--sr-bg)" }}>
        {/* Hero Section */}
        <div className="max-w-[820px] mx-auto px-6 pt-24 pb-16">
          <div className="text-center space-y-8">
            <Badge>Latest insights</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--sr-text)] max-w-[820px] mx-auto leading-[1.1]">
              {replaceEmDashes(data.title)}
            </h1>
            
            {data.dek && (
              <p className="text-xl md:text-2xl text-[var(--sr-muted)] leading-relaxed max-w-[820px] mx-auto font-light">
                {replaceEmDashes(data.dek)}
              </p>
            )}
            
            <div className="flex items-center justify-center gap-8 text-sm text-[var(--sr-muted)] pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={data.datePublished}>
                  {new Date(data.datePublished).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>
            
            {data.tags && data.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 justify-center pt-6">
                {data.tags.map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cover Image */}
        {data.coverImage && (
          <div className="max-w-6xl mx-auto px-6 mb-16">
            {typeof data.coverImage === 'string' ? (
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src={data.coverImage} 
                  alt={data.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
              </div>
            ) : (
              <div className="rounded-xl bg-[var(--sr-card)] h-96 md:h-[500px] shadow-md" />
            )}
          </div>
        )}

        {/* Key Takeaways */}
        {data.keyTakeaways && (
          <div className="max-w-6xl mx-auto px-6 mb-16">
            <KeyTakeaways items={data.keyTakeaways} />
          </div>
        )}

        {/* Main Content Grid - 720px max width, centered on xl, with 240px ToC on lg+ */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,240px] gap-12 xl:justify-center">
            {/* Main Content */}
            <div className="lg:w-[720px] xl:mx-auto">
              <Prose>
                {data.sections.map((section, idx) => {
                  // Track H2s for MidCta insertion
                  if (section.type === 'h2') {
                    h2Count++;
                  }

                  // Insert MidCta after 3rd H2
                  const shouldInsertMidCta = h2Count === 3 && !midCtaInserted && section.type === 'h2';
                  if (shouldInsertMidCta) {
                    midCtaInserted = true;
                  }

                  let content = null;

                  switch (section.type) {
                    case 'h2':
                      content = (
                        <h2
                          key={idx}
                          id={slugify(section.text)}
                          className="scroll-mt-24"
                        >
                          {replaceEmDashes(section.text)}
                        </h2>
                      );
                      break;

                    case 'h3':
                      content = (
                        <h3
                          key={idx}
                          id={slugify(section.text)}
                          className="scroll-mt-24"
                        >
                          {replaceEmDashes(section.text)}
                        </h3>
                      );
                      break;

                    case 'p':
                      content = (
                        <p key={idx}>
                          {replaceEmDashes(section.text)}
                        </p>
                      );
                      break;

                    case 'bullets':
                      content = (
                        <ul key={idx}>
                          {section.items.map((item, i) => (
                            <li key={i}>{replaceEmDashes(item)}</li>
                          ))}
                        </ul>
                      );
                      break;

                    case 'steps':
                      content = (
                        <ol key={idx}>
                          {section.items.map((item, i) => (
                            <li key={i}>{replaceEmDashes(item)}</li>
                          ))}
                        </ol>
                      );
                      break;

                    case 'quote':
                      content = (
                        <PullQuote key={idx} cite={section.cite}>
                          {replaceEmDashes(section.text)}
                        </PullQuote>
                      );
                      break;

                    case 'callout':
                      content = (
                        <CalloutComponent key={idx} tone={section.tone}>
                          {replaceEmDashes(section.text)}
                        </CalloutComponent>
                      );
                      break;

                    case 'labeled':
                      content = (
                        <CalloutComponent key={idx} tone={section.kind}>
                          {replaceEmDashes(section.text)}
                        </CalloutComponent>
                      );
                      break;

                    case 'table':
                      content = <CompTable key={idx} rows={section.rows} caption={section.caption} />;
                      break;

                    case 'image':
                      content = (
                        <figure key={idx} className="rounded-xl overflow-hidden bg-[var(--sr-card)] shadow-md">
                          {section.src ? (
                            <img src={section.src} alt={section.alt} className="w-full" />
                          ) : (
                            <div className="h-80 flex items-center justify-center text-[var(--sr-muted)]">
                              {section.alt}
                            </div>
                          )}
                        </figure>
                      );
                      break;

                    default:
                      content = null;
                  }

                  return (
                    <React.Fragment key={idx}>
                      {content}
                      {shouldInsertMidCta && <MidCta />}
                    </React.Fragment>
                  );
                })}

                {/* FAQs */}
                {data.faq && data.faq.length > 0 && (
                  <div className="space-y-6 mt-16">
                    <h2 className="scroll-mt-24" id="faq">
                      Frequently Asked Questions
                    </h2>
                    {data.faq.map((faq, i) => (
                      <div key={i} className="space-y-3 p-6 rounded-xl border border-[var(--sr-border)] bg-[var(--sr-card)]">
                        <h3 className="text-xl font-bold text-[var(--sr-text)]">{replaceEmDashes(faq.q)}</h3>
                        <p className="text-[var(--sr-text)] leading-7 text-[17px]">{replaceEmDashes(faq.a)}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Related Articles */}
                {data.related && data.related.length > 0 && (
                  <div className="space-y-6 mt-16">
                    <h2 className="scroll-mt-24" id="related">
                      Related Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {data.related.slice(0, 3).map((article, i) => (
                        <Link
                          key={i}
                          href={article.href}
                          className="block rounded-xl border border-[var(--sr-border)] bg-[var(--sr-card)] p-6 hover:border-[var(--sr-accent)] transition-colors duration-200 group"
                        >
                          <h3 className="font-semibold text-lg text-[var(--sr-text)] group-hover:text-[var(--sr-accent)] transition-colors">
                            {replaceEmDashes(article.title)}
                          </h3>
                          <span className="mt-2 inline-block text-sm text-[var(--sr-muted)]">Read more →</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back Link */}
                <div className="pt-12 border-t border-[var(--sr-border)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[var(--sr-muted)] hover:text-[var(--sr-accent)] transition-colors font-medium"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to all articles
                  </Link>
                </div>
              </Prose>
            </div>

            {/* Sticky ToC */}
            <div className="lg:col-start-2">
              <StickyToc items={tocItems} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
