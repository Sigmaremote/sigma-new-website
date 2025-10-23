import Link from 'next/link';
import { routes } from '@/lib/routes';

export default function PricingTeaser() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Transparent pricing with no hidden fees
          </h2>
          <p className="text-black/70 mb-8 max-w-2xl mx-auto">
            Start with our simple 2% platform fee and scale as you grow. No setup costs, no monthly minimums.
          </p>
          <Link
            href={routes.pricing}
            className="inline-flex items-center justify-center rounded-full border border-black px-8 py-4 text-base font-semibold text-black hover:bg-black hover:text-white transition-colors"
          >
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
