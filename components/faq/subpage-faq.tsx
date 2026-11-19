"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SubpageFaqItem } from "@/data/subpage-faqs-data";

interface SubpageFaqProps {
  title?: string;
  subtitle?: string;
  items: SubpageFaqItem[];
  pageSlug: string;
}

export function SubpageFaq({
  title = "Frequently Asked Questions",
  subtitle = "Direct answers to key client questions regarding turnaround, purity, and guarantees.",
  items,
  pageSlug,
}: SubpageFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappLink = buildWhatsAppLink({
    source: `${pageSlug}_faq_inquiry`,
    customNote: `Hi Niraj Jewellers team, I have a question regarding ${title.toLowerCase()} that wasn't covered on the page.`,
  });

  // Schema.org FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E8DEC8] relative overflow-hidden">
      {/* JSON-LD Script for this page's FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Client Clarifications &amp; Guarantees</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#141416] tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4A52] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3.5">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#D4AF37] shadow-md"
                    : "bg-white/80 border-[#E8DEC8] hover:border-[#D4AF37]/60"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    {item.category && (
                      <span className="text-[10px] font-bold text-[#8C6212] uppercase tracking-wider block">
                        {item.category}
                      </span>
                    )}
                    <span className="font-serif text-base sm:text-lg font-medium text-[#141416] leading-snug">
                      {item.question}
                    </span>
                  </div>
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
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#141416] flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-[#996515]" />
              <span>Need further technical or pricing guidance?</span>
            </h4>
            <p className="text-xs text-[#5A5960]">
              Our master goldsmiths are available on WhatsApp for direct answers.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
