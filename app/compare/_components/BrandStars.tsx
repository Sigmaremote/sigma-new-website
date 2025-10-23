"use client";
import { Star } from "lucide-react";

export default function BrandStars({
  rating = 4.8,
  label = "As rated by customers",
}: { rating?: number; label?: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-600">
      <div className="flex items-center">
        <Star className="h-4 w-4 fill-current text-amber-500" />
        <Star className="h-4 w-4 fill-current text-amber-500" />
        <Star className="h-4 w-4 fill-current text-amber-500" />
        <Star className="h-4 w-4 fill-current text-amber-500" />
        <Star className="h-4 w-4 text-amber-500" />
      </div>
      <span className="font-medium text-slate-800">{rating}</span>
      <span className="text-slate-500">{label}</span>
    </div>
  );
}

