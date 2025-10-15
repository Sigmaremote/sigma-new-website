import { PricingFAQ } from "@/app/pricing/_components/PricingFAQ";

const faqs = [
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
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0E2C1E] mb-8">
          Common Questions
        </h2>
        
        <PricingFAQ items={faqs} />
      </div>
    </section>
  );
}

