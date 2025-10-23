export default function CountryMarquee() {
  const countries = [
    { name: 'Mexico', flag: '🇲🇽' },
    { name: 'Colombia', flag: '🇨🇴' },
    { name: 'Argentina', flag: '🇦🇷' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Philippines', flag: '🇵🇭' },
    { name: 'Ukraine', flag: '🇺🇦' },
    { name: 'Poland', flag: '🇵🇱' },
    { name: 'Romania', flag: '🇷🇴' },
    { name: 'Bulgaria', flag: '🇧🇬' },
    { name: 'Nigeria', flag: '🇳🇬' },
    { name: 'Kenya', flag: '🇰🇪' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">
            We get you to every country
          </h2>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {[...countries, ...countries].map((country, index) => (
              <div
                key={`${country.name}-${index}`}
                className="flex items-center space-x-2 whitespace-nowrap"
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="text-sm font-medium text-black/70">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
