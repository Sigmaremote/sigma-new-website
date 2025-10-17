export function CalloutLiteV2({label,children}:{label:string;children:React.ReactNode}) {
  return (
    <div className="my-6 rounded-xl border pl-4 pr-5 py-4 relative bg-gray-50 border-gray-300">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600" />
      <div className="text-[12px] uppercase tracking-wide mb-2 text-gray-700 font-semibold">{label}</div>
      <div className="text-[16px] leading-[1.6] text-[#3B3A38] opacity-90">{children}</div>
    </div>
  );
}

