import {
  Linkedin,
  Twitter,
  Shield,
  Building2,
  BookOpen,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const data = {
  linkedinLink: 'https://www.linkedin.com/company/sigmaremote/',
  twitterLink: 'https://twitter.com/',
  services: {
    webdev: '/web-development',
    webdesign: '/web-design',
    marketing: '/marketing',
    googleads: '/google-ads',
  },
  about: {
    history: '/about',
    team: '/meet-the-team',
    handbook: '/employee-handbook',
    careers: '/careers',
  },
  help: {
    faqs: '/faqs',
    support: '/support',
    livechat: '/live-chat',
  },
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

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
];

const aboutLinks = [
  { text: 'About us', href: data.about.history },
  { text: 'Get in touch', href: '/contact' },
  { text: 'Pricing', href: '/pricing' },
  { text: 'Book a Demo', href: 'https://cal.com/globalpayroll/demo-25' },
];

const serviceLinks = [
  { text: 'Sigma vs Deel', href: '/compare/deel' },
  { text: 'Sigma vs Remote', href: '/compare/remote' },
  { text: 'Sigma vs Rippling', href: '/compare/rippling' },
  { text: 'Sigma vs Gusto', href: '/compare/gusto' },
  { text: 'Sigma vs Ontop', href: '/compare/ontop' },
];

const gigPlatformLinks = [
  { text: 'Sigma vs Payoneer', href: '/compare/payoneer' },
  { text: 'Sigma vs Veem', href: '/compare/veem' },
  { text: 'Sigma vs PayPal', href: '/compare/paypal' },
  { text: 'Sigma vs Wise', href: '/compare/wise' },
  { text: 'Sigma vs Hyperwallet', href: '/compare/hyperwallet' },
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

export default function Footer4Col() {
  return (
    <footer className="bg-[#D1FF94] dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <Image
                src={data.company.logo || '/placeholder.svg'}
                alt="Sigma logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
                priority
              />
            </div>

            <p className="text-black/80 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-black/80 transition rounded-full bg-[#0C2E1C] p-2 text-white hover:opacity-90"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-4" />
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
                <p className="text-lg font-medium text-black">Why Remote Teams choose us</p>
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
                <p className="text-lg font-medium text-black">Why Gig Platforms choose us</p>
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
                <p className="text-lg font-medium text-black">Trust & Resources</p>
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
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-black/70">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-black/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
