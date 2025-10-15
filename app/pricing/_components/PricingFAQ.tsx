"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface PricingFAQProps {
  items: FaqItem[];
}

export function PricingFAQ({ items }: PricingFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <div
          key={index}
          className={`bg-[#F5F7F4] rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === index ? "shadow-lg" : ""
          }`}
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-[#eef1ec] transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-[#0E2C1E] text-lg flex-1">
              {faq.question}
            </span>
            <div
              className={`flex-shrink-0 w-7 h-7 rounded-full bg-[#0E2C1E] flex items-center justify-center transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              {openIndex === index ? (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </div>
          </button>
          
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-5 text-[#0E2C1E] leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
