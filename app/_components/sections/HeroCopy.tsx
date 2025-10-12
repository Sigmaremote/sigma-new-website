'use client';

import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/lib/routes';

export default function HeroCopy() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* News pill */}
        <div className="flex justify-center pt-16 sm:pt-20">
          <Link
            href="/press"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 hover:bg-black/5"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" aria-hidden />
            Flat-Fee USD Payroll Across El Salvador, Panama &amp; Costa Rica — No FX Markups, Ever
          </Link>
        </div>

        <div className="mx-auto max-w-4xl py-8 text-center sm:py-10">
          <h1
            id="hero-heading"
            className="text-5xl font-extrabold tracking-tight text-black sm:text-6xl"
          >
            Sigma helps you hire, pay
            <br className="hidden sm:block" /> and retain anyone
          </h1>

          <div className="mx-auto mt-5 max-w-2xl text-base text-black/70 sm:text-lg">
            <p>
              Easily hire and pay your global workforce. We handle W-8BEN forms, local
              payments, and provide USD Wallets &amp; health benefits for your staff.
            </p>
            <p className="mt-3">
              Make onboarding, payments, retention, and compliance painless with Sigma.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={routes?.contact ?? '/contact'}
              aria-label="Get a Free Payroll Setup"
              className="inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-5 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/10 hover:bg-lime-200"
            >
              Get a Free Payroll Setup <span aria-hidden className="ml-2">→</span>
            </Link>

            <Link
              href="/signup"
              aria-label="Create Account"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black/5"
            >
              Create Account
            </Link>
          </div>

          {/* Product Hunt badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Image
              src="/landing-page-images/ProductHuntBadge.svg"
              alt="Product Hunt Badge"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
            <Image
              src="/landing-page-images/producthuntbadge2.svg"
              alt="Product Hunt Badge 2"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
