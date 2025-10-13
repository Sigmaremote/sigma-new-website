"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What sets Sigma apart from other payroll platforms?",
    answer:
      "Unlike existing payroll services, Sigma is designed with the worker in mind. We provide unique financial tools, such as USD savings wallets and flexible payment options, ensuring that contractors not only get paid but also have the resources to thrive, empowering you to attract and retain the talent that drives your company's success.",
  },
  {
    question: "How does Sigma ensure that workers receive local-like benefits?",
    answer:
      "Sigma partners with global financial institutions to offer contractors benefits that mirror those of U.S. employees, including access to banking services, retirement plans, and health insurance. Our goal is to make every contractor feel valued and supported, no matter where they are located.",
  },
  {
    question: "Is it easy to switch to Sigma?",
    answer:
      "Yes, our team will assist you in migrating your data and setting up your account quickly!",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0E2C1E] mb-8">
          Common Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
                <span className="font-bold text-[#0E2C1E] text-lg flex-1">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#0E2C1E] flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {openIndex === index ? (
                    <svg
                      className="w-4 h-4 text-white"
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
                      className="w-4 h-4 text-white"
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
      </div>
    </section>
  );
}

