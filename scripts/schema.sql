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
