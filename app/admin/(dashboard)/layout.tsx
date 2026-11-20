import { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminMobileHeader } from "@/components/admin/admin-mobile-header";
import { AdminMobileDock } from "@/components/admin/admin-mobile-dock";

export const metadata: Metadata = {
  title: "Atelier Dashboard | Niraj Jewellers Ltd",
  description: "Bespoke goldsmith and store administration.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const adminSession = cookieStore.get("niraj_admin_session")?.value;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && adminSession !== "authenticated_owner") {
    redirect("/admin/login");
  }

  const activeEmail = user?.email || "nirajjewellers@hotmail.com";

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] flex flex-col md:flex-row md:items-start selection:bg-gold-200">
      {/* 1. LUXURY DESKTOP SIDEBAR (Visible on md: >= 768px, pinned sticky viewport) */}
      <AdminSidebar userEmail={activeEmail} />

      {/* 2. FIXED MOBILE TOP BAR (< 768px, iPhone Notch & Dynamic Island Safe) */}
      <AdminMobileHeader />

      {/* 3. MAIN DASHBOARD CONTENT AREA (Top padded for mobile fixed bar, bottom padded for mobile dock) */}
      <main className="flex-1 flex flex-col min-w-0 pt-16 md:pt-0 pb-24 md:pb-8">
        {children}
      </main>

      {/* 4. FIXED MOBILE 5-TAB DOCK (< 768px, Equal 20% Widths, Safe-Area Bottom) */}
      <AdminMobileDock />
    </div>
  );
}
