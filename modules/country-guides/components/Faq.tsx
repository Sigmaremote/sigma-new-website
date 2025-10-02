'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqQA } from '../types';

interface FaqProps {
  faqs: FaqQA[];
}

export default function Faq({ faqs }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl border border-black/5 p-6">
      <h2 className="text-xl font-semibold text-black mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-black/5 rounded-lg">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-black/5 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-black">{faq.q}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-black/60" />
              ) : (
                <ChevronDown className="h-5 w-5 text-black/60" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-black/70 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
