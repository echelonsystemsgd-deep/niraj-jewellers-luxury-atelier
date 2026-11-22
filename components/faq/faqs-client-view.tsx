"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  Phone, 
  Search, 
  ShieldCheck, 
  Hammer, 
  Gem, 
  Scale, 
  CreditCard 
} from "lucide-react";
import { buildWhatsAppLink, NIRAJ_LANDLINE_PHONE, NIRAJ_MOBILE_PHONE } from "@/lib/whatsapp";
import { FAQS_FULL_DIRECTORY } from "@/data/faqs-data";

export function FaqsClientView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("" );
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "bespoke-1": true,
  });

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "bespoke", label: "Bespoke & 3D CAD", icon: Hammer },
    { id: "hallmarks", label: "Purity & Hallmarks", icon: ShieldCheck },
    { id: "repairs", label: "Repairs & Laser", icon: Gem },
    { id: "bullion", label: "Bullion & Rates", icon: Scale },
    { id: "visits", label: "Showroom & Access", icon: CreditCard },
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
    customNote: "Hello Niraj Jewellers team, I have a question about your jewellery or services that was not covered in the FAQ section.",
  });

  return (
    <div className="space-y-10">
      {/* Search Input Bar */}
      <div className="max-w-2xl mx-auto relative">
        <Search className="w-4 h-4 text-[#78716C] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by keyword (e.g. 22ct, resizing, CAD, hallmark, bullion)..."
          className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#EAE6DF] focus:border-[#996515] text-xs sm:text-sm text-[#141416] placeholder:text-[#78716C] transition-colors outline-hidden font-sans"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-sans text-[#996515] hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 px-2 no-scrollbar">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-sans tracking-wider uppercase whitespace-nowrap transition-colors shrink-0 border ${
                isActive
                  ? "bg-[#141416] text-white border-[#141416] font-semibold"
                  : "bg-white text-[#57534E] hover:text-[#141416] border-[#EAE6DF] hover:border-[#141416]"
              }`}
            >
              <IconComp className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white border border-[#EAE6DF] space-y-3 rounded-2xl">
            <p className="text-sm text-[#57534E] font-sans">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <a
              href={whatsappFaqLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-sans uppercase tracking-wider font-semibold"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Ask Our Goldsmith Bench Directly</span>
            </a>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className={`border transition-colors ${
                  isOpen
                    ? "bg-white border-[#996515]"
                    : "bg-white border-[#EAE6DF] hover:border-[#141416]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-normal text-[#141416] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#996515] text-white border-[#996515] rotate-180"
                        : "bg-[#FAF8F5] border-[#EAE6DF] text-[#78716C]"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#57534E] leading-relaxed border-t border-[#EAE6DF] pt-4">
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
      <div className="max-w-3xl mx-auto p-8 sm:p-10 bg-white border border-[#EAE6DF] text-center space-y-4 rounded-2xl shadow-xs">
        <span className="font-sans text-xs uppercase tracking-widest text-[#8C6212] block font-semibold">
          UNLISTED INQUIRIES
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#141416] font-normal">
          Have an Unlisted Goldsmith or Bullion Question?
        </h3>
        <p className="text-xs sm:text-sm text-[#57534E] max-w-lg mx-auto leading-relaxed font-sans">
          Our master goldsmiths and workshop team are ready to answer technical questions, inspect photos of ancestral pieces, or verify live spot rates.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={whatsappFaqLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${NIRAJ_LANDLINE_PHONE.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF8F5] border border-[#EAE6DF] text-[#141416] font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#996515]" />
            <span>Call {NIRAJ_LANDLINE_PHONE}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
