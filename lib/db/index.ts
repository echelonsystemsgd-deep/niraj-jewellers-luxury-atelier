import { COLLECTIONS_DATA, CollectionItem } from "@/data/collections-data";
import { ARTICLES_DATA, ArticleItem } from "@/data/articles-data";
import { REVIEWS_DATA, ReviewItem } from "@/data/reviews-data";
import { REPAIR_SERVICES, RepairService } from "@/data/repairs-data";
import {
  NIRAJ_UK_PHONE,
  NIRAJ_DISPLAY_PHONE,
  NIRAJ_PHONE_NUMBER,
  NIRAJ_SHOWROOM_ADDRESS,
  NIRAJ_EMAIL,
  NIRAJ_MAPS_LINK,
  NIRAJ_COMPANY_REG,
  NIRAJ_VAT_NUMBER,
  NIRAJ_FACEBOOK_URL,
} from "@/lib/whatsapp";
import { createClient } from "@/lib/supabase/server";

export interface GlobalSettings {
  business_name: string;
  phone_uk: string;
  phone_intl: string;
  whatsapp_number: string;
  email: string;
  showroom_address: string;
  maps_url: string;
  company_reg: string;
  vat_number: string;
  opening_hours: Record<string, string>;
  social_links: Record<string, string>;
}

export const FALLBACK_SETTINGS: GlobalSettings = {
  business_name: "Niraj Jewellers Ltd",
  phone_uk: NIRAJ_UK_PHONE,
  phone_intl: NIRAJ_DISPLAY_PHONE,
  whatsapp_number: NIRAJ_PHONE_NUMBER,
  email: NIRAJ_EMAIL,
  showroom_address: NIRAJ_SHOWROOM_ADDRESS,
  maps_url: NIRAJ_MAPS_LINK,
  company_reg: NIRAJ_COMPANY_REG,
  vat_number: NIRAJ_VAT_NUMBER,
  opening_hours: {
    monday: "12:00 – 17:00",
    tuesday: "11:00 – 17:00",
    wednesday: "11:00 – 17:00",
    thursday: "11:00 – 17:00",
    friday: "11:00 – 17:00",
    saturday: "11:00 – 17:00",
    sunday: "Closed (Open festive Sundays)",
  },
  social_links: {
    instagram: "https://www.instagram.com/nirajjewellersltd",
    tiktok_atelier: "https://www.tiktok.com/@nirajjewellersltd",
    tiktok_uk: "https://www.tiktok.com/@nirajjewellersuk",
    facebook: NIRAJ_FACEBOOK_URL,
    whatsapp: `https://wa.me/${NIRAJ_PHONE_NUMBER}`,
  },
};

/**
 * Resilient Data Access Layer:
 * Fetches data from Supabase Postgres.
 * If Supabase is cold, sleeping, or migrating, it seamlessly falls back to the in-memory
 * static datasets so customers NEVER see an error or broken page.
 */

export async function getGlobalSettings(): Promise<GlobalSettings> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("global_settings")
      .select("*")
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      return FALLBACK_SETTINGS;
    }

    return {
      business_name: data.business_name || FALLBACK_SETTINGS.business_name,
      phone_uk: data.phone_uk || FALLBACK_SETTINGS.phone_uk,
      phone_intl: data.phone_intl || FALLBACK_SETTINGS.phone_intl,
      whatsapp_number: data.whatsapp_number || FALLBACK_SETTINGS.whatsapp_number,
      email: data.email || FALLBACK_SETTINGS.email,
      showroom_address: data.showroom_address || FALLBACK_SETTINGS.showroom_address,
      maps_url: data.maps_url || FALLBACK_SETTINGS.maps_url,
      company_reg: data.company_reg || FALLBACK_SETTINGS.company_reg,
      vat_number: data.vat_number || FALLBACK_SETTINGS.vat_number,
      opening_hours: data.opening_hours || FALLBACK_SETTINGS.opening_hours,
      social_links: data.social_links || FALLBACK_SETTINGS.social_links,
    };
  } catch {
    return FALLBACK_SETTINGS;
  }
}

export async function getCollections(includeUnpublished = false): Promise<CollectionItem[]> {
  try {
    const supabase = await createClient();
    let query = supabase
      .from("collections")
      .select("*")
      .eq("is_archived", false)
      .order("sort_order", { ascending: true, nullsFirst: false });

    if (!includeUnpublished) {
      query = query.eq("is_published", true);
    }

    const { data, error } = await query;

    if (error || !data || data.length === 0) {
      return COLLECTIONS_DATA;
    }

    return data.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category as CollectionItem["category"],
      metalPurity: item.metal_purity || "22ct Gold (916 Hallmarked)",
      hallmarkText: item.hallmark_text || "UK London Assay Office 916",
      description: item.description || "",
      priceNote: item.price_note || "Direct Workshop Consultation",
      mediaType: (item.media_type as "image" | "video") || "image",
      thumbnailUrl: item.thumbnail_url || "",
      videoUrl: item.video_url || undefined,
      instagramUrl: item.instagram_url || undefined,
      tags: item.tags || [],
      specs: item.specs || {
        weight: "Direct Workshop Valuation",
        metal: "22ct Imperial Gold",
        craftsmanship: "In-House Hayes Handcrafted",
      },
    }));
  } catch {
    return COLLECTIONS_DATA;
  }
}

export async function getReviews(): Promise<ReviewItem[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("is_published", true)
      .eq("verified_genuine", true)
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      // Return verified fallback reviews if DB reviews are unconfirmed
      return REVIEWS_DATA;
    }

    return data.map((r) => ({
      id: r.id,
      author: r.author,
      location: r.location,
      rating: r.rating,
      date: r.review_date,
      service: r.service,
      text: r.review_text,
      verified: r.verified_genuine,
      avatarUrl: r.avatar_url || "/images/avatars/avatar-1.svg",
    }));
  } catch {
    return REVIEWS_DATA;
  }
}

export async function getArticles(): Promise<ArticleItem[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("is_published", true)
      .order("date_published", { ascending: false });

    if (error || !data || data.length === 0) {
      return ARTICLES_DATA;
    }

    return data as unknown as ArticleItem[];
  } catch {
    return ARTICLES_DATA;
  }
}

export async function getArticleBySlug(slug: string): Promise<ArticleItem | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle();

    if (error || !data) {
      return ARTICLES_DATA.find((a) => a.slug === slug) || null;
    }

    return data as unknown as ArticleItem;
  } catch {
    return ARTICLES_DATA.find((a) => a.slug === slug) || null;
  }
}

export async function getRepairs(): Promise<RepairService[]> {
  return REPAIR_SERVICES;
}
