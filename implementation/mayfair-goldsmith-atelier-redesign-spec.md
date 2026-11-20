# Mayfair Goldsmith Atelier Redesign Masterplan
**Niraj Jewellers Ltd (136 Uxbridge Road, Hayes, West London)**  
*Document Version:* 2.0.0  
*Architecture Status:* Approved for Production Build  
*Target Aesthetic:* **Option A — The Mayfair Goldsmith Archive** (Ivory Tactile Paper, Brushed Brass, Real Workshop Props & Flanking Framing)

---

## 1. Executive Summary & Review Alignment

Following expert captain review and audit feedback, this specification details the complete structural and visual overhaul of the Niraj Jewellers flagship digital experience. 

### Core Problems Addressed:
1. **"Vibecoded" / AI Slop Feel:** Replaced generic purple-gold gradient blobs and Lucide starter icons with trade-authentic textures (ivory cotton paper micro-grain, brushed antique brass rules), purposeful typography, and real trade tools.
2. **Watermarked & Scraped Imagery:** Removed the *Masterpiece Hero Slider* and *Infinite Motion Ribbon* which contained third-party watermarked pieces ("TOSHAKHANA"). The homepage now displays only the top 3 verified pieces, linking cleanly to `/collections`.
3. **Adversarial Comparison Table:** Replaced the "300% high-street markups" table with 4 positive, evidence-led differentiators (London Assay Hallmarking, live gram-weight pricing, 100% in-house bench craft, direct master goldsmith consultation).
4. **Card & Section Clutter:** Stripped out "ATELIER MOTION" badges, assay certificate stickers, eye inspection icons, and ambiguous price labels. Replaced with single metal purity tags and verified specs.
5. **Bespoke Journey Card Grid:** Transformed into a connected 4-step chronological timeline (`1. Consultation & Vision Sketch` through `4. Assay Hallmarking & Collection`), removing redundant icons and day-range badges.
6. **Repairs Concierge Clarity:** Replaced icons with real bench task photography, resolved the £25 pricing contradiction, simplified pricing to clean `"From £X"` values, and converted CTAs to official WhatsApp-green buttons with Meta-compliant SVGs.
7. **Legal & UGC Compliance:** Set up strict UK Consumer Protection and CMA-compliant review structures with official Google Business attribution, eliminating fabricated avatars or unverified star metrics.
8. **Navigation Crowding:** Relocated the brand mark to hard-left and re-spaced navigation links to eliminate overflow across 1024px, 1280px, 1366px, 1440px, and 1920px viewports.

---

## 2. Updated Homepage Information Architecture & Section Flow

```
┌────────────────────────────────────────────────────────────────┐
│ 1. Header (Navbar)                                             │
│    • Hard-left logo mark, uncrowded desktop nav, mobile drawer │
├────────────────────────────────────────────────────────────────┤
│ 2. Hero Section ("The Mayfair Goldsmith Archive")              │
│    • Flanking artisan props (loupe, calipers, bullion, 22ct)   │
│    • Verified London Assay Office & Hayes accreditation pill   │
│    • Specific UK English headline: Bespoke Goldsmithing & 22ct │
│    • Dual CTAs: Curated Pieces + WhatsApp Concierge            │
│    • 4 compact single-line trust pills (no bulky paragraphs)   │
├────────────────────────────────────────────────────────────────┤
│ 3. Curated Vault Showcase (Top 3 Verified Masterworks)         │
│    • Only verified pieces (Ruby Nizam, Calcutta, Chandbali)    │
│    • Single metal purity badge (e.g. "22ct Gold")              │
│    • 1-line description, verified gram weight, clean specs CTA │
│    • Bottom link to full collection catalog (no hardcoded "54")│
├────────────────────────────────────────────────────────────────┤
│ 4. The Bespoke Goldsmith Journey (Linear Timeline)             │
│    • Numbered steps: 1. Consultation, 2. 3D CAD, 3. Forging... │
│    • Real workshop imagery, no redundant icons or day tags     │
│    • Single crisp craft description sentence per step          │
├────────────────────────────────────────────────────────────────┤
│ 5. In-House Goldsmith Bench & Repairs Concierge                │
│    • Real task photography replacing generic icons             │
│    • Transparent pricing: From £35 / £45 / Free with repair    │
│    • Official WhatsApp-green button (#25D366) with Meta SVG    │
├────────────────────────────────────────────────────────────────┤
│ 6. What Sets Niraj Jewellers Apart (Differentiators)           │
│    • 4 proof pillars: London Assay, Live Weight, In-House, CAD │
│    • Zero unsubstantiated competitor bashing                   │
├────────────────────────────────────────────────────────────────┤
│ 7. Verified Client Reviews & Reputation                        │
│    • Positioned directly beneath Differentiators               │
│    • Official Google Reviews branding & direct profile link    │
├────────────────────────────────────────────────────────────────┤
│ 8. Flagship Hayes Showroom Hub                                 │
│    • Live London operating hours, transit guide, interactive   │
│    • "Behind the Benches" gallery removed                      │
├────────────────────────────────────────────────────────────────┤
│ 9. London Assay Office Hallmarking & Purity Education          │
│    • Moved directly above FAQ                                  │
│    • Visual guide to 3 compulsory UK hallmarks                 │
├────────────────────────────────────────────────────────────────┤
│ 10. Frequently Asked Questions (FAQ)                           │
│     • 5 core commercial guarantees and transparent gold policy │
├────────────────────────────────────────────────────────────────┤
│ 11. Luxury Footer                                              │
│     • Legal compliance, registered company details, sitemap   │
└────────────────────────────────────────────────────────────────┘
```

---

## 3. Section Specifications & Code Directives

### 3.1 Header (`components/header/navbar.tsx`)
* Anchor brand crest and title to the far left (`justify-between`).
* Adjust horizontal padding and font tracking for desktop navigation.
* At 1024px–1280px (`lg`), condense padding (`space-x-4` to `space-x-6`) so the 6 items fit comfortably without horizontal overflow.
* Maintain minimum 44px touch targets on mobile drawer items.

### 3.2 Hero (`components/hero/hero-section.tsx`)
* **Background:** Subtle ivory paper texture with radial warm gold atmospheric light (`#FBF9F5` base).
* **Flanking Props:** Clean cut-out visual assets pinned to outer boundaries (`hidden md:block absolute left-4 lg:left-8` and `right-4 lg:right-8`), framing the central headline without overlapping text.
* **Top Pill:** Replaced with accreditation badge: `"Official London Assay Office Registered Atelier • Hayes, West London"`.
* **Headline:** `"London's Bespoke Goldsmith Atelier & Direct 22ct Gold"`.
* **Subheadline:** Clear, grounded UK English detailing 22ct Asian bridal suites, certified natural diamonds, and live bullion transactions.
* **CTAs:** Dual buttons only. Remove the 3rd micro-line.
* **Trust Bar:** Convert 4 cards into 4 sleek horizontal pills (`Heritage Atelier`, `London Assay Hallmarked`, `100% In-House Bench`, `Direct Bullion Pricing`).

### 3.3 Collections (`components/collections/collection-grid.tsx`)
* Set `isHomepage={true}` to render exclusively the top 3 verified pieces.
* Card modifications:
  * Remove `ATELIER MOTION` badge.
  * Remove assay certificate pill overlay.
  * Remove eye preview circular button.
  * Retain one elegant metal badge in top-left (e.g. `22ct Gold`).
  * Remove `"Direct Workshop Consultation • Bespoke Suite"` filler text.
  * Display Piece Title, single-line description, verified gram weight / carat spec, and a clean text link: `"View Specifications →"`.
* Bottom Banner: Remove hardcoded `"54 pieces"` text. Link cleanly to `/collections`.

### 3.4 Bespoke Journey (`components/craftsmanship/cad-journey.tsx`)
* Replace grid cards with a connected 4-step chronological timeline.
* Number format: `"1. Consultation & Vision Sketch"`, `"2. 3D CAD Modeling & Diamond Selection"`, `"3. Hand-Forged in Hayes Workshop"`, `"4. Assay Hallmarking & Collection"`.
* Remove day-range badges (`-Day 1-`, `-Days 2-4-`).
* Remove redundant icons above descriptions.
* Display single-sentence craft summary per step.

### 3.5 Repairs Bento (`components/repairs/repairs-bento.tsx` & `data/repairs-data.ts`)
* Replace Lucide icons with real bench task imagery.
* Update pricing format:
  * Ring Resizing: **From £35**
  * Claw Retipping: **From £45**
  * Ultrasonic Restoration: **Complimentary with repair / £25 standalone**
  * Watch Servicing: **From £15**
* WhatsApp CTA: Official WhatsApp green (`#25D366`), white typography, official Meta WhatsApp vector SVG icon.

### 3.6 What Sets Us Apart (`components/craftsmanship/wholesale-advantage.tsx`)
* Re-title section to `"What Sets Niraj Jewellers Apart"`.
* Replace comparison table with 4 evidence-led proof cards:
  1. *Direct London Assay Hallmarking (UK Hallmarking Act 1973)*
  2. *Live Bullion Weight Transparency (Trade-approved scales & daily London fix)*
  3. *Zero-Outsource In-House Bench (136 Uxbridge Road)*
  4. *Direct Master Goldsmith Consultations (Speak directly with craftsmen)*

### 3.7 Reviews Section (`components/trust/reviews-section.tsx`)
* Re-position directly below "What Sets Us Apart".
* Add official Google Reviews styling with verified attribution.
* Include direct link to Google Maps / showroom directions for independent verification.

### 3.8 Hallmark Guide (`components/trust/hallmark-guide.tsx`)
* Move directly above `FaqSection`.
* Add visual representation of the **3 Compulsory UK Hallmarks**:
  1. Sponsor's Mark (Maker's mark)
  2. Standard Fineness Mark (916 for 22ct, 750 for 18ct, 999 for 24ct)
  3. Assay Office Mark (London Leopard's Head)

### 3.9 Showroom Hub (`components/showroom/showroom-hub.tsx`)
* Remove the `"Behind the Benches at 136 Uxbridge Road"` gallery section at the bottom.

---

## 4. Verification & Testing Protocol
* **Lint & Build:** `npm run build` must complete with 0 TypeScript and 0 ESLint errors.
* **Responsive Testing:** Verify layouts at 360px, 375px, 390px, 412px, 430px (mobile), 768px (tablet), 1024px, 1280px, 1366px, 1440px, and 1920px (desktop).
* **Accessibility:** Minimum 44px tap targets for all clickable elements, WCAG AA color contrast on all text elements over textured paper backgrounds.
