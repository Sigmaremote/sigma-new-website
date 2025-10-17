export function KeyTakeaways({ items }:{ items:string[]|undefined }) {
  if (!items?.length) return null;
  return (
    <section className="my-8">
      <div className="rounded-2xl border px-5 py-4"
           style={{ background:'#F6F0E3', borderColor:'#E6DBC8' }}>
        <div className="text-sm font-semibold mb-2 text-[#5C5A57]">Key takeaways</div>
        <ul className="space-y-2 text-[#1A1A1A]">
          {items.map((t,i)=>(
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#C7B79B]" />
              <span className="text-[16.5px] leading-7">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
