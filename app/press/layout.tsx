import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Releases | Sigma - Global Workforce Management',
  description: 'Stay informed about Sigma\'s latest company announcements, product launches, and industry insights. Discover how we\'re transforming global workforce management and compliance automation.',
  keywords: 'press releases, company news, workforce management, compliance automation, global hiring, Sigma announcements',
  openGraph: {
    title: 'Press Releases | Sigma - Global Workforce Management',
    description: 'Stay informed about Sigma\'s latest company announcements, product launches, and industry insights.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press Releases | Sigma - Global Workforce Management',
    description: 'Stay informed about Sigma\'s latest company announcements, product launches, and industry insights.',
  },
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
