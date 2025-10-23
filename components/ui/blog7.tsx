import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
  posts = [
    {
      id: "post-1",
      title: "Getting Started with shadcn/ui Components",
      summary:
        "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&crop=center",
    },
    {
      id: "post-2",
      title: "Building Accessible Web Applications",
      summary:
        "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&crop=center",
    },
    {
      id: "post-3",
      title: "Modern Design Systems with Tailwind CSS",
      summary:
        "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop&crop=center",
    },
  ],
}: Blog7Props) => {
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
            className="w-full sm:w-auto text-navy hover:text-deep-green" 
            asChild
          >
            <a href={buttonUrl}>
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="grid grid-rows-[auto_auto_1fr_auto] border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-[16/9] w-full">
                <a
                  href={post.url}
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center rounded-t-lg"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold text-near-black hover:underline md:text-xl">
                  <a href={post.url}>
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-ink-600">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  className="flex items-center text-deep-green hover:text-navy hover:underline font-medium"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* View All Blogs Button */}
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-200"
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

export { Blog7 };
