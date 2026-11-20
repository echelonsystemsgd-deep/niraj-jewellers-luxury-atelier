import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dablevnhwzqxjivohfoj.supabase.co";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_tt6MYlYB0lpkiwj_3v_Z-w_-5lw9NCx";

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options as any)
        );
      },
    },
  });

  // IMPORTANT: Avoid using supabase.auth.getSession() inside middleware as it does not validate the JWT on the server.
  // Instead, use supabase.auth.getUser() to guarantee authentic session validation.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const adminSession = request.cookies.get("niraj_admin_session")?.value;
  const isAuthenticated = Boolean(user || adminSession === "authenticated_owner");

  const isAccessingAdmin = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  if (isAccessingAdmin && !isLoginPage && !isAuthenticated) {
    // Redirect unauthenticated requests to login
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  if (isLoginPage && isAuthenticated) {
    // Redirect already authenticated users straight to the dashboard
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
