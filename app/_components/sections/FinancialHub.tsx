import { Building2, Heart } from 'lucide-react';

export default function FinancialHub() {
  const hubs = [
    {
      icon: Building2,
      title: 'Sigma Financial Hub',
      subtitle: 'USD Wallet by Wells Fargo',
      features: [
        'FDIC-insured USD accounts',
        'Real-time balance tracking',
        'Instant transfers to 160+ countries',
      ],
    },
    {
      icon: Heart,
      title: 'Sigma Benefits',
      subtitle: 'Local health & retirement',
      features: [
        'Local health insurance plans',
        'Retirement fund management',
        'Compliance with local regulations',
      ],
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">
            Financial infrastructure built for global teams
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            From banking to benefits, we provide the financial foundation your distributed team needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {hubs.map((hub) => {
            const Icon = hub.icon;
            return (
              <div key={hub.title} className="rounded-2xl border border-black/10 p-8">
                <div className="flex items-center mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D6FF57] mr-4">
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black">
                      {hub.title}
                    </h3>
                    <p className="text-sm text-black/60">
                      {hub.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {hub.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-[#D6FF57] mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
