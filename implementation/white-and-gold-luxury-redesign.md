# Implementation Plan: White & Gold Luxury Maison Redesign

## 1. Executive Summary & Goals
Transform **Niraj Jewellers Ltd** from the current dark obsidian aesthetic into a world-class, prestigious **White & Gold Luxury Maison** (aligning with the visual grandeur of Cartier, Graff, and Harrods Fine Jewellery). Integrate the official company emblem (`NIRAJ_LOGO9.png` with "SINCE 1984"), activate the iconic **Vivaldi** calligraphy script font for artisanal flourishes, standardize the company name to **Niraj Jewellers Ltd**, and eliminate distracting live indicator ticker records to produce a clean, timeless, high-converting digital atelier.

---

## 2. Brand Asset & Identity Audit

### 2.1 The Official Emblem (`public/NIRAJ_LOGO9.png`)
* **Design Elements:**
  * Interlocking "NJ" monogram with high-karat gold leaf texture.
  * Solitaire brilliant-cut diamond crowning the apex of the "J".
  * Symmetrical flourish wings framing the monogram.
  * Verified heritage stamp: **`SINCE 1984`** (replacing the generic "EST. DECADES" placeholder with 42 years of authentic Hayes history).
* **Target Placements:**
  * **Header Navbar:** Crisp transparent scaled crest next to `NIRAJ JEWELLERS LTD`.
  * **Footer Brand Hub:** Full emblem with `HAYES • LONDON • SINCE 1984`.
  * **Favicon & Apple Touch Icons:** Multi-size rasterized assets for browser tabs and mobile home screens.
  * **Social Media OpenGraph:** Crisp centered branding on a silk alabaster white canvas.

### 2.2 Brand Typography: Vivaldi Script Integration
* **Source Font File:** `C:\Windows\Fonts\VIVALDII.TTF` (66.7 KB authentic Friedrich Peter Vivaldi Italic).
* **Technical Integration Strategy:**
  * Copy font file to `public/fonts/vivaldi.ttf`.
  * Register in `app/layout.tsx` using `next/font/local` with CSS variable `--font-vivaldi` and `display: "swap"`.
  * Expose Tailwind class `font-vivaldi` in `tailwind.config.ts`.
* **Design Application Rules:**
  * Use as an **editorial accent font** for sweeping romantic script phrases:
    * Hero headline highlight: *"London's Bespoke <span className="font-vivaldi text-gold-600 text-6xl">Goldsmith Atelier</span>"*
    * Section eyebrow scripts: *"The Atelier Journey"*, *"Bespoke Commissions"*, *"Royal Bridal Suites"*.
    * Quotes and sign-offs from Master Jeweller Viky.
  * Maintain **Cinzel / Cormorant Garamond** for majestic Roman serif uppercase headings.
  * Maintain **Plus Jakarta Sans** for ultra-crisp, high-legibility body copy and pricing specifications.

### 2.3 Legal Entity Naming
* Standardize **"Niraj Jewellers Ltd"** universally across:
  * Header monogram caption
  * Hero cinematic headline and subtext
  * Footer copyright: `© 2026 Niraj Jewellers Ltd. All Rights Reserved.`
  * Contact channels, invoices, and quote summaries
  * Page metadata, OpenGraph titles, and Schema.org JSON-LD (`legalName: "Niraj Jewellers Ltd"`).

---

## 3. White & Gold Color Architecture (WCAG 2.2 AA Compliant)

| Token | Previous (Dark) | New (White & Gold Luxury) | Purpose |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#09090B` (Obsidian) | `#FFFFFF` / `#FAF9F6` (Alabaster Silk) | Pure, clean, luminous background |
| **Card / Surface BG** | `#141416` (Atelier) | `#FFFFFF` with `#F8F6F0` subtle contrast | Crisp cards with delicate depth |
| **Card Borders** | `#27272A` (Dark Slate) | `#EADBC8` / `#D4AF37` hairline (20% opacity) | Champagne & 22ct gold fine borders |
| **Primary Typography** | `#FFFFFF` (White) | `#141416` (Deep Obsidian Charcoal) | 14.5:1 contrast against white canvas |
| **Secondary Typography** | `#A1A1AA` (Muted) | `#4A4A52` / `#5C5C66` (Warm Slate) | 7.2:1 contrast against white canvas |
| **Gold Accent (Text)** | `#D4AF37` (Bright Gold)| `#946A14` / `#855F0E` (Deep 22ct Antique Gold)| High-contrast legible gold on white |
| **Gold Accent (Gradients)**| Gold to Dark Amber | `#E2C974` → `#C5A059` → `#9E7422` | Radiant metallic luster on buttons & borders |
| **Header Backdrop** | `#09090B` 90% blur | `#FFFFFF` 90% blur + `#EADBC8` hairline border | Floating pristine glass navigation |
| **Mobile Menu** | `#09090B` Fullscreen | `#FAF9F6` Alabaster silk + Gold accents | Pure luxury mobile takeover |

---

## 4. Decommissioning the Live Indicator Records

1. **Remove Live Gold Ticker Bar (`components/hero/gold-ticker.tsx`):**
   * High-end jewellery houses do not run live financial stock tickers across their homepage hero.
   * Remove the marquee ticker component from `app/page.tsx`.
   * Keep live bullion spot rate calculations accessible on the dedicated `/gold-rates` page for clients seeking bullion scrap and investment quotes.
2. **Remove Pulsing Indicator Dots in Hero & Header:**
   * Remove the green pulsing dot and "Direct Workshop Line: Speak with Viky within 15 Minutes" sub-text from the hero.
   * Replace with a refined, permanent atelier trust badge:
     * `★ Established 1984 • 136 Uxbridge Road, Hayes • In-House Goldsmith Benches`
3. **Clean Up Showroom Live Badges:**
   * Remove blinking green status dots in favor of an elegant, static hours display on the showroom card.

---

## 5. Component-by-Component Transformation Blueprint

### 5.1 Global Shell & Layout (`app/layout.tsx` & `app/globals.css`)
* Switch `html` class from `dark` to `light`.
* Update CSS variables:
  * `--background: #FAF9F6;`
  * `--foreground: #141416;`
  * Add `--font-vivaldi` definition.
* Redefine `.gold-gradient-text` to ensure strong contrast on white backgrounds.
* Style luxury scrollbar with ivory track and warm gold thumb.

### 5.2 Header & Navigation (`components/header/navbar.tsx`)
* Replace SVG NJ box with `NIRAJ_LOGO9.png` image.
* Update brand text to **"NIRAJ JEWELLERS LTD"** and subtitle to **"HAYES • LONDON • SINCE 1984"**.
* Change background from dark blur to `bg-white/95 backdrop-blur-xl border-b border-[#EADBC8] shadow-sm`.
* Nav links: Deep charcoal `#1A1A1A` with gold hover underlines.
* WhatsApp CTA: Crisp emerald green button with white/black contrast.

### 5.3 Hero Section (`components/hero/hero-section.tsx`)
* Background: Silk alabaster `#FAF9F6` with subtle warm champagne ambient radial glows (`radial-gradient(circle at 50% 20%, rgba(212,175,55,0.08), transparent 70%)`).
* Headline:
  * *"London's Bespoke"* (Cinzel serif, deep charcoal `#141416`).
  * *"Goldsmith Atelier"* (Vivaldi cursive script, rich warm gold `#946A14`).
  * *"&amp; Direct Gold Wholesaler"* (Deep charcoal).
* Primary CTA: Antique 22ct Gold gradient button with dark text.
* Secondary CTA: Frosted white button with gold border.
* 4 Trust Cards: Pure white cards with `#EADBC8` borders and dark slate typography.

### 5.4 Bespoke CAD Journey (`components/craftsmanship/cad-journey.tsx`)
* Cards: Pure white with champagne borders, soft gold hover shadows.
* Integrated photos: Retain the authentic CAD renders and workshop bench order book images.
* Step duration pills: Soft champagne badges (`bg-[#F7F2E7] text-[#855F0E]`).

### 5.5 Curated Collections (`components/collections/collection-grid.tsx` & `reel-modal.tsx`)
* Gallery cards: Pure white frames highlighting the rich jewelry photography.
* Category filter pills: Alabaster buttons with active gold pill indicators.
* Modal: Clean white-and-gold luxury modal with gold close button and rich black typography.

### 5.6 Interactive Bespoke Estimator (`components/estimator/bespoke-estimator.tsx`)
* Architecture & purity selector cards: Pure white cards with gold selection rings.
* 60fps Slider: Champagne gold active track with glowing 22ct gold thumb.
* Summary card: Deep warm champagne/gold luxury panel.

### 5.7 Showroom & Bench Trust Hub (`components/showroom/showroom-hub.tsx`)
* Workshop photography gallery: Crisp white mats framing the workshop ledger and filigree suites.
* Operating hours card: Ivory card with clean typography.

### 5.8 Footer (`components/footer/footer.tsx`)
* Deep rich warm dark-gold/charcoal or crisp pearl-white luxury footer.
* Update legal text to **Niraj Jewellers Ltd**.

---

## 6. Execution Order & Verification Steps (Ready Upon User Approval)

1. **Stage 1 (Fonts & Logos):** Copy `VIVALDII.TTF` to `public/fonts/`, register in `layout.tsx` and `tailwind.config.ts`. Optimize `NIRAJ_LOGO9.png` for header and favicon.
2. **Stage 2 (Design Tokens & CSS):** Invert `globals.css` and Tailwind colors from obsidian to white-and-gold.
3. **Stage 3 (Header, Hero & Ticker):** Update navbar with new logo and Ltd text, remove live gold ticker, and style hero with Vivaldi script flourish.
4. **Stage 4 (Body Sections & Estimator):** Update Collections, CAD Journey, Bento, Reviews, Showroom Hub, and Bespoke Estimator.
5. **Stage 5 (Quality & Build Verification):** Run `npm run build` to confirm 0 compilation errors across all 25 routes, verify mobile responsiveness, and push to remote.
