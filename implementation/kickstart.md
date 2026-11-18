# NIRAJ JEWELLERS — DIGITAL SHOWROOM & CLIENT ACQUISITION ENGINE
## Master Architectural Blueprint & Implementation Plan (`KICKSTART.MD`)

---

### EXECUTIVE SUMMARY & MISSION DIRECTIVE
**Client:** Niraj Jewellers (Niraj Jewellers UK / Shiva Technology Ltd)  
**Principal Master Jeweller:** Viky  
**Flagship Location:** 136 Uxbridge Road, Hayes, Middlesex, UB4 0JH, London, UK  
**Direct VIP WhatsApp & Line:** `+44 7955 565137` (International: `+447955565137`)  
**Social Channels:** Instagram (`@nirajjewellersltd`), TikTok (`@nirajjewellersltd`)  

This document sets the architectural foundation for transforming Niraj Jewellers from a traditional brick-and-mortar Hayes goldsmith into a high-converting luxury digital atelier. The platform is engineered to turn cold online traffic (via Google Local Search, Instagram, and TikTok) into qualified showroom visits and direct 1-tap WhatsApp VIP consultations with Viky.

---

## 1. ARCHITECTURE: THE 7 STAGES OF THE BUSINESS GROWTH MACHINE

The entire digital experience is mapped to the 7 Stages of the Business Growth Machine to ensure maximum conversion velocity and zero lead leakage:

```
[ STAGE 1: TRAFFIC ]
  - Local Hayes / West London Schema.org JSON-LD (JewelryStore, UB4 0JH)
  - Instagram & TikTok bio bridge with rich OpenGraph meta cards
  - High-intent SEO keywords: 22ct Gold Hayes, Bespoke Indian Bridal London, Goldsmith Repairs
         │
         ▼
[ STAGE 2: LEAD CAPTURE ]
  - 3-Step Interactive Bespoke Jewellery Cost & Turnaround Estimator
  - Curated Video Reels Collection with 1-Tap "Enquire on WhatsApp"
  - VIP Showroom Private Viewing Booking Modal
         │
         ▼
[ STAGE 3: LEAD MANAGEMENT ]
  - "Direct Workshop Line: Speak with Viky within 15 Minutes"
  - Option B Modal Flow: On-screen bespoke summary + 1-Tap WhatsApp launch + 1-Click Copy
  - Zero dropped leads through immediate client-side persistence
         │
         ▼
[ STAGE 4: SALES ACCELERATION ]
  - 4-Step Goldsmith Journey Preview (Sketch → 3D CAD → Workshop Cast → Assay Hallmark)
  - Wholesale Advantage Breakdown (Direct workshop pricing without Mayfair markups)
         │
         ▼
[ STAGE 5: RETENTION & REFERRALS ]
  - Gold Purity & Assay Hallmarking Guide (22ct 916 vs 18ct 750 vs 24ct 999)
  - Verified Google 5-Star Reviews showcase + direct review contribution launcher
         │
         ▼
[ STAGE 6: OPERATIONS INTEGRITY ]
  - In-House Repair & Restoration Concierge Bento Grid
  - Guarantee: "Your jewellery never leaves 136 Uxbridge Road"
         │
         ▼
[ STAGE 7: INTELLIGENCE & TRACKING ]
  - Granular UTM parameters on all outbound WhatsApp links:
    ?ref=hero_cta | ?ref=estimator_ring | ?ref=reel_bridal_22ct | ?ref=repairs_dock
```

---

## 2. CLIENT PREFERENCES & STRATEGIC DECISIONS

1. **Social Integration (Instagram & TikTok):**
   - High-fidelity curated visual showcases representing `@nirajjewellersltd` (Instagram) and `@nirajjewellersltd` (TikTok).
   - TikTok/Instagram reel-style fullscreen modals with video looping previews, audio toggles, and direct piece enquiry links.
2. **Live Gold Rate Data Flow (API & Live Cache Engine):**
   - Next.js server route `/api/gold-rates` fetching live spot gold market prices (XAU/GBP).
   - Dynamic conversion to 24ct (99.9%), 22ct (91.6% traditional Asian gold standard), and 18ct (75.0% fine jewellery).
   - Intelligent stale-while-revalidate caching (1-hour TTL) with high-accuracy live market fallback to guarantee zero API downtime or rate-limit failure.
3. **Lead Capture & WhatsApp Submission Modal (Option B Flow):**
   - When a client completes the **Bespoke Estimator** or requests a **Private Showroom Viewing**, an opulent, frosted modal appears.
   - Summarizes their exact inputs (e.g. *Type: 22ct Bridal Necklace, Metal: 22ct Yellow Gold, Stones: Polki & Uncut Diamond, Est. Timeline: 10-14 days*).
   - **Primary CTA:** `[Send via WhatsApp to Viky (+44 7955 565137)]` (auto-opens WhatsApp with formatted message).
   - **Secondary CTA:** `[Copy Summary to Clipboard]` (shows instant checkmark feedback for desktop users without WhatsApp Web).
4. **Cultural & Linguistic Authenticity:**
   - Seamless integration of authentic terminology respected by British Asian brides and gold investors: *22ct Hallmarked (916)*, *Polki*, *Kundan*, *Kada*, *Mangalsutra*, *Chooda*, *Solitaire*, *VVS Natural & Certified Lab Diamonds*, *Temple Jewellery*.

---

## 3. DESIGN SYSTEM & VISUAL IDENTITY SPECIFICATION

### Color Palette (Mayfair / Old Bond Street Haute Joaillerie)
- **Obsidian Black (`#09090B`):** Deep luxury void background.
- **Atelier Charcoal (`#141416`):** Card background with fine zinc borders (`#27272A`).
- **Imperial Champagne Gold (`#D4AF37`, `#C5A059`):** Accent gold accents and active states.
- **Gold Foil Gradient:** `linear-gradient(135deg, #FFF3D6 0%, #D4AF37 50%, #996515 100%)`.
- **Muted Platinum (`#E4E4E7`, `#A1A1AA`):** High-contrast editorial typography.
- **Emerald Green (`#10B981` / `#25D366`):** Live London showroom open indicator and authentic WhatsApp branding.

### Typography Hierarchy
- **Display & Headings:** `Cormorant Garamond` (Google Font serif, tracking-wide to tracking-widest, luxury editorial).
- **Functional UI & Body:** `Plus Jakarta Sans` (ultra-clean, high legibility on mobile screens).

### Mobile-First Ergonomics
- **Target Screens:** Tested on 360px and 390px viewports (iPhone 14/15/16 Pro). Zero horizontal overflow.
- **Minimum Tap Targets:** 44x44px on all interactive elements, tabs, sliders, and buttons.
- **Sticky Frosted Action Dock (Mobile Only):**
  - `[📞 Call Showroom]` → `tel:+447955565137`
  - `[💬 WhatsApp Viky]` → Instant WhatsApp deep link with icon
  - `[📍 Directions]` → Opens Google Maps directly to `136 Uxbridge Road, Hayes UB4 0JH`

---

## 4. DETAILED COMPONENT BREAKDOWN & DIRECTORY MAP

```
niraj-jewellers-luxury-atelier/
├── app/
│   ├── api/
│   │   └── gold-rates/
│   │       └── route.ts          # Live gold price fetcher & cache engine
│   ├── favicon.ico
│   ├── globals.css               # Obsidian & Gold theme variables, custom scrollbars
│   ├── layout.tsx                # Font configurations, SEO Schema.org JSON-LD
│   └── page.tsx                  # Full single-page luxury experience
├── components/
│   ├── ui/                       # Radix & Tailwind primitives
│   │   ├── dialog.tsx
│   │   ├── tabs.tsx
│   │   ├── slider.tsx
│   │   ├── accordion.tsx
│   │   └── badge.tsx
│   ├── header/
│   │   ├── navbar.tsx            # Desktop & mobile nav with brand mark
│   │   └── showroom-status.tsx   # Real-time London time calculator (Open/Closed)
│   ├── hero/
│   │   ├── hero-section.tsx      # Cinematic headline, dual CTAs, gold glow
│   │   └── gold-ticker.tsx       # Live Indicative Gold Rates Marquee
│   ├── collections/
│   │   ├── collection-grid.tsx   # Filterable grid (Bridal, 22ct Chains, Rings, Polki)
│   │   └── reel-modal.tsx        # Fullscreen Instagram/TikTok style reel viewer
│   ├── estimator/
│   │   ├── bespoke-estimator.tsx # 3-step interactive price/turnaround calculator
│   │   └── quote-summary-modal.tsx# Option B WhatsApp confirmation modal
│   ├── craftsmanship/
│   │   ├── cad-journey.tsx       # 4-Step Sketch to Assay Hallmark timeline
│   │   └── wholesale-advantage.tsx# Comparison: Niraj Workshop vs Retail Markups
│   ├── repairs/
│   │   └── repairs-bento.tsx     # In-house repairs & restoration concierge
│   ├── showroom/
│   │   ├── showroom-hub.tsx      # Hayes showroom location, map launcher, hours
│   │   └── vip-booking-modal.tsx # Private viewing reservation modal
│   ├── trust/
│   │   ├── reviews-section.tsx   # Google 5-Star reviews carousel & review prompt
│   │   └── hallmark-guide.tsx    # 22ct / 18ct UK Assay compliance badge
│   ├── mobile/
│   │   └── mobile-dock.tsx       # Sticky frosted bottom bar (Call, WhatsApp, Map)
│   └── footer/
│       └── footer.tsx            # Legal, hallmarking credentials, social links
├── data/
│   ├── collections-data.ts       # Curated bridal suites, rings, kadas & reel media
│   ├── reviews-data.ts           # Genuine customer testimonials
│   └── repairs-data.ts           # Services, turnaround times, and descriptions
├── lib/
│   ├── utils.ts                  # Tailwind class merge helper (cn)
│   ├── whatsapp.ts               # WhatsApp deep link builder with UTM attribution
│   └── showroom-hours.ts         # London time calculation utility
└── implementation/
    └── kickstart.md              # THIS FILE: Master Architecture & Execution Plan
```

---

## 5. PHASED EXECUTION ROADMAP

### Phase 1: Environment & Tooling Setup
1. Initialize Next.js 15 project with TypeScript, Tailwind CSS, Lucide icons, and Framer Motion.
2. Configure typography (`Cormorant Garamond` and `Plus Jakarta Sans`) and CSS luxury theme variables.
3. Establish data schemas (`collections-data.ts`, `reviews-data.ts`, `repairs-data.ts`).

### Phase 2: Live Data & Business Logic
1. Implement `showroom-hours.ts` to dynamically calculate real-time status in Hayes (`Europe/London` timezone: Mon 12-5, Tue-Sat 11-5, Sun Closed/Seasonal).
2. Implement `/api/gold-rates` route with live spot data fetching and fallback for 24ct, 22ct, and 18ct per gram.
3. Implement `whatsapp.ts` generator with pre-formatted luxury consultation text and UTM tracking tags.

### Phase 3: Core UI Modules Development
1. **Header & Status Bar:** Real-time opening badge, gold branding, desktop links, WhatsApp CTA.
2. **Hero & Marquee:** Cinematic presentation, dual action buttons, live gold rate ticker.
3. **Curated Collections & Reels Modal:** Category filtering, hover glow, full-screen reel player with direct piece enquiry.
4. **Interactive Bespoke Estimator:** 3-step reactive selection (Type, Metal, Stone) with live turnaround calculation.
5. **Option B Quote Confirmation Modal:** Summary review, 1-tap WhatsApp redirect, 1-click clipboard copy with feedback.
6. **In-House Workshop & Repairs Bento:** Same-day sizing, polishing, retipping, watch care with security guarantees.
7. **Craftsmanship Journey & Wholesale Advantage:** Visual timeline and direct-from-workshop transparency.
8. **Hayes Showroom Hub:** Interactive hours accordion, 1-click Google Maps launcher, directions details.
9. **Google Reviews & Trust Credentials:** Testimonials, London Assay Office hallmarking badge.
10. **Sticky Mobile Dock:** Frosted glass bottom bar with Call, WhatsApp, and Directions.

### Phase 4: Polish, Optimization & CRO Validation
1. Verify 360px & 390px mobile responsiveness with zero horizontal scroll.
2. Ensure touch targets $\ge 44\text{px}\times 44\text{px}$.
3. Verify all WhatsApp outbound links point accurately to `+44 7955 565137` with pre-filled text.
4. Validate Schema.org `JewelryStore` JSON-LD structured data.

---

## 6. COMPLETION CRITERIA
- [x] Full architectural analysis completed.
- [x] Client requirements (Instagram/TikTok, Live Rates, Option B Modal, Cultural Nuances) incorporated.
- [x] Zero AI slop, realistic goldsmithing copy and authentic London jewellery store details.
- [ ] Codebase scaffolded and executed per roadmap upon user approval.
