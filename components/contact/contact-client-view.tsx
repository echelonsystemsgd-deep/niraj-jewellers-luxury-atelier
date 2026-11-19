"use client";

import { useState } from "react";
import { SubpageNav } from "@/components/header/subpage-nav";
import { Footer } from "@/components/footer/footer";
import { MessageCircle, Phone, Mail, MapPin, Sparkles, Navigation, Send, Check } from "lucide-react";
import {
  NIRAJ_DISPLAY_PHONE,
  NIRAJ_UK_PHONE,
  NIRAJ_EMAIL,
  NIRAJ_SHOWROOM_ADDRESS,
  NIRAJ_MAPS_LINK,
  NIRAJ_VAT_NUMBER,
  NIRAJ_COMPANY_REG,
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
    <div className="min-h-screen bg-white text-[#141416] flex flex-col">
      <SubpageNav currentTitle="Direct Contact" />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 text-[#8C6212] text-xs uppercase tracking-widest font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
            <span>Master Goldsmith Direct Channels</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#141416] font-normal tracking-tight max-w-4xl mx-auto">
            Direct Atelier Consultation
          </h1>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            Speak directly with our Hayes goldsmiths
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] max-w-2xl mx-auto leading-relaxed">
            Speak directly with our goldsmith team. No commission sales reps, no call centers — direct craft advice on custom bridal suites, wholesale bullion rates, and same-day workshop repairs.
          </p>

          <div className="pt-2 flex justify-center">
            <ShowroomStatusBadge />
          </div>
        </header>

        {/* Contact Grid: Cards + Inquiry Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Contact Touchpoints */}
            <div className="lg:col-span-5 space-y-4">
              {/* WhatsApp Card */}
              <a
                href={buildWhatsAppLink({
                  source: "contact_page_card",
                  customNote: "Hi Niraj Jewellers team, I am reaching out to discuss a bespoke jewellery consultation.",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#25D366]/50 hover:border-[#25D366] text-left block transition-all shadow-sm hover:shadow-md group hover:scale-[1.01]"
              >
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-[#25D366]/15 text-[#128C7E]">
                      <MessageCircle className="w-5 h-5 fill-[#25D366] text-transparent" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#128C7E] font-bold block">
                        Direct WhatsApp Line
                      </span>
                      <span className="font-mono text-base font-bold text-[#141416]">
                        {NIRAJ_UK_PHONE}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#996515] font-bold group-hover:translate-x-1 transition-transform">
                    Message →
                  </span>
                </div>
                <p className="text-xs text-[#5A5960] mt-2">
                  Send reference photos, ask for live gold bullion rates, or get immediate goldsmith feedback.
                </p>
              </a>

              {/* Telephone Card */}
              <a
                href={`tel:${NIRAJ_UK_PHONE.replace(/\s+/g, "")}`}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#D4AF37] text-left block transition-all shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-[#FAF7F2] text-[#996515]">
                      <Phone className="w-5 h-5 text-[#996515]" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#8C6212] font-bold block">
                        Workshop Telephone
                      </span>
                      <span className="font-mono text-base font-bold text-[#141416]">
                        {NIRAJ_UK_PHONE}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#996515] font-bold group-hover:translate-x-1 transition-transform">
                    Call →
                  </span>
                </div>
                <p className="text-xs text-[#5A5960] mt-2">
                  Mon: 12:00–17:00 | Tue–Sat: 11:00–17:00. Direct access to our Hayes goldsmith bench.
                </p>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${NIRAJ_EMAIL}`}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#D4AF37] text-left block transition-all shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-[#FAF7F2] text-[#996515]">
                      <Mail className="w-5 h-5 text-[#996515]" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#8C6212] font-bold block">
                        Direct Email
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#141416] break-all">
                        {NIRAJ_EMAIL}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#996515] font-bold group-hover:translate-x-1 transition-transform">
                    Email →
                  </span>
                </div>
                <p className="text-xs text-[#5A5960] mt-2">
                  Send high-resolution CAD files, valuation documents, or formal commercial enquiries.
                </p>
              </a>

              {/* Address Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8] space-y-3 shadow-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#996515] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#141416]">
                      Flagship Atelier Address
                    </h3>
                    <p className="text-xs text-[#4A4A52] mt-1 leading-relaxed">
                      {NIRAJ_SHOWROOM_ADDRESS}
                    </p>
                    <p className="text-[11px] text-[#7A7880] mt-0.5">
                      Co. Reg: {NIRAJ_COMPANY_REG} • VAT: {NIRAJ_VAT_NUMBER}
                    </p>
                  </div>
                </div>

                <a
                  href={NIRAJ_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#D4AF37]/50 text-[#8C6212] font-bold text-xs uppercase tracking-wide transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#996515]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct WhatsApp Inquiry Form */}
            <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E8DEC8] shadow-sm">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold text-[#8C6212] uppercase tracking-wider block">
                  Bespoke &amp; Repair Concierge
                </span>
                <h2 className="font-serif text-2xl font-normal text-[#141416]">
                  Request an Atelier Consultation
                </h2>
                <p className="text-xs text-[#5A5960]">
                  Fill out this brief form to launch your pre-formatted enquiry directly into our WhatsApp concierge.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#141416] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DEC8] focus:border-[#996515] focus:outline-none text-xs text-[#141416] placeholder-[#A19FA8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#141416] mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DEC8] focus:border-[#996515] focus:outline-none text-xs text-[#141416] placeholder-[#A19FA8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#141416] mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DEC8] focus:border-[#996515] focus:outline-none text-xs text-[#141416] transition-colors"
                  >
                    <option value="Bespoke Bridal Commission">Bespoke Bridal Suite (22ct / Polki)</option>
                    <option value="Custom Diamond Engagement Ring">Custom Diamond Engagement Ring (GIA / IGI)</option>
                    <option value="In-House Jewellery Repair">Same-Day In-House Jewellery Repair</option>
                    <option value="Gold Bullion & Investment">Gold Bullion Investment (24ct / 22ct)</option>
                    <option value="Scrap Gold Cash Valuation">Scrap Gold Melting &amp; Trade-In</option>
                    <option value="Showroom VIP Consultation">Private Showroom Appointment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#141416] mb-1.5">
                    Project Details or Questions
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the design, estimated timeline, gold weight, or gemstones you have in mind..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DEC8] focus:border-[#996515] focus:outline-none text-xs text-[#141416] placeholder-[#A19FA8] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Send Enquiry via WhatsApp Concierge</span>
                </button>

                {sent && (
                  <p className="text-xs text-center text-emerald-700 font-semibold flex items-center justify-center gap-1.5 pt-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp launched with your inquiry details.</span>
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
