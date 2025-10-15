'use client';

import * as React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, Quote, Info, ShieldAlert, CheckCircle, ArrowUp } from 'lucide-react';

/** Sigma palette */
const COLORS = { dark: '#0E2C1E', lime: '#CFF86A', yellow: '#FFE95C', peach: '#FFB480' };

/** ---------- Data Types ---------- */
export type FAQ = { q: string; a: string };
export type ComparisonRow = { left: string; middle: string; right: string };

export type Section =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'steps'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'callout'; tone: 'note'|'warning'|'success'; text: string }
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
function calculateReadingTime(sections: Section[]): number {
  let wordCount = 0;
  sections.forEach((s) => {
    if (s.type === 'p') wordCount += s.text.split(' ').length;
    if (s.type === 'h2') wordCount += s.text.split(' ').length;
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
    <div className="rounded-3xl bg-[#CFF86A] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-[#0E2C1E] mb-5">
        Key Takeaways
      </h3>
      <ul className="space-y-3 text-[#0E2C1E]">
        {items.map((item, i) => (
          <li key={i} className="flex items-start group">
            <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-[#0E2C1E] flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
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

function Callout({ tone, text }: { tone: 'note' | 'warning' | 'success'; text: string }) {
  const config = {
    note: {
      bg: 'bg-[#FFE95C]/90',
      icon: Info,
      border: 'border-[#FFE95C]',
    },
    warning: {
      bg: 'bg-[#FFB480]/90',
      icon: ShieldAlert,
      border: 'border-[#FFB480]',
    },
    success: {
      bg: 'bg-[#CFF86A]/90',
      icon: CheckCircle,
      border: 'border-[#CFF86A]',
    },
  };

  const { bg, icon: Icon, border } = config[tone];

  return (
    <div className={`rounded-3xl p-8 flex gap-4 backdrop-blur-sm border shadow-sm hover:shadow-md transition-shadow duration-300 ${bg} ${border}`}>
      <Icon className="h-6 w-6 flex-shrink-0 text-[#0E2C1E] mt-0.5" />
      <p className="text-[#0E2C1E] leading-relaxed">{text}</p>
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
  const schema = buildJsonLd(data);

  return (
    <>
      <Script id="blog-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: schema }} />
      <ScrollToTop />
      
      <article className="min-h-screen bg-gradient-to-b from-neutral-100 to-white">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          <div className="text-center space-y-8">
            <Badge>Latest insights</Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 max-w-4xl mx-auto leading-[1.1]">
              {data.title}
            </h1>
            
            {data.dek && (
              <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed max-w-3xl mx-auto font-light">
                {data.dek}
              </p>
            )}
            
            <div className="flex items-center justify-center gap-8 text-sm text-neutral-600 pt-4">
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

        {/* Cover Image - Solid Color Instead of Gradient */}
        {data.coverImage && (
          <div className="max-w-6xl mx-auto px-6 mb-16">
            {typeof data.coverImage === 'string' ? (
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={data.coverImage} 
                  alt={data.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
              </div>
            ) : (
              <div className="rounded-3xl bg-[#CFF86A]/50 h-96 md:h-[500px] shadow-2xl" />
            )}
          </div>
        )}

        {/* Double Cards: Key Takeaways + ToC */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.keyTakeaways && <KeyTakeaways items={data.keyTakeaways} />}
            <TableOfContents sections={data.sections} className="lg:hidden" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-12">
            {/* Main Content */}
            <div className="space-y-10">
              {data.sections.map((section, idx) => {
                const isFirstPAfterH2 =
                  idx > 0 &&
                  section.type === 'p' &&
                  data.sections[idx - 1].type === 'h2';

                switch (section.type) {
                  case 'h2':
                    return (
                      <h2
                        key={idx}
                        id={`s-${idx}`}
                        className="mt-20 scroll-mt-24 text-[32px] md:text-[40px] font-extrabold tracking-tight text-neutral-900 leading-[1.15]"
                      >
                        {section.text}
                      </h2>
                    );

                  case 'p':
                    return (
                      <p
                        key={idx}
                        className={`text-neutral-800 leading-[1.8] ${
                          isFirstPAfterH2 ? 'text-[19px] md:text-[21px] font-light' : 'text-[17px]'
                        }`}
                      >
                        {section.text}
                      </p>
                    );

                  case 'bullets':
                    return (
                      <ul key={idx} className="space-y-3 list-disc ml-6 marker:text-neutral-600/40">
                        {section.items.map((item, i) => (
                          <li key={i} className="text-neutral-800 leading-[1.8] text-[17px]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );

                  case 'steps':
                    return (
                      <ol key={idx} className="space-y-3 list-decimal ml-6 marker:text-[#0E2C1E] marker:font-bold">
                        {section.items.map((item, i) => (
                          <li key={i} className="text-neutral-800 leading-[1.8] text-[17px] pl-2">
                            {item}
                          </li>
                        ))}
                      </ol>
                    );

                  case 'quote':
                    return (
                      <blockquote key={idx} className="border-l-4 border-[#0E2C1E] pl-8 py-4 italic text-neutral-800 text-lg bg-neutral-100/50 rounded-r-2xl">
                        "{section.text}"
                        {section.cite && (
                          <cite className="block mt-3 text-sm not-italic text-neutral-600 font-medium">
                            — {section.cite}
                          </cite>
                        )}
                      </blockquote>
                    );

                  case 'callout':
                    return <Callout key={idx} tone={section.tone} text={section.text} />;

                  case 'labeled':
                    return <LabeledBlock key={idx} kind={section.kind} text={section.text} />;

                  case 'table':
                    return <CompTable key={idx} rows={section.rows} caption={section.caption} />;

                  case 'image':
                    return (
                      <figure key={idx} className="rounded-3xl overflow-hidden bg-[#CFF86A]/30 shadow-lg">
                        {section.src ? (
                          <img src={section.src} alt={section.alt} className="w-full" />
                        ) : (
                          <div className="h-80 flex items-center justify-center text-neutral-600">
                            {section.alt}
                          </div>
                        )}
                      </figure>
                    );

                  default:
                    return null;
                }
              })}

              {/* Mid-post CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <MidPostCTA />
              </motion.div>

              {/* FAQs */}
              {data.faq && data.faq.length > 0 && (
                <div className="space-y-8 mt-20">
                  <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-neutral-900">
                    Frequently Asked Questions
                  </h2>
                  {data.faq.map((faq, i) => (
                    <div key={i} className="space-y-3 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/10 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-neutral-900">{faq.q}</h3>
                      <p className="text-neutral-800 leading-[1.8] text-[17px]">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Related Articles */}
              {data.related && data.related.length > 0 && (
                <div className="space-y-8 mt-20">
                  <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-neutral-900">
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.related.map((article, i) => (
                      <Link
                        key={i}
                        href={article.href}
                        className="block rounded-3xl border border-black/10 bg-white/80 backdrop-blur-sm p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                      >
                        <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[#0E2C1E] transition-colors">
                          {article.title}
                        </h3>
                        <span className="mt-2 inline-block text-sm text-neutral-600">Read more →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back Link */}
              <div className="pt-16 border-t border-black/10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#0E2C1E] transition-colors font-medium"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all articles
                </Link>
              </div>
            </div>

            {/* Sticky ToC - Desktop Only */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents sections={data.sections} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
