# Niraj Jewellers Ltd — Flagship Mayfair Vault Luxury Atelier

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS 3](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-gold?style=flat)](LICENSE)

Official digital atelier, luxury showroom, and direct client acquisition platform for **Niraj Jewellers Ltd** — master goldsmiths, bespoke South Asian bridal atelier, and bullion wholesalers established at **136 Uxbridge Road, Hayes, Middlesex, UB4 0JH, UK** since **1984** (over 4 decades of continuous London heritage).

---

## 1. Brand Overview & Heritage

* **Legal Entity:** Niraj Jewellers Ltd (Registered in England & Wales)
* **Company Registration Number:** `05074588`
* **UK VAT Number:** `GB 674 7451 05` (VAT No: `674745105`)
* **Established:** 1984 (Generational Bespoke Goldsmithing & Precious Metal Wholesaling)
* **Flagship Showroom & Workshop:** 136 Uxbridge Road, Hayes, Middlesex, UB4 0JH, Greater London
* **Showroom Landline:** `020 8573 9323` / `+44 20 8573 9323`
* **Workshop Mobile & WhatsApp:** `07955 565137` / `+44 7955 565137`
* **Official Email:** `nirajjewellersuk@gmail.com`
* **Canonical Domain:** `https://www.niraj-jewellers.co.uk`
* **Official Facebook:** `https://www.facebook.com/p/Niraj-Jewellers-Ltd-100063525010609/`
* **Assay Office Accreditation:** London Assay Office Leopard's Head Hallmarked (`916` 22ct / `750` 18ct / `999` 24ct Fine Gold)
* **Showroom Access Policy:** **No appointment required** — walk-in consultations, jewellery viewings, on-site bench repairs, and bullion transactions are warmly welcomed anytime during opening hours.
* **Official Opening Hours:**
  - **Monday:** 12:00 – 17:00 (12:00 PM – 5:00 PM)
  - **Tuesday – Saturday:** 11:00 – 17:30 (11:00 AM – 5:30 PM)
  - **Sunday:** Closed (Open select festive Sundays prior to Diwali, Karva Chauth & Christmas)
* **Google Business Profile:** [https://share.google/UzzobueZI6BXs8GZQ](https://share.google/UzzobueZI6BXs8GZQ) (4.3★ Verified Rating)

---

## 2. Mayfair Vault Luxury Design System

The platform is designed in accordance with the **Mayfair Vault Luxury Palette** (inspired by London's high-jewellery institutions including Cartier, Graff, and Bond Street ateliers):

### 2.1 Approved Colour Tokens (`tailwind.config.ts`)
* **Navy (`#1F2A44`):** Primary regal dark token used for high-contrast typography, hero accents, and refined luxury backdrops.
* **Warm Beige (`#E8DCC8`):** Subtle champagne highlight and secondary button stroke.
* **Soft Gold (`#C6A75E`):** Pure metallic gold tone for CTAs, badges, border hairlines, and decorative accents.
* **Cream (`#F6F1E9`):** Silken warm background tint providing depth without harsh stark white glare.
* **Ivory (`#FAF7F2`):** Pristine background foundation for content cards and vitrines.
* **WhatsApp Green (`#25D366`):** Official high-converting emerald tone for direct atelier chat CTAs.
* **Charcoal Slate (`#141416` / `#4A4A52`):** Ultra-readable body copy meeting **WCAG 2.2 AA (14.5:1)** contrast standards.

### 2.2 Typography Hierarchy
* **Cormorant Garamond / Roman Serif:** Classical editorial serif for primary headings (`h1`, `h2`, `h3`) with generous tracking.
* **Alex Brush (Google Font OFL, `--font-alex-brush`):** Expressive, flowing script for delicate cursive subtitles ("Bespoke artistry forged with micron precision").
* **Friedrich Peter Vivaldi Calligraphy (`--font-vivaldi`):** Loaded locally for master goldsmith signatures and heritage flourishes.
* **Plus Jakarta Sans:** High-legibility geometric sans-serif for technical specifications, bullion weights, gram pricing, and tabular data.

### 2.3 Non-Vibecoded Visual Standards
* **Repeated Diamond Vitrine:** Hero incorporates a central diamond jewellery vitrine video loop with gold hairline borders and crisp contrast — 0 dark muddy blur overlays.
* **Zero Layout Clutter:** Ample whitespace, balanced column structures, and subtle gold hairline separators.
* **Touch & Accessibility:** Strict minimum 44px tap targets for all interactive controls, buttons, and drawer toggles.

### 2.4 Unified Navigation & Instant Scroll Architecture
* **Fixed Pinned Header:** Pinned navigation (`fixed top-0 left-0 right-0 z-50`) across all pages with zero layout shift via `<div className="h-18 sm:h-20 shrink-0" />` spacer.
* **Dynamic Scroll Glass:** Switches from subtle ivory foundation to backdrop-blurred translucent glass with warm shadow elevation (`bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E7E2DA] shadow-[0_4px_24px_-4px_rgba(20,20,22,0.08)]`) on scroll.
* **Mobile Header Landline:** Direct `020 8573 9323` telephone button visible right on mobile header alongside the full-screen hamburger menu.
* **Universal Scroll Restoration (`components/common/ScrollRestorationHandler.tsx`):** Listens to `pathname` changes and instantly resets viewport coordinates (`window.scrollTo({ top: 0, left: 0, behavior: 'instant' })`), ensuring users navigating between pages always start at the very top.

---

## 3. Truthful Asset Inventory & Deduplication

The repository features **54 distinct media assets** with **100% 1:1 unique piece mapping** across both frontend client views and database schemas (`scripts/schema.sql`):

* **49 Curated Collections Media Files** (`public/images/collections/`):
  - 44 High-Resolution Still Photography Frames (22ct Bridal Chokers, Syndicate Polki Suites, Antique Kundan Necklaces, Solitaire Diamond Rings, Heavy Solid Gold Kadas, Temple Jewellery, Mangalsutras, and Men's Chains).
  - 5 High-Definition 1080p Video Reels with `.jpg` poster fallbacks.
* **3 Workshop & Repair Media Files** (`public/images/workshop/`):
  - Direct bench photography of laser welding, ultrasonic steam cleaning, and trade-certified digital carat scales.
* **2 3D CAD Design Media Files** (`public/images/cad/`):
  - Digital wireframes and 3D resin wax models for custom bridal commissions.
* **Zero Duplicates Guarantee:** Every single collection card, timeline step, and repair bento item on the homepage and `/collections` displays a unique, non-repeating photographic piece.

---

## 4. Multi-Page Architecture & Route Inventory

Structured across **35 high-authority, fully-indexed Next.js 15 routes**:

| Route | Page Title & Scope | SEO / AEO Focus |
| :--- | :--- | :--- |
| **`/`** | **Flagship Atelier Home** | Hero video vitrine, curated showcase, 4-step 3D CAD journey, repairs bento, differentiators, reviews, live hours hub, hallmarking guide, and FAQs. |
| **`/atelier`** | **Digital Flagship Atelier (Reels & 54-Piece Vault)** | Editorial video-first atelier, full 54-piece vault with synonym search, same-day bench repairs, Hayes showroom dossier modal, and direct WhatsApp VIP inquiry. |
| **`/about`** | **About Us — Heritage Since 1984** | 42-year goldsmith history, generational family heritage, master craftsman biography, workshop ethics, and London Assay accreditation. |
| **`/collections`** | **54-Piece Masterpiece Vault** | 54-piece portfolio across 22ct bridal, Polki, Kundan, solid gold kadas, and diamond rings with full-screen reel modals. |
| **`/bespoke`** | **Bespoke 3D CAD Atelier** | Direct workshop commissions, loose GIA diamond inspection, 3D wax prototyping, and interactive turnaround/budget calculator. |
| **`/repairs`** | **Same-Day In-House Repairs** | On-site laser gold soldering, ring resizing in 4 hours, diamond claw retipping, ultrasonic cleaning, and watch servicing on Uxbridge Road. |
| **`/gold-rates`** | **Live LBMA Bullion Rates** | Real-time spot gold prices per gram/tola (24ct, 22ct, 18ct), investment bullion bars, and direct scrap gold trade-in valuations. |
| **`/showroom`** | **Hayes Flagship Showroom Hub** | 136 Uxbridge Road visitor guide, live opening status, Google Maps navigation, parking guidance, and Heathrow travel proximity. |
| **`/faqs`** | **Frequently Asked Questions** | Searchable knowledge base addressing bridal suites, hallmarking law, bespoke deposits, repair timelines, and bullion policies. Includes `FAQPage` JSON-LD schema. |
| **`/articles`** | **Goldsmith Knowledge Hub** | Authoritative editorial guides on gold purity, 3D CAD casting, laser repair techniques, and precious metal investment. |
| **`/articles/[slug]`** | **Dynamic Editorial Guides** | In-depth articles with dedicated Schema.org `Article` metadata, reading times, table-of-contents, and direct WhatsApp links. |
| **`/contact`** | **Direct Atelier Concierge** | VIP WhatsApp routing (07955 565137), telephone call buttons, consultation form, and corporate VAT credentials. |
| **`/privacy`** | **Privacy Policy** | UK Data Protection Act 2018 & UK GDPR data governance policies. |
| **`/terms`** | **Terms & Hallmarking Guarantee** | Commercial terms, bespoke deposits, UK Hallmarking Act 1973 compliance, and bullion trading regulations. |
| **`/test-404` & `not-found`** | **Alchemist's Crucible 404 Forge** | Interactive animated gold casting crucible pouring liquid gold at 1064°C onto an anvil with 60fps HTML5 canvas spark physics. |

---

## 5. SEO, AEO & GEO Optimization Framework

### 5.1 Search Engine Optimization (SEO)
* **Master Canonical Domain:** Strict canonicalization across all pages to `https://www.niraj-jewellers.co.uk`.
* **Dynamic OpenGraph & Twitter Cards:** 1200×630 pixel previews with official emblem, 54-piece highlights, and direct workshop telephone lines.
* **Native Metadata Sitemaps & Robots:** Auto-generated `sitemap.xml` with priority weighting and dynamic `robots.txt` directives.
* **301 Redirect:** Permanent redirect from legacy `/bullion` to `/gold-rates`.

### 5.2 Answer Engine Optimization (AEO)
Optimized for AI search engines (Perplexity, Google AI Overviews, SearchGPT, Claude):
* **Robots Permissions:** Explicit allow rules for `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, and `Amazonbot`.
* **Structured Q&A Schema (`FAQPage`):** Full JSON-LD question-and-answer pairs covering hallmarking legality, 22ct vs 24ct purities, same-day repair feasibility, LBMA gold pricing formulas, and walk-in consultation availability.
* **Direct Declarative Prose:** Clear, extractable factual statements throughout editorial guides and service pages.

### 5.3 Generative Engine Optimization (GEO)
Hyper-localized schema and geo-targeting:
* **Microdata Geo-Coordinates:** Latitude `51.5229`, Longitude `-0.4228`.
* **Locality Identifiers:** Region `GB-HIL` (London Borough of Hillingdon), Placename `Hayes, London`, Postcode `UB4 0JH`.
* **Rich Linked Entity Graph:** Connected `@type: ["JewelryStore", "LocalBusiness", "Organization"]` with verified opening hours, London Assay Office sponsorship, price ranges, and customer review aggregates (5.0 rating across 140+ reviews).

---

## 6. WhatsApp Routing Engine (`lib/whatsapp.ts`)

Natural, human-sounding WhatsApp click-to-chat links with zero bot syntax:
* **Direct Workshop Mobile:** `07955 565137` (`+44 7955 565137`).
* **Showroom Landline:** `020 8573 9323` (`+44 20 8573 9323`).
* **Walk-In Friendly:** Prefilled messages focus on bespoke custom enquiries, bullion quotes, scrap valuations, and workshop advice without rigid appointment booking formats.
* **Intent Categorization:** Automated routing for `bespoke`, `wholesale`, `repair`, `scrap`, `viewing`, and `general` consultations.

---

## 7. Technology Stack & Key Dependencies

```
Next.js 15.5 (App Router, Server Components & React 19 Support)
React 19.0 (Hooks, Concurrent Mode)
TypeScript 5.9 (Strict Type Safety)
Tailwind CSS 3.4 (Custom Mayfair Vault Tokens & Typography)
Sharp 0.35 (High-Performance Server-Side Image Processing)
Framer Motion 11.18 (Luxury Smooth Transitions)
Lucide React 0.469 (Crisp Minimalist Icons)
Canvas Confetti 1.9 (Celebratory Quote & Interaction Bursts)
HTML5 Canvas (60fps Real-Time Spark Physics on 404 Crucible)
```

---

## 8. Development, Build & Verification Commands

### Development Server
```bash
npm run dev -- -p 3005
# Starts local development server on http://localhost:3005
```

### Production Build
```bash
npm run build
# Compiles all 35 routes with 0 errors and 0 type warnings
```

### Database & Schema Synchronization
```bash
node scripts/sync-schema-collections.js
# Synchronizes COLLECTIONS_DATA with scripts/schema.sql ensuring 54/54 unique asset mappings
```

---

## 9. Corporate & Legal Credentials

* **Company Name:** Niraj Jewellers Ltd
* **Trading Name:** Niraj Jewellers
* **Company Registration:** No. 05074588 (Registered in England & Wales)
* **Registered & Showroom Address:** 136 Uxbridge Road, Hayes, Middlesex, UB4 0JH, UK
* **VAT Registration Number:** GB 674 7451 05 (No: 674745105)
* **Telephone:** Landline: 020 8573 9323 | Mobile/WhatsApp: 07955 565137
* **UK Hallmarking Compliance:** London Assay Office (Goldsmiths' Hall, London EC2V 8AQ)
* **Copyright:** © 2026 Niraj Jewellers Ltd. All Rights Reserved.
