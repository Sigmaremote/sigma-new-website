"use client";
import Image from "next/image";

const logos = [
  { src: "/competitors-logos/deel.avif", alt: "Deel", width: 140, height: 48, className: "h-10 w-auto" },
  { src: "/competitors-logos/payoneer.png", alt: "Payoneer", width: 140, height: 40, className: "h-8 w-auto" },
  { src: "/competitors-logos/gusto.avif", alt: "Gusto", width: 120, height: 40, className: "h-8 w-auto" },
  { src: "/competitors-logos/safety-wings.avif", alt: "Safety Wing", width: 150, height: 48, className: "h-10 w-auto" },
  { src: "/competitors-logos/workday.avif", alt: "Workday", width: 150, height: 48, className: "h-10 w-auto" },
  { src: "/competitors-logos/checkr.avif", alt: "Checkr", width: 120, height: 40, className: "h-8 w-auto" },
];

export function CompetitorReplacementSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Header text */}
        <p className="text-center text-sm text-black/60 mb-10">
          Companies use Sigma's end-to-end solution to replace:
        </p>
        
        {/* Competitor logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={logo.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
