export function blogV2Schema({ url, title, dateISO }:{url:string;title:string;dateISO:string}){
  return JSON.stringify({
    "@context":"https://schema.org",
    "@type":"Article",
    "headline": title,
    "datePublished": dateISO,
    "mainEntityOfPage": { "@type":"WebPage", "@id": url }
  });
}

