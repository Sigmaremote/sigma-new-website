'use client';

import { Flag } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

/**
 * WhySigmaExistsSection
 * - Prvi deo About sekcije (identičan layoutu sa slike)
 * - Svi "image" elementi su prazni slotovi (div) sa zaobljenim ivicama - ubacićeš slike kasnije
 * - Boje i tipografija prilagođene da izgledaju kao referenca
 *
 * Kako dodati slike kasnije:
 *  - Zameni <div className="image-slot ..."/> sa <Image src="/about/kevin.jpg" .../> ili background-image u Tailwind klasi
 */

export default function WhySigmaExistsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Why Sigma exists
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-600">
            We&apos;ve reimagined global payroll from the ground up. By
            understanding the needs of both businesses and their team
            members, we&apos;ve created a solution that truly serves everyone.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* LEFT COL */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Left Top - Lime Text Card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-5 md:p-6 bg-[#CFF86A] text-neutral-900"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900/10 shrink-0">
                  <Flag className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    Born in San Francisco, <br /> Built for the World
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-800">
                Inspired by San Francisco's culture of bold ideas, we built Sigma
                to connect companies with exceptional talent, because we've seen
                how the right people can turn even the wildest ideas into reality.
              </p>
            </motion.div>

            {/* Left Bottom - Kevin Image */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-3xl overflow-hidden relative h-64 md:h-80"
            >
              <Image
                src="/About Us/sigma-kevin.avif"
                alt="Kevin - Sigma Co-founder"
                fill
                className="object-cover object-[50%_20%]"
              />
            </motion.div>
          </div>

          {/* MIDDLE COL */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Middle Top - Sigma Dog Image */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-3xl overflow-hidden relative h-64 md:h-72"
            >
              <Image
                src="/About Us/sigma-dog.avif"
                alt="Sigma team"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Middle Bottom - Street Signs Image */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl overflow-hidden relative h-64 md:h-72"
            >
              <Image
                src="/About Us/sigma-street-signs.avif"
                alt="San Francisco street signs"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* RIGHT COL */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Right Top - Guillie Image */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-3xl overflow-hidden relative h-72 md:h-[22rem]"
            >
              <Image
                src="/About Us/sigma-guillie.avif"
                alt="Guillermo - Sigma Co-founder"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right Bottom - Dark Green Text Card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-5 md:p-6 bg-[#0E2C1E] text-white"
            >
              <h3 className="text-lg font-semibold">The Making of Sigma</h3>
              <p className="mt-3 text-sm leading-6 text-white/90">
                After years of working with international teams,
                co-founders Kevin and Guillermo noticed that existing payroll
                solutions left workers behind. They saw the opportunity for a fair
                global payroll platform that provides local-like benefits, helping
                every global worker feel equal to their U.S. peers with access to
                banking and retirement options.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
