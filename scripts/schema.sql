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
  ('piece-1-broad-mesh-polki-choker', 'piece-1-broad-mesh-polki-choker', 'The Imperial Broad Mesh Polki Choker & Jhumkas', 'bridal', '22ct Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Exquisite 22ct yellow gold Kundan Polki lattice bridal choker necklace with cascading natural pearl fringe and matching bell jhumka earrings handcrafted on Hayes benches.', 'Direct Workshop Consultation • Bespoke Bridal Suite', true, 'image', '/images/collections/09f3084c-9c0e-49e0-a1dd-3d4c512907b1.jpeg', NULL, ARRAY['22ct Gold', 'Syndicate Polki', 'Bridal Choker', 'Basra Pearls', 'Matching Jhumkas'], '{"weight":"138.5 grams","carat":"18.40ct Uncut Polki","metal":"22ct Imperial Gold","craftsmanship":"In-House Hayes Handcrafted"}'::jsonb, 'available', true, 0),
  ('piece-2-calcutta-filigree-bridal-suite', 'piece-2-calcutta-filigree-bridal-suite', 'The Calcutta Filigree 22ct Gold Bridal Suite', 'bridal', '22ct Gold (916 Hallmarked)', 'Official UK London Assay Stamped', 'Handcrafted 22ct gold multi-tier collar necklace featuring micro-filigree floral mesh, suspended royal medallion, and matching cabochon emerald maang tikka.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/workshop/22ct-gold-filigree-bridal-suite.jpg', NULL, ARRAY['22ct Gold', 'Calcutta Filigree', 'Bridal Collar', 'Maang Tikka', 'London Assay'], '{"weight":"162.0 grams","carat":"12.50ct Natural Emeralds","metal":"22ct Antique Finish Gold","craftsmanship":"Master Goldsmith Hayes Atelier"}'::jsonb, 'available', true, 1),
  ('piece-3-crescent-ruby-polki-choker', 'piece-3-crescent-ruby-polki-choker', 'The Royal Nizam Crimson Ruby & Syndicate Polki Choker', 'polki-heritage', '22ct Gold (916 Hallmarked)', 'UK London Assay 916 Certified', 'Regal 22ct gold bridal choker handcrafted with rich crimson ruby floral clusters, Syndicate uncut Polki diamonds in pure 24ct Kundan setting, and a suspended fringe of natural Basra pearls.', 'High Jewellery Atelier • Bespoke Piece', true, 'image', '/images/collections/86ae6de6-b6ee-4780-948b-ccf3f849f5cf.jpeg', NULL, ARRAY['Polki Heritage', 'Crimson Rubies', 'Syndicate Polki', 'Basra Pearls', '22ct Gold'], '{"weight":"125.0 grams","carat":"18.20ct Syndicate Polki & Natural Rubies","metal":"22ct Imperial Gold","craftsmanship":"Artisan Jadau Setting"}'::jsonb, 'available', true, 2),
  ('piece-4-chevron-v-collar-diamond-necklace', 'piece-4-chevron-v-collar-diamond-necklace', 'The Chevron V-Collar Diamond Gala Necklace', 'bridal', '18ct White & Rose Gold (750)', 'London Assay 750 Stamped', 'Multi-row graduated V-shaped natural diamond collar necklace with a signature chevron front drop, hand-set in 18ct gold.', 'Atelier Haute Joaillerie • Private Appointment', true, 'video', '/images/collections/posters/0bda9709-3486-4146-b08c-9f05cc25ee4d.jpg', '/images/collections/0bda9709-3486-4146-b08c-9f05cc25ee4d.mp4', ARRAY['Diamond Collar', 'V-Necklace', '18ct Gold', 'Gala Suite'], '{"weight":"48.5 grams","carat":"12.80ct Natural Diamonds","metal":"18ct Gold","craftsmanship":"Pavé & Claw Master Setting"}'::jsonb, 'available', true, 3),
  ('piece-5-sovereign-shared-prong-eternity-band', 'piece-5-sovereign-shared-prong-eternity-band', 'The Sovereign Shared-Prong Diamond Eternity Band', 'rings', '950 Solid Platinum', 'UK 950 Platinum Stamped', 'Continuous circle of shared-prong round brilliant natural diamonds set in solid 950 platinum with maximum light dispersion.', 'Made to Order • Exact Finger Size', true, 'video', '/images/collections/posters/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.jpg', '/images/collections/259e7f7d-50a7-4cba-8a65-a2b46c1e4ea0.mp4', ARRAY['Eternity Band', 'Platinum', 'Certified Diamonds', 'Wedding Ring'], '{"carat":"2.40ct F/G VS Diamonds","metal":"950 Platinum","craftsmanship":"Shared-Prong Eternity Setting"}'::jsonb, 'available', true, 4),
  ('piece-6-crown-milgrain-beaded-diamond-band', 'piece-6-crown-milgrain-beaded-diamond-band', 'The Crown Milgrain Beaded Diamond Band', '22ct-gold', '18ct Warm Yellow Gold (750)', 'London Assay 750 Stamped', 'Handcrafted 18ct yellow gold band featuring dual beaded milgrain borders framing a central channel of micro-pavé diamonds.', 'In-House Workshop Handcraft', true, 'video', '/images/collections/posters/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.jpg', '/images/collections/39b5ba11-da50-4ab0-bc84-3d952b8b2a8d.mp4', ARRAY['18ct Gold', 'Milgrain', 'Pavé Band', 'Diamond Ring'], '{"weight":"8.2 grams","carat":"0.85ct Round Diamonds","metal":"18ct Yellow Gold","craftsmanship":"Milgrain Beaded Bench Finish"}'::jsonb, 'available', true, 5),
  ('piece-7-high-gallery-pave-solitaire-ring', 'piece-7-high-gallery-pave-solitaire-ring', 'The High-Gallery Pavé Solitaire Engagement Ring', 'bridal', '950 Platinum & 18ct White Gold', 'London Assay Certified', 'Brilliant cut solitaire diamond engagement ring elevated in an open four-prong basket with micro-pavé set shoulders and bridge.', 'Bespoke Engagement Ring • Custom Diamond Sizing', true, 'video', '/images/collections/posters/482c070d-7614-41e2-8811-d76441020509.jpg', '/images/collections/482c070d-7614-41e2-8811-d76441020509.mov', ARRAY['Solitaire', 'Platinum', 'Pavé Gallery', 'Engagement Ring'], '{"carat":"1.50ct Certified Solitaire + 0.45ct Pavé","metal":"950 Platinum","craftsmanship":"Micro-Claw Hand Setting"}'::jsonb, 'available', true, 6),
  ('piece-8-classic-18ct-gold-solitaire-ring', 'piece-8-classic-18ct-gold-solitaire-ring', 'The Classic 18ct Gold Solitaire Engagement Ring', 'bridal', '18ct Solid Yellow Gold (750)', 'London Assay 750 Stamped', 'Timeless brilliant round solitaire diamond secured in a refined 4-prong setting on a smooth mirror-polished yellow gold knife-edge band.', 'Hayes Workshop Direct Pricing', true, 'video', '/images/collections/posters/49013294-5782-4d47-97e4-c0f91f0afd9d.jpg', '/images/collections/49013294-5782-4d47-97e4-c0f91f0afd9d.mp4', ARRAY['18ct Yellow Gold', 'Solitaire', 'Engagement Ring', 'Classic'], '{"carat":"1.25ct Solitaire Diamond","metal":"18ct Yellow Gold","craftsmanship":"Hand-Turned Comfort Shank"}'::jsonb, 'available', true, 7),
  ('piece-9-riviera-lariat-diamond-suite', 'piece-9-riviera-lariat-diamond-suite', 'The Riviera Lariat Diamond Suite & Earrings', 'bridal', '18ct White Gold & Platinum', 'UK Assay Certified 750', 'Grand red-carpet bridal suite comprising a graduated natural diamond V-lariat drop necklace paired with matching brilliant diamond drop earrings.', 'Bridal Commission • In-House Hayes Atelier', true, 'video', '/images/collections/posters/550a6d34-c1f3-45b7-a527-2a4421c4920d.jpg', '/images/collections/550a6d34-c1f3-45b7-a527-2a4421c4920d.mp4', ARRAY['Diamond Suite', 'Lariat Necklace', 'Drop Earrings', 'Haute Joaillerie'], '{"weight":"56.0 grams","carat":"16.50ct Natural Diamonds","metal":"18ct White Gold","craftsmanship":"Artisan Bench Assembly"}'::jsonb, 'available', true, 8),
  ('piece-10-radiant-cut-solitaire-ring', 'piece-10-radiant-cut-solitaire-ring', 'The Radiant Cut Solitaire with Pavé Shoulders', 'bridal', '950 Platinum', 'London Assay 950 Stamped', 'Radiant-cut solitaire diamond ring featuring four corner claw prongs and sparkling micro-pavé natural diamonds along the shank.', 'Bespoke Diamond Mount • Certified Stone', true, 'video', '/images/collections/posters/585f854b-a2a7-4608-83e8-29eded6d04f6.jpg', '/images/collections/585f854b-a2a7-4608-83e8-29eded6d04f6.mov', ARRAY['Radiant Cut', 'Platinum', 'Pavé Shoulders', 'Engagement Ring'], '{"carat":"2.05ct Radiant Diamond + 0.50ct Pavé","metal":"950 Platinum","craftsmanship":"Precision Bench Micro-Pavé"}'::jsonb, 'available', true, 9),
  ('piece-11-two-tone-solitaire-diamond-ring', 'piece-11-two-tone-solitaire-diamond-ring', 'The Two-Tone Solitaire Diamond Engagement Ring', 'rings', '18ct Yellow Gold Band & Platinum Collet', 'London Assay Multi-Metal 750 / 950', 'Sophisticated two-tone design with an 18ct yellow gold pavé-accented band supporting a pure platinum four-prong solitaire setting.', 'Bespoke Workshop Commission', true, 'video', '/images/collections/posters/58ba2f9b-c4f6-4f3d-b060-dacd9a43f88b.jpg', '/images/collections/58ba2f9b-c4f6-4f3d-b060-dacd9a43f88b.mp4', ARRAY['Two-Tone', '18ct Gold', 'Platinum Collet', 'Pavé Band'], '{"carat":"1.35ct Solitaire + 0.35ct Pavé","metal":"18ct Gold & Platinum","craftsmanship":"Dual-Metal Fusion Benchwork"}'::jsonb, 'available', true, 10),
  ('piece-12-hayes-lion-crest-aquamarine-pendant', 'piece-12-hayes-lion-crest-aquamarine-pendant', 'The Hayes Lion Crest Aquamarine Pendant', 'polki-heritage', '22ct Solid Gold (916)', 'London Leopard''s Head 916 Stamped', 'Sculpted solid 22ct yellow gold lion head pendant clutching a round faceted sky-blue gemstone in its jaws, suspended on a fine gold link chain.', 'Direct Workshop Craft • London Assay Hallmarked', true, 'video', '/images/collections/posters/6bee2c14-fbe5-43f5-a95f-330e06bb9f89.jpg', '/images/collections/6bee2c14-fbe5-43f5-a95f-330e06bb9f89.mp4', ARRAY['22ct Gold', 'Lion Pendant', 'Aquamarine', 'Hand-Sculpted'], '{"weight":"18.5 grams","carat":"3.20ct Natural Aquamarine","metal":"22ct Yellow Gold","craftsmanship":"Hand-Chased Lion Architecture"}'::jsonb, 'available', true, 11),
  ('piece-13-cathedral-oval-diamond-solitaire-ring', 'piece-13-cathedral-oval-diamond-solitaire-ring', 'The Cathedral Oval Diamond Solitaire Ring', '22ct-gold', '18ct Yellow Gold Shank & Platinum Head', 'UK London Assay Certified', 'Elongated oval-cut certified natural diamond elevated gracefully on high cathedral shoulders in 18ct solid yellow gold.', 'Bespoke Engagement Ring', true, 'video', '/images/collections/posters/6cda1721-6533-465f-8580-4c317e922745-var.jpg', '/images/collections/6cda1721-6533-465f-8580-4c317e922745-var.mp4', ARRAY['Oval Cut', 'Cathedral Mount', '18ct Gold', 'Solitaire'], '{"carat":"1.75ct Certified Oval Diamond","metal":"18ct Yellow Gold & Platinum","craftsmanship":"Hand-Turned Cathedral Mount"}'::jsonb, 'available', true, 12),
  ('piece-14-hidden-halo-round-brilliant-ring', 'piece-14-hidden-halo-round-brilliant-ring', 'The Hidden Halo Round Brilliant Engagement Ring', 'rings', '950 Platinum', '950 Platinum London Stamped', 'Round brilliant solitaire diamond with an undercover hidden halo basket and sparkling French-cut pavé diamonds running halfway down the band.', 'Bespoke Workshop Setting', true, 'video', '/images/collections/posters/7242ee24-7935-4e43-b60b-1d260db663da.jpg', '/images/collections/7242ee24-7935-4e43-b60b-1d260db663da.mp4', ARRAY['Hidden Halo', 'Platinum', 'French Pavé', 'Solitaire'], '{"carat":"1.60ct Center Diamond + 0.40ct Halo","metal":"950 Platinum","craftsmanship":"Micro-Pavé Hidden Gallery"}'::jsonb, 'available', true, 13),
  ('piece-15-pear-solitaire-crossover-pave-ring', 'piece-15-pear-solitaire-crossover-pave-ring', 'The Pear Solitaire Crossover Pavé Statement Ring', 'polki-heritage', '18ct Yellow Gold (750)', 'London Assay 750 Certified', 'Striking pear-shaped diamond solitaire mounted between flowing crossover split-shank shoulders pavé-set with brilliant round diamonds.', 'High Jewellery Cocktail Commission', true, 'video', '/images/collections/posters/82bd6ab1-219d-4fc1-894b-77030e289dbf.jpg', '/images/collections/82bd6ab1-219d-4fc1-894b-77030e289dbf.mp4', ARRAY['Pear Cut', 'Crossover Band', 'Split Shank', '18ct Gold'], '{"carat":"1.40ct Pear Diamond + 0.60ct Pavé","metal":"18ct Yellow Gold","craftsmanship":"Fluid Crossover Architecture"}'::jsonb, 'available', true, 14),
  ('piece-16-sovereign-6-prong-solitaire-ring', 'piece-16-sovereign-6-prong-solitaire-ring', 'The Sovereign 6-Prong Round Solitaire Ring', '22ct-gold', '18ct Solid Yellow Gold (750)', 'UK 750 Gold Stamped', 'Iconic six-prong crown collet holding a round brilliant natural diamond on a solid polished yellow gold rounded shank.', 'Direct Workshop Craft', true, 'video', '/images/collections/posters/86e9bedc-c2df-4ad8-81f5-a2f038596d60.jpg', '/images/collections/86e9bedc-c2df-4ad8-81f5-a2f038596d60.mp4', ARRAY['6-Prong', 'Round Solitaire', '18ct Gold', 'Classic'], '{"carat":"1.50ct Round Brilliant Solitaire","metal":"18ct Yellow Gold","craftsmanship":"Classic 6-Prong Coronet"}'::jsonb, 'available', true, 15),
  ('piece-17-classic-gold-diamond-eternity-band', 'piece-17-classic-gold-diamond-eternity-band', 'The Classic Yellow Gold Diamond Eternity Band', '22ct-gold', '18ct Solid Yellow Gold (750)', 'London Assay 750 Stamped', 'Full circle eternity band of matched round brilliant natural diamonds hand-set into low-profile 18ct yellow gold shared prongs.', 'Made to Order • London Hallmarked', true, 'video', '/images/collections/posters/8748e8f9-eb1c-44d1-ade8-df33908158ad.jpg', '/images/collections/8748e8f9-eb1c-44d1-ade8-df33908158ad.mp4', ARRAY['Eternity Band', '18ct Gold', 'Shared Prong', 'Wedding Band'], '{"carat":"2.10ct Natural Round Diamonds","metal":"18ct Yellow Gold","craftsmanship":"Seamless 360° Stone Setting"}'::jsonb, 'available', true, 16),
  ('piece-18-cushion-cut-solitaire-atelier-ring', 'piece-18-cushion-cut-solitaire-atelier-ring', 'The Cushion Cut Solitaire Diamond Atelier Ring', 'rings', '950 Platinum', 'London Assay 950 Certified', 'Handcrafted cushion-cut diamond solitaire ring featuring side pavé gallery detailing and four claw prongs in solid platinum.', 'Bespoke Workshop Setting', true, 'video', '/images/collections/posters/9134d8c9-f46e-4a55-a951-9b46f5fb82ef.jpg', '/images/collections/9134d8c9-f46e-4a55-a951-9b46f5fb82ef.mov', ARRAY['Cushion Cut', 'Platinum', 'Solitaire', 'Engagement Ring'], '{"carat":"1.80ct Cushion Cut Diamond","metal":"950 Platinum","craftsmanship":"Handmade Bench Collet"}'::jsonb, 'available', true, 17),
  ('piece-19-twisted-infinity-pave-diamond-ring', 'piece-19-twisted-infinity-pave-diamond-ring', 'The Twisted Infinity Pavé Diamond Engagement Ring', 'rings', '950 Platinum', '950 Platinum Hallmarked', 'Curving infinity crossover ribbons of pavé-set diamonds entwining toward a central brilliant solitaire diamond collet.', 'Custom Commission', true, 'video', '/images/collections/posters/933947d1-ad53-4490-8431-206520dc747f.jpg', '/images/collections/933947d1-ad53-4490-8431-206520dc747f.mp4', ARRAY['Infinity Band', 'Twisted Ring', 'Platinum', 'Pavé'], '{"carat":"1.20ct Solitaire + 0.42ct Pavé","metal":"950 Platinum","craftsmanship":"Intertwined Ribbon Casting"}'::jsonb, 'available', true, 18),
  ('piece-20-traditional-bombay-screw-back-studs', 'piece-20-traditional-bombay-screw-back-studs', 'Traditional 22ct Gold Bombay Screw-Back Studs', '22ct-gold', '22ct Solid Gold (916)', 'London Leopard''s Head 916 Stamped', 'Authentic 22ct gold granulated cluster stud earrings featuring traditional Indian domed Bombay screw-back posts for security and comfort.', 'Direct Workshop Craft', true, 'video', '/images/collections/posters/9bf16584-ce9d-43a3-ac0a-5acb4af1d50b.jpg', '/images/collections/9bf16584-ce9d-43a3-ac0a-5acb4af1d50b.mp4', ARRAY['22ct Gold', 'Bombay Screw', 'Stud Earrings', 'Granulation'], '{"weight":"12.4 grams / pair","metal":"22ct Solid Bullion Gold","craftsmanship":"Hand-Granulated Filigree"}'::jsonb, 'available', true, 19),
  ('piece-21-cushion-halo-diamond-ring', 'piece-21-cushion-halo-diamond-ring', 'The Cushion Halo Diamond Engagement Ring', '22ct-gold', '18ct Yellow Gold Shank & Platinum Halo', 'London Assay 750 Stamped', 'Warm 18ct yellow gold pavé band featuring a luminous cushion-shaped micro-pavé halo encircling a certified center diamond.', 'Bespoke Commission', true, 'video', '/images/collections/posters/a320449b-e662-4674-8ff1-7b3c58efe48f.jpg', '/images/collections/a320449b-e662-4674-8ff1-7b3c58efe48f.mp4', ARRAY['Cushion Halo', '18ct Gold', 'Micro-Pavé', 'Engagement Ring'], '{"carat":"1.20ct Center + 0.55ct Halo/Pavé","metal":"18ct Yellow Gold","craftsmanship":"Micro-Prong Halo Mounting"}'::jsonb, 'available', true, 20),
  ('piece-22-platinum-pear-diamond-cluster-ring', 'piece-22-platinum-pear-diamond-cluster-ring', 'The Platinum Pear Diamond Cluster Halo Ring', 'polki-heritage', '950 Platinum', '950 Platinum Certified', 'Graceful pear-cut natural diamond encircled by a tight micro-pavé halo on a tapered platinum band set with matching diamonds.', 'Bespoke Workshop Setting', true, 'video', '/images/collections/posters/c893d288-706d-43a2-bf7d-a67f0fb840c0.jpg', '/images/collections/c893d288-706d-43a2-bf7d-a67f0fb840c0.mp4', ARRAY['Pear Diamond', 'Cluster Halo', 'Platinum', 'Solitaire'], '{"carat":"1.30ct Pear Diamond + 0.40ct Halo","metal":"950 Platinum","craftsmanship":"Precision Contoured Collet"}'::jsonb, 'available', true, 21),
  ('piece-23-emerald-marquise-diamond-floral-pendant', 'piece-23-emerald-marquise-diamond-floral-pendant', 'The Zambian Emerald & Marquise Diamond Floral Pendant', 'polki-heritage', '18ct White Gold', 'London Assay 750 Stamped', 'Botanical high jewellery pendant featuring a central rosette of six pear-cut Zambian emeralds surrounded by radiating marquise diamond petals.', 'High Jewellery Commission', true, 'video', '/images/collections/posters/d1b0cd96-fce0-4ef2-a3a6-20ecc8784006.jpg', '/images/collections/d1b0cd96-fce0-4ef2-a3a6-20ecc8784006.mov', ARRAY['Emerald Pendant', 'Marquise Diamonds', 'Floral Motif', '18ct White Gold'], '{"weight":"14.2 grams","carat":"4.80ct Emeralds + 3.20ct Diamonds","metal":"18ct White Gold","craftsmanship":"Artisan Cluster Claw Mount"}'::jsonb, 'available', true, 22),
  ('piece-24-scalloped-floral-diamond-cluster-band', 'piece-24-scalloped-floral-diamond-cluster-band', 'The Scalloped Floral Diamond Cluster Band', '22ct-gold', '18ct Yellow Gold (750)', 'London Assay 750 Stamped', 'Delicate half-eternity band designed with continuous scalloped florets of natural brilliant cut diamonds set in 18ct yellow gold.', 'Made to Order • Exact Finger Size', true, 'video', '/images/collections/posters/ddae91d6-81ca-4a58-8eff-963f065d738f.jpg', '/images/collections/ddae91d6-81ca-4a58-8eff-963f065d738f.mp4', ARRAY['Scalloped Band', 'Floral Diamond', '18ct Gold', 'Eternity Ring'], '{"carat":"1.15ct Natural Diamonds","metal":"18ct Yellow Gold","craftsmanship":"Scalloped Cluster Setting"}'::jsonb, 'available', true, 23),
  ('piece-25-solitaire-diamond-stud-earrings', 'piece-25-solitaire-diamond-stud-earrings', 'Classic 4-Prong Solitaire Diamond Stud Earrings', 'polki-heritage', '18ct Yellow Gold (750)', 'London Assay Stamped', 'Matched pair of round brilliant natural diamonds set in classic 4-prong 18ct yellow gold basket stud mountings with secure friction backs.', 'Direct Workshop Craft', true, 'video', '/images/collections/posters/e04a48c3-2c58-4692-bf79-43609f73bf1d.jpg', '/images/collections/e04a48c3-2c58-4692-bf79-43609f73bf1d.mp4', ARRAY['Diamond Studs', '18ct Yellow Gold', 'Solitaire', 'Classic'], '{"carat":"1.50ct Total Weight (0.75ct each)","metal":"18ct Yellow Gold","craftsmanship":"Precision Matched Pair"}'::jsonb, 'available', true, 24),
  ('piece-26-pear-crossover-diamond-ring-variant', 'piece-26-pear-crossover-diamond-ring-variant', 'The Pear Solitaire Crossover Diamond Ring', 'rings', '18ct Yellow Gold', 'London Assay 750 Stamped', 'Fluid crossover split shank in 18ct yellow gold set with micro-pavé diamonds embracing a certified pear brilliant diamond.', 'Bespoke Commission', true, 'video', '/images/collections/posters/e7ea0977-ac81-4aaf-b7b7-ad43406042a8.jpg', '/images/collections/e7ea0977-ac81-4aaf-b7b7-ad43406042a8.mov', ARRAY['Pear Cut', 'Crossover', 'Pavé Band', '18ct Gold'], '{"carat":"1.45ct Pear Diamond + 0.55ct Pavé","metal":"18ct Yellow Gold","craftsmanship":"Sculptural Crossover Mount"}'::jsonb, 'available', true, 25),
  ('piece-27-foliate-marquise-diamond-cluster-studs', 'piece-27-foliate-marquise-diamond-cluster-studs', 'The Foliate Marquise Diamond Cluster Studs', 'polki-heritage', '18ct White Gold & Platinum', 'London Assay Certified', 'Organic leafy foliate cluster earrings set with marquise and round brilliant cut natural diamonds in 18ct white gold.', 'Direct Workshop Craft', true, 'video', '/images/collections/posters/f06dfa2e-9675-4e79-b953-e4e61bb1b393.jpg', '/images/collections/f06dfa2e-9675-4e79-b953-e4e61bb1b393.mp4', ARRAY['Diamond Studs', 'Foliate Cluster', '18ct White Gold', 'Marquise'], '{"carat":"1.80ct Total Diamond Weight","metal":"18ct White Gold","craftsmanship":"Leaf Motif Cluster Setting"}'::jsonb, 'available', true, 26),
  ('piece-28-syndicate-polki-emerald-collar', 'piece-28-syndicate-polki-emerald-collar', 'The Syndicate Polki & Emerald Beaded Bridal Collar', 'polki-heritage', '22ct Antique Gold & Syndicate Polki', 'London Assay 916 Certified', '22ct gold Jadau Polki bridal necklace with scalloped drop motifs, strung with natural green emerald bead tassels and matching ear ornament.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4.jpeg', NULL, ARRAY['Polki Heritage', 'Zambian Emerald', '22ct Gold', 'Bridal Collar'], '{"weight":"128.0 grams","carat":"18.50ct Polki & Emerald","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Artisan Jadau Handcraft"}'::jsonb, 'available', true, 27),
  ('piece-29-nizam-ruby-pearl-polki-choker', 'piece-29-nizam-ruby-pearl-polki-choker', 'The Nizam Ruby Cabochon & Basra Pearl Polki Choker', 'bridal', '22ct Imperial Gold (916)', 'London Assay 916 Certified', 'Royal 22ct gold bridal choker set with uncut syndicate Polki diamonds, deep ruby-red cabochon stones, and a dense fringe of South Sea pearls.', 'High Jewellery Atelier • Bespoke Piece', true, 'image', '/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb.jpeg', NULL, ARRAY['22ct Gold', 'Syndicate Polki', 'Burmese Rubies', 'South Sea Pearls'], '{"weight":"142.0 grams","carat":"16.20ct Polki & Rubies","metal":"22ct Imperial Gold","craftsmanship":"In-House Hayes Handcrafted"}'::jsonb, 'available', true, 28),
  ('piece-30-padmavati-jadau-polki-choker', 'piece-30-padmavati-jadau-polki-choker', 'The Padmavati 22ct Jadau Polki Bridal Choker', 'bridal', '22ct Gold (916 Hallmarked)', 'UK London Assay Office 916', 'Flat-lay presentation of our signature 22ct gold bridal choker with ruby enamel highlights, geometric Jadau diamond plaques, and rich pearl cluster fringe.', 'Direct Workshop Pricing • In-House Hayes Bench', true, 'image', '/images/collections/22ct-jadau-polki-bridal-choker.jpg', NULL, ARRAY['22ct Gold', 'Jadau Choker', 'Bridal Suite', 'Kundan Setting'], '{"weight":"135.0 grams","carat":"14.80ct Uncut Polki","metal":"22ct Solid Gold","craftsmanship":"Pure 24ct Kundan Foil Setting"}'::jsonb, 'available', true, 29),
  ('piece-31-royal-mayur-peacock-tikka', 'piece-31-royal-mayur-peacock-tikka', 'The Royal Mayur Peacock Motif Polki Maang Tikka', 'bridal', '22ct Gold (916 Hallmarked)', 'UK Hallmark Certified', 'Intricately hand-sculpted bridal hair ornament featuring open-work peacock plumage set with uncut diamonds, ruby eye accents, and pearl drop borders.', 'Bridal Jewellery Suite Addition', true, 'image', '/images/collections/53301b27-9ad6-4e9c-a621-ab6b9e795fca.jpeg', NULL, ARRAY['Maang Tikka', 'Peacock Motif', 'Polki', 'Bridal Headpiece'], '{"weight":"36.5 grams","carat":"6.50ct Polki","metal":"22ct Gold","craftsmanship":"Hand-Carved Gold Setting"}'::jsonb, 'available', true, 30),
  ('piece-32-russian-emerald-basra-pearl-choker', 'piece-32-russian-emerald-basra-pearl-choker', 'The Russian Emerald & Basra Pearl Polki Choker', 'polki-heritage', '22ct Gold & Russian Emeralds', 'UK Assay Certified 916', 'High-jewellery collar adorned with vivid square-cut emeralds, brilliant Polki diamonds, and a seamless rim of graduated Basra pearls.', 'Viewing by Private Consultation', true, 'image', '/images/collections/5ce947fd-b64d-4004-afc4-8ffe1a7847b8.jpeg', NULL, ARRAY['Russian Emerald', 'Basra Pearls', 'Polki Choker', '22ct Gold'], '{"weight":"135.0 grams","carat":"16.80ct Polki","metal":"22ct Gold","craftsmanship":"Handcrafted in Hayes Atelier"}'::jsonb, 'available', true, 31),
  ('piece-33-royal-darbar-emerald-bridal-haar', 'piece-33-royal-darbar-emerald-bridal-haar', 'The Royal Darbar Polki & Emerald Bridal Haar', 'bridal', '22ct Solid Gold (916)', 'London Assay 916 Stamped', 'Ornate heritage Polki necklace featuring layered emerald droplets on ceremonial red silk, handcrafted for grand South Asian weddings.', 'Bespoke Bridal Suite Commission', true, 'image', '/images/collections/64043268-7e68-48e4-8b74-f58fbd5ff884.jpeg', NULL, ARRAY['Darbar Haar', 'Emerald Droplets', 'Polki', 'Ceremonial Suite'], '{"weight":"148.0 grams","carat":"21.00ct Polki & Emeralds","metal":"22ct Solid Gold","craftsmanship":"Master Goldsmith Hand-Set"}'::jsonb, 'available', true, 32),
  ('piece-34-workshop-ledger-choker-jhumkis', 'piece-34-workshop-ledger-choker-jhumkis', 'Master Goldsmith Hand-Chased 22ct Choker & Jhumkis', '22ct-gold', 'Pure 22ct Bullion Gold (916)', 'Official London Leopard''s Head 916', 'Documented in our Hayes workshop order ledger (Ref #12402). 22ct solid gold choker with cascading micro-granulation spheres and matching hand-forged jhumki drops.', 'Direct Workshop Bullion Pricing', true, 'image', '/images/workshop/goldsmith-bench-order-book-22ct.jpg', NULL, ARRAY['22ct Solid Gold', 'Hand-Chased', 'Workshop Ledger', 'Jhumkis', 'Heirloom'], '{"weight":"86.4 grams","metal":"Pure 22ct Bullion Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 33),
  ('piece-35-chandrika-polki-ruby-bridal-passa', 'piece-35-chandrika-polki-ruby-bridal-passa', 'The Chandrika Polki & Ruby Bridal Passa & Tikka', 'bridal', '22ct Gold (916 Hallmarked)', '916 London Assay', 'Traditional bridal headpiece featuring tiered Polki diamonds, pear-shaped ruby cabochons, and pearl drops for traditional bridal adornment.', 'Custom Heirloom Commission', true, 'image', '/images/collections/7b225dd5-6728-41fe-b993-ac228fe3782f.jpeg', NULL, ARRAY['Passa', 'Bridal Hairpiece', 'Polki', 'Rubies'], '{"weight":"41.2 grams","carat":"8.20ct Polki","metal":"22ct Gold","craftsmanship":"Master Goldsmith Hand-Set"}'::jsonb, 'available', true, 34),
  ('piece-36-workshop-velvet-tray-collection', 'piece-36-workshop-velvet-tray-collection', 'The Hayes Atelier Workshop Velvet Tray Collection', '22ct-gold', '22ct Solid Gold (916)', 'London Assay Office 916 Stamped', 'Handcrafted 22ct gold bridal collars, medallions, and matching maang tikkas directly on our Hayes workshop trays awaiting hallmarking.', 'Direct Workshop Bullion Pricing', true, 'image', '/images/workshop/workshop-bench-velvet-trays.jpg', NULL, ARRAY['Hayes Workshop', '22ct Gold', 'Bridal Suites', 'Wholesale Bullion'], '{"weight":"185.0 grams total","metal":"22ct Solid Gold","craftsmanship":"Handmade on Uxbridge Road"}'::jsonb, 'available', true, 35),
  ('piece-37-grand-chandbali-earrings-carved-emeralds', 'piece-37-grand-chandbali-earrings-carved-emeralds', 'Grand Chandbali Earrings with Leaf-Carved Emeralds', 'polki-heritage', '22ct Gold (916 Hallmarked)', '916 Hallmarked', 'Heirloom crescent chandbali statement earrings set with carved Zambian emerald leaves and floating Polki diamond droplets on 22ct gold.', 'Pair Commission • Ergonomic Balance', true, 'image', '/images/collections/926a7777-65a9-4968-a10c-804f36dc283a.jpeg', NULL, ARRAY['Chandbali', 'Carved Emerald', 'Polki Earrings', '22ct Gold'], '{"weight":"52.0 grams / pair","carat":"14.20ct Emeralds","metal":"22ct Gold","craftsmanship":"Artisan Filigree & Bezel Setting"}'::jsonb, 'available', true, 36),
  ('piece-38-mughal-chandbali-carved-ruby-earrings', 'piece-38-mughal-chandbali-carved-ruby-earrings', 'The Mughal Chandbali Earrings with Carved Ruby Drops', 'polki-heritage', '22ct Gold (916 Hallmarked)', '916 London Stamped', 'Historic Mughal-inspired double crescent earrings set with uncut Polki diamonds, ruby cabochons, and clustered seed pearl bunches.', 'Handcrafted Heirloom Pair', true, 'image', '/images/collections/e9b36b5b-4e22-4c94-b80d-6c530381fc7f.jpeg', NULL, ARRAY['Mughal Jewellery', 'Chandbali', 'Ruby Drops', 'Seed Pearls'], '{"weight":"44.0 grams / pair","metal":"22ct Gold","craftsmanship":"Mughal Jadau Technique"}'::jsonb, 'available', true, 37),
  ('piece-39-imperial-kundan-carved-emerald-haar', 'piece-39-imperial-kundan-carved-emerald-haar', 'The Imperial Kundan Carved Emerald Long Haar', 'polki-heritage', '22ct Gold & Natural Emeralds', 'London Assay 916 Stamped', 'Long V-shaped royal Kundan necklace featuring a massive rectangular emerald-cut Colombian emerald pendant with emerald drops.', 'High Jewellery Commission • Private Viewing', true, 'image', '/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c.jpeg', NULL, ARRAY['Kundan Haar', 'Colombian Emerald', 'Long Necklace', 'Royal Suite'], '{"weight":"165.0 grams","carat":"38.50ct Carved Emerald","metal":"22ct Solid Gold","craftsmanship":"Pure 24ct Kundan Foil Setting"}'::jsonb, 'available', true, 38),
  ('piece-40-royal-darbar-scalloped-emerald-choker', 'piece-40-royal-darbar-scalloped-emerald-choker', 'The Royal Darbar Polki & Scalloped Emerald Choker', 'bridal', '22ct Gold (916 Hallmarked)', 'London Assay 916 Stamped', '22ct yellow gold Jadau Polki scalloped bridal choker with suspended natural pearls and emerald drops handcrafted in our Hayes workshop.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235.jpeg', NULL, ARRAY['22ct Gold', 'Scalloped Choker', 'Polki', 'Emeralds'], '{"weight":"122.0 grams","carat":"14.20ct Polki","metal":"22ct Solid Gold","craftsmanship":"In-House Hayes Handcrafted"}'::jsonb, 'available', true, 39),
  ('piece-41-maharani-three-strand-emerald-haar', 'piece-41-maharani-three-strand-emerald-haar', 'The Maharani Three-Strand Emerald Tablet Haar', 'bridal', '22ct Gold (916 Hallmarked)', 'London Assay 916 Certified', 'Regal three-strand ceremonial bridal haar featuring carved green emerald tablets, uncut Polki diamonds, and pearl clusters.', 'Bespoke Bridal Suite Commission', true, 'image', '/images/collections/fd9d0bc5-26ce-4998-92bf-50957ffc2210.jpeg', NULL, ARRAY['Three-Strand Haar', 'Emerald Tablets', 'Polki', 'Maharani Suite'], '{"weight":"174.0 grams","carat":"32.00ct Emerald Tablets","metal":"22ct Solid Gold","craftsmanship":"Royal Jadau Stringing"}'::jsonb, 'available', true, 40),
  ('piece-42-bespoke-cad-marquise-solitaire-eye-pendant', 'piece-42-bespoke-cad-marquise-solitaire-eye-pendant', 'Bespoke 3D CAD Marquise Solitaire Eye Pendant', 'rings', '18ct Yellow Gold (750)', 'London Assay 750 Stamped', 'Precision 3D CAD custom commission rendering an eye-shaped 18ct gold pendant set with natural white diamonds.', '3D CAD Prototype to Finished Gold • Custom Commission', true, 'image', '/images/cad/bespoke-evil-eye-diamond-cad.jpg', NULL, ARRAY['3D CAD', 'Evil Eye', 'Diamond Pendant', 'Custom Commission'], '{"carat":"1.45ct Round & Marquise Diamonds","metal":"18ct Yellow Gold","craftsmanship":"CAD Sculpted & Micro-Set in Hayes"}'::jsonb, 'available', true, 41),
  ('piece-43-bespoke-cad-sapphire-halo-medallion', 'piece-43-bespoke-cad-sapphire-halo-medallion', 'Bespoke 3D CAD Evil Eye Sapphire & Diamond Medallion', 'rings', '18ct Warm Yellow Gold (750)', '750 London Hallmarked', 'Precision 3D CAD custom commission featuring concentric halos of vivid Ceylon sapphires, canary diamonds, and micro-claw natural white diamonds.', '3D CAD Prototype to Finished Gold • Custom Commission', true, 'image', '/images/cad/bespoke-evil-eye-sapphire-cad.jpg', NULL, ARRAY['3D CAD', 'Evil Eye', 'Ceylon Sapphire', 'Custom Commission', '18ct Gold'], '{"carat":"2.10ct Sapphire & Diamond","metal":"18ct Yellow Gold","craftsmanship":"CAD Sculpted & Micro-Set in Hayes"}'::jsonb, 'available', true, 42),
  ('piece-44-syndicate-polki-collar-atelier-view', 'piece-44-syndicate-polki-collar-atelier-view', 'The Syndicate Polki Collar (Atelier Angle View)', 'polki-heritage', '22ct Antique Gold & Uncut Syndicate Polki', 'London Assay 916 Certified', 'Alternative bench view of our Syndicate Polki collar with green emerald drop accents and hand-chased reverse detailing.', 'Direct Workshop Consultation • In-House Hayes Atelier', true, 'image', '/images/collections/12829417-6791-4c2c-8ff1-7b92d459aab4_1.jpeg', NULL, ARRAY['Polki Heritage', 'Atelier Angle', '22ct Gold', 'Syndicate Polki'], '{"weight":"128.0 grams","carat":"18.50ct Polki & Emerald","metal":"22ct Gold & 24ct Kundan Foil","craftsmanship":"Artisan Jadau Setting"}'::jsonb, 'available', true, 43),
  ('piece-45-nizam-ruby-choker-atelier-view', 'piece-45-nizam-ruby-choker-atelier-view', 'The Nizam Ruby Cabochon Choker (Presentation View)', 'bridal', '22ct Imperial Gold (916)', 'London Assay 916 Certified', 'Ceremonial presentation angle of the Nizam royal choker showcasing natural pearl fringe drape and ruby cabochon luster.', 'High Jewellery Atelier • Bespoke Piece', true, 'image', '/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_1.jpeg', NULL, ARRAY['Presentation View', '22ct Gold', 'Burmese Rubies', 'South Sea Pearls'], '{"weight":"142.0 grams","carat":"16.20ct Polki & Rubies","metal":"22ct Imperial Gold","craftsmanship":"In-House Hayes Handcrafted"}'::jsonb, 'available', true, 44),
  ('piece-46-nizam-ruby-choker-bench-macro', 'piece-46-nizam-ruby-choker-bench-macro', 'The Nizam Ruby Cabochon Choker (Bench Macro Detail)', 'bridal', '22ct Imperial Gold (916)', 'UK London Assay 916 Stamped', 'Close-up bench inspection of the 24ct Kundan foil setting and hand-selected natural unheated Burmese rubies.', 'Direct Workshop Consultation', true, 'image', '/images/collections/1e26b5f9-6c8a-45ce-b688-52f9dbd1d8bb_2.jpeg', NULL, ARRAY['Macro Detail', 'Kundan Foil', 'Burmese Rubies', '22ct Gold'], '{"weight":"142.0 grams","carat":"16.20ct Polki & Rubies","metal":"22ct Imperial Gold","craftsmanship":"Pure 24ct Kundan Setting"}'::jsonb, 'available', true, 45),
  ('piece-47-chandrika-passa-workshop-angle', 'piece-47-chandrika-passa-workshop-angle', 'The Chandrika Bridal Passa (Workshop Macro Setting)', 'bridal', '22ct Gold (916)', '916 London Assay Stamped', 'Bench macro photography documenting the intricate multi-tier fan structure and ruby cluster drops of the Chandrika bridal passa.', 'Custom Heirloom Commission', true, 'image', '/images/collections/7b225dd5-6728-41fe-b993-ac228fe3782f_1.jpeg', NULL, ARRAY['Passa', 'Macro Setting', 'Polki', 'Rubies'], '{"weight":"41.2 grams","carat":"8.20ct Polki","metal":"22ct Gold","craftsmanship":"Master Goldsmith Hand-Set"}'::jsonb, 'available', true, 46),
  ('piece-48-imperial-kundan-haar-atelier-view', 'piece-48-imperial-kundan-haar-atelier-view', 'The Imperial Kundan Carved Emerald Haar (Atelier View)', 'polki-heritage', '22ct Gold & Natural Emeralds', 'London Assay 916 Certified', 'Overhead atelier perspective of the grand Colombian emerald rectangular pendant and graduating Kundan Polki links.', 'High Jewellery Commission', true, 'image', '/images/collections/f7a0e00d-b6e5-4e91-aeba-0d0db54e173c_1.jpeg', NULL, ARRAY['Kundan Haar', 'Colombian Emerald', 'Atelier View', 'Royal Suite'], '{"weight":"165.0 grams","carat":"38.50ct Carved Emerald","metal":"22ct Solid Gold","craftsmanship":"Pure 24ct Kundan Foil Setting"}'::jsonb, 'available', true, 47),
  ('piece-49-royal-darbar-choker-workshop-angle', 'piece-49-royal-darbar-choker-workshop-angle', 'The Royal Darbar Scalloped Choker (Workshop Angle)', 'bridal', '22ct Gold (916)', 'London Assay 916 Stamped', 'Bench angle documenting the fluid articulating hinges connecting each scalloped Kundan Polki panel with natural pearl droplets.', 'Direct Workshop Consultation', true, 'image', '/images/collections/fc4f5f26-d64e-490e-87dc-23058ec58235_1.jpeg', NULL, ARRAY['Scalloped Choker', 'Hinged Setting', 'Polki', 'Pearl Droplets'], '{"weight":"122.0 grams","carat":"14.20ct Polki","metal":"22ct Solid Gold","craftsmanship":"In-House Hayes Handcrafted"}'::jsonb, 'available', true, 48),
  ('piece-50-calcutta-filigree-collar-bench-record', 'piece-50-calcutta-filigree-collar-bench-record', 'The Calcutta Filigree Collar & Maang Tikka (Bench Pad Record)', '22ct-gold', '22ct Solid Bullion Gold (916)', 'Official London Leopard''s Head 916', 'High-resolution workshop record of the multi-tier filigree mesh collar and matching emerald cabochon forehead ornament on black velvet.', 'Direct Workshop Bullion Pricing', true, 'image', '/images/collections/9e9afd6e-1890-4467-9c3c-99fbdb640e4b.jpeg', NULL, ARRAY['Calcutta Filigree', 'Maang Tikka', '22ct Gold', 'Bench Pad'], '{"weight":"162.0 grams","carat":"12.50ct Natural Emeralds","metal":"22ct Antique Finish Gold","craftsmanship":"Master Goldsmith Hayes Atelier"}'::jsonb, 'available', true, 49),
  ('piece-51-workshop-order-ledger-record', 'piece-51-workshop-order-ledger-record', 'Workshop Order Ledger #12402 & 22ct Gold Choker', '22ct-gold', '22ct Solid Gold (916)', '916 London Assay Stamped', 'Archival record of bespoke commission #12402 paired with finished hand-chased gold choker and floral drop earrings.', 'Direct Workshop Bullion Pricing', true, 'image', '/images/collections/6993a897-24d0-4f1f-b8a8-06b2c0001dcb.jpeg', NULL, ARRAY['Order Ledger', 'Archival Commission', '22ct Gold', 'Choker'], '{"weight":"86.4 grams","metal":"Pure 22ct Bullion Gold","craftsmanship":"Hand-Forged on Uxbridge Road"}'::jsonb, 'available', true, 50),
  ('piece-52-hayes-bench-velvet-trays-complete', 'piece-52-hayes-bench-velvet-trays-complete', 'Hayes Bench Velvet Display Trays (Complete Suite)', '22ct-gold', '22ct Solid Gold (916)', 'London Assay Office 916 Stamped', 'Display tray array showcasing completed 22ct gold necklaces and accessories prepared for Assay hallmarking and private client viewing.', 'Direct Workshop Bullion Pricing', true, 'image', '/images/collections/8cca104b-0936-4db2-82d0-92750aa40c0d.jpeg', NULL, ARRAY['Display Trays', '22ct Gold', 'Bridal Suites', 'Wholesale Bullion'], '{"weight":"185.0 grams total","metal":"22ct Solid Gold","craftsmanship":"Handmade on Uxbridge Road"}'::jsonb, 'available', true, 51),
  ('piece-53-bespoke-3d-cad-eye-solitaire-angle', 'piece-53-bespoke-3d-cad-eye-solitaire-angle', 'Bespoke 3D CAD Eye Solitaire Render (Workshop Angle)', 'rings', '18ct White Gold (750) & 950 Platinum', 'London Assay Office 750 / 950', 'Perspective angle CAD model demonstrating precise prong depths and gallery undercutting prior to casting in solid gold.', '3D CAD Prototype to Finished Gold • Custom Commission', true, 'image', '/images/collections/c1093de2-6cd6-4023-be9f-a46cd4a0fbce.jpeg', NULL, ARRAY['3D CAD', 'Prototype', 'Evil Eye', 'Perspective Angle'], '{"carat":"1.45ct Round & Marquise Diamonds","metal":"18ct Yellow Gold","craftsmanship":"CAD Sculpted & Micro-Set in Hayes"}'::jsonb, 'available', true, 52),
  ('piece-54-bespoke-3d-cad-sapphire-halo-cad-view', 'piece-54-bespoke-3d-cad-sapphire-halo-cad-view', 'Bespoke 3D CAD Sapphire Halo Medallion (CAD View)', 'rings', '18ct Warm Gold (750)', '750 London Hallmarked', 'Orthographic technical CAD view showing the micro-claw pave layout for concentric sapphire and diamond halo channels.', '3D CAD Prototype to Finished Gold • Custom Commission', true, 'image', '/images/collections/380254d7-cebb-49d0-bf24-5b3fa2b2611f.jpeg', NULL, ARRAY['Technical CAD', 'Sapphire Halo', 'Micro-Claw', 'Custom Commission'], '{"carat":"2.10ct Sapphire & Diamond","metal":"18ct Yellow Gold","craftsmanship":"CAD Sculpted & Micro-Set in Hayes"}'::jsonb, 'available', true, 53)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  metal_purity = EXCLUDED.metal_purity,
  hallmark_text = EXCLUDED.hallmark_text,
  description = EXCLUDED.description,
  price_note = EXCLUDED.price_note,
  media_type = EXCLUDED.media_type,
  thumbnail_url = EXCLUDED.thumbnail_url,
  video_url = EXCLUDED.video_url,
  tags = EXCLUDED.tags,
  specs = EXCLUDED.specs,
  sort_order = EXCLUDED.sort_order;
