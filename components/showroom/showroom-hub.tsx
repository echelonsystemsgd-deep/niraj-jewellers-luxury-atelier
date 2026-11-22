"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Car,
  Train,
  Phone,
  Navigation,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  NIRAJ_LANDLINE_PHONE,
  NIRAJ_MAPS_LINK,
  buildWhatsAppLink,
} from "@/lib/whatsapp";
import { ShowroomStatusBadge } from "@/components/header/showroom-status";
import { WhatsAppIcon } from "@/components/icons/luxury-icons";

export function ShowroomHub() {
  const [hoursOpen, setHoursOpen] = useState(true);
  const [londonInfo, setLondonInfo] = useState<{ dayName: string; formattedTime: string; dateStr: string } | null>(null);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const londonString = now.toLocaleString("en-GB", {
          timeZone: "Europe/London",
          hour12: false,
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
          day: "numeric",
          month: "short",
        });

        const [weekday, ...rest] = londonString.split(" ");
        const timeStr = rest[rest.length - 1];
        const dateStr = rest.slice(0, -1).join(" ");

        setLondonInfo({
          dayName: weekday.replace(",", ""),
          formattedTime: timeStr,
          dateStr: dateStr,
        });
      } catch {
        // Fallback
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const whatsappDirections = buildWhatsAppLink({
    intent: "general",
    customNote: "Hi Niraj Jewellers team, I am heading to your Hayes showroom at 136 Uxbridge Road and would like to confirm your goldsmith availability.",
  });

  const hoursList = [
    { day: "Monday", hours: "12:00 to 17:00", note: "Afternoon Walk-in Repairs & Viewings" },
    { day: "Tuesday", hours: "11:00 to 17:30", note: "Full Workshop & Bullion Trading" },
    { day: "Wednesday", hours: "11:00 to 17:30", note: "Full Workshop & Bridal Consultations" },
    { day: "Thursday", hours: "11:00 to 17:30", note: "Full Workshop & Laser Sizing" },
    { day: "Friday", hours: "11:00 to 17:30", note: "Full Workshop & Diamond Settings" },
    { day: "Saturday", hours: "11:00 to 17:30", note: "Peak Weekend Consultations & Walk-ins" },
    { day: "Sunday", hours: "Closed", note: "Private Bespoke Consultations by Prior Request" },
  ];

  return (
    <section id="showroom" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#8C6212] block mb-2 font-semibold">
            LOCATION, HOURS &amp; LOGISTICS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141416] font-normal tracking-tight mb-4">
            Visit the Hayes Atelier on Uxbridge Road
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-sans">
            Conveniently positioned along the A40 / M4 corridor in Hayes, West London. Direct walk-in access for same-day repairs, private bridal viewings, and physical bullion testing.
          </p>
        </div>

        {/* 3 Showroom Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EAE6DF] border border-[#EAE6DF] mb-12 rounded-2xl overflow-hidden">
          <div className="bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#8C6212] block mb-2 font-semibold">
                SERVICE 01
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#141416] font-normal mb-3">
                Walk-ins &amp; Instant Repairs
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4 font-sans">
                No appointment needed for urgent chain soldering, ring sizing, claw retipping, or ultrasonic jewelry cleaning. Speak directly to the goldsmith at the bench.
              </p>
            </div>
            <div className="pt-4 border-t border-[#EAE6DF] text-xs font-sans text-[#8C6212] font-semibold">
              Typical turnaround: 2 to 4 hours
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#8C6212] block mb-2 font-semibold">
                SERVICE 02
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#141416] font-normal mb-3">
                Private Bridal Suites
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4 font-sans">
                Try on handcrafted 22ct chokers, raani haars, kadas, and Polki suites in our private viewing lounge. Review 3D CAD renders and gemstone options with our master team.
              </p>
            </div>
            <div className="pt-4 border-t border-[#EAE6DF] text-xs font-sans text-[#8C6212] font-semibold">
              Complimentary velvet tray viewing
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#8C6212] block mb-2 font-semibold">
                SERVICE 03
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#141416] font-normal mb-3">
                LBMA Bullion &amp; Scrap Gold
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4 font-sans">
                Transparent physical bullion trading. Minted 24ct bars, sovereigns, and ancestral gold scrap weighed on certified Class II balances with instant bank payouts.
              </p>
            </div>
            <div className="pt-4 border-t border-[#EAE6DF] text-xs font-sans text-[#8C6212] font-semibold">
              Live market spot rates locked on site
            </div>
          </div>
        </div>

        {/* Map & Live Hours Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Google Map Embed */}
          <div className="lg:col-span-7 bg-white border border-[#EAE6DF] overflow-hidden flex flex-col rounded-2xl shadow-xs">
            <div className="p-5 sm:p-6 border-b border-[#EAE6DF] flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#8C6212] block font-semibold">
                  FLAGSHIP WORKSHOP LOCATION
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#141416] font-normal mt-0.5">
                  136 Uxbridge Road, Hayes UB4 0JH
                </h3>
              </div>
              <ShowroomStatusBadge />
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[340px] bg-[#F5F2EB]">
              <iframe
                title="Niraj Jewellers Showroom Google Map"
                src="https://maps.google.com/maps?q=136+Uxbridge+Road,+Hayes,+UB4+0JH,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Parking & Transport Notice */}
            <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#EAE6DF] bg-[#FAF8F5] text-xs font-sans">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-semibold text-[#141416]">
                  <Car className="w-4 h-4 text-[#996515]" />
                  <span>Roadside Parking</span>
                </div>
                <p className="text-[#57534E] leading-relaxed">
                  Available roadside customer parking directly outside and along Uxbridge Road.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 font-semibold text-[#141416]">
                  <Train className="w-4 h-4 text-[#996515]" />
                  <span>Public Transport</span>
                </div>
                <p className="text-[#57534E] leading-relaxed">
                  Minutes from <strong>Hayes &amp; Harlington</strong> (Elizabeth Line) with direct bus connections (427, 207, 607) stopping near the door.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-5 sm:p-6 border-t border-[#EAE6DF] flex flex-wrap gap-3">
              <a
                href={whatsappDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" fill="white" />
                <span>WhatsApp Ahead</span>
              </a>

              <a
                href={NIRAJ_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#FAF8F5] border border-[#EAE6DF] text-[#141416] font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#996515]" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:${NIRAJ_LANDLINE_PHONE.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#FAF8F5] border border-[#EAE6DF] text-[#141416] font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#996515]" />
                <span>Call {NIRAJ_LANDLINE_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Right: Opening Hours (Open by Default) */}
          <div className="lg:col-span-5 bg-white border border-[#EAE6DF] p-6 sm:p-8 space-y-6 rounded-2xl shadow-xs">
            <div
              onClick={() => setHoursOpen(!hoursOpen)}
              className="flex items-center justify-between pb-4 border-b border-[#EAE6DF] cursor-pointer group select-none"
            >
              <div className="flex items-center gap-2.5 text-[#996515]">
                <Clock className="w-5 h-5 text-[#996515]" />
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141416] group-hover:text-[#996515] transition-colors leading-tight">
                    Opening Hours
                  </h3>
                  {londonInfo && (
                    <span className="text-xs text-[#78716C] font-sans block mt-0.5">
                      London: <strong className="text-[#8C6212] font-semibold">{londonInfo.dayName}</strong>, {londonInfo.formattedTime}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {londonInfo && (
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-sans font-medium bg-[#FAF8F5] border border-[#EAE6DF] text-[#8C6212]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live GMT
                  </span>
                )}
                <div
                  className="w-8 h-8 bg-[#FAF8F5] border border-[#EAE6DF] flex items-center justify-center text-[#57534E] rounded-md"
                  aria-label="Toggle hours"
                >
                  {hoursOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {hoursOpen && (
              <div className="space-y-2">
                {hoursList.map((item, idx) => {
                  const isToday = londonInfo?.dayName === item.day;
                  const isSunday = item.day === "Sunday";

                  return (
                    <div
                      key={idx}
                      className={`p-3 border text-xs flex items-center justify-between transition-colors rounded-lg font-sans ${
                        isToday
                          ? "bg-[#FAF8F5] border-[#996515] text-[#141416]"
                          : isSunday
                          ? "bg-[#FAF8F5]/60 border-[#EAE6DF] text-[#78716C]"
                          : "bg-white border-[#EAE6DF] text-[#57534E]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="px-1.5 py-0.5 text-[9px] font-sans uppercase tracking-wider font-bold bg-[#996515] text-white rounded-xs">
                            Today
                          </span>
                        )}
                        <div>
                          <span className={`font-medium block ${isToday ? "text-[#8C6212]" : isSunday ? "text-[#78716C]" : "text-[#141416]"}`}>
                            {item.day}
                          </span>
                          <span className="text-[10px] text-[#78716C] block">{item.note}</span>
                        </div>
                      </div>
                      <span className={`font-sans font-medium ${
                        isToday
                          ? "text-[#8C6212] font-bold text-sm"
                          : isSunday
                          ? "text-[#A8A29E]"
                          : "text-[#141416]"
                      }`}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}

                {/* Festive Sunday Opening Notice */}
                <div className="mt-4 p-4 bg-[#FAF8F5] border border-[#EAE6DF] text-xs text-[#57534E] leading-relaxed rounded-lg font-sans">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#996515] font-bold block mb-1">
                    Festive &amp; Bridal Sunday Openings:
                  </span>
                  We open on selected Sundays in the weeks leading up to Diwali, Karva Chauth, Dhanteras, and Christmas. Private bridal viewings can also be arranged outside standard hours.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
