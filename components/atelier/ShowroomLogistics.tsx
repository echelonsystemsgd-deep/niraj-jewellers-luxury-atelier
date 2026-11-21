"use client";

import React from "react";
import { sound } from "@/lib/sound";
import { MapPin, Clock, Phone, Navigation, MessageSquare, Car, Train } from "lucide-react";
import { ShowroomStatusBadge } from "@/components/header/showroom-status";

export function ShowroomLogistics() {
  return (
    <section id="showroom" className="w-full bg-[#141416] text-[#FAF9F5] border-b border-[#2C2825] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Atelier Location & Hours */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#C6A75E] block mb-2">
                  [ SHOWROOM & ATELIER LOGISTICS ]
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F5] tracking-tight">
                  Visit the Hayes Bench
                </h2>
              </div>
              <ShowroomStatusBadge />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#A89F91]">
              <div className="p-4 border border-[#2C2825] bg-[#1A1816]">
                <div className="flex items-center gap-2 text-[#FAF9F5] font-semibold mb-2">
                  <MapPin className="w-4 h-4 text-[#C6A75E]" />
                  <span>SHOWROOM ADDRESS</span>
                </div>
                <p className="font-sans text-xs text-[#D1C9BD] leading-relaxed">
                  136 Uxbridge Road <br />
                  Hayes, Middlesex <br />
                  UB4 0JH, Greater London, UK
                </p>
              </div>

              <div className="p-4 border border-[#2C2825] bg-[#1A1816]">
                <div className="flex items-center gap-2 text-[#FAF9F5] font-semibold mb-2">
                  <Clock className="w-4 h-4 text-[#C6A75E]" />
                  <span>BENCH HOURS</span>
                </div>
                <p className="font-sans text-xs text-[#D1C9BD] leading-relaxed">
                  Monday: 12:00 – 17:00 <br />
                  Tuesday – Saturday: 11:00 – 17:30 <br />
                  Sunday: Closed (Private Bespoke by Request)
                </p>
              </div>
            </div>

            {/* Travel Guidance */}
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-[#A89F91]">
              <span className="flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#C6A75E]" />
                <span>Dedicated Customer Parking on Uxbridge Road</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Train className="w-3.5 h-3.5 text-[#C6A75E]" />
                <span>12 Mins from Heathrow / Elizabeth Line</span>
              </span>
            </div>
          </div>

          {/* Right: Direct Navigation Action Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3 font-mono text-xs tracking-[0.18em] uppercase">
            <a
              href="https://maps.google.com/?q=136+Uxbridge+Road+Hayes+UB4+0JH"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playTick()}
              className="w-full py-4 bg-[#C6A75E] text-[#141416] hover:bg-white transition-colors font-bold flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>OPEN IN GOOGLE MAPS ↗</span>
            </a>

            <a
              href="tel:02085739323"
              onClick={() => sound.playTick()}
              className="w-full py-4 border border-[#FAF9F5] bg-transparent text-[#FAF9F5] hover:bg-white hover:text-[#141416] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL WORKSHOP: 020 8573 9323</span>
            </a>

            <a
              href="https://wa.me/447955565137?text=Hi%20Niraj%20Jewellers%20team%2C%20I%20am%20heading%20to%20your%20Hayes%20showroom%20and%20would%20like%20to%20confirm%20bench%20availability."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playTick()}
              className="w-full py-3.5 border border-[#25D366] bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP ARRIVAL NOTIFICATION</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
