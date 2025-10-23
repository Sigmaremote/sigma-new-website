import * as React from 'react';

export function CaseStudyCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-5 rounded-xl border-l-4 bg-gray-50 border-gray-300">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-700 mb-1">Case Study</div>
          <div className="text-[#3B3A38] text-[16px] leading-[1.6]">{children}</div>
        </div>
      </div>
    </div>
  );
}
