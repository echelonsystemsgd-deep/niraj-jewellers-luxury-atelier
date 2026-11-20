import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser-side Supabase client for client components.
 * Uses NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dablevnhwzqxjivohfoj.supabase.co";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_tt6MYlYB0lpkiwj_3v_Z-w_-5lw9NCx";

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
