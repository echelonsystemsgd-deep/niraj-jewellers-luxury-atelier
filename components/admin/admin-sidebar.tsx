"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Gem,
  PlusCircle,
  LayoutGrid,
  Store,
  Star,
  Image as ImageIcon,
  HelpCircle,
  ExternalLink,
  LogOut,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  X,
} from "lucide-react";
import { logoutAction } from "@/app/admin/actions";

interface AdminSidebarProps {
  userEmail: string;
  isMobileDrawer?: boolean;
  onClose?: () => void;
}

export function AdminSidebar({ userEmail, isMobileDrawer = false, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  const navGroups = [
    {
      groupTitle: "VAULT & INVENTORY",
      items: [
        {
          label: "Vault Pieces",
          href: "/admin",
          icon: Gem,
          badge: "54",
          exact: true,
        },
        {
          label: "Add New Piece",
          href: "/admin/pieces/new",
          icon: PlusCircle,
          badge: "New",
        },
        {
          label: "Media & Photos",
          href: "/admin/media",
          icon: ImageIcon,
          badge: "WebP",
        },
      ],
    },
    {
      groupTitle: "STORE & CLIENTS",
      items: [
        {
          label: "Homepage Layout",
          href: "/admin/homepage",
          icon: LayoutGrid,
          badge: "9",
        },
        {
          label: "Showroom & Hours",
          href: "/admin/showroom",
          icon: Store,
          badge: "Hours",
        },
        {
          label: "Customer Reviews",
          href: "/admin/reviews",
          icon: Star,
          badge: "5★",
        },
      ],
    },
    {
      groupTitle: "SUPPORT & GOVERNANCE",
      items: [
        {
          label: "Viky's Handbook",
          href: "/admin/help",
          icon: HelpCircle,
          badge: "Help",
        },
      ],
    },
  ];

  return (
    <aside
      className={
        isMobileDrawer
          ? "flex flex-col w-[310px] max-w-[85vw] h-dvh max-h-screen bg-[#FAF8F5] shrink-0 z-[70] select-none overflow-hidden shadow-2xl"
          : "hidden md:flex flex-col fixed top-0 bottom-0 left-0 w-72 h-screen border-r border-[#E8DEC8] bg-[#FAF8F5] shrink-0 z-30 select-none overflow-hidden"
      }
    >
      {/* 1. BRAND CREST HEADER */}
      <div className="shrink-0 p-3.5 border-b border-[#E7E2DA] bg-white flex items-center justify-between gap-2">
        <Link href="/admin" onClick={onClose} className="flex items-center gap-2.5 group min-w-0 flex-1">
          <div className="relative w-10 h-10 rounded-xl bg-white border border-[#D4AF37] flex items-center justify-center shadow-xs overflow-hidden p-1 group-hover:border-[#996515] transition-all shrink-0">
            <Image
              src="/NIRAJ_LOGO9.png"
              alt="Niraj Jewellers Ltd Crest"
              width={32}
              height={32}
              unoptimized
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-serif text-xs md:text-sm font-bold tracking-wider text-[#141416] uppercase group-hover:text-[#996515] transition-colors leading-tight truncate">
              NIRAJ JEWELLERS <span className="text-[10px] md:text-xs font-semibold text-[#996515]">LTD</span>
            </span>
            <span className="font-mono text-[8.5px] md:text-[9px] font-bold tracking-[0.16em] text-[#8C6212] uppercase block mt-0.5 truncate">
              ATELIER DASHBOARD · 1984
            </span>
            <span className="font-mono text-[8px] md:text-[8.5px] text-[#7A705E] uppercase tracking-wider block mt-0.5 truncate">
              136 Uxbridge Road · Hayes
            </span>
          </div>
        </Link>

        {isMobileDrawer && (
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] hover:bg-white text-[#7A705E] hover:text-[#141416] flex items-center justify-center shrink-0 active:scale-95 transition-transform"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 2. SCROLLABLE MIDDLE NAVIGATION & ATELIER STATUS CARD */}
      <div className="flex-1 min-h-0 px-3.5 py-3 space-y-4 overflow-y-auto custom-scrollbar">
        {navGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-1">
            <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-[#8C6212]/90 px-3 block mb-1">
              {group.groupTitle}
            </span>
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = item.exact
                  ? pathname === item.href
                  : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? "bg-white text-[#141416] border border-[#D4AF37] shadow-luxury-sm"
                        : "text-[#5A5960] hover:text-[#996515] hover:bg-white/70"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-gradient-to-br from-[#FAF5E8] to-[#F5ECE0] text-[#996515]"
                            : "text-[#8C6212]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-[#996515] text-white"
                            : "bg-[#E8DEC8]/60 text-[#7A705E]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        {/* 3. ATELIER LIVE STATUS & HEALTH CARD (Eliminates the empty gap) */}
        <div className="p-3 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6212] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#996515]" />
              <span>Hayes Atelier</span>
            </span>
            <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Vault</span>
            </span>
          </div>

          <div className="text-[10.5px] text-[#5A5960] space-y-1 pt-1 border-t border-[#F0E8D8]">
            <p className="flex items-center gap-1.5 text-[#141416] font-medium text-[10px]">
              <MapPin className="w-3.5 h-3.5 text-[#8C6212] shrink-0" />
              <span className="truncate">136 Uxbridge Rd, Hayes UB4</span>
            </p>
            <p className="flex items-center gap-1.5 text-[10px] text-[#7A705E]">
              <Clock className="w-3.5 h-3.5 text-[#8C6212] shrink-0" />
              <span>Mon: 12–17:00 | Tue–Sat: 11–17:30</span>
            </p>
            <p className="flex items-center gap-1.5 text-[10px] text-[#7A705E]">
              <Phone className="w-3.5 h-3.5 text-[#8C6212] shrink-0" />
              <a href="tel:02085739323" className="hover:text-[#996515] transition-colors">
                020 8573 9323
              </a>
            </p>
          </div>

          <div className="pt-1.5 border-t border-[#F0E8D8] flex items-center justify-between text-[8.5px] text-[#8C6212] font-semibold">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>London Assay Leopard's Head Stamped</span>
            </span>
            <span className="text-[#7A705E]">916 / 750</span>
          </div>
        </div>
      </div>

      {/* 4. REFINED OWNER PROFILE & QUICK ACTION FOOTER (Safe Area Bottom on Mobile) */}
      <div
        className={`shrink-0 p-3.5 border-t border-[#E8DEC8] bg-white space-y-2.5 ${
          isMobileDrawer ? "pb-[max(1.5rem,env(safe-area-inset-bottom))]" : ""
        }`}
      >
        {/* User Monogram Profile Card */}
        <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E8DEC8] flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-[#141416] text-[#C6A75E] border border-[#D4AF37]/50 flex items-center justify-center font-serif font-bold text-xs shrink-0 shadow-xs">
              NJ
            </div>
            <div className="min-w-0">
              <span className="text-[8.5px] font-bold tracking-wider uppercase text-[#8C6212] block">
                Atelier Proprietor
              </span>
              <span className="text-[11px] font-semibold text-[#141416] truncate block" title={userEmail}>
                {userEmail}
              </span>
            </div>
          </div>

          <span title="Verified Superadmin">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-[#E8DEC8] bg-white hover:bg-[#FAF8F5] hover:border-[#996515] text-xs font-semibold text-[#141416] transition-colors shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#8C6212]" />
            <span>Live Site</span>
          </Link>

          <form action={logoutAction} className="shrink-0">
            <button
              type="submit"
              title="Sign out of Atelier Dashboard"
              className="py-2 px-3 rounded-xl border border-red-200 bg-white hover:bg-red-50 text-red-600 transition-colors shadow-sm"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
