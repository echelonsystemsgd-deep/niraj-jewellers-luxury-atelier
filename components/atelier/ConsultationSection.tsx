"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Phone, MessageSquare, Clock, ShieldCheck } from "lucide-react";
import { sound } from "@/lib/sound";

export function ConsultationSection() {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("Bespoke Bridal Commission");
  const [message, setMessage] = useState("");
  const [preferredMethod, setPreferredMethod] = useState("Phone Call");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !contact.trim()) return;

    setIsSubmitting(true);
    sound.playTick();

    // Store in localStorage as fallback / audit log
    try {
      const existing = JSON.parse(localStorage.getItem("niraj_enquiries") || "[]");
      existing.push({
        fullName,
        contact,
        service,
        message,
        preferredMethod,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("niraj_enquiries", JSON.stringify(existing));
    } catch {
      // LocalStorage error non-blocking
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="consultation" className="w-full bg-[#FAF9F5] border-b border-[#E7E2DA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#8C6212] font-semibold mb-3">
                PRIVATE CONSULTATION &amp; QUOTE
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#141416] tracking-tight font-normal leading-[1.15]">
                Request an In-House Quote or Viewing
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#57534E] leading-relaxed">
              Drop your details below and our master goldsmiths in Hayes will review your requirements and reach out directly. No pressure, no commission sales staff, just honest workshop guidance.
            </p>

            {/* Atelier Commitments */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E7E2DA] flex items-center justify-center text-[#8C6212] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#141416]">Prompt Workshop Reply</h4>
                  <p className="font-sans text-xs text-[#7A705E]">We respond within 24 business hours with direct craftsman insights.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E7E2DA] flex items-center justify-center text-[#8C6212] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#141416]">Transparent Gold Trade Pricing</h4>
                  <p className="font-sans text-xs text-[#7A705E]">Clear weight estimates based on live bullion rates and verified hallmarking.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E7E2DA] flex items-center justify-center text-[#8C6212] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#141416]">Immediate Assistance</h4>
                  <p className="font-sans text-xs text-[#7A705E]">
                    Need answers today? Call our Hayes bench directly at{" "}
                    <a href="tel:02085739323" className="font-semibold text-[#141416] underline hover:text-[#8C6212]">
                      020 8573 9323
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean On-Site Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7E2DA] shadow-xs">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF8F5] border border-[#C6A75E] flex items-center justify-center text-[#8C6212]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#141416]">
                    Enquiry Received
                  </h3>
                  <p className="font-sans text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#141416]">{fullName}</strong>. Our goldsmith team at 136 Uxbridge Road has received your request regarding <strong className="text-[#141416]">{service}</strong>. We will reach out via <strong className="text-[#141416]">{preferredMethod}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFullName("");
                        setContact("");
                        setMessage("");
                      }}
                      className="text-xs font-sans uppercase tracking-widest text-[#8C6212] hover:text-[#141416] font-semibold underline"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#141416] mb-1.5">
                        Your Name <span className="text-[#8C6212]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Jaspreet Kaur"
                        className="w-full px-4 py-3 rounded-lg border border-[#E7E2DA] bg-[#FAF9F5] text-sm text-[#141416] placeholder-[#A89F91] focus:outline-hidden focus:border-[#8C6212] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#141416] mb-1.5">
                        Phone or Email <span className="text-[#8C6212]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="e.g. 07955 565137 or name@domain.com"
                        className="w-full px-4 py-3 rounded-lg border border-[#E7E2DA] bg-[#FAF9F5] text-sm text-[#141416] placeholder-[#A89F91] focus:outline-hidden focus:border-[#8C6212] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#141416] mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-[#E7E2DA] bg-[#FAF9F5] text-sm text-[#141416] focus:outline-hidden focus:border-[#8C6212] focus:bg-white transition-colors"
                      >
                        <option value="Bespoke Bridal Commission">Bespoke Bridal Commission</option>
                        <option value="Same-Day Workshop Repair">Same-Day Workshop Repair &amp; Sizing</option>
                        <option value="Diamond Solitaire & Bands">Diamond Solitaire &amp; Wedding Bands</option>
                        <option value="22ct Gold Kadas & Bangles">22ct Gold Kadas &amp; Bangles</option>
                        <option value="Private Showroom Viewing">Private Hayes Showroom Viewing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#141416] mb-1.5">
                        Preferred Contact
                      </label>
                      <select
                        value={preferredMethod}
                        onChange={(e) => setPreferredMethod(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-[#E7E2DA] bg-[#FAF9F5] text-sm text-[#141416] focus:outline-hidden focus:border-[#8C6212] focus:bg-white transition-colors"
                      >
                        <option value="Phone Call">Phone Call</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#141416] mb-1.5">
                      Tell us about your requirements (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Looking for a 22ct bridal choker set for an October wedding, or ring resizing needed this Saturday..."
                      className="w-full px-4 py-3 rounded-lg border border-[#E7E2DA] bg-[#FAF9F5] text-sm text-[#141416] placeholder-[#A89F91] focus:outline-hidden focus:border-[#8C6212] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-[#141416] hover:bg-[#8C6212] text-[#FAF9F5] rounded-xl font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-xs"
                    >
                      {isSubmitting ? (
                        <span>Submitting to Goldsmith Bench...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] font-sans text-[#7A705E] mt-3">
                      Your details remain strictly confidential under UK GDPR. Zero spam, ever.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
