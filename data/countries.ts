export type CountryGuide = {
  slug: string
  name: string
  region: 'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Oceania' | 'Middle East'
  shortDescription: string
  image: string
}

export const countries: CountryGuide[] = [
  // South America
  {
    slug: 'argentina',
    name: 'Argentina',
    region: 'South America',
    shortDescription: 'Employment regulations and hiring practices in Argentina.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop'
  },
  {
    slug: 'brazil',
    name: 'Brazil',
    region: 'South America',
    shortDescription: 'Employment regulations and hiring practices in Brazil.',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=600&fit=crop'
  },
  {
    slug: 'chile',
    name: 'Chile',
    region: 'South America',
    shortDescription: 'Employment regulations and hiring practices in Chile.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    slug: 'colombia',
    name: 'Colombia',
    region: 'South America',
    shortDescription: 'Employment regulations and hiring practices in Colombia.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop'
  },
  {
    slug: 'peru',
    name: 'Peru',
    region: 'South America',
    shortDescription: 'Employment regulations and hiring practices in Peru.',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800&h=600&fit=crop'
  },
  {
    slug: 'uruguay',
    name: 'Uruguay',
    region: 'South America',
    shortDescription: 'Employment regulations and hiring practices in Uruguay.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    slug: 'paraguay',
    name: 'Paraguay',
    region: 'South America',
    shortDescription: 'Employment regulations and hiring practices in Paraguay.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    slug: 'bolivia',
    name: 'Bolivia',
    region: 'South America',
    shortDescription: 'Employment regulations and hiring practices in Bolivia.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },

  // North America
  {
    slug: 'united-states',
    name: 'United States',
    region: 'North America',
    shortDescription: 'Employment regulations and hiring practices in the United States.',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop'
  },
  {
    slug: 'canada',
    name: 'Canada',
    region: 'North America',
    shortDescription: 'Employment regulations and hiring practices in Canada.',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d4e6b1c4?w=800&h=600&fit=crop'
  },
  {
    slug: 'mexico',
    name: 'Mexico',
    region: 'North America',
    shortDescription: 'Employment regulations and hiring practices in Mexico.',
    image: '/countries-images/Mexico_City_Reforma_Street.jpg'
  },

  // Europe
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in the United Kingdom.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop'
  },
  {
    slug: 'ireland',
    name: 'Ireland',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Ireland.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    slug: 'france',
    name: 'France',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in France.',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop'
  },
  {
    slug: 'spain',
    name: 'Spain',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Spain.',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop'
  },
  {
    slug: 'portugal',
    name: 'Portugal',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Portugal.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'germany',
    name: 'Germany',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Germany.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop'
  },
  {
    slug: 'netherlands',
    name: 'Netherlands',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in the Netherlands.',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=600&fit=crop'
  },
  {
    slug: 'belgium',
    name: 'Belgium',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Belgium.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'poland',
    name: 'Poland',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Poland.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'czech-republic',
    name: 'Czech Republic',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in the Czech Republic.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'romania',
    name: 'Romania',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Romania.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'sweden',
    name: 'Sweden',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Sweden.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'denmark',
    name: 'Denmark',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Denmark.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'finland',
    name: 'Finland',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Finland.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'switzerland',
    name: 'Switzerland',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Switzerland.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'austria',
    name: 'Austria',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Austria.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'greece',
    name: 'Greece',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Greece.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },
  {
    slug: 'estonia',
    name: 'Estonia',
    region: 'Europe',
    shortDescription: 'Employment regulations and hiring practices in Estonia.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop'
  },

  // Africa
  {
    slug: 'nigeria',
    name: 'Nigeria',
    region: 'Africa',
    shortDescription: 'Employment regulations and hiring practices in Nigeria.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    slug: 'kenya',
    name: 'Kenya',
    region: 'Africa',
    shortDescription: 'Employment regulations and hiring practices in Kenya.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    slug: 'ghana',
    name: 'Ghana',
    region: 'Africa',
    shortDescription: 'Employment regulations and hiring practices in Ghana.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    slug: 'south-africa',
    name: 'South Africa',
    region: 'Africa',
    shortDescription: 'Employment regulations and hiring practices in South Africa.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    slug: 'egypt',
    name: 'Egypt',
    region: 'Africa',
    shortDescription: 'Employment regulations and hiring practices in Egypt.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },
  {
    slug: 'morocco',
    name: 'Morocco',
    region: 'Africa',
    shortDescription: 'Employment regulations and hiring practices in Morocco.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  },

  // Middle East
  {
    slug: 'united-arab-emirates',
    name: 'United Arab Emirates',
    region: 'Middle East',
    shortDescription: 'Employment regulations and hiring practices in the United Arab Emirates.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop'
  },
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    region: 'Middle East',
    shortDescription: 'Employment regulations and hiring practices in Saudi Arabia.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop'
  },
  {
    slug: 'turkey',
    name: 'Turkey',
    region: 'Middle East',
    shortDescription: 'Employment regulations and hiring practices in Turkey.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop'
  },
  {
    slug: 'israel',
    name: 'Israel',
    region: 'Middle East',
    shortDescription: 'Employment regulations and hiring practices in Israel.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop'
  },

  // Asia
  {
    slug: 'india',
    name: 'India',
    region: 'Asia',
    shortDescription: 'Employment regulations and hiring practices in India.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop'
  },
  {
    slug: 'pakistan',
    name: 'Pakistan',
    region: 'Asia',
    shortDescription: 'Employment regulations and hiring practices in Pakistan.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop'
  },
  {
    slug: 'bangladesh',
    name: 'Bangladesh',
    region: 'Asia',
    shortDescription: 'Employment regulations and hiring practices in Bangladesh.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop'
  },
  {
    slug: 'philippines',
    name: 'Philippines',
    region: 'Asia',
    shortDescription: 'Employment regulations and hiring practices in the Philippines.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop'
  },
  {
    slug: 'indonesia',
    name: 'Indonesia',
    region: 'Asia',
    shortDescription: 'Employment regulations and hiring practices in Indonesia.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop'
  },
  {
    slug: 'vietnam',
    name: 'Vietnam',
    region: 'Asia',
    shortDescription: 'Employment regulations and hiring practices in Vietnam.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop'
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    region: 'Asia',
    shortDescription: 'Employment regulations and hiring practices in Thailand.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop'
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    region: 'Asia',
    shortDescription: 'Employment regulations and hiring practices in Singapore.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop'
  },
  {
    slug: 'malaysia',
    name: 'Malaysia',
    region: 'Asia',
    shortDescription: 'Employment regulations and hiring practices in Malaysia.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop'
  },

  // Oceania
  {
    slug: 'australia',
    name: 'Australia',
    region: 'Oceania',
    shortDescription: 'Employment regulations and hiring practices in Australia.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    slug: 'new-zealand',
    name: 'New Zealand',
    region: 'Oceania',
    shortDescription: 'Employment regulations and hiring practices in New Zealand.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  }
]
