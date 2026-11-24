# Impeccable Redesign, Architectural Consistency & Polish Plan
**Project:** Niraj Jewellers Ltd — Digital Luxury Flagship  
**Domain:** `https://www.niraj-jewellers.co.uk`  
**Date:** November 24, 2026  
**Auditor / Engine:** Impeccable Design System (v4.10.0)

---

## 1. Executive Summary & Problem Diagnosis

Following an exhaustive design audit across desktop and mobile viewports, the digital presence for Niraj Jewellers Ltd (est. 1984, Hayes, London) required transformation from a tech-dashboard feel into a world-class luxury atelier maison (in the spirit of Cartier, Graff, and Boucheron).

### Core Frictions Identified & Addressed:

1. **Inconsistent Corner Geometry ("Switching between rounded and sharp"):**
   - *Problem:* Product grids and repair bento sections adhered to a prestigious, sharp, architectural Mayfair luxury maison aesthetic (`rounded-none`). Adjacent sections (Manifesto, Provenance, Reviews, Consultation, FAQ accordions, Hallmark guides, and Estimator) introduced consumer-app bubble curves (`rounded-2xl`, `rounded-xl`, `rounded-lg`).
   - *Fix:* Unify all structural containers, cards, accordions, inputs, and buttons site-wide to crisp, architectural geometry (`rounded-none`), reserving circular shapes solely for circular avatar initials and circular stamp mark motifs.

2. **AI-Slop Decorative Icons in Eyebrow Text:**
   - *Problem:* Section eyebrows featured floating Lucide icons (e.g. `<Sparkles />` in `ProductGrid`, `<Film />` in `infinite-motion-ribbon`, and `<Sparkles />` in modals). In elite luxury branding, typographic restraint is paramount.
   - *Fix:* Standardize all eyebrow labels to clean, letter-spaced small caps typography (`font-sans text-xs uppercase tracking-[0.2em] text-[#8C6212] font-semibold`) with zero floating icons.

3. **Missing / Collapsed Image in "THE HAYES LEGACY":**
   - *Problem:* In `EditorialManifesto.tsx`, the image container used the invalid Tailwind class `aspect-4/5` instead of `aspect-[4/5] min-h-[380px]`, which caused container collapse on multiple viewports. Additionally, the displayed image was a generic 3D CAD render rather than an authentic workshop photograph.
   - *Fix:* Container height stabilized with `aspect-[4/5] min-h-[380px] w-full bg-[#FAF8F5]`. Replaced CAD render with authentic Hayes goldsmith bench photograph: `/images/workshop/goldsmith-bench-order-book-22ct.jpg` (`unoptimized`) with an authentic caption detailing the 42-year Hayes workbench lineage and physical order ledger.

4. **Monospace & Developer Dashboard Metadata Clutter:**
   - *Problem:* Subtext, eyebrow labels, and badges were using `font-mono`, giving the impression of an internal developer dashboard rather than a high-end 22ct gold jewellery house.
   - *Fix:* Monospace replaced with refined, crisp typography (`font-sans font-medium` and `font-serif`).

5. **Google Reviews Presentation:**
   - *Problem:* Hand-coded custom badges (`Google Verified Client`, `BESPOKE JEWELLERY & NOSE STUD FITTING`) looked cluttered.
   - *Fix:* Streamlined native Google Reviews card presentation with official Google `G` logo, 5-star rating, verified reviewer names, clean dates, and authentic customer quotes.

6. **Mobile Ergonomics & Responsive Stability:**
   - *Problem:* Risk of horizontal overflow on 390px mobile viewports (`iPhone 12/13/14/15/16 Pro`).
   - *Fix:* Enforce strict `w-full max-w-full overflow-hidden` boundaries, responsive padding (`px-4 sm:px-6`), and zero horizontal overflow (`scrollWidth <= 390px`).

---

## 2. Architectural Workstreams

### Workstream A: Unified Architectural Corner Geometry (`rounded-none`)
* **Landing Page:**
  - `components/atelier/EditorialManifesto.tsx`: Manifesto quote card and legacy visual frame converted to `rounded-none`.
  - `components/atelier/ProvenanceSection.tsx`: 3 photo story cards converted to `rounded-none`.
  - `components/trust/reviews-section.tsx`: All 12 Google review cards in marquee rows converted to `rounded-none`; rating summary bar converted to `rounded-none`.
  - `components/atelier/ConsultationSection.tsx`: Outer consultation card, all form inputs, selects, textareas, and submit buttons unified to `rounded-none`.
  - `components/atelier/RepairsShowcase.tsx`: Verified sharp `rounded-none` borders.
  - `components/atelier/ProductGrid.tsx`: Verified sharp `rounded-none` borders.
  - `components/atelier/ShowroomDossierModal.tsx`: Modal dialog, tabs, image frames, and action buttons converted to `rounded-none`.
  - `components/atelier/AtelierNavbar.tsx`: Mobile drawer, phone button, WhatsApp button converted to `rounded-none`.
  - `components/header/showroom-status.tsx`: Showroom status badge converted to `rounded-none`.
  - `components/atelier/CinematicHero.tsx`: Top rating proof badge converted to `rounded-none`.
  - `components/collections/infinite-motion-ribbon.tsx`: Ribbon cards and tags converted to `rounded-none`.
  - `components/faq/faq-section.tsx`: All accordion items converted to `rounded-none`.
  - `components/trust/hallmark-guide.tsx`: Hallmark inspection image, 3 compulsory marks card, and 4 purity standards grid converted to `rounded-none`.
  - `components/footer/footer.tsx`: Attribution and links converted to `rounded-none`.
  - `components/legal/legal-modal.tsx`: Modal dialog converted to `rounded-none`.
* **Subpages:**
  - `app/about/page.tsx`: Consultation invitation plaque and story cards converted to `rounded-none`.
  - `components/showroom/showroom-hub.tsx`: 3 pillars grid, map card, opening hours card converted to `rounded-none`.
  - `components/contact/contact-client-view.tsx`: Form, hours plaque, map card converted to `rounded-none`.
  - `components/faq/faqs-client-view.tsx` & `components/faq/subpage-faq.tsx`: FAQ cards and accordion items converted to `rounded-none`.
  - `app/articles/page.tsx` & `app/articles/[slug]/page.tsx`: Articles plaques, hero containers, takeaway callouts converted to `rounded-none`.
  - `app/gold-rates/page.tsx`: Scrap trade-in reassurance card converted to `rounded-none`.
  - `app/terms/page.tsx`: Statutory Hallmarking callout card converted to `rounded-none`.
  - `components/collections/masterpiece-hero-slider.tsx` & `reel-modal.tsx`: Craft spec bento and video frames converted to `rounded-none`.
  - `components/craftsmanship/cad-journey.tsx` & `wholesale-advantage.tsx`: Journey steps and differentiator cards converted to `rounded-none`.
  - `components/repairs/repairs-bento.tsx`: Service cards and image frames converted to `rounded-none`.
  - `components/estimator/bespoke-estimator.tsx` & `quote-summary-modal.tsx`: Estimator bento containers, buttons, and summary modal converted to `rounded-none`.

### Workstream B: Purge AI-Slop Decorative Icons from Eyebrows
* Standardize all section eyebrows to:
  `font-sans text-xs uppercase tracking-[0.2em] text-[#8C6212] font-semibold`
* Removed `<Sparkles />` and `<Film />` from:
  - `components/atelier/ProductGrid.tsx`
  - `components/atelier/RepairsShowcase.tsx`
  - `components/collections/infinite-motion-ribbon.tsx`
  - `components/hero/gold-ticker.tsx`
  - `components/atelier/ShowroomDossierModal.tsx`
  - `components/faq/faq-section.tsx`
  - `components/faq/subpage-faq.tsx`
  - `components/footer/footer.tsx`
  - `app/articles/[slug]/page.tsx`

### Workstream C: The Hayes Legacy Image Restoration & Authentic Storytelling
* Fixed container collapse in `components/atelier/EditorialManifesto.tsx` by replacing broken `aspect-4/5` with `aspect-[4/5] min-h-[380px] w-full bg-[#FAF8F5]`.
* Replaced CAD render with authentic Hayes workbench photograph: `/images/workshop/goldsmith-bench-order-book-22ct.jpg`.
* Updated image caption to celebrate 42 years of master goldsmith benchcraft on Uxbridge Road.

### Workstream D: Quality, Build & Verification Safeguards
* **Zero "Viky" references**: Strict grep check across all files.
* **Zero literary em dashes ("—")**: Replaced with clean hyphens, colons, or parentheses.
* **Mobile Viewport 390x844**: Verified zero horizontal scroll (`document.documentElement.scrollWidth <= 390`).
* **Next.js Production Build**: `npm run build` must compile 100% cleanly across all 36 routes.
* **Impeccable Detect**: Run `npx impeccable detect` to confirm zero design regressions.

---

## 3. Checklist & Status

| Task | Target Files | Status |
| :--- | :--- | :---: |
| Implementation Plan | `impeccable_redesign_plan.md` | Completed |
| Core Atelier Sections (Manifesto, Provenance, Reviews, Consultation) | `components/atelier/*.tsx`, `components/trust/reviews-section.tsx` | Completed |
| Eyebrow Icon Purge | `ProductGrid.tsx`, `infinite-motion-ribbon.tsx`, `RepairsShowcase.tsx`, `gold-ticker.tsx` | Completed |
| Fix Hayes Legacy Image | `EditorialManifesto.tsx` | Completed |
| Subpage Card Radii Alignment | `/about`, `/showroom`, `/contact`, `/faqs`, `/articles` | Completed |
| Remaining Components (Accordions, Hallmark, Legal, Estimator, Gold Rates) | `faq-section.tsx`, `subpage-faq.tsx`, `hallmark-guide.tsx`, `legal-modal.tsx`, `bespoke-estimator.tsx`, `quote-summary-modal.tsx`, `cad-journey.tsx`, `wholesale-advantage.tsx`, `repairs-bento.tsx`, `gold-rates/page.tsx`, `terms/page.tsx` | Completed |
| Cleanliness Checks (Zero Viky, Zero Em Dashes) | Working tree | Completed (0 violations) |
| Build Verification | `npm run build` | Completed (37/37 routes PASS) |
| Impeccable Detect Run | `npx impeccable detect` | Completed (0 errors) |
| Browser Visual QA | Mobile portrait 390x844 | Completed (0 overflow, PASS) |
| Git Commit & Push | Repository `origin/main` | In Progress |
