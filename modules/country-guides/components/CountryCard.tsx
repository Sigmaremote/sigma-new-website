import Image from 'next/image';
import Link from 'next/link';
import { MapPin, DollarSign, Users } from 'lucide-react';
import { CountryGuideIndexItem } from '../types';

interface CountryCardProps {
  country: CountryGuideIndexItem;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link href={`/country-guides/${country.slug}`}>
      <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={country.image}
            alt={`${country.name} skyline`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-black">{country.name}</h3>
            <span className="text-sm text-black/60 bg-[#F2F3F1] px-2 py-1 rounded-full">
              {country.region}
            </span>
          </div>
          
          {/* Key Information */}
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 text-sm text-black/70">
              <MapPin className="h-4 w-4 text-blue-500" />
              <span>Capital: {country.capital}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-black/70">
              <DollarSign className="h-4 w-4 text-green-500" />
              <span>Currency: {country.currency}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-black/70">
              <Users className="h-4 w-4 text-purple-500" />
              <span>Language: {country.language}</span>
            </div>
          </div>
          
        </div>
      </div>
    </Link>
  );
}
