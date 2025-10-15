"use client";
import Image from "next/image";

const LOGOS = [
  { src: "/Comparation Page images/Companies using us/equinix.svg", alt: "Equinix" },
  { src: "/Comparation Page images/Companies using us/lumessa.svg", alt: "Lumessa" },
  { src: "/Comparation Page images/Companies using us/zenithia.svg", alt: "Zenithia" },
  { src: "/Comparation Page images/Companies using us/vireon.svg", alt: "Vireon" },
  { src: "/Comparation Page images/Companies using us/novadex.svg", alt: "Novadex" },
];

export default function CompaniesUsingUs() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex justify-center items-center gap-5 md:gap-6">
          {LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center rounded-2xl bg-slate-100/70 px-7 md:px-8 py-5 md:py-6 ring-1 ring-slate-100 hover:ring-slate-200 hover:shadow-sm transition-all duration-200"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={153}
                height={42}
                className="h-8 md:h-9 w-auto object-contain"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
