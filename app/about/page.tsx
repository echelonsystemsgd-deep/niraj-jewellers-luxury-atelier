import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SubpageNav } from "@/components/header/subpage-nav";
import { Footer } from "@/components/footer/footer";
import { 
  Sparkles, 
  ShieldCheck, 
  Gem, 
  Hammer, 
  Scale, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import { buildWhatsAppLink, NIRAJ_UK_PHONE, NIRAJ_DISPLAY_PHONE, NIRAJ_SHOWROOM_ADDRESS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us | Niraj Jewellers Ltd — Hayes, London Goldsmith Heritage Since 1984",
  description:
    "Discover the 40+ year heritage of Niraj Jewellers Ltd. London's premier 22ct South Asian bridal goldsmith atelier and direct bullion dealer on Uxbridge Road, Hayes.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/about",
  },
  openGraph: {
    title: "About Us | Niraj Jewellers Ltd — London Goldsmith Atelier Since 1984",
    description:
      "Four decades of generational goldsmithing. Handcrafted 22ct bridal suites, certified natural diamonds, London Assay Office hallmarking, and direct workshop access.",
    url: "https://www.niraj-jewellers.co.uk/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niraj Jewellers Ltd London - Heritage Goldsmith Atelier",
      },
    ],
  },
};

export default function AboutPage() {
  const whatsappAboutLink = buildWhatsAppLink({
    source: "about_page",
    customNote: "Hello Niraj Jewellers team, I was reading your About Us page and would like to learn more about visiting your Hayes showroom or commissioning a bespoke piece.",
  });

  const aboutJsonLd = {
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
            name: "About Us",
            item: "https://www.niraj-jewellers.co.uk/about",
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://www.niraj-jewellers.co.uk/about#aboutpage",
        name: "About Niraj Jewellers Ltd",
        description: "Four decades of generational bespoke goldsmithing, direct bullion trading, and London Assay Office hallmarked bridal jewellery in Hayes, London.",
        publisher: {
          "@type": "JewelryStore",
          name: "Niraj Jewellers Ltd",
          address: {
            "@type": "PostalAddress",
            streetAddress: "136 Uxbridge Road",
            addressLocality: "Hayes",
            addressRegion: "London",
            postalCode: "UB4 0JH",
            addressCountry: "GB",
          },
          telephone: NIRAJ_UK_PHONE,
          foundingDate: "1984",
        },
      },
    ],
  };

  const milestones = [
    {
      year: "1984",
      title: "Founding the Hayes Atelier",
      desc: "Niraj Jewellers Ltd opened its doors at 136 Uxbridge Road, Hayes, with a dedicated goldsmith bench to serve the growing South Asian diaspora with genuine 22ct bridal gold.",
    },
    {
      year: "1998",
      title: "Direct Workshop Expansion",
      desc: "Expanded into high-precision laser welding and ultrasonic restoration, bringing complete end-to-end manufacturing and repairs in-house without third-party outsourcing.",
    },
    {
      year: "2012",
      title: "3D CAD & Photorealistic Prototyping",
      desc: "Pioneered computer-aided design (CAD) integration, allowing brides to inspect 360-degree digital prototypes of their wedding sets before casting a single gram of gold.",
    },
    {
      year: "Today",
      title: "London's Premier Flagship Destination",
      desc: "Over 40 years of continuous service, thousands of bespoke heirloom commissions, and a trusted reputation as direct wholesale bullion and bridal specialists.",
    },
  ];

  const pillars = [
    {
      icon: Hammer,
      title: "In-House Workshop Exclusivity",
      subtitle: "Zero Middleman Markups",
      description: "Unlike high-street retailers who outsource to overseas mass-production factories, our master goldsmiths craft, set, and polish every piece inside our Hayes workshop.",
    },
    {
      icon: ShieldCheck,
      title: "100% London Assay Hallmarking",
      subtitle: "British Legal Guarantee",
      description: "Every single piece of 22ct (916) and 18ct (750) jewellery is independently tested and struck by the Goldsmiths' Company Assay Office in London.",
    },
    {
      icon: Scale,
      title: "Live Bullion Transparency",
      subtitle: "Trade-Approved Scales",
      description: "We weigh and test ancestral gold directly before your eyes on government-stamped precision scales, applying live LBMA bullion spot prices with complete integrity.",
    },
    {
      icon: Gem,
      title: "Natural Gems & Syndicate Polki",
      subtitle: "Uncut Certified Stones",
      description: "From unheated Burmese rubies and carved Zambian emeralds to certified natural diamonds, we source authentic gemstones directly from certified gemological cutters.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] selection:bg-[#DFBF7A]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <SubpageNav currentTitle="About Us" />

      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden mb-20 sm:mb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-sm text-xs font-bold text-[#8C6212] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
                <span>Established 1984 • 40+ Years of Craftsmanship</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#141416] tracking-tight leading-tight">
                Generational Goldsmithing on Uxbridge Road
              </h1>

              <p className="font-vivaldi text-3xl sm:text-4xl text-[#996515] font-normal">
                Four Decades of British &amp; South Asian Gold Heritage
              </p>

              <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed max-w-2xl mx-auto pt-2">
                At Niraj Jewellers Ltd, every bridal choker, kada, and solitaire is born on our own workbenches. We bridge ancient royal Kundan and Polki artistry with uncompromising British London Assay hallmarking.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href={whatsappAboutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Speak with Our Workshop Team</span>
                </a>

                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D4AF37] text-xs font-semibold text-[#141416] tracking-wider transition-colors shadow-sm"
                >
                  <span>Explore Masterpieces</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8C6212]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Heritage Story & Workshop Photos */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Workshop Image Collage */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-white">
                <Image
                  src="/images/workshop/goldsmith-bench-order-book-22ct.jpg"
                  alt="Niraj Jewellers Workshop Order Book and Bench"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8DEC8] flex items-center justify-between shadow-md">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6212] block">
                      Authentic Workshop Record
                    </span>
                    <span className="text-xs font-semibold text-[#141416]">
                      Order Book Ref #12402 • 136 Uxbridge Road
                    </span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[#996515]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8DEC8] shadow-md bg-white">
                  <Image
                    src="/images/workshop/22ct-gold-filigree-bridal-suite.jpg"
                    alt="22ct Gold Filigree Craftsmanship"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8DEC8] shadow-md bg-white">
                  <Image
                    src="/images/workshop/workshop-bench-velvet-trays.jpg"
                    alt="Velvet Trays in Workshop"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
                <Award className="w-4 h-4" />
                <span>Our Story &amp; Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141416] leading-tight">
                Why Families Have Trusted Niraj Jewellers for 40+ Years
              </h2>

              <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
                When Niraj Jewellers opened in 1984 on Uxbridge Road in Hayes, the vision was simple: provide South Asian families with authentic, uncompromised 22ct (916) gold craftsmanship, crafted on-site with total transparency and zero high-street markups.
              </p>

              <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
                Over four decades, high-street retail jewelers shifted their business models toward commercial marketing, overseas casting factories, and inflated retail margins. Niraj Jewellers Ltd remained committed to the anvil, torch, and jeweler&apos;s loupe.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "No third-party workshop transfers — your jewellery stays securely in Hayes.",
                  "Transparent electronic bullion weighing in front of you at all times.",
                  "Complimentary unlimited 3D CAD design revisions on custom commissions.",
                  "Full legal documentation and official London Assay Office certification.",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#996515] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#141416] font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6">
                <div>
                  <span className="font-serif text-3xl font-bold text-[#8C6212] block">1984</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#5A5960]">Year Established</span>
                </div>
                <div className="w-px h-10 bg-[#E8DEC8]" />
                <div>
                  <span className="font-serif text-3xl font-bold text-[#8C6212] block">40+</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#5A5960]">Years Experience</span>
                </div>
                <div className="w-px h-10 bg-[#E8DEC8]" />
                <div>
                  <span className="font-serif text-3xl font-bold text-[#8C6212] block">100%</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#5A5960]">London Hallmarked</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Excellence */}
        <section className="bg-white py-20 border-y border-[#E8DEC8] mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#996515]">
                Our Guarantees
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141416]">
                The Four Pillars of Niraj Jewellers Ltd
              </h2>
              <p className="text-xs sm:text-sm text-[#4A4A52]">
                Every heirloom piece leaving our atelier reflects our uncompromising standard of purity, security, and craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, pIdx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pIdx}
                    className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DEC8] hover:border-[#D4AF37] transition-all hover:shadow-lg space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#D4AF37]/50 flex items-center justify-center text-[#996515] shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6212] block">
                        {pillar.subtitle}
                      </span>
                      <h3 className="font-serif text-lg font-medium text-[#141416] mt-0.5">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#5A5960] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996515]">
              Generational Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141416]">
              Four Decades of Goldsmithing Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((ms, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm space-y-3 relative overflow-hidden"
              >
                <div className="font-serif text-3xl font-bold text-[#8C6212]">
                  {ms.year}
                </div>
                <h3 className="font-serif text-base font-semibold text-[#141416]">
                  {ms.title}
                </h3>
                <p className="text-xs text-[#5A5960] leading-relaxed">
                  {ms.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border border-[#D4AF37]/50 shadow-md text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/40 text-xs font-bold text-[#8C6212] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#996515]" />
              <span>136 Uxbridge Road, Hayes, London UB4 0JH</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#141416]">
              Experience Direct Workshop Access in Person
            </h2>

            <p className="text-xs sm:text-sm text-[#4A4A52] max-w-xl mx-auto leading-relaxed">
              Whether you are commissioning a bespoke bridal suite, inspecting certified diamonds, or resizing an heirloom ring, our workshop team welcomes you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href={whatsappAboutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Chat with Workshop Concierge</span>
              </a>

              <a
                href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] text-xs font-semibold text-[#141416] tracking-wider transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#996515]" />
                <span>Call {NIRAJ_DISPLAY_PHONE}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-[#F4ECE1] border border-[#E8DEC8] text-xs font-semibold text-[#141416] tracking-wider transition-colors"
              >
                <span>Find Showroom Directions</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
