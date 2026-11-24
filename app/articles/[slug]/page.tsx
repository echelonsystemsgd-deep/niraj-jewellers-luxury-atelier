import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AtelierNavbar } from "@/components/atelier/AtelierNavbar";
import { Footer } from "@/components/footer/footer";
import { ARTICLES_DATA, ArticleItem } from "@/data/articles-data";
import {
  Calendar,
  Clock,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  MessageCircle,
  HelpCircle,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Niraj Jewellers Ltd London",
    };
  }

  const siteUrl = "https://www.niraj-jewellers.co.uk";
  const articleUrl = `${siteUrl}/articles/${article.slug}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.tags,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: `${article.title} | Niraj Jewellers Ltd London`,
      description: article.metaDescription,
      url: articleUrl,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author.name],
      tags: article.tags,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.coverImage],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const siteUrl = "https://www.niraj-jewellers.co.uk";
  const articleUrl = `${siteUrl}/articles/${article.slug}`;

  const whatsappInquiryLink = buildWhatsAppLink({
    source: `article_${article.slug}`,
    customNote: `Hi Niraj Jewellers team, I just read your article "${article.title}" and would like to ask a goldsmith question.`,
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Articles",
            item: `${siteUrl}/articles`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: "Niraj Jewellers London",
          url: siteUrl,
        },
        headline: article.title,
        description: article.metaDescription,
        mainEntityOfPage: articleUrl,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        inLanguage: "en-GB",
        author: {
          "@type": "Person",
          name: article.author.name,
          jobTitle: article.author.role,
          url: `${siteUrl}/showroom`,
        },
        publisher: {
          "@type": "JewelryStore",
          "@id": `${siteUrl}/#jewelrystore`,
          name: "Niraj Jewellers",
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logo.svg`,
          },
        },
        image: article.coverImage,
        keywords: article.tags.join(", "),
        articleSection: article.category,
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] flex flex-col selection:bg-[#F3E8D2] selection:text-[#141416]">
      {/* Article Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <AtelierNavbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-xs font-sans text-[#78716C]">
              <li>
                <Link href="/" className="hover:text-[#996515] transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-[#996515] transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#996515] font-semibold truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Header Metadata */}
          <header className="mb-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-sans">
              <span className="text-xs uppercase tracking-widest text-[#996515] px-2.5 py-1 bg-white border border-[#EAE6DF] font-semibold">
                {article.category}
              </span>
              <span className="text-xs text-[#78716C] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#996515]" />
                <span>{article.readTime}</span>
              </span>
              <span className="text-xs text-[#78716C] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#996515]" />
                <span>Updated Nov 2026</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-sans">
              {article.excerpt}
            </p>

            {/* Author Credential Card */}
            <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white border border-[#EAE6DF] flex items-center justify-center font-serif font-bold text-[#8C6212] rounded-full">
                  NJ
                </div>
                <div>
                  <div className="text-sm font-medium text-[#141416] flex items-center gap-1.5 font-sans">
                    <span>{article.author.name}</span>
                    <ShieldCheck className="w-4 h-4 text-[#996515]" />
                  </div>
                  <span className="text-xs font-sans text-[#78716C]">
                    136 Uxbridge Road, Hayes
                  </span>
                </div>
              </div>

              <a
                href={whatsappInquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#FAF8F5] border border-[#25D366] text-[#128C7E] font-sans text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Ask Goldsmith Bench</span>
              </a>
            </div>
          </header>

          {/* Featured Hero Image per Captain requirement */}
          <div className="mb-10 relative aspect-[16/9] w-full overflow-hidden bg-[#F5F2EB] border border-[#EAE6DF] shadow-xs">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 border border-[#EAE6DF] text-xs font-sans uppercase tracking-widest text-[#57534E] font-medium">
              Authentic Hayes Goldsmith Atelier Documentation
            </div>
          </div>

          {/* Key Takeaways Executive Summary Block */}
          <section className="mb-12 p-6 sm:p-8 bg-white border border-[#EAE6DF] shadow-xs">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#996515] mb-4">
              Key Workshop Takeaways &amp; Facts
            </p>
            <ul className="space-y-3 font-sans">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#141416] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#996515] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Main Article Content Sections */}
          <div className="space-y-12">
            {article.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#141416] tracking-tight border-b border-[#EAE6DF] pb-3">
                  {section.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                  {section.subtext}
                </p>

                {/* Bullets if present */}
                {section.bullets && (
                  <ul className="space-y-2.5 pt-2">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141416]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#996515] mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technical Comparison Table if present */}
                {section.table && (
                  <div className="my-6 overflow-x-auto border border-[#EAE6DF] bg-white">
                    {section.table.caption && (
                      <div className="p-3 bg-[#FAF8F5] border-b border-[#EAE6DF] text-xs font-sans font-semibold text-[#8C6212] uppercase tracking-wider">
                        {section.table.caption}
                      </div>
                    )}
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#FAF8F5] text-[#141416] font-medium border-b border-[#EAE6DF]">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3.5 sm:p-4 text-xs font-sans font-semibold text-[#8C6212] uppercase tracking-wider">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EAE6DF] font-sans">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#FAF8F5] transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3.5 sm:p-4 text-[#57534E] font-normal">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Master Goldsmith Quote if present */}
                {section.quote && (
                  <blockquote className="my-6 p-6 bg-white border-l-2 border-[#996515] border border-[#EAE6DF]">
                    <div className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-[#996515] shrink-0 mt-1" />
                      <div>
                        <p className="font-serif italic text-base sm:text-lg text-[#141416] leading-relaxed mb-2">
                          &ldquo;{section.quote.text}&rdquo;
                        </p>
                        <footer className="text-xs font-sans text-[#8C6212] uppercase tracking-wider font-semibold">
                          : {section.quote.author}, {section.quote.role}
                        </footer>
                      </div>
                    </div>
                  </blockquote>
                )}
              </section>
            ))}
          </div>

          {/* In-Article FAQ Accordion Section */}
          {article.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-[#EAE6DF] space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#996515] font-semibold">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Topic FAQs &amp; Standards</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141416]">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3.5">
                {article.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-5 sm:p-6 bg-white border border-[#EAE6DF]"
                  >
                    <h4 className="font-serif text-base sm:text-lg font-medium text-[#141416] mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom WhatsApp CTA & Back to Articles */}
          <div className="mt-16 p-8 sm:p-10 bg-white border border-[#EAE6DF] text-center space-y-4 shadow-xs">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8C6212] block font-semibold">
              DIRECT WORKSHOP CONCIERGE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#141416] font-normal">
              Have a Specific Goldsmithing or Bullion Question?
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] max-w-xl mx-auto leading-relaxed font-sans">
              Our master goldsmiths are available directly on WhatsApp to answer technical metallurgical questions, inspect reference photos, or verify live bullion spot rates.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <a
                href={whatsappInquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white font-sans text-xs uppercase tracking-widest font-semibold transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>WhatsApp Atelier Concierge</span>
              </a>

              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF8F5] border border-[#EAE6DF] text-[#141416] font-sans text-xs uppercase tracking-widest font-semibold transition-colors shadow-xs"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Articles &amp; Guides</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
