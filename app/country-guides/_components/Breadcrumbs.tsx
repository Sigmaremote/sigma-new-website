import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  countryName: string;
}

export default function Breadcrumbs({ countryName }: BreadcrumbsProps) {
  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-ink-400">
        <li>
          <Link 
            href="/" 
            className="hover:text-ink-600 transition-colors"
          >
            Home
          </Link>
        </li>
        <ChevronRight className="h-4 w-4" />
        <li>
          <Link 
            href="/country-guides" 
            className="hover:text-ink-600 transition-colors"
          >
            Country Guides
          </Link>
        </li>
        <ChevronRight className="h-4 w-4" />
        <li className="text-ink-900 font-medium" aria-current="page">
          {countryName}
        </li>
      </ol>
    </nav>
  );
}
