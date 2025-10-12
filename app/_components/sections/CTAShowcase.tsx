'use client';

import Link from 'next/link';

type CTAShowcaseProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export default function CTAShowcase({
  eyebrow = '✨  Make Your Business Thrive',
  title = "Let's build your Global Team with Sigma",
  description = `Discover how Sigma can help you hire, pay, and retain top-skilled workers globally while saving you from compliance headaches and IRS forms. Book a demo today.`,
  ctaLabel = 'Get a Free Payroll Setup',
  ctaHref = '/contact',
  className = '',
}: CTAShowcaseProps) {
  return (
    <section aria-label="Call to action" className={`relative isolate ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* dark green card */}
        <div className="rounded-3xl bg-[#0C2E1C] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(520px,1fr)_minmax(480px,560px)] lg:gap-12">
            {/* Left copy */}
            <div className="text-white">
              <div className="text-sm/5 text-white/80">{eyebrow}</div>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {title}
              </h2>
              {description && (
                <p className="mt-4 max-w-prose text-white/80">{description}</p>
              )}

              <div className="mt-8">
                <Link
                  href={ctaHref}
                  aria-label={ctaLabel}
                  className="inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-5 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/10 hover:bg-lime-200"
                >
                  {ctaLabel} <span aria-hidden className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Right: UI mock cards (placeholders) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-[minmax(280px,1fr)_minmax(260px,1fr)] sm:items-start">
              {/* Team list card */}
              <div className="rounded-3xl bg-white p-5 ring-1 ring-black/10">
                <div className="text-sm font-semibold text-black">Team</div>
                <div className="mt-4 space-y-4">
                  {[
                    { name: 'Ara Cristaldo', role: 'Content Marketer', country: '🇦🇷 Argentina', time: '11:00 AM' },
                    { name: 'Majah Ravago', role: 'Contact Support', country: '🇵🇭 Philippines', time: '2:20 PM' },
                    { name: 'Damian Pérez', role: 'Software Engineer', country: '🇨🇴 Colombia', time: '09:00 AM' },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* avatar placeholder */}
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-black/5 text-xs text-black/40 ring-1 ring-black/10">
                          img
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-black">{m.name}</div>
                          <div className="text-xs text-black/60">{m.role}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-black/60">{m.country}</div>
                        <div className="text-xs text-black/40">{m.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Payroll card */}
              <div className="rounded-3xl bg-white p-5 ring-1 ring-black/10">
                <div className="text-lg font-semibold text-black">Add Payroll</div>

                {/* Team Player selector mock */}
                <div className="mt-4">
                  <div className="text-xs text-black/60">Team Player</div>
                  <div className="mt-2 flex items-center justify-between rounded-xl border border-black/10 bg-white px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-[10px] text-black/40 ring-1 ring-black/10">
                        img
                      </span>
                      <span className="text-sm font-medium text-black">Javier Ojeda</span>
                    </div>
                    <span className="text-black/40">▾</span>
                  </div>
                </div>

                {/* Amount input mock */}
                <div className="mt-4">
                  <div className="text-xs text-black/60">Amount</div>
                  <div className="mt-2 rounded-xl border border-black/10 bg-white px-3 py-3 text-sm text-black/80">
                    $ 2500.00
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-5 w-full rounded-full bg-[#D6FF57] px-5 py-3 text-sm font-semibold text-black ring-1 ring-black/10 hover:bg-lime-200"
                  aria-label="Submit Payroll"
                >
                  Submit Payroll
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Optional lime background tail like the screenshot */}
        <div className="h-10 w-full bg-[#D6FF57] lg:h-14" aria-hidden />
      </div>
    </section>
  );
}
