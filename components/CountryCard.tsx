import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { CountryGuide } from '@/data/countries'
import Badge from './Badge'

interface CountryCardProps {
  country: CountryGuide
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      href="#"
      className="group block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      aria-label={`View hiring guide for ${country.name}`}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={country.image}
          alt={`${country.name} skyline`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="region">
            {country.region}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-lime-fallback transition-colors">
              {country.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {country.shortDescription}
            </p>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-lime-fallback transition-colors flex-shrink-0 ml-2" />
        </div>
      </div>
    </Link>
  )
}
