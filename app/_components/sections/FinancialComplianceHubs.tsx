'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wallet, Sparkles, Gift } from 'lucide-react';

export default function FinancialComplianceHubs() {
  const sectionRef = useRef(null);
  const bottomCardRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isBottomCardInView = useInView(bottomCardRef, { once: true, margin: "-100px" });

  return (
    <div aria-label="Financial, Benefits, and Compliance Hubs" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Top grid: Financial Hub (left) + Benefits (right) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Sigma Financial Hub (dark green card) - Slide in from LEFT */}
          <motion.div 
            className="rounded-3xl bg-[hsl(156,82%,13%)] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2">
              <Wallet className="size-4 text-white/80" />
              <p className="font-satoshi text-[13px] font-medium leading-[1.2] tracking-[0.02em] text-white/80">Sigma Financial Hub</p>
            </div>
            <h3 className="mt-2 font-satoshi text-[28px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-white">
              Global finances for your workers
            </h3>
            <p className="mt-3 max-w-prose font-satoshi text-[16px] leading-relaxed text-white/80">
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
          </motion.div>

          {/* Sigma Benefits (lime card) - Slide in from RIGHT */}
          <motion.div 
            className="rounded-3xl bg-[#D1FF94] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2">
              <Gift className="size-4 text-black/70" />
              <p className="font-satoshi text-[13px] font-medium leading-[1.2] tracking-[0.02em] text-black/70">Sigma Benefits</p>
            </div>
            <h3 className="mt-2 font-satoshi text-[28px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-black">
              Truly local benefits
            </h3>
            <p className="mt-3 max-w-prose font-satoshi text-[16px] leading-relaxed text-black/70">
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
          </motion.div>
        </div>

        {/* Bottom wide card: Compliance & Reporting Hub (yellow) - Slide in from BOTTOM */}
        <motion.div 
          ref={bottomCardRef}
          className="mt-6 rounded-3xl bg-[#F9DD4A] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isBottomCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(420px,520px)_1fr]">
            {/* Left copy */}
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-black/70" />
                <p className="font-satoshi text-[13px] font-medium leading-[1.2] tracking-[0.02em] text-black/70">
                  Invoicing, Compliance &amp; Analytics
                </p>
              </div>
              <h3 className="mt-2 font-satoshi text-[28px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-black">
                Compliance &amp; Reporting Hub
              </h3>
              <p className="mt-3 max-w-prose font-satoshi text-[16px] leading-relaxed text-black/70">
                With Sigma's Compliance and Reporting Hub, you can easily manage invoices and stay on top of tax reporting.
                Stay informed on global compliance issues like never before, as our hub provides access to the latest regulatory
                updates and alerts, ensuring you have the guidance you need.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[hsl(31,84%,18%)] px-5 py-3 text-[15px] font-medium text-white hover:opacity-90"
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
        </motion.div>
      </div>
    </div>
  );
}
