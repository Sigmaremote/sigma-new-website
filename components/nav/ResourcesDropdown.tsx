'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

export function ResourcesDropdown() {
  const [open, setOpen] = React.useState(false);

  const items = [
    { label: 'Blog', href: '/blog' },
    { label: 'Glossary', href: '/glossary' },
    { label: 'Press', href: '/press' },
    { label: 'Country Guides', href: '/country-guides' },
    { label: 'Network Coverage', href: '/network-coverage' },
    { label: 'All Resources', href: '/resources' },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="inline-flex items-center gap-1 text-sm md:text-base text-neutral-800 hover:text-neutral-900"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Resources <ChevronDown className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute left-0 mt-3 w-56 rounded-2xl border border-black/10 bg-white shadow-xl">
          <ul className="py-2">
            {items.map((it) => (
              <li key={it.label}>
                <Link
                  href={it.href}
                  className="block px-4 py-2.5 text-sm text-neutral-800 hover:bg-neutral-100 rounded-xl"
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
