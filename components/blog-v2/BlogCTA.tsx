'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type BlogCTAProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function BlogCTA({
  eyebrow = '✨ Ready to get started?',
  title = "Let's build your Global Team with Sigma",
  description = `Discover how Sigma can help you hire, pay, and retain top-skilled workers globally while saving you from compliance headaches and IRS forms. Book a demo today.`,
  ctaLabel = 'Get a Free Payroll Setup',
  ctaHref = '/contact',
  imageSrc = '/landing-page-images/Repeatable CTA above the footer part/image1.1.avif',
  imageAlt = 'Sigma platform interface',
  className = '',
}: BlogCTAProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div aria-label="Call to action" className={`relative isolate ${className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* dark green card */}
        <motion.div 
          className="rounded-2xl bg-[#0C2E1C] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:p-8 lg:p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(400px,1fr)_minmax(300px,400px)] lg:gap-8">
            {/* Left copy */}
            <div className="text-white">
              <div className="text-sm/5 text-white/80">{eyebrow}</div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {title}
              </h2>
              {description && (
                <p className="mt-4 max-w-prose text-white/80 text-sm sm:text-base">{description}</p>
              )}

              <div className="mt-6">
                <Link
                  href={ctaHref}
                  aria-label={ctaLabel}
                  className="inline-flex items-center justify-center rounded-full bg-[#E8F843] px-5 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/10 hover:bg-[#CFF86A] transition-colors"
                >
                  {ctaLabel} <span aria-hidden className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Right: Single UI showcase image */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 max-w-sm">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
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
