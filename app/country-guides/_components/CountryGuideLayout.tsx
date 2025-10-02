'use client';

import { ReactNode } from 'react';
import StickyTOC from './StickyTOC';

interface CountryGuideLayoutProps {
  children: ReactNode;
  tocItems: Array<{
    id: string;
    title: string;
  }>;
}

export default function CountryGuideLayout({ children, tocItems }: CountryGuideLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="max-w-4xl">
              {children}
            </div>
          </div>
          
          {/* Sticky right rail */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24">
              <StickyTOC items={tocItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
