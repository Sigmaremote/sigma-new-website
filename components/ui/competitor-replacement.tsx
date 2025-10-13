export function CompetitorReplacementSection() {
  const competitors = [
    'Deel',
    'Payoneer', 
    'Gusto',
    'SafetyWing',
    'Workday',
    'Checkr'
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Header text */}
        <p className="text-center text-base font-medium text-neutral-800 mb-12">
          Companies use Sigma's end-to-end solution to replace:
        </p>
        
        {/* Logo placeholders */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {competitors.map((competitor, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-24 md:w-32 h-9 md:h-12 bg-neutral-100 rounded-2xl shadow-sm"
            >
              <span className="text-sm md:text-base font-medium text-neutral-600">
                {competitor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
