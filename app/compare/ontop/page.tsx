import type { Metadata } from "next";
import CompareHero from "../_components/CompareHero";
import CompareSection from "../_components/CompareSection";
import PainPointsBlock from "../_components/PainPointsBlock";
import WhyWinsBlock from "../_components/WhyWinsBlock";
import CompareFAQ from "../_components/CompareFAQ";
import GlobalReach from "@/app/_components/sections/GlobalReach";
import { COMPARE_DATA } from "../_data/compare-data";
import Script from "next/script";
import FadeIn from "../_components/FadeIn";
import AnimatedSection from "../_components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "SigmaRemote vs Ontop - Lower Costs, Faster Global Payroll",
  description:
    "See why scaling teams choose SigmaRemote over Ontop for predictable costs, faster onboarding, and flexible USD wallet payouts.",
  metadataBase: new URL("https://sigmaremote.com"),
  alternates: { canonical: "/compare/ontop" },
  openGraph: {
    title: "SigmaRemote vs Ontop - Lower Costs, Faster Global Payroll",
    url: "https://sigmaremote.com/compare/ontop",
    images: ["/og-compare-ontop.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  const d = COMPARE_DATA["ontop"];
  
  const json = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SigmaRemote vs Ontop - comparison",
      "url": "https://sigmaremote.com/compare/ontop"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sigmaremote.com/" },
        { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://sigmaremote.com/compare" },
        { "@type": "ListItem", "position": 3, "name": "Ontop", "item": "https://sigmaremote.com/compare/ontop" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "SigmaRemote vs Ontop - Lower Costs, Faster Global Payroll",
      "datePublished": "2025-10-14T00:00:00+02:00",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://sigmaremote.com/compare/ontop" },
      "author": { "@type": "Person", "name": "SigmaRemote", "url": "https://sigmaremote.com" },
      "publisher": { "@type": "Organization", "name": "SigmaRemote" },
      "image": "https://sigmaremote.com/og-compare-ontop.jpg",
      "inLanguage": "en"
    }
  ];

  return (
    <>
      <Script id="ld-compare-ontop" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
      <FadeIn>
        <AnimatedSection animation="fadeUp" delay={0}>
          <CompareHero competitorKey="ontop" />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeUp" delay={100}>
          <CompareSection competitorKey="ontop" />
        </AnimatedSection>
        
        <AnimatedSection animation="slideInLeft" delay={200}>
          <PainPointsBlock
            competitorName={d.competitorName}
            bullets={d.painPoints}
            size="wide"
          />
        </AnimatedSection>
        
        <AnimatedSection animation="slideInRight" delay={300}>
          <WhyWinsBlock bullets={d.whySigmaWins} size="wide" className="-mt-4" />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeUp" delay={400}>
          <CompareFAQ />
        </AnimatedSection>
        
        <AnimatedSection animation="fadeUp" delay={500}>
          <div className="py-16 lg:py-24">
            <GlobalReach />
          </div>
        </AnimatedSection>
        {/* Next sections will be added below (CTA). */}
      </FadeIn>
    </>
  );
}

