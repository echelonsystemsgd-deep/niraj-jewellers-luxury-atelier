# Phases 4 to 7 Digital Flagship Masterplan: Articles, Showroom, FAQs & Contact

## 1. Global Architectural Directives Across All Remaining Pages
Every page must conform strictly to the VEYRA Digital Atelier Design System:
- **Header Navigation**: Standardize on `<AtelierNavbar />` with the compact mobile phone icon and smooth hamburger drawer.
- **Footer**: Standardize on official luxury `<Footer />`.
- **Zero "Viky" References**: Use "our master goldsmiths", "the Hayes atelier team", or "the workshop concierge".
- **Zero Literary Em Dashes ("—")**: Replace all occurrences with hyphens, colons, or clean phrasing.
- **Mobile Viewport Optimization**: Zero horizontal scroll or clipping on 390px/375px/360px viewports.
- **Color & Border System**: `#FAF9F5` canvas, `#141416` dark slate, `#C6A75E` antique gold, `#E7E2DA` hairline grid borders, and `#25D366` official WhatsApp green.

---

## 2. Phase Breakdown

### Phase 4: Articles (`/articles` & `/articles/[slug]`)
- **Captain's Feedback**: *"Add images to the articles."*
- **Index (`/articles`)**:
  - Replace `SubpageNav` with `AtelierNavbar`.
  - Editorial header: `[ 01 / GOLDSMITH KNOWLEDGE & EDUCATION ]` with serif headline *"Atelier Educational Articles & Purity Guides"*.
  - 4-card / 2-column hairline architectural grid of comprehensive guides with rich workshop photography for every article.
  - Cards include:
    1. *22ct vs 24ct Gold Hallmarking & UK Purity Law* (Image: `/images/workshop/goldsmith-bench-order-book-22ct.jpg`)
    2. *Bespoke 3D CAD & Lost-Wax Casting Process* (Image: `/images/cad/bespoke-evil-eye-sapphire-cad.jpg`)
    3. *Same-Day Laser Jewellery Repair & Restoration Guide* (Image: `/images/workshop/workshop-bench-velvet-trays.jpg`)
    4. *Buying & Selling Gold Bullion in London: LBMA Guide* (Image: `/images/workshop/22ct-gold-filigree-bridal-suite.jpg`)
  - No em dashes, no Viky references.
- **Detail Template (`/articles/[slug]`)**:
  - Full-width hero with featured workshop image, publication date, read time, and London Assay accreditation badge.
  - Rich inline imagery throughout the article text (hallmarking stamps, CAD wireframes, laser bench welding, LBMA bullion testing).
  - Editorial typography: `font-serif` headings, clean prose with `leading-relaxed`, pull-quotes, and technical specification tables.
  - Direct WhatsApp consultation CTA at the end of each article.

### Phase 5: Showroom (`/showroom`)
- **Captain's Feedback**: Opening hours open by default; embed Google map; roadside parking without "bays"; no em dashes.
- Replace `SubpageNav` with `AtelierNavbar`.
- Editorial Hero: *"Visit the Hayes Goldsmith Bench & Showroom"*.
- Interactive Google Map embed in high-contrast frame.
- Showroom hours visible by default (Monday 12:00 to 17:00, Tuesday to Saturday 11:00 to 17:30, Sunday closed).
- Roadside customer parking noted along Uxbridge Road (no mention of "bays").
- 3-column hairline grid of Showroom Experience tiers:
  1. *Walk-In Bench Repairs & Cleaning*
  2. *Private Bridal Suite Viewings*
  3. *Direct Bullion & Scrap Gold Valuation*
- Direct call (`020 8573 9323`) and WhatsApp (`07955 565137`) action buttons.

### Phase 6: FAQs (`/faqs`)
- **Captain's Feedback**: *"Put 'UK Hallmarking Act Compliance & Purity Education' above the FAQ section because it's not that important and make it more visual with images."*
- Replace `SubpageNav` with `AtelierNavbar`.
- **Top Section: UK Hallmarking Act Compliance & Purity Education**:
  - Visual 3-mark diagram / cards with authentic imagery (Sponsor Mark `NJ`, Standard Fineness Mark `916`, London Assay Leopard's Head).
  - Legal compliance guarantee under British Hallmarking Act 1973.
- **FAQ Section**:
  - Clean Veyra accordion with high-conviction answers to bridal, bullion, repair, and bespoke commissioning queries.
  - Open first FAQ by default so users immediately see content without clicking.
  - No em dashes, no Viky references.

### Phase 7: Contact (`/contact`)
- Replace `SubpageNav` with `AtelierNavbar`.
- Clean split layout:
  - Left: Interactive consultation form with direct WhatsApp dispatch.
  - Right: Showroom address (136 Uxbridge Road), opening hours open by default, embedded Google Map iframe, roadside parking text (no bays), and direct phone lines.
- No empty whitespace gaps or misalignments.

---

## 3. Verification & Deployment Pipeline
- Step-by-step code implementation across all files.
- Em dash and "Viky" verification scans.
- `npm run build` verification across all 36 routes.
- Browser subagent visual inspection on Desktop (1440px) and Mobile (390px).
- Git commit and git push to `origin/main`.
