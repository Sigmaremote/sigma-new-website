'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="text-center space-y-6 max-w-5xl mx-auto">
      {/* Main Headline */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
        Your Global Hiring Guide
      </h1>
      
      {/* Subcopy */}
      <p className="text-xl text-black/70 max-w-3xl mx-auto">
        Explore hiring laws, employer costs, and compliance requirements for countries around the world. 
        Make informed decisions about your global team expansion.
      </p>
      
      {/* Mini-stats bar */}
      <div className="inline-flex items-center gap-3 rounded-full bg-black/5 px-4 py-2 text-sm text-black/70">
        <span>3+ Countries</span>
        <span>•</span>
        <span>Updated 2025</span>
        <span>•</span>
        <span>Payroll, compliance & hiring laws</span>
      </div>
      
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <Link 
          href="#countries" 
          className="bg-[#D1FF94] text-black px-8 py-3 rounded-full font-medium hover:bg-[#C8FF66] transition-colors duration-200"
        >
          Explore All Countries
        </Link>
        <a 
          href="https://www.sigmaremote.com/contact" 
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black/20 text-black px-8 py-3 rounded-full font-medium hover:bg-black/5 transition-colors duration-200"
        >
          Get a Free Payroll Setup
        </a>
      </div>
    </div>
  );
}
