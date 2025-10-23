import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - SigmaRemote',
  description: 'Latest insights on global payroll, compliance, and remote work.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
