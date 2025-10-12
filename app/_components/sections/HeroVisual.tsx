'use client';

import Image from 'next/image';

export default function HeroVisual() {
  return (
    <section aria-label="Product preview" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-2 w-full max-w-5xl rounded-3xl bg-[#EAFDB3] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:p-8">
          <div className="relative mx-auto max-w-[980px]">
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/10">
              <Image
                src="/landing-page-images/hero-mobile-image.avif"
                alt="Sigma dashboard and mobile preview"
                width={1600}
                height={1000}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 980px"
                className="h-auto w-full"
              />
            </div>

            {/* Vendor row */}
            <div className="mt-6 text-center">
              <p className="text-xs text-black/60">
                Companies use Sigma's end-to-end solution to replace:
              </p>
              <div className="mt-2 text-sm text-black/70">
                <span className="mx-2">deel</span>·
                <span className="mx-2">Payoneer</span>·
                <span className="mx-2">gusto</span>·
                <span className="mx-2">SafetyWing</span>·
                <span className="mx-2">workday</span>·
                <span className="mx-2">checkr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
