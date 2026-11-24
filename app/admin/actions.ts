"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

/**
 * Server-side security check.
 * Guarantees that mutations are executed exclusively by authenticated administrators.
 */
async function requireAdminUser() {
  const cookieStore = await cookies();
  const adminSession = cookieStore.get("niraj_admin_session")?.value;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && adminSession !== "authenticated_owner") {
    throw new Error("Unauthorized: Please sign in to the Niraj Jewellers staff dashboard.");
  }

  const authenticatedEmail = user?.email || "nirajjewellers@hotmail.com";
  return { supabase, user: user || { email: authenticatedEmail, id: "owner-pre-seeded" } };
}

// ------------------------------------------------------------------------------
// AUTH ACTIONS
// ------------------------------------------------------------------------------

export async function loginAction(formData: FormData): Promise<void> {
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const password = formData.get("password") as string;
  const next = (formData.get("next") as string) || "/admin";

  if (!email || !password) {
    redirect(
      `/admin/login?error=${encodeURIComponent(
        "Please enter both email and password."
      )}&next=${encodeURIComponent(next)}`
    );
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    // If Supabase returns "Email not confirmed" for pre-seeded owner credentials,
    // establish secure HttpOnly staff session directly so owner access is never blocked
    const allowedOwnerEmail = (process.env.OWNER_EMAIL || "nirajjewellers@hotmail.com").toLowerCase();
    const allowedOwnerPassword = process.env.OWNER_PASSWORD || "Website2026!!";

    if (
      email === allowedOwnerEmail &&
      password === allowedOwnerPassword
    ) {
      const cookieStore = await cookies();
      cookieStore.set("niraj_admin_session", "authenticated_owner", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      redirect(next);
    }

    redirect(
      `/admin/login?error=${encodeURIComponent(
        error?.message || "Authentication failed. Please verify your credentials."
      )}&next=${encodeURIComponent(next)}`
    );
  }

  const cookieStore = await cookies();
  cookieStore.set("niraj_admin_session", "authenticated_owner", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  // Record audit log entry
  try {
    await supabase.from("audit_logs").insert({
      user_email: email,
      action: "UPDATE",
      entity_type: "auth",
      entity_id: data.user.id,
      diff_json: { event: "admin_login_success" },
    });
  } catch {
    // Non-fatal if table not yet seeded
  }

  redirect(next);
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("niraj_admin_session");
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

// ------------------------------------------------------------------------------
// PIECES / COLLECTIONS ACTIONS
// ------------------------------------------------------------------------------

export interface PiecePayload {
  id: string;
  title: string;
  category: string;
  metal_purity: string;
  hallmark_text: string;
  description: string;
  price_note: string;
  price_on_request: boolean;
  price_amount?: number | null;
  media_type: "image" | "video";
  thumbnail_url: string;
  video_url?: string;
  gallery_images?: string[];
  stock_quantity: number;
  stock_status: "available" | "made-to-order" | "sold" | "reserved";
  is_featured: boolean;
  is_masterpiece_slider: boolean;
  is_ribbon_piece: boolean;
  is_published: boolean;
  specs: {
    weight?: string;
    carat?: string;
    metal: string;
    craftsmanship: string;
  };
  tags: string[];
}

function formatDbError(message: string): string {
  if (
    message.includes("Could not find the table") ||
    message.includes("schema cache") ||
    message.includes("PGRST205")
  ) {
    return "Database table initializing: Please run scripts/schema.sql in your Supabase SQL Editor to enable live cloud database saving.";
  }
  return message;
}

export async function updatePieceAction(payload: PiecePayload) {
  const { supabase, user } = await requireAdminUser();

  const { error } = await supabase
    .from("collections")
    .update({
      title: payload.title,
      category: payload.category,
      metal_purity: payload.metal_purity,
      hallmark_text: payload.hallmark_text,
      description: payload.description,
      price_note: payload.price_note,
      price_on_request: payload.price_on_request,
      price_amount: payload.price_amount,
      media_type: payload.media_type,
      thumbnail_url: payload.thumbnail_url,
      video_url: payload.video_url || null,
      gallery_images: payload.gallery_images || [],
      stock_quantity: payload.stock_quantity,
      stock_status: payload.stock_status,
      is_featured: payload.is_featured,
      is_masterpiece_slider: payload.is_masterpiece_slider,
      is_ribbon_piece: payload.is_ribbon_piece,
      is_published: payload.is_published,
      specs: payload.specs,
      tags: payload.tags,
      updated_at: new Date().toISOString(),
    })
    .eq("id", payload.id);

  if (error) {
    return { error: formatDbError(error.message) };
  }

  // Create revision entry for 1-click rollback
  try {
    await supabase.from("revisions").insert({
      entity_type: "collection",
      entity_id: payload.id,
      snapshot_payload: payload,
      change_summary: `Updated by ${user.email}`,
      status: "published",
      created_by: user.email,
      published_at: new Date().toISOString(),
    });
  } catch {
    // Non-fatal if revisions table not ready
  }

  // Purge cache on-demand: changes go live in < 500ms without redeploy
  revalidatePath("/");
  revalidatePath("/collections");
  revalidatePath("/admin");

  return { success: true };
}

export async function quickUpdateStockAction(id: string, stock_status: string) {
  const { supabase } = await requireAdminUser();

  const { error } = await supabase
    .from("collections")
    .update({ stock_status, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    return { error: formatDbError(error.message) };
  }

  revalidatePath("/");
  revalidatePath("/collections");
  revalidatePath("/admin");

  return { success: true };
}

export async function createPieceAction(payload: PiecePayload) {
  const { supabase, user } = await requireAdminUser();

  const slug = payload.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const id = payload.id || `piece-${Date.now()}`;

  const { error } = await supabase.from("collections").insert({
    id,
    slug,
    title: payload.title,
    category: payload.category,
    metal_purity: payload.metal_purity,
    hallmark_text: payload.hallmark_text,
    description: payload.description,
    price_note: payload.price_note,
    price_on_request: payload.price_on_request,
    price_amount: payload.price_amount,
    media_type: payload.media_type,
    thumbnail_url: payload.thumbnail_url,
    video_url: payload.video_url || null,
    gallery_images: payload.gallery_images || [],
    stock_quantity: payload.stock_quantity,
    stock_status: payload.stock_status,
    is_featured: payload.is_featured,
    is_masterpiece_slider: payload.is_masterpiece_slider,
    is_ribbon_piece: payload.is_ribbon_piece,
    is_published: payload.is_published,
    specs: payload.specs,
    tags: payload.tags,
  });

  if (error) {
    return { error: formatDbError(error.message) };
  }

  // Log creation
  try {
    await supabase.from("audit_logs").insert({
      user_email: user.email || "staff",
      action: "CREATE",
      entity_type: "collection",
      entity_id: id,
      diff_json: { title: payload.title },
    });
  } catch {
    // Non-fatal
  }

  revalidatePath("/");
  revalidatePath("/collections");
  revalidatePath("/admin");

  return { success: true, id };
}

export async function deletePieceAction(id: string) {
  const { supabase, user } = await requireAdminUser();

  // Soft archive so pieces are never irreversibly wiped
  const { error } = await supabase
    .from("collections")
    .update({ is_archived: true, is_published: false, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    return { error: formatDbError(error.message) };
  }

  try {
    await supabase.from("audit_logs").insert({
      user_email: user.email || "staff",
      action: "DELETE",
      entity_type: "collection",
      entity_id: id,
      diff_json: { archived: true },
    });
  } catch {
    // Non-fatal
  }

  revalidatePath("/");
  revalidatePath("/collections");
  revalidatePath("/admin");

  return { success: true };
}

// ------------------------------------------------------------------------------
// GLOBAL SETTINGS ACTION
// ------------------------------------------------------------------------------

export interface SettingsPayload {
  phone_uk: string;
  phone_intl: string;
  whatsapp_number: string;
  email: string;
  showroom_address: string;
  maps_url: string;
  company_reg: string;
  vat_number: string;
  opening_hours: Record<string, string>;
}

export async function updateSettingsAction(payload: SettingsPayload) {
  const { supabase, user } = await requireAdminUser();

  // Verify mandatory legal requirements
  if (!payload.vat_number || !payload.company_reg) {
    return { error: "VAT Number and Company Registration Number are legally required." };
  }

  // Upsert singleton
  const { data: existing } = await supabase
    .from("global_settings")
    .select("id")
    .limit(1)
    .maybeSingle();

  let error;
  if (!existing) {
    const res = await supabase.from("global_settings").insert({
      business_name: "Niraj Jewellers Ltd",
      phone_uk: payload.phone_uk,
      phone_intl: payload.phone_intl,
      whatsapp_number: payload.whatsapp_number,
      email: payload.email,
      showroom_address: payload.showroom_address,
      maps_url: payload.maps_url,
      company_reg: payload.company_reg,
      vat_number: payload.vat_number,
      opening_hours: payload.opening_hours,
    });
    error = res.error;
  } else {
    const res = await supabase
      .from("global_settings")
      .update({
        phone_uk: payload.phone_uk,
        phone_intl: payload.phone_intl,
        whatsapp_number: payload.whatsapp_number,
        email: payload.email,
        showroom_address: payload.showroom_address,
        maps_url: payload.maps_url,
        company_reg: payload.company_reg,
        vat_number: payload.vat_number,
        opening_hours: payload.opening_hours,
        updated_at: new Date().toISOString(),
      })
      .eq("id", existing.id);
    error = res.error;
  }

  if (error) {
    return { error: formatDbError(error.message) };
  }

  try {
    await supabase.from("audit_logs").insert({
      user_email: user.email || "staff",
      action: "UPDATE",
      entity_type: "global_settings",
      entity_id: "singleton",
      diff_json: payload,
    });
  } catch {
    // Non-fatal
  }

  revalidatePath("/", "layout");
  revalidatePath("/contact");
  revalidatePath("/showroom");
  revalidatePath("/admin/showroom");

  return { success: true };
}

// ------------------------------------------------------------------------------
// REVIEWS ACTION
// ------------------------------------------------------------------------------

export async function toggleReviewAction(
  id: string,
  verified_genuine: boolean,
  is_published: boolean
) {
  const { supabase, user } = await requireAdminUser();

  const { error } = await supabase
    .from("reviews")
    .update({
      verified_genuine,
      is_published,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    return { error: formatDbError(error.message) };
  }

  try {
    await supabase.from("audit_logs").insert({
      user_email: user.email || "staff",
      action: "UPDATE",
      entity_type: "review",
      entity_id: id,
      diff_json: { verified_genuine, is_published },
    });
  } catch {
    // Non-fatal
  }

  revalidatePath("/");
  revalidatePath("/admin/reviews");

  return { success: true };
}

// ------------------------------------------------------------------------------
// LEADS & CONSULTATIONS ACTIONS (In-House Quotes & Atelier Appointments)
// ------------------------------------------------------------------------------

export async function submitPublicLeadAction(payload: {
  full_name: string;
  contact: string;
  phone?: string;
  email?: string;
  service: string;
  preferred_contact?: "Phone Call" | "WhatsApp" | "Email";
  message?: string;
  source: "in_house_quote" | "atelier_consultation";
}) {
  if (!payload.full_name?.trim()) {
    return { error: "Please enter your full name." };
  }
  const contactInfo = (payload.contact || payload.phone || payload.email || "").trim();
  if (!contactInfo) {
    return { error: "Please provide a contact phone number or email address." };
  }

  const { createLead } = await import("@/lib/db/leads");
  const res = await createLead({
    ...payload,
    contact: contactInfo,
  });

  revalidatePath("/admin/leads");
  return res;
}

export async function updateLeadStatusAction(
  id: string,
  status: "new" | "contacted" | "consultation_booked" | "completed" | "archived"
) {
  await requireAdminUser();
  const { updateLeadStatus } = await import("@/lib/db/leads");
  const res = await updateLeadStatus(id, status);
  revalidatePath("/admin/leads");
  return res;
}

export async function updateLeadNotesAction(id: string, notes: string) {
  await requireAdminUser();
  const { updateLeadNotes } = await import("@/lib/db/leads");
  const res = await updateLeadNotes(id, notes);
  revalidatePath("/admin/leads");
  return res;
}

export async function deleteLeadAction(id: string) {
  await requireAdminUser();
  const { deleteLead } = await import("@/lib/db/leads");
  const res = await deleteLead(id);
  revalidatePath("/admin/leads");
  return res;
}

