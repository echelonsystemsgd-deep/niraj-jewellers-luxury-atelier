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
│    • Hard-left logo mark, hammered gold crest container       │
├────────────────────────────────────────────────────────────────┤
│ 2. Hero Section ("The Mayfair Goldsmith Archive")              │
│    • Texture: Visible tactile deckle paper (.texture-ivory)    │
│    • Hammered gold social proof pill & 4 trust cards           │
│    • Flanking artisan props (bench velvet tray & 22ct bridal)  │
│    • Specific UK English headline: Bespoke Goldsmithing & 22ct │
│    • Dual CTAs: Curated Pieces + WhatsApp Concierge            │
├────────────────────────────────────────────────────────────────┤
│ 3. Curated Vault Showcase (Top 3 Verified Masterworks)         │
│    • Texture: Deckle paper canvas + hammered bullion card tags │
│    • Single metal purity badge (e.g. "22ct Gold")              │
│    • 1-line description, verified gram weight, clean specs CTA │
│    • Bottom link to full collection catalog (no hardcoded "54")│
├────────────────────────────────────────────────────────────────┤
│ 4. The Bespoke Goldsmith Journey (Linear Timeline)             │
│    • Texture: Deckle paper canvas + hammered gold step nodes   │
│    • Numbered steps: 1. Consultation, 2. 3D CAD, 3. Forging... │
│    • Connected gold timeline spine on mobile & desktop         │
├────────────────────────────────────────────────────────────────┤
│ 5. In-House Goldsmith Bench & Repairs Concierge                │
│    • Texture: Deckle paper canvas + hammered gold price badges │
│    • Real task photography replacing generic icons             │
│    • Transparent pricing: From £35 / £45 / Free with repair    │
│    • Official WhatsApp-green button (#25D366) with Meta SVG    │
├────────────────────────────────────────────────────────────────┤
│ 6. What Sets Niraj Jewellers Apart (Differentiators)           │
│    • Texture: Deckle paper canvas + hammered gold icon badges  │
│    • 4 proof pillars: London Assay, Live Weight, In-House, CAD │
├────────────────────────────────────────────────────────────────┤
│ 7. Verified Client Reviews & Reputation                        │
│    • Texture: Deckle paper canvas + hammered monogram avatars  │
│    • Official Google Reviews banner in hammered gold card      │
├────────────────────────────────────────────────────────────────┤
│ 8. UK Hallmarking Act Compliance & Purity Education            │
│    • Texture: Plush Jeweller's Midnight Velvet Tray (.velvet)  │
│    • 3 Compulsory Marks stamped on hand-hammered 22ct coins    │
├────────────────────────────────────────────────────────────────┤
│ 9. Frequently Asked Questions (Accordion)                      │
│    • 6 structured FAQ items covering bullion, hallmarking, CAD │
├────────────────────────────────────────────────────────────────┤
│ 10. Footer & Legal Disclosures                                 │
│    • Registered address, VAT number, copyright                 │
└────────────────────────────────────────────────────────────────┘
```

---

## 3. Physical Trade Material Textures System

To eliminate the flat "vibecoded / AI-generated" look, four physical textures from the traditional goldsmith trade were engineered in CSS using lightweight inline SVG filters:

1. **Artisanal Ivory Deckle Paper (`.texture-ivory-paper`):**
   * Emulates heavy cotton archival paper used by traditional British craft ateliers.
   * Constructed with multi-octave SVG `feTurbulence` fractal noise (`baseFrequency='0.75'`, `opacity='0.08'`) overlaid with ambient gold warmth (`rgba(212,175,55,0.08)`).
   * Applied across the main page canvases: Hero, Collections, Bespoke Timeline, Repairs Concierge, What Sets Us Apart, and Reviews.

2. **Hand-Hammered 22ct Gold (`.texture-hammered-gold`):**
   * Directly derived from Viky's physical 22ct gold crest logo and traditional hand-chased (*pitai*) bullion.
   * Built with 6 specular radial highlight nodes simulating light reflecting off micro-hammered facets, combined with gold bullion gradients and micro-chasing noise.
   * Applied to:
     * Mobile & desktop timeline step nodes (`1`, `2`, `3`, `4`)
     * Workshop differentiator icon medallions
     * Hallmarking stamp coin medallions (`NJ`, `916`, `🐆`)
     * Reviewer monogram avatars and milestone markers

3. **Hammered Gold Shimmer Cards (`.texture-hammered-card` & `.border-hammered-gold`):**
   * Subtle metallic embossed paper surface with a 1px metallic gold border.
   * Applied to:
     * Hero social proof accreditation pill
     * Hero 4 trust indicators (`Heritage Atelier`, `London Hallmarked`, `100% In-House`, `Live Bullion Fix`)
     * Collection single metal purity tags
     * Repairs pricing badges (`From £35`)
     * Google Reviews trust banner

4. **Jeweller's Midnight Velvet Presentation Tray (`.texture-jewellers-velvet`):**
   * Emulates the plush black velvet display pads used in high-jewelry showrooms to showcase 22ct gold.
   * Built with deep `#0F0F12` midnight charcoal, micro-velvet plush grain, and radial gold ambient radiance.
   * Applied to the central **3 Compulsory UK Hallmarks Display Case**, creating high-contrast luxury presentation where the 22ct gold hallmark coins rest on midnight velvet.
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

---

## 5. Mobile Viewport Optimization & Touch Ergonomics

Following mobile audit review, specific adaptations were built to ensure complete visibility, high ergonomics, and zero layout shifting on small screens:

### 5.1 Hero Section on Mobile (`< 1024px`)
* **Artisan Visual Presence:** Previously, desktop flanking cutouts were `hidden lg:block`. A dedicated compact dual-card showcase (`w-28 h-36 sm:w-40 sm:h-48`) was engineered for mobile, showing the *Hayes Bench* consultation tray (tilted -3°) and *22ct Bridal* suite (tilted +3°) directly above the CTAs without overlapping any text.
* **Vertical Spacing:** Adjusted hero padding from `pt-32` down to `pt-24 pb-12` so the headline, visual cutouts, and dual CTAs sit comfortably within the initial mobile viewport.
* **Trust Pills 2x2 Grid:** Converted bottom horizontal wrap into a responsive 2x2 grid on mobile screens (`< 640px`) with compact typography (`text-[10.5px]`) and SVG icons.

### 5.2 Connected Timeline on Mobile (`CadJourney` & `/about`)
* **Vertical Timeline Spine:** Replaced flat card stacking with a visible vertical gold connecting spine (`w-[2px] bg-gradient-to-b from-[#DFBF7A] via-[#996515] to-[#DFBF7A]`) with numbered glowing node markers (`1`, `2`, `3`, `4`) on mobile.
* **Card Margins:** Indented cards on mobile (`pl-8`) to maintain the clear visual hierarchy of a continuous step-by-step goldsmithing process.

### 5.3 Repairs & Concierge Mobile Sizing
* **Image & Pricing Alignment:** Compacted bench visual thumbnails to `w-14 h-14` with vertically-stacked right-aligned pricing badges (`From £35`, `Same-Day`) on mobile.
* **Padding:** Reduced card internal padding to `p-5` to prevent excessive vertical elongation on smaller mobile devices (360px–390px).

### 5.4 Reviews & Hallmarking Mobile Tuning
* **Review Cards:** Spaced at `gap-5` with `p-5` padding and compact reviewer initial avatars (`w-8 h-8`), preventing viewport crowding.
* **3 Compulsory Marks:** Explainer card padded to `p-5` with stamp visual motifs sized at `w-14 h-14` to avoid line-wrapping on narrow screens.

### 5.5 Navbar & Mobile Dock
* **Brand Text Sizing:** Optimized crest and text sizing (`text-[13px]`) with micro-letterspaced subtitle (`text-[7px]`) to ensure zero wrapping next to the 44px call and menu buttons.
* **Safe-Area Padding:** Maintained `pb-[max(0.625rem,env(safe-area-inset-bottom))]` on `MobileDock` with dedicated page bottom clearance (`pb-24`) to eliminate overlay clipping.
