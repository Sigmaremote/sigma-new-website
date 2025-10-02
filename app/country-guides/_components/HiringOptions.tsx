import { Check, ExternalLink } from 'lucide-react';
import { CountryGuideContent } from '../../../modules/country-guides/types';

interface HiringOptionsProps {
  content: CountryGuideContent;
}

export default function HiringOptions({ content }: HiringOptionsProps) {
  const options = [
    {
      title: 'Contractors',
      description: content.hiringOptions.contractors,
      benefits: [
        'Quick setup and onboarding',
        'Flexible engagement terms',
        'Lower administrative overhead'
      ],
      learnMore: false
    },
    {
      title: 'Employer of Record (EOR)',
      description: content.hiringOptions.eor,
      benefits: [
        'Full legal compliance',
        'No entity setup required',
        'Complete risk mitigation'
      ],
      learnMore: true
    },
    {
      title: 'Own Entity',
      description: content.hiringOptions.ownEntity,
      benefits: [
        'Full control and ownership',
        'Direct employee relationships',
        'Long-term market presence'
      ],
      learnMore: false
    }
  ];

  return (
    <section id="hiring-options" className="mb-16">
      <h2 className="text-2xl font-semibold text-ink-900 mb-8">Hiring Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm flex h-full flex-col"
          >
            <h3 className="text-lg font-semibold text-black">{option.title}</h3>
            <p className="mt-2 text-[15px] leading-6 text-black/70">{option.description}</p>
            
            <div className="mt-4 space-y-2">
              {option.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 text-black" />
                  <span className="text-[15px] leading-6 text-black/80">{benefit}</span>
                </div>
              ))}
            </div>
            
            {option.learnMore && (
              <a
                href="/eor"
                className="mt-4 text-sm underline text-black hover:opacity-80"
              >
                Learn more about EOR
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
