import { CountryGuideIndexItem } from '../types';

export const countryIndexList: CountryGuideIndexItem[] = [
  {
    slug: 'mexico',
    name: 'Mexico',
    region: 'North America',
    shortDescription: 'Employment regulations and hiring practices in Mexico',
    image: '/countries-images/Mexico_City_Reforma_Street.jpg',
    capital: 'Mexico City',
    currency: 'Mexican Peso\u00A0(MXN)',
    language: 'Spanish',
    employerOnCostHint: '~25–30%',
    payrollCycleHint: 'Bi-weekly',
    requires13th: true,
    flagEmoji: '🇲🇽',
    hoverHighlights: ['13th salary required', 'Onboarding ~3 days', 'Termination requires severance'],
    tags: ['Low cost', 'USD wallet friendly', 'Fast onboarding']
  },
  {
    slug: 'colombia',
    name: 'Colombia',
    region: 'South America',
    shortDescription: 'Employment regulations and hiring practices in Colombia',
    image: '/countries-images/columbia.jpg',
    capital: 'Bogotá',
    currency: 'Colombian Peso (COP)',
    language: 'Spanish',
    employerOnCostHint: '~30–35%',
    payrollCycleHint: 'Monthly',
    requires13th: true,
    flagEmoji: '🇨🇴',
    hoverHighlights: ['13th salary required', 'Onboarding ~5 days', 'Health insurance mandatory'],
    tags: ['Low cost', 'USD wallet friendly']
  },
  {
    slug: 'argentina',
    name: 'Argentina',
    region: 'South America',
    shortDescription: 'Employment regulations and hiring practices in Argentina',
    image: '/countries-images/argentina.jpeg',
    capital: 'Buenos Aires',
    currency: 'Argentine Peso\u00A0(ARS)',
    language: 'Spanish',
    employerOnCostHint: '~35–40%',
    payrollCycleHint: 'Monthly',
    requires13th: true,
    flagEmoji: '🇦🇷',
    hoverHighlights: ['13th salary required', 'Onboarding ~5 days', 'High inflation considerations'],
    tags: ['Low cost']
  },
];
