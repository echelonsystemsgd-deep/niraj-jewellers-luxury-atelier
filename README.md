# Niraj Jewellers Ltd — Flagship White & Gold Luxury Maison

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS 3](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-gold?style=flat)](LICENSE)

Official digital atelier, luxury showroom, and direct client acquisition engine for **Niraj Jewellers Ltd** — master goldsmiths, bespoke South Asian bridal atelier, and bullion wholesalers established at **136 Uxbridge Road, Hayes, Middlesex, UB4 0JH, UK** since **1984** (42 years of authentic London heritage).

---

## 1. Brand Overview & Heritage

* **Legal Entity:** Niraj Jewellers Ltd (Registered in England & Wales)
* **Established:** 1984 (Over 4 Decades of Continuous In-House Goldsmithing)
* **Flagship Showroom & Workshop:** 136 Uxbridge Road, Hayes, Greater London, UB4 0JH
* **Direct Atelier Contact:** `07955 565137` / `+44 7955 565137`
* **Official Email:** `nirajjewellersuk@gmail.com`
* **Canonical Domain:** `https://www.niraj-jewellers.co.uk`
* **UK VAT Registration:** `GB 842 9617 32`
* **Assay Office Sponsorship:** London Assay Office Leopard's Head Registered (`916` / `750` / `999`)

---

## 2. White & Gold Luxury Maison Design System

The atelier interface is crafted in a **White & Warm Gold Luxury Maison** aesthetic (evoking the prestige of Cartier, Graff, and Harrods Fine Jewellery):

* **Alabaster Silk Canvas:** `#FFFFFF` and `#FAF9F6` backgrounds with delicate champagne hairline borders (`#EADBC8`).
* **Deep 22ct Antique Gold:** `#946A14` and `#855F0E` high-contrast typography, pairing with radiant metallic gold buttons (`#E2C974` → `#C5A059` → `#9E7422`).
* **Deep Obsidian Charcoal:** `#141416` primary typography ensuring **14.5:1 WCAG 2.2 AA** contrast.
* **Vivaldi Calligraphy Script Font (`--font-vivaldi`):** Authentic Friedrich Peter calligraphy font loaded locally via `next/font/local` for romantic editorial highlights and master goldsmith signatures.
* **Roman Imperial Serif Headings:** Classic serif headings with generous tracking, paired with **Plus Jakarta Sans** for high-legibility technical specifications.
* **Official Insignia (`public/NIRAJ_LOGO9.png`):** High-resolution gold monogram crowned with a brilliant-cut solitaire diamond, heraldic wings, and the verified heritage stamp: **`SINCE 1984`**.

---

## 3. Multi-Page Architecture & Route Inventory

The platform is structured across **13 high-authority, fully-indexed Next.js 15 routes**:

| Route | Page Title & Scope | SEO Focus & Highlights |
| :--- | :--- | :--- |
| **`/`** | **Flagship Atelier Home** | Cinematic hero with royal crest watermark, 54-piece vault carousels, Live LBMA Bullion Ticker, 3D CAD journey, repairs bento, verified reviews, and London opening hours. |
| **`/about`** | **About Us — Heritage Since 1984** | 42-year goldsmith history, generational family heritage, master craftsman biography, workshop ethics, and London Assay hallmarking standards. |
| **`/collections`** | **54-Piece Masterpiece Vault** | Curated 54-piece portfolio across 22ct bridal suites, syndicate Polki, antique Kundan, solid gold kadas, and diamond rings with in-page modal viewers and video reels. |
| **`/bespoke`** | **Bespoke 3D CAD Atelier** | Direct workshop commissions, loose GIA diamond inspection, 3D wax prototyping, and interactive turnaround/budget calculator. |
| **`/repairs`** | **Same-Day In-House Repairs** | On-site laser gold soldering, ring resizing in 4 hours, diamond claw retipping, ultrasonic cleaning, and watch servicing on Uxbridge Road. |
| **`/gold-rates`** | **Live LBMA Bullion Rates** | Real-time spot gold prices per gram/tola (24ct, 22ct, 18ct), investment bullion bars, and direct scrap gold trade-in valuations. |
| **`/showroom`** | **Hayes Flagship Showroom Hub** | 136 Uxbridge Road visitor guide, live opening status, Google Maps navigation, parking guidance, and Heathrow travel proximity. |
| **`/faqs`** | **Frequently Asked Questions** | Searchable knowledge base addressing bridal suites, hallmarking law, bespoke deposits, repair timelines, and bullion policies. Includes `FAQPage` JSON-LD schema. |
| **`/articles`** | **Goldsmith Knowledge Hub** | Authoritative editorial guides on gold purity, 3D CAD casting, laser repair techniques, and precious metal investment. |
| **`/articles/[slug]`** | **Dynamic Editorial Guides** | In-depth articles with dedicated Schema.org `Article` metadata, reading times, table-of-contents, and direct WhatsApp enquiry links. |
| **`/contact`** | **Direct Atelier Concierge** | VIP WhatsApp routing (07955 565137), telephone call buttons, consultation scheduling form, and corporate VAT credentials. |
| **`/privacy`** | **Privacy Policy** | UK Data Protection Act 2018 & UK GDPR data governance policies. |
| **`/terms`** | **Terms & Hallmarking Guarantee** | Commercial terms, bespoke deposits, UK Hallmarking Act 1973 compliance, and bullion trading regulations. |
| **`/test-404` & `not-found`** | **Alchemist's Crucible 404 Forge** | Interactive animated gold casting crucible pouring liquid gold at 1064°C onto an anvil, complete with 60fps HTML5 canvas spark physics and temperature boost controls. |

---

## 4. Metadata, Social Preview & SEO Architecture

The metadata engine is architected for maximum search visibility and instant, high-conversion social previews:

### 4.1 Master Canonical Domain Standard
All canonical URLs, OpenGraph properties, sitemaps, and robots directives are strictly standardized to:
```
https://www.niraj-jewellers.co.uk
```

### 4.2 Dynamic `metadataBase` Resolution
Located in `app/layout.tsx`, `metadataBase` dynamically resolves across environments:
1. `NEXT_PUBLIC_SITE_URL` (Production override)
2. `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` (Automatic Vercel preview branch support)
3. Fallback to `https://www.niraj-jewellers.co.uk`

### 4.3 Social Preview Cards (Open Graph & Twitter)
- **Static Master Snapshot:** [public/og-image.jpg](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/niraj-jewellers-luxury-atelier/public/og-image.jpg) (1200×630, 101.0 KB) — White & Gold Luxury Maison design with official gold crest, "SINCE 1984", 54-piece vault highlights, live gold rates ticker, and direct phone lines. Instant thumbnail unfurling across WhatsApp, iMessage, Twitter, Facebook, and LinkedIn.
- **Lossless Version:** [public/og-image.png](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/niraj-jewellers-luxury-atelier/public/og-image.png) (1200×630, 104.5 KB).
- **Dynamic Edge Fallback:** [app/opengraph-image.tsx](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/niraj-jewellers-luxury-atelier/app/opengraph-image.tsx) rendered via `@vercel/og` matching the white & gold aesthetic.

### 4.4 Complete Physical App Icon Suite in `public/`
Every standard browser and mobile device icon is generated from the official `NIRAJ_LOGO9.png` emblem:
- `public/favicon.ico` — Multi-resolution binary ICO (16×16, 32×32, 48×48)
- `public/favicon.svg` — Scalable gold monogram vector
- `public/apple-touch-icon.png` — 180×180 PNG for iOS home screens
- `public/icon-192.png` & `public/icon-512.png` — PWA standard icons
- `public/icon-maskable-192.png` & `public/icon-maskable-512.png` — Android adaptive icons with 20% safe-zone margin on white canvas
- `public/mstile-150x150.png` & `public/browserconfig.xml` — Windows Start tiles (`TileColor: #FFFFFF`)
- `public/safari-pinned-tab.svg` — Monochrome vector with `#C5A059` pin color
- `public/site.webmanifest` & `app/manifest.ts` — Standalone PWA manifest (`theme_color: #FFFFFF`)

### 4.5 Schema.org JSON-LD Linked Graph
Root layout injects a linked JSON-LD graph:
- **`WebSite`:** Includes Sitelinks `SearchAction` (`/collections?search={search_term_string}`).
- **`JewelryStore` / `LocalBusiness` / `Organization`:** Legal entity name (`Niraj Jewellers Ltd`), VAT number, founding date (`1984`), geo-coordinates (`51.5229, -0.4228`), opening hours, telephone, price range, and verified customer reviews.
- **`OfferCatalog`:** Bespoke 22ct Bridal, In-House Repairs, Bullion Trading, 3D CAD Modeling, and Ancestral Gold Melting.
- **Subpage Schemas:** `BreadcrumbList` on all subpages, `FAQPage` on `/faqs`, and `Article` on `/articles/[slug]`.

### 4.6 Local SEO & Geo-Targeting
HTML `<head>` headers declare:
- `geo.region`: `GB-HIL` (London Borough of Hillingdon)
- `geo.placename`: `Hayes, London`
- `geo.position`: `51.5229;-0.4228`
- `ICBM`: `51.5229, -0.4228`

---

## 5. Technology Stack & Key Libraries

```
Next.js 15.5 (App Router, Server Components & Actions)
React 19.0 (Hooks, Concurrent Mode)
TypeScript 5.9 (Strict Type-Safety)
Tailwind CSS 3.4 (Custom White & Gold Palette, Typography Plugin)
next/font/local (Friedrich Peter Vivaldi Calligraphy Font)
Sharp 0.35 (High-Performance Server-Side Image & Icon Generation)
Framer Motion 11.18 (Luxury Smooth Transitions & Floating Elements)
Lucide React 0.469 (Crisp Minimalist Icons)
Canvas Confetti 1.9 (Celebratory Quote & Interaction Bursts)
HTML5 Canvas (60fps Real-Time Spark Physics Engine on 404 Forge)
```

---

## 6. Development, Build & Verification Scripts

### Local Development
```bash
npm run dev
# Starts local development server on http://localhost:3000
```

### Production Build
```bash
npm run build
# Compiles all 20 static & dynamic routes with zero TypeScript or route errors
```

### Asset Generation Suite
```bash
node scripts/generate_metadata_assets.mjs
# Generates all multi-resolution icons, favicons, manifests, and 1200x630 OG preview cards from NIRAJ_LOGO9.png
```

### Master Metadata & Asset Verification
```bash
node scripts/verify_metadata.mjs
# Audits all physical brand assets, checks route title snippets, and validates canonical domain standardization
```

### Comprehensive Link & Route Verification
```bash
node scripts/verify_all.mjs
# Verifies all internal anchors, external targets, WhatsApp links, and Schema.org structures
```

---

## 7. Business & Legal Credentials

* **Company Name:** Niraj Jewellers Ltd
* **Trading Name:** Niraj Jewellers
* **Physical Address:** 136 Uxbridge Road, Hayes, Middlesex, UB4 0JH, Greater London
* **UK VAT Number:** GB 842 9617 32
* **Telephone:** 07955 565137 / +44 7955 565137
* **UK Hallmarking Compliance:** London Assay Office (Goldsmiths' Hall, London EC2V 8AQ)
* **Copyright:** © 2026 Niraj Jewellers Ltd. All Rights Reserved.
