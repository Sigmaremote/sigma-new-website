// components/shared/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Shield, Building2, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#EAFDB3] text-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link 
              href="https://sigmaremote.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/logo/sigma-logo-1.avif"
                alt="Sigma"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-black/80">
              The payroll platform for businesses powered by global emerging talent.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="https://twitter.com/"
                aria-label="Twitter / X"
                className="rounded-full bg-[#0C2E1C] p-2 text-white hover:opacity-90"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/sigmaremote/"
                aria-label="LinkedIn"
                className="rounded-full bg-[#0C2E1C] p-2 text-white hover:opacity-90"
              >
                <Linkedin size={18} />
              </Link>
            </div>

            <p className="mt-6 text-sm text-black/70">
              © 2025 SigmaRemote. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Remote Teams */}
            <div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <h4 className="font-semibold">Why Remote Teams choose us</h4>
              </div>
              <ul className="mt-3 space-y-2 text-[15px]">
                <li><Link href="/compare/sigma-vs-deel" className="hover:underline">Sigma vs Deel</Link></li>
                <li><Link href="/compare/sigma-vs-remote" className="hover:underline">Sigma vs Remote</Link></li>
                <li><Link href="/compare/sigma-vs-rippling" className="hover:underline">Sigma vs Rippling</Link></li>
                <li><Link href="/compare/sigma-vs-gusto" className="hover:underline">Sigma vs Gusto</Link></li>
                <li><Link href="/compare/sigma-vs-ontop" className="hover:underline">Sigma vs Ontop</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <h4 className="font-semibold">Company</h4>
              </div>
              <ul className="mt-3 space-y-2 text-[15px]">
                <li><Link href="/about" className="hover:underline">About us</Link></li>
                <li><Link href="/contact" className="hover:underline">Get in touch</Link></li>
                <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
                <li><Link href="/book-a-demo" className="hover:underline">Book a Demo</Link></li>
              </ul>
            </div>

            {/* Trust */}
            <div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <h4 className="font-semibold">Trust</h4>
              </div>
              <ul className="mt-3 space-y-2 text-[15px]">
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <h4 className="font-semibold">Resources</h4>
              </div>
              <ul className="mt-3 space-y-2 text-[15px]">
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li><Link href="/glossary" className="hover:underline">Glossary</Link></li>
                <li><Link href="/press" className="hover:underline">Press</Link></li>
              </ul>
            </div>

            {/* Gig Platforms (second row, full width on small screens) */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <h4 className="font-semibold">Why Gig Platforms choose us</h4>
              </div>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-[15px] sm:grid-cols-2">
                <li><Link href="/compare/sigma-vs-payoneer" className="hover:underline">Sigma vs Payoneer</Link></li>
                <li><Link href="/compare/sigma-vs-veem" className="hover:underline">Sigma vs Veem</Link></li>
                <li><Link href="/compare/sigma-vs-paypal" className="hover:underline">Sigma vs PayPal</Link></li>
                <li><Link href="/compare/sigma-vs-wise" className="hover:underline">Sigma vs Wise</Link></li>
                <li><Link href="/compare/sigma-vs-hyperwallet" className="hover:underline">Sigma vs Hyperwallet</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}