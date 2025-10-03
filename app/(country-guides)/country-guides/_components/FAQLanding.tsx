'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Which countries have the lowest employer on-costs?",
    answer: "Mexico typically has the lowest employer costs at ~25-30%, followed by Colombia at ~30-35%. These costs include social security, benefits, and mandatory contributions."
  },
  {
    question: "Which countries require a 13th salary?",
    answer: "Most Latin American countries including Mexico, Colombia, and Argentina require a 13th salary (aguinaldo). This is typically paid in December and represents one month's additional salary."
  },
  {
    question: "Where is onboarding fastest?",
    answer: "Mexico offers the fastest onboarding with EOR services, typically taking 1-3 days. Colombia and Argentina usually take 3-5 days for complete setup and first payroll."
  },
  {
    question: "What's the difference between EOR and contractor hiring?",
    answer: "EOR (Employer of Record) provides full employment with benefits and compliance, while contractors offer flexibility but limited protection. EOR is recommended for long-term hires."
  }
];

export default function FAQLanding() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-black mb-8 text-center">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-black/10 rounded-2xl overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-black/5 transition-colors duration-200"
            >
              <span className="font-medium text-black">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-black/60 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-black/70 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
