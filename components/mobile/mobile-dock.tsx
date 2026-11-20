"use client";

import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Navigation } from "lucide-react";
import { NIRAJ_MAPS_LINK, NIRAJ_UK_PHONE, buildWhatsAppLink } from "@/lib/whatsapp";

export function MobileDock() {
  const pathname = usePathname();

  // Hide the public customer mobile dock on all admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }
  const whatsappMobileLink = buildWhatsAppLink({
    source: "mobile_sticky_dock",
    customNote: "Hi Niraj Jewellers team, I am reaching out from your website on mobile to ask about jewellery / gold bullion.",
  });

  return (
    <nav
      aria-label="Quick action mobile dock"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#E8DEC8] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* 1. Call Showroom */}
        <a
          href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-[#141416] hover:text-[#996515] transition-colors min-h-[48px] touch-target"
        >
          <Phone className="w-4 h-4 text-[#996515] mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">Call Atelier</span>
        </a>

        {/* 2. WhatsApp Concierge (Highlighted) */}
        <a
          href={whatsappMobileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all shadow-md min-h-[48px] touch-target font-bold"
        >
          <MessageCircle className="w-4 h-4 fill-white text-transparent mb-1" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* 3. Directions (Google Maps) */}
        <a
          href={NIRAJ_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-[#141416] hover:text-[#996515] transition-colors min-h-[48px] touch-target"
        >
          <Navigation className="w-4 h-4 text-[#996515] mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">Directions</span>
        </a>
      </div>
    </nav>
  );
}
