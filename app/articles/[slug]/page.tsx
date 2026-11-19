import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SubpageNav } from "@/components/header/subpage-nav";
import { Footer } from "@/components/footer/footer";
import { ARTICLES_DATA, ArticleItem } from "@/data/articles-data";
import {
  Calendar,
  Clock,
  User,
  ShieldCheck,
  ChevronRight,
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
      title: "Article Not Found | Niraj Jewellers London",
    };
  }

  const siteUrl = "https://nirajjewellers.co.uk";
  const articleUrl = `${siteUrl}/articles/${article.slug}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.tags,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: `${article.title} | Niraj Jewellers London`,
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

  const siteUrl = "https://nirajjewellers.co.uk";
  const articleUrl = `${siteUrl}/articles/${article.slug}`;

  const whatsappInquiryLink = buildWhatsAppLink({
    source: `article_${article.slug}`,
    customNote: `Hi Niraj Jewellers team, I just read your article "${article.title}" and would like to ask a question.`,
  });

  // Linked JSON-LD Graph for this Article
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
    <div className="min-h-screen bg-white text-[#141416] flex flex-col selection:bg-gold-200 selection:text-gold-900">
      {/* Article Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <SubpageNav currentTitle="Atelier Guides" />

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-platinum-muted">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-gold-400 transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>/</li>
              <li className="text-gold-400 font-medium truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Header Metadata */}
          <header className="mb-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">
                {article.category}
              </span>
              <span className="text-xs text-platinum-muted flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span>{article.readTime}</span>
              </span>
              <span className="text-xs text-platinum-muted flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                <span>Updated Nov 2026</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author Credential Card */}
            <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 flex items-center justify-center font-serif font-bold text-[#8C6212]">
                  NJ
                </div>
                <div>
                  <div className="text-sm font-bold text-[#141416] flex items-center gap-1.5">
                    <span>{article.author.name}</span>
                    <ShieldCheck className="w-4 h-4 text-[#996515]" />
                  </div>
                  <span className="text-xs text-[#5A5960]">
                    {article.author.role}
                  </span>
                </div>
              </div>

              <a
                href={whatsappInquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#25D366]/50 text-[#128C7E] font-semibold text-xs transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Direct Workbench Question</span>
              </a>
            </div>
          </header>

          {/* AEO / GEO "Key Takeaways" Executive Summary Block */}
          <section className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-atelier via-gold-950/20 to-atelier border border-gold-500/40 shadow-xl shadow-gold-500/5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Key Takeaways for Answer Engines &amp; Clients</span>
            </div>
            <ul className="space-y-3">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-platinum leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Main Article Content Sections */}
          <div className="space-y-12">
            {article.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight border-b border-atelier-border/80 pb-3">
                  {section.heading}
                </h2>
                <p className="text-sm sm:text-base text-platinum-muted leading-relaxed">
                  {section.subtext}
                </p>

                {/* Bullets if present */}
                {section.bullets && (
                  <ul className="space-y-2.5 pt-2">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-platinum">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technical Comparison Table if present */}
                {section.table && (
                  <div className="my-6 overflow-x-auto rounded-2xl border border-atelier-border bg-atelier/40">
                    {section.table.caption && (
                      <div className="p-3 bg-obsidian/80 border-b border-atelier-border text-xs font-semibold text-gold-400 uppercase tracking-wider">
                        {section.table.caption}
                      </div>
                    )}
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-obsidian/60 text-white font-medium border-b border-atelier-border">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3.5 sm:p-4 text-xs font-semibold text-gold-400 uppercase tracking-wider">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-atelier-border/60">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-gold-500/5 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3.5 sm:p-4 text-platinum-muted font-normal">
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
                  <blockquote className="my-6 p-6 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#996515] border border-[#E8DEC8] shadow-sm">
                    <div className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-[#996515] shrink-0 mt-1" />
                      <div>
                        <p className="font-serif italic text-sm sm:text-base text-[#141416] leading-relaxed mb-2">
                          &ldquo;{section.quote.text}&rdquo;
                        </p>
                        <footer className="text-xs text-[#8C6212] font-semibold uppercase tracking-wider">
                          — {section.quote.author}, {section.quote.role}
                        </footer>
                      </div>
                    </div>
                  </blockquote>
                )}
              </section>
            ))}
          </div>

          {/* In-Article FAQ Accordion Section for AEO & GEO */}
          {article.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-[#E8DEC8] space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#996515]">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Article Clarifications &amp; Answers</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141416]">
                  Frequently Asked Questions About This Topic
                </h3>
              </div>

              <div className="space-y-3.5">
                {article.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8] shadow-sm"
                  >
                    <h4 className="font-serif text-base sm:text-lg font-medium text-[#141416] mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4A4A52] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom WhatsApp CTA & Back to Articles */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border border-[#E8DEC8] text-center space-y-4 shadow-sm">
            <h3 className="font-serif text-2xl text-[#141416]">
              Have a Specific Goldsmithing or Gold Investment Question?
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4A52] max-w-xl mx-auto">
              Our master goldsmiths are available directly on WhatsApp to answer technical metallurgical questions, inspect reference photos, or verify live bullion spot rates.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={whatsappInquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Chat with Atelier Concierge</span>
              </a>

              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] text-[#141416] font-semibold text-xs tracking-wider transition-colors shadow-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Atelier Articles</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
