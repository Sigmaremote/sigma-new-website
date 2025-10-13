# Sigma Typography System Guide

The Sigma typography system has been successfully implemented using Satoshi font. Here's how to use it:

## ✅ What's Been Implemented

### 1. Font Setup
- **Font**: Satoshi (400, 500, 700) loaded from Fontshare
- **Global CSS**: Updated `app/globals.css` with font import and base styles
- **Tailwind Config**: Extended with `font-satoshi`, letter-spacing utilities

### 2. Typography Components (`components/ui/typography.tsx`)

All components support className overrides and standard HTML props.

#### `<HeroTitle>`
- Usage: Main hero headings
- Sizing: 36px (mobile) → 44px (sm) → 56px (md+)
- Weight: Bold (700)
- Line-height: 1.05 (very tight)
- Tracking: -0.01em

```tsx
import { HeroTitle } from "@/components/ui/typography";

<HeroTitle>Sigma helps you hire, pay and retain anyone</HeroTitle>
```

#### `<SectionTitle>`
- Usage: Section headings (H2)
- Sizing: 28px → 32px → 36px
- Weight: Semibold (600)
- Tracking: -0.01em

```tsx
import { SectionTitle } from "@/components/ui/typography";

<SectionTitle>Scale your workforce</SectionTitle>
<SectionTitle className="text-white">White text example</SectionTitle>
```

#### `<Eyebrow>`
- Usage: Small labels above titles
- Sizing: 12px → 13px
- Weight: Medium (500)
- Transform: Uppercase
- Tracking: 0.08em

```tsx
import { Eyebrow } from "@/components/ui/typography";

<Eyebrow>Featured</Eyebrow>
```

#### `<Subhead>`
- Usage: Lead paragraphs under headings
- Sizing: 18px → 19px → 20px
- Weight: Regular (400)
- Color: black/70
- Line-height: Relaxed

```tsx
import { Subhead } from "@/components/ui/typography";

<Subhead>Easily hire and pay your global workforce.</Subhead>
```

#### `<Body>`
- Usage: Standard body text
- Sizing: 16px → 17px
- Color: black/80
- Line-height: Relaxed

```tsx
import { Body } from "@/components/ui/typography";

<Body>Make onboarding, payments, retention, and compliance painless.</Body>
```

#### `<BodySmall>`
- Usage: Smaller body text
- Sizing: 14px
- Color: black/70

```tsx
import { BodySmall } from "@/components/ui/typography";

<BodySmall>Additional details go here.</BodySmall>
```

#### `<Caption>`
- Usage: Very small text (disclaimers, metadata)
- Sizing: 12px
- Color: black/60

```tsx
import { Caption } from "@/components/ui/typography";

<Caption>© 2025 SigmaRemote. All rights reserved.</Caption>
```

### 3. Button Component (`components/ui/button.tsx`)

Updated with Sigma styling: rounded-full, Satoshi font, shadow hover effects.

**Variants:**
- `primary` - Lime CTA button (HSL(64, 83%, 65%))
- `secondary` - Black background, white text
- `ghost` - Transparent with hover
- `outline` - Border with white background

**Sizes:**
- `lg` - h-12, px-6, text-16px
- `md` - h-11, px-5, text-15px
- `sm` - h-9, px-4, text-14px

```tsx
import { Button } from "@/components/ui/button";

// Primary CTA with link
<Button variant="primary" size="lg" href="/demo">
  Get a Free Payroll Setup →
</Button>

// Regular button (no link)
<Button variant="primary" size="lg" onClick={handleClick}>
  Submit
</Button>

// Secondary
<Button variant="secondary" href="/about">Learn More</Button>

// Ghost
<Button variant="ghost">Cancel</Button>

// Using asChild for custom Link component
<Button variant="primary" asChild>
  <Link href="/demo">Get Started</Link>
</Button>
```

### 4. Badge Component (`components/ui/badge.tsx`)

Updated with Sigma pill style.

**Variants:**
- `default` - White/90 with border
- `secondary` - Black with white text
- `outline` - Transparent with border
- `news` - Same as default

```tsx
import { Badge } from "@/components/ui/badge";

<Badge variant="news">
  <span className="inline-flex h-2 w-2 rounded-full bg-red-500" />
  <span className="text-black/80">News</span>
  <span className="text-black/60">New feature launched</span>
</Badge>
```

## 🎨 Tailwind Utilities

You can also use these classes directly:

### Font
- `font-satoshi` - Applies Satoshi font
- `font-sans` - Also Satoshi (default)

### Letter Spacing
- `tracking-tightish` - -0.01em
- `tracking-tight` - -0.02em

### Examples
```tsx
<h3 className="font-satoshi text-[24px] font-semibold tracking-tightish">
  Custom heading
</h3>

<p className="font-satoshi text-[15px] text-black/70">
  Custom paragraph
</p>
```

## 📝 Complete Hero Example

```tsx
import { HeroTitle, Subhead, Body } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-4 text-center pt-10 md:pt-16">
      {/* News Badge */}
      <div className="flex justify-center">
        <Badge variant="news">
          <span className="inline-flex h-2 w-2 rounded-full bg-red-500" />
          <span className="text-black/80">News</span>
          <span className="text-black/60">
            Flat-Fee USD Payroll Across El Salvador, Panama & Costa Rica
          </span>
        </Badge>
      </div>

      {/* Hero Title */}
      <HeroTitle className="mt-6">
        Sigma helps you hire, pay<br className="hidden sm:block" /> and retain anyone
      </HeroTitle>

      {/* Subhead */}
      <Subhead className="mt-4">
        Easily hire and pay your global workforce. We handle W-8BEN forms,
        local payments, and provide USD Wallets & health benefits for your staff.
      </Subhead>

      {/* Body */}
      <Body className="mt-3">
        Make onboarding, payments, retention, and compliance painless with Sigma.
      </Body>

      {/* CTAs */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <Button size="lg" variant="primary" href="/demo">
          Get a Free Payroll Setup →
        </Button>
        <Button size="lg" variant="ghost" href="/signup">
          Create Account
        </Button>
      </div>
    </section>
  );
}
```

## 🔧 Navigation & Footer Examples

### Nav Links
```tsx
<a className="font-satoshi text-[15px] font-medium text-black/80 hover:text-black">
  Features
</a>
```

### Footer Text
```tsx
import { Caption } from "@/components/ui/typography";

<Caption>© 2025 SigmaRemote. All rights reserved.</Caption>
```

## ✨ Design Tokens Reference

- **Hero Title**: 36-56px, bold, tracking-tightish, leading-[1.05]
- **Section Title**: 28-36px, semibold, tracking-tightish
- **Subhead**: 18-20px, regular, text-black/70
- **Body**: 16-17px, regular, text-black/80
- **Body Small**: 14px, regular, text-black/70
- **Caption**: 12px, regular, text-black/60
- **Eyebrow**: 12-13px, medium, uppercase, tracking-[0.08em]
- **Button Text**: 14-16px, medium
- **Badge**: 12px, medium

## 🎯 Migration Checklist

To apply the new typography system across your site:

1. ✅ Font loaded and configured
2. ✅ Typography components created
3. ✅ Button component updated
4. ✅ Badge component updated
5. ⏳ Update existing pages to use typography components
6. ⏳ Update navigation to use `font-satoshi`
7. ⏳ Update footer to use `Caption` component
8. ⏳ Update all section headings to use `SectionTitle`
9. ⏳ Update all hero sections to use new components

## 🚀 Next Steps

Start replacing raw text elements with the typography components:
- Replace `<h1>` → `<HeroTitle>`
- Replace `<h2>` → `<SectionTitle>`
- Replace lead `<p>` → `<Subhead>`
- Replace body `<p>` → `<Body>`
- Replace small text → `<Caption>` or `<BodySmall>`

The components are fully typed and support all standard HTML attributes plus className overrides!

