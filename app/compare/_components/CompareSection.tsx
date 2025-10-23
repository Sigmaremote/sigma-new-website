import { COMPARE_DATA } from "../_data/compare-data";
import CompareMatrix from "./CompareMatrix";
import CompaniesUsingUs from "./CompaniesUsingUs";

export default function CompareSection({
  competitorKey = "deel",
}: {
  competitorKey?: keyof typeof COMPARE_DATA;
}) {
  const data = COMPARE_DATA[competitorKey];

  return (
    <section className="relative">
      {/* subtle dotted background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#E5E7EB_1px,transparent_0)] [background-size:28px_28px] opacity-20"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Side-by-Side on What Really Matters
        </h2>
        <p className="mt-3 text-lg text-slate-600 max-w-2xl">
          Compare real costs, speed, and experience between {data.competitorName} and SigmaRemote.
        </p>

        <div className="mt-10">
          <CompareMatrix
            competitorName={data.competitorName}
            competitor={data.competitorPoints}
            sigma={data.sigmaPoints}
          />
        </div>
      </div>
      
      <CompaniesUsingUs />
    </section>
  );
}
