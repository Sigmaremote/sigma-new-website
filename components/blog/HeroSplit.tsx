import Image from "next/image";

export function HeroSplit({title, dek, meta, image}:{title:string;dek?:string;meta?:React.ReactNode;image:{src:string;alt:string;width:number;height:number}}){
  return (
    <section className="w-full">
      <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-[720px]">
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Article</div>
            <h1 className="text-4xl md:text-5xl leading-tight mb-3 text-gray-900">{title}</h1>
            {dek && <p className="text-[17px] leading-7 text-gray-600 mb-4">{dek}</p>}
            {meta}
          </div>
          <div className="order-first md:order-last">
            <div className="rounded-2xl overflow-hidden border border-gray-200 md:max-w-[520px]">
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority className="w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
