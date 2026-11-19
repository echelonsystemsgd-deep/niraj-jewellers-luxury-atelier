"use client";

import { useState } from "react";
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
    customNote: `Hello Viky, I have a question regarding ${title.toLowerCase()} that wasn't covered on the page.`,
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
    <section className="py-16 sm:py-24 bg-obsidian/80 border-t border-atelier-border relative overflow-hidden">
      {/* JSON-LD Script for this page's FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answer Engine Optimization &amp; Client Clarifications</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-light text-white tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-platinum-muted max-w-2xl mx-auto">
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
                    ? "bg-atelier border-gold-500/50 shadow-lg shadow-gold-500/5"
                    : "bg-atelier/60 border-atelier-border hover:border-gold-600/30"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    {item.category && (
                      <span className="text-[10px] font-semibold text-gold-400 uppercase tracking-wider block">
                        {item.category}
                      </span>
                    )}
                    <span className="font-serif text-base sm:text-lg font-medium text-white leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? "bg-gold-500 text-obsidian border-gold-400 rotate-180"
                        : "bg-obsidian border-atelier-border text-platinum-muted"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-platinum-muted leading-relaxed border-t border-atelier-border/60 pt-4 animate-in fade-in duration-200">
                    <p className="text-platinum font-normal">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-atelier via-gold-950/20 to-atelier border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Require specific advice from our workbench?</span>
            </h4>
            <p className="text-xs text-platinum-muted">
              Message Master Jeweller Viky directly for advice, quotes, or custom requests.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-black font-semibold text-xs tracking-wide transition-all shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
            <span>Consult Viky on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
