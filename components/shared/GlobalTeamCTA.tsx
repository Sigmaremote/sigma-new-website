'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function GlobalTeamCTA() {
  const pathname = usePathname();
  
  // Pages that already have their own CTA sections
  const pagesWithCTA = ['/', '/about', '/contact'];
  
  // Don't show the global CTA on pages that already have their own
  if (pagesWithCTA.includes(pathname)) {
    return null;
  }

  return (
    <section aria-label="Call to action" className="relative isolate py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* dark green card */}
        <div className="rounded-3xl bg-[#0C2E1C] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(520px,1fr)_minmax(480px,560px)] lg:gap-12">
            {/* Left copy */}
            <div className="text-white">
              <div className="text-sm/5 text-white/80">✨  Make Your Business Thrive</div>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Let's build your Global Team with Sigma
              </h2>
              <p className="mt-4 max-w-prose text-white/80">
                Discover how Sigma can help you hire, pay, and retain top-skilled workers globally while saving you from compliance headaches and IRS forms. Book a demo today.
              </p>

              <div className="mt-8">
                <Link
                  href="https://cal.com/globalpayroll/demo-25"
                  target="_blank"
                  aria-label="Get a Free Payroll Setup"
                  className="inline-flex items-center justify-center rounded-full bg-[#E8F843] px-5 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/10 hover:bg-[#CFF86A]"
                >
                  Get a Free Payroll Setup <span aria-hidden className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Right: UI showcase images */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-start">
              {/* Image 1 */}
              <div className="rounded-3xl overflow-hidden ring-1 ring-black/10">
                <Image
                  src="/landing-page-images/Repeatable CTA above the footer part/image1.1.avif"
                  alt="Sigma platform interface"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="rounded-3xl overflow-hidden ring-1 ring-black/10">
                <Image
                  src="/landing-page-images/Repeatable CTA above the footer part/image1.2.avif"
                  alt="Sigma payroll interface"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
