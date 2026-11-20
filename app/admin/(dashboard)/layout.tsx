import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import {
  Gem,
  LayoutGrid,
  Store,
  Star,
  Image as ImageIcon,
  HelpCircle,
  ExternalLink,
  LogOut,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { logoutAction } from "@/app/admin/actions";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

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

  const navLinks = [
    { label: "Vault Pieces", href: "/admin", icon: Gem },
    { label: "Homepage", href: "/admin/homepage", icon: LayoutGrid },
    { label: "Showroom Hours", href: "/admin/showroom", icon: Store },
    { label: "Reviews", href: "/admin/reviews", icon: Star },
    { label: "Media", href: "/admin/media", icon: ImageIcon },
    { label: "Help Guide", href: "/admin/help", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] flex flex-col md:flex-row md:items-start selection:bg-gold-200">
      {/* 1. LUXURY DESKTOP SIDEBAR (Visible on md: >= 768px, pinned sticky viewport) */}
      <AdminSidebar userEmail={activeEmail} />

      {/* 2. MOBILE TOP BAR (< 768px) */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-[#E8DEC8] sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/60 flex items-center justify-center overflow-hidden shadow-sm p-0.5 shrink-0">
            <Image
              src="/NIRAJ_LOGO9.png"
              alt="Niraj Jewellers Emblem"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#141416] block">
              NIRAJ JEWELLERS <span className="text-[10px] text-[#996515]">LTD</span>
            </span>
            <span className="text-[9px] font-bold text-[#8C6212] tracking-wider uppercase block">
              Owner Atelier Portal
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1 text-[11px] font-medium text-[#8C6212] px-2.5 py-1.5 rounded-lg border border-[#E8DEC8] bg-[#FAF8F5]"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Site</span>
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="p-1.5 rounded-lg border border-[#E8DEC8] text-red-600 bg-white"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </header>

      {/* 3. MAIN DASHBOARD CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 pb-24 md:pb-8">
        {children}
      </main>

      {/* 4. MOBILE BOTTOM THUMB-ZONE DOCK (< 768px, 48px Touch Targets) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#E8DEC8] px-2 py-1.5 z-50 flex justify-around items-center shadow-lg">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 text-center text-[#4A4A52] active:text-[#996515] transition-colors"
            >
              <Icon className="w-4 h-4 text-[#8C6212] mb-0.5" />
              <span className="text-[9px] font-semibold tracking-tight">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
