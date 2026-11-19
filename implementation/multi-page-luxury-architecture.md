# Implementation Plan: Multi-Page Luxury Architecture & Velvet Smooth Polish

## 1. Overview & Objectives
Transform Niraj Jewellers from a single-page landing site into an authoritative, high-converting **Multi-Page Luxury Atelier & Client Acquisition Engine**.
Resolve all mobile view defects (text bleed-through, background scrolling during modals), unify the navigation across all routes with 3-column symmetry, eliminate clunky input sliders with custom 60fps micro-interactions, add elegant placeholders for Viky's real workshop assets, and streamline client conversion directly into Master Jeweller Viky's direct WhatsApp line.

---

## 2. Technical Scope of Work & Completed Milestones

### Phase 1: Mobile Navigation & Scroll-Lock Engine
1. **100% Opaque Full-Screen Takeover Menu (`components/header/navbar.tsx`):**
   - Replaced the partial dropdown with a dedicated full-screen overlay (`fixed inset-0 z-50 bg-[#09090B]`).
   - Eliminated text bleed-through completely.
   - Luxury editorial typography with numbered routes (`01 Collections`, `02 Bespoke Atelier`, `03 In-House Repairs`, `04 Live Gold Rates`, `05 Knowledge Articles`, `06 Flagship Showroom`, `07 Contact Lines`).
   - Bottom contact panel featuring WhatsApp, phone, email (`nirajjewellersuk@gmail.com`), and showroom opening hours.
2. **Universal Background Scroll-Lock Hook (`lib/use-scroll-lock.ts`):**
   - Automatically freeze the background `document.body` (`overflow: hidden`, `touch-action: none`) when:
     - Mobile full-screen menu is open
     - `ReelModal` is open
     - `LegalModal` is open
     - `QuoteSummaryModal` is open
   - Prevents background bouncing or scrolling on iOS Safari and Android Chrome.

### Phase 2: Dedicated High-Authority Luxury Pages
Created dedicated, high-converting Next.js 15 pages:
1. **`/collections`** — Curated showcase of 22ct bridal suites, diamond solitaires, solid gold kadas, and Polki heirlooms with filter tabs, specs, and WhatsApp quotes.
2. **`/bespoke`** — Dedicated bespoke consultation engine, 3D CAD journey, dynamic budget & turnaround calculator, and direct consultation booking.
3. **`/repairs`** — In-house workshop services (same-day ring resizing, diamond claw retipping, ultrasonic restoration, watch servicing) with turnaround guidelines.
4. **`/gold-rates`** — Live LBMA gold bullion portal (24ct, 22ct, 18ct per gram/tola/ounce), interactive bullion weight calculator, and trade-in scale policies.
5. **`/showroom`** — Flagship 136 Uxbridge Road hub, live opening status, Google Maps navigation, parking guidance, and Heathrow travel proximity.
6. **`/contact`** — Direct inquiry portal with 1-tap WhatsApp, phone, email (`nirajjewellersuk@gmail.com`), and appointment scheduling.
7. **`/articles`** — Knowledge hub featuring 4 deep-dive editorial guides on 22ct hallmarking, 3D CAD casting, same-day repairs, and LBMA bullion investment.

### Phase 3: Brand Metadata & Compliance Integration
1. **Email Channel:** Embedded `nirajjewellersuk@gmail.com` into:
   - Header & Full-screen takeover
   - Showroom Hub & Contact page
   - Footer & Schema.org JSON-LD structured data
   - Privacy Policy & Terms of Service
2. **VAT & Legal Entity Disclosure:**
   - Replaced all outdated Shiva Technology Ltd mentions with clean placeholders: `Niraj Jewellers London • Co. Reg: [Pending Registration] • VAT Reg No: [Pending Registration]`.
3. **XML Sitemap (`app/sitemap.ts`):**
   - Indexed all pages (`/collections`, `/bespoke`, `/repairs`, `/gold-rates`, `/showroom`, `/contact`, `/articles`, `/privacy`, `/terms`).

### Phase 4: Velvet Smooth Luxury Polish & Symmetrical Header
1. **Symmetrical 3-Column Luxury Header:**
   - **Column 1 (Left, `lg:w-1/4`):** Monogram crest + `NIRAJ JEWELLERS` (`HAYES • LONDON • EST. DECADES`).
   - **Column 2 (Center, `flex-1`):** All 7 navigation links anchored dead-center in the header (`COLLECTIONS`, `BESPOKE`, `REPAIRS`, `GOLD RATES`, `ARTICLES`, `SHOWROOM`, `CONTACT`) with luminous active indicators.
   - **Column 3 (Right, `lg:w-1/4`):** Live London business hours status badge + direct `WhatsApp Viky` button.
2. **Removed VIP Viewing Button / Modal / CTA:**
   - Fully removed the VIP Viewing button, modal, and CTAs across the entire codebase to reduce friction and eliminate confusing multi-step forms. Clients now convert directly to Master Jeweller Viky's WhatsApp.
3. **Metallic Gold Scroll Progress Bar:**
   - Implemented `components/header/scroll-progress-bar.tsx` with Framer Motion `scaleX` tracking page scroll depth at the top of the viewport.
4. **Global Sticky Mobile Dock & Floating Back-To-Top Button:**
   - Mounted globally in `app/layout.tsx` with iOS safe-area support (`pb-[max(0.625rem,env(safe-area-inset-bottom))]`).
   - Added floating spring-eased back-to-top button appearing after 450px scroll.
5. **Ultra-Smooth 60fps Budget Slider:**
   - Replaced the clunky browser input with a custom luxury slider featuring dynamic gradient fill track, champagne radial thumb, glowing step node markers, and 5 quick-select budget tier chips.
6. **Natural WhatsApp Messages:**
   - Completely rewritten to sound human, polite, and directly address the user's intent without code or tracking tags.
7. **Viky Asset Placeholders:**
   - Added explicit prototype preview badges for reel video files (`reel-bridal-choker.mp4`, etc.) and company numbers to be confirmed by Viky.

---

## 3. Verification & Quality Gates
1. `npm run build` — 0 errors across all 25 static & dynamic routes.
2. `node scripts/verify_all.mjs` — All internal anchors, external targets, and WhatsApp links pass.
3. Git commit & push to `origin/main`.
