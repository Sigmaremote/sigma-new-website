'use client';

import { PhoneCall, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

/**
 * ContactUsSection
 * - Left side: Two cards (dark green and lime green)
 * - Right side: Cal.com booking calendar iframe
 */

export default function ContactUsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Contact Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
            {/* Card 1 - Speak to Sales */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-deep-green text-white p-8 md:p-10 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10">
                  <PhoneCall className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Speak to someone in sales
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Let&apos;s jump on a video call, and we&apos;ll show you how
                  simple it is to hire and pay global talent with Sigma.
                </p>
              </div>

              <Link
                href="https://cal.com/globalpayroll/demo-25"
                className="mt-6 w-fit rounded-full bg-white text-neutral-900 hover:bg-neutral-100 px-6 py-3 font-semibold transition-colors"
              >
                Book a Appointment
              </Link>
            </motion.div>

            {/* Card 2 - Contact our team */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-3xl bg-lime text-neutral-900 p-8 md:p-10 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-neutral-900/10">
                  <Send className="h-5 w-5 text-neutral-900" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  Contact our team
                </h3>
                <p className="text-neutral-800 text-sm md:text-base leading-relaxed">
                  Email us, and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <Link
                href="mailto:hello@sigmaremote.com"
                className="mt-6 w-fit rounded-full bg-black text-white hover:bg-black/90 px-6 py-3 font-semibold transition-colors"
              >
                Send a Mail
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE – Cal.com Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-3xl overflow-hidden bg-white border border-neutral-200 h-[580px] md:h-[600px]"
          >
            <iframe
              src="https://cal.com/globalpayroll/demo-25?embed=true"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a Demo"
              style={{ border: 0 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
