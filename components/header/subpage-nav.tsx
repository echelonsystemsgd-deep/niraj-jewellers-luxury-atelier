"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";
import { buildWhatsAppLink, NIRAJ_DISPLAY_PHONE } from "@/lib/whatsapp";
import { ShowroomStatusBadge } from "./showroom-status";

interface SubpageNavProps {
  currentTitle: string;
}

export function SubpageNav({ currentTitle }: SubpageNavProps) {
  const whatsappHeroLink = buildWhatsAppLink({
    source: `subpage_nav_${currentTitle.toLowerCase().replace(/\s+/g, "_")}`,
    customNote: `Hello Viky, I am viewing your ${currentTitle} page on your website and would like to enquire.`,
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090B]/95 backdrop-blur-xl border-b border-gold-500/20 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Back to Home + Brand */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-gold-400 text-xs font-medium transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Atelier</span>
            </Link>

            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gold-400/20 via-zinc-900 to-black border border-gold-500/40 flex items-center justify-center shrink-0">
                <span className="font-serif font-bold text-xs text-gold-300">NJ</span>
              </div>
              <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-white uppercase group-hover:text-gold-400 transition-colors hidden sm:inline">
                NIRAJ JEWELLERS
              </span>
            </Link>
          </div>

          {/* Current Page Title */}
          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-400 font-mono uppercase tracking-wider">
            <span className="text-zinc-600">/</span>
            <span className="text-gold-400 font-medium">{currentTitle}</span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="hidden lg:flex">
              <ShowroomStatusBadge variant="compact" />
            </div>

            <a
              href={whatsappHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-black font-semibold text-xs tracking-wide transition-all shadow-md hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black text-whatsapp" />
              <span>WhatsApp Viky</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
