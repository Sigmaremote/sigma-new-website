import { Press7 } from "@/components/ui/press7";

const pressData = {
  tagline: "Latest News",
  heading: "Press Releases",
  description:
    "Stay informed about our latest company announcements, product launches, and industry insights. Discover how Sigma is transforming global workforce management and compliance automation.",
  buttonText: "View all press releases",
  buttonUrl: "/press",
  pressReleases: [
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
    {
      id: "press-7",
      title: "Sigma Introduces Real-Time Payroll Processing for Latin American Workers",
      summary:
        "Revolutionary payroll system enables instant payments to workers across Mexico, Argentina, and Colombia, eliminating traditional banking delays and improving worker satisfaction.",
      category: "Product Launch",
      location: "Bogotá, CO",
      published: "1 Jan 2024",
      url: "/press/real-time-payroll-processing",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop&crop=center",
      dateline: "BOGOTÁ, CO - January 1, 2024",
      leadParagraph: "Sigma today announced the launch of its real-time payroll processing system, enabling instant payments to workers across Latin America and revolutionizing how companies compensate their global workforce."
    },
    {
      id: "press-8",
      title: "Sigma Secures $25M in Series B Funding Led by Andreessen Horowitz",
      summary:
        "Major investment round will accelerate product development and market expansion as Sigma continues to lead the global workforce management revolution.",
      category: "Funding",
      location: "San Francisco, CA",
      published: "28 Dec 2023",
      url: "/press/series-b-funding-a16z",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop&crop=center",
      dateline: "SAN FRANCISCO, CA - December 28, 2023",
      leadParagraph: "Sigma announced today that it has secured $25 million in Series B funding led by Andreessen Horowitz, with participation from existing investors, to accelerate its mission of simplifying global workforce management."
    },
    {
      id: "press-9",
      title: "Sigma Launches Comprehensive Mexico Employment Law Compliance Suite",
      summary:
        "New compliance automation tools help international companies navigate Mexico's complex labor regulations, including recent reforms and tax requirements.",
      category: "Product Launch",
      location: "Mexico City, MX",
      published: "25 Dec 2023",
      url: "/press/mexico-compliance-suite",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=450&fit=crop&crop=center",
      dateline: "MEXICO CITY, MX - December 25, 2023",
      leadParagraph: "Sigma unveiled its comprehensive Mexico Employment Law Compliance Suite, providing international companies with automated tools to navigate Mexico's evolving labor regulations and ensure full compliance."
    },
  ],
};

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      <Press7 {...pressData} />
    </div>
  );
}
