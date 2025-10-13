'use client';

import { motion } from 'framer-motion';
import React from 'react';

/**
 * WhatWeDoSection
 * - Drugi deo About stranice (dva obojena bloka, kao na slici)
 * - Identične boje, oblici i tipografija
 * - Postavi ispod WhySigmaExistsSection na /about strani
 */

export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-[var(--about-yellow)] p-8 md:p-10"
          >
            <h3 className="font-satoshi text-[32px] md:text-[36px] font-semibold leading-[1.15] tracking-tight text-[var(--about-text)] mb-4">
              What We Do
            </h3>
            <p className="font-satoshi text-[16px] leading-relaxed text-[var(--about-body)]">
              We make payroll simple and accessible for businesses and
              contractors everywhere. Our solutions empower companies to connect
              with exceptional talent while ensuring every worker has the tools
              they need to thrive, no matter where they are in the world.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-[var(--about-peach)] p-8 md:p-10"
          >
            <h3 className="font-satoshi text-[32px] md:text-[36px] font-semibold leading-[1.15] tracking-tight text-[var(--about-text)] mb-4">
              Our Purpose
            </h3>
            <p className="font-satoshi text-[16px] leading-relaxed text-[var(--about-body)]">
              Our mission is to provide every company with the tools they need
              to support and retain their staff. We are leveling the playing
              field, empowering everyone to succeed, and reshaping how the world
              views global payroll.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
