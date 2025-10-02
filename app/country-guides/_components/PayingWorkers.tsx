import Image from 'next/image';
import { CountryGuideContent } from '../../../modules/country-guides/types';

interface PayingWorkersProps {
  content: CountryGuideContent;
}

export default function PayingWorkers({ content }: PayingWorkersProps) {
  return (
    <section id="paying-workers" className="mb-16">
      <div className="bg-brand-lime-50 rounded-2xl p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center">
                <span className="text-ink-900 font-bold text-lg">$</span>
              </div>
              <h2 className="text-2xl font-semibold text-ink-900">
                Paying workers in {content.name} the easy way
              </h2>
            </div>
            <p className="text-lg text-ink-600 leading-relaxed">
              {content.payingWorkers}
            </p>
          </div>
          
          <div className="relative">
            <Image
              src="/usdc-wallet.avif"
              alt="USDC Wallet - Zero fees, auto conversion, direct deposits"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
