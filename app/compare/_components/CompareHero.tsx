"use client";
import Image from "next/image";
import Link from "next/link";
import BrandStars from "./BrandStars";

export default function CompareHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden="true" className="text-slate-400">›</li>
            <li><Link href="/compare" className="hover:underline">Compare</Link></li>
            <li aria-hidden="true" className="text-slate-400">›</li>
            <li aria-current="page" className="text-slate-800 font-medium">Deel</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              SigmaRemote vs Deel - Lower Costs, Faster Global Payroll for Your Team
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              Deel's high per-contractor fees and payout restrictions can slow your team down. See why scaling businesses choose SigmaRemote for predictable costs, faster onboarding, and global payouts without forced conversion.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                aria-label="Book a demo"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:bg-slate-50"
                aria-label="See pricing"
              >
                See Pricing
              </Link>
            </div>

            <div className="mt-6">
              <BrandStars />
            </div>
          </div>

          {/* Right column - hero card */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-[90%] mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100">
              <Image
                src="/Comparation Page images/Sigma Vs Deel/hero1.avif"
                alt="SigmaRemote dashboard showing payroll insights"
                fill
                priority
                className="object-contain object-center scale-90"
                sizes="(max-width: 1024px) 90vw, 43.2vw"
                quality={95}
              />
            </div>

            {/* Top-right floating image (replacing date card) */}
            <div className="pointer-events-none absolute -right-12 -top-12 md:-right-20 md:-top-14">
              <div className="pointer-events-auto relative w-64 h-40">
                <Image
                  src="/Comparation Page images/Sigma Vs Deel/hero2.avif"
                  alt="Financial budget overview"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, 256px"
                  quality={95}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom-left floating image (replacing FX Saved card) */}
            <div className="pointer-events-none absolute -left-16 -bottom-4 md:-left-24 md:-bottom-6">
              <div className="pointer-events-auto relative w-[19rem] h-44">
                <Image
                  src="/Comparation Page images/Sigma Vs Deel/hero3.avif"
                  alt="Latest financial records"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 190px, 304px"
                  quality={95}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom-right floating image */}
            <div className="pointer-events-none absolute -right-8 -bottom-4 md:-right-12 md:-bottom-6">
              <div className="pointer-events-auto relative w-40 h-24">
                <Image
                  src="/Comparation Page images/Sigma Vs Deel/hero4.avif"
                  alt="Additional feature showcase"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 160px"
                  quality={95}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

