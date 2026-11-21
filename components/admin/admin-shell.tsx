"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Menu, ExternalLink } from "lucide-react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminMobileDock } from "@/components/admin/admin-mobile-dock";

interface AdminShellProps {
  userEmail: string;
  children: React.ReactNode;
}

export function AdminShell({ userEmail, children }: AdminShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Background body scroll lock: Ensures the background site CANNOT move or scroll when the sidebar drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FAF8F5] text-[#141416] flex flex-col md:flex-row md:items-start selection:bg-gold-200">
      {/* 1. DESKTOP PERMANENT SIDEBAR (md: >= 768px, pinned sticky viewport) */}
      <AdminSidebar userEmail={userEmail} />

      {/* 2. MOBILE SLIDE-OUT DRAWER SIDEBAR (< 768px, z-[70] covers dock, background frozen) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[70] flex">
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <div className="relative z-[70] h-full flex animate-in slide-in-from-left duration-200">
            <AdminSidebar
              userEmail={userEmail}
              isMobileDrawer={true}
              onClose={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}

      {/* 3. MOBILE FIXED TOP BAR (< 768px, Perfectly Padded, Zero Overflow) */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8DEC8] px-3.5 py-2.5 pt-[max(0.625rem,env(safe-area-inset-top))] flex items-center justify-between shadow-sm">
        {/* Menu & Brand Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center gap-2 p-1 -ml-1 rounded-xl active:scale-95 transition-transform"
          aria-label="Open Atelier Sidebar Menu"
        >
          <div className="relative w-8 h-8 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/60 flex items-center justify-center overflow-hidden shadow-sm p-0.5 shrink-0">
            <Image
              src="/NIRAJ_LOGO9.png"
              alt="Niraj Jewellers Emblem"
              width={26}
              height={26}
              unoptimized
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#141416] block leading-tight truncate">
              NIRAJ JEWELLERS <span className="text-[10px] text-[#996515]">LTD</span>
            </span>
            <span className="text-[8.5px] font-bold text-[#8C6212] tracking-wider uppercase flex items-center gap-1">
              <span>Atelier Menu</span>
              <span className="text-[9px]">▾</span>
            </span>
          </div>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Link
            href="/admin/pieces/new"
            className="flex items-center gap-1 text-[11px] font-bold text-white bg-gradient-to-r from-[#85560C] to-[#996515] px-2.5 py-1.5 rounded-lg shadow-sm active:scale-95 transition-transform"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New</span>
          </Link>

          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1 text-[11px] font-medium text-[#8C6212] px-2 py-1.5 rounded-lg border border-[#E8DEC8] bg-[#FAF8F5] hover:bg-[#F3EDE0] transition-colors"
            title="Open live storefront"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Site</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 rounded-lg border border-[#E8DEC8] bg-[#FAF8F5] text-[#8C6212] hover:text-[#141416] active:scale-95 transition-transform"
            aria-label="Toggle Sidebar"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 4. MAIN CONTENT AREA (Padded for mobile fixed header/dock, md:ml-72 offset for desktop fixed sidebar) */}
      <main className="flex-1 flex flex-col min-w-0 w-full md:ml-72 pt-16 md:pt-0 pb-24 md:pb-8">
        {children}
      </main>

      {/* 5. MOBILE BOTTOM 5-TAB DOCK (< 768px, iPhone Safe Area) */}
      <AdminMobileDock />
    </div>
  );
}
