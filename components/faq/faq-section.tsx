"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/luxury-icons";
import { buildWhatsAppLink, NIRAJ_UK_PHONE } from "@/lib/whatsapp";

export interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    category: "Gold Exchange & Bullion",
    question: "Can I bring my own gold or scrap jewellery to exchange or melt down into a bespoke piece?",
    answer:
      "Absolutely. We weigh and test your gold directly in front of you on calibrated, trade-approved electronic scales at 136 Uxbridge Road. Old family gold can be melted down and refined for your new bespoke bridal commission, or credited at live bullion spot market rates against brand-new 22ct or 18ct suites.",
  },
  {
    category: "Pricing & Deposits",
    question: "How does payment and deposit work for bespoke commissions?",
    answer:
      "We operate with complete financial transparency. We require a 30% initial deposit only after you have reviewed and formally approved the photorealistic 3D CAD render. The remaining 70% balance is settled upon your in-person inspection and London Assay Office hallmarking collection in our Hayes showroom.",
  },
  {
    category: "Nationwide & Remote Clients",
    question: "I live outside London or overseas. Can I commission a piece remotely?",
    answer:
      "Yes. A significant portion of our bridal couples and bullion investors consult remotely via WhatsApp and HD video calls. We share 360° CAD renders, inspect loose GIA diamonds under digital loupes, and deliver nationwide across the UK via fully insured, tamper-evident Royal Mail Special Delivery Guaranteed by 1pm.",
  },
  {
    category: "Assay & Authenticity",
    question: "How do I know the gold purity and diamonds are authentic?",
    answer:
      "Under the UK Hallmarking Act 1973, every single piece crafted by Niraj Jewellers Ltd is independently tested and stamped by the London Assay Office with the official Leopard's Head hallmark and legal fineness mark (916 for 22ct gold, 750 for 18ct gold, 950 for Platinum). All center diamonds are accompanied by official GIA or IGI certificates.",
  },
  {
    category: "Rush Turnarounds",
    question: "Can you expedite urgent commissions for an upcoming wedding or engagement?",
    answer:
      "Yes. Because all master goldsmith benches, laser welders, and casting crucibles are situated on-site inside our Hayes workshop (never shipped to third parties or abroad), we frequently accommodate rush deadlines of 5–7 working days upon consultation with our workshop team.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappFaqLink = buildWhatsAppLink({
    intent: "general",
    customNote: "Hi Niraj Jewellers team, I have a bespoke jewellery question that wasn't in your FAQ.",
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Client Clarifications &amp; Commercial Guarantees</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Transparent answers from our Hayes goldsmiths
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52]">
            Clear guidance regarding workshop deposits, ancestral gold melting, nationwide delivery, and London Assay Office hallmarking.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-none border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#FAF7F2] border-[#D4AF37] shadow-md"
                    : "bg-white border-[#E8DEC8] hover:border-[#D4AF37]/60"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#8C6212] uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-medium text-[#141416] leading-snug">
                      {faq.question}
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
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Callout if questions remain */}
        <div className="mt-10 p-6 sm:p-7 bg-white border border-[#E7E2DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-[#141416]">
              Have a question about a bespoke piece or gold melting?
            </h4>
            <p className="text-xs text-[#57534E] font-sans">
              Speak directly with our atelier team on WhatsApp or call <strong className="font-sans font-semibold text-[#141416]">{NIRAJ_UK_PHONE}</strong>.
            </p>
          </div>

          <a
            href={whatsappFaqLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all shadow-xs shrink-0 min-h-[44px]"
          >
            <WhatsAppIcon className="w-4 h-4" fill="white" />
            <span>Ask Atelier on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
