# Sigma Country Guide

A production-ready Next.js 14 application for global hiring guides, built with TypeScript and Tailwind CSS.

## ⚠️ Important: Protected Components

**Do not modify files under `components/shared/*`. These are source of truth for Navbar/Footer.**

The shared components (`components/shared/Navbar.tsx` and `components/shared/Footer.tsx`) are designed to mimic the sigmaremote.com website and should not be modified without explicit permission. Always start your prompts with this reminder to prevent accidental modifications.

## Features

- **Country Guides**: Comprehensive guides for hiring in Mexico, Colombia, Argentina, and Brazil
- **Search & Filter**: Find countries by name or region
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: JSON-LD structured data and metadata
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: Keyboard and screen-reader friendly components
- **Sigma Branding**: Authentic sigmaremote.com design with proper color scheme and typography

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image component with Unsplash

## Project Structure

```
/app
  /(country-guides)          # Route group for country guides
    /country-guides/
      /page.tsx             # Country guides index
      /[slug]/page.tsx      # Dynamic country pages
  /layout.tsx               # Root layout
  /page.tsx                 # Home page
/components
  /shared                   # Protected Sigma branding components
    Navbar.tsx              # Sigma navbar (DO NOT MODIFY)
    Footer.tsx              # Sigma footer (DO NOT MODIFY)
  Container.tsx             # Layout container
/modules/country-guides
  /components               # Country guide specific components
  /data                     # Content and index data
  /types.ts                 # TypeScript types
/lib
  seo.ts                    # SEO utilities
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Brand Colors

The application uses Sigma's official brand colors:

- **Lime**: `#D6FF57` - Primary accent color
- **Off-white pill**: `#F2F3F1` - Secondary background
- **Dark green text**: `#0C2E1C` - Primary text color
- **Footer bg tint**: `#EAFDB3` - Footer background

These colors are defined in `tailwind.config.ts` and used throughout the application to maintain brand consistency.

## Country Guides

The application includes detailed guides for:

- **Mexico**: North American market with competitive costs
- **Colombia**: Growing tech sector with modern labor laws
- **Argentina**: Highly educated workforce with complex regulations
- **Brazil**: Largest talent pool in Latin America

Each guide includes:
- At-a-glance statistics
- Hiring options (Contractors, EOR, Own Entity)
- Employer cost breakdowns
- Compliance requirements
- FAQ sections
- UX comparison tables

## SEO Features

- JSON-LD structured data (WebPage, BreadcrumbList, Article, FAQPage)
- Open Graph and Twitter Card metadata
- Canonical URLs
- Semantic HTML structure

## Future Extensions

This project is designed to be easily extensible for:
- Additional countries
- Pricing pages
- Blog functionality
- User authentication
- API integrations