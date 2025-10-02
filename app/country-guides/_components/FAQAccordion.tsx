'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqQA } from '../../../modules/country-guides/types';

interface FAQAccordionProps {
  faqs: FaqQA[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mb-16">
      <div className="bg-white rounded-2xl border border-black/5 p-8">
        <h2 className="text-2xl font-semibold text-ink-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-black/5 rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-brand-lime-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="font-medium text-ink-900 pr-4">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-ink-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-ink-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div 
                  id={`faq-${index}`}
                  className="px-6 pb-4"
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                >
                  <p className="text-ink-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
