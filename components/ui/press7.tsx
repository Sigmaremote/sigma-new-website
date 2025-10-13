import { ArrowRight, Calendar, MapPin, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface PressRelease {
  id: string;
  title: string;
  summary: string;
  category: string;
  location: string;
  published: string;
  url: string;
  image: string;
  dateline?: string;
  leadParagraph?: string;
}

interface Press7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  pressReleases: PressRelease[];
}

const Press7 = ({
  tagline = "Latest News",
  heading = "Press Releases",
  description = "Stay informed about our latest company announcements, product launches, and industry insights. Discover how Sigma is transforming global workforce management.",
  buttonText = "View all press releases",
  buttonUrl = "/press",
  pressReleases = [
    {
      id: "press-1",
      title: "New! SigmaRemote Rolls Out Flat-Fee USD Payroll Across El Salvador, Panama & Costa Rica - No FX Markups, Ever",
      summary:
        "Businesses save up to $2,050 annually per contractor using SigmaRemote's FX-free USD payroll corridors across LATAM.",
      category: "Product Launch",
      location: "GLOBAL",
      published: "14 Jul 2025",
      url: "/press/usd-payroll-latam",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop&crop=center",
      dateline: "GLOBAL - July 14, 2025",
      leadParagraph: "SigmaRemote, a global payroll automation platform, launched USD payroll corridors in El Salvador, Panama, and Costa Rica. The service eliminates foreign exchange fees and reduces contractor onboarding from days to minutes for businesses hiring Latin American talent."
    },
    {
      id: "press-2",
      title: "New! SigmaRemote Rolls Out Stablecoin Payroll Across LATAM's $415B Crypto Market",
      summary:
        "USDC payroll now live across LATAM – saving businesses 99% on transfer fees and paying contractors in seconds.",
      category: "Product Launch",
      location: "GLOBAL",
      published: "21 Jul 2025",
      url: "/press/stablecoin-payroll-latam",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop&crop=center",
      dateline: "GLOBAL - July 21, 2025",
      leadParagraph: "SigmaRemote launched instant USDC stablecoin payroll across Latin America, eliminating $65+ traditional banking fees and 48-hour payment delays for businesses hiring remote contractors."
    },
  ],
}: Press7Props) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge 
            variant="secondary" 
            className="mb-6 bg-sigma-lime text-deep-green border-sigma-lime hover:bg-sigma-lime/80"
          >
            {tagline}
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold text-near-black md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-ink-600 md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          <Button 
            variant="link" 
            className="w-full sm:w-auto text-sigma-lime hover:text-deep-green" 
            asChild
          >
            <a href={buttonUrl}>
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pressReleases.map((release) => (
            <Card key={release.id} className="grid grid-rows-[auto_auto_1fr_auto] border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-[16/9] w-full">
                <a
                  href={release.url}
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={release.image}
                    alt={release.title}
                    className="h-full w-full object-cover object-center rounded-t-lg"
                  />
                </a>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs border-deep-green text-deep-green">
                    {release.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-near-black hover:underline md:text-xl">
                  <a href={release.url}>
                    {release.title}
                  </a>
                </h3>
                {/* Press Release Dateline */}
                {release.dateline && (
                  <div className="flex items-center gap-1 text-sm text-ink-500 mt-2">
                    <MapPin className="size-3" />
                    <span className="font-medium">{release.dateline}</span>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-ink-600 mb-3">{release.summary}</p>
                {/* Lead Paragraph for Press Releases */}
                {release.leadParagraph && (
                  <p className="text-sm text-ink-500 italic border-l-2 border-sigma-lime pl-3">
                    {release.leadParagraph}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4 text-sm text-ink-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      <span>{release.published}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="size-3" />
                      <span>{release.location}</span>
                    </div>
                  </div>
                  <a
                    href={release.url}
                    className="flex items-center text-deep-green hover:text-navy hover:underline font-medium"
                  >
                    Read release
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* View All Press Releases Button */}
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-deep-green text-deep-green hover:bg-deep-green hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-200"
            asChild
          >
            <a href={buttonUrl}>
              {buttonText}
              <ArrowRight className="ml-2 size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Press7 };
