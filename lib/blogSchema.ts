export function blogSchema({ url, title, dateISO, authorName, authorUrl, faq }:{
  url:string; title:string; dateISO:string; authorName:string; authorUrl:string;
  faq?: { q:string; a:string }[];
}){
  const article = {
    "@context":"https://schema.org","@type":"Article","headline": title,"datePublished": dateISO,
    "author": { "@type":"Person", "name": authorName, "url": authorUrl },
    "publisher": { "@type":"Organization","name":"SigmaRemote","url":"https://www.sigmaremote.com" },
    "mainEntityOfPage": { "@type":"WebPage","@id": url }
  };
  const faqPage = faq?.length ? {
    "@context":"https://schema.org","@type":"FAQPage",
    "mainEntity": faq.map(x=>({ "@type":"Question","name": x.q,"acceptedAnswer": { "@type":"Answer","text": x.a }}))
  } : null;
  return JSON.stringify(faqPage ? [article, faqPage] : [article]);
}
