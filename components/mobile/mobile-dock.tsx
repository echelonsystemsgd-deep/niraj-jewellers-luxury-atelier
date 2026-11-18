"use client";

import { Phone, MessageCircle, Navigation } from "lucide-react";
import { NIRAJ_MAPS_LINK, buildWhatsAppLink } from "@/lib/whatsapp";

export function MobileDock() {
  const whatsappMobileLink = buildWhatsAppLink({
    source: "mobile_sticky_dock",
    customNote: "Hello Viky, I am reaching out from your website on mobile to ask about jewellery / gold rates.",
  });

  return (
    <nav
      aria-label="Quick action mobile dock"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-lg border-t border-gold-900/30 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* 1. Call Showroom */}
        <a
          href="tel:+447955565137"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-atelier border border-atelier-border text-platinum hover:text-white transition-colors touch-target"
        >
          <Phone className="w-4 h-4 text-platinum mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">Call Showroom</span>
        </a>

        {/* 2. WhatsApp Viky (Highlighted) */}
        <a
          href={whatsappMobileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-whatsapp hover:bg-whatsapp-dark text-black transition-all shadow-md touch-target font-bold"
        >
          <MessageCircle className="w-4 h-4 fill-black text-whatsapp mb-1" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp Viky</span>
        </a>

        {/* 3. Directions (Google Maps) */}
        <a
          href={NIRAJ_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-atelier border border-atelier-border text-platinum hover:text-white transition-colors touch-target"
        >
          <Navigation className="w-4 h-4 text-gold-400 mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">Directions</span>
        </a>
      </div>
    </nav>
  );
}
