"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { MapPin, Clock, Phone, Navigation, MessageSquare, Car, Train } from "lucide-react";
import { ShowroomStatusBadge } from "@/components/header/showroom-status";

export function ShowroomLogistics() {
  return (
    <section id="showroom" className="w-full bg-[#141416] text-[#FAF9F5] border-b border-[#2C2825] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Atelier Address, Hours & Travel Information */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C6A75E] block mb-2 font-semibold">
                  HAYES SHOWROOM &amp; WORKSHOP
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F5] tracking-tight">
                  Visit the Hayes Bench
                </h2>
              </div>
              <ShowroomStatusBadge />
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#A89F91] leading-relaxed">
              Experience the heft of solid 22ct gold in person. Direct walk-ins welcome during showroom hours, or reserve a private bespoke bridal viewing session with our master goldsmiths.
            </p>

            {/* Address & Hours Grid: Open and Visible by Default (No Accordions) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs text-[#A89F91]">
              <div className="p-5 border border-[#2C2825] bg-[#1A1816]">
                <div className="flex items-center gap-2 text-[#FAF9F5] font-semibold mb-2">
                  <MapPin className="w-4 h-4 text-[#C6A75E]" />
                  <span>FLAGSHIP ATELIER</span>
                </div>
                <p className="font-sans text-xs text-[#D1C9BD] leading-relaxed">
                  136 Uxbridge Road <br />
                  Hayes, Middlesex <br />
                  UB4 0JH, Greater London, UK
                </p>
              </div>

              <div className="p-5 border border-[#2C2825] bg-[#1A1816]">
                <div className="flex items-center gap-2 text-[#FAF9F5] font-semibold mb-2">
                  <Clock className="w-4 h-4 text-[#C6A75E]" />
                  <span>SHOWROOM HOURS</span>
                </div>
                <p className="font-sans text-xs text-[#D1C9BD] leading-relaxed">
                  Monday: 12:00 to 17:00 <br />
                  Tuesday to Saturday: 11:00 to 17:30 <br />
                  Sunday: Closed (Private Bespoke)
                </p>
              </div>
            </div>

            {/* Parking & Transit Guidance (Roadside parking, no mention of bays) */}
            <div className="p-4 border border-[#2C2825] bg-[#1A1816]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans text-[#A89F91]">
              <span className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#C6A75E] shrink-0" />
                <span>Available roadside customer parking on Uxbridge Road</span>
              </span>
              <span className="hidden sm:inline text-[#4A453E]">·</span>
              <span className="flex items-center gap-2">
                <Train className="w-4 h-4 text-[#C6A75E] shrink-0" />
                <span>12 Mins from Elizabeth Line</span>
              </span>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-3 font-sans text-xs tracking-wider uppercase pt-2 font-semibold">
              <a
                href="tel:02085739323"
                onClick={() => sound.playTick()}
                className="flex-1 sm:flex-none px-5 py-3 border border-[#2C2825] bg-[#1A1816] hover:bg-white hover:text-[#141416] transition-colors flex items-center justify-center gap-2 text-[#FAF9F5]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL: 020 8573 9323</span>
              </a>

              <a
                href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%2C%20I%20am%20heading%20to%20your%20Hayes%20showroom."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playTick()}
                className="flex-1 sm:flex-none px-5 py-3 border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center gap-2 font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WHATSAPP ARRIVAL</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (Fills whitespace void completely) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Right Column: Google Maps Embed (Fills whitespace void per Captain feedback) */}
            <div className="w-full h-[320px] sm:h-[360px] border border-[#2C2825] bg-[#1A1816] overflow-hidden relative">
              <iframe
                title="Niraj Jewellers 136 Uxbridge Road Hayes Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.475471418873!2d-0.4284814!3d51.5228515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767272ee7bf9a7%3A0xb6ff7ea9b110b9d9!2sNiraj%20Jewellers%20Ltd!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Direct Google Maps Navigation Bar */}
            <a
              href="https://maps.google.com/?q=136+Uxbridge+Road+Hayes+UB4+0JH"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playTick()}
              className="w-full py-3.5 bg-[#C6A75E] hover:bg-white text-[#141416] transition-colors font-sans text-xs tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>OPEN DIRECTIONS IN GOOGLE MAPS ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
