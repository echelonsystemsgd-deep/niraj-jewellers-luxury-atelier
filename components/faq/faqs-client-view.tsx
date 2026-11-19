"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  Search, 
  ShieldCheck, 
  Hammer, 
  Gem, 
  Scale, 
  CreditCard 
} from "lucide-react";
import { buildWhatsAppLink, NIRAJ_UK_PHONE, NIRAJ_DISPLAY_PHONE } from "@/lib/whatsapp";
import { FAQS_FULL_DIRECTORY, FaqItem } from "@/data/faqs-data";

export function FaqsClientView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "bespoke-1": true,
    "hallmarks-1": true,
  });

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "bespoke", label: "Bespoke & 3D CAD", icon: Hammer },
    { id: "hallmarks", label: "Purity & Hallmarks", icon: ShieldCheck },
    { id: "repairs", label: "Repairs & Laser", icon: Gem },
    { id: "bullion", label: "Bullion & Rates", icon: Scale },
    { id: "visits", label: "Showroom & Payments", icon: CreditCard },
  ];

  const filteredFaqs = FAQS_FULL_DIRECTORY.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const whatsappFaqLink = buildWhatsAppLink({
    source: "faqs_page",
    customNote: "Hello Niraj Jewellers team, I have a question about your jewellery/services that wasn't covered in the FAQ section.",
  });

  return (
    <div className="space-y-12">
      {/* Search Input Bar */}
      <div className="max-w-2xl mx-auto relative">
        <Search className="w-5 h-5 text-[#8C6212] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by keyword (e.g. 22ct, resizing, CAD, deposit, hallmark)..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-[#E8DEC8] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#141416] placeholder:text-[#5A5960] shadow-sm transition-all outline-none"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8C6212] hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all shadow-sm ${
                isActive
                  ? "bg-gradient-to-r from-[#996515] to-[#C5A059] text-white shadow-md"
                  : "bg-white text-[#4A4A52] hover:text-[#141416] border border-[#E8DEC8] hover:border-[#D4AF37]"
              }`}
            >
              <IconComp className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-[#E8DEC8] space-y-3">
            <p className="text-sm text-[#4A4A52]">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <a
              href={whatsappFaqLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Ask Our Atelier Team Directly</span>
            </a>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#D4AF37] shadow-md"
                    : "bg-white/80 border-[#E8DEC8] hover:border-[#D4AF37]/60"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#141416] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? "bg-[#996515] text-white border-[#996515] rotate-180"
                        : "bg-[#FAF7F2] border-[#E8DEC8] text-[#5A5960]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-[#4A4A52] leading-relaxed border-t border-[#E8DEC8] pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>

      {/* Direct Inquiry Help Box */}
      <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border border-[#E8DEC8] text-center space-y-4 shadow-sm">
        <h3 className="font-serif text-2xl text-[#141416]">
          Have an Unlisted Goldsmith or Bullion Question?
        </h3>
        <p className="text-xs sm:text-sm text-[#4A4A52] max-w-lg mx-auto">
          Our master goldsmiths and showroom specialists are ready to answer technical questions, inspect photos of ancestral pieces, or verify live rates.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <a
            href={whatsappFaqLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] text-[#141416] font-semibold text-xs tracking-wider transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#996515]" />
            <span>Call {NIRAJ_DISPLAY_PHONE}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
