import { Blog7 } from "@/components/ui/blog7";

const demoData = {
  tagline: "Latest Updates",
  heading: "Blog Posts",
  description:
    "Discover the latest trends, tips, and best practices in global hiring and compliance. From country-specific guides to regulatory updates, stay informed with our expert insights.",
  buttonText: "Explore all posts",
  buttonUrl: "/blog",
  posts: [
    {
      id: "post-1",
      title: "Complete Guide to Hiring in Mexico: 2024 Update",
      summary:
        "Everything you need to know about hiring remote workers in Mexico, including labor laws, tax requirements, and compliance best practices for international companies.",
      label: "Mexico",
      author: "Sigma Team",
      published: "15 Jan 2024",
      url: "/blog/mexico-hiring-guide-2024",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=450&fit=crop&crop=center",
    },
    {
      id: "post-2",
      title: "Argentina Employment Law Changes: What You Need to Know",
      summary:
        "Recent updates to Argentina's employment regulations and how they affect international companies hiring Argentine workers. Stay compliant with the latest changes.",
      label: "Argentina",
      author: "Sigma Team",
      published: "12 Jan 2024",
      url: "/blog/argentina-employment-law-2024",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=450&fit=crop&crop=center",
    },
    {
      id: "post-3",
      title: "Colombia Remote Work Regulations: A Complete Overview",
      summary:
        "Understanding Colombia's remote work laws, tax implications, and compliance requirements for companies looking to hire Colombian talent remotely.",
      label: "Colombia",
      author: "Sigma Team",
      published: "10 Jan 2024",
      url: "/blog/colombia-remote-work-regulations",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop&crop=center",
    },
  ],
};

export function Blog7Demo() {
  return <Blog7 {...demoData} />;
}
