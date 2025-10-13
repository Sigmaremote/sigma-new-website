'use client';

export default function BottomCTA() {
  return (
    <div className="rounded-2xl bg-[#0C2E1C] text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">
          Compare countries?
        </h3>
        <p className="text-white/80">
          Need help choosing LATAM markets? Talk to our team.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <a 
          href="/country-guides/compare?countries=mexico,colombia,argentina"
          className="bg-[#D1FF94] text-black px-6 py-3 rounded-full font-medium hover:bg-[#C8FF66] transition-colors duration-200 text-center"
        >
          See LATAM Comparison
        </a>
        <a 
          href="https://cal.com/globalpayroll/demo-25"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors duration-200 text-center"
        >
          Talk to Sales
        </a>
      </div>
    </div>
  );
}
