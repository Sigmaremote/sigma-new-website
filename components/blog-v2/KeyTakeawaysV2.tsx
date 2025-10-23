export function KeyTakeawaysV2({ items, variant = "numbered" }:{ items?: string[]; variant?: "bullets" | "numbered" }) {
  if (!items?.length) return null;
  return (
    <section className="w-full flex-1">
      <div className="rounded-xl border p-5 md:p-6 shadow-sm"
           style={{ background:'#FBF6EE', borderColor:'#EFE5D3' }}>
        <div className="text-[12px] uppercase tracking-wide font-medium mb-2.5" style={{color:'#7A7369'}}>Key takeaways</div>
        <ul className="space-y-2.5" style={{color:'#1F1F1D'}}>
          {items.map((t,i)=>(
            <li key={i} className="flex gap-2.5">
              {variant === "numbered" ? (
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-[12px] font-semibold" style={{background:'#1F1F1D'}}>
                  {i + 1}
                </span>
              ) : (
                <span className="mt-[6px] h-[6px] w-[6px] rounded-full flex-shrink-0" style={{background:'#C7B79B'}} />
              )}
              <span className="text-[16px] leading-[1.7]">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

