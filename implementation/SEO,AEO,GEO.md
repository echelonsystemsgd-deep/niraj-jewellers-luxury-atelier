# Niraj Jewellers Atelier — SEO, AEO & GEO Master Implementation Plan

> **Target Goal**: Elevate Niraj Jewellers into the authoritative #1 entity for British-Asian luxury bespoke goldsmithing, live bullion trading, and same-day jewellery repairs across Traditional Search (Google/Bing SEO), Answer Engines (Google AI Overviews, Siri, Voice AEO), and Generative Engine Optimization (Perplexity, ChatGPT Search, Gemini, Claude GEO).

---

## 1. Executive Strategy & Pillars

```
                     ┌──────────────────────────────────────────┐
                     │ NIRAJ JEWELLERS KNOWLEDGE GRAPH & ENTITY │
                     └────────────────────┬─────────────────────┘
                                          │
       ┌──────────────────────────────────┼──────────────────────────────────┐
       ▼                                  ▼                                  ▼
 ┌───────────┐                      ┌───────────┐                      ┌───────────┐
 │    SEO    │                      │    AEO    │                      │    GEO    │
 │ (Crawlers)│                      │  (Answers)│                      │  (Gen AI) │
 └─────┬─────┘                      └─────┬─────┘                      └─────┬─────┘
       │                                  │                                  │
  • Canonical tags                   • Answer-First format              • High statistical density
  • Dynamic sitemap.xml              • 40-50 word direct summaries      • Direct quotes from Viky
  • Explicit robots.txt              • Schema: FAQPage, HowTo           • Entity connections (sameAs)
  • Meta titles & descriptions       • Comparison tables                • E-E-A-T Person credentials
  • Fast crawl indexability          • Speakable & Q&A snippets         • Comprehensive /articles hub
```

---

## 2. Order of Operations

### Step 1: On-Page Knowledge Hub (`/articles`) & Contextual FAQs
1. **Cornerstone Editorial Content (`/articles`)**:
   - Establish `/app/articles/page.tsx` as a luxury Editorial Journal.
   - Establish dedicated, deep-dive articles with high topical authority:
     1. `/articles/22ct-vs-24ct-gold-hallmarking-guide`: Hallmarking Act 1973, Leopard's Head, fineness (916 vs 999 vs 750), durability for bridal suites.
     2. `/articles/bespoke-3d-cad-jewellery-process`: From rough sketch to Rhino/Matrix CAD render, 3D wax printing, lost-wax investment casting, and hand stone setting.
     3. `/articles/same-day-laser-jewellery-repair-guide`: Why laser welding preserves hallmarks and thermal integrity compared to flame torches; ring resizing, retipping.
     4. `/articles/buying-selling-gold-bullion-london`: LBMA spot benchmarks, sovereigns, 1kg bars, scrap purity testing with electronic trade scales, capital gains tax rules on Britannia/Sovereign gold.
2. **Contextual FAQs on Subpages**:
   - Add targeted Q&As to `/bespoke`, `/repairs`, and `/gold-rates` answering specific user search intents with Answer-First formatting.
   - Integrate freshness timestamps ("Updated: November 2026", LBMA live sync indicators).

### Step 2: In-Code JSON-LD Semantic Web Graph
1. **Root Graph (`app/layout.tsx`)**:
   - Add `AggregateRating` and top `Review` items from `data/reviews-data.ts` to `JewelryStore`.
   - Add rich `Person` schema for Master Goldsmith Viky (`knowsAbout`, `jobTitle`, `alumniOf`, `awards`).
   - Add `hasOfferCatalog` with comprehensive services and repairs.
2. **Page-Specific Schemas**:
   - `/bespoke`: `Service` + `HowTo` schema (step-by-step CAD workflow).
   - `/repairs`: `Service` + `PriceSpecification` for all repair tiers.
   - `/gold-rates`: `FinancialProduct` & `Service` markup.
   - `/articles`: `CollectionPage` / `Blog` schema; `BlogPosting` / `Article` schema for each article.
   - Global: Reusable `BreadcrumbList` schema for all subroutes.

### Step 3: Metadata Audit Across All Pages
1. Audit and standardize title tags, descriptions, OpenGraph, Twitter cards, and canonical URLs.
2. Ensure conversational search query keywords (e.g. "where to melt family gold in London", "same day ring resizing Uxbridge road").

### Step 4: Dynamic Sitemap (`app/sitemap.ts`)
1. Include all routes: `/`, `/collections`, `/bespoke`, `/repairs`, `/gold-rates`, `/showroom`, `/contact`, `/privacy`, `/terms`, `/articles`, and individual article slugs.
2. Reflect realistic `changeFrequency` and accurate `lastModified` date objects.

### Step 5: Gatekeeping & AI Bot Authorization (`app/robots.ts`)
1. Provide explicit directives for search & generative AI agents:
   - `userAgent: "*"`
   - `userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Google-Extended", "Applebot-Extended"]`
2. Disallow private paths (`/api/`, `/_next/`, sensitive environment endpoints).
3. Confirm pointer to `https://nirajjewellers.co.uk/sitemap.xml`.

---

## 3. Verification & Quality Gates
- Execute Next.js production build (`npm run build`) ensuring zero TypeScript and linting errors.
- Run automated metadata and schema validation scripts.
- Confirm all personal secrets and API endpoints remain protected.


---

## 4. Verification & Production Build Report

- **Status**: PASSED (0 Errors, 0 Warnings)
- **Framework**: Next.js 15 (App Router, React 19)
- **Static Pages Generated**: 25/25 routes pre-rendered successfully
- **Production Build**: Verified with exit code 0 via `next build`
- **Metadata Asset Verification**: Verified via `scripts/verify_metadata.mjs` (0 fails)

### Pre-Rendered Routes Audit:
1. `/` (Static)
2. `/articles` (Static)
3. `/articles/22ct-vs-24ct-gold-hallmarking-guide` (SSG)
4. `/articles/bespoke-3d-cad-jewellery-process` (SSG)
5. `/articles/same-day-laser-jewellery-repair-guide` (SSG)
6. `/articles/buying-selling-gold-bullion-london` (SSG)
7. `/bespoke` (Static)
8. `/collections` (Static)
9. `/contact` (Static)
10. `/gold-rates` (Static)
11. `/repairs` (Static)
12. `/showroom` (Static)
13. `/privacy` (Static)
14. `/terms` (Static)
15. `/sitemap.xml` (Static XML Feed)
16. `/robots.txt` (Static Text Feed)
17. `/api/gold-rates` (Dynamic Server Route)

### Protection & Privacy Verification:
- All `/api/` endpoints are explicitly disallowed in `robots.txt`.
- No sensitive API keys or personal credentials exposed.
- Only verified public trade contact points (`+447955565137`, showroom address) are present.
