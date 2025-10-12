'use client';

import Link from 'next/link';

export default function GlobalReach() {
  return (
    <section aria-label="Global reach" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(280px,1fr)_minmax(420px,1.1fr)_minmax(420px,1fr)]">
          {/* Left copy + CTA */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
              We get you to every
              <br className="hidden sm:block" /> country
            </h2>
            <p className="mt-4 max-w-md text-black/70">
              From Buenos Aires to Manila, hire contractors
              and employees anywhere with Sigma.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-5 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/10 hover:bg-lime-200"
                aria-label="Get a Free Payroll Setup"
              >
                Get a Free Payroll Setup <span aria-hidden className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Middle: 160+ countries (flags grid placeholder) */}
          <div className="rounded-3xl bg-[#EAFDB3] p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)] sm:p-8">
            <h3 className="text-center text-2xl font-extrabold tracking-tight text-black">
              160+ countries
            </h3>

            {/* Flags grid placeholder – replace each box with a flag image later */}
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-10 items-center justify-center rounded-xl bg-white text-xs text-black/40 ring-1 ring-black/10"
                  title="Flag placeholder"
                  aria-hidden
                >
                  {/* <Image src="/flags/xx.svg" alt="Country" fill /> */}
                  image
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-sm text-black/60">To hire from.</p>
          </div>

          {/* Right: Incorporated outside of the U.S.? (map placeholder) */}
          <div className="rounded-3xl bg-[#0C2E1C] p-6 text-white shadow-[0_12px_36px_rgba(0,0,0,0.06)] sm:p-8">
            <h3 className="text-2xl font-extrabold tracking-tight">Incorporated outside of the U.S.?</h3>

            {/* Map image placeholder – replace with your world map later */}
            <div
              className="mt-4 aspect-[16/10] w-full rounded-2xl bg-white/10 ring-1 ring-white/15"
              title="World map placeholder"
              aria-hidden
            >
              {/* <Image src="/maps/world.png" alt="Global map" fill className="object-contain" /> */}
            </div>

            <p className="mt-4 text-sm text-white/80">
              International companies can also use Sigma.
              <br />Book a demo to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
