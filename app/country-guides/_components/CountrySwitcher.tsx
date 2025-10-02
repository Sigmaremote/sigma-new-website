import Link from 'next/link';
import { ChevronLeft, Globe } from 'lucide-react';

export default function CountrySwitcher() {
  return (
    <div className="mb-8">
      <Link
        href="/country-guides"
        className="inline-flex items-center gap-2 text-ink-600 hover:text-ink-900 transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="font-medium">All Countries</span>
        <ChevronLeft className="h-4 w-4" />
      </Link>
    </div>
  );
}
