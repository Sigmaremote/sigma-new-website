import * as React from 'react';

export function ExampleCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-5 rounded-xl border-l-4 bg-gray-50 border-gray-300">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-700 mb-1">Example</div>
          <div className="text-[#3B3A38] text-[16px] leading-[1.6]">{children}</div>
        </div>
      </div>
    </div>
  );
}
