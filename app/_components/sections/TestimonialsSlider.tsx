'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Testimonial = {
  logoText?: string;         // e.g., "founderscfo"
  logoSrc?: string;          // optional path to a logo image (use instead of logoText)
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarSrc?: string;        // optional headshot path
};

const CARD_BG = '#CCFF86'; // tweak if you want a different lime; used to match the screenshot

const DATA: Testimonial[] = [
  {
    logoText: 'founderscfo',
    quote:
      'Many of our startup clients want to nearshore talent but worry about compliance. Sigma handles it all, making it ideal for busy founders hiring in Latam for the first time.',
    authorName: 'Sergio de la Zerda',
    authorTitle: 'Founder, FoundersCFO',
    // avatarSrc: '/avatars/sergio.png',
  },
  // Add more as needed…
];

export default function TestimonialsSlider() {
  const [idx, setIdx] = useState(0);
  const total = DATA.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // optional autoplay (every 7s)
  useEffect(() => {
    if (total <= 1) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % total);
    }, 7000);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [total]);

  const go = (dir: 'prev' | 'next') => {
    setIdx((i) => (dir === 'next' ? (i + 1) % total : (i - 1 + total) % total));
  };

  const t = DATA[idx];

  return (
    <section aria-label="Testimonials" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto w-full rounded-[28px] p-8 sm:p-12 lg:p-16"
          style={{ backgroundColor: CARD_BG }}
        >
          {/* Prev / Next circular buttons */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => go('prev')}
                aria-label="Previous testimonial"
                className="absolute left-6 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black text-white shadow-md hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go('next')}
                aria-label="Next testimonial"
                className="absolute right-6 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black text-white shadow-md hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                →
              </button>
            </>
          )}

          {/* Logo */}
          <div className="flex items-center justify-center">
            {t.logoSrc ? (
              <div className="relative h-8 w-40">
                <Image
                  src={t.logoSrc}
                  alt={t.logoText ?? 'logo'}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-black">
                <span className="inline-block h-6 w-6 rounded-full border-2 border-black/70" aria-hidden />
                {t.logoText}
              </div>
            )}
          </div>

          {/* Quote */}
          <blockquote className="mx-auto mt-6 max-w-3xl text-center text-2xl font-semibold leading-[1.4] tracking-tight text-black sm:text-[28px] md:text-[32px]">
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <figcaption className="mt-8 flex items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ring-1 ring-black/10 bg-white">
                {t.avatarSrc ? (
                  <Image
                    src={t.avatarSrc}
                    alt={t.authorName}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-cover"
                  />
                ) : (
                  <span className="text-sm text-black/40">img</span>
                )}
              </span>
              <div className="text-left">
                <div className="text-base font-semibold text-black">{t.authorName}</div>
                <div className="text-sm text-black/60">{t.authorTitle}</div>
              </div>
            </div>
          </figcaption>

          {/* Optional dots (hidden if single item) */}
          {total > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <span
                  key={i}
                  aria-hidden
                  className={`h-1.5 w-6 rounded-full ${i === idx ? 'bg-black' : 'bg-black/20'}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
