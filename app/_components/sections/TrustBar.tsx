export default function TrustBar() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-black/60">
            Faster onboarding. Lower total cost.
          </p>
          {/* Logo placeholder - can be replaced with actual client logos */}
          <div className="mt-4 flex justify-center">
            <div className="flex items-center gap-8 opacity-40">
              <div className="h-8 w-20 bg-black/10 rounded"></div>
              <div className="h-8 w-20 bg-black/10 rounded"></div>
              <div className="h-8 w-20 bg-black/10 rounded"></div>
              <div className="h-8 w-20 bg-black/10 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
