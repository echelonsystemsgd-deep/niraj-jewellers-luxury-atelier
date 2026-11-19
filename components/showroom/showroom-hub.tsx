"use client";

import { useState, useEffect } from "react";
import { MapPin, Clock, Car, Train, Phone, MessageCircle, Sparkles, Navigation, ChevronDown, ChevronUp, Mail } from "lucide-react";
import { ShowroomStatusBadge } from "@/components/header/showroom-status";
import { NIRAJ_MAPS_LINK, NIRAJ_SHOWROOM_ADDRESS, NIRAJ_DISPLAY_PHONE, NIRAJ_EMAIL, buildWhatsAppLink } from "@/lib/whatsapp";
import { getLondonCurrentDayInfo } from "@/lib/showroom-hours";

interface ShowroomHubProps {
  onOpenBookingModal: () => void;
}

export function ShowroomHub({ onOpenBookingModal }: ShowroomHubProps) {
  const [hoursOpen, setHoursOpen] = useState(true);
  const [londonInfo, setLondonInfo] = useState<{ dayName: string; formattedTime: string; dateStr: string } | null>(null);

  useEffect(() => {
    setLondonInfo(getLondonCurrentDayInfo());
    const interval = setInterval(() => {
      setLondonInfo(getLondonCurrentDayInfo());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const whatsappDirections = buildWhatsAppLink({
    source: "showroom_hub_directions",
    visitPurpose: "Showroom Visit & Directions Inquiry",
    customNote: "Hello Viky, I am planning to visit your Hayes showroom today / this week. Could you confirm if you have availability for a consultation?",
  });

  const hoursList = [
    { day: "Monday", hours: "12:00 – 17:00", note: "Afternoon workshop hours" },
    { day: "Tuesday", hours: "11:00 – 17:00", note: "Full atelier bench access" },
    { day: "Wednesday", hours: "11:00 – 17:00", note: "Full atelier bench access" },
    { day: "Thursday", hours: "11:00 – 17:00", note: "Full atelier bench access" },
    { day: "Friday", hours: "11:00 – 17:00", note: "Full atelier bench access" },
    { day: "Saturday", hours: "11:00 – 17:00", note: "Weekend bridal consultations" },
    { day: "Sunday", hours: "Closed", note: "Open select Sundays prior to Diwali, Karva Chauth & Christmas" },
  ];

  return (
    <section id="showroom" className="py-20 sm:py-28 bg-atelier-light border-y border-atelier-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>Flagship Hayes Atelier &amp; Bullion Showroom</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Visit Us on Uxbridge Road
          </h2>
          <p className="text-sm sm:text-base text-platinum-muted">
            Located in the heart of Hayes, West London. Experience direct workshop goldsmithing, certified diamond testing, and live bullion transactions.
          </p>
        </div>

        {/* Showroom Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location & Live Status Card */}
          <div className="lg:col-span-7 bg-atelier p-7 sm:p-8 rounded-2xl border border-atelier-border shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-atelier-border">
              <div>
                <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider block">
                  Showroom Address
                </span>
                <h3 className="font-serif text-2xl font-medium text-white mt-0.5">
                  Niraj Jewellers
                </h3>
              </div>
              <ShowroomStatusBadge />
            </div>

            {/* Address & Direct Map Launcher */}
            <div className="p-4 rounded-xl bg-obsidian border border-atelier-border space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">
                    {NIRAJ_SHOWROOM_ADDRESS}
                  </p>
                  <p className="text-xs text-platinum-muted mt-0.5">
                    Hayes, Middlesex (M4 / A40 corridor, West London)
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={NIRAJ_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-obsidian font-bold text-xs uppercase tracking-wide transition-all shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href="tel:+447955565137"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-atelier hover:bg-atelier-light border border-atelier-border text-platinum hover:text-white text-xs font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-platinum" />
                  <span>Call {NIRAJ_DISPLAY_PHONE}</span>
                </a>

                <a
                  href={`mailto:${NIRAJ_EMAIL}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-atelier hover:bg-atelier-light border border-atelier-border text-platinum hover:text-white text-xs font-medium transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                  <span>{NIRAJ_EMAIL}</span>
                </a>
              </div>
            </div>

            {/* Nearby Logistics & Parking */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-obsidian border border-atelier-border space-y-1.5">
                <div className="flex items-center gap-2 text-gold-400 font-semibold">
                  <Car className="w-4 h-4" />
                  <span>Roadside Parking</span>
                </div>
                <p className="text-platinum-muted leading-relaxed">
                  Convenient roadside customer parking bays available directly outside and along Uxbridge Road.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian border border-atelier-border space-y-1.5">
                <div className="flex items-center gap-2 text-gold-400 font-semibold">
                  <Train className="w-4 h-4" />
                  <span>Public Transport</span>
                </div>
                <p className="text-platinum-muted leading-relaxed">
                  Minutes from <strong>Hayes &amp; Harlington</strong> (Elizabeth Line) and direct bus routes 427, 207, 607 stopping near the showroom.
                </p>
              </div>
            </div>

            {/* VIP Viewing CTA Bar */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBookingModal}
                className="w-full sm:w-1/2 py-3.5 rounded-xl bg-gold-950/60 hover:bg-gold-950/90 border border-gold-500/50 text-gold-300 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Reserve Private Viewing</span>
              </button>

              <a
                href={whatsappDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3.5 rounded-xl bg-whatsapp hover:bg-whatsapp-dark text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-black text-whatsapp" />
                <span>WhatsApp Ahead of Arrival</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Operating Hours Accordion */}
          <div className="lg:col-span-5 bg-atelier p-7 sm:p-8 rounded-2xl border border-atelier-border shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-atelier-border">
              <div className="flex items-center gap-2.5 text-gold-400">
                <Clock className="w-5 h-5 text-gold-400" />
                <div>
                  <h3 className="font-serif text-xl font-medium text-white leading-tight">
                    Opening Hours
                  </h3>
                  {londonInfo && (
                    <span className="text-[11px] text-zinc-400 font-mono block mt-0.5">
                      London: <strong className="text-gold-300 font-semibold">{londonInfo.dayName}</strong>, {londonInfo.formattedTime}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {londonInfo && (
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live GMT
                  </span>
                )}
                <button
                  onClick={() => setHoursOpen(!hoursOpen)}
                  className="text-platinum-muted hover:text-white p-1"
                  aria-label="Toggle hours"
                >
                  {hoursOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {hoursOpen && (
              <div className="space-y-3">
                {hoursList.map((item, idx) => {
                  const isToday = londonInfo?.dayName === item.day;
                  const isSunday = item.day === "Sunday";

                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                        isToday
                          ? "bg-emerald-950/40 border-emerald-500/60 ring-1 ring-emerald-500/40 shadow-lg text-white"
                          : isSunday
                          ? "bg-obsidian/70 border-atelier-border/60 text-zinc-400"
                          : "bg-obsidian border-atelier-border text-platinum"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isToday && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider font-bold bg-emerald-500 text-black shadow-sm">
                            Today
                          </span>
                        )}
                        <div>
                          <span className={`font-semibold block ${isToday ? "text-emerald-200" : isSunday ? "text-zinc-400" : "text-white"}`}>
                            {item.day}
                          </span>
                          <span className="text-[10px] text-platinum-muted block">{item.note}</span>
                        </div>
                      </div>
                      <span className={`font-mono font-medium ${
                        isToday
                          ? "text-emerald-300 font-bold text-sm"
                          : isSunday
                          ? "text-zinc-500"
                          : "text-gold-400"
                      }`}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}

                {/* Sunday Festive Exceptions Callout */}
                <div className="p-3.5 rounded-xl bg-gold-950/20 border border-gold-900/40 text-[11px] text-gold-300/90 leading-relaxed">
                  <span className="font-semibold text-gold-400 block mb-0.5">
                    Festive &amp; Bridal Sunday Openings:
                  </span>
                  We open on selected Sundays in the weeks leading up to Diwali, Karva Chauth, Dhanteras, and Christmas. Private bridal appointments can also be arranged outside standard hours.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
