import { Metadata } from "next";
import Link from "next/link";
import { AtelierNavbar } from "@/components/atelier/AtelierNavbar";
import { Footer } from "@/components/footer/footer";
import { HallmarkGuide } from "@/components/trust/hallmark-guide";
import { FaqsClientView } from "@/components/faq/faqs-client-view";
import { FAQS_FULL_DIRECTORY } from "@/data/faqs-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & UK Hallmarking | Niraj Jewellers Ltd London",
  description:
    "Everything you need to know about bespoke 22ct bridal commissions, London Assay Office hallmarking, same-day workshop repairs, and live gold bullion rates at Niraj Jewellers Ltd.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions & UK Hallmarking | Niraj Jewellers Ltd London",
    description:
      "Answers on bespoke CAD commissions, London Assay hallmarked gold, same-day laser repairs, and wholesale bullion trading in Hayes, London.",
    url: "https://www.niraj-jewellers.co.uk/faqs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Ltd London - FAQs and UK Hallmarking Guide",
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] flex flex-col selection:bg-[#F3E8D2] selection:text-[#141416]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsJsonLd) }}
      />

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
                  Compliance &amp; FAQs
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#996515] block mb-3">
                [ 00 / WORKSHOP TRANSPARENCY &amp; STATUTORY STANDARDS ]
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] font-normal tracking-tight leading-[1.1] mb-5">
                Standards, Hallmarking &amp; Atelier Inquiries
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-[#8C6212] mb-4">
                Statutory British compliance and straightforward answers from the bench.
              </p>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Review UK Hallmarking Act standards, precious metal purity benchmarks, 3D CAD bespoke workflows, and same-day repair protocols practiced daily at our Hayes atelier.
              </p>
            </div>
          </div>
        </header>

        {/* Section 1: UK Hallmarking Act Compliance & Purity Education (ABOVE FAQs per Captain request) */}
        <HallmarkGuide />

        {/* Section 2: Frequently Asked Questions */}
        <section className="py-16 sm:py-24 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#996515] block mb-2">
                [ 02 / FREQUENTLY ASKED QUESTIONS ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141416] font-normal tracking-tight mb-4">
                Answers Directly from Our Goldsmiths
              </h2>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Filter by topic or search our knowledge directory for immediate answers on deposits, resizing speed, hallmark legality, and bullion procedures.
              </p>
            </div>

            <FaqsClientView />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
