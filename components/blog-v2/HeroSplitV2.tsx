import Image from "next/image";

export function HeroSplitV2({title, dek, lastUpdate, image}:{title:string;dek?:string;lastUpdate?:string;image:{src:string;alt:string;width:number;height:number}}){
  return (
    <section className="w-full mb-28 mt-16 md:mt-20">
      <div className="rounded-2xl p-8 md:p-12 relative overflow-visible"
           style={{background:'linear-gradient(180deg,#0E2C1E,#0F3A2A)'}}>
        {/* Floating image - overflows hero box more */}
        <div className="hidden md:block float-right max-w-[520px] ml-8 -mb-24">
          <div className="rounded-xl overflow-hidden border shadow-xl" style={{borderColor:'var(--v2-border)'}}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority className="w-full h-auto" />
          </div>
        </div>
        
        {/* Text content */}
        <div className="max-w-[580px] text-white pb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-white/70 bg-transparent mb-3">
            <div className="w-1 h-1 rounded-full bg-white/70"></div>
            <span>Article</span>
            <span>•</span>
            <span>13 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl leading-tight mb-4">{title}</h1>
          {dek && <p className="text-[17px] leading-7 opacity-80 mb-4">{dek}</p>}
          
          {/* Article tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full border border-white/20">
              GLOBAL PAYROLL
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full border border-white/20">
              HIRING
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full border border-white/20">
              COMPLIANCE
            </span>
          </div>
          
          <div className="border-t border-white/20 pt-4 max-w-[400px]">
            <div className="flex items-center gap-4 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <span className="uppercase tracking-wide">AUTHOR</span>
                <span>Sigma Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="uppercase tracking-wide">LAST UPDATE</span>
                <span>{lastUpdate}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile image (shown below text on mobile) */}
        <div className="md:hidden mt-6">
          <div className="rounded-xl overflow-hidden border shadow-lg" style={{borderColor:'var(--v2-border)'}}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority className="w-full h-auto" />
          </div>
        </div>
        
        {/* Clear float */}
        <div className="clear-both"></div>
      </div>
    </section>
  );
}

