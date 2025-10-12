export const routes = {
  home: '/',
  pricing: '/pricing',
  about: '/about',
  contact: '/contact',
  compare: (slug: string) => `/compare/${slug}`,
  countryGuides: '/country-guides',
};
