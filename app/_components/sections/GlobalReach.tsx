'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FlagMarquee from '@/components/flags/FlagMarquee';

export default function GlobalReach() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div aria-label="Global reach" className="relative isolate py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(280px,1fr)_minmax(420px,1.1fr)_minmax(420px,1fr)]">
          {/* Left copy + CTA */}
          <div className="flex flex-col pt-6 sm:pt-8">
            <motion.h2 
              className="font-satoshi text-black tracking-tight leading-[1.15] font-semibold text-[32px] sm:text-[36px] md:text-[38px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              We get you to every
              <br className="hidden sm:block" /> country
            </motion.h2>
            <motion.p 
              className="font-satoshi text-[16px] leading-relaxed text-black/70 mt-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              From Buenos Aires to Manila, hire contractors and employees anywhere with Sigma.
            </motion.p>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-satoshi font-medium text-[15px] md:text-[16px] bg-[#E8F843] text-black rounded-full h-11 px-5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]"
                aria-label="Book a demo"
              >
                Book a demo <span aria-hidden className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Middle: 160+ countries (animated flag marquee) */}
          <div className="w-full">
            <FlagMarquee />
          </div>

          {/* Right: Incorporated outside of the U.S.? (map placeholder) */}
          <div className="rounded-3xl bg-[hsl(156,82%,13%)] p-6 text-white shadow-[0_12px_36px_rgba(0,0,0,0.06)] sm:p-8">
            <h3 className="font-satoshi text-white font-semibold tracking-tight leading-[1.2] text-[20px] sm:text-[22px]">Incorporated outside of the U.S.?</h3>

            {/* World map image */}
            <div
              className="mt-4 aspect-[16/10] w-full rounded-2xl overflow-hidden"
              title="World map coverage"
            >
              <Image 
                src="/landing-page-images/We get you to every country part/world-map-coverage.svg" 
                alt="Global map showing Sigma coverage" 
                width={500}
                height={312}
                className="h-full w-full object-contain" 
              />
            </div>

            <p className="mt-4 font-satoshi text-[14px] sm:text-[15px] leading-relaxed text-white/75">
              International companies can also use Sigma. Book a demo to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
