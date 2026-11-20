-- ==============================================================================
-- NIRAJ JEWELLERS LTD — BESPOKE MAISON SCHEMA & ROW LEVEL SECURITY (RLS)
-- Environment: Staging (dablevnhwzqxjivohfoj) / Production
-- Standard: Production Grade • Row Level Security • Zero Downtime
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. ADMIN WHITELIST & ROLES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.admin_whitelist (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL DEFAULT 'owner' CHECK (role IN ('owner', 'developer')),
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Pre-seed authorized admin emails
INSERT INTO public.admin_whitelist (email, role, name)
VALUES 
    ('nirajjewellers@hotmail.com', 'owner', 'Viky (Niraj Jewellers Owner)'),
    ('nirajjewellersuk@gmail.com', 'owner', 'Niraj Jewellers Atelier'),
    ('dev@mercianwealth.com', 'developer', 'Mercian Wealth Lead Engineer')
ON CONFLICT (email) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 2. GLOBAL BUSINESS SETTINGS (Singleton)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.global_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_name TEXT NOT NULL DEFAULT 'Niraj Jewellers Ltd',
    phone_uk TEXT NOT NULL DEFAULT '07955 565137',
    phone_intl TEXT NOT NULL DEFAULT '+44 7955 565137',
    whatsapp_number TEXT NOT NULL DEFAULT '447955565137',
    email TEXT NOT NULL DEFAULT 'nirajjewellersuk@gmail.com',
    showroom_address TEXT NOT NULL DEFAULT '136 Uxbridge Road, Hayes, Middlesex, UB4 0JH, UK',
    maps_url TEXT NOT NULL DEFAULT 'https://maps.google.com/?q=136+Uxbridge+Road+Hayes+UB4+0JH+UK',
    company_reg TEXT NOT NULL DEFAULT 'Registered in England & Wales',
    vat_number TEXT NOT NULL DEFAULT 'GB 842 9617 32',
    opening_hours JSONB NOT NULL DEFAULT '{
        "monday": "11:00 AM – 6:30 PM",
        "tuesday": "11:00 AM – 6:30 PM",
        "wednesday": "Closed (Workshop & Bullion Vaulting)",
        "thursday": "11:00 AM – 6:30 PM",
        "friday": "11:00 AM – 6:30 PM",
        "saturday": "11:00 AM – 6:30 PM",
        "sunday": "11:30 AM – 5:30 PM"
    }'::jsonb,
    social_links JSONB NOT NULL DEFAULT '{
        "instagram": "https://www.instagram.com/nirajjewellersltd",
        "facebook": "https://facebook.com/nirajjewellersltd",
        "whatsapp": "https://wa.me/447955565137"
    }'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 3. MASTER COLLECTIONS VAULT (54 Pieces + Gallery & Revisions)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.collections (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('bridal', 'rings', '22ct-gold', 'polki-heritage', 'featured')),
    metal_purity TEXT NOT NULL DEFAULT '22ct Gold (916 Hallmarked)',
    hallmark_text TEXT NOT NULL DEFAULT 'UK London Assay Office 916',
    description TEXT NOT NULL,
    price_note TEXT NOT NULL DEFAULT 'Direct Workshop Consultation • Bespoke Suite',
    price_on_request BOOLEAN NOT NULL DEFAULT true,
    price_amount NUMERIC(10, 2),
    media_type TEXT NOT NULL DEFAULT 'image' CHECK (media_type IN ('image', 'video')),
    thumbnail_url TEXT NOT NULL,
    video_url TEXT,
    gallery_images JSONB NOT NULL DEFAULT '[]'::jsonb,
    instagram_url TEXT,
    tags TEXT[] NOT NULL DEFAULT '{}',
    specs JSONB NOT NULL DEFAULT '{
        "weight": "Direct Workshop Valuation",
        "metal": "22ct Imperial Gold",
        "craftsmanship": "In-House Hayes Handcrafted"
    }'::jsonb,
    stock_quantity INTEGER NOT NULL DEFAULT 1,
    stock_status TEXT NOT NULL DEFAULT 'available' CHECK (stock_status IN ('available', 'made-to-order', 'sold', 'reserved')),
    is_featured BOOLEAN NOT NULL DEFAULT false,
    is_masterpiece_slider BOOLEAN NOT NULL DEFAULT false,
    is_ribbon_piece BOOLEAN NOT NULL DEFAULT false,
    is_published BOOLEAN NOT NULL DEFAULT true,
    is_archived BOOLEAN NOT NULL DEFAULT false,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_collections_category ON public.collections(category);
CREATE INDEX IF NOT EXISTS idx_collections_published ON public.collections(is_published, is_archived);
CREATE INDEX IF NOT EXISTS idx_collections_sort ON public.collections(sort_order ASC);

-- ------------------------------------------------------------------------------
-- 4. DRAFT & REVISIONS LAYER (Draft edits for live pieces + 1-click revert)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.revisions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_type TEXT NOT NULL DEFAULT 'collection',
    entity_id TEXT NOT NULL,
    version_number INTEGER NOT NULL DEFAULT 1,
    snapshot_payload JSONB NOT NULL,
    change_summary TEXT,
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'reverted')),
    created_by TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    published_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_revisions_entity ON public.revisions(entity_type, entity_id);

-- ------------------------------------------------------------------------------
-- 5. HOMEPAGE SECTIONS (Reordering & Visibility)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.homepage_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    section_key TEXT UNIQUE NOT NULL,
    display_title TEXT NOT NULL,
    internal_label TEXT NOT NULL,
    headline TEXT,
    subheadline TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    content_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 6. REPAIRS & ATELIER SERVICES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.repairs_services (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    turnaround TEXT NOT NULL,
    starting_price TEXT NOT NULL,
    description TEXT NOT NULL,
    features TEXT[] NOT NULL DEFAULT '{}',
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 7. REVIEWS & TESTIMONIALS (With verified_genuine confirmation safeguard)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.reviews (
    id TEXT PRIMARY KEY,
    author TEXT NOT NULL,
    location TEXT NOT NULL,
    rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
    review_date TEXT NOT NULL,
    service TEXT NOT NULL,
    review_text TEXT NOT NULL,
    verified_genuine BOOLEAN NOT NULL DEFAULT false, -- Set false until owner confirms
    source TEXT NOT NULL DEFAULT 'Google Reviews',
    source_url TEXT,
    is_published BOOLEAN NOT NULL DEFAULT false,     -- Hidden until owner confirms
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 8. ARTICLES & EDUCATIONAL GUIDES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.articles (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    meta_title TEXT NOT NULL,
    meta_description TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    category TEXT NOT NULL,
    read_time TEXT NOT NULL DEFAULT '5 min read',
    date_published TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    date_modified TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    author JSONB NOT NULL DEFAULT '{"name": "Niraj Jewellers Master Goldsmith", "role": "Head of Atelier Hayes"}'::jsonb,
    cover_image TEXT NOT NULL,
    tags TEXT[] NOT NULL DEFAULT '{}',
    key_takeaways TEXT[] NOT NULL DEFAULT '{}',
    sections JSONB NOT NULL DEFAULT '[]'::jsonb,
    faqs JSONB NOT NULL DEFAULT '[]'::jsonb,
    is_published BOOLEAN NOT NULL DEFAULT true,
    sort_order INTEGER NOT NULL DEFAULT 0
);

-- ------------------------------------------------------------------------------
-- 9. REDIRECTS (301 Moved Permanently SEO Protection)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.redirects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_path TEXT UNIQUE NOT NULL,
    target_path TEXT NOT NULL,
    http_status INTEGER NOT NULL DEFAULT 301,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 10. AUDIT LOGS (Who changed what and when)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_email TEXT NOT NULL,
    action TEXT NOT NULL CHECK (action IN ('CREATE', 'UPDATE', 'DELETE', 'REORDER', 'PUBLISH', 'REVERT')),
    entity_type TEXT NOT NULL,
    entity_id TEXT NOT NULL,
    diff_json JSONB,
    ip_address TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_created ON public.audit_logs(created_at DESC);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all public tables
ALTER TABLE public.admin_whitelist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.global_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.revisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.homepage_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.repairs_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.redirects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Helper function: is_admin(auth.email())
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.admin_whitelist
        WHERE email = auth.jwt()->>'email'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 1. Public Read Policies (Allow anyone to read published, active content)
CREATE POLICY "Public read global settings" ON public.global_settings
    FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Public read published collections" ON public.collections
    FOR SELECT TO anon, authenticated USING (is_published = true AND is_archived = false);

CREATE POLICY "Public read active homepage sections" ON public.homepage_sections
    FOR SELECT TO anon, authenticated USING (is_active = true);

CREATE POLICY "Public read active repairs" ON public.repairs_services
    FOR SELECT TO anon, authenticated USING (is_active = true);

CREATE POLICY "Public read confirmed reviews" ON public.reviews
    FOR SELECT TO anon, authenticated USING (is_published = true AND verified_genuine = true);

CREATE POLICY "Public read published articles" ON public.articles
    FOR SELECT TO anon, authenticated USING (is_published = true);

CREATE POLICY "Public read redirects" ON public.redirects
    FOR SELECT TO anon, authenticated USING (true);

-- 2. Admin Full CRUD Policies (Only whitelisted emails can mutate)
CREATE POLICY "Admin full access global settings" ON public.global_settings
    FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Admin full access collections" ON public.collections
    FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Admin full access revisions" ON public.revisions
    FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Admin full access homepage sections" ON public.homepage_sections
    FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Admin full access repairs" ON public.repairs_services
    FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Admin full access reviews" ON public.reviews
    FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Admin full access articles" ON public.articles
    FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Admin full access redirects" ON public.redirects
    FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Admin read and insert audit logs" ON public.audit_logs
    FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Admin read whitelist" ON public.admin_whitelist
    FOR SELECT TO authenticated USING (public.is_admin());

-- ------------------------------------------------------------------------------
-- 11. PRE-SEED 54 SHOWROOM PIECES
-- ------------------------------------------------------------------------------
INSERT INTO public.collections (id, slug, title, category, metal_purity, hallmark_text, description, price_note, price_on_request, media_type, thumbnail_url, video_url, tags, specs, stock_status, is_published, sort_order)
VALUES
  ('piece-1-0bda9709-3486-4146-b08c-9f05cc25ee4d_mp4', 'piece-1-0bda9709-3486-4146-b08c-9f05cc25ee4d_mp4', 'The Nizam Ruby & Basra Pearl Polki Choker', 'bridal', '22ct Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Exquisite royal bridal choker handcrafted in 22ct gold, set with unheated oval rubies, syndicate uncut Polki diamonds, and a suspended fringe of natural Basra pearls.', 'Direct Workshop Consultation • Bespoke Suite', true, 'video', '/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg', '/images/collections/0bda9709-3486-4146-b08c-9f05cc25ee4d.mp4', ARRAY['22ct Gold', 'Syndicate Polki', 'Bridal Choker', 'Basra Pearls', 'Burmese Rubies'], '{"weight":"138.5 grams","carat":"18.40ct Uncut Polki","metal":"22ct Imperial Gold","craftsmanship":"In-House Hayes Handcrafted"}'::jsonb, 'available', true, 0),
  ('piece-2-39b5ba11-da50-4ab0-bc84-3d952b8b2a8d_mp4', 'piece-2-39b5ba11-da50-4ab0-bc84-3d952b8b2a8d_mp4', 'The Calcutta Filigree 22ct Gold Bridal Suite', 'bridal', '22ct Gold (916 Hallmarked)', 'Official UK London Assay Stamped', 'Handcrafted 22ct gold multi-tier collar necklace featuring micro-filigree floral mesh, suspended royal medallion, and matching cabochon emerald maang tikka.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/workshop/22ct-gold-filigree-bridal-suite.jpg', '/images/collections/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.mp4', ARRAY['22ct Gold', 'Calcutta Filigree', 'Bridal Collar', 'Maang Tikka', 'London Assay'], '{"weight":"162.0 grams","carat":"12.50ct Natural Emeralds","metal":"22ct Antique Finish Gold","craftsmanship":"Master Goldsmith Hayes Atelier"}'::jsonb, 'available', true, 1),
  ('piece-3-259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0_mp4', 'piece-3-259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0_mp4', 'The Chandbali Carved Zambian Emerald Melon Choker', 'polki-heritage', '22ct Gold (916)', 'London Assay 916 Certified', 'Regal crescent chandbali choker in 22ct gold, featuring fluted melon-carved Zambian emeralds, open-set uncut Polki diamonds, and delicate briolette drops.', 'High Jewellery Atelier • Bespoke Piece', true, 'video', '/images/collections/22ct-jadau-polki-bridal-choker.jpg', '/images/collections/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.mp4', ARRAY['Polki Heritage', 'Zambian Emerald', 'Chandbali', '22ct Gold'], '{"carat":"24.50ct Carved Emeralds","metal":"22ct Imperial Gold","craftsmanship":"Artisan Jadau Setting"}'::jsonb, 'available', true, 2),
  ('piece-4-6bee2c14-fbe5-43f5-a95f-330e06bb9f89_mp4', 'piece-4-6bee2c14-fbe5-43f5-a95f-330e06bb9f89_mp4', 'The Padmavati 22ct Jadau Polki Bridal Choker', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg', '/images/collections/6bee2c14-fbe5-43f5-a95f-330e06bb9f89.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"45.0 grams","carat":"6.50ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 3),
  ('piece-5-bespoke-evil-eye-diamond-cad_jpg', 'piece-5-bespoke-evil-eye-diamond-cad_jpg', 'The Koh-i-Noor Inspired Solitaire Engagement Ring', 'rings', '18ct White Gold (750) & 950 Platinum', 'London Assay Office 750 / 950', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/cad/bespoke-evil-eye-diamond-cad.jpg', NULL, ARRAY['Certified Diamond', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"49.3 grams","carat":"8.30ct Natural Gems","metal":"18ct Hallmarked Gold / Platinum","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 4),
  ('piece-6-49013294-5782-4d47-97e4-c0f91f0afd9d_mp4', 'piece-6-49013294-5782-4d47-97e4-c0f91f0afd9d_mp4', 'The Maharaja Solid 22ct Hand-Chased Lion Kada', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/22ct-jadau-polki-bridal-choker.jpg', '/images/collections/49013294-5782-4d47-97e4-c0f91f0afd9d.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"53.6 grams","carat":"10.10ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 5),
  ('piece-7-bespoke-evil-eye-sapphire-cad_jpg', 'piece-7-bespoke-evil-eye-sapphire-cad_jpg', 'The Empress Oval Cut Emerald & Hidden Halo Solitaire', 'rings', '18ct Warm Gold (750)', 'London Assay Office 750 / 950', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/cad/bespoke-evil-eye-sapphire-cad.jpg', NULL, ARRAY['Certified Diamond', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"57.9 grams","carat":"11.90ct Natural Gems","metal":"18ct Hallmarked Gold / Platinum","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 6),
  ('piece-8-550a6d34-c1f3-45b7-a527-2a4421c4920d_mp4', 'piece-8-550a6d34-c1f3-45b7-a527-2a4421c4920d_mp4', 'The Maharani Three-Strand Emerald Tablet Haar', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/7b225dd5-6728-41fe-b993-ac228fe3782f.jpeg', '/images/collections/550a6d34-c1f3-45b7-a527-2a4421c4920d.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"62.2 grams","carat":"13.70ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 7),
  ('piece-9-22ct-gold-filigree-bridal-suite_jpg', 'piece-9-22ct-gold-filigree-bridal-suite_jpg', 'The Syndicate Polki Collar & Chandelier Drops', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/workshop/22ct-gold-filigree-bridal-suite.jpg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"66.5 grams","carat":"15.50ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 8),
  ('piece-10-82bd6ab1-219d-4fc1-894b-77030e289dbf_mp4', 'piece-10-82bd6ab1-219d-4fc1-894b-77030e289dbf_mp4', 'The Royal Rajwada Floral Filigree Bangles', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/c1093de2-6cd6-4023-be9f-a46cd4a0fbce.jpeg', '/images/collections/82bd6ab1-219d-4fc1-894b-77030e289dbf.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"70.8 grams","carat":"17.30ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 9),
  ('piece-11-goldsmith-bench-order-book-22ct_jpg', 'piece-11-goldsmith-bench-order-book-22ct_jpg', 'The Royal Rajputana Carved Ruby & Polki Kada', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/workshop/goldsmith-bench-order-book-22ct.jpg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"75.1 grams","carat":"19.10ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 10),
  ('piece-12-58ba2f9b-c4f6-4f3d-b060-dacd9a43f88b_mp4', 'piece-12-58ba2f9b-c4f6-4f3d-b060-dacd9a43f88b_mp4', 'The Imperial Broad Mesh Polki Choker & Jhumkas', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/fd9d0bc5-26ce-4998-92bf-50957ffc2210.jpeg', '/images/collections/58ba2f9b-c4f6-4f3d-b060-dacd9a43f88b.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"79.4 grams","carat":"20.90ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 11),
  ('piece-13-workshop-bench-velvet-trays_jpg', 'piece-13-workshop-bench-velvet-trays_jpg', 'The Devyani Multi-Tier Layered Gold Haar', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/workshop/workshop-bench-velvet-trays.jpg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"83.7 grams","carat":"22.70ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 12),
  ('piece-14-6bee2c14-fbe5-43f5-a95f-330e06bb9f89_mp4', 'piece-14-6bee2c14-fbe5-43f5-a95f-330e06bb9f89_mp4', 'The Shahi 22ct Hand-Engraved Solid Gold Torc', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_2.jpeg', '/images/collections/6bee2c14-fbe5-43f5-a95f-330e06bb9f89.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"88.0 grams","carat":"24.50ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 13),
  ('piece-15-09f3084c-9c0e-49e0-a1dd-3d4c512907b1_jpeg', 'piece-15-09f3084c-9c0e-49e0-a1dd-3d4c512907b1_jpeg', 'The Sitara Marquise Diamond Cocktail Cluster Ring', 'rings', '18ct White Gold (750) & 950 Platinum', 'London Assay Office 750 / 950', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg', NULL, ARRAY['Certified Diamond', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"92.3 grams","carat":"26.30ct Natural Gems","metal":"18ct Hallmarked Gold / Platinum","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 14),
  ('piece-16-6cda1721-6533-465f-8580-4c317e922745-var_mp4', 'piece-16-6cda1721-6533-465f-8580-4c317e922745-var_mp4', 'The Royal Mayur Peacock Motif Polki Maang Tikka', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/6993a897-24d0-4f1f-b8a8-06b2c0001dcb.jpeg', '/images/collections/6cda1721-6533-465f-8580-4c317e922745-var.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"96.6 grams","carat":"28.10ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 15),
  ('piece-17-12829417-6791-4c2c-8ff1-7b92d459aab4_jpeg', 'piece-17-12829417-6791-4c2c-8ff1-7b92d459aab4_jpeg', 'The Russian Emerald & Basra Pearl Polki Choker', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/22ct-jadau-polki-bridal-choker.jpg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"100.9 grams","carat":"29.90ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 16),
  ('piece-18-7242ee24-7935-4e43-b60b-1d260db663da_mp4', 'piece-18-7242ee24-7935-4e43-b60b-1d260db663da_mp4', 'The Rani Padmavati Diamond Encrusted Kada Pair', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/9e9afd6e-1890-4467-9c3c-99fbdb640e4b.jpeg', '/images/collections/7242ee24-7935-4e43-b60b-1d260db663da.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"105.2 grams","carat":"31.70ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 17),
  ('piece-19-12829417-6791-4c2c-8ff1-7b92d459aab4_1_jpeg', 'piece-19-12829417-6791-4c2c-8ff1-7b92d459aab4_1_jpeg', 'The Regent Radiant Cut Solitaire Diamond Ring', 'rings', '18ct Warm Gold (750)', 'London Assay Office 750 / 950', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4_1.jpeg', NULL, ARRAY['Certified Diamond', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"109.5 grams","carat":"33.50ct Natural Gems","metal":"18ct Hallmarked Gold / Platinum","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 18),
  ('piece-20-82bd6ab1-219d-4fc1-894b-77030e289dbf_mp4', 'piece-20-82bd6ab1-219d-4fc1-894b-77030e289dbf_mp4', 'The Chandrika Polki & Ruby Bridal Passa', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235_1.jpeg', '/images/collections/82bd6ab1-219d-4fc1-894b-77030e289dbf.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"113.8 grams","carat":"35.30ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 19),
  ('piece-21-1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_jpeg', 'piece-21-1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_jpeg', 'Grand Chandbali Earrings with Leaf-Carved Emeralds', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"118.1 grams","carat":"37.10ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 20),
  ('piece-22-86e9bedc-c2df-4ad8-81f5-a2f038596d60_mp4', 'piece-22-86e9bedc-c2df-4ad8-81f5-a2f038596d60_mp4', 'The Peacock Crown 22ct Handcrafted Bridal Tikka', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_1.jpeg', '/images/collections/86e9bedc-c2df-4ad8-81f5-a2f038596d60.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"122.4 grams","carat":"6.90ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 21),
  ('piece-23-1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_1_jpeg', 'piece-23-1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_1_jpeg', 'The Princess Cut Certified Diamond Eternity Band', 'rings', '18ct White Gold (750) & 950 Platinum', 'London Assay Office 750 / 950', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_1.jpeg', NULL, ARRAY['Certified Diamond', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"126.7 grams","carat":"8.70ct Natural Gems","metal":"18ct Hallmarked Gold / Platinum","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 22),
  ('piece-24-8748e8f9-eb1c-44d1-ade8-df33908158ad_mp4', 'piece-24-8748e8f9-eb1c-44d1-ade8-df33908158ad_mp4', 'The Imperial Kundan Carved Emerald Long Haar', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/64043268-7e68-48e4-8b74-f58fbd5ff884.jpeg', '/images/collections/8748e8f9-eb1c-44d1-ade8-df33908158ad.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"131.0 grams","carat":"10.50ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 23),
  ('piece-25-1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_2_jpeg', 'piece-25-1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_2_jpeg', 'The Mughal Chandbali Earrings with Carved Ruby Drops', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_2.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"135.3 grams","carat":"12.30ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 24),
  ('piece-26-e04a48c3-2c58-4692-bf79-43609f73bf1d_mp4', 'piece-26-e04a48c3-2c58-4692-bf79-43609f73bf1d_mp4', 'The Alchemist 22ct Solid Gold Chased Cuff Bangle', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/926a7777-65a9-4968-a10c-804f36dc283a.jpeg', '/images/collections/e04a48c3-2c58-4692-bf79-43609f73bf1d.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"139.6 grams","carat":"14.10ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 25),
  ('piece-27-22ct-jadau-polki-bridal-choker_jpg', 'piece-27-22ct-jadau-polki-bridal-choker_jpg', 'The Regent Pear-Shaped Diamond Double Halo Ring', 'rings', '18ct Warm Gold (750)', 'London Assay Office 750 / 950', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/22ct-jadau-polki-bridal-choker.jpg', NULL, ARRAY['Certified Diamond', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"143.9 grams","carat":"15.90ct Natural Gems","metal":"18ct Hallmarked Gold / Platinum","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 26),
  ('piece-28-933947d1-ad53-4490-8431-206520dc747f_mp4', 'piece-28-933947d1-ad53-4490-8431-206520dc747f_mp4', 'The Royal Darbar Polki, Ruby & Emerald Choker', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235.jpeg', '/images/collections/933947d1-ad53-4490-8431-206520dc747f.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"148.2 grams","carat":"17.70ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 27),
  ('piece-29-380254d7-cebb-49d0-bf24-5b3fa2b2611f_jpeg', 'piece-29-380254d7-cebb-49d0-bf24-5b3fa2b2611f_jpeg', 'The Baroda Pearl & Ruby Chandelier Jhumkas', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/380254d7-cebb-49d0-bf24-5b3fa2b2611f.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"152.5 grams","carat":"19.50ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 28),
  ('piece-30-9bf16584-ce9d-43a3-ac0a-5acb4af1d50b_mp4', 'piece-30-9bf16584-ce9d-43a3-ac0a-5acb4af1d50b_mp4', 'The Sovereign 24ct Cast Bullion Ingot Pendant', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb.jpeg', '/images/collections/9bf16584-ce9d-43a3-ac0a-5acb4af1d50b.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"156.8 grams","carat":"21.30ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 29),
  ('piece-31-53301b27-9ad6-4e9c-a621-ab6b9e795fca_jpeg', 'piece-31-53301b27-9ad6-4e9c-a621-ab6b9e795fca_jpeg', 'The Sunburst Syndicate Polki Statement Ring', 'rings', '18ct White Gold (750) & 950 Platinum', 'London Assay Office 750 / 950', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/53301b27-9ad6-4e9c-a621-ab6b9e795fca.jpeg', NULL, ARRAY['Certified Diamond', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"46.1 grams","carat":"23.10ct Natural Gems","metal":"18ct Hallmarked Gold / Platinum","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 30),
  ('piece-32-a320449b-e662-4674-8ff1-7b3c58efe48f_mp4', 'piece-32-a320449b-e662-4674-8ff1-7b3c58efe48f_mp4', 'The Sheesh Mahal Polki Diamond Bridal Matha Patti', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/5ce947fd-b64d-4004-afc4-8ffe1a7847b8.jpeg', '/images/collections/a320449b-e662-4674-8ff1-7b3c58efe48f.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"50.4 grams","carat":"24.90ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 31),
  ('piece-33-5ce947fd-b64d-4004-afc4-8ffe1a7847b8_jpeg', 'piece-33-5ce947fd-b64d-4004-afc4-8ffe1a7847b8_jpeg', 'The Imperial Navratan Heritage Medallion Pendant', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/5ce947fd-b64d-4004-afc4-8ffe1a7847b8.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"54.7 grams","carat":"26.70ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 32),
  ('piece-34-c893d288-706d-43a2-bf7d-a67f0fb840c0_mp4', 'piece-34-c893d288-706d-43a2-bf7d-a67f0fb840c0_mp4', 'The Maharajah Heritage Filigree Kada Pair', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/8cca104b-0936-4db2-82d0-92750aa40c0d.jpeg', '/images/collections/c893d288-706d-43a2-bf7d-a67f0fb840c0.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"59.0 grams","carat":"28.50ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 33),
  ('piece-35-64043268-7e68-48e4-8b74-f58fbd5ff884_jpeg', 'piece-35-64043268-7e68-48e4-8b74-f58fbd5ff884_jpeg', 'The Shahnaz Oval Sapphire & Halo Engagement Ring', 'rings', '18ct Warm Gold (750)', 'London Assay Office 750 / 950', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/64043268-7e68-48e4-8b74-f58fbd5ff884.jpeg', NULL, ARRAY['Certified Diamond', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"63.3 grams","carat":"30.30ct Natural Gems","metal":"18ct Hallmarked Gold / Platinum","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 34),
  ('piece-36-6bee2c14-fbe5-43f5-a95f-330e06bb9f89_mp4', 'piece-36-6bee2c14-fbe5-43f5-a95f-330e06bb9f89_mp4', 'The Noor Jahan Antique Jadau Collar Suite', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_1.jpeg', '/images/collections/6bee2c14-fbe5-43f5-a95f-330e06bb9f89.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"67.6 grams","carat":"32.10ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 35),
  ('piece-37-6993a897-24d0-4f1f-b8a8-06b2c0001dcb_jpeg', 'piece-37-6993a897-24d0-4f1f-b8a8-06b2c0001dcb_jpeg', 'The Anarkali Fluted Emerald & Basra Pearl Choker', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/6993a897-24d0-4f1f-b8a8-06b2c0001dcb.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"71.9 grams","carat":"33.90ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 36),
  ('piece-38-ddae91d6-81ca-4a58-8eff-963f065d738f_mp4', 'piece-38-ddae91d6-81ca-4a58-8eff-963f065d738f_mp4', 'The Darbar 22ct Heavy Rope-Twist Bridal Chain', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4_1.jpeg', '/images/collections/ddae91d6-81ca-4a58-8eff-963f065d738f.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"76.2 grams","carat":"35.70ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 37),
  ('piece-39-7b225dd5-6728-41fe-b993-ac228fe3782f_jpeg', 'piece-39-7b225dd5-6728-41fe-b993-ac228fe3782f_jpeg', 'Bespoke 3D CAD Marquise Solitaire Eye Pendant', 'rings', '18ct White Gold (750) & 950 Platinum', 'London Assay Office 750 / 950', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/7b225dd5-6728-41fe-b993-ac228fe3782f.jpeg', NULL, ARRAY['Certified Diamond', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"80.5 grams","carat":"37.50ct Natural Gems","metal":"18ct Hallmarked Gold / Platinum","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 38),
  ('piece-40-e04a48c3-2c58-4692-bf79-43609f73bf1d_mp4', 'piece-40-e04a48c3-2c58-4692-bf79-43609f73bf1d_mp4', 'The Jodha 22ct Solid Gold Bridal Hasli Necklace', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/53301b27-9ad6-4e9c-a621-ab6b9e795fca.jpeg', '/images/collections/e04a48c3-2c58-4692-bf79-43609f73bf1d.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"84.8 grams","carat":"7.30ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 39),
  ('piece-41-7b225dd5-6728-41fe-b993-ac228fe3782f_1_jpeg', 'piece-41-7b225dd5-6728-41fe-b993-ac228fe3782f_1_jpeg', 'The Badshahi Carved Jade & Syndicate Polki Necklace', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/7b225dd5-6728-41fe-b993-ac228fe3782f_1.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"89.1 grams","carat":"9.10ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 40),
  ('piece-42-82bd6ab1-219d-4fc1-894b-77030e289dbf_mp4', 'piece-42-82bd6ab1-219d-4fc1-894b-77030e289dbf_mp4', 'The Hayes Atelier Workshop Collection', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/86ae6de6-b6ee-4780-948b-ccf3f849f5cf.jpeg', '/images/collections/82bd6ab1-219d-4fc1-894b-77030e289dbf.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"93.4 grams","carat":"10.90ct Natural Gems","metal":"22ct Solid Yellow Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 41),
  ('piece-43-86ae6de6-b6ee-4780-948b-ccf3f849f5cf_jpeg', 'piece-43-86ae6de6-b6ee-4780-948b-ccf3f849f5cf_jpeg', 'The Gulab Filigree Rose Gold & Diamond Bridal Suite', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/86ae6de6-b6ee-4780-948b-ccf3f849f5cf.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"97.7 grams","carat":"12.70ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 42),
  ('piece-44-f06dfa2e-9675-4e79-b953-e4e61bb1b393_mp4', 'piece-44-f06dfa2e-9675-4e79-b953-e4e61bb1b393_mp4', 'The Taj Mahal Geometric Polki & Pearl Drop Earrings', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'video', '/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c.jpeg', '/images/collections/f06dfa2e-9675-4e79-b953-e4e61bb1b393.mp4', ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"102.0 grams","carat":"14.50ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 43),
  ('piece-45-8cca104b-0936-4db2-82d0-92750aa40c0d_jpeg', 'piece-45-8cca104b-0936-4db2-82d0-92750aa40c0d_jpeg', 'Bespoke 3D CAD Evil Eye Sapphire & Diamond Medallion', 'rings', '18ct Warm Gold (750)', 'London Assay Office 750 / 950', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/8cca104b-0936-4db2-82d0-92750aa40c0d.jpeg', NULL, ARRAY['Certified Diamond', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"106.3 grams","carat":"16.30ct Natural Gems","metal":"18ct Hallmarked Gold / Platinum","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 44),
  ('piece-46-926a7777-65a9-4968-a10c-804f36dc283a_jpeg', 'piece-46-926a7777-65a9-4968-a10c-804f36dc283a_jpeg', 'The Meenakari Reverse-Enameled Royal Bridal Choker', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/926a7777-65a9-4968-a10c-804f36dc283a.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"110.6 grams","carat":"18.10ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 45),
  ('piece-47-9e9afd6e-1890-4467-9c3c-99fbdb640e4b_jpeg', 'piece-47-9e9afd6e-1890-4467-9c3c-99fbdb640e4b_jpeg', 'The Jaipur Royal Kundan Medallion & Earring Set', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/9e9afd6e-1890-4467-9c3c-99fbdb640e4b.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"114.9 grams","carat":"19.90ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 46),
  ('piece-48-c1093de2-6cd6-4023-be9f-a46cd4a0fbce_jpeg', 'piece-48-c1093de2-6cd6-4023-be9f-a46cd4a0fbce_jpeg', 'The Hawa Mahal Intricate Filigree Bridal Collar', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/c1093de2-6cd6-4023-be9f-a46cd4a0fbce.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"119.2 grams","carat":"21.70ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 47),
  ('piece-49-e9b36b5b-4e22-4c94-b80d-6c530381fc7f_jpeg', 'piece-49-e9b36b5b-4e22-4c94-b80d-6c530381fc7f_jpeg', 'The Zenith Colombian Emerald & Diamond Drop Suite', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/e9b36b5b-4e22-4c94-b80d-6c530381fc7f.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"123.5 grams","carat":"23.50ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 48),
  ('piece-50-f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_jpeg', 'piece-50-f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_jpeg', 'The Mayur Open-Work Polki Bridal Hathphool', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"127.8 grams","carat":"25.30ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 49),
  ('piece-51-f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_1_jpeg', 'piece-51-f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_1_jpeg', 'The Jasmine Bud Micro-Pavé Polki Diamond Choker', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_1.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"132.1 grams","carat":"27.10ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 50),
  ('piece-52-fc4f5f26-d64e-490e-87dc-23058ec58235_jpeg', 'piece-52-fc4f5f26-d64e-490e-87dc-23058ec58235_jpeg', 'The Imperial Mughal Emerald Beaded Bridal Tassel', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"136.4 grams","carat":"28.90ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 51),
  ('piece-53-fc4f5f26-d64e-490e-87dc-23058ec58235_1_jpeg', 'piece-53-fc4f5f26-d64e-490e-87dc-23058ec58235_1_jpeg', 'The Amber Fort Carved Tourmaline & Pearl Collar', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235_1.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"140.7 grams","carat":"30.70ct Natural Gems","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 52),
  ('piece-54-fd9d0bc5-26ce-4998-92bf-50957ffc2210_jpeg', 'piece-54-fd9d0bc5-26ce-4998-92bf-50957ffc2210_jpeg', 'The Royal Kashi Hand-Hammered Gold Bridal Suite', 'bridal', '22ct Imperial Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Handcrafted in our Hayes workshop. Solid gold architecture adorned with certified natural gemstones, hand-chased accents, and official London Assay hallmark guarantees.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/fd9d0bc5-26ce-4998-92bf-50957ffc2210.jpeg', NULL, ARRAY['22ct Gold', 'London Assay', 'In-House Hayes', 'Bespoke Atelier'], '{"weight":"145.0 grams","carat":"32.50ct Natural Gems","metal":"22ct Solid Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 53)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  thumbnail_url = EXCLUDED.thumbnail_url;
