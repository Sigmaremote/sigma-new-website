'use client';

export default function FinancialComplianceHubs() {
  return (
    <section aria-label="Financial, Benefits, and Compliance Hubs" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top grid: Financial Hub (left) + Benefits (right) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Sigma Financial Hub (dark green card) */}
          <div className="rounded-3xl bg-[#0C2E1C] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8">
            <div className="text-sm/5 text-white/80">Sigma Financial Hub</div>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Global finances for your workers
            </h3>
            <p className="mt-3 max-w-prose text-white/80">
              With Sigma Wallet by Wells Fargo, workers can save their income and have control over their payment options.
            </p>

            {/* Dashboard wallet mock image */}
            <div className="mt-6 aspect-[5/3] w-full overflow-hidden rounded-2xl">
              <img
                src="/landing-page-images/Sigma financial club part/image5.avif"
                alt="Sigma Wallet dashboard showing balance and withdrawal options"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Sigma Benefits (lime card) */}
          <div className="rounded-3xl bg-[#D6FF57] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8">
            <div className="text-sm/5 text-black/70">Sigma Benefits</div>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Truly local benefits
            </h3>
            <p className="mt-3 max-w-prose text-black/70">
              Your team can access local health insurance, plan for retirement, and get help with social security contributions.
            </p>

            {/* Right-side stacked widgets area */}
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Countries table image */}
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src="/landing-page-images/Sigma benefits part/image6.avif"
                  alt="Countries table showing local benefits by country"
                  className="w-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                {/* Performance bonus card image */}
                <div className="w-full overflow-hidden rounded-2xl">
                  <img
                    src="/landing-page-images/Sigma benefits part/image7.avif"
                    alt="Performance bonus interface"
                    className="w-full object-contain"
                  />
                </div>
                {/* Success notification card image */}
                <div className="w-full overflow-hidden rounded-2xl">
                  <img
                    src="/landing-page-images/Sigma benefits part/iamge8.avif"
                    alt="Success notification showing shipped item"
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wide card: Compliance & Reporting Hub (yellow) */}
        <div className="mt-6 rounded-3xl bg-[#F9DD4A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(420px,520px)_1fr]">
            {/* Left copy */}
            <div>
              <div className="flex items-center gap-2 text-sm/5 text-black/70">
                <span className="text-lg" aria-hidden>✨</span>
                <span>Invoicing, Compliance &amp; Analytics</span>
              </div>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                Compliance &amp; Reporting Hub
              </h3>
              <p className="mt-3 max-w-prose text-black/70">
                With Sigma's Compliance and Reporting Hub, you can easily manage invoices and stay on top of tax reporting.
                Stay informed on global compliance issues like never before, as our hub provides access to the latest regulatory
                updates and alerts, ensuring you have the guidance you need.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
                aria-label="Get a Free Payroll Setup"
              >
                Get a Free Payroll Setup <span aria-hidden className="ml-2">→</span>
              </a>
            </div>

            {/* Right metrics layout */}
            <div className="grid grid-cols-2 items-start gap-2">
              {/* Left tally column */}
              <div className="space-y-2">
                <div className="h-20 w-full overflow-hidden rounded-2xl">
                  <img
                    src="/landing-page-images/Compliance & Reporting Hub part/image9.avif"
                    alt="Total Invoices metric"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-20 w-full overflow-hidden rounded-2xl">
                  <img
                    src="/landing-page-images/Compliance & Reporting Hub part/image10.avif"
                    alt="Tax Fillings metric"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-20 w-full overflow-hidden rounded-2xl">
                  <img
                    src="/landing-page-images/Compliance & Reporting Hub part/iamge11.avif"
                    alt="Pending items metric"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Right chart image */}
              <div className="h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src="/landing-page-images/Compliance & Reporting Hub part/iamge12.avif"
                  alt="Total Paid chart and metrics"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
