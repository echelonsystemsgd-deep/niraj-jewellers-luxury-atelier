"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, ExternalLink, LogOut } from "lucide-react";
import { logoutAction } from "@/app/admin/actions";

export function AdminMobileHeader() {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8DEC8] px-3.5 py-2.5 pt-[max(0.625rem,env(safe-area-inset-top))] flex items-center justify-between shadow-sm">
      {/* Brand Emblem & Portal Label */}
      <Link href="/admin" className="flex items-center gap-2 min-w-0">
        <div className="relative w-8 h-8 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/60 flex items-center justify-center overflow-hidden shadow-sm p-0.5 shrink-0">
          <Image
            src="/NIRAJ_LOGO9.png"
            alt="Niraj Jewellers Emblem"
            width={28}
            height={28}
            unoptimized
            className="object-contain"
            priority
          />
        </div>
        <div className="min-w-0">
          <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#141416] block leading-tight truncate">
            NIRAJ JEWELLERS <span className="text-[10px] text-[#996515]">LTD</span>
          </span>
          <span className="text-[8.5px] font-bold text-[#8C6212] tracking-wider uppercase block">
            Atelier Portal
          </span>
        </div>
      </Link>

      {/* Right Quick Actions */}
      <div className="flex items-center gap-1.5 shrink-0">
        {/* + Add New Piece Button (Replaces giant full-width mobile banner) */}
        <Link
          href="/admin/pieces/new"
          className="flex items-center gap-1 text-[11px] font-bold text-white bg-gradient-to-r from-[#85560C] to-[#996515] px-2.5 py-1.5 rounded-lg shadow-sm active:scale-95 transition-transform"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New</span>
        </Link>

        {/* View Live Store */}
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-1 text-[11px] font-medium text-[#8C6212] px-2 py-1.5 rounded-lg border border-[#E8DEC8] bg-[#FAF8F5] hover:bg-[#F3EDE0] transition-colors"
          title="Open live storefront in new tab"
        >
          <ExternalLink className="w-3 h-3" />
          <span>Site</span>
        </Link>

        {/* Sign Out */}
        <form action={logoutAction} className="shrink-0">
          <button
            type="submit"
            title="Sign out of Atelier"
            className="p-1.5 rounded-lg border border-red-200 text-red-600 bg-white hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </header>
  );
}
