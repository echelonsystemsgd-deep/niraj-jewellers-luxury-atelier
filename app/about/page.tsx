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

        {/* 4 Pillars of Excellence with Hammered Gold Accents */}
        <section className="bg-[#FAF9F5] texture-ivory-paper py-20 sm:py-28 border-y border-[#E8DEC8] mb-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#996515]">
                Atelier Standards &amp; Verification
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
                The Four Pillars of Niraj Jewellers Ltd
              </h2>
              <p className="text-sm text-[#4A4A52] leading-relaxed">
                Every heirloom piece leaving our Hayes atelier reflects our uncompromising standard of metallurgical purity, workshop security, and physical proof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {pillars.map((pillar, pIdx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pIdx}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#D4AF37] transition-all hover:shadow-xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl texture-hammered-gold border border-white flex items-center justify-center text-[#141416] shadow-md">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C6212] block">
                          {pillar.subtitle}
                        </span>
                        <h3 className="font-serif text-xl font-medium text-[#141416] mt-1 group-hover:text-[#996515] transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#5A5960] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#EFE8DA] flex items-center gap-1.5 text-[11px] text-[#8C6212] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#996515] shrink-0" />
                      <span>Verified Atelier Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Generational Journey — Visual Chronological Timeline with Real Photography */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996515]">
              Generational Journey Timeline
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
              Four Decades of Goldsmithing Milestones
            </h2>
            <p className="text-sm text-[#4A4A52] leading-relaxed">
              Trace the evolution of our Hayes atelier from hand-forged 1984 beginnings to advanced 3D CAD bespoke suites.
            </p>
          </div>

          {/* Timeline Grid with Images & Connecting Track */}
          <div className="relative">
            {/* Desktop connecting rule */}
            <div
              className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-[#DFBF7A]/40 via-[#996515]/60 to-[#DFBF7A]/40 z-0"
              aria-hidden="true"
            />

            {/* Vertical Connecting Spine for Mobile */}
            <div
              className="md:hidden absolute top-6 bottom-6 left-3.5 w-[2px] bg-gradient-to-b from-[#DFBF7A] via-[#996515] to-[#DFBF7A] z-0"
              aria-hidden="true"
            />

            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {[
                {
                  year: "1984",
                  title: "Founding the Hayes Atelier",
                  desc: "Niraj Jewellers Ltd opened at 136 Uxbridge Road with a traditional goldsmith bench to craft genuine 22ct bridal gold for West London.",
                  image: "/images/workshop/goldsmith-bench-order-book-22ct.jpg",
                  imageAlt: "1984 Founding Hayes goldsmith bench and order ledger",
                  tag: "Founding Benchwork",
                },
                {
                  year: "1998",
                  title: "In-House Laser Bench Expansion",
                  desc: "Expanded into high-precision laser welding and ultrasonic restoration, bringing end-to-end manufacturing and repairs in-house without outsourcing.",
                  image: "/images/workshop/workshop-bench-velvet-trays.jpg",
                  imageAlt: "Hayes atelier workshop consultation trays and benchcraft",
                  tag: "Precision Benchwork",
                },
                {
                  year: "2012",
                  title: "3D CAD & Resin Prototyping",
                  desc: "Pioneered computer-aided design integration, allowing bridal couples to inspect photorealistic 360° renders and resin prototypes before casting.",
                  image: "/images/cad/bespoke-evil-eye-sapphire-cad.jpg",
                  imageAlt: "Photorealistic 3D CAD jewellery rendering",
                  tag: "Digital Precision",
                },
                {
                  year: "Today",
                  title: "London's Premier 22ct Destination",
                  desc: "Over 40 years of continuous service, thousands of bespoke heirloom commissions, and a trusted reputation as direct bullion and bridal specialists.",
                  image: "/images/workshop/22ct-gold-filigree-bridal-suite.jpg",
                  imageAlt: "Handcrafted 22ct gold filigree bridal suite",
                  tag: "Flagship Masterworks",
                },
              ].map((ms, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 md:pl-0 flex flex-col"
                >
                  {/* Mobile Chronological Node Marker (Hammered Gold) */}
                  <div
                    className="md:hidden absolute left-0 top-5 w-7 h-7 rounded-full texture-hammered-gold border border-white flex items-center justify-center text-[9px] font-bold text-[#141416] shadow-md z-20 font-mono"
                    aria-hidden="true"
                  >
                    0{idx + 1}
                  </div>

                  <div className="bg-white rounded-2xl border border-[#E8DEC8] hover:border-[#D4AF37] p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between group h-full">
                    <div>
                      {/* Real Workshop / Process Visual */}
                      <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden mb-4 sm:mb-5 border border-[#E8DEC8] bg-[#FAF7F2] group-hover:border-[#D4AF37] transition-colors">
                        <Image
                          src={ms.image}
                          alt={ms.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-sm border border-[#D4AF37]/40 text-[10px] font-mono font-semibold text-[#DFBF7A]">
                          {ms.tag}
                        </div>
                      </div>

                      {/* Milestone Year & Title */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#8C6212]">
                          {ms.year}
                        </span>
                        <span className="text-[10px] font-mono text-[#5A5960] uppercase">
                          Milestone 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-medium text-[#141416] group-hover:text-[#996515] transition-colors mb-2">
                        {ms.title}
                      </h3>
                      <p className="text-xs text-[#5A5960] leading-relaxed">
                        {ms.desc}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-5 pt-3 border-t border-[#EFE8DA] flex items-center justify-between text-[11px] text-[#8C6212] font-semibold">
                      <span>Era 0{idx + 1} of 04</span>
                      <span className="text-[#C5A059] group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
