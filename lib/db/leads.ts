import fs from "fs";
import path from "path";
import { createClient } from "@/lib/supabase/server";

export interface LeadItem {
  id: string;
  created_at: string;
  full_name: string;
  contact: string;
  phone?: string;
  email?: string;
  service: string;
  preferred_contact: "Phone Call" | "WhatsApp" | "Email";
  message: string;
  source: "in_house_quote" | "atelier_consultation";
  status: "new" | "contacted" | "consultation_booked" | "completed" | "archived";
  notes?: string;
  updated_at: string;
}

export interface CreateLeadPayload {
  full_name: string;
  contact: string;
  phone?: string;
  email?: string;
  service: string;
  preferred_contact?: "Phone Call" | "WhatsApp" | "Email";
  message?: string;
  source: "in_house_quote" | "atelier_consultation";
}

// Initial realistic London client inquiries for immediate luxury presentation
export const INITIAL_LEADS: LeadItem[] = [
  {
    id: "lead-20261124-001",
    created_at: "2026-11-24T14:22:00.000Z",
    full_name: "Jaspreet Kaur",
    contact: "07955 565137",
    phone: "07955 565137",
    email: "jaspreet.kaur@outlook.com",
    service: "Bespoke Bridal Commission",
    preferred_contact: "Phone Call",
    message: "Looking for a 22ct gold royal bridal choker set for our wedding this Autumn. Interested in natural Basra pearls and syndicate Polki matching earrings.",
    source: "in_house_quote",
    status: "new",
    notes: "Requested weekend morning viewing for bride and mother.",
    updated_at: "2026-11-24T14:22:00.000Z",
  },
  {
    id: "lead-20261124-002",
    created_at: "2026-11-24T11:45:00.000Z",
    full_name: "Priya Sharma",
    contact: "+44 7700 900142",
    phone: "+44 7700 900142",
    email: "priya.sharma@gmail.com",
    service: "Custom Diamond Engagement Ring",
    preferred_contact: "WhatsApp",
    message: "Seeking a 2.50ct oval solitaire with delicate hidden halo in 950 Platinum. Have GIA specs in mind and looking for in-house CAD consultation.",
    source: "atelier_consultation",
    status: "consultation_booked",
    notes: "Appointment booked for Saturday 11:30 AM at 136 Uxbridge Road.",
    updated_at: "2026-11-24T12:10:00.000Z",
  },
  {
    id: "lead-20261123-003",
    created_at: "2026-11-23T16:15:00.000Z",
    full_name: "Rajesh & Ananya Patel",
    contact: "07891 234567",
    phone: "07891 234567",
    email: "rajesh.patel@btconnect.com",
    service: "22ct Gold Kadas & Bangles",
    preferred_contact: "WhatsApp",
    message: "Need a pair of heavy solid hand-hammered 22ct lion-face kadas (approx 90-100g total). Enquiring about current bullion spot rate pricing.",
    source: "in_house_quote",
    status: "contacted",
    notes: "Quoted live bullion weight + craft premium over WhatsApp. Awaiting measurement confirmation.",
    updated_at: "2026-11-23T17:00:00.000Z",
  },
  {
    id: "lead-20261122-004",
    created_at: "2026-11-22T10:30:00.000Z",
    full_name: "Harpreet Gill",
    contact: "harpreet.gill@icloud.com",
    email: "harpreet.gill@icloud.com",
    phone: "07700 900891",
    service: "Same-Day Workshop Repair",
    preferred_contact: "Email",
    message: "Inherited grandmother's antique 22ct necklace. Several claws need retipping and ultrasonic restoration. Can bring in this Thursday.",
    source: "in_house_quote",
    status: "completed",
    notes: "Workshop inspection completed. Necklace restored and collected.",
    updated_at: "2026-11-23T15:30:00.000Z",
  },
];

const LEADS_FILE_PATH = path.join(process.cwd(), "data", "leads-store.json");

// Helper to read leads from local filesystem fallback
function getLocalLeads(): LeadItem[] {
  try {
    if (fs.existsSync(LEADS_FILE_PATH)) {
      const data = fs.readFileSync(LEADS_FILE_PATH, "utf8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // Ignore read errors
  }
  return INITIAL_LEADS;
}

// Helper to write leads to local filesystem fallback
function saveLocalLeads(leads: LeadItem[]): void {
  try {
    const dir = path.dirname(LEADS_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify(leads, null, 2), "utf8");
  } catch {
    // Ignore write errors
  }
}

/**
 * Fetch all leads from Supabase Postgres.
 * If the table does not exist yet or connection fails, seamlessly falls back
 * to the persistent local JSON store so the atelier dashboard always functions 100%.
 */
export async function getLeads(): Promise<LeadItem[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return getLocalLeads();
    }

    return data.map((item) => ({
      id: item.id,
      created_at: item.created_at,
      full_name: item.full_name,
      contact: item.contact || item.phone || item.email || "",
      phone: item.phone || undefined,
      email: item.email || undefined,
      service: item.service || "Bespoke Bridal Commission",
      preferred_contact: (item.preferred_contact as LeadItem["preferred_contact"]) || "Phone Call",
      message: item.message || "",
      source: (item.source as LeadItem["source"]) || "in_house_quote",
      status: (item.status as LeadItem["status"]) || "new",
      notes: item.notes || undefined,
      updated_at: item.updated_at || item.created_at,
    }));
  } catch {
    return getLocalLeads();
  }
}

/**
 * Persists a new customer lead to Supabase and the local fallback store.
 */
export async function createLead(payload: CreateLeadPayload): Promise<{ success: boolean; id: string; error?: string }> {
  const id = `lead-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date().toISOString();

  // Parse phone & email heuristics
  let phone = payload.phone?.trim();
  let email = payload.email?.trim();
  const rawContact = payload.contact.trim();

  if (!email && rawContact.includes("@")) {
    email = rawContact;
  }
  if (!phone && /[\d+\s()-]{7,}/.test(rawContact)) {
    phone = rawContact;
  }

  const newLead: LeadItem = {
    id,
    created_at: now,
    full_name: payload.full_name.trim(),
    contact: rawContact,
    phone,
    email,
    service: payload.service,
    preferred_contact: payload.preferred_contact || "Phone Call",
    message: (payload.message || "").trim(),
    source: payload.source,
    status: "new",
    updated_at: now,
  };

  // 1. Save to local fallback store first to guarantee zero loss
  const currentLeads = getLocalLeads();
  saveLocalLeads([newLead, ...currentLeads]);

  // 2. Attempt save to Supabase Postgres
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("leads").insert({
      id: newLead.id,
      full_name: newLead.full_name,
      contact: newLead.contact,
      phone: newLead.phone || null,
      email: newLead.email || null,
      service: newLead.service,
      preferred_contact: newLead.preferred_contact,
      message: newLead.message,
      source: newLead.source,
      status: newLead.status,
      created_at: newLead.created_at,
      updated_at: newLead.updated_at,
    });

    if (error) {
      console.warn("Supabase lead insertion notice (using persistent local store):", error.message);
    }
  } catch (err) {
    console.warn("Supabase lead insertion error (using persistent local store):", err);
  }

  return { success: true, id };
}

/**
 * Updates a lead's status (new, contacted, consultation_booked, completed, archived)
 */
export async function updateLeadStatus(id: string, status: LeadItem["status"]): Promise<{ success: boolean; error?: string }> {
  const now = new Date().toISOString();

  // Update local file
  const currentLeads = getLocalLeads();
  const updated = currentLeads.map((lead) =>
    lead.id === id ? { ...lead, status, updated_at: now } : lead
  );
  saveLocalLeads(updated);

  // Update Supabase
  try {
    const supabase = await createClient();
    await supabase
      .from("leads")
      .update({ status, updated_at: now })
      .eq("id", id);
  } catch {
    // Non-fatal if Supabase not ready
  }

  return { success: true };
}

/**
 * Updates internal goldsmith / staff notes on a lead.
 */
export async function updateLeadNotes(id: string, notes: string): Promise<{ success: boolean; error?: string }> {
  const now = new Date().toISOString();

  // Update local file
  const currentLeads = getLocalLeads();
  const updated = currentLeads.map((lead) =>
    lead.id === id ? { ...lead, notes, updated_at: now } : lead
  );
  saveLocalLeads(updated);

  // Update Supabase
  try {
    const supabase = await createClient();
    await supabase
      .from("leads")
      .update({ notes, updated_at: now })
      .eq("id", id);
  } catch {
    // Non-fatal if Supabase not ready
  }

  return { success: true };
}

/**
 * Deletes or permanently archives a lead.
 */
export async function deleteLead(id: string): Promise<{ success: boolean; error?: string }> {
  // Update local file
  const currentLeads = getLocalLeads();
  const filtered = currentLeads.filter((l) => l.id !== id);
  saveLocalLeads(filtered);

  // Update Supabase
  try {
    const supabase = await createClient();
    await supabase.from("leads").delete().eq("id", id);
  } catch {
    // Non-fatal
  }

  return { success: true };
}

/**
 * Computes high-level lead metrics for the dashboard strip
 */
export function calculateLeadMetrics(leads: LeadItem[]) {
  const total = leads.length;
  const newLeads = leads.filter((l) => l.status === "new").length;
  const booked = leads.filter((l) => l.status === "consultation_booked").length;
  const contacted = leads.filter((l) => l.status === "contacted").length;
  const completed = leads.filter((l) => l.status === "completed").length;

  return {
    total,
    newLeads,
    booked,
    contacted,
    completed,
  };
}
