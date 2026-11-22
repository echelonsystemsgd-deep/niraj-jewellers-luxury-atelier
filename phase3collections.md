# Phase 3: Collections & 54-Piece Vault Page Architecture Masterplan (`/collections`)

## 1. Objective & Alignment
Overhaul the `/collections` page into the official, comprehensive home for the **Complete 54-Piece Showroom Vault & Craft Portfolio**, matching the **VEYRA digital atelier design language** established on the flagship landing page and About Us page:
- **Unified Navigation & Header**: Replace legacy `SubpageNav` with `<AtelierNavbar />` (featuring the crest logo, 6 official navigation pages, direct phone line, live showroom status indicator, and mobile menu).
- **Remove "The Atelier Motion Ribbon"**: Per the Captain's explicit instruction (*"Remove 'The Atelier Motion Ribbon'"*), delete the infinite motion ribbon from `/collections` to eliminate redundant clutter.
- **Complete Elimination of Redundant Tags (Captain's Feedback)**:
  - Remove `ATELIER MOTION` tag.
  - Remove `UK London Assay Office 916` tag overlay from photos.
  - Remove the eye icon tag.
  - Remove confusing labels like `"High Jewellery Atelier • Bespoke Piece"` and `"Direct Workshop Consultation 162.0 In-House Hayes Atelier grams"`.
  - Display clean, high-conviction metadata: Metal Purity (`22ct Gold (916)`), Solid Mass (`138.5 grams`), and clean concise descriptions.
- **Integrate Unified Showroom Dossier Modal**:
  - Replace legacy `ReelModal` with the battle-tested `<ShowroomDossierModal />`.
  - Ensures strictly **ONE** top-right close button that is 100% visible with zero mobile clipping.
  - Ensures direct WhatsApp CTA with pre-formatted piece title and specifications.
  - Zero mentions of "Viky" and zero em dashes ("—").
- **Interactive Search & Category Filtering**:
  - Dynamic category pills (`ALL PIECES (54)`, `22CT BRIDAL`, `SOLID GOLD & KADAS`, `POLKI & KUNDAN`, `RINGS & SOLITAIRES`).
  - Search input with jewelry synonyms (kada, bangle, choker, collar, solitaire).
  - Media filter (All Media, 1080p Videos, Photographs).
- **Hairline Architectural Grid**:
  - 3-column responsive grid on desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E7E2DA]`).
  - Single-column on mobile with zero horizontal overflow.

---

## 2. File & Component Updates
1. `phase3collections.md`: Detailed implementation plan.
2. `app/collections/page.tsx`:
   - Replace `SubpageNav` with `AtelierNavbar`.
   - Remove `InfiniteMotionRibbon`.
   - Replace legacy `CollectionGrid` with the clean VEYRA architectural vault grid (`VaultGridClient.tsx` or overhauled `collection-grid.tsx`).
   - Wire `<ShowroomDossierModal />`.
3. `components/collections/collection-grid.tsx`:
   - Rebuilt with Veyra hairline grid, clean metadata, search & category filters, and zero tag clutter.
4. Visual verification via browser subagent across desktop (1440px) and mobile (390px).
5. Build verification with `npm run build` (0 errors).
6. Git commit and push to `origin/main`.
