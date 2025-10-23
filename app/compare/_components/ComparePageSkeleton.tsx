"use client";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ComparePageSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
      {/* HERO */}
      <section className="pt-14 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg" />
            <Skeleton className="h-4 w-5/6 rounded-lg" />
            <div className="flex gap-3 pt-2">
              <Skeleton className="h-10 w-36 rounded-xl" />
              <Skeleton className="h-10 w-32 rounded-xl" />
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-2">
              <Skeleton className="aspect-[4/3] w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* MATRIX */}
      <section>
        <Skeleton className="h-8 w-2/3 rounded-lg mb-6" />
        <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white">
          <div className="hidden lg:grid grid-cols-2 gap-6 bg-slate-100/70 p-5">
            <Skeleton className="h-6 w-40 rounded" />
            <Skeleton className="h-6 w-28 rounded" />
          </div>
          <div className="divide-y divide-slate-100">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-10 px-6 py-5">
                <Skeleton className="h-4 w-11/12 rounded" />
                <Skeleton className="h-4 w-10/12 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section>
        <div className="flex flex-wrap justify-center items-center gap-7 md:gap-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-14 w-44 rounded-2xl" />
          ))}
        </div>
      </section>

      {/* PAIN POINTS */}
      <section>
        <div className="relative overflow-hidden rounded-3xl bg-yellow-300 ring-1 ring-yellow-300/70 lg:min-h-[420px] px-6 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-20">
            <div className="space-y-4">
              <Skeleton className="h-7 w-64 rounded" />
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-11/12 rounded" />
              ))}
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-2">
                <Skeleton className="h-80 w-[28rem] max-w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WINS */}
      <section>
        <div className="relative overflow-hidden rounded-3xl bg-[#0E2C22] lg:min-h-[420px] px-6 md:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-20">
            <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-2">
                <Skeleton className="h-80 w-[28rem] max-w-full rounded-xl" />
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-7 w-64 rounded" />
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-10/12 rounded" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (2 columns) */}
      <section className="pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-20 rounded-2xl" />
          ))}
        </div>
      </section>
    </div>
  );
}
