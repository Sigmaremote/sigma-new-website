import Link from 'next/link';

interface CtaBlockProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CtaBlock({
  title = "Ready to hire globally?",
  subtitle = "Get started with compliant payroll and hiring in minutes.",
  primaryButtonText = "Get a Free Payroll Setup",
  primaryButtonHref = "/book-a-demo",
  secondaryButtonText = "Talk to Sales",
  secondaryButtonHref = "/contact"
}: CtaBlockProps) {
  return (
    <div className="bg-[#0C2E1C] rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-white/80 mb-8 max-w-2xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={primaryButtonHref}
          className="bg-[#D6FF57] text-black px-6 py-3 rounded-full font-semibold hover:brightness-95 transition-colors"
        >
          {primaryButtonText}
        </Link>
        <Link
          href={secondaryButtonHref}
          className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0C2E1C] transition-colors"
        >
          {secondaryButtonText}
        </Link>
      </div>
    </div>
  );
}
