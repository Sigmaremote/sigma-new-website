import { Metadata } from 'next';
import { buildJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact - SigmaRemote',
  description: 'Get in touch with SigmaRemote for global payroll solutions.',
  alternates: {
    canonical: 'https://sigmaremote.com/contact',
  },
};

export default function ContactPage() {
  const jsonLd = buildJsonLd({
    type: 'home',
    title: 'Contact - SigmaRemote',
    description: 'Get in touch with SigmaRemote for global payroll solutions.',
    url: 'https://sigmaremote.com/contact',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-6">
              Get in touch
            </h1>
            <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto">
              Ready to simplify your global payroll? Let's talk about how Sigma can help your team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-lg font-semibold text-black mb-2">Email</div>
                <a 
                  href="mailto:hello@sigmaremote.com"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  hello@sigmaremote.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-black mb-2">Phone</div>
                <a 
                  href="tel:+15551234567"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a
                href="https://cal.com/globalpayroll/demo-25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-8 py-4 text-base font-semibold text-black hover:brightness-95 transition-colors"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
