import { generateIndexPageMetadata } from '../../lib/seo';

export const metadata = generateIndexPageMetadata();

export default function CountryGuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
