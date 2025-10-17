import * as React from 'react';

export function TipCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-5 rounded-xl border-l-4 bg-gray-50 border-gray-300">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-700 mb-1">Pro Tip</div>
          <div className="text-[#3B3A38] text-[16px] leading-[1.6]">{children}</div>
        </div>
      </div>
    </div>
  );
}
