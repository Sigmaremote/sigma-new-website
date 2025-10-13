export default function SocialProof() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <blockquote className="text-xl text-black/80 mb-6 max-w-3xl mx-auto">
            "Sigma has transformed how we handle global payroll. The USD wallets and transparent FX rates 
            have saved us thousands in fees and hours of admin work."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-[#D1FF94] flex items-center justify-center">
              <span className="text-lg font-semibold text-black">JD</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-black">John Doe</p>
              <p className="text-sm text-black/60">CTO, TechCorp</p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">50%</div>
              <div className="text-sm text-black/60">Lower costs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">24h</div>
              <div className="text-sm text-black/60">Onboarding time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">160+</div>
              <div className="text-sm text-black/60">Countries supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
