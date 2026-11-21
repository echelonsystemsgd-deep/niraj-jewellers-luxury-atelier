# Niraj Jewellers Ltd — Luxury Atelier V2 Masterplan & Architecture Spec

## 1. Executive Summary & Creative Direction
This specification establishes the redesign of the Niraj Jewellers Ltd digital flagship, addressing the strategic critique from executive leadership:
- **Root Problem:** The previous design suffered from "vibecoding" / AI-templated SaaS aesthetics (bulky filled cards, repetitive Lucide outline icons, 3 conflicting CTAs, generic comparison tables, lack of tactile niche relevance).
- **Core Transformation:** Shift to an authentic **Mayfair / West London Bespoke Goldsmith House** aesthetic rooted in:
  1. **Real Hammered 22ct Gold Texture:** Derived directly from Viky's hand-hammered gold logo mark.
  2. **Physical Atelier Artifacts (Tactile Framing):** High-resolution goldsmith tools (jeweller's 10x loupe, brass calipers, precision tweezers, goldsmith hammer, 999.9 bullion bar) flanking the hero section, immediately communicating the craftsmanship niche.
  3. **Social Proof Hero Pill:** Overlapping client avatars with Google 5.0 rating and verified review count.
  4. **Strict Media Truth & De-Cluttering:** Elimination of card badge noise (removing overlay eye buttons, assay badges, and atelier motion overlays); simplifying specs text; restricting homepage showcase to the top 3 authentic showpieces.
  5. **Numbered Linear Bespoke Journey:** Steps `01–04` numbered cleanly in titles, removing redundant icons and eliminating wordy checklists in favor of crisp artisan copy.
  6. **Evidence-Led Goldsmith Distinction:** Transforming generic comparisons into authentic workshop pillars (Zero Middlemen Bullion, In-House Master Goldsmiths, London Assay Office Purity).
  7. **High-Trust Google Reviews:** Featuring client profile pictures, official Google Reviews badge, and verified bespoke commission tags.
  8. **Visual Repair & Restoration Concierge:** Replacing outline icons with real bench tool photography, simplifying pricing to price/object (`From £35 / ring`), and rendering the CTA in official Meta WhatsApp green (`#25D366`).
  9. **Visual UK Hallmarking Guide:** Positioned directly above FAQs with high-definition hallmark symbol breakdown.
  10. **Pruning AI-Slop:** Permanent removal of redundant "Authentic In-House Goldsmithing" sections.

---

## 2. Component-by-Component Upgrade Specifications

### 2.1 Navigation Bar (`components/header/navbar.tsx`)
- **Spacing Architecture:** Pin brand crest hard to left (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between`).
- **Navigation Links:** Spaced with luxury letter-spacing (`tracking-[0.14em] uppercase text-xs`).
- **Responsive Touch Targets:** Mobile call CTA (`tel:07955565137`) with strict $\ge 44\text{px}$ touch target beside the mobile slide-out drawer toggle.

### 2.2 Hero Section (`components/hero/hero-section.tsx`)
- **Top Pill:** Social proof pill with 4 overlapping client profile avatars (`-space-x-2`), 5.0 gold stars, and `5.0 ★ (140+ Google Reviews)`.
- **Side Props:** Transparent PNG props flanking the hero:
  - Left: Precision jeweller's 10x triplet loupe & diamond tweezers.
  - Right: Chasing hammer & 999.9 hallmarked gold bullion bar.
- **CTAs:** Exactly 2 high-contrast buttons (`Explore Masterpiece Showcase` and `WhatsApp Atelier Concierge`). Eliminated 3rd subtext line.
- **Feature Bar:** Replaced 4 bulky cards with 4 sleek luxury micro-pills with gold border accents.

### 2.3 Masterpiece Showcase & Collection Grid (`components/collections/collection-grid.tsx`)
- **Homepage Scope:** Displays strictly the top 3 authentic photographic showpieces:
  1. *The Imperial Broad Mesh Polki Choker & Jhumkas*
  2. *The Calcutta Filigree 22ct Gold Bridal Suite*
  3. *The Royal Nizam Crimson Ruby & Syndicate Polki Choker*
- **Card Badging Clean-Up:** Removed overlay eye icon, removed assay badge stamped across image, removed atelier motion badge.
- **Pricing & Tags:** Simplified to crisp metadata (`22ct Gold (916) • 138.5g • Bespoke Commission`).
- **Vault CTA:** Direct link to full 54-piece vault at `/collections`.

### 2.4 Bespoke CAD Journey (`components/craftsmanship/cad-journey.tsx`)
- **Numbered Steps:** Titles prefixed with numerals: `01. Consultation & Vision Sketch`, `02. 3D CAD Modeling & Diamond Selection`, `03. Hand-Forged in Hayes Workshop`, `04. Assay Hallmarking & Collection`.
- **Visual Hygiene:** Removed redundant outline icons above titles (photography provides visual context).
- **Concise Content:** Replaced 3-bullet checklist with refined 2-sentence craftsman explanations.

### 2.5 What Sets Niraj Apart (`components/craftsmanship/wholesale-advantage.tsx`)
- **Artisan Narrative:** Replaced generic comparison table with 3 craftsman pillars:
  1. Direct London Bullion & Gemstone Access (No High-Street Markups)
  2. Master Goldsmiths on Uxbridge Road (Direct Bench Collaboration)
  3. UK Hallmarking Act 1973 Compliance (Guaranteed 916 / 750 / 950 Purity)

### 2.6 Verified Reviews & Reputation (`components/trust/reviews-section.tsx`)
- **Trust Badges:** Official Google Reviews 5-Star badge and Trustpilot branding.
- **Client Avatars:** Authentic customer profile avatars for each review.
- **Commission Tags:** Specific piece commissioned (`Bespoke 22ct Bridal Choker`, `Platinum Solitaire Ring`).

### 2.7 In-House Goldsmith Bench & Repairs (`components/repairs/repairs-bento.tsx`)
- **Visual Grid:** Bench tool and restoration photography instead of generic icons.
- **Simplified Pricing:** Price per object (`From £35 / ring`, `From £25 / claw`, `From £40`, `From £30 / strand`).
- **Meta WhatsApp CTA:** Official Meta green button (`#25D366`) with WhatsApp icon.

### 2.8 UK Hallmarking Guide (`components/trust/hallmark-guide.tsx`)
- Positioned immediately above `FaqSection`.
- High-definition macro imagery breakdown of official UK London Assay marks (Sponsor Mark, Purity Standard, Leopard's Head, Date Letter).

### 2.9 Showroom Hub & Live Hours (`components/showroom/showroom-hub.tsx`)
- Opening hours initialized to collapsed (`useState(false)`).
- Interactive tap-friendly header row.

---

## 3. Brand & Texture Specifications
- **Hammered Gold Texture:** High-resolution seamless asset derived from Viky's beaten 22ct gold logo letters.
- **Typography:** Playfair Display (Serif) & Inter / Geist (Sans).
- **Color Palette:** Warm Atelier Ivory (`#FAF9F5`), Hammered Gold (`#996515` to `#C5A059`), Deep Charcoal (`#141416`), Meta WhatsApp Green (`#25D366`).
