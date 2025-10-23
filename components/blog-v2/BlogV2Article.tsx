import slugify from "slugify";
import { ProseV2 } from "./ProseV2";
import { CalloutLiteV2 } from "./CalloutLiteV2";
import { StatCallout } from "./StatCallout";
import { TipCallout } from "./TipCallout";
import { ActionableTipCallout } from "./ActionableTipCallout";
import { CaseStudyCallout } from "./CaseStudyCallout";
import { ExampleCallout } from "./ExampleCallout";
import { TocCardV2 } from "./TocCardV2";
import { KeyTakeawaysV2 } from "./KeyTakeawaysV2";
import { HeroSplitV2 } from "./HeroSplitV2";
import { RelatedCallout } from "./RelatedCallout";
import { PayoneerComparisonTable } from "@/components/ui/payoneer-comparison-table";
import { BlogCTA } from "./BlogCTA";
import { SecondaryCTA } from "./SecondaryCTA";
import { SecondaryBlogCTA } from "./SecondaryBlogCTA";
import { AlertTriangle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type V2Section =
  | { type:'h1'; text:string; tocLabel?: string }
  | { type:'h2'; text:string; tocLabel?: string }
  | { type:'h3'; text:string; tocLabel?: string }
  | { type:'p'; text:string }
  | { type:'bullets'; items:string[] }
  | { type:'steps'; items:string[] }
  | { type:'callout'; label:string; text:string }
  | { type:'related'; text:string }
  | { type:'stat'; text:string }
  | { type:'tip'; text:string }
  | { type:'actionable-tip'; text:string }
  | { type:'case-study'; text:string }
  | { type:'example'; text:string }
  | { type:'image'; src:string; alt?:string }
  | { type:'hr' }
  | { type:'comparison-table'; data: any[] }
  | { type:'payoneer-comparison-table' }
  | { type:'platform-experience-table' }
  | { type:'blog-cta'; eyebrow?: string; title?: string; description?: string; ctaLabel?: string; ctaHref?: string; imageSrc?: string; imageAlt?: string }
  | { type:'secondary-cta'; eyebrow?: string; title?: string; description?: string; ctaLabel?: string; ctaHref?: string }
  | { type:'inline-cta'; eyebrow?: string; title?: string; description?: string; ctaLabel?: string; ctaHref?: string }

export type BlogV2Data = {
  title: string;
  dek?: string;
  lastUpdate?: string;
  coverImage: { src:string; alt:string; width:number; height:number };
  keyTakeaways?: string[];
  sections: V2Section[];
};

export function BlogV2Article({ data }: { data: BlogV2Data }) {
  const headings = data.sections.filter(s=>s.type==='h1' || s.type==='h2').map(s=>{
    const id = slugify((s as any).text,{lower:true,strict:true});
    const text = (s as any).tocLabel || (s as any).text;
    return { id, text };
  });
  let h2Count = 0;

  return (
    <article className="mx-auto max-w-[1200px] px-4 md:px-6">
      <HeroSplitV2
        title={data.title}
        dek={data.dek}
        lastUpdate={data.lastUpdate}
        image={data.coverImage}
      />

      {/* Hero sentinel for TOC visual feedback */}
      <div data-hero-sentinel className="h-0"></div>

      {/* TOC on left, Key Takeaways and content on right */}
      <div className="mt-8 grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8 items-start">
        {/* Left column - TOC */}
        <div className="lg:sticky lg:top-8">
          <TocCardV2 items={headings} rootSelector="#toc-root" />
        </div>
        
        {/* Right column - Key Takeaways and content */}
        <div id="toc-root" className="relative">
          <KeyTakeawaysV2 items={data.keyTakeaways} />
          <div className="max-w-[720px] mt-8">
          <ProseV2>
            {data.sections.map((s, idx) => {
                      if (s.type === 'h1') {
                        const id = slugify(s.text,{lower:true,strict:true});
                        return <h1 id={id} key={idx} className="scroll-mt-28" data-toc={s.tocLabel}>{s.text}</h1>;
                      }
                      if (s.type === 'h2') {
                        const id = slugify(s.text,{lower:true,strict:true}); h2Count++;
                        return <h2 id={id} key={idx} className="scroll-mt-28" data-toc={s.tocLabel}>{s.text}</h2>;
                      }
                      if (s.type === 'h3') {
                        const id = slugify(s.text,{lower:true,strict:true});
                        return <h3 id={id} key={idx} className="scroll-mt-28">{s.text}</h3>;
                      }
              if (s.type === 'p') return <p key={idx} dangerouslySetInnerHTML={{__html: s.text}} />;
              if (s.type === 'bullets') return <ul key={idx}>{s.items.map((it,i)=><li key={i} dangerouslySetInnerHTML={{__html: it}}></li>)}</ul>;
              if (s.type === 'steps') return <ol key={idx} className="list-decimal pl-5">{s.items.map((it,i)=><li key={i} className="mb-1.5" dangerouslySetInnerHTML={{__html: it}}></li>)}</ol>;
              if (s.type === 'callout') return <CalloutLiteV2 key={idx} label={s.label}>{s.text}</CalloutLiteV2>;
              if (s.type === 'related') return <RelatedCallout key={idx}>{s.text}</RelatedCallout>;
              if (s.type === 'stat') return <CalloutLiteV2 key={idx} label="Stat to Know">{s.text}</CalloutLiteV2>;
              if (s.type === 'tip') return <CalloutLiteV2 key={idx} label="Pro Tip">{s.text}</CalloutLiteV2>;
              if (s.type === 'actionable-tip') return <CalloutLiteV2 key={idx} label="Actionable Tip">{s.text}</CalloutLiteV2>;
              if (s.type === 'case-study') return <CalloutLiteV2 key={idx} label="Case Study">{s.text}</CalloutLiteV2>;
              if (s.type === 'example') return <CalloutLiteV2 key={idx} label="Example">{s.text}</CalloutLiteV2>;
              if (s.type === 'hr') return <hr key={idx} className="my-12" style={{borderColor:'#E5E7EB'}} />;
              if (s.type === 'image') {
                const isExternal = /^https?:\/\//.test(s.src);
                return (
                  <figure key={idx} className="my-10">
                    <div className="rounded-xl overflow-hidden border bg-white" style={{borderColor:'#E5E7EB'}}>
                      {isExternal
                        ? <img src={s.src} alt={s.alt||''} className="w-full h-auto" />
                        : <Image src={s.src} alt={s.alt||''} width={1200} height={800} className="w-full h-auto" />
                      }
                    </div>
                    {s.alt && <figcaption className="text-sm mt-2" style={{color:'#6B7280'}}>{s.alt}</figcaption>}
                  </figure>
                );
              }
              if (s.type === 'payoneer-comparison-table') {
                const comparisonTableData = [
                  {
                    feature: 'FX Fees',
                    payoneer: {
                      text: 'Up to <strong>3.5%</strong> above mid-market rate; contractors lose ~$35 per $1,000 sent',
                      status: 'bad' as const
                    },
                    sigmaRemote: {
                      text: 'Flat pricing, or ~1% <strong>FX</strong> with USD wallet',
                      status: 'good' as const
                    }
                  },
                  {
                    feature: 'Landing & Withdrawal Fees',
                    payoneer: {
                      text: 'Additional <strong>2-3%</strong> deducted on receipt',
                      status: 'bad' as const
                    },
                    sigmaRemote: {
                      text: '<strong>$0</strong> with USD wallet (no forced conversions)',
                      status: 'good' as const
                    }
                  },
                  {
                    feature: 'Payment Speed',
                    payoneer: {
                      text: '<strong>3-5 business days</strong>, delays common',
                      status: 'bad' as const
                    },
                    sigmaRemote: {
                      text: '<strong>1-2 business days</strong>, optimized infrastructure',
                      status: 'good' as const
                    }
                  }
                ];
                return <PayoneerComparisonTable key={idx} rows={comparisonTableData} />;
              }
              if (s.type === 'platform-experience-table') {
                const platformExperienceData = [
                  {
                    feature: 'Contractor Experience',
                    payoneer: {
                      text: 'Complex UI, slow access to funds',
                      status: 'bad' as const
                    },
                    sigmaRemote: {
                      text: 'Clean dashboard, <strong>USD wallet control</strong>',
                      status: 'good' as const
                    }
                  },
                  {
                    feature: 'Onboarding Process',
                    payoneer: {
                      text: 'Manual and lengthy',
                      status: 'warning' as const
                    },
                    sigmaRemote: {
                      text: '<15 min onboarding using your phone',
                      status: 'good' as const
                    }
                  },
                  {
                    feature: 'Customer Support',
                    payoneer: {
                      text: 'Often no response. Up to 3% accounts shut down',
                      status: 'bad' as const
                    },
                    sigmaRemote: {
                      text: '<strong>3x faster</strong> support via real humans on WhatsApp',
                      status: 'good' as const
                    }
                  }
                ];
                return <PayoneerComparisonTable key={idx} rows={platformExperienceData} />;
              }
              if (s.type === 'blog-cta') {
                return (
                  <BlogCTA 
                    key={idx}
                    eyebrow={s.eyebrow}
                    title={s.title}
                    description={s.description}
                    ctaLabel={s.ctaLabel}
                    ctaHref={s.ctaHref}
                    imageSrc={s.imageSrc}
                    imageAlt={s.imageAlt}
                    className="my-12"
                  />
                );
              }
              if (s.type === 'secondary-cta') {
                return (
                  <SecondaryCTA 
                    key={idx}
                    eyebrow={s.eyebrow}
                    title={s.title}
                    description={s.description}
                    ctaLabel={s.ctaLabel}
                    ctaHref={s.ctaHref}
                    className="my-8"
                  />
                );
              }
              if (s.type === 'inline-cta') {
                return (
                  <SecondaryBlogCTA 
                    key={idx}
                    eyebrow={s.eyebrow}
                    title={s.title}
                    description={s.description}
                    ctaLabel={s.ctaLabel}
                    ctaHref={s.ctaHref}
                  />
                );
              }
              return null;
            })}
          </ProseV2>
          </div>
        </div>
      </div>
    </article>
  );
}

