# Glossary Rules & Guidelines

## Content Formatting Rules

### 1. Text Preservation
- **CRITICAL**: Always preserve the exact text as provided by the user
- Do not alter, modify, or remove any introductory sentences or contextual content
- Keep all original phrasing, punctuation, and structure intact
- Only remove decorative emojis (not functional ones like ❌ and ✅)

### 2. Emoji Handling
- **Remove all decorative emojis** from glossary content
- **Keep functional emojis**: ❌ and ✅ (these trigger special styling)
- **❌ emoji**: Renders in light red box (`bg-red-50`, `border-red-100`, `text-red-900`)
- **✅ emoji**: Renders in light green box (`bg-green-50`, `border-green-100`, `text-green-900`)
- The emoji itself is stripped from display text but kept in data to trigger styling

### 3. Data Structure Requirements
Each glossary entry must include:
- `slug`: URL-friendly identifier
- `term`: Display name
- `excerpt`: Short description
- `definition`: Full definition
- `how`: Array of "How it works" items
- `why`: Array of "Why it matters" items  
- `example`: Real-world example
- `related`: Array of related terms with labels and hrefs
- `faqs`: Array of FAQ objects with q/a pairs
- `datePublished`: ISO date string

### 4. File Consistency
- **GLOSSARY_STORE** must be identical in both:
  - `/app/glossary/page.tsx` (main glossary page)
  - `/app/glossary/[slug]/page.tsx` (individual term pages)
- Always update both files when adding/modifying glossary entries

### 5. UI Features (Main Glossary Page)
- Show first 9 terms by default
- "See All Terms" button with dark green styling and total count
- Alphabetical filter with pill-style letter buttons
- Dynamic results counter: "Showing 9 of X terms" or "X terms"
- Search functionality across term, excerpt, and definition

### 6. JSON-LD Schema Requirements
Each glossary term page must include:
- WebPage schema
- BreadcrumbList schema  
- Article schema
- FAQPage schema (if FAQs exist)

### 7. Styling Guidelines
- Use Tailwind CSS classes
- Red boxes for warnings/negatives: `bg-red-50 border border-red-100 text-red-900`
- Green boxes for benefits/positives: `bg-green-50 border border-green-100 text-green-900`
- Maintain consistent spacing and typography

## Process Checklist
When adding new glossary terms:
1. ✅ Preserve exact user-provided text
2. ✅ Remove decorative emojis, keep ❌ and ✅
3. ✅ Update GLOSSARY_STORE in both page.tsx files
4. ✅ Include all required data fields
5. ✅ Add proper JSON-LD schemas
6. ✅ Test for syntax errors
7. ✅ Verify UI features work correctly

## Common Mistakes to Avoid
- ❌ Altering user-provided text
- ❌ Removing introductory sentences
- ❌ Forgetting to update both glossary files
- ❌ Missing required data fields
- ❌ Breaking syntax with incomplete replacements
