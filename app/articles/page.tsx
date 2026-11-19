import type { Metadata } from "next";
import Link from "next/link";
import { SubpageNav } from "@/components/header/subpage-nav";
import { Footer } from "@/components/footer/footer";
import { ARTICLES_DATA } from "@/data/articles-data";
import { BookOpen, Clock, ArrowRight, CheckCircle2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Atelier Articles & Goldsmith Knowledge Hub | Niraj Jewellers Ltd London",
  description:
    "Authoritative guides on 22ct/24ct gold hallmarking, in-house 3D CAD bespoke design, same-day laser repairs, and London LBMA bullion trading by Niraj Jewellers Ltd.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/articles",
  },
  openGraph: {
    title: "Atelier Articles & Goldsmith Knowledge Hub | Niraj Jewellers Ltd London",
    description:
      "Expert goldsmith guides on 22ct gold purity, 3D CAD casting, same-day repairs & LBMA bullion in Hayes, London.",
    url: "https://www.niraj-jewellers.co.uk/articles",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Ltd London - Atelier Articles & Goldsmith Knowledge Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Articles & Goldsmith Knowledge Hub | Niraj Jewellers Ltd",
    description:
      "Authoritative goldsmith guides on 22ct/24ct hallmarking, 3D CAD bespoke design, and live bullion trading.",
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
          "Authoritative guides on 22ct/24ct gold hallmarking, 3D CAD bespoke jewellery design, same-day laser repairs, and LBMA bullion investment.",
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
    <div className="min-h-screen bg-white text-[#141416] flex flex-col selection:bg-gold-200 selection:text-gold-900">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Subpage Header Nav */}
      <SubpageNav currentTitle="Articles &amp; Knowledge Hub" />

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-[#5A5960]">
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

          {/* Hero Header */}
          <div className="mb-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515] mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Goldsmith Knowledge Base</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight leading-tight mb-4">
              Atelier Editorial &amp; Master Goldsmith Guides
            </h1>
            <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal mb-3">
              Craftsmanship knowledge handed down through generations
            </p>
            <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
              Proprietary metallurgical insights, UK Hallmarking Act standards, 3D CAD bespoke casting workflows, and live bullion trading guides curated by Niraj Jewellers Ltd at 136 Uxbridge Road, Hayes.
            </p>
          </div>

          {/* E-E-A-T Editorial Verification Banner */}
          <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border border-[#E8DEC8] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#996515]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#141416] flex items-center gap-2">
                  <span>Direct Workbench Authority &amp; Independent London Assay Compliance</span>
                  <CheckCircle2 className="w-4 h-4 text-[#996515] inline" />
                </h3>
                <p className="text-xs text-[#5A5960]">
                  Every technical guide is reviewed by our master goldsmiths, adhering to London Assay Office Hallmarking Act 1973 standards.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3.5 py-1 rounded-full bg-white border border-[#E8DEC8] text-[#8C6212] font-semibold shrink-0 shadow-sm">
              Freshness: Live Editorial
            </span>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES_DATA.map((article) => (
              <article
                key={article.slug}
                className="group rounded-3xl bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] transition-all duration-300 flex flex-col overflow-hidden hover:shadow-lg"
              >
                {/* Header Meta */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#8C6212] px-3 py-1 rounded-full bg-white border border-[#D4AF37]/40 shadow-sm">
                      {article.category}
                    </span>
                    <span className="text-xs text-[#5A5960] flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#996515]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#141416] group-hover:text-[#996515] transition-colors leading-snug mb-3">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#4A4A52] leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Key Takeaway Snippet */}
                  <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] mb-6 shadow-sm">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6212] block mb-1">
                      Key Takeaway
                    </span>
                    <p className="text-xs text-[#141416] leading-relaxed line-clamp-2">
                      {article.keyTakeaways[0]}
                    </p>
                  </div>

                  {/* Author & CTA */}
                  <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[#141416] font-bold block">
                        {article.author.name}
                      </span>
                      <span className="text-[11px] text-[#5A5960]">
                        136 Uxbridge Road, Hayes
                      </span>
                    </div>

                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-1.5 font-bold text-[#996515] group-hover:text-[#78510C] transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
