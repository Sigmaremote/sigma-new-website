# Country Guide Template Rules

## Overview
All country guides must follow the exact same structure and format as the Mexico country guide. This ensures consistency across all country pages.

## Template Structure

### 1. File Location
- Create new country guide at: `app/country-guides/[country-slug]/page.tsx`
- Example: `app/country-guides/colombia/page.tsx`

### 2. Required Imports
```typescript
import { Metadata } from 'next';
import Script from 'next/script';
import CountryGuideLayout from '../_components/CountryGuideLayout';
import CountryHero from '../_components/CountryHero';
import AtAGlance from '../_components/AtAGlance';
import HiringOptions from '../_components/HiringOptions';
import EmployerCostsTable from '../_components/EmployerCostsTable';
import QuickComplianceChecklist from '../_components/QuickComplianceChecklist';
import PayingWorkers from '../_components/PayingWorkers';
import WhySigmaMatrix from '../_components/WhySigmaMatrix';
import CTAHireBanner from '../_components/CTAHireBanner';
import FAQAccordion from '../_components/FAQAccordion';
import Breadcrumbs from '../_components/Breadcrumbs';
import CountrySwitcher from '../_components/CountrySwitcher';
import { countryContent } from '../../../modules/country-guides/data/content';
import { countryIndexList } from '../../../modules/country-guides/data/indexList';
```

### 3. Content Configuration
```typescript
const content = countryContent.[country-slug];
const [country]Data = countryIndexList.find(country => country.slug === '[country-slug]');
```

### 4. Metadata Structure
- Update canonical URL to match country slug
- Update OpenGraph URL to match country slug
- Update Twitter image URL to match country name
- Keep all other metadata structure identical

### 5. TOC Items (Always the same)
```typescript
const tocItems = [
  { id: 'at-a-glance', title: 'At a Glance' },
  { id: 'hiring-options', title: 'Hiring Options' },
  { id: 'employer-costs', title: 'Employer Costs' },
  { id: 'compliance', title: 'Compliance' },
  { id: 'paying-workers', title: 'Paying Workers' },
  { id: 'why-sigma', title: 'Why Sigma' },
  { id: 'faq', title: 'FAQ' },
];
```

### 6. JSON-LD Structure
- Keep exact same structure
- Only update URLs to match country slug
- Keep all other schema.org properties identical

### 7. Component Order (Must be exact)
```typescript
<CountryGuideLayout tocItems={tocItems}>
  <div className="max-w-[820px] mx-auto space-y-10 md:space-y-14">
    {/* Breadcrumbs - Desktop */}
    <div className="hidden lg:block">
      <Breadcrumbs countryName={content.name} />
    </div>

    {/* Country Switcher */}
    <CountrySwitcher />

    {/* Hero Section */}
    <CountryHero 
      content={content} 
      heroImage={[country]Data?.image || "fallback-image-url"}
    />

    {/* At-a-Glance */}
    <AtAGlance data={content.atAGlance} />

    {/* Hiring Options */}
    <HiringOptions content={content} />

    {/* Employer Costs */}
    <EmployerCostsTable 
      data={content.costTable} 
      intro={content.employerCostsIntro}
    />

    {/* Compliance */}
    <QuickComplianceChecklist complianceBullets={content.complianceBullets} />

    {/* Paying Workers */}
    <PayingWorkers content={content} />

    {/* Why Sigma Matrix */}
    <WhySigmaMatrix uxRows={content.uxRows} />

    {/* CTA Banner */}
    <CTAHireBanner />

    {/* FAQ */}
    <FAQAccordion faqs={content.faq} />

    {/* Footer Notice */}
    <div className="pt-8 border-t border-black/10">
      <p className="text-sm text-ink-400 text-center">
        Updated {new Date(content.lastUpdatedISO).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long',
          day: 'numeric'
        })}. Consult local experts for personalized advice.
      </p>
    </div>
  </div>
</CountryGuideLayout>
```

## Content Data Requirements

### 1. Add Country to `modules/country-guides/data/content.ts`
- Follow exact same structure as Mexico
- Include ALL required fields: slug, name, region, hero, intro, **minimumWage**, atAGlance, hiringOptions, employerCostsIntro, costTable, complianceBullets, **benefitsPackage**, **countryStats**, **misclassificationRisks**, payingWorkers, uxRows, faq, lastUpdatedISO
- **CRITICAL**: Missing any of these fields will cause the page to fail to load

### 2. Add Country to `modules/country-guides/data/indexList.ts`
- Include: slug, name, region, shortDescription, image, capital, currency, officialLanguage

## Rules for New Country Guides

1. **NEVER** change the component structure or order
2. **NEVER** modify the styling classes
3. **NEVER** add or remove components
4. **ONLY** change:
   - Country slug in URLs
   - Country name in metadata
   - Content data in the content.ts file
   - Hero image URL
   - Function name (e.g., `MexicoPage` → `ColombiaPage`)

## Example Template Usage

To create a new country guide for "Chile":

1. Copy `app/country-guides/mexico/page.tsx`
2. Rename to `app/country-guides/chile/page.tsx`
3. Replace all instances of "mexico" with "chile"
4. Replace "Mexico" with "Chile" in metadata
5. Update function name to `ChilePage`
6. Add Chile data to `content.ts` and `indexList.ts`

This ensures 100% consistency across all country guides while only changing the content.
