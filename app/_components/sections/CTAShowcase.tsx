'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div aria-label="Call to action" className={`relative isolate ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* dark green card */}
        <motion.div 
          className="rounded-3xl bg-[#0C2E1C] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:p-10 lg:p-14"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(520px,1fr)_minmax(480px,560px)] lg:gap-12">
            {/* Left copy */}
            <div className="text-white">
              <div className="text-sm/5 text-white/80">{eyebrow}</div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {title}
              </h2>
              {description && (
                <p className="mt-4 max-w-prose text-white/80">{description}</p>
              )}

              <div className="mt-8">
                <Link
                  href={ctaHref}
                  aria-label={ctaLabel}
                  className="inline-flex items-center justify-center rounded-full bg-[#E8F843] px-5 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/10 hover:bg-[#CFF86A]"
                >
                  {ctaLabel} <span aria-hidden className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Right: UI showcase images */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-start">
              {/* Image 1 */}
              <div className="rounded-3xl overflow-hidden ring-1 ring-black/10">
                <Image
                  src="/landing-page-images/Repeatable CTA above the footer part/image1.1.avif"
                  alt="Sigma platform interface"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="rounded-3xl overflow-hidden ring-1 ring-black/10">
                <Image
                  src="/landing-page-images/Repeatable CTA above the footer part/image1.2.avif"
                  alt="Sigma payroll interface"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
