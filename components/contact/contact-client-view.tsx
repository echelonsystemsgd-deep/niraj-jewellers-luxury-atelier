"use client";

import { useState } from "react";
import { SubpageNav } from "@/components/header/subpage-nav";
import { Footer } from "@/components/footer/footer";
import { MessageCircle, Phone, Mail, MapPin, Sparkles, Navigation, Send, Check } from "lucide-react";
import {
  NIRAJ_DISPLAY_PHONE,
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
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col">
      <SubpageNav currentTitle="Direct Contact" />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Subpage Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Master Jeweller Direct Channels</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight max-w-4xl mx-auto">
            Direct Atelier Consultation
          </h1>
          <p className="text-sm sm:text-base text-platinum-muted max-w-2xl mx-auto leading-relaxed">
            Speak directly with Master Jeweller Viky. No sales reps, no call centers — direct goldsmith advice on custom bridal suites, wholesale bullion spot rates, and same-day workshop repairs.
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
                  customNote: "Hello Viky, I am reaching out to discuss a consultation.",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 rounded-2xl bg-atelier border border-whatsapp/40 hover:border-whatsapp text-left block transition-all shadow-lg group hover:scale-[1.01]"
              >
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-whatsapp/20 text-whatsapp">
                      <MessageCircle className="w-5 h-5 fill-whatsapp text-transparent" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-whatsapp font-bold block">
                        VIP WhatsApp Line
                      </span>
                      <span className="font-mono text-base font-bold text-white">
                        {NIRAJ_DISPLAY_PHONE}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gold-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Message →
                  </span>
                </div>
                <p className="text-xs text-platinum-muted mt-2">
                  Send reference photos, ask for live gold bullion rates, or get immediate goldsmith feedback.
                </p>
              </a>

              {/* Telephone Card */}
              <a
                href={`tel:+${NIRAJ_DISPLAY_PHONE.replace(/[^0-9]/g, "")}`}
                className="p-5 sm:p-6 rounded-2xl bg-atelier border border-atelier-border hover:border-gold-500/40 text-left block transition-all shadow-lg group"
              >
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
                        Workshop Telephone
                      </span>
                      <span className="font-mono text-base font-bold text-white">
                        {NIRAJ_DISPLAY_PHONE}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-platinum-muted group-hover:text-white transition-colors">
                    Call Now →
                  </span>
                </div>
                <p className="text-xs text-platinum-muted mt-2">
                  Speak with our Hayes showroom bench directly during business hours.
                </p>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${NIRAJ_EMAIL}`}
                className="p-5 sm:p-6 rounded-2xl bg-atelier border border-atelier-border hover:border-gold-500/40 text-left block transition-all shadow-lg group"
              >
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
                        Official Email
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold text-white truncate block max-w-[220px] sm:max-w-none">
                        {NIRAJ_EMAIL}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-platinum-muted group-hover:text-white transition-colors">
                    Email →
                  </span>
                </div>
                <p className="text-xs text-platinum-muted mt-2">
                  For corporate commissions, bullion invoices, and detailed design briefs.
                </p>
              </a>

              {/* Physical Location Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-atelier border border-atelier-border text-left space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
                      Hayes Flagship Showroom
                    </span>
                    <p className="text-sm font-medium text-white mt-1">
                      {NIRAJ_SHOWROOM_ADDRESS}
                    </p>
                    <p className="text-xs text-platinum-muted mt-0.5">
                      Mon: 12:00–17:00 | Tue–Sat: 11:00–17:00 | Sun: Closed
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={NIRAJ_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-obsidian font-bold text-xs uppercase tracking-wide transition-all shadow-md w-full justify-center"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Registered Corporate Badges */}
              <div className="p-4 rounded-xl bg-obsidian border border-zinc-800 text-[11px] text-zinc-500 space-y-1">
                <div>
                  Company Reg: <span className="text-zinc-300 font-mono">{NIRAJ_COMPANY_REG}</span> (Shiva Technology Ltd)
                </div>
                <div>
                  UK VAT Reg No: <span className="text-gold-400/90 font-mono font-medium">{NIRAJ_VAT_NUMBER}</span>
                </div>
                <div>Official UK Assay Office Goldsmith Sponsor Mark Registered</div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Inquiry Form */}
            <div className="lg:col-span-7 bg-atelier p-6 sm:p-8 rounded-2xl border border-atelier-border shadow-2xl">
              <div className="space-y-2 mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                  Send an Atelier Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-platinum-muted">
                  Fill in your details below. Your request compiles instantly and routes directly to Viky on WhatsApp for rapid confirmation.
                </p>
              </div>

              {sent ? (
                <div className="p-8 rounded-xl bg-obsidian border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-white">Inquiry Compiled!</h4>
                  <p className="text-xs text-platinum-muted max-w-md mx-auto">
                    Your consultation request has been prepared. WhatsApp will open with your pre-filled inquiry to connect with Viky.
                  </p>
                  <a
                    href={whatsappDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-whatsapp text-black font-bold text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
                    <span>Open WhatsApp Chat Directly</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-zinc-400 font-medium block">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ananya Patel"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian border border-atelier-border text-white text-xs focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-zinc-400 font-medium block">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +44 7900 123456"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian border border-atelier-border text-white text-xs focus:outline-none focus:border-gold-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-400 font-medium block">Consultation Interest</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian border border-atelier-border text-white text-xs focus:outline-none focus:border-gold-500"
                    >
                      <option value="Bespoke Bridal Commission">Bespoke Bridal Suite (22ct / Polki / Kundan)</option>
                      <option value="Engagement Ring Consultation">Custom Solitaire Engagement Ring &amp; CAD</option>
                      <option value="Gold Bullion Buying/Selling">24ct / 22ct Investment Bullion Trade</option>
                      <option value="Same-Day Jewellery Repair">In-House Repair / Ring Resizing</option>
                      <option value="Scrap Gold Trade-In">Scrap Gold Trade-In Valuation</option>
                      <option value="General Showroom Inquiry">General Showroom Viewing</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-400 font-medium block">Message / Piece Specifications</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell Viky about your target budget, desired gold carat (22ct/18ct), timeline, or diamond preferences..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-obsidian border border-atelier-border text-white text-xs focus:outline-none focus:border-gold-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-obsidian font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 text-obsidian" />
                    <span>Send Consultation Request to Viky</span>
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center pt-2">
                    Direct workshop response guaranteed within 15 minutes during showroom hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
