import { sanitizePressMarkdown } from '@/modules/press/lib/sanitizePress';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

interface ArticleProps {
  content: string;
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(markdown);
  
  return result.toString();
}

export default async function Article({ content }: ArticleProps) {
  const sanitizedContent = sanitizePressMarkdown(content);
  const htmlContent = await markdownToHtml(sanitizedContent);

  return (
    <div className="max-w-none">
      <div 
        className="font-satoshi space-y-6
          [&_h1]:text-[32px] [&_h1]:md:text-[40px] [&_h1]:font-extrabold [&_h1]:tracking-tight [&_h1]:text-neutral-900 [&_h1]:leading-[1.15] [&_h1]:mt-8 [&_h1]:mb-6
          [&_h2]:text-[28px] [&_h2]:md:text-[32px] [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-neutral-900 [&_h2]:leading-[1.15] [&_h2]:mt-12 [&_h2]:mb-6
          [&_h3]:text-[24px] [&_h3]:md:text-[28px] [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-neutral-900 [&_h3]:leading-[1.2] [&_h3]:mt-10 [&_h3]:mb-4
          [&_h4]:text-[20px] [&_h4]:md:text-[24px] [&_h4]:font-semibold [&_h4]:tracking-tight [&_h4]:text-neutral-900 [&_h4]:leading-[1.2] [&_h4]:mt-8 [&_h4]:mb-4
          [&_h5]:text-[18px] [&_h5]:md:text-[20px] [&_h5]:font-semibold [&_h5]:tracking-tight [&_h5]:text-neutral-900 [&_h5]:leading-[1.2] [&_h5]:mt-6 [&_h5]:mb-3
          [&_h6]:text-[16px] [&_h6]:md:text-[18px] [&_h6]:font-semibold [&_h6]:tracking-tight [&_h6]:text-neutral-900 [&_h6]:leading-[1.2] [&_h6]:mt-6 [&_h6]:mb-3
          [&_p]:text-neutral-800 [&_p]:leading-[1.8] [&_p]:text-[17px] [&_p]:mb-6
          [&_p:first-of-type]:text-[19px] [&_p:first-of-type]:md:text-[21px] [&_p:first-of-type]:font-light [&_p:first-of-type]:text-neutral-800 [&_p:first-of-type]:leading-[1.8] [&_p:first-of-type]:mb-8
          [&_ul]:space-y-3 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:marker:text-neutral-600/40 [&_ul]:my-6
          [&_ol]:space-y-3 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:marker:text-neutral-600/40 [&_ol]:my-6
          [&_li]:text-neutral-800 [&_li]:leading-[1.8] [&_li]:text-[17px]
          [&_strong]:font-semibold [&_strong]:text-neutral-900
          [&_em]:italic [&_em]:text-neutral-800
          [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-neutral-400 [&_a]:hover:decoration-neutral-600 [&_a]:transition-colors [&_a]:text-neutral-900 [&_a]:font-medium
          [&_blockquote]:border-l-4 [&_blockquote]:border-neutral-300 [&_blockquote]:bg-neutral-50 [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:rounded-r-lg [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-neutral-700 [&_blockquote]:text-[17px] [&_blockquote]:leading-[1.8]
          [&_hr]:border-neutral-200 [&_hr]:my-12
          [&_code]:bg-neutral-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_code]:text-neutral-800
          [&_pre]:bg-neutral-900 [&_pre]:text-neutral-100 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:text-sm [&_pre]:font-mono
          [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-neutral-100"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
