"use client";

import { useState } from "react";
import Link from "next/link";
import { AtelierNavbar } from "@/components/atelier/AtelierNavbar";
import { Footer } from "@/components/footer/footer";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Car,
  Train,
  Navigation,
  Check,
  Instagram,
  Facebook,
  ShieldCheck,
} from "lucide-react";
import {
  NIRAJ_LANDLINE_PHONE,
  NIRAJ_MOBILE_PHONE,
  NIRAJ_EMAIL,
  NIRAJ_SHOWROOM_ADDRESS,
  NIRAJ_MAPS_LINK,
  NIRAJ_VAT_NUMBER,
  NIRAJ_COMPANY_REG,
  NIRAJ_FACEBOOK_URL,
  buildWhatsAppLink,
} from "@/lib/whatsapp";
import { ShowroomStatusBadge } from "@/components/header/showroom-status";

export function ContactClientView() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Bespoke Bridal Commission");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const whatsappDirectLink = buildWhatsAppLink({
    source: "contact_page_form",
    clientName: name,
    visitPurpose: service,
    customNote: `Phone: ${phone}. Message: ${message}`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.open(whatsappDirectLink, "_blank");
  };

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
                  Direct Contact &amp; Atelier Concierge
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#996515] block mb-3">
                [ 00 / DIRECT GOLDSMITH CHANNELS ]
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] font-normal tracking-tight leading-[1.1] mb-5">
                Direct Atelier Consultation
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-[#8C6212] mb-4">
                Speak directly with our master goldsmiths in Hayes.
              </p>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Connect directly with our workshop team. No commission sales staff and no call centers: get direct craft guidance on bespoke bridal suites, London Assay hallmarks, live gold bullion rates, and same-day laser repairs.
              </p>
            </div>
          </div>
        </header>

        {/* Balanced 2-Column Section to Eliminate Whitespace Voids */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Consultation Request Form + Operating Hours Plaque */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white border border-[#EAE6DF] p-6 sm:p-8">
                <div className="mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#996515] block mb-1">
                    [ 01 / APPOINTMENT &amp; BESPOKE INQUIRY ]
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#141416] font-normal">
                    Request an Atelier Consultation
                  </h2>
                  <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                    Fill out this brief form to launch your pre-formatted enquiry directly into our WhatsApp concierge.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141416] mb-1.5 font-semibold">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#EAE6DF] focus:border-[#996515] focus:outline-none text-xs text-[#141416] placeholder-[#78716C] transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141416] mb-1.5 font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 7..."
                        className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#EAE6DF] focus:border-[#996515] focus:outline-none text-xs text-[#141416] placeholder-[#78716C] transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#141416] mb-1.5 font-semibold">
                      Service Required
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#EAE6DF] focus:border-[#996515] focus:outline-none text-xs text-[#141416] transition-colors font-mono"
                    >
                      <option value="Bespoke Bridal Commission">Bespoke Bridal Suite (22ct / Polki)</option>
                      <option value="Custom Diamond Engagement Ring">Custom Diamond Engagement Ring (GIA / IGI)</option>
                      <option value="In-House Jewellery Repair">Same-Day In-House Jewellery Repair</option>
                      <option value="Gold Bullion & Investment">Gold Bullion Investment (24ct / 22ct)</option>
                      <option value="Scrap Gold Cash Valuation">Scrap Gold Melting &amp; Trade-In</option>
                      <option value="Showroom Walk-In Consultation">Showroom Walk-In Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#141416] mb-1.5 font-semibold">
                      Project Details or Questions
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about the design, estimated timeline, gold weight, or gemstones you have in mind..."
                      className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#EAE6DF] focus:border-[#996515] focus:outline-none text-xs text-[#141416] placeholder-[#78716C] transition-colors font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#25D366] hover:bg-[#1ebd59] text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                    <span>Send Enquiry via WhatsApp Concierge</span>
                  </button>

                  {sent && (
                    <p className="text-xs text-center text-emerald-800 font-mono font-medium flex items-center justify-center gap-1.5 pt-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp launched with your inquiry details.</span>
                    </p>
                  )}
                </form>
              </div>

              {/* Operating Hours Plaque Underneath Form to Balance Whitespace */}
              <div className="bg-white border border-[#EAE6DF] p-6 sm:p-8">
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE6DF] mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#996515]" />
                    <h3 className="font-serif text-lg text-[#141416]">
                      Workshop Hours &amp; Access
                    </h3>
                  </div>
                  <ShowroomStatusBadge />
                </div>

                <div className="space-y-2 text-xs font-mono text-[#57534E]">
                  <div className="flex justify-between py-1.5 border-b border-[#FAF8F5]">
                    <span className="font-medium text-[#141416]">Monday</span>
                    <span className="text-[#8C6212]">12:00 to 17:00</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#FAF8F5]">
                    <span className="font-medium text-[#141416]">Tuesday to Saturday</span>
                    <span className="text-[#8C6212]">11:00 to 17:30</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#78716C]">Sunday</span>
                    <span className="text-[#78716C]">Closed (Open Festive Sundays)</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#EAE6DF] flex items-center gap-2 text-xs text-[#57534E]">
                  <ShieldCheck className="w-4 h-4 text-[#996515] shrink-0" />
                  <span>Walk-ins welcome: no appointment required for repairs or bullion.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Google Map + Contact Touchpoints Grid */}
            <div className="lg:col-span-6 space-y-6">
              {/* Embedded Google Map */}
              <div className="bg-white border border-[#EAE6DF] overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-[#EAE6DF] flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#996515] block">
                      FLAGSHIP SHOWROOM &amp; WORKSHOP
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#141416] font-normal mt-0.5">
                      136 Uxbridge Road, Hayes UB4 0JH
                    </h3>
                  </div>
                  <a
                    href={NIRAJ_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#996515] uppercase tracking-wider font-semibold hover:text-[#141416]"
                  >
                    <span>Get Directions</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="relative w-full aspect-[16/10] min-h-[300px] bg-[#F5F2EB]">
                  <iframe
                    title="Niraj Jewellers Hayes Showroom Map"
                    src="https://maps.google.com/maps?q=136+Uxbridge+Road,+Hayes,+UB4+0JH,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#EAE6DF] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2 text-[#57534E]">
                    <Car className="w-4 h-4 text-[#996515] shrink-0 mt-0.5" />
                    <span>Available roadside customer parking on Uxbridge Road.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#57534E]">
                    <Train className="w-4 h-4 text-[#996515] shrink-0 mt-0.5" />
                    <span>Elizabeth Line: Hayes &amp; Harlington station (direct buses 427, 207).</span>
                  </div>
                </div>
              </div>

              {/* Direct Channels Hairline Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#EAE6DF] border border-[#EAE6DF]">
                {/* WhatsApp */}
                <a
                  href={buildWhatsAppLink({
                    source: "contact_page_card",
                    customNote: "Hi Niraj Jewellers team, I am reaching out to discuss a bespoke jewellery consultation.",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 hover:bg-[#FAF8F5] transition-colors block group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#25D366] font-semibold">
                      DIRECT WHATSAPP
                    </span>
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div className="font-mono text-sm font-semibold text-[#141416] group-hover:text-[#996515]">
                    {NIRAJ_MOBILE_PHONE}
                  </div>
                  <p className="text-[11px] text-[#78716C] mt-1">
                    Immediate goldsmith feedback &amp; photo estimates.
                  </p>
                </a>

                {/* Landline */}
                <a
                  href={`tel:${NIRAJ_LANDLINE_PHONE.replace(/\s+/g, "")}`}
                  className="bg-white p-5 hover:bg-[#FAF8F5] transition-colors block group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C6212] font-semibold">
                      SHOWROOM LANDLINE
                    </span>
                    <Phone className="w-4 h-4 text-[#996515]" />
                  </div>
                  <div className="font-mono text-sm font-semibold text-[#141416] group-hover:text-[#996515]">
                    {NIRAJ_LANDLINE_PHONE}
                  </div>
                  <p className="text-[11px] text-[#78716C] mt-1">
                    Direct showroom desk line during open hours.
                  </p>
                </a>

                {/* Mobile / Workshop */}
                <a
                  href={`tel:${NIRAJ_MOBILE_PHONE.replace(/\s+/g, "")}`}
                  className="bg-white p-5 hover:bg-[#FAF8F5] transition-colors block group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C6212] font-semibold">
                      WORKSHOP LINE
                    </span>
                    <Phone className="w-4 h-4 text-[#996515]" />
                  </div>
                  <div className="font-mono text-sm font-semibold text-[#141416] group-hover:text-[#996515]">
                    {NIRAJ_MOBILE_PHONE}
                  </div>
                  <p className="text-[11px] text-[#78716C] mt-1">
                    Live goldsmith commission and repair status.
                  </p>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${NIRAJ_EMAIL}`}
                  className="bg-white p-5 hover:bg-[#FAF8F5] transition-colors block group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C6212] font-semibold">
                      DIRECT EMAIL
                    </span>
                    <Mail className="w-4 h-4 text-[#996515]" />
                  </div>
                  <div className="font-mono text-xs font-semibold text-[#141416] group-hover:text-[#996515] truncate">
                    {NIRAJ_EMAIL}
                  </div>
                  <p className="text-[11px] text-[#78716C] mt-1">
                    CAD files, appraisals &amp; formal inquiries.
                  </p>
                </a>
              </div>

              {/* Social Channels Hairline Plaque */}
              <div className="bg-white border border-[#EAE6DF] p-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#78716C] block mb-3">
                  OFFICIAL WORKSHOP CHANNELS
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <a
                    href="https://www.instagram.com/nirajjewellersltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-[#EAE6DF] hover:border-[#996515] transition-colors text-[#141416]"
                  >
                    Instagram
                  </a>
                  <a
                    href={NIRAJ_FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-[#EAE6DF] hover:border-[#996515] transition-colors text-[#141416]"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.tiktok.com/@nirajjewellersltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-[#EAE6DF] hover:border-[#996515] transition-colors text-[#141416]"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
