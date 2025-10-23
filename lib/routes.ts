export const routes = {
  home: '/',
  pricing: '/pricing',
  about: '/about',
  contact: '/contact',
  press: '/press',
  blog: '/blog',
  resources: '/resources',
  compare: (slug: string) => `/compare/${slug}`,
  countryGuides: '/country-guides',
};
