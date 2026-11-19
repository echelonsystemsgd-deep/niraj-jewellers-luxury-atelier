# Niraj Jewellers Ltd — Full Flagship Atelier Master Brainstorming & Architecture Blueprint

**Document Version:** 2.0.0 (Production Transition)  
**Atelier:** Niraj Jewellers Ltd (136 Uxbridge Road, Hayes, London UB4 0JH • Est. 1984)  
**Agency:** Mercian Wealth Automation (`https://mercianwealth.com`)  
**Status:** Comprehensive Architecture & Implementation Masterplan

---

## 1. Executive Vision & Brand Identity

Transitioning the digital presence of Niraj Jewellers Ltd from an initial prototype to a **commercial flagship luxury atelier** worthy of London’s high-end jewellery district (Mayfair, Bond Street, Hatton Garden).

```
┌────────────────────────────────────────────────────────────────────────┐
│                        NIRAJ JEWELLERS LTD                             │
│                     HAYES • LONDON • SINCE 1984                        │
├────────────────────────────────────────────────────────────────────────┤
│  Palette:       White Canvas (#FFFFFF) + Warm Ivory (#FAF8F5)          │
│  Accents:       22ct Antique Gold (#996515 / #8C6212 / #DFBF7A)         │
│  Borders:       Refined Champagne (#E8DEC8)                            │
│  Typography:    Vivaldi Cursive Flourishes + Cormorant Garamond Serif   │
│  Identity:      Generational Goldsmith Workshop & Direct Bullion Dealer│
│  Direct CTA:    Showroom Telephone (07955 565137) in Top Header        │
│  Agency Credit: "Designed & Built by Mercian Wealth Automation"        │
└────────────────────────────────────────────────────────────────────────┘
```

### Brand Tone & Persona Guardrails
* **Zero Viky Mentions:** Replaced 100% of references with *"Atelier Concierge"*, *"Master Goldsmith"*, or *"Showroom Team"*.
* **Heritage Lineage:** 40+ years continuous operation on Uxbridge Road, Hayes (Since 1984).
* **Direct Workshop Advantage:** In-house goldsmith workbenches, zero 300% high-street markups, London Assay Office 916 hallmarking guarantees.

---

## 2. 54-Piece Unique Asset Catalog & Deduplication Strategy

### Asset Audit Verification
Through binary MD5 checksum analysis, redundant duplicate downloads were purged, verifying **54 net unique luxury assets**:

```
Total Masterpiece Assets: 54
├── High-Resolution Photography: 25 Unique Pieces (Collections)
├── Authentic Workshop Videos:   24 Unique Videos (.mp4 & .mov)
├── Precision 3D CAD Renders:     2 Bespoke Commissions (Cad)
└── Atelier Bench Records:        3 Workshop Ledger Photos (Workshop)
```

### Categorization Architecture (Balanced Across 4 Vaults)
1. **Bridal Suites (18 Pieces):**
   * Heavy 22ct gold multi-tier chokers, Calcutta filigree collar suites, layered Raani Haars, bespoke Passas, and Maang Tikkas.
2. **Polki & Heritage (14 Pieces):**
   * Uncut Syndicate diamonds, fluted Zambian melon-carved emeralds, Burmese ruby cabochons, and Basra pearl fringes.
3. **22ct Gold & Kadas (12 Pieces):**
   * Solid hand-chased lion-head kadas, traditional Rajwada bangles, 22ct solid torcs, and workshop ledger commissions.
4. **Bespoke Rings & CAD (10 Pieces):**
   * Certified natural diamond solitaires, evil eye sapphire medallions, and 3D CAD prototype casting workflows.

---

## 3. Royal Crest Ambient Watermark Architecture

### Design & Visual Psychology
To evoke the grandeur of a sovereign royal warrant and watermarked London Assay hallmarking papers:

* **Source Asset:** [`public/NIRAJ_LOGO9.png`](file:///c:/Users/Deepg/OneDrive/Desktop/The%20Real%20World/Campuses/AI%20Automation/New%20Lessons/CODING/niraj-jewellers-luxury-atelier/public/NIRAJ_LOGO9.png) (Official crest with royal crown, heraldic flourishes, and monogram).
* **Placement:** Centered directly in the background of the Hero Section (`components/hero/hero-section.tsx`), positioned behind the primary H1 headline.
* **Dimensions:**
  * Desktop ($1024\text{px}+$): $440\text{px} \times 440\text{px}$
  * Tablet ($768\text{px}$): $360\text{px} \times 360\text{px}$
  * Mobile ($375\text{px}$): $260\text{px} \times 260\text{px}$
* **Styling & Blending:**
  * Opacity: `opacity-[0.06]` (6% opacity).
  * Filter: Soft ambient gold sepia tone with `mix-blend-multiply`.
  * Mask: Radial gradient mask (`mask-radial-gradient`) so the perimeter dissipates into the `#FAF8F5` ivory canvas with zero hard lines.
* **Scroll Parallax:** Driven by lightweight CSS transforms (`translateY`) moving at $0.15\times$ the scroll speed, creating a three-dimensional layered canvas.

---

## 4. Dynamic Moving Carousels Engine

### Carousel 1: The "Infinite Motion Atelier Ribbon" (Continuous Marquee)
* **Location:** Directly beneath the Hero section on the Homepage.
* **Technical Implementation:**
  * Pure CSS infinite keyframe animation (`translateX(0)` to `translateX(-50%)`).
  * Utilizes `transform: translate3d` for GPU hardware acceleration, eliminating CPU lag on mobile devices.
  * Pauses on hover (`:hover`) or touch (`:active`) via `animation-play-state: paused`.
* **Content:** 12 curated cards alternating between looping video motion and high-contrast photography.
* **Interaction:** Tapping any card opens the focused **Masterpiece Lightbox Modal** with technical specs and direct WhatsApp enquiry.

### Carousel 2: The "Interactive Masterpiece Slider" (Top 3 Showpieces)
* **Location:** Primary showcase section of the Homepage.
* **Technical Implementation:**
  * Framer Motion / touch-drag gesture integration with elastic physics.
  * Auto-advances every 6 seconds with a micro-thin gold progress line.
  * Left ($\leftarrow$) and Right ($\to$) gold circular navigation buttons.
  * Dot pagination with active 22ct antique gold indicators.
* **Curated Showpiece Selection:**
  1. *The Nizam Ruby & Basra Pearl Polki Choker* (with authentic looping workshop video).
  2. *The Calcutta Filigree 22ct Gold Bridal Suite* (with London Assay Office guarantee).
  3. *The Chandbali Carved Zambian Emerald Melon Choker* (with looping sparkle video).

---

## 5. Mobile-First Video Looping Engine (Solving iOS & Android Restrictions)

### The Mobile Autoplay Challenge
Mobile operating systems (iOS Safari, Android Chrome) block autoplay and throw `NotAllowedError` if videos attempt to play with audio or without inline playback declaration.

### The Solution: Strict Attribute Engineering
Every video instance across the site is built with the mandatory combination:
```html
<video
  src="/images/collections/<video-file>.mp4"
  autoPlay
  loop
  muted
  playsInline
  webkit-playsinline="true"
  preload="metadata"
  className="w-full h-full object-cover"
/>
```

### Viewport Intersection Observer (Battery & Memory Safety)
To prevent mobile devices from decoding 24 videos simultaneously:
* An `IntersectionObserver` detects when a video card enters the viewport ($\ge 25\%$ visible).
* Entering viewport $\to$ call `video.play()`.
* Leaving viewport $\to$ call `video.pause()`.
* High-resolution poster image displayed immediately while video initializes, ensuring zero Cumulative Layout Shift (CLS = 0).

---

## 6. Site Structure & Streamlined Navigation (6 Key Pages)

Per user directive, all external reel popups and broken Instagram dependencies are removed, replacing them with a focused 6-page hierarchy:

```
1. About Us     (/about)       ── 40+ Years of Goldsmith Heritage Since 1984
2. Collection   (/collections) ── Full 54-Piece Masterpiece Vault & Categories
3. Articles     (/articles)    ── 4 In-Depth Guides (Hallmarking, CAD, Repairs, Bullion)
4. Showroom     (/showroom)    ── 136 Uxbridge Road Hub, Interactive Map & Live Hours
5. FAQs         (/faqs)        ── Searchable Workshop Transparency Directory
6. Contact      (/contact)     ── Direct Phone 07955 565137 & WhatsApp Concierge
```

---

## 7. Mobile Viewport & Ergonomics Engineering

* **Touch Target Compliance:** Every interactive button, filter chip, and accordion tab enforces a minimum touch area of $48\text{px} \times 48\text{px}$ (exceeding WCAG 2.2 AA and Apple HIG).
* **Sticky Mobile Action Dock:**
  * *Call Atelier:* `tel:07955565137`
  * *WhatsApp Concierge:* Instant pre-filled chat
  * *Directions:* Google Maps navigation to 136 Uxbridge Road
* **Responsive Breakpoints:**
  * Mobile: 1-column fluid cards ($375\text{px}$ to $639\text{px}$)
  * Tablet: 2-column balanced grid ($640\text{px}$ to $1023\text{px}$)
  * Desktop: 4-column luxury showcase ($1024\text{px}+$)
