"use client";

import Link from "next/link";

export default function GlobalReachSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Text & CTA */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E2C1E]">
              We get you to every country
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Sigma enables businesses to hire and pay workers in over 160 countries with ease. Our platform handles compliance, payments, and benefits globally.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-block bg-[#CFF86A] text-[#0E2C1E] font-semibold rounded-full px-6 py-3 hover:bg-[#d4fc7a] transition-colors"
              >
                Get a Free Payroll Setup
              </Link>
            </div>
          </div>

          {/* Middle Column - Lime Card */}
          <div className="bg-[#CFF86A] rounded-3xl p-6 md:p-8 border border-black/10 flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0E2C1E] text-center mb-6">
              160+ countries
            </h3>
            <div
              className="w-full h-64 md:h-72 bg-white rounded-2xl shadow-sm flex items-center justify-center text-neutral-500 mb-4"
              aria-label="flags grid image placeholder"
            >
              Flags grid placeholder
            </div>
            <p className="text-center text-[#0E2C1E] font-medium">
              To hire from.
            </p>
          </div>

          {/* Right Column - Dark Green Card */}
          <div className="bg-[#0E2C1E] text-white rounded-3xl p-6 md:p-8 flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Incorporated outside of the U.S.?
            </h3>
            <div
              className="w-full h-64 md:h-72 bg-white/10 rounded-2xl flex items-center justify-center text-white/70 mb-4"
              aria-label="world map image placeholder"
            >
              World map placeholder
            </div>
            <p className="text-center text-white/90 leading-relaxed">
              International companies can also use Sigma. Book a demo to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

