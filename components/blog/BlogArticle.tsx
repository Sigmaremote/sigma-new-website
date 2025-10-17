const slugify = require("slugify");
import Image from 'next/image';
import { Prose } from "./Prose";
import { CalloutLite } from "./CalloutLite";
import { TocCard } from "./TocCard";
import { MidCta } from "./MidCta";
import { HeroSplit } from "./HeroSplit";
import { KeyTakeaways } from "./KeyTakeaways";

export interface Section {
  type: 'h2' | 'h3' | 'p' | 'bullets' | 'steps' | 'callout' | 'labeled' | 'image';
  text?: string;
  items?: string[];
  tone?: 'note' | 'warning' | 'success';
  kind?: 'example' | 'stat' | 'case';
  src?: string;
  alt?: string;
}

export interface BlogData {
  slug: string;
  title: string;
  dek?: string;
  excerpt: string;
  author: { name: string; url: string };
  datePublished: string;
  tags?: string[];
  coverImage: string;
  keyTakeaways?: string[];
  sections: Section[];
  faq: { q: string; a: string }[];
  related?: { title: string; href: string }[];
}

export function BlogArticle({ data }:{ data: BlogData }) {
  const h2s = data.sections.filter(s=>s.type==='h2').map(s=>{
    const id = slugify(s.text!,{lower:true,strict:true});
    return { id, text: s.text! };
  });
  let h2Count = 0;

  return (
    <article className="mx-auto max-w-[1200px] px-4 md:px-6">
      <HeroSplit
        title={data.title}
        dek={data.dek}
        image={{ src:data.coverImage, alt:data.title, width:960, height:640 }}
        meta={<div className="flex gap-3 text-sm text-gray-500">
          <span className="uppercase">Last update</span>
          <span>{new Date(data.datePublished).toLocaleDateString()}</span>
          <span>•</span>
          <span>{data.tags?.join(", ")}</span>
        </div>}
      />
      <KeyTakeaways items={data.keyTakeaways} />
      <div className="grid lg:grid-cols-[16rem_minmax(0,1fr)] gap-10 mt-8">
        <TocCard items={h2s} />
        <div className="max-w-[720px]">
          <div className="prose-wrapper">
            <Prose>
              {data.sections.map((s, idx) => {
                if (s.type === 'h2') {
                  const id = slugify(s.text!,{lower:true,strict:true});
                  h2Count++;
                  return (<>
                    <h2 id={id} key={idx}>{s.text}</h2>
                    {h2Count===3 && <MidCta />}
                  </>);
                }
                if (s.type === 'h3') {
                  const id = slugify(s.text!,{lower:true,strict:true});
                  return <h3 id={id} key={idx}>{s.text}</h3>;
                }
                if (s.type === 'image') {
                  return (
                    <figure key={idx} className="my-8">
                      {/^https?:\/\//.test(s.src || '')
                        ? <img src={s.src} alt={s.alt || ''} className="rounded-xl w-full h-auto" />
                        : <Image src={s.src || ''} alt={s.alt || ''} width={1200} height={800} className="rounded-xl w-full h-auto" />
                      }
                      {s.alt && <figcaption className="text-sm text-gray-500 mt-2">{s.alt}</figcaption>}
                    </figure>
                  );
                }
                if (s.type === 'callout') return <CalloutLite key={idx} label={s.tone==='warning'?'Warning':'Note'}>{s.text}</CalloutLite>;
                if (s.type === 'labeled') {
                  const label = s.kind==='stat'?'Stat':'Example';
                  return <CalloutLite key={idx} label={label}>{s.text}</CalloutLite>;
                }
                if (s.type === 'bullets') return <ul key={idx}>{s.items?.map((it,i)=><li key={i}>{it}</li>)}</ul>;
                if (s.type === 'steps') return <ol key={idx} className="list-decimal pl-5">{s.items?.map((it,i)=><li key={i} className="mb-1.5">{it}</li>)}</ol>;
                if (s.type === 'p') return <p key={idx}>{s.text?.replace(/—/g, '-')}</p>;
                return null;
              })}
            </Prose>
          </div>
        </div>
      </div>
    </article>
  );
}