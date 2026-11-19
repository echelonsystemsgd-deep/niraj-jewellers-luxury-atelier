# Implementation Plan: 54-Piece Atelier Collection & Mobile Video Engine

**File:** `implementation/collection.md`  
**Target Brand:** Niraj Jewellers Ltd (136 Uxbridge Road, Hayes, London UB4 0JH • Est. 1984)  
**Agency:** Mercian Wealth Automation (`https://mercianwealth.com`)  
**Status:** Approved for Coding  

---

## 1. Executive Overview

This implementation plan details the full transition of Niraj Jewellers Ltd to a live luxury digital flagship featuring:
1. **The Complete 54-Piece Masterpiece Vault:** 25 high-resolution photographs, 24 authentic workshop cinematic videos, 2 bespoke 3D CAD renders, and 3 workshop documentation records — with zero duplicates verified by MD5 checksums.
2. **Ambient Royal Crest Watermark:** Stamped center-stage behind the hero headline with 6% antique gold opacity, radial feathering, and subtle scroll parallax.
3. **Dynamic Moving Carousels:**
   * *The Infinite Motion Atelier Ribbon:* Continuous 60fps horizontal marquee of looping videos and high-contrast pieces.
   * *The Interactive Masterpiece Slider:* Touch-swipeable showcase of the Top 3 showpieces with continuous looping video and direct WhatsApp CTAs.
4. **Mobile-First Video Looping Engine:** Solving iOS Safari and Android Chrome autoplay restrictions via strict attribute engineering (`autoPlay loop muted playsInline webkit-playsinline="true" preload="metadata"`), paired with a Viewport IntersectionObserver to conserve battery and memory.
5. **Streamlined 6-Page Hierarchy:** Removing broken Instagram reel popups and standardizing navigation to `About Us`, `Collection`, `Articles`, `Showroom`, `FAQs`, and `Contact`.
6. **Zero Mentions of Viky:** Standardized to *"Atelier Concierge"*, *"Master Goldsmith"*, or *"Showroom Team"*.
7. **Direct Header Telephone CTA:** Direct call button `07955 565137` positioned prominently at the top of the header.
8. **Mercian Wealth Automation Attribution:** Dedicated footer link to `https://mercianwealth.com`.

---

## 2. Asset Inventory & Deduplication Verification

| Media Category | File Types | Count | Location |
| :--- | :--- | :--- | :--- |
| **High-Res Photography** | `.jpg`, `.jpeg` | 25 | `public/images/collections/` |
| **Workshop Cinematic Videos** | `.mp4`, `.mov` | 24 | `public/images/collections/` |
| **Bespoke 3D CAD Renders** | `.jpg` | 2 | `public/images/cad/` |
| **Atelier Ledger & Workshop** | `.jpg` | 3 | `public/images/workshop/` |
| **Total Masterpiece Assets** | — | **54** | *(Duplicates Purged)* |

### Vault Categories in `data/collections-data.ts`:
* **Bridal Suites (18 Pieces):** Royal chokers, Calcutta filigree suites, multi-tier Raani Haars, bespoke Passas, and Maang Tikkas.
* **Polki & Heritage (14 Pieces):** Uncut Syndicate diamonds, fluted Zambian melon-carved emeralds, Burmese rubies, and Basra pearl fringes.
* **22ct Gold & Kadas (12 Pieces):** Solid hand-chased lion-head kadas, traditional Rajwada bangles, 22ct solid torcs, and workshop ledger pieces.
* **Bespoke Rings & CAD (10 Pieces):** Certified natural diamond engagement rings, evil eye sapphire medallions, and 3D CAD prototype casting workflows.

---

## 3. Component Architecture & Changes

### A. Ambient Royal Crest Watermark (`components/hero/hero-section.tsx`)
* **Asset:** `public/NIRAJ_LOGO9.png`
* **Placement:** Centered directly behind the primary headline in the Hero section.
* **Dimensions:** $440\text{px} \times 440\text{px}$ on desktop, $280\text{px} \times 280\text{px}$ on mobile.
* **Styling:** `opacity-[0.06]`, `mix-blend-multiply`, radial gradient mask to dissolve edges cleanly into `#FAF8F5`.
* **Parallax:** Lightweight CSS scroll transform ($0.15\times$ scroll rate) creating three-dimensional layered depth.

### B. Moving Carousels
1. **`components/collections/infinite-motion-ribbon.tsx` (New Component):**
   * Continuous GPU-accelerated horizontal glide (`transform: translate3d`).
   * 12 alternating cards (looping video motion and high-contrast photography).
   * Pauses on hover or touch gesture.
   * Tapping any card triggers the Masterpiece Detail Lightbox.
2. **`components/collections/masterpiece-hero-slider.tsx` (New Component):**
   * Interactive slider featuring the Top 3 showpieces:
     1. *The Nizam Ruby & Basra Pearl Polki Choker* (looping workshop video).
     2. *The Calcutta Filigree 22ct Gold Bridal Suite* (London Assay hallmark guarantee).
     3. *The Chandbali Carved Zambian Emerald Melon Choker* (looping sparkle video).
   * 6-second auto-advance timer with gold micro-progress indicator.
   * Touch-drag swipe gestures for mobile with elastic snap alignment.

### C. Video Looping Engine (`components/collections/collection-grid.tsx` & `reel-modal.tsx`)
* Seamless inline loop for video items:
  ```html
  <video
    src={item.videoUrl}
    autoPlay
    loop
    muted
    playsInline
    webkit-playsinline="true"
    preload="metadata"
    className="w-full h-full object-cover"
  />
  ```
* High-resolution poster image fallback to ensure zero Cumulative Layout Shift (CLS = 0).
* Sound toggle and fullscreen inspection available inside the Masterpiece Lightbox Modal.

### D. Navigation & Page Structure
* **Navbar (`components/header/navbar.tsx`) & Footer (`components/footer/footer.tsx`):**
  1. `About Us` (`/about`)
  2. `Collection` (`/collections`)
  3. `Articles` (`/articles`)
  4. `Showroom` (`/showroom`)
  5. `FAQs` (`/faqs`)
  6. `Contact` (`/contact`)
* **Header CTA:** Phone number `07955 565137` with `tel:07955565137` link.
* **Footer Attribution:** "Designed & Built by Mercian Wealth Automation" (`https://mercianwealth.com`).

---

## 4. Mobile Ergonomics & Optimization Checklist

- [x] Minimum $48\text{px} \times 48\text{px}$ touch targets across all interactive buttons, chips, and accordions.
- [x] Mobile-friendly 1-column responsive card layouts on viewport widths $< 640\text{px}$.
- [x] Sticky bottom dock providing 1-tap Call Atelier, WhatsApp Concierge, and Google Maps directions.
- [x] Strict inline muted video playback preventing mobile full-screen video hijack on iOS.
- [x] Touch-swipe inertia on category filter chips and interactive sliders.

---

## 5. Verification & Deployment Pipeline

1. **Database Build:** Execute `scripts/build-collections-data.js` to compile all 54 items into `data/collections-data.ts`.
2. **Component Integration:** Wire watermark, infinite ribbon, hero slider, and video loop engine into `app/page.tsx` and `app/collections/page.tsx`.
3. **Static Build Verification:** Run `npm run build` and ensure all 27 static and dynamic routes compile with **0 errors**.
4. **Git Production Push:** Commit and push to `origin/main` for instantaneous Vercel deployment.
