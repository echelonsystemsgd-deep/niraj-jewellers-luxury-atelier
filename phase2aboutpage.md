# Phase 2: About Us Page Architecture & Redesign Masterplan (`/about`)

## 1. Objective & Alignment
Overhaul `/about` from the legacy rounded-card layout to the unified **VEYRA digital atelier design language** established on the flagship landing page. Fully incorporate all feedback from the Captain and the client's guidelines:
- **Consistent Branding & Typography**: Unify with `AtelierNavbar` and `Footer`. Use Cormorant Garamond (`font-serif`) for regal editorial headlines, JetBrains Mono (`font-mono`) for architectural tracking badges, and Inter (`font-sans`) for crisp legibility.
- **Zero "Viky" references**: Strict adherence to client instruction; refer only to "our master goldsmiths", "the Hayes atelier team", or "the workshop concierge".
- **Zero literary em dashes ("—")**: Replace all instances with hyphens, colons, or standard punctuation.
- **Captain's Direct Workshop Advantage**: Replace generic comparison with authentic differentiators (in-house anvil and torch benchwork, live trade scale weighing, London Assay Leopard's Head compliance, and solid non-hollow casting).
- **Captain's Generational Journey Timeline**: Replace disjointed cards with a true connected chronological timeline with real workshop photography, clear era markers, and bench milestones (1984, 1998, 2012, Today).
- **Captain's Guarantees Overhaul**: Replace generic guarantee cards with metallurgical and workshop verification standards.

---

## 2. Page Structure & Component Breakdown

### Section 1: Navigation
- Standardize on `<AtelierNavbar />` to ensure identical navigation, direct phone line, live showroom status indicator, and mobile menu across the entire digital flagship.

### Section 2: Editorial Hero
- Top mono tracker: `[ 01 / GENERATIONAL GOLDSMITH LINEAGE · EST. 1984 ]`
- Regal Serif Headline: `Generational Goldsmithing on Uxbridge Road`
- Editorial Subtitle: `Four decades of authentic British and South Asian master benchwork. Handcrafted 22ct bridal gold, independent London Assay Office hallmarking, and direct workshop integrity.`
- Dual CTAs:
  - `WHATSAPP WORKSHOP TEAM` (Official WhatsApp Green `#25D366`)
  - `EXPLORE 54-PIECE VAULT` (`/collections`)
- 4 Sleek Horizontal Trust Badges:
  - `1984 FOUNDING ATELIER`
  - `42-YEAR GOLDSMITH LINEAGE`
  - `100% IN-HOUSE BENCHWORK`
  - `LONDON ASSAY INDEPENDENT STRIKE`

### Section 3: The Direct Workshop Advantage (What Sets Niraj Jewellers Apart)
- 2-Column Split Layout:
  - Left: Authentic Workshop Order Book & Bench Photography (`/images/workshop/goldsmith-bench-order-book-22ct.jpg`) with trade verification badge.
  - Right: The 4 Core Workshop Truths:
    1. `In-House Bench Security`: Zero third-party workshop transfers; all work performed directly on premises at 136 Uxbridge Road.
    2. `Live Trade Scale Calibration`: Gold weighed directly in front of clients on Class II electronic balances.
    3. `British Hallmarking Act 1973`: Independent London Assay Leopard's Head testing on every gram.
    4. `Deliberate Solid Mass`: 100% lost-wax solid casting with zero hollow walls.

### Section 4: The Four Pillars of Atelier Excellence
- 4-Column Architectural Hairline Grid (`border-t border-l border-[#E7E2DA]`, cards with `border-r border-b border-[#E7E2DA]`):
  - `[ 01 / PURITY ]`: 22ct Imperial Gold & 916 Hallmarking
  - `[ 02 / ARCHITECTURE ]`: Syndicate Kundan Polki & Natural Diamonds
  - `[ 03 / TRANSPARENCY ]`: Live LBMA Bullion Spot Weighing
  - `[ 04 / RESTORATION ]`: In-House Micro-Pulse Laser Welding

### Section 5: Generational Journey Timeline (1984 to Today)
- Visual chronological timeline track with node markers:
  - `1984`: Founding of the Hayes Goldsmith Bench at 136 Uxbridge Road.
  - `1998`: In-House Laser Welding & Ultrasonic Restoration Expansion.
  - `2012`: 3D CAD Modeling & Photorealistic Resin Prototyping Integration.
  - `Today`: Greater London's Premier 22ct Bridal & Bullion Destination.
- Each milestone card features authentic imagery, era tag, and concise artisan narrative.

### Section 6: Showroom Consultation & Bench Access Callout
- Elegant callout matching Veyra palette inviting clients to 136 Uxbridge Road.
- Roadside customer parking noted (zero mention of "bays").
- Direct workshop telephone: `020 8573 9323`.

---

## 3. Verification & Quality Gates
- 0 TypeScript errors.
- 0 Next.js compilation warnings.
- 0 em dashes in copy.
- 0 occurrences of "Viky".
- 100% responsive across desktop (1440px) and mobile (390px).
