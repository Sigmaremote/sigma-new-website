export function CalloutLite({label,children}:{label:string;children:React.ReactNode}) {
  return (
    <div className="my-5 rounded-xl border border-gray-200 pl-4 pr-5 py-3 relative"
         style={{background:'rgba(255,255,255,0.02)'}}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{background:'#D6FF57'}} />
      <div className="text-sm text-gray-500 mb-1">{label}</div>
      <div className="text-[17px] leading-7 text-gray-800">{children}</div>
    </div>
  );
}
