import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Country Hiring Guides — SigmaRemote',
  description: 'Explore hiring laws, employer costs, and compliance requirements for countries around the world. Make informed decisions about your global team expansion.',
  keywords: 'global hiring, employer of record, international payroll, compliance, country guides',
  openGraph: {
    title: 'Country Hiring Guides — SigmaRemote',
    description: 'Explore hiring laws, employer costs, and compliance requirements for countries around the world.',
    type: 'website',
  },
};

export default function CountryGuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
