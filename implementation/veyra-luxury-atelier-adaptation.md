# ARCHITECTURAL SPECIFICATION: VEYRA × NIRAJ JEWELLERS
## High-Ticket 3D Goldsmith Atelier & Digital Flagship Adaptation

**Platform:** Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS 3.4 + Three.js WebGL + Web Audio API  
**Entity:** Niraj Jewellers Ltd (Est. 1984 · London Assay Leopard's Head Hallmarked · Hayes Flagship)  
**Location:** 136 Uxbridge Road, Hayes, Middlesex, UB4 0JH  
**Branch:** `feature/veyra-digital-flagship`  
**Route:** `/atelier` (and integrated showroom discovery throughout flagship)

---

## 1. STRATEGIC CONVERSION ARCHITECTURE

Traditional high-value South Asian jewellery transactions (£3,000 to £20,000+ for 22ct bridal suites, syndicates, and bullion) suffer near-100% cart abandonment when forced into an anonymous e-commerce cart. Buyers require:
1. Physical weight verification on trade-approved carat scales.
2. Independent London Assay Leopard's Head verification (`916` 22ct / `750` 18ct / `999.9` 24ct).
3. Live LBMA gold gram rate transparency.
4. Intricate fitting and bespoke sizing at the bench.

### The VEYRA Solution for Niraj Jewellers:
- **E-Commerce Cart Removed**: Replaced with **Showroom Vault Dossier** and **Direct WhatsApp VIP Deep-Linking**.
- **Alloy Purity Reframed**: 22ct Royal Yellow Gold (91.6% purity), 18ct Rose Gold (75.0%), and 950 Pure Platinum.
- **Hero Canvas Scrub**: Frame-accurate visual scrubbing displaying 1064°C gold crucible melting, laser micro-welding, and master benchwork.
- **Real-Time 3D WebGL Configurator**: Three.js PBR metal shader with live material switching, OrbitControls, and studio lighting.
- **Live Bench Ticker**: LBMA daily spot rate per gram and hallmark reassurance.
- **In-House Same-Day Bench Repairs**: Highlighting 2–4 hour laser resizing, claw retipping, and ultrasonic cleaning for footfall acquisition.
- **Hyper-Local Hayes Logistics**: 136 Uxbridge Road, Hayes, UB4 0JH, opening hours, Google Maps navigation, and workshop direct dial.

---

## 2. DESIGN TOKENS & METALLURGY MATRIX

### Color Palette
- `--bg-primary`: `#FAF9F5` (Warm Alabaster / Mayfair Cream)
- `--bg-surface`: `#FFFFFF` (Pristine Museum White)
- `--border-hairline`: `#E8DEC8` / `#E7E2DA` (1px Architectural Rule)
- `--text-primary`: `#141416` (Deep Graphite Carbon)
- `--text-muted`: `#57534E` (Stone Muted Grey)
- `--text-gold`: `#C6A75E` / `#D4AF37` (22ct Royal Gold Hallmark)
- `--whatsapp`: `#25D366` (Direct Goldsmith Line)

### Metallurgy PBR Shaders
| Alloy | Gold Content | PBR BaseColor | Metalness | Roughness | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **22ct Royal Gold** | 91.6% (`916`) | `#D4AF37` | `0.98` | `0.22` | Deep, saturated warm yellow-orange gold |
| **18ct Rose Gold** | 75.0% (`750`) | `#C58F78` | `0.95` | `0.25` | Warm coppery champagne pink |
| **950 Platinum** | 95.0% (`950`) | `#D8DEE4` | `0.96` | `0.18` | Dense, cold specular white-silver |
| **Cabochon Stone** | Natural Garnet | `#881337` | `0.10` | `0.05` | Deep cabochon transmission with dispersion |

---

## 3. COMPONENT BREAKDOWN (`/atelier`)

1. **`lib/sound.ts`**:
   - Native Web Audio API synthesis.
   - 55Hz & 110Hz dual sine drone with 220Hz low-pass filter and subtle gain modulation.
   - 1800Hz / 12ms decay high-frequency metallic tick for micro-interactions.
   - Non-blocking browser autoplay compliance.

2. **`components/atelier/LiveGoldTicker.tsx`**:
   - Architectural ticker: `LIVE ATELIER BENCH RATE: 22ct £68.40/g · 24ct 999.9 Bullion Available · London Assay Stamped · Hayes Bench Open`.
   - Live LBMA reference and quick WhatsApp booking link.

3. **`components/atelier/AtelierNavbar.tsx`**:
   - Fixed header with blur backdrop.
   - Left brand mark: `NIRAJ JEWELLERS — MASTER GOLDSMITHS EST. 1984`.
   - Sound toggle `[ SOUND: OFF / ON ]` with animated frequency bars.
   - Direct button `[ SHOWROOM: HAYES ]` & `[ INQUIRE ON WHATSAPP ]`.

4. **`components/atelier/CinematicHero.tsx`**:
   - Canvas scroll-scrubbing hero over a sticky track.
   - Procedural 1064°C gold melting & sparks simulation rendered via deterministic `requestAnimationFrame`.
   - Micro-HUD: `BENCH SEQUENCE [ 01 / 72 ]`, `SCRUB: {percent}%`, and interactive hotspot pins.
   - Alloy switcher: `22ct Royal Gold`, `18ct Rose Gold`, `950 Platinum`.

5. **`components/atelier/ProductDetailViewer.tsx`**:
   - Real-time Three.js WebGL canvas with procedural luxury signet / bridal piece.
   - Live alloy switcher triggering PBR material updates in real time.
   - OrbitControls with damped rotation and touch pinch zoom clamping.

6. **`components/atelier/ProductGrid.tsx`**:
   - 3-column architectural hairline grid showcasing verified collection pieces:
     - 22ct Royal Polki Bridal Suite
     - Solid 22ct Gold Kada (38.5g)
     - Solitaire Diamond Signet Ring
     - Kundan Choker & Jhumka Set
     - Mangalsutra Diamond Pendant
     - 24ct Fine Gold Investment Bullion Bar
   - Click card opens the **Showroom Vault Dossier Modal**.

7. **`components/atelier/ShowroomDossierModal.tsx`**:
   - Full-screen modal with Lenis / page scroll lock.
   - High-res photography switchable to 3D WebGL inspection.
   - US / UK / Indian ring and bangle sizing conversion.
   - Action 1: **Book Hayes Showroom Viewing** (pre-fills booking request).
   - Action 2: **Inquire on WhatsApp** (`wa.me/447955565137` pre-filled with piece details).

8. **`components/atelier/RepairsShowcase.tsx`**:
   - 3-column architectural grid for same-day walk-in repairs:
     - Laser Ring Resizing (2–4 Hours)
     - Diamond Claw Retipping & Stone Resetting
     - Ultrasonic Steam Cleaning & London Assay Verification

9. **`components/atelier/ProvenanceSection.tsx`**:
   - Unboxing architecture: Solid Vault Presentation Case, London Assay Dossier, Lifetime Claw Guarantee.

10. **`components/atelier/ShowroomLogistics.tsx`**:
    - 136 Uxbridge Road, Hayes, UB4 0JH address, opening hours, Google Maps navigation, workshop phone `020 8573 9323`.

---

## 4. VERIFICATION CRITERIA

- 100% Mobile responsive across 360px to 1920px+ viewports with **0px horizontal overflow**.
- Strict TypeScript `tsc --noEmit` and Next.js `npm run build` with **0 errors**.
- Safe handling of browser AudioContext and WebGL canvas lifecycles.
