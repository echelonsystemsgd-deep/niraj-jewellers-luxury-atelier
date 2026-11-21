"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Clock, Car, Train, Phone, Navigation, ChevronDown, ChevronUp, Mail, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/luxury-icons";
import { ShowroomStatusBadge } from "@/components/header/showroom-status";
import {
  NIRAJ_MAPS_LINK,
  NIRAJ_SHOWROOM_ADDRESS,
  NIRAJ_UK_PHONE,
  NIRAJ_DISPLAY_PHONE,
  NIRAJ_LANDLINE_PHONE,
  NIRAJ_MOBILE_PHONE,
  NIRAJ_EMAIL,
  buildWhatsAppLink,
} from "@/lib/whatsapp";
import { getLondonCurrentDayInfo } from "@/lib/showroom-hours";

interface ShowroomHubProps {
  openingHours?: Record<string, string>;
  phone?: string;
  address?: string;
}

export function ShowroomHub({ openingHours, phone, address }: ShowroomHubProps) {
  const [hoursOpen, setHoursOpen] = useState(false);
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
    customNote: "Hi Niraj Jewellers team, I am planning to visit your Hayes showroom today / this week. Could you confirm if you have availability for a consultation?",
  });

  const hoursList = [
    { day: "Monday", hours: openingHours?.monday || "12:00 – 17:00", note: "Afternoon workshop hours" },
    { day: "Tuesday", hours: openingHours?.tuesday || "11:00 – 17:30", note: "Full atelier bench access" },
    { day: "Wednesday", hours: openingHours?.wednesday || "11:00 – 17:30", note: "Full atelier bench access" },
    { day: "Thursday", hours: openingHours?.thursday || "11:00 – 17:30", note: "Full atelier bench access" },
    { day: "Friday", hours: openingHours?.friday || "11:00 – 17:30", note: "Full atelier bench access" },
    { day: "Saturday", hours: openingHours?.saturday || "11:00 – 17:30", note: "Weekend bridal consultations" },
    { day: "Sunday", hours: openingHours?.sunday || "Closed", note: "Open select Sundays prior to Diwali, Karva Chauth & Christmas" },
  ];

  return (
    <section id="showroom" className="py-20 sm:py-28 bg-white border-y border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#996515]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Flagship Hayes Atelier &amp; Bullion Showroom</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141416] tracking-tight">
            Visit Us on Uxbridge Road
          </h2>
          <p className="font-vivaldi text-2xl sm:text-3xl text-[#996515] font-normal">
            West London&apos;s premier bespoke goldsmith destination
          </p>
          <p className="text-sm sm:text-base text-[#4A4A52] leading-relaxed">
            Located in the heart of Hayes, West London. Experience direct workshop goldsmithing, certified diamond testing, and live bullion transactions.
          </p>
        </div>

        {/* Showroom Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location & Live Status Card */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-7 sm:p-8 rounded-2xl border border-[#E8DEC8] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E8DEC8]">
              <div>
                <span className="text-[11px] font-bold text-[#8C6212] uppercase tracking-wider block">
                  Showroom Address
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#141416] mt-0.5">
                  Niraj Jewellers Ltd
                </h3>
              </div>
              <ShowroomStatusBadge />
            </div>

            {/* Address & Direct Map Launcher */}
            <div className="p-5 rounded-xl bg-white border border-[#E8DEC8] space-y-3.5 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#996515] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#141416] font-semibold text-sm sm:text-base">
                    {NIRAJ_SHOWROOM_ADDRESS}
                  </p>
                  <p className="text-xs text-[#5A5960] mt-0.5">
                    Hayes, Middlesex (M4 / A40 corridor, West London)
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={NIRAJ_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#996515] text-white font-bold text-xs uppercase tracking-wide transition-all shadow-sm hover:shadow min-h-[44px]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={`tel:${NIRAJ_LANDLINE_PHONE.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#E8DEC8] text-[#141416] text-xs font-semibold transition-all font-mono min-h-[44px]"
                  title="Call Showroom Landline"
                >
                  <Phone className="w-3.5 h-3.5 text-[#996515]" />
                  <span>Landline: {NIRAJ_LANDLINE_PHONE}</span>
                </a>

                <a
                  href={`tel:${NIRAJ_MOBILE_PHONE.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#E8DEC8] text-[#141416] text-xs font-semibold transition-all font-mono min-h-[44px]"
                  title="Call Workshop Mobile"
                >
                  <Phone className="w-3.5 h-3.5 text-[#996515]" />
                  <span>Mobile: {NIRAJ_MOBILE_PHONE}</span>
                </a>

                <a
                  href={`mailto:${NIRAJ_EMAIL}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#E8DEC8] text-[#141416] text-xs font-semibold transition-all min-h-[44px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#996515]" />
                  <span>{NIRAJ_EMAIL}</span>
                </a>
              </div>
            </div>

            {/* Nearby Logistics & Parking */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-[#996515] font-bold">
                  <Car className="w-4 h-4" />
                  <span>Roadside Parking</span>
                </div>
                <p className="text-[#4A4A52] leading-relaxed">
                  Convenient roadside customer parking available directly outside and along Uxbridge Road.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-[#996515] font-bold">
                  <Train className="w-4 h-4" />
                  <span>Public Transport</span>
                </div>
                <p className="text-[#4A4A52] leading-relaxed">
                  Minutes from <strong>Hayes &amp; Harlington</strong> (Elizabeth Line) and direct bus routes 427, 207, 607 stopping near the showroom.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={NIRAJ_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3.5 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#D4AF37]/50 text-[#8C6212] hover:text-[#996515] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm min-h-[48px]"
              >
                <Navigation className="w-4 h-4 text-[#996515]" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href={whatsappDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md min-h-[48px]"
              >
                <WhatsAppIcon className="w-4 h-4" fill="white" />
                <span>WhatsApp Ahead of Arrival</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Operating Hours Accordion */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-7 sm:p-8 rounded-2xl border border-[#E8DEC8] shadow-sm space-y-6">
            <div
              onClick={() => setHoursOpen(!hoursOpen)}
              className="flex items-center justify-between pb-4 border-b border-[#E8DEC8] cursor-pointer group select-none"
            >
              <div className="flex items-center gap-2.5 text-[#996515]">
                <Clock className="w-5 h-5 text-[#996515] group-hover:scale-105 transition-transform" />
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#141416] group-hover:text-[#996515] transition-colors leading-tight">
                    Opening Hours
                  </h3>
                  {londonInfo && (
                    <span className="text-[11px] text-[#5A5960] font-mono block mt-0.5">
                      London: <strong className="text-[#8C6212] font-semibold">{londonInfo.dayName}</strong>, {londonInfo.formattedTime}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {londonInfo && (
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-50 border border-emerald-300 text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live GMT
                  </span>
                )}
                <div
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-white border border-[#E8DEC8] group-hover:border-[#D4AF37] flex items-center justify-center text-[#5A5960] group-hover:text-[#996515] transition-colors shadow-sm"
                  aria-label="Toggle hours"
                >
                  {hoursOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {hoursOpen && (
              <div className="space-y-2.5">
                {hoursList.map((item, idx) => {
                  const isToday = londonInfo?.dayName === item.day;
                  const isSunday = item.day === "Sunday";

                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                        isToday
                          ? "bg-white border-[#D4AF37] ring-1 ring-[#D4AF37]/50 shadow-md text-[#141416]"
                          : isSunday
                          ? "bg-white/50 border-[#E8DEC8] text-[#7A7880]"
                          : "bg-white border-[#E8DEC8] text-[#4A4A52]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isToday && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider font-bold bg-[#996515] text-white shadow-sm">
                            Today
                          </span>
                        )}
                        <div>
                          <span className={`font-semibold block ${isToday ? "text-[#8C6212]" : isSunday ? "text-[#7A7880]" : "text-[#141416]"}`}>
                            {item.day}
                          </span>
                          <span className="text-[10px] text-[#7A7880] block">{item.note}</span>
                        </div>
                      </div>
                      <span className={`font-mono font-semibold ${
                        isToday
                          ? "text-[#8C6212] font-bold text-sm"
                          : isSunday
                          ? "text-[#A19FA8]"
                          : "text-[#141416]"
                      }`}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}

                {/* Sunday Festive Exceptions Callout */}
                <div className="p-3.5 rounded-xl bg-white border border-[#D4AF37]/40 text-[11px] text-[#4A4A52] leading-relaxed shadow-sm">
                  <span className="font-bold text-[#8C6212] block mb-0.5">
                    Festive &amp; Bridal Sunday Openings:
                  </span>
                  We open on selected Sundays in the weeks leading up to Diwali, Karva Chauth, Dhanteras, and Christmas. Special festive bridal viewings and custom consultations can also be arranged outside standard hours.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
