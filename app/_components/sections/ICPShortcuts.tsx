import Link from 'next/link';
import { routes } from '@/lib/routes';

export default function ICPShortcuts() {
  const shortcuts = [
    { label: 'Tech Startups', href: routes.countryGuides },
    { label: 'NGOs', href: routes.countryGuides },
    { label: 'Marketplaces', href: routes.countryGuides },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-8">
            Built for your industry
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {shortcuts.map((shortcut) => (
              <Link
                key={shortcut.label}
                href={shortcut.href}
                className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
              >
                {shortcut.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
