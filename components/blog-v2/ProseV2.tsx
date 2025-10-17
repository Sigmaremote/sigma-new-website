import * as React from 'react';

export function ProseV2({children}:{children:React.ReactNode}) {
  return (
    <div
      className={[
        // base body color + max width
        "max-w-none text-[#3B3A38]",

        // H2 — clear section gates (works regardless of plugins)
        "[&>h2]:mt-14 [&>h2]:mb-5 [&>h2]:text-[28px] [&>h2]:leading-[1.2] [&>h2]:font-semibold [&>h2]:text-[#1A1A18] [&>h2]:tracking-tight [&>h2]:max-w-[48ch]",

        // H3 — smaller subheads
        "[&>h3]:mt-9 [&>h3]:mb-3 [&>h3]:text-[20px] [&>h3]:leading-[1.3] [&>h3]:font-medium [&>h3]:text-[#1A1A18]",

        // Paragraphs
        "[&>p]:mt-3 [&>p]:mb-5 [&>p]:text-[17px] [&>p]:leading-[1.8]",

        // Lists (and nested elements) — neutral spacing + readable line-height
        "[&_ul]:my-5 [&_ol]:my-5 [&_li]:my-1.5 [&_li]:leading-[1.6] [&_ul]:pl-5 [&_ol]:pl-5 [&_ul]:list-disc [&_ol]:list-decimal",

        // Links + strong
        "[&_a]:text-[#0041C4] hover:[&_a]:underline [&_strong]:text-[#1A1A18]",

        // Blockquote (light, elegant)
        "[&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[17px] [&_blockquote]:leading-[1.7] [&_blockquote]:text-[#3B3A38]/85",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

