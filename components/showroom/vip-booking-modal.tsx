"use client";

import { useState } from "react";
import { X, Calendar, MessageCircle, Sparkles, MapPin, Clock, Check } from "lucide-react";
import { buildWhatsAppLink, NIRAJ_DISPLAY_PHONE, NIRAJ_SHOWROOM_ADDRESS } from "@/lib/whatsapp";
import { useScrollLock } from "@/lib/use-scroll-lock";

interface VipBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VipBookingModal({ isOpen, onClose }: VipBookingModalProps) {
  useScrollLock(isOpen);
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("12:00 PM");
  const [purpose, setPurpose] = useState("Bespoke Bridal Suite Consultation");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const consultationPurposes = [
    "Bespoke Bridal Suite Consultation",
    "Custom Engagement Ring & CAD Modeling",
    "24ct / 22ct Gold Bullion Buying or Selling",
    "Same-Day Goldsmith Repair / Resizing",
    "Heirloom Valuation & Gold Purity Testing",
  ];

  const timeSlots = ["11:30 AM", "12:30 PM", "1:30 PM", "2:30 PM", "3:30 PM", "4:30 PM"];

  const whatsappBookingLink = buildWhatsAppLink({
    source: "vip_viewing_modal",
    clientName,
    visitDate: `${visitDate} at ${timeSlot}`,
    visitPurpose: purpose,
    customNote: `Contact Number: ${phone}. I would like to reserve a private viewing session at your Hayes showroom.`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Auto redirect after short delay or direct button
    window.open(whatsappBookingLink, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-obsidian border border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-platinum-muted hover:text-white bg-atelier border border-atelier-border transition-colors touch-target flex items-center justify-center"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-950/60 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Atelier Appointment</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            Book a VIP Viewing with Viky
          </h3>
          <p className="text-xs text-platinum-muted max-w-sm mx-auto">
            Reserve dedicated one-on-one time at our Hayes showroom. Inspect loose diamonds, try on 22ct bridal suites, or discuss custom goldsmithing.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-atelier border border-emerald-500/40 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl text-white">Appointment Details Prepared!</h4>
            <p className="text-xs text-platinum-muted">
              We have compiled your appointment request. WhatsApp will open directly to confirm the exact time with Viky.
            </p>
            <a
              href={whatsappBookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-whatsapp hover:bg-whatsapp-dark text-black font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
              <span>Confirm on WhatsApp ({NIRAJ_DISPLAY_PHONE})</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-platinum-muted font-medium">Your Name *</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Simran Kaur"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-atelier border border-atelier-border text-white text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-platinum-muted font-medium">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+44 7..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-atelier border border-atelier-border text-white text-xs focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            {/* Purpose */}
            <div className="space-y-1">
              <label className="text-xs text-platinum-muted font-medium">Consultation Purpose</label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-atelier border border-atelier-border text-white text-xs focus:outline-none focus:border-gold-500"
              >
                {consultationPurposes.map((p) => (
                  <option key={p} value={p} className="bg-obsidian text-white">
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-platinum-muted font-medium">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-atelier border border-atelier-border text-white text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-platinum-muted font-medium">Preferred Time Slot</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-atelier border border-atelier-border text-white text-xs focus:outline-none focus:border-gold-500"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-obsidian text-white">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-obsidian font-bold text-sm uppercase tracking-wider shadow-xl shadow-gold-500/20 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian text-gold-500" />
              <span>Request Private Viewing via WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-platinum-muted/80 pt-1">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>{NIRAJ_SHOWROOM_ADDRESS}</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
