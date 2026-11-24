"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gem, Inbox, Store, Star, LayoutGrid } from "lucide-react";

export function AdminMobileDock() {
  const pathname = usePathname();

  const navItems = [
    { label: "Vault", href: "/admin", icon: Gem, exact: true },
    { label: "Leads", href: "/admin/leads", icon: Inbox },
    { label: "Store", href: "/admin/homepage", icon: LayoutGrid },
    { label: "Hours", href: "/admin/showroom", icon: Store },
    { label: "Reviews", href: "/admin/reviews", icon: Star },
  ];

  return (
    <nav
      aria-label="Atelier Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E8DEC8] px-1 pt-1.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    >
      <div className="grid grid-cols-5 gap-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact
            ? pathname === item.href
            : pathname?.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-0.5 rounded-xl transition-all min-h-[46px] select-none ${
                isActive
                  ? "bg-[#FAF5E8] text-[#996515] font-bold"
                  : "text-[#5A5960] hover:text-[#996515] active:bg-[#FAF8F5]"
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-4 h-4 mb-0.5 transition-colors ${
                    isActive ? "text-[#996515]" : "text-[#7A705E]"
                  }`}
                />
                {isActive && (
                  <span className="absolute -top-0.5 -right-1 w-1.5 h-1.5 rounded-full bg-[#996515]" />
                )}
              </div>
              <span
                className={`text-[9.5px] tracking-tight text-center truncate w-full block ${
                  isActive ? "text-[#996515] font-bold" : "text-[#5A5960]"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
