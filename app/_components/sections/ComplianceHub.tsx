import Link from 'next/link';

export default function ComplianceHub() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Compliance & Reporting Hub
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto mb-8">
            Stay compliant across all jurisdictions with automated reporting, tax filings, 
            and employment law updates. Our platform handles the complexity so you don't have to.
          </p>
          <Link
            href="https://cal.com/globalpayroll/demo-25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-8 py-4 text-base font-semibold text-black hover:brightness-95 transition-colors"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
