"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone, ShieldCheck, Sparkles, Gem, Scale, ArrowRight, Instagram } from "lucide-react";
import { CollectionItem } from "@/data/collections-data";
import { buildWhatsAppLink, NIRAJ_UK_PHONE, NIRAJ_DISPLAY_PHONE } from "@/lib/whatsapp";
import { useScrollLock } from "@/lib/use-scroll-lock";

interface ReelModalProps {
  item: CollectionItem | null;
  onClose: () => void;
}

export function ReelModal({ item, onClose }: ReelModalProps) {
  useScrollLock(!!item);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [item?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const whatsappEnquiryLink = buildWhatsAppLink({
    source: `collection_modal_${item.id}`,
    pieceTitle: item.title,
    metalPurity: item.metalPurity,
    category: item.category,
    customNote: `Hi Niraj Jewellers team, I am enquiring about the ${item.title} (${item.metalPurity}) featured in your collection showroom. Could you please share more details regarding pricing, bespoke options, and showroom viewing?`,
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-piece-title"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-[#141416] flex items-center justify-center transition-all shadow-md touch-target"
          aria-label="Close piece details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Authentic Photography Showcase */}
        <div className="relative w-full md:w-1/2 h-72 sm:h-96 md:h-auto min-h-[300px] md:min-h-[500px] bg-[#FAF8F5] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#E8DEC8] overflow-hidden group">
          {/* Ambient Warm Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#DFBF7A]/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative w-full h-full max-h-[440px] rounded-2xl overflow-hidden shadow-md border border-[#E8DEC8]">
            <Image
              src={item.thumbnailUrl}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
              priority
            />
          </div>

          {/* Hallmark Badge Overlay */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-sm text-xs font-semibold text-[#8C6212]">
            <ShieldCheck className="w-4 h-4 text-[#996515]" />
            <span>{item.hallmarkText}</span>
          </div>
        </div>

        {/* Right Column: Piece Specifications & Direct Inquiry */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[55vh] md:max-h-[85vh] space-y-6">
          <div className="space-y-4">
            {/* Header tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 text-[#8C6212]">
                {item.metalPurity}
              </span>
              <span className="text-[11px] font-semibold text-[#5A5960] uppercase tracking-wider">
                Hayes Atelier Reference
              </span>
            </div>

            {/* Title */}
            <div>
              <h3
                id="modal-piece-title"
                className="font-serif text-2xl sm:text-3xl font-medium text-[#141416] leading-tight"
              >
                {item.title}
              </h3>
              <p className="font-vivaldi text-xl text-[#996515] mt-1">
                Handcrafted on Uxbridge Road
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
              {item.description}
            </p>

            {/* Workshop Specifications Bento */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DEC8] space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6212] block">
                Atelier Craft Specifications
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {item.specs.weight && (
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#996515] shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#5A5960] block">Gross Weight</span>
                      <span className="font-semibold text-[#141416]">{item.specs.weight}</span>
                    </div>
                  </div>
                )}
                {item.specs.carat && (
                  <div className="flex items-center gap-2">
                    <Gem className="w-4 h-4 text-[#996515] shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#5A5960] block">Gemstone Carat</span>
                      <span className="font-semibold text-[#141416]">{item.specs.carat}</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 col-span-2">
                  <Sparkles className="w-4 h-4 text-[#996515] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#5A5960] block">Craftsmanship</span>
                    <span className="font-semibold text-[#141416]">{item.specs.craftsmanship}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Note Guarantee */}
            <div className="p-3 rounded-xl bg-white border border-[#D4AF37]/30 flex items-center justify-between text-xs">
              <span className="text-[#5A5960]">Workshop Pricing:</span>
              <span className="font-bold text-[#8C6212]">{item.priceNote}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <a
              href={whatsappEnquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Enquire on WhatsApp</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#FAF8F5] hover:bg-[#F4ECE1] border border-[#E8DEC8] text-[#141416] font-semibold text-xs tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#996515]" />
                <span>Call {NIRAJ_DISPLAY_PHONE}</span>
              </a>

              <a
                href="https://www.instagram.com/nirajjewellersltd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-pink-700 font-semibold text-xs transition-colors"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
