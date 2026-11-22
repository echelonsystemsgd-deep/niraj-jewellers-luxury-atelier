"use client";

import { AtelierNavbar } from "@/components/atelier/AtelierNavbar";
import { ShowroomHub } from "@/components/showroom/showroom-hub";
import { ReviewsSection } from "@/components/trust/reviews-section";
import { Footer } from "@/components/footer/footer";
import { MapPin, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import Link from "next/link";

export function ShowroomClientView() {
  const whatsappShowroomLink = buildWhatsAppLink({
    intent: "general",
    customNote: "Hi Niraj Jewellers team, I would like to visit your Hayes showroom at 136 Uxbridge Road. Could you advise on consultation availability?",
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] flex flex-col selection:bg-[#F3E8D2] selection:text-[#141416]">
      <AtelierNavbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="border-b border-[#EAE6DF] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            {/* Breadcrumb Trail */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-xs font-mono text-[#78716C]">
                <li>
                  <Link href="/" className="hover:text-[#996515] transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[#996515] font-semibold" aria-current="page">
                  Hayes Showroom &amp; Bench
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#996515] block mb-3">
                [ 01 / HAYES SHOWROOM &amp; WORKBENCH ACCESS ]
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] font-normal tracking-tight leading-[1.1] mb-5">
                The Hayes Flagship Showroom &amp; Atelier
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-[#8C6212] mb-4">
                Direct master-goldsmith access on Uxbridge Road since 1984.
              </p>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-6">
                Step directly into our working West London atelier. Inspect certified diamonds under digital loupes, try on completed 22ct bridal suites, observe live laser repairs, and trade gold bullion directly with our goldsmiths.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={whatsappShowroomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>WhatsApp Atelier Concierge</span>
                </a>
                <a
                  href="tel:02085739323"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF8F5] border border-[#EAE6DF] text-[#141416] font-mono text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  <span>Call 020 8573 9323</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Showroom Hub Component */}
        <ShowroomHub />

        {/* Verified Reviews Section */}
        <ReviewsSection />
      </main>

      <Footer />
    </div>
  );
}
