'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type SecondaryCTAProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function SecondaryCTA({
  eyebrow = '💡 See the numbers for yourself',
  title = 'Compare live pricing',
  description = 'See how much your team can save on real corridors.',
  ctaLabel = 'Book a demo',
  ctaHref = '/contact',
  className = '',
}: SecondaryCTAProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div aria-label="Secondary call to action" className={`relative isolate ${className}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* outline style card */}
        <motion.div 
          className="rounded-2xl border-2 border-[#E8F843] bg-[#0C2E1C] p-6 shadow-sm sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            {/* Eyebrow */}
            <div className="text-sm font-medium text-[#E8F843] mb-2">
              {eyebrow}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 sm:text-2xl">
              {title}
            </h3>
            
            {/* Description */}
            {description && (
              <p className="text-white/80 text-sm sm:text-base mb-6 max-w-md mx-auto">
                {description}
              </p>
            )}

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link
                href={ctaHref}
                aria-label={ctaLabel}
                className="inline-flex items-center justify-center rounded-full bg-[#E8F843] px-6 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/10 hover:bg-[#CFF86A] transition-colors"
              >
                {ctaLabel} <span aria-hidden className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
