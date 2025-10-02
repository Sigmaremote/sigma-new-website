import Link from 'next/link';

export default function CTAHireBanner() {
  return (
    <section className="mb-16">
      <div className="bg-deep-green rounded-2xl p-8 lg:p-12 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
          Ready to hire globally?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join hundreds of companies using Sigma to hire, pay, and manage remote teams 
          with full compliance and zero hassle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-yellow text-ink-900 font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-ink-900"
          >
            Get Started Free
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink-900"
          >
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
