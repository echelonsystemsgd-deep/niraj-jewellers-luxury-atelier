# ARCHITECTURAL SPECIFICATION: VEYRA × NIRAJ JEWELLERS
## High-Ticket Luxury Flagship & Goldsmith Showroom Architecture

**Platform:** Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS 3.4  
**Entity:** Niraj Jewellers Ltd (Est. 1984 · London Assay Leopard's Head Hallmarked · Hayes Flagship)  
**Location:** 136 Uxbridge Road, Hayes, Middlesex, UB4 0JH  
**Branch:** `feature/veyra-digital-flagship`  
**Route:** `/atelier` (and integrated showroom discovery throughout flagship)

---

## 1. STRATEGIC CONVERSION ARCHITECTURE & COMMERCIAL REALITY

### Commercial Rationale (£470.25 Build Fee / £10/month Maintenance)
- **High-Maintenance Liabilities Removed**:
  - **Live Gold Tickers**: Gold spot rates fluctuate every second. An unmonitored ticker creates client disputes over quoted gold gram rates. It has been removed in favor of direct WhatsApp and in-person showroom quotes.
  - **Procedural 3D WebGL / Three.js**: Procedural 3D wireframe rings require ongoing GPU debugging across mobile chipsets and do not convey the authentic emotional weight of South Asian bridal jewellery. Replaced with **authentic 1080p video reels of the real pieces**.
  - **Procedural Web Audio**: Removed for a quiet, serene luxury experience without browser autoplay blocks.
  - **Zero Price Mentions**: High-value 22ct bridal sets and solid kadas are bespoke investments based on daily gold weight and making charges (*mazdoori*). All pricing has been omitted in favor of "Direct Workshop Consultation" and certified gram weights.
  - **Zero Booking Forms & Prefilled Inputs**: High-ticket Asian bridal suites (£3,000–£15,000) are never booked via generic date-pickers or e-commerce carts. Clients either chat directly with the goldsmith on WhatsApp (`wa.me/447955565137`) or walk into the Hayes showroom. All booking forms, calendar inputs, and prefilled dummy data (e.g. "Aarav Sharma") have been completely removed.
  - **Zero Prototype Tags**: Removed all prototype badges, mock indicators, or agency pitch pills. The site is a production digital flagship.

---

## 2. REVISED COMPONENT ARCHITECTURE (`/atelier`)

1. **`AtelierNavbar.tsx`**:
   - Fixed architectural header with subtle backdrop blur and hairline border.
   - Official Royal Crest logo (`/NIRAJ_LOGO9.png`) with crisp presentation.
   - Header navigation links following Viky's exact page specification and order:
     1. **About Us** (`/about`)
     2. **Collection** (`/collections`)
     3. **Articles** (`/articles`)
     4. **Showroom** (`/showroom`)
     5. **FAQs** (`/faqs`)
     6. **Contact** (`/contact`)
   - Direct high-converting CTAs: `[ CALL 020 8573 9323 ]` and `[ WHATSAPP VIP ]`.
   - **Full-Screen Mobile Hamburger Menu**:
     - When opened, expands to encompass 100% of the viewport (`fixed inset-0 z-50`).
     - Freezes background scrolling and interactions (`position: fixed; width: 100%; top: -${scrollY}px; overflow: hidden; touch-action: none;`).
     - Features official royal crest, Viky's 6 pages in exact order, direct phone and WhatsApp buttons, showroom address, and operating hours.

2. **`CinematicHero.tsx`**:
   - Replaces procedural 3D models with an **Interactive High-Definition Video Showcase**.
   - Displays authentic 1080p video reels of real pieces mapped 1:1 by `pieceId`:
     - The Imperial Broad Mesh Polki Suite (`piece-1-broad-mesh-polki-choker`, 138.5g)
     - The Crown Milgrain Beaded Diamond Band (`piece-6-crown-milgrain-beaded-diamond-band`, 5.4g)
     - The Sovereign 6-Prong Solitaire Ring (`piece-16-sovereign-6-prong-solitaire-ring`, 4.8g)
     - The Sovereign Shared-Prong Eternity Band (`piece-5-sovereign-shared-prong-eternity-band`, 6.2g)
   - Real-time video player with play/pause and hairline architectural framing.
   - Clicking `[ INSPECT PIECE DOSSIER ]` opens the exact matching piece in the modal.

3. **`ProductGrid.tsx`**:
   - Complete **54-piece vault** loaded from `@/data/collections-data`.
   - Category filter tabs:
     - `[ ALL PIECES (54) ]`
     - `[ 22CT BRIDAL ]`
     - `[ SOLID GOLD & KADAS ]`
     - `[ POLKI & KUNDAN ]`
     - `[ RINGS & SOLITAIRES ]`
   - Real-time search with intelligent jewelry synonym mapping (e.g., searching "Kada" matches kadas, cuffs, and bangles).
   - Media filter (`ALL MEDIA`, `VIDEOS ONLY`, `PHOTOS ONLY`).
   - Card badges: `▶ 1080P REEL` vs `STILL PHOTOGRAPHY`.
   - Certified weights and London Assay Leopard's Head hallmarking.
   - Clicking any card passes the exact `piece.id` into `ShowroomDossierModal`.

4. **`ShowroomDossierModal.tsx`**:
   - Strict background interaction lock (`position: fixed; width: 100%; top: -${scrollY}px; overflow: hidden; touch-action: none;`).
   - 1:1 piece matching: renders the exact clicked piece from the 54-piece catalog.
   - Dual media viewer: 1080p video player or high-resolution photography.
   - **Zero Booking Forms / Zero Prefilled Dummy Data**:
     - Action 1: **One-Click WhatsApp VIP Deep-Link** (`wa.me/447955565137`) pre-filled with the exact piece title, metal purity, and certified weight.
     - Action 2: **Hayes Showroom Direct Walk-In Card** with address (136 Uxbridge Road), opening hours (Tue–Sat 10:30–18:00), Google Maps directions, and direct phone link (`020 8573 9323`).

5. **`RepairsShowcase.tsx`**:
   - 3-column hairline architectural grid showcasing same-day in-house bench services:
     1. Precision Laser Ring Resizing (2–4 Hours · While You Wait)
     2. Diamond Claw Retipping & Resetting (Microscope Benchwork)
     3. Ultrasonic Steam Restoration & Carat Testing (Complimentary Inspection)
   - Verified high-resolution workshop images with zero 404s.

6. **`ProvenanceSection.tsx`**:
   - Goldsmith craftsmanship architecture: 420g Solid Presentation Vault, London Assay Leopard's Head Dossier, Lifetime In-House Benchmark Care.
   - Direct WhatsApp inquiry trigger.

7. **`EditorialManifesto.tsx`**:
   - Philosophy of deliberate weight: 100% solid-cast non-hollow gold shanks vs hollow fast-fashion jewellery.

8. **`ShowroomLogistics.tsx`**:
   - 136 Uxbridge Road, Hayes, UB4 0JH address, opening hours, Google Maps navigation, phone triggers.

9. **`Footer` (`components/footer/footer.tsx`)**:
   - Matches the client's verified footer design:
     - Niraj Jewellers Ltd royal crest logo and brand tagline.
     - Social icons (Facebook, Instagram, TikTok, WhatsApp).
     - Explore Atelier navigation links (About Us, Curated Collection, Articles, Hayes Showroom, FAQs, Contact).
     - Workshop services links.
     - Showroom direct contact information (Uxbridge Road, landline 020 8573 9323, mobile 07955 565137, email, hours).
     - London Assay Office hallmarking guarantee badge.
     - Legal notice with Company No. 05074558 and VAT Reg No. GB 874 7451 05.

---

## 3. ADMIN BACKEND ARCHITECTURE (`/admin`)

- Pinned Mayfair luxury brand palette (`#FAF8F5`, `#141416`, `#E8DEC8`, `#D4AF37`).
- Mobile-first responsive layout with background-locked slide-over drawer and 5-tab bottom dock.
- Pinned desktop sidebar with inventory counter (`54 Pieces`), quick-add trigger, media management, homepage layout, showroom hours, and customer reviews.
- Viky's Handbook / Staff Guide for day-to-day operations.

---

## 4. VERIFICATION & QUALITY STANDARDS

- **0 Coding Errors**: Strict TypeScript compliance and 0 webpack build warnings.
- **36/36 Static Routes Generated**: Fully optimized with Next.js 15 SSG.
- **Mobile Responsive**: 100% responsive across 360px–430px viewports with **0px horizontal scroll overflow**.
- **Interaction Freeze**: Modal and mobile drawer freeze body scrolling to prevent background bleed.

---

## 5. RECENT UX POLISH & ARCHITECTURAL VERIFICATION (NOVEMBER 2026)

1. **Root Route Elevation (`app/page.tsx`)**:
   - The digital atelier (`<AtelierClientView />`) is the primary, production root route (`/`).
   - Clean, luxury aesthetic with real video reels, zero booking forms, zero prototype pills.

2. **Unified Sticky Header Architecture**:
   - `AtelierNavbar` uses `fixed top-0 left-0 right-0 z-50` with dynamic blur and scroll shadow.
   - Pinned with `<div className="h-18 sm:h-20 shrink-0" aria-hidden="true" />` spacer to guarantee zero layout shift.
   - Mobile header features the direct showroom landline (`020 8573 9323`) and touch-target hamburger drawer.
   - Drawer middle padding increased to `pb-28` to ensure all 6 navigation items (including `06 Contact`) are 100% visible and never occluded by the sticky bottom bar.

3. **Universal Route-Change Scroll Restoration (`components/common/ScrollRestorationHandler.tsx`)**:
   - Client component mounted in `app/layout.tsx` that listens to `pathname` changes.
   - Instantly resets `window.scrollTo({ top: 0, left: 0, behavior: 'instant' })` on every route transition.
   - Eliminates the previous issue where navigating from halfway down one page left the user halfway down the destination page.

4. **Accurate Live London Showroom Timings (`lib/showroom-hours.ts`)**:
   - Monday: 12:00 – 17:00
   - Tuesday – Saturday: 11:00 – 17:30
   - Sunday: Closed (Open select festive Sundays prior to Diwali, Karva Chauth & Christmas)
   - Calculated via `Intl.DateTimeFormat.formatToParts` with 24-hour cycle (`hourCycle: "h23"`), accurately reflecting the live closed state during London evenings and Sundays.

5. **Authentic Google Reviews & Trust Plaque**:
   - Google Profile: `https://share.google/UzzobueZI6BXs8GZQ`
   - Official Rating: 4.3 / 5.0 (10 verified Google reviews).
   - Displayed reviews: Lisa Kishtwari (5★), Peter O'Reilly (5★), Charanjit Singh (5★), Kryz Woodhouse (5★), Kamal Bhangoo (5★).
   - Direct CTA to view all reviews and directions on Google Maps.

6. **Showroom Dossier Modal UX Refinement**:
   - Compact desktop proportions (`lg:h-[620px] lg:max-h-[88vh]`) fitting completely within standard desktop viewports without forcing page scroll.
   - Strictly **ONE** primary WhatsApp CTA (`INQUIRE ON WHATSAPP (INSTANT GOLDSMITH)`).
   - Dual prominent exit routes: `[ CLOSE ✕ ]` pill in top-right header, and `[ CLOSE DOSSIER & RETURN TO SHOWROOM ]` at the bottom of the right column.
