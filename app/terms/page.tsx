import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Scale, Award, ShieldCheck, Gem } from 'lucide-react';

export const metadata: Metadata = {
  title: "Terms of Service & Atelier Policies | Niraj Jewellers Ltd London",
  description:
    "Commercial terms of service, bespoke commission deposits, hallmark guarantees (London Assay Office), and bullion trading policies at Niraj Jewellers Ltd.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/terms",
  },
  openGraph: {
    title: "Terms of Service & Atelier Policies | Niraj Jewellers Ltd London",
    description:
      "Commercial terms of service, bespoke commission protocols, bullion policies, and UK Hallmarking Act 1973 compliance at Niraj Jewellers Ltd.",
    url: "https://www.niraj-jewellers.co.uk/terms",
    images: ["/og-image.jpg"],
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#4A4A52] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DEC8] shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#8C6212] hover:text-[#996515] font-semibold transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Return to Atelier
        </Link>

        <header className="border-b border-[#E8DEC8] pb-8 mb-10">
          <div className="flex items-center gap-3 text-[#996515] text-xs uppercase tracking-widest font-bold mb-2">
            <Scale className="w-4 h-4" />
            <span>Commercial Terms &amp; Legal Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#141416] font-normal tracking-wide">
            Atelier Terms &amp; Hallmarking Guarantee
          </h1>
          <p className="text-sm text-[#7A7880] mt-2">
            Effective: Live • Niraj Jewellers Ltd
          </p>
        </header>

        <div className="space-y-10 text-sm leading-relaxed text-[#4A4A52]">
          {/* Statutory Hallmarking Callout */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D4AF37]/50 shadow-sm">
            <div className="flex items-center gap-2.5 text-[#8C6212] font-bold text-base mb-2">
              <Award className="w-5 h-5 text-[#996515] shrink-0" />
              <span>Statutory UK Hallmarking Act 1973 Guarantee</span>
            </div>
            <p className="text-xs sm:text-sm text-[#141416] leading-relaxed">
              Every precious metal article manufactured, traded, or supplied by Niraj Jewellers Ltd is independently tested, verified, and officially hallmarked by the London Assay Office (Goldsmiths&apos; Hall). Articles bear the statutory fineness marks (22ct / 916, 18ct / 750, 24ct / 999), the London Leopard&apos;s Head town mark, and our registered master goldsmith sponsor&apos;s mark.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-[#141416] font-medium">1. Bespoke Commissions &amp; Production Protocol</h2>
            <p>
              All bespoke bridal sets, engagement rings, and custom heirlooms undergo a strict multi-stage quality review:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#141416]">
              <li><strong>Deposit Requirement:</strong> A 30% initial deposit is required upon approval of the photorealistic 3D CAD render to commission physical wax casting and gemstone procurement.</li>
              <li><strong>Balance Settlement:</strong> The remaining 70% balance is payable prior to release or dispatch, following your physical in-person inspection at our Hayes showroom or via high-definition video sign-off for remote clients.</li>
              <li><strong>Bespoke Exclusions:</strong> Under Section 28(1)(b) of the Consumer Contracts Regulations 2013, bespoke items custom-crafted to unique buyer specifications, finger sizes, or personalised engravings are exempt from statutory cooling-off cancellation periods once production commences.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-[#141416] font-medium">2. Diamond &amp; Gemstone Certification</h2>
            <p>
              All natural and lab-grown diamonds above 0.50 carats are accompanied by recognized, independent grading reports from the Gemological Institute of America (GIA) or International Gemological Institute (IGI). Diamond laser inscriptions matching certificate numbers are verified under digital microscope prior to final handover.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-[#141416] font-medium">3. Gold Bullion &amp; Live Market Pricing</h2>
            <p>
              Bullion bars (24ct / 999.9 purity) and investment coins are priced dynamically against live LBMA (London Bullion Market Association) spot rates. Once a spot order or locked rate is confirmed in our showroom or via written VIP channel, it constitutes an immediate, binding financial contract not subject to market fluctuation cancellations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-[#141416] font-medium">4. Lifetime Craftsmanship Guarantee &amp; Aftercare</h2>
            <p>
              All Niraj Jewellers Ltd bespoke mountings include a <strong>Complimentary Lifetime Craftsmanship Warranty</strong> covering:
            </p>
            <div className="grid sm:grid-cols-3 gap-3 my-3">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-center">
                <ShieldCheck className="w-5 h-5 text-[#996515] mx-auto mb-1.5" />
                <span className="text-xs font-bold text-[#141416] block">Prong Tightening</span>
                <span className="text-[11px] text-[#5A5960]">Annual claw tension inspection</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-center">
                <Gem className="w-5 h-5 text-[#996515] mx-auto mb-1.5" />
                <span className="text-xs font-bold text-[#141416] block">Ultrasonic Cleaning</span>
                <span className="text-[11px] text-[#5A5960]">Complimentary showroom spa polish</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-center">
                <Scale className="w-5 h-5 text-[#996515] mx-auto mb-1.5" />
                <span className="text-xs font-bold text-[#141416] block">First Resizing</span>
                <span className="text-[11px] text-[#5A5960]">Complimentary 1-size adjustment</span>
              </div>
            </div>
            <p className="text-xs text-[#7A7880]">
              Warranty excludes accidental impact, third-party goldsmith tampering, or normal metal wear over decades of wear.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-[#141416] font-medium">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              These terms are governed by and construed in accordance with the Laws of England and Wales. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the English Courts.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E8DEC8] flex flex-col sm:flex-row justify-between items-center text-xs text-[#7A7880] gap-3">
          <span>&copy; {new Date().getFullYear()} Niraj Jewellers Ltd. All rights reserved.</span>
          <Link href="/privacy" className="text-[#8C6212] hover:underline font-semibold">
            Privacy Policy (UK GDPR) &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
