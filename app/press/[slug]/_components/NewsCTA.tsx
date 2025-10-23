import Link from 'next/link';

export default function NewsCTA() {
  return (
    <section className="my-12 md:my-16">
      <div className="rounded-3xl bg-[#0C2E1C] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:p-10 lg:p-14">
        <div className="text-center">
          <div className="text-sm/5 text-white/80 mb-2">Ready to build your global team?</div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">
            Let's build your Global Team with Sigma
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how Sigma can help you hire, pay, and retain top-skilled workers globally while saving you from compliance headaches and IRS forms.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#E8F843] px-8 py-4 text-base font-semibold text-black shadow-sm ring-1 ring-black/10 hover:bg-[#CFF86A] transition-colors"
          >
            Get a Free Payroll Setup <span aria-hidden className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
