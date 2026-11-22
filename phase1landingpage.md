# Phase 1 Implementation Plan: Flagship Landing Page Overhaul

## Executive Directive & Alignment
This plan synthesizes all design feedback from the Captain, the VEYRA digital atelier aesthetic guidelines, and the client's commercial objectives for Niraj Jewellers Ltd (136 Uxbridge Road, Hayes).

The goal is to transition the landing page from feeling "vibecoded" or overloaded into a world-class, evidence-led digital atelier that builds trust first, showcases true craftsmanship, eliminates UI friction, and delivers an unmistakable sense of heritage and authenticity.

---

## 1. Global Navigation & Header (`AtelierNavbar.tsx`)
- **Brand Positioning:** Move the "NIRAJ JEWELLERS LTD · HAYES · LONDON · SINCE 1984" brand mark further to the left margin.
- **Breathing Room:** Eliminate cramped quicklinks by establishing comfortable padding between the brand mark, navigation links, and action buttons.
- **Contact Actions:** Maintain instant landline calling (`020 8573 9323`) on mobile and direct WhatsApp Concierge (`07955 565137`) on desktop.
- **Showroom Status:** Real-time London time calculation with live indicator ("Open Now · Closes 17:00" or "Closed for the Evening · Reopens Mon 12:00").

---

## 2. Hero Section Transformation (`CinematicHero.tsx`)
- **Niche Artisan Framing (The "Bakery Reference" Principle):**
  - Flank the central hero copy with authentic artisan goldsmith elements on desktop (high-resolution jeweler's loupe, bullion scale, 22ct gold ingots, micro-laser tweezers, and plush velvet gem trays).
- **Social Proof Pill Above Headline:**
  - Replace generic text badge with a high-converting **Social Proof Pill**:
    - Stacked circular profile pictures of real reviewers.
    - Gold star rating: `★★★★★ 4.9`.
    - Verified metric: `120+ Google & Atelier Reviews`.
- **Primary CTA De-Cluttering:**
  - Strictly **two decisive buttons**:
    1. Primary: `Explore Masterpiece Showcase ↓` (smooth scroll to curated showcase).
    2. Secondary: `WhatsApp Atelier Concierge ↗` (direct link with pre-filled greeting).
  - Remove all redundant third lines or secondary phone text below the buttons.
- **Sleek Horizontal Trust Bar:**
  - Replace heavy boxes with 4 clean horizontal pills:
    1. `42-Year Goldsmith Lineage`
    2. `London Assay Leopard's Head Stamped`
    3. `100% In-House Benchwork`
    4. `Direct Bullion Trade Value`

---

## 3. Curated Masterpieces & Bridal Suites (`ProductGrid.tsx` -> `CuratedShowcase.tsx`)
- **The Core Problem:** Presenting 54 products immediately overwhelms first-time visitors before establishing trust.
- **The Solution:**
  - Cut down the landing page display to **exactly 3 premier masterwork videos** playing on an infinite, silent, performant loop:
    1. *The Chevron V-Collar Diamond Gala Necklace* (18ct White & Rose Gold · 48.5g mass).
    2. *The Crown Milgrain Beaded Diamond Band* (18ct Warm Gold · 28.4g mass).
    3. *The Sovereign Shared-Prong Diamond Eternity Band* (950 Pure Platinum · 24.6g mass).
  - **Zero Tag Clutter:** Remove the `ATELIER MOTION` pill, the certificate tag, and the eye icon overlay.
  - **Clean Meta Information:** Replace ambiguous placeholders (e.g. "High Jewellery Atelier • Bespoke Piece") with exact metallurgical purity, solid gold weight, and piece name.
  - **Vault Conversion Anchor:** Prominent bottom button:
    `View Complete 54-Piece Showroom Vault →` linking directly to `/collections`.

---

## 4. Unboxing Architecture & Provenance (`ProvenanceSection.tsx`)
- **Status:** Retained as the gold standard for delivery integrity.
- **Pillars:**
  1. *Hand-Crafted Presentation Vault* (420g solid velvet-lined archival case).
  2. *London Assay Leopard's Head Dossier* (British Hallmarking Act 1973 verification).
  3. *Lifetime In-House Benchmark Guarantee* (perpetual cleaning, claw testing, and sizing).
- **Copy Clean-Up:** Remove all literary em dashes ("—") and replace with clean hyphens or periods.

---

## 5. Same-Day Workshop Repairs (`RepairsShowcase.tsx`)
- **Authentic Bench Photography:** Retain high-resolution photography of real bench work (laser micro-welding, microscope claw inspections, ultrasonic steam baths).
- **Simplified Itemized Pricing:** Convert descriptive sentences into crystal-clear itemized prices:
  - Ring Resizing: `From £35 / ring` (2–4 hour walk-in turnaround).
  - Claw Retipping: `From £25 / claw` (microscope inspection).
  - Ultrasonic Steam Restoration: `Free Walk-In Inspection · £20 Deep Steam`.
- **High-Impact WhatsApp CTA:**
  - Convert repair quote link into the official WhatsApp brand green (`#25D366`) button with authentic WhatsApp logo and bold white typography.

---

## 6. Client Reputation: "Loved Across London & Middlesex" (`ReviewsSection.tsx`)
- **Branding Harmonization:**
  - Rebuild from the older rounded-box design into the crisp Veyra hairline grid aesthetic (`border-t border-l border-[#E7E2DA]`).
  - Monospace section tag: `[ 04 / CLIENT EXPERIENCES & REPUTATION ]`.
  - Editorial headline: `Loved Across London & Middlesex`.
- **Trust Anchors:**
  - Add reviewer avatars / profile initials.
  - Official Google G logo + Trustpilot verification badge.
  - Real Google rating: `★ 4.3 / 5.0 · 10+ Google Business Reviews` linking to `share.google/UzzobueZI6BXs8GZQ`.

---

## 7. The Atelier Manifesto & Philosophy of Weight (`EditorialManifesto.tsx`)
- **Status:** Retained with visual balance enhancement.
- **Whitespace Elimination (Image Reference):**
  - Beneath "Philosophy of Weight / Forged Solid on Hayes Benches", add a dedicated **Trade-Certified Bullion & Density Benchmark Plaque**:
    - Digital scale readout visual (`±0.01g precision`).
    - London Assay leopard's head stamp confirmation.
    - British Hallmarking Act statutory compliance guarantee.
  - This perfectly balances the vertical height with the 3 specification cards on the right.

---

## 8. Visit the Hayes Bench & Showroom Logistics (`ShowroomLogistics.tsx`)
- **Interactive Google Map Embed:**
  - Replace the empty void on the right column with a responsive, high-performance embedded Google Map iframe centered on `136 Uxbridge Road, Hayes UB4 0JH`.
- **Opening Hours Visibility:**
  - Hours displayed **open and visible by default** (no closed dropdowns or hidden accordions).
  - Mon 12:00–17:00 | Tue–Sat 11:00–17:30 | Sun Closed.
- **Roadside Parking Copy:**
  - State clearly: *"Convenient roadside customer parking available directly outside and along Uxbridge Road"* (no mention of "bays").

---

## 9. Showroom Dossier Modal (`ShowroomDossierModal.tsx`)
- **Copy Diet:**
  - Condense the descriptive paragraph under the WhatsApp CTA to a concise, single-sentence artisan note.
  - Ensure zero black screens on mobile by maintaining underlying poster image fallbacks.
  - Keep 1 primary WhatsApp CTA (`#25D366`) and 2 clean exit routes (top header close + bottom secondary return button).

---

## 10. Copywriting, Formatting & Anti-AI Polish
- **Em Dash Elimination:** Strip all literary em dashes ("—") across the entire landing page, using standard hyphens, commas, or bullet points.
- **Mobile Usability:**
  - All form inputs set to `text-base` (16px) on mobile to prevent iOS Safari auto-zooming.
  - Minimum 48px touch targets on all buttons and navigation elements.
  - Zero horizontal overflow.

---

## 11. Verification & Deployment Pipeline
1. Code and integrate all components.
2. Verify production build with `npm run build` (confirm 0 errors).
3. Visually inspect landing page via browser subagent across desktop (1440px) and mobile (390px) viewports.
4. Git commit and push to `origin/main`.
