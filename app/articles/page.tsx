import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AtelierNavbar } from "@/components/atelier/AtelierNavbar";
import { Footer } from "@/components/footer/footer";
import { ARTICLES_DATA } from "@/data/articles-data";
import { Clock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Atelier Articles & Goldsmith Knowledge Hub | Niraj Jewellers Ltd London",
  description:
    "Authoritative guides on 22ct and 24ct gold hallmarking, in-house 3D CAD bespoke design, same-day laser repairs, and London LBMA bullion trading by Niraj Jewellers Ltd.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/articles",
  },
  openGraph: {
    title: "Atelier Articles & Goldsmith Knowledge Hub | Niraj Jewellers Ltd London",
    description:
      "Expert goldsmith guides on 22ct gold purity, 3D CAD casting, same-day repairs and LBMA bullion in Hayes, London.",
    url: "https://www.niraj-jewellers.co.uk/articles",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Ltd London - Atelier Articles and Goldsmith Knowledge Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Articles & Goldsmith Knowledge Hub | Niraj Jewellers Ltd",
    description:
      "Authoritative goldsmith guides on 22ct and 24ct hallmarking, 3D CAD bespoke design, and live bullion trading.",
    images: ["/og-image.jpg"],
  },
};

export default function ArticlesPage() {
  const jsonLd = {
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
            name: "Articles & Knowledge Hub",
            item: "https://www.niraj-jewellers.co.uk/articles",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.niraj-jewellers.co.uk/articles#webpage",
        url: "https://www.niraj-jewellers.co.uk/articles",
        name: "Atelier Articles & Goldsmith Knowledge Hub | Niraj Jewellers Ltd London",
        description:
          "Authoritative guides on 22ct and 24ct gold hallmarking, 3D CAD bespoke jewellery design, same-day laser repairs, and LBMA bullion investment.",
        publisher: {
          "@id": "https://www.niraj-jewellers.co.uk/#jewelrystore",
        },
        hasPart: ARTICLES_DATA.map((article) => ({
          "@type": "Article",
          headline: article.title,
          url: `https://www.niraj-jewellers.co.uk/articles/${article.slug}`,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          author: {
            "@type": "Person",
            name: article.author.name,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] flex flex-col selection:bg-[#F3E8D2] selection:text-[#141416]">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AtelierNavbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        {/* Editorial Header Section */}
        <section className="border-b border-[#EAE6DF] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            {/* Breadcrumb Trail */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-xs font-sans text-[#78716C]">
                <li>
                  <Link href="/" className="hover:text-[#996515] transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[#996515] font-semibold" aria-current="page">
                  Articles &amp; Guides
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8C6212] block mb-3 font-semibold">
                GOLDSMITH KNOWLEDGE &amp; EDUCATION
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] font-normal tracking-tight leading-[1.1] mb-5">
                Atelier Editorial &amp; Master Goldsmith Guides
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-[#8C6212] mb-4">
                Generational craft knowledge handed down from the Hayes workbench.
              </p>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Proprietary metallurgical insights, UK Hallmarking Act standards, 3D CAD bespoke casting workflows, and live bullion trading guides curated by our in-house master goldsmiths at 136 Uxbridge Road, Hayes.
              </p>
            </div>

            {/* Verification Credential Plaque */}
            <div className="mt-8 pt-6 border-t border-[#EAE6DF] flex flex-wrap items-center justify-between gap-4 text-xs text-[#57534E]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#996515]" />
                <span className="font-medium text-[#141416]">
                  London Assay Office Hallmarking Act 1973 Verified
                </span>
              </div>
              <div className="flex items-center gap-4 font-sans text-xs text-[#78716C]">
                <span>BENCH LOCATION: 136 UXBRIDGE ROAD, HAYES</span>
                <span>EST. 1984</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hairline Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#EAE6DF] border border-[#EAE6DF]">
            {ARTICLES_DATA.map((article, idx) => (
              <article
                key={article.slug}
                className="bg-white p-6 sm:p-8 flex flex-col justify-between group transition-colors hover:bg-[#FAF8F5]"
              >
                <div>
                  {/* Article Thumbnail Image per Captain requirement */}
                  <Link
                    href={`/articles/${article.slug}`}
                    className="block relative aspect-[16/10] w-full overflow-hidden mb-6 bg-[#F5F2EB] border border-[#EAE6DF]"
                  >
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 text-xs font-sans tracking-widest uppercase bg-white/95 text-[#141416] border border-[#EAE6DF] font-medium">
                        {article.category}
                      </span>
                    </div>
                  </Link>

                  {/* Header Meta */}
                  <div className="flex items-center justify-between text-xs text-[#78716C] mb-3 font-sans">
                    <span className="font-semibold text-[#8C6212]">Guide 0{idx + 1}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#996515]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#141416] font-normal leading-tight mb-3 group-hover:text-[#996515] transition-colors">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#57534E] leading-relaxed mb-6 font-sans">
                    {article.excerpt}
                  </p>

                  {/* Key Takeaway Snippet */}
                  <div className="p-4 bg-[#FAF8F5] border border-[#EAE6DF] mb-6">
                    <span className="font-sans text-xs uppercase tracking-wider text-[#996515] block mb-1 font-semibold">
                      KEY WORKSHOP TAKEAWAY
                    </span>
                    <p className="text-xs text-[#141416] leading-relaxed font-sans">
                      {article.keyTakeaways[0]}
                    </p>
                  </div>
                </div>

                {/* Footer Link & Author */}
                <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between">
                  <div className="text-xs font-sans">
                    <span className="font-medium text-[#141416] block">
                      {article.author.name}
                    </span>
                    <span className="text-[11px] text-[#78716C]">
                      Hayes Goldsmith Bench
                    </span>
                  </div>

                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#996515] font-semibold group-hover:text-[#141416] transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* In-Person Goldsmith Consultation Plaque */}
          <div className="mt-12 p-8 sm:p-10 bg-white border border-[#EAE6DF] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl shadow-xs">
            <div className="max-w-2xl">
              <span className="font-sans text-xs uppercase tracking-widest text-[#996515] block mb-2 font-semibold">
                DIRECT BENCH CONSULTATION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#141416] font-normal mb-2">
                Have a bespoke commission or gold purity inquiry?
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed font-sans">
                Speak directly with our goldsmiths at our Hayes workshop. We inspect diamond loupe certificates, provide live LBMA gold bullion valuations, and draft 3D CAD renders.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%20team,%20I%20have%20a%20question%20regarding%20one%20of%20your%20goldsmith%20articles."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-sans uppercase tracking-widest font-semibold transition-colors"
              >
                <span>WhatsApp Goldsmith</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF8F5] border border-[#EAE6DF] text-[#141416] text-xs font-sans uppercase tracking-widest font-semibold transition-colors"
              >
                <span>Visit Hayes Bench</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
