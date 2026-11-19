# Production Website Masterplan: Niraj Jewellers Ltd
*Transitioning from Prototype to Flagship Production Maison*

## 1. Executive Direction & Core Mandates

| Requirement | Prototype Implementation | Production Maison Specification |
| :--- | :--- | :--- |
| **Stage & Mode** | Interactive Prototype with disclaimers | **100% Production-Grade Flagship Website** |
| **Colour Palette** | Dark Obsidian (`#09090B`) & Zinc | **White, Cream & 22ct Gold** (Matching Logo) |
| **Primary Logo** | CSS Monogram Badge | **Official `NIRAJ_LOGO9.png`** (Gold NJ, Diamond, Since 1984) |
| **Brand Identity** | Niraj Jewellers (Generic) | **Niraj Jewellers Ltd** (Formal Legal Branding) |
| **Heritage Year** | "EST. DECADES" | **"SINCE 1984"** (42 Years of Hayes Goldsmithing) |
| **Key Typography** | Cormorant Garamond / Cinzel | **Vivaldi Script** (Accents & Flourishes) + Cinzel + Inter |
| **Live Indicator / Prices**| Live Gold Ticker & Pulsing Dots | **REMOVED** (Clean, timeless haute joaillerie focus) |
| **Header Phone CTA** | WhatsApp button only | **Direct Phone CTA at Top** (`+44 7955 565137`) + WhatsApp |
| **Representative Naming**| "Viky" mentioned in CTAs | **"Atelier Representative" / "Master Goldsmith"** |
| **Bespoke Estimator** | Budget Slider / Configurator | **REMOVED** from Landing Page (Replaced by Visual CAD) |
| **Showcase Curating** | 16 loose items in grid | **Top 3 Masterpieces Showcase** on Home, rest on `/collections` |
| **Media Playback** | Standard video controls | **Seamless Infinite Loop** (`autoPlay loop muted playsInline`) |
| **Agency Attribution** | Shiva Technology placeholder | **"Designed & Built by Mercian Wealth Automation"** (`mercianwealth.com`) |

---

## 2. White, Cream & Gold Color Palette Architecture

Inspired directly by the golden foil texture and ivory canvas of the official Niraj Jewellers Ltd emblem:

```css
:root {
  /* Canvas Backgrounds */
  --bg-primary: #FFFFFF;        /* Pure brilliant white */
  --bg-secondary: #FAF8F5;      /* Warm alabaster cream */
  --bg-tertiary: #F5EFE6;       /* Soft champagne silk */
  --bg-card: #FFFFFF;           /* Crisp card surface */
  
  /* Borders & Hairlines */
  --border-gold: #E6D7BD;       /* Soft warm gold hairline */
  --border-gold-accent: #D4AF37;/* 22ct pure gold border */
  
  /* Typography */
  --text-primary: #141416;      /* Deep obsidian charcoal (14.8:1 contrast) */
  --text-secondary: #4A4A52;    /* Warm graphite slate (7.4:1 contrast) */
  --text-gold-dark: #8C6212;    /* High-contrast deep antique gold for text on white */
  
  /* Metallic Accents */
  --gold-metallic: linear-gradient(135deg, #DFCA7D 0%, #C5A059 45%, #9E7422 100%);
  --gold-glow: 0 10px 30px -5px rgba(212, 175, 55, 0.12);
}
```

---

## 3. Typography: Vivaldi Script Integration Strategy

1. **Source Asset:** Copy `C:\Windows\Fonts\VIVALDII.TTF` into `public/fonts/vivaldi.ttf`.
2. **Next.js Local Font:**
   ```ts
   import localFont from "next/font/local";
   export const vivaldi = localFont({
     src: "../public/fonts/vivaldi.ttf",
     variable: "--font-vivaldi",
     display: "swap",
   });
   ```
3. **Usage Hierarchy:**
   * **Vivaldi Script (`font-vivaldi`):**
     * Hero cursive highlight: *"London's Bespoke <span className="font-vivaldi text-5xl sm:text-6xl text-[#8C6212]">Goldsmith Atelier</span>"*
     * Section cursive eyebrows: *"Handcrafted Since 1984"*, *"The Bridal Heritage"*, *"Royal Commissions"*
     * Artisan quotation marks and signature accents.
   * **Cinzel / Roman Serif:**
     * Structural headings, collection names, and navigation labels in refined uppercase.
   * **Plus Jakarta Sans / Inter:**
     * High-clarity paragraphs, weight specifications, metal purity stamps, and contact details.

---

## 4. Landing Page Streamlining & Showcase Curation

### 4.1 Header Overhaul (Viky's Phone Requirement)
* **Left:** Official `NIRAJ_LOGO9.png` emblem + `NIRAJ JEWELLERS LTD` | `HAYES • LONDON • SINCE 1984`.
* **Center:** Navigation links (`COLLECTIONS`, `BESPOKE ATELIER`, `IN-HOUSE REPAIRS`, `THE SHOWROOM`, `CONTACT`).
* **Right:**
  * **Direct Phone Line:** `<a href="tel:+447955565137" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold text-xs font-semibold text-stone-900 bg-white hover:bg-cream">`
    * Telephone Icon + `"07955 565137"`
  * **WhatsApp Concierge:** `<a href="..." className="bg-whatsapp text-black font-semibold text-xs px-4 py-1.5 rounded-full">`
    * WhatsApp Icon + `"WhatsApp Concierge"`

### 4.2 Hero Section (Clean, Persuasive, Ticker Removed)
* **No Live Ticker Tape:** Eliminate the marquee ticker bar.
* **Persuasive Headline:**
  * *"London's Bespoke <span className="font-vivaldi text-[#8C6212]">Goldsmith Atelier</span> &amp; Fine Jewellery House"*
* **Persuasive Subtitle:**
  * *"For over four decades, Niraj Jewellers Ltd has handcrafted majestic 22ct Asian bridal suites, GIA-certified diamond creations, and bespoke heirlooms directly on our Uxbridge Road jeweler benches. Experience master craftsmanship without high-street retail markups."*
* **Dual Action CTAs:**
  * `[ Explore Bridal Masterpieces → ]` (Smooth scroll to curated showcase)
  * `[ Speak with an Atelier Representative ]` (Direct WhatsApp / Call)
* **Heritage Badges (Replacing Live Dots):**
  * `★ Established 1984 on Uxbridge Road, Hayes`
  * `✓ 100% In-House Goldsmith Benches (Never Outsourced)`
  * `✓ London Assay Office Leopard's Head Hallmarked 22ct (916) & 18ct (750)`
  * `✓ Direct Workshop Transparency`

### 4.3 The Top 3 Masterpieces Showcase (Replacing the 16-Grid on Homepage)
We select the **3 absolute pinnacle showstopper pieces** for the homepage:
1. **The Nizam Ruby & Basra Pearl Polki Choker:**
   * *Visual:* `/images/collections/imperial-ruby-pearl-polki-choker.jpg` (Full-bleed luxury photograph).
   * *Persuasive Copy:* "Handcrafted in 22ct solid gold with uncut syndicate Polki diamonds, unheated Burmese ruby cabochons, and a suspended fringe of natural Basra pearls."
2. **The Calcutta Filigree 22ct Gold Bridal Suite:**
   * *Visual:* `/images/workshop/22ct-gold-filigree-bridal-suite.jpg` (Multi-tier collar & matching maang tikka on showroom tray).
   * *Persuasive Copy:* "Master goldsmith multi-tier collar necklace featuring micro-filigree floral mesh, suspended royal medallion, and cabochon emerald accents."
3. **The Maharani Three-Strand Carved Emerald Tablet Haar:**
   * *Visual:* `/images/collections/three-strand-maharani-emerald-haar.jpg` (Grand ceremonial bridal haar).
   * *Persuasive Copy:* "Imperial ceremonial bridal haar adorned with carved Mughal emerald tablets, portrait-cut Polki diamonds, ruby borders, and Basra pearl swags."

* **Dedicated Page Link:** A prominent luxury callout card:
  * *"Explore our Complete 16-Piece Bridal, Polki & Gold Collection on our dedicated Collections Portal →"* (Linking to `/collections`).

### 4.4 The 4-Step Bespoke Journey (Replacing the Estimator/Slider)
* The user explicitly confirmed: **Viky does not want the budget slider/estimator tool**.
* In its place, we highlight the **Artisan 3D CAD & Goldsmith Journey**:
  * **Step 1:** Private Consultation with a Showroom Representative (Review sketches, photos, family heirlooms).
  * **Step 2:** Precision 3D CAD Modeling (Displaying the real Evil Eye Sapphire & Diamond CAD renders).
  * **Step 3:** Hand-Forged Casting on Uxbridge Road (Displaying the real Goldsmith Order Book #12402).
  * **Step 4:** London Assay Office Leopard's Head Hallmarking & Presentation.

### 4.5 The Workshop Trust Bento: In-House Repairs & Restoration
* Same-Day Ring Resizing, Claw Retipping, Laser Soldering, and Luxury Watch Servicing.
* Clear messaging: All work completed on-site on Uxbridge Road.

### 4.6 Flagship Showroom Hub (Hayes, London)
* 136 Uxbridge Road, Hayes UB4 0JH.
* Parking bays directly outside, 5 mins from Hayes & Harlington (Elizabeth Line).
* Direct CTA: *"Schedule a Private Consultation with an Atelier Representative"*.

---

## 5. Footer & Mercian Wealth Automation Attribution

In `components/footer/footer.tsx`:
* **Brand Column:** Official `NIRAJ_LOGO9.png` emblem + `Niraj Jewellers Ltd` + `HAYES • LONDON • SINCE 1984`.
* **Legal Disclosure:** `© 2026 Niraj Jewellers Ltd. All Rights Reserved. Co. Reg: [Pending Registration] • VAT Reg No: [Pending Registration]`.
* **Mercian Wealth Automation Attribution:**
  * Clean, prestigious designer credit badge in the bottom copyright row:
  * `<div className="flex items-center gap-1.5 text-xs text-stone-500">`
  * `<span>Designed &amp; Built by</span>`
  * `<a href="https://mercianwealth.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-stone-800 hover:text-gold-600 transition-colors inline-flex items-center gap-1">`
  * `<span>Mercian Wealth Automation</span>`
  * `<ArrowUpRight className="w-3 h-3 text-gold-600" />`
  * `</a>`
  * `</div>`
