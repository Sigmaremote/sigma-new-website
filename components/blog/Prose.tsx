import * as React from 'react';

export function Prose({children}:{children:React.ReactNode}) {
  return (
    <div className={[
      "prose max-w-none",
      // H1 (u hero-u, ali fallback)
      "[&>h1]:text-[40px] [&>h1]:leading-[1.15] [&>h1]:mb-3 [&>h1]:text-gray-900",
      // H2
      "[&>h2]:mt-12 [&>h2]:mb-3 [&>h2]:text-[28px] [&>h2]:leading-[1.2] [&>h2]:tracking-tight [&>h2]:text-gray-900 [&>h2]:font-semibold",
      // H3
      "[&>h3]:mt-7 [&>h3]:mb-2.5 [&>h3]:text-[20px] [&>h3]:leading-[1.25] [&>h3]:text-gray-900",
      // Body
      "prose-p:text-[17px] prose-p:leading-7 prose-p:text-gray-800",
      "prose-ul:my-3 prose-ol:my-3 prose-li:my-1.5 prose-li:text-gray-800",
      // Link
      "prose-a:text-lime-600 hover:prose-a:underline prose-a:font-medium",
      // Blockquote manji
      "prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:italic",
      "prose-blockquote:text-[18px] prose-blockquote:leading-8 prose-blockquote:text-gray-700",
      // Slike
      "prose-img:rounded-xl"
    ].join(" ")}>
      {children}
    </div>
  );
}