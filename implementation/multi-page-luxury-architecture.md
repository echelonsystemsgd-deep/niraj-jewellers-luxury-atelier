# Implementation Plan: Full-Screen Luxury Mobile Menu, Scroll-Locking & Multi-Page Atelier Architecture

## 1. Overview & Objectives
Transform Niraj Jewellers from a single-page landing site into an authoritative, high-converting **Multi-Page Luxury Atelier & Client Acquisition Engine**.
Resolve all mobile view defects (text bleed-through, background scrolling during modals) and incorporate official contact channels (`nirajjewellersuk@gmail.com`) and HMRC VAT compliance.

---

## 2. Technical Scope of Work

### Phase 1: Mobile Navigation & Scroll-Lock Engine
1. **100% Opaque Full-Screen Takeover Menu (`components/header/navbar.tsx`):**
   - Replace the partial dropdown with a dedicated full-screen overlay (`fixed inset-0 z-50 bg-[#09090B]`).
   - Eliminate text bleed-through completely.
   - Luxury editorial typography with numbered routes (`01 Collections`, `02 Bespoke Atelier`, `03 In-House Repairs`, `04 Live Gold Rates`, `05 Flagship Showroom`, `06 Contact & Consultations`).
   - Bottom contact panel featuring WhatsApp, phone, email (`nirajjewellersuk@gmail.com`), and showroom opening hours.
2. **Universal Background Scroll-Lock Hook (`lib/use-scroll-lock.ts`):**
   - Automatically freeze the background `document.body` (`overflow: hidden`, `touch-action: none`) when:
     - Mobile full-screen menu is open
     - `VipBookingModal` is open
     - `ReelModal` is open
     - `LegalModal` is open
   - Prevent background bouncing or scrolling on iOS Safari and Android Chrome.

### Phase 2: Dedicated High-Authority Luxury Pages
Create dedicated, high-converting Next.js 15 pages:
1. **`/collections`** — Curated showcase of 22ct bridal suites, diamond solitaires, solid gold kadas, and Polki heirlooms with filter tabs, specs, and WhatsApp quotes.
2. **`/bespoke`** — Dedicated bespoke consultation engine, 3D CAD journey, dynamic budget & turnaround calculator, and VIP viewing booking.
3. **`/repairs`** — In-house workshop services (same-day ring resizing, diamond claw retipping, ultrasonic restoration, watch servicing) with pricing guidelines.
4. **`/gold-rates`** — Live LBMA gold bullion portal (24ct, 22ct, 18ct per gram/tola/ounce), interactive bullion weight calculator, and trade-in scale policies.
5. **`/showroom`** — Flagship 136 Uxbridge Road hub, live opening status, Google Maps navigation, parking guidance, and Heathrow travel proximity.
6. **`/contact`** — Direct inquiry portal with 1-tap WhatsApp, phone, email (`nirajjewellersuk@gmail.com`), and appointment scheduling.

### Phase 3: Brand Metadata & Compliance Integration
1. **Email Channel:** Embed `nirajjewellersuk@gmail.com` into:
   - Header & Full-screen takeover
   - Showroom Hub & Contact page
   - Footer & Schema.org JSON-LD structured data
   - Privacy Policy & Terms of Service
2. **VAT & Legal Entity Disclosure:**
   - Add UK VAT registration disclosure in the footer legal row and `/terms`.
3. **XML Sitemap (`app/sitemap.ts`):**
   - Index all new pages (`/collections`, `/bespoke`, `/repairs`, `/gold-rates`, `/showroom`, `/contact`, `/privacy`, `/terms`).

### Phase 4: Rigorous Verification & Delivery
1. `npm run build` — 0 errors across all static & dynamic routes.
2. `node scripts/verify_all.mjs` — All internal anchors, external targets, and WhatsApp links pass.
3. Browser subagent testing — Verify 390px mobile viewport, check full-screen menu, confirm background scroll-lock, test navigation.
4. Git commit & push to `origin/main` for Vercel production deployment.
