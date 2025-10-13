import {
  Linkedin,
  Shield,
  Building2,
  BookOpen,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/lib/routes';

const data = {
  linkedinLink: 'https://www.linkedin.com/company/sigma-remote/',
  twitterLink: 'https://x.com/sigma_remote',
  contact: {
    email: 'hello@sigmaremote.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA, USA',
  },
  company: {
    name: 'SigmaRemote',
    description:
      'The payroll platform for businesses powered by global emerging talent.',
    logo: '/logo/sigma-logo-1.avif',
  },
};

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: XIcon, label: 'X (Twitter)', href: data.twitterLink },
];

const aboutLinks = [
  { text: 'About us', href: routes.about },
  { text: 'Get in touch', href: routes.contact },
  { text: 'Pricing', href: routes.pricing },
  { text: 'Book a Demo', href: 'https://cal.com/globalpayroll/demo-25' },
];

const serviceLinks = [
  { text: 'Sigma vs Deel', href: routes.compare('sigma-vs-deel') },
  { text: 'Sigma vs Remote', href: routes.compare('sigma-vs-remote') },
  { text: 'Sigma vs Rippling', href: routes.compare('sigma-vs-rippling') },
  { text: 'Sigma vs Gusto', href: routes.compare('sigma-vs-gusto') },
  { text: 'Sigma vs Ontop', href: routes.compare('sigma-vs-ontop') },
];

const gigPlatformLinks = [
  { text: 'Sigma vs Payoneer', href: routes.compare('sigma-vs-payoneer') },
  { text: 'Sigma vs Veem', href: routes.compare('sigma-vs-veem') },
  { text: 'Sigma vs PayPal', href: routes.compare('sigma-vs-paypal') },
  { text: 'Sigma vs Wise', href: routes.compare('sigma-vs-wise') },
  { text: 'Sigma vs Hyperwallet', href: routes.compare('sigma-vs-hyperwallet') },
];

const helpfulLinks = [
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Terms of Service', href: '/terms' },
  { text: 'Blog', href: '/blog' },
  { text: 'Press', href: '/press', hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#D1FF94] dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center sm:justify-start">
              <Image
                src="/logo/sigma-logo-1.avif"
                alt="Sigma"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>

            <p className="text-black/80 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-4 sm:justify-start">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-full bg-[#0C2E1C] p-2.5 text-white transition hover:opacity-80"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-5" strokeWidth={2} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-2">
            {/* First row - Company, Why Remote Teams choose us, and Why Gig Platforms choose us */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Building2 className="h-4 w-4" />
                <p className="text-lg font-medium text-black">Company</p>
              </div>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-black/70 hover:text-black transition hover:underline"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Building2 className="h-4 w-4" />
                <p className="text-lg font-medium text-black">Remote Teams</p>
              </div>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-black/70 hover:text-black transition hover:underline"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Building2 className="h-4 w-4" />
                <p className="text-lg font-medium text-black">Gig Platforms</p>
              </div>
              <ul className="mt-8 space-y-4 text-sm">
                {gigPlatformLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-black/70 hover:text-black transition hover:underline"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second row - Trust & Resources and Contact Us */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Shield className="h-4 w-4" />
                <p className="text-lg font-medium text-black">Resources</p>
              </div>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-black/70 hover:text-black transition hover:underline'
                      }`}
                    >
                      <span className="text-black/70 hover:text-black transition">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-[#0C2E1C] absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-[#0C2E1C] relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <BookOpen className="h-4 w-4" />
                <p className="text-lg font-medium text-black">Contact Us</p>
              </div>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="text-[#0C2E1C] size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="text-black/70 -mt-0.5 flex-1 not-italic transition">
                          {text}
                        </address>
                      ) : (
                        <span className="text-black/70 flex-1 transition">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/20 pt-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-black/70">
              &copy; 2025 {data.company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
