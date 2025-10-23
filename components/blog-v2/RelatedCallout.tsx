export function RelatedCallout({children}:{children:React.ReactNode}) {
  return (
    <div className="my-6 rounded-xl border pl-4 pr-5 py-6 relative border-gray-300"
         style={{background:'linear-gradient(180deg,#0E2C1E,#0F3A2A)'}}>
      <div className="text-[12px] uppercase tracking-wide mb-2 text-white/90 font-semibold">Related</div>
      <div className="text-[16px] leading-[1.6] text-white [&_a]:text-white [&_a]:underline [&_a:hover]:no-underline" dangerouslySetInnerHTML={{__html: children as string}} />
    </div>
  );
}
