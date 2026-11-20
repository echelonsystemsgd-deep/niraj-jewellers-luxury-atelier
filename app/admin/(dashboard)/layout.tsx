import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Gem,
  LayoutGrid,
  Store,
  Star,
  Image as ImageIcon,
  HelpCircle,
  ExternalLink,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { logoutAction } from "@/app/admin/actions";

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
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const navLinks = [
    { label: "Vault Pieces", href: "/admin", icon: Gem },
    { label: "Homepage", href: "/admin/homepage", icon: LayoutGrid },
    { label: "Showroom Hours", href: "/admin/showroom", icon: Store },
    { label: "Reviews", href: "/admin/reviews", icon: Star },
    { label: "Media", href: "/admin/media", icon: ImageIcon },
    { label: "Help Guide", href: "/admin/help", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] flex flex-col md:flex-row selection:bg-gold-200">
      {/* 1. DESKTOP SIDEBAR (Visible on md: >= 768px) */}
      <aside className="hidden md:flex flex-col w-64 border-r border-[#E8DEC8] bg-white shrink-0 min-h-screen sticky top-0">
        {/* Brand Header */}
        <div className="p-6 border-b border-[#E8DEC8] flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/50 flex items-center justify-center shadow-sm overflow-hidden p-0.5">
            <Image
              src="/NIRAJ_LOGO9.png"
              alt="Niraj Jewellers Ltd Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-serif text-sm font-bold tracking-wider text-[#141416] uppercase block">
              NIRAJ JEWELLERS
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-[#8C6212] uppercase block">
              Atelier Dashboard
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold tracking-wide text-[#4A4A52] hover:text-[#996515] hover:bg-[#FAF8F5] transition-colors"
              >
                <Icon className="w-4 h-4 text-[#8C6212]" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Footer */}
        <div className="p-4 border-t border-[#E8DEC8] space-y-3 bg-[#FAF8F5]/60">
          <div className="flex items-center gap-2 px-2 text-[11px] text-[#5A5960]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{user.email}</span>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Link
              href="/"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#E8DEC8] bg-white text-[11px] font-medium text-[#141416] hover:border-[#996515] transition-colors"
            >
              <ExternalLink className="w-3 h-3 text-[#8C6212]" />
              <span>Live Site</span>
            </Link>

            <form action={logoutAction} className="shrink-0">
              <button
                type="submit"
                title="Log out of Dashboard"
                className="p-2 rounded-lg border border-[#E8DEC8] bg-white text-red-600 hover:bg-red-50 hover:border-red-200 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* 2. MOBILE TOP BAR (< 768px) */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-[#E8DEC8] sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#D4AF37]/50 flex items-center justify-center overflow-hidden">
            <Image
              src="/NIRAJ_LOGO9.png"
              alt="Logo"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#141416] block">
              NIRAJ JEWELLERS
            </span>
            <span className="text-[9px] font-medium text-[#8C6212] tracking-wider uppercase block">
              Owner Dashboard
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
