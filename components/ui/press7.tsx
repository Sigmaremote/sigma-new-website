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
      title: "Sigma Raises $10M Series A to Accelerate Global Workforce Expansion",
      summary:
        "Leading global workforce management platform announces major funding round to expand operations across Latin America and enhance compliance automation capabilities.",
      category: "Funding",
      location: "San Francisco, CA",
      published: "15 Jan 2024",
      url: "/press/sigma-series-a-funding",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop&crop=center",
      dateline: "SAN FRANCISCO, CA - January 15, 2024",
      leadParagraph: "Sigma, the leading platform for global workforce management and compliance, today announced it has raised $10 million in Series A funding to accelerate its expansion across Latin America and enhance its automated compliance capabilities."
    },
    {
      id: "press-2",
      title: "Sigma Launches AI-Powered Compliance Hub for Latin American Markets",
      summary:
        "New AI-driven compliance automation platform helps companies navigate complex employment laws across Mexico, Argentina, and Colombia with real-time regulatory updates.",
      category: "Product Launch",
      location: "Mexico City, MX",
      published: "12 Jan 2024",
      url: "/press/ai-compliance-hub-launch",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop&crop=center",
      dateline: "MEXICO CITY, MX - January 12, 2024",
      leadParagraph: "Sigma today unveiled its revolutionary AI-Powered Compliance Hub, designed to help international companies seamlessly navigate the complex employment regulations across Latin American markets."
    },
    {
      id: "press-3",
      title: "Sigma Partners with Leading Latin American HR Consultancies",
      summary:
        "Strategic partnerships with top HR firms across Mexico, Argentina, and Colombia to provide comprehensive workforce management solutions for international companies.",
      category: "Partnership",
      location: "Buenos Aires, AR",
      published: "10 Jan 2024",
      url: "/press/latam-hr-partnerships",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=450&fit=crop&crop=center",
      dateline: "BUENOS AIRES, AR - January 10, 2024",
      leadParagraph: "Sigma announced strategic partnerships with leading HR consultancies across Latin America to provide comprehensive workforce management solutions for international companies expanding into the region."
    },
    {
      id: "press-4",
      title: "Sigma Achieves SOC 2 Type II Compliance Certification",
      summary:
        "Company demonstrates commitment to enterprise-grade security and data protection standards, enabling secure global workforce management for Fortune 500 companies.",
      category: "Compliance",
      location: "San Francisco, CA",
      published: "8 Jan 2024",
      url: "/press/soc2-compliance-certification",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop&crop=center",
      dateline: "SAN FRANCISCO, CA - January 8, 2024",
      leadParagraph: "Sigma today announced it has achieved SOC 2 Type II compliance certification, demonstrating its commitment to enterprise-grade security and data protection standards for global workforce management."
    },
    {
      id: "press-5",
      title: "Sigma Expands Executive Team with Former Stripe and PayPal Leaders",
      summary:
        "Company strengthens leadership team with experienced executives from leading fintech companies to drive global expansion and product innovation.",
      category: "Leadership",
      location: "San Francisco, CA",
      published: "5 Jan 2024",
      url: "/press/executive-team-expansion",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop&crop=center",
      dateline: "SAN FRANCISCO, CA - January 5, 2024",
      leadParagraph: "Sigma announced the expansion of its executive team with the addition of senior leaders from Stripe and PayPal, bringing decades of experience in global payments and workforce management."
    },
    {
      id: "press-6",
      title: "Sigma Named to Fast Company's Most Innovative Companies List",
      summary:
        "Recognition for pioneering AI-driven compliance automation and transforming how companies manage global workforces across Latin American markets.",
      category: "Awards",
      location: "New York, NY",
      published: "3 Jan 2024",
      url: "/press/fast-company-innovation-award",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop&crop=center",
      dateline: "NEW YORK, NY - January 3, 2024",
      leadParagraph: "Sigma has been named to Fast Company's prestigious Most Innovative Companies list for 2024, recognizing its pioneering work in AI-driven compliance automation for global workforce management."
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
