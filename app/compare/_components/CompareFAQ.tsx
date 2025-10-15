"use client";
import { PricingFAQ } from "@/app/pricing/_components/PricingFAQ";

type FAQItem = { question: string; answer: string };

// Keep your existing 6 items exactly as-is here...
const compareFaqItems: FAQItem[] = [
  { question: "What sets Sigma apart from other payroll platforms?", answer: "Unlike existing payroll services, Sigma is designed with the worker in mind. We provide unique financial tools, such as USD savings wallets and flexible payment options, ensuring that contractors not only get paid but also have the resources to thrive, empowering you to attract and retain the talent that drives your company's success." },
  { question: "How does Sigma ensure that workers receive local-like benefits?", answer: "Sigma partners with global financial institutions to offer contractors benefits that mirror those of U.S. employees, including access to banking services, retirement plans, and health insurance. Our goal is to make every contractor feel valued and supported, no matter where they are located." },
  { question: "Is it easy to switch to Sigma?", answer: "Yes, our team will assist you in migrating your data and setting up your account quickly!" },
  {
    question: "Can I customize the categories for my expenses and income?",
    answer:
      "We take the security and privacy of your financial data very seriously. Our platform employs industry-standard encryption protocols to safeguard your information during transmission and storage.",
  },
  {
    question: "Are there any hidden fees in your pricing plans?",
    answer:
      "We take the security and privacy of your financial data very seriously. Our platform employs industry-standard encryption protocols to safeguard your information during transmission and storage.",
  },
  {
    question: "How secure is my financial data within the platform?",
    answer:
      "We take the security and privacy of your financial data very seriously. Our platform employs industry-standard encryption protocols to safeguard your information during transmission and storage.",
  },
];

function splitInTwo<T>(items: T[]) {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

export default function CompareFAQ() {
  const [left, right] = splitInTwo(compareFaqItems);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Align with left column of cards */}
        <h2 className="text-left text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          See Common Question
          <br />and Answer
        </h2>

        {/* Two columns on md+, identical card sizing as Pricing */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-10">
          {/* Each column is width-constrained like Pricing so the cards are not too long */}
          <div className="mx-auto w-full max-w-[560px]">
            {/* If PricingFAQ accepts a className/variant prop, pass it here to force the same padding/radius.
               Otherwise, PricingFAQ cards already include the correct classes and constraining the column width
               will produce identical visual proportions. */}
            <PricingFAQ items={left} />
          </div>
          <div className="mx-auto w-full max-w-[560px]">
            <PricingFAQ items={right} />
          </div>
        </div>
      </div>
    </section>
  );
}
