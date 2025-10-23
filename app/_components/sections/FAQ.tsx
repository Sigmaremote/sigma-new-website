'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How fast is onboarding?',
      a: 'Most teams are onboarded within 24 hours. We handle all the compliance paperwork and setup so you can start hiring immediately.',
    },
    {
      q: 'Do you support USD wallets?',
      a: 'Yes! Our USD wallets are FDIC-insured through Wells Fargo and allow you to keep your money in USD while paying globally.',
    },
    {
      q: 'Do you support stablecoins?',
      a: 'Absolutely. You can pay with USDC and USDT for instant, low-cost transfers to 160+ countries.',
    },
    {
      q: 'How do you handle compliance?',
      a: 'We provide EOR, AOR, and CoR services as needed. Our platform automatically handles tax filings, employment law compliance, and reporting.',
    },
    {
      q: 'What makes Sigma cheaper?',
      a: 'Transparent 2% platform fee with no hidden FX spreads, faster onboarding, and no monthly minimums. Most competitors charge 3-5% with hidden fees.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-black/70">
            Everything you need to know about global payroll with Sigma.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-black/10 rounded-2xl">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-black/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-black">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-black/60 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-black/70">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
