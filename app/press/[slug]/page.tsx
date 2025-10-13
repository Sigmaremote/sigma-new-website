import { notFound } from 'next/navigation';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllPress } from '@/lib/press';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PressReleasePageProps {
  params: {
    slug: string;
  };
}

async function getPressRelease(slug: string) {
  const PRESS_DIR = path.join(process.cwd(), "content/press");
  const files = await import('fast-glob').then(fg => fg.default("*.mdx", { cwd: PRESS_DIR }));
  
  for (const file of files) {
    const p = path.join(PRESS_DIR, file);
    const src = fs.readFileSync(p, "utf8");
    const { data, content } = matter(src);
    
    if (data.slug === slug) {
      return {
        title: String(data.title || ""),
        slug: String(data.slug || path.basename(file, ".mdx")),
        date: String(data.date || new Date().toISOString()),
        published: Boolean(data.published ?? false),
        content: content,
      };
    }
  }
  
  return null;
}

export default async function PressReleasePage({ params }: PressReleasePageProps) {
  const pressRelease = await getPressRelease(params.slug);

  if (!pressRelease) {
    notFound();
  }

  const publishedDate = new Date(pressRelease.date);
  const formattedDate = publishedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="text-deep-green hover:text-navy">
            <Link href="/press" className="flex items-center gap-2">
              <ArrowLeft className="size-4" />
              Back to Press Releases
            </Link>
          </Button>
        </div>

        {/* Press release header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="border-deep-green text-deep-green">
              Press Release
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-near-black mb-6 leading-tight">
            {pressRelease.title}
          </h1>
          
          {/* Dateline */}
          <div className="flex items-center gap-4 text-ink-600 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="size-4" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </header>

        {/* Press release content */}
        <article 
          className="prose prose-lg max-w-none text-ink-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: pressRelease.content }}
        />

        {/* Media contact section */}
        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold text-near-black mb-4">Media Contact</h3>
          <p className="text-ink-600">
            For media inquiries, please contact our press team at{' '}
            <a href="mailto:press@sigmaremote.com" className="text-deep-green hover:underline">
              press@sigmaremote.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
