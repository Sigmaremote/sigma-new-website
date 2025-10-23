import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export function GlobalPayrollSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0E2C1E] text-white rounded-[20px] grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-10 py-12">
        {/* LEFT: Text & features - 40% width */}
        <div className="md:col-span-1 flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Global Payroll
          </h2>
          <p className="mt-3 text-base text-white/80">
            Do you need to manage global payments? Book a demo and we'll help you.
          </p>

          <h3 className="mt-6 mb-2 text-xl font-semibold text-white">
            Speak to sales
          </h3>
          <hr className="border-white/20 mb-4" />

          <ul className="space-y-2 text-white/90">
            {[
              'USD Savings Wallet',
              'Multi-country payroll',
              'Unlimited access to all features',
              'Multi-currency and Crypto Payments',
              'Payroll Reports and analytics',
              'Fully embeddable into your platform',
              'Expense Management',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-[#CFF86A] mt-1 flex-shrink-0" />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center gap-2 mt-6 bg-[hsl(64,83%,65%)] text-black font-semibold px-6 py-3 rounded-full hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] transition-all"
          >
            Book a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* RIGHT: Two image cards - 60% width total */}
        <div className="md:col-span-2 flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* FIRST IMAGE: Team box - 45% of right area (narrower) */}
          <div className="w-full md:flex-1 md:max-w-[45%] rounded-[20px] bg-white text-neutral-900 p-2 flex flex-col justify-center items-center">
            <Image
              src="/Pricing images/iamge2.1.avif"
              alt="Global Payroll Feature 1"
              width={300}
              height={200}
              className="object-contain w-full h-auto"
            />
          </div>

          {/* SECOND IMAGE: Add Payroll box - 55% of right area (wider) */}
          <div className="w-full md:flex-1 md:max-w-[45%] rounded-[20px] bg-white text-neutral-900 p-2 flex flex-col justify-center items-center">
            <Image
              src="/Pricing images/image2.2.avif"
              alt="Global Payroll Feature 2"
              width={240}
              height={192}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
