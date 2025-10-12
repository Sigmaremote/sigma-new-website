import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to simplify global payroll?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using Sigma to pay their global teams faster and cheaper.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://cal.com/globalpayroll/demo-25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#D6FF57] px-8 py-4 text-base font-semibold text-black hover:brightness-95 transition-colors"
            >
              Talk to Sales
            </Link>
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-black transition-colors"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
