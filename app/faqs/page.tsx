import { Metadata } from "next";
import { SubpageNav } from "@/components/header/subpage-nav";
import { Footer } from "@/components/footer/footer";
import { FaqsClientView } from "@/components/faq/faqs-client-view";
import { FAQS_FULL_DIRECTORY } from "@/data/faqs-data";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Niraj Jewellers Ltd London",
  description:
    "Everything you need to know about bespoke 22ct bridal commissions, London Assay Office hallmarking, same-day workshop repairs, and live gold bullion rates at Niraj Jewellers Ltd.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | Niraj Jewellers Ltd London",
    description:
      "Answers on bespoke CAD commissions, London Assay hallmarked gold, same-day laser repairs, and wholesale bullion trading in Hayes, London.",
    url: "https://www.niraj-jewellers.co.uk/faqs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Ltd London - FAQs",
      },
    ],
  },
};

export default function FaqsPage() {
  const faqsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.niraj-jewellers.co.uk",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Frequently Asked Questions",
            item: "https://www.niraj-jewellers.co.uk/faqs",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.niraj-jewellers.co.uk/faqs#faqpage",
        mainEntity: FAQS_FULL_DIRECTORY.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] selection:bg-[#DFBF7A]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsJsonLd) }}
      />

      <SubpageNav currentTitle="Frequently Asked Questions" />

      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-sm text-xs font-bold text-[#8C6212] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
              <span>Atelier Guidance &amp; Transparent Answers</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#141416] tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="font-vivaldi text-3xl sm:text-4xl text-[#996515] font-normal">
              Direct Transparency from Our Hayes Workshop
            </p>

            <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed max-w-2xl mx-auto pt-2">
              Everything you need to know about commissioning custom 22ct jewellery, verifying London Assay Office hallmarks, same-day workshop repairs, and bullion trading.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqsClientView />
        </div>
      </main>

      <Footer />
    </div>
  );
}
