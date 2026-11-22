import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AtelierNavbar } from "@/components/atelier/AtelierNavbar";
import { Footer } from "@/components/footer/footer";
import { 
  ShieldCheck, 
  Gem, 
  Hammer, 
  Scale, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2,
  Check
} from "lucide-react";
import { NIRAJ_UK_PHONE, NIRAJ_SHOWROOM_ADDRESS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us | Niraj Jewellers Ltd — Hayes, London Goldsmith Heritage Since 1984",
  description:
    "Discover the 42-year workshop lineage of Niraj Jewellers Ltd. London's premier 22ct South Asian bridal goldsmith atelier and direct bullion dealer on Uxbridge Road, Hayes.",
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
  const whatsappUrl = `https://api.whatsapp.com/send?phone=447955565137&text=${encodeURIComponent(
    "Hello Niraj Jewellers workshop team, I was reading your About Us page and would like to learn more about visiting your Hayes showroom or commissioning a bespoke piece."
  )}`;

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
      num: "01",
      icon: Hammer,
      title: "In-House Workshop Exclusivity",
      subtitle: "Zero Middleman Markups",
      description: "Unlike high-street retailers who outsource casting to mass factories, our master goldsmiths forge, set, and polish every piece inside our Hayes benches.",
      spec: "100% PREMISES CRAFT",
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "London Assay Leopard's Head",
      subtitle: "British Legal Guarantee",
      description: "Every single creation in 22ct (916) and 18ct (750) gold is independently tested and struck at Goldsmiths' Hall by the UK London Assay Office.",
      spec: "HALLMARKING ACT 1973",
    },
    {
      num: "03",
      icon: Scale,
      title: "Trade-Approved Bullion Scales",
      subtitle: "Full Weight Transparency",
      description: "We weigh gold directly in front of you on government-stamped precision Class II balances calibrated to 0.01g, referencing live spot rates.",
      spec: "CALIBRATED TO GRAIN",
    },
    {
      num: "04",
      icon: Gem,
      title: "Syndicate Polki & Natural Gems",
      subtitle: "Uncut Certified Stones",
      description: "From unheated Burmese rubies and carved Zambian emeralds to certified natural diamonds, every stone is handset in pure Kundan 24ct foil.",
      spec: "CERTIFIED NATURAL",
    },
  ];

  const milestones = [
    {
      year: "1984",
      era: "Founding Era",
      title: "Founding the Hayes Bench",
      desc: "Niraj Jewellers Ltd opened at 136 Uxbridge Road with a traditional anvil and torch bench to craft genuine solid 22ct bridal gold for London families.",
      image: "/images/workshop/goldsmith-bench-order-book-22ct.jpg",
      imageAlt: "1984 Founding Hayes goldsmith bench and order ledger",
      tag: "EST. 1984 BENCH",
    },
    {
      year: "1998",
      era: "Laser Expansion",
      title: "In-House Laser Technology",
      desc: "Integrated micro-pulse laser welding and ultrasonic restoration, bringing end-to-end manufacturing and same-day sizing in-house with zero outsourcing delays.",
      image: "/images/workshop/workshop-bench-velvet-trays.jpg",
      imageAlt: "Hayes atelier workshop consultation trays and benchcraft",
      tag: "SAME-DAY REPAIRS",
    },
    {
      year: "2012",
      era: "Digital Precision",
      title: "3D CAD & Resin Prototyping",
      desc: "Integrated advanced CAD modeling, allowing bridal couples to inspect photorealistic 360-degree renders and high-density resin prototypes before casting.",
      image: "/images/cad/bespoke-evil-eye-sapphire-cad.jpg",
      imageAlt: "Photorealistic 3D CAD jewellery rendering",
      tag: "3D CAD MODELING",
    },
    {
      year: "Today",
      era: "Digital Flagship",
      title: "London's Premier 22ct Destination",
      desc: "Over 42 years of continuous family heritage, thousands of bespoke heirloom commissions, and an undisputed reputation as direct bridal masters.",
      image: "/images/workshop/22ct-gold-filigree-bridal-suite.jpg",
      imageAlt: "Handcrafted 22ct gold filigree bridal suite",
      tag: "DIRECT ATELIER ACCESS",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141416] selection:bg-[#C6A75E]/30 selection:text-[#141416]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Unified Digital Flagship Navigation */}
      <AtelierNavbar />

      <main className="pt-24 sm:pt-28 pb-20 sm:pb-28">
        {/* Editorial Hero Section */}
        <section className="w-full border-b border-[#E7E2DA] pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] text-[#8C6212] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C6A75E]"></span>
                <span>GENERATIONAL GOLDSMITH LINEAGE · EST. 1984</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#141416] tracking-tight leading-[1.15]">
                Generational Goldsmithing on Uxbridge Road
              </h1>

              <p className="font-sans text-xs sm:text-sm md:text-base text-[#57534E] leading-relaxed max-w-2xl mx-auto">
                Four decades of authentic British and South Asian master benchwork. Every bridal choker, kada, and solitaire is born on our own Hayes benches with zero high-street retail markups.
              </p>

              {/* Dual Action CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99] cursor-pointer min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-white shrink-0" />
                  <span>WHATSAPP WORKSHOP TEAM</span>
                </a>

                <Link
                  href="/collections"
                  className="px-6 py-3.5 bg-[#141416] hover:bg-[#C6A75E] text-[#FAF9F5] hover:text-[#141416] font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-all shadow-xs min-h-[44px] group"
                >
                  <span>EXPLORE 54-PIECE VAULT</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* 4 Architectural Trust Badges */}
              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-3xl mx-auto font-sans text-xs text-[#7A705E] uppercase tracking-wider">
                <div className="p-3 bg-white border border-[#E7E2DA] flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]"></span>
                  <span className="text-[#141416] font-semibold">1984 ESTABLISHED</span>
                </div>
                <div className="p-3 bg-white border border-[#E7E2DA] flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]"></span>
                  <span className="text-[#141416] font-semibold">42-YEAR LINEAGE</span>
                </div>
                <div className="p-3 bg-white border border-[#E7E2DA] flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]"></span>
                  <span className="text-[#141416] font-semibold">100% IN-HOUSE</span>
                </div>
                <div className="p-3 bg-white border border-[#E7E2DA] flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]"></span>
                  <span className="text-[#141416] font-semibold">LONDON ASSAY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Direct Workshop Advantage: Authentic Proof & Differentiators */}
        <section className="w-full border-b border-[#E7E2DA] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Workshop Photography & Evidence */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[4/3] w-full border border-[#E7E2DA] bg-[#0E0D0C] overflow-hidden">
                  <Image
                    src="/images/workshop/goldsmith-bench-order-book-22ct.jpg"
                    alt="Authentic Niraj Jewellers Hayes Goldsmith Bench"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#141416]/90 backdrop-blur-md border border-[#2C2825] flex items-center justify-between text-[#FAF9F5] font-sans text-xs tracking-wider uppercase">
                    <span>HAYES BENCH · 136 UXBRIDGE ROAD</span>
                    <span className="text-[#C6A75E] font-semibold">HISTORIC BENCH LEDGER</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] border border-[#E7E2DA] bg-[#F6F3ED] overflow-hidden">
                    <Image
                      src="/images/workshop/22ct-gold-filigree-bridal-suite.jpg"
                      alt="22ct Gold Filigree Craftsmanship"
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#141416]/90 text-[10px] font-sans text-[#FAF9F5] uppercase">
                      Solid 22ct Filigree
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] border border-[#E7E2DA] bg-[#F6F3ED] overflow-hidden">
                    <Image
                      src="/images/workshop/workshop-bench-velvet-trays.jpg"
                      alt="Velvet Display Trays on Workshop Bench"
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#141416]/90 text-[10px] font-sans text-[#FAF9F5] uppercase">
                      Client Viewing Trays
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Authentic Differentiators */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8C6212] block mb-2 font-semibold">
                    THE DIRECT WORKSHOP ADVANTAGE
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight">
                    Why Generations of Families Choose Niraj Jewellers
                  </h2>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  When Niraj Jewellers opened in 1984 on Uxbridge Road in Hayes, the foundation was straightforward: provide families with authentic, uncompromised 22ct (916) gold craftsmanship, crafted on-site with total transparency and zero high-street markups.
                </p>

                {/* 4 Distinct Concrete Truths */}
                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-white border border-[#E7E2DA] flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#C6A75E]/10 border border-[#C6A75E]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#C6A75E]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-[#141416]">
                        Zero Third-Party Brokerage
                      </h3>
                      <p className="font-sans text-xs text-[#57534E] mt-0.5 leading-relaxed">
                        Your jewellery never leaves our secure premises. Every sizing, setting, and repair is executed right behind our Hayes showroom counter.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E7E2DA] flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#C6A75E]/10 border border-[#C6A75E]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#C6A75E]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-[#141416]">
                        Live Trade Digital Balances
                      </h3>
                      <p className="font-sans text-xs text-[#57534E] mt-0.5 leading-relaxed">
                        We test and weigh ancestral gold in front of you on certified Class II electronic scales, applying live LBMA bullion rates with complete honesty.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E7E2DA] flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#C6A75E]/10 border border-[#C6A75E]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#C6A75E]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-[#141416]">
                        Independent London Assay Office Stamping
                      </h3>
                      <p className="font-sans text-xs text-[#57534E] mt-0.5 leading-relaxed">
                        We never self-certify. Every piece complies with the British Hallmarking Act 1973 and carries the iconic London Leopard&apos;s Head stamp.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E7E2DA] flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#C6A75E]/10 border border-[#C6A75E]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#C6A75E]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-[#141416]">
                        Deliberate Solid Mass
                      </h3>
                      <p className="font-sans text-xs text-[#57534E] mt-0.5 leading-relaxed">
                        Commercial fast-fashion jewellery relies on hollow stampings. Niraj Jewellers casts solid walls engineered for 50+ years of ceremonial wear.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Four Pillars of Atelier Excellence */}
        <section className="w-full border-b border-[#E7E2DA] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E2DA] pb-8 mb-12 gap-6">
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8C6212] block mb-2 font-semibold">
                  METALLURGICAL PURITY &amp; STANDARDS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight">
                  The Four Pillars of Niraj Jewellers
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed">
                Every bespoke piece leaving our Hayes atelier adheres to an uncompromising standard of metallurgical purity, workshop security, and physical verification.
              </p>
            </div>

            {/* 4-Column Hairline Architectural Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E7E2DA]">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.num}
                    className="border-r border-b border-[#E7E2DA] bg-white p-6 sm:p-7 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between font-sans text-xs text-[#7A705E] mb-4">
                        <span className="font-semibold text-xs text-[#141416]">Pillar {pillar.num}</span>
                        <span className="text-[#8C6212] text-[10px] tracking-wider uppercase font-semibold">
                          {pillar.spec}
                        </span>
                      </div>

                      <div className="w-10 h-10 border border-[#E7E2DA] bg-[#FAF9F5] flex items-center justify-center text-[#C6A75E] mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="font-sans text-xs tracking-wider uppercase text-[#8C6212] mb-1 font-semibold">
                        {pillar.subtitle}
                      </div>

                      <h3 className="font-serif text-lg font-semibold text-[#141416] mb-2 leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="font-sans text-xs text-[#57534E] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E7E2DA] flex items-center gap-1.5 font-sans text-xs text-[#8C6212] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A75E]" />
                      <span>ATELIER CERTIFIED</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Generational Journey Timeline: Visual Track with Real Workshop Photography */}
        <section className="w-full border-b border-[#E7E2DA] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E7E2DA] pb-8 mb-12 gap-6">
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8C6212] block mb-2 font-semibold">
                  CHRONOLOGICAL WORKSHOP TIMELINE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#141416] tracking-tight">
                  Four Decades of Goldsmithing Milestones
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed">
                Trace the evolution of our Hayes atelier from hand-forged 1984 origins to 3D CAD bespoke technology.
              </p>
            </div>

            {/* 4-Column Timeline Track */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E7E2DA]">
              {milestones.map((ms, idx) => (
                <div
                  key={ms.year}
                  className="border-r border-b border-[#E7E2DA] bg-white p-6 sm:p-7 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors"
                >
                  <div>
                    {/* Visual Card Top */}
                    <div className="flex items-center justify-between font-sans text-xs text-[#7A705E] mb-4">
                      <span className="font-serif text-2xl font-bold text-[#141416]">
                        {ms.year}
                      </span>
                      <span className="text-[#8C6212] text-[10px] tracking-wider uppercase font-semibold">
                        {ms.tag}
                      </span>
                    </div>

                    {/* Milestone Archival Image */}
                    <div className="relative aspect-[16/11] w-full border border-[#E7E2DA] bg-[#0E0D0C] overflow-hidden mb-5">
                      <Image
                        src={ms.image}
                        alt={ms.imageAlt}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    <div className="font-sans text-xs tracking-wider uppercase text-[#7A705E] mb-1 font-semibold">
                      {ms.era}
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-[#141416] mb-2 leading-snug">
                      {ms.title}
                    </h3>

                    <p className="font-sans text-xs text-[#57534E] leading-relaxed">
                      {ms.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E7E2DA] flex items-center justify-between font-sans text-xs text-[#7A705E]">
                    <span>Era 0{idx + 1} of 04</span>
                    <span className="text-[#8C6212] font-semibold">Provenance &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showroom Consultation & Bench Invitation */}
        <section className="w-full py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-[#141416] bg-[#141416] p-8 sm:p-12 text-[#FAF9F5] text-center space-y-6 rounded-2xl shadow-sm">
              <div className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] text-[#C6A75E] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>136 UXBRIDGE ROAD · HAYES · MIDDLESEX UB4 0JH</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#FAF9F5] font-semibold">
                Experience Direct Workshop Access in Person
              </h2>

              <p className="font-sans text-xs sm:text-sm text-[#A89F91] max-w-xl mx-auto leading-relaxed">
                Whether you are commissioning a bespoke bridal suite, inspecting certified diamonds, or seeking a same-day ring resize, our master goldsmiths welcome you to our Hayes showroom.
              </p>

              {/* Showroom Logistics Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto font-sans text-xs text-[#A89F91] text-left pt-2">
                <div className="p-4 border border-[#2C2825] bg-[#1A1816]">
                  <div className="text-[#C6A75E] text-xs uppercase font-semibold mb-1">OPENING HOURS</div>
                  <div className="text-[#FAF9F5]">Mon 12:00 to 17:00</div>
                  <div className="text-[#FAF9F5]">Tue to Sat 11:00 to 17:30</div>
                </div>
                <div className="p-4 border border-[#2C2825] bg-[#1A1816]">
                  <div className="text-[#C6A75E] text-xs uppercase font-semibold mb-1">PARKING &amp; ACCESS</div>
                  <div className="text-[#FAF9F5]">Available roadside customer parking</div>
                  <div className="text-[#A89F91] text-xs">12 Mins from Elizabeth Line</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99] cursor-pointer min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-white shrink-0" />
                  <span>CHAT WITH WORKSHOP CONCIERGE</span>
                </a>

                <a
                  href="tel:02085739323"
                  className="px-6 py-3.5 border border-[#FAF9F5] bg-transparent hover:bg-white hover:text-[#141416] text-[#FAF9F5] font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-all min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL: 020 8573 9323</span>
                </a>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 border border-[#2C2825] bg-[#1A1816] hover:bg-[#2C2825] text-[#FAF9F5] font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-all min-h-[44px]"
                >
                  <span>FIND DIRECTIONS</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Official Luxury Footer */}
      <Footer />
    </div>
  );
}
