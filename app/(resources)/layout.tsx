import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | SigmaRemote",
    default: "Resources | SigmaRemote",
  },
  description: "Explore SigmaRemote resources including network coverage, country guides, and more.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
