import React from "react";

export function ScriptLD() {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Network Coverage",
      url: "https://www.sigmaremote.com/resources/network-coverage",
      inLanguage: "en",
      description:
        "Explore SigmaRemote coverage by country: payout rails, USD wallets, stablecoins, and settlement speed.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Resources",
          item: "https://www.sigmaremote.com/resources",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Network Coverage",
          item: "https://www.sigmaremote.com/resources/network-coverage",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Network Coverage: Countries and Payout Rails",
      datePublished: new Date().toISOString(),
      author: {
        "@type": "Organization",
        name: "SigmaRemote",
        url: "https://www.sigmaremote.com",
      },
      publisher: {
        "@type": "Organization",
        name: "SigmaRemote",
        url: "https://www.sigmaremote.com",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.sigmaremote.com/resources/network-coverage",
      },
      image: "https://framerusercontent.com/images/7PVdnLLWFnOOVEhlu5NLszpYRY.png",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which payout rails are available by country?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each country shows supported rails: local bank, mobile money, USD wallet, card payouts, and stablecoins (USDC and USDT) where compliant.",
          },
        },
        {
          "@type": "Question",
          name: "Do you charge FX fees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "USD wallet payouts avoid conversion. Some exotic corridors can exceed one percent FX. Notes are listed per country.",
          },
        },
        {
          "@type": "Question",
          name: "How fast are payouts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Settlement varies by rail and market: instant or same day for wallets and stablecoins in many markets. Local bank rails are usually one to two days.",
          },
        },
      ],
    },
  ];

  return React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(ld) },
  });
}
