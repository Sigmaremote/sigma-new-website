'use client';

import Link from 'next/link';
import { BookOpen, FileText, Newspaper, MapPinned, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

type Card = {
  title: string;
  description: string;
  href: string;
  color: string; // tailwind bg color
  icon: React.ReactNode;
};

const CARDS: Card[] = [
  {
    title: 'Blog',
    description:
      'Expert guides, comparisons, and case studies for global payroll and USD wallets.',
    href: '/blog',
    color: 'bg-[#FFE95C]',
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: 'Glossary',
    description:
      'Clear definitions for EOR, CoR/AOR, FX fees, stablecoins, USD wallets, and more.',
    href: '/glossary',
    color: 'bg-[#CFF86A]',
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: 'Press',
    description:
      'Product launches, corridor expansions, and compliance announcements.',
    href: '/press',
    color: 'bg-[#FFB480]',
    icon: <Newspaper className="h-6 w-6" />,
  },
  {
    title: 'Country Guides',
    description:
      'Hiring, payments, and compliance insights by country-taxes, FX, onboarding.',
    href: '/country-guides',
    color: 'bg-[#E5F0E6]',
    icon: <MapPinned className="h-6 w-6" />,
  },
  {
    title: 'Network Coverage',
    description:
      'Where Sigma works today: payout rails, wallets, and local integrations.',
    href: '/resources/network-coverage',
    color: 'bg-[#EDEDED]',
    icon: <Globe2 className="h-6 w-6" />,
  },
];

export default function ResourcesPage() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Resources
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-600">
            Everything you need to research Sigma: blogs, glossary, press,
            country guides, and our live coverage map.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className={`rounded-3xl ${card.color} p-7 md:p-8 flex flex-col justify-between`}
            >
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-neutral-900">
                  {card.icon}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-neutral-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href={card.href}
                  className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
                >
                  Explore {card.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
