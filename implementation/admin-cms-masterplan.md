# Master Implementation Plan: Niraj Jewellers Ltd — Bespoke Admin CMS
**Client:** Niraj Jewellers Ltd (`https://www.niraj-jewellers.co.uk`)  
**Flagship Atelier:** 136 Uxbridge Road, Hayes, Middlesex, UB4 0JH  
**Commercial Retainer:** £10/month $\rightarrow$ Zero-Cost Infrastructure Architecture (£0/month)  
**Standard:** 100% Production Grade • Zero-Error TypeScript Build • Mobile-First Luxury UX

---

## 1. Executive Summary & Architecture Decision

- **CMS & Backend Model:** Next.js App Router Native Admin (`/admin`) + Supabase (PostgreSQL, Supabase Auth, Supabase Storage).
- **Environment Separation:**
  - **Staging Database:** `https://dablevnhwzqxjivohfoj.supabase.co` (Project Ref: `dablevnhwzqxjivohfoj`).
  - **Production Database:** Dedicated production Supabase instance to be connected upon passing full staging E2E tests.
- **Account Model:**
  - **Supabase Cloud Infrastructure Console:** Owned and managed exclusively by the Developer / Agency.
  - **Website Admin Dashboard (`/admin`):**
    - Owner Account: `nirajjewellers@hotmail.com` (Viky) with role `owner`.
    - Developer Superadmin Account: Developer email with role `developer`.
- **Zero-Cost (£0/mo) Guarantee:**
  - Supabase Free Tier (500MB DB, 50k MAU, 1GB Storage) + Vercel Hobby Tier.
  - 48-hour automated GitHub Action keep-alive ping to eliminate 7-day inactivity pause.
  - Stale-while-revalidate local JSON fallback layer so the public storefront never experiences downtime.
  - Video upload cap (15MB) with edge-cached CDN headers to stay well within 5GB egress.
  - Client-side WebP compression (<180KB per image).

---

## 2. Security & Access Control Specifications

1. **Allow-list Authentication:**
   - Registration is closed. Only pre-whitelisted emails can access `/admin`.
   - Initial pre-seeded credentials:
     - Owner: `nirajjewellers@hotmail.com` (Password: `Website2026!!`).
2. **Server-Side Session Validation:**
   - Next.js Middleware guards all `/admin/(dashboard)/*` routes on the server side using `@supabase/ssr`.
   - Every mutation is handled via Next.js Server Actions with server-validated JWT authentication and role checks.
3. **Database Row Level Security (RLS):**
   - Public (`anon` role): Read-only access (`SELECT`) to items where `is_published = true` and `is_archived = false`.
   - Admin (`authenticated` role with admin metadata): Full CRUD on content tables, restricted access to audit logs and settings.
4. **SEO & Crawlers Protection:**
   - `app/robots.ts` disallows `/admin/`.
   - All admin pages set `robots: { index: false, follow: false }`.
   - `app/sitemap.ts` strictly excludes all `/admin` routes.
5. **Staff Access Link:**
   - Discreet, unstyled "Staff Portal" link in the footer (`rel="nofollow"`).

---

## 3. Content Models & Database Schema

The database houses the following relational schemas:

1. **`global_settings`** (Singleton):
   - Store name, UK phone (`07955 565137`), intl phone (`+44 7955 565137`), WhatsApp number (`447955565137`), email (`nirajjewellersuk@gmail.com`), address, London opening hours, social links, Company Reg (Required: `Registered in England & Wales`), VAT Number (Required: `GB 842 9617 32`).
2. **`collections`** (54 Masterpiece Pieces):
   - `id`, `slug`, `title`, `category`, `metal_purity`, `hallmark_text`, `description`, `price_note`, `price_on_request`, `price_amount`, `media_type`, `thumbnail_url`, `video_url`, `gallery_images` (JSON array of strings), `tags`, `specs` (weight, carat, metal, craftsmanship), `stock_quantity`, `stock_status`, `is_featured`, `is_masterpiece_slider`, `is_ribbon_piece`, `is_published`, `is_archived`, `sort_order`, `updated_at`.
3. **`revisions`** (Draft Layer for Published Items):
   - `id`, `entity_type`, `entity_id`, `draft_payload` (JSONB), `created_by`, `status` (`draft` | `published` | `reverted`), `created_at`.
4. **`homepage_sections`**:
   - Section key, order index, display title, active flag, headline, subheadline, CTA overrides.
5. **`repairs_services`**:
   - Repair title, turnaround time, starting price, description, checklist items.
6. **`reviews`**:
   - Author, location, rating (5), date, service, text, `verified_genuine` (default: false), `source`, `source_url`, `is_published`.
7. **`articles`**:
   - Slug, title, metaTitle, metaDescription, excerpt, category, readTime, author, coverImage, tags, keyTakeaways, sections, faqs, is_published.
8. **`redirects`**:
   - `source_path`, `target_path`, `http_status` (301).
9. **`audit_logs`**:
   - User ID, user email, action (`CREATE`, `UPDATE`, `DELETE`, `REORDER`), entity type, entity ID, diff JSON, timestamp.

---

## 4. Mobile-First Dashboard UX & Layout Architecture

- **Viewport Targets:** 360px, 375px, 390px, 412px, 430px (phones), 768px (tablets), 1440px+ (desktop).
- **Design System Fidelity:**
  - Background: `#FAF8F5` (Atelier light) and `#FFFFFF`.
  - Borders: `#E8DEC8` and `#D4AF37` (22ct Gold).
  - Typography: Cinzel / Cormorant serif for headers, Inter for tabular data, Vivaldi script flourishes.
- **Ergonomics:**
  - Bottom Thumb Dock for mobile screens with 48px touch targets.
  - Quick-Stock dropdown on piece cards for rapid showroom floor inventory toggles.
  - Floating Action Button (`+ Add Piece`) accessible without scrolling.
  - Jargon-free copy: "Showroom Vault", "Store Details", "Customer Stories", "Help Guide".
  - Live Preview toggle (Mobile iPhone frame preview vs. Live site).

---

## 5. Technical Phased Delivery

1. **Phase 0: Security & Dependency Upgrade:**
   - Upgrade `next` to `15.5.29` (patched against CVE-2025-55182 / React2Shell) and `react` to `19.3.1`.
   - Verify zero build or type errors.
2. **Phase 1: Database Setup & Seed Engine:**
   - Connect Supabase client.
   - Run SQL migrations creating tables, RLS policies, and triggers.
   - Seed all 54 collection pieces, 4 articles, 4 reviews (`verified_genuine: false`), global settings, repairs, and FAQs.
   - Implement local fallback cache.
3. **Phase 2: Authentication & Route Protection:**
   - Configure Supabase Auth with server-side cookie sessions (`@supabase/ssr`).
   - Create owner account (`nirajjewellers@hotmail.com` / `Website2026!!`).
   - Set up middleware route guards for `/admin/*`.
4. **Phase 3: Bespoke Mobile Admin Dashboard:**
   - Build login screen, bottom dock navigation, pieces vault, homepage section editor, showroom settings, and media library with WebP compression.
   - Implement draft/revisions layer and one-click rollback.
5. **Phase 4: Storefront Integration & On-Demand Revalidation:**
   - Refactor `app/page.tsx` and subpages to fetch from DB with on-demand tag revalidation.
6. **Phase 5: Quality Assurance & Handover:**
   - Run full production build (`npm run build`) and lint verification.
   - Document Viky's plain-English user guide and scheduled backup process.
