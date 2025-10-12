import Link from 'next/link';
import { routes } from '@/lib/routes';

export default function LatamStrip() {
  return (
    <section className="bg-[#EAFDB3] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Compare LATAM hiring costs, 13th salary rules, and payout speed
          </h2>
          <p className="text-black/70 mb-6">
            Get detailed insights into hiring across Latin America with our comprehensive country guides.
          </p>
          <Link
            href={routes.countryGuides}
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-base font-semibold text-white hover:bg-black/90 transition-colors"
          >
            Explore LATAM Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
