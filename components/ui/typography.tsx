// components/ui/typography.tsx
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

export function HeroTitle({ className, ...props }: Props) {
  // Desktop ≈ 56–60px, mobile smaller; tight line-height.
  return (
    <h1
      className={cn(
        "font-satoshi font-bold tracking-tightish leading-[1.05] text-balance",
        "text-[36px] sm:text-[44px] md:text-[56px]",
        className
      )}
      {...props}
    />
  );
}

export function SectionTitle({ className, ...props }: Props) {
  // H2
  return (
    <h2
      className={cn(
        "font-satoshi font-semibold tracking-tightish leading-tight",
        "text-[28px] sm:text-[32px] md:text-[36px]",
        className
      )}
      {...props}
    />
  );
}

export function Eyebrow({ className, ...props }: Props) {
  // Small label above titles (e.g., "News" pill text)
  return (
    <p
      className={cn(
        "font-satoshi text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.08em]",
        className
      )}
      {...props}
    />
  );
}

export function Subhead({ className, ...props }: Props) {
  // Lead paragraph under hero/title
  return (
    <p
      className={cn(
        "font-satoshi text-[18px] sm:text-[19px] md:text-[20px] leading-relaxed text-black/70",
        className
      )}
      {...props}
    />
  );
}

export function Body({ className, ...props }: Props) {
  return (
    <p
      className={cn(
        "font-satoshi text-[16px] sm:text-[17px] leading-relaxed text-black/80",
        className
      )}
      {...props}
    />
  );
}

export function BodySmall({ className, ...props }: Props) {
  return (
    <p
      className={cn(
        "font-satoshi text-[14px] leading-relaxed text-black/70",
        className
      )}
      {...props}
    />
  );
}

export function Caption({ className, ...props }: Props) {
  return (
    <p
      className={cn(
        "font-satoshi text-[12px] leading-snug text-black/60",
        className
      )}
      {...props}
    />
  );
}

