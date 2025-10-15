import { Blog7 } from "@/components/ui/blog7";

const blogData = {
  tagline: "Latest Insights",
  heading: "Global Hiring & Compliance Blog",
  description:
    "Stay updated with the latest trends, regulations, and best practices in global hiring, compliance, and workforce management. From country-specific guides to compliance updates, we've got you covered.",
  buttonText: "Explore all articles",
  buttonUrl: "/blog",
  posts: [
    {
      id: "post-0",
      title: "How to Hire International Contractors in 2025 (Without the Legal Headaches)",
      summary:
        "A step-by-step guide to hiring global talent compliantly - without FX fees, misclassification risks, or payroll delays.",
      label: "International Hiring",
      author: "SigmaRemote Editorial",
      published: "15 Jan 2025",
      url: "/blog/hire-international-contractors-2025",
      image: "/Blog images/How to Hire Blog 1/blog-image-1.png",
    },
    {
      id: "post-1",
      title: "Best Payoneer Alternatives for Global Payroll in 2025",
      summary:
        "Discover the top alternatives to Payoneer for international contractor payments and global payroll management.",
      label: "Payoneer Alternatives",
      author: "SigmaRemote Editorial",
      published: "20 Jan 2025",
      url: "/blog/best-payoneer-alternatives-2025",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop&crop=center",
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Blog7 {...blogData} />
    </div>
  );
}
