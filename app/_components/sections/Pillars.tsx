import { Wallet, Coins, Building2, Shield } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      icon: Wallet,
      title: 'USD wallets',
      description: 'Keep your money in USD and avoid FX volatility.',
      learnMore: '#',
    },
    {
      icon: Coins,
      title: 'Stablecoin payroll',
      description: 'Pay with USDC/USDT for instant, low-cost transfers.',
      learnMore: '#',
    },
    {
      icon: Building2,
      title: 'Local bank payouts',
      description: 'Direct deposits to local bank accounts worldwide.',
      learnMore: '#',
    },
    {
      icon: Shield,
      title: 'EOR / AOR / CoR compliance',
      description: 'Full employment compliance when you need it.',
      learnMore: '#',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">
            Everything you need for global payroll
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            From USD wallets to local compliance, we handle the complexity so you can focus on growing your team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D6FF57]">
                  <Icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {pillar.title}
                </h3>
                <p className="text-black/70 mb-4">
                  {pillar.description}
                </p>
                <a
                  href={pillar.learnMore}
                  className="text-sm font-medium text-black hover:underline"
                >
                  Learn more →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
