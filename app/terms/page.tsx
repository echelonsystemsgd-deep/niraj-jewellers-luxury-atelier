import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Scale, Award, ShieldCheck, Gem } from 'lucide-react';

export const metadata: Metadata = {
  title: "Terms of Service & Atelier Policies",
  description:
    "Commercial terms of service, bespoke commission deposits, hallmark guarantees (London Assay Office), and bullion trading policies at Niraj Jewellers.",
  alternates: {
    canonical: "https://nirajjewellers.co.uk/terms",
  },
  openGraph: {
    title: "Terms of Service & Atelier Policies | Niraj Jewellers London",
    description:
      "Commercial terms of service, bespoke commission protocols, bullion policies, and UK Hallmarking Act 1973 compliance at Niraj Jewellers.",
    url: "https://nirajjewellers.co.uk/terms",
    images: ["/og-image.jpg"],
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Return to Atelier
        </Link>

        <header className="border-b border-zinc-800 pb-8 mb-10">
          <div className="flex items-center gap-3 text-gold-400 text-xs uppercase tracking-widest font-mono mb-2">
            <Scale className="w-4 h-4" />
            <span>Commercial Terms & Legal Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-zinc-100 font-semibold tracking-wide">
            Atelier Terms & Hallmarking Guarantee
          </h1>
          <p className="text-sm text-zinc-500 mt-2">
            Effective: November 2026 • Niraj Jewellers London (Co. Reg: [Pending Registration])
          </p>
        </header>

        <div className="space-y-10 text-sm leading-relaxed text-zinc-400">
          {/* Statutory Hallmarking Callout */}
          <div className="p-5 rounded-lg bg-gold-950/20 border border-gold-500/30">
            <div className="flex items-center gap-2.5 text-gold-300 font-medium text-base mb-2">
              <Award className="w-5 h-5 text-gold-400 shrink-0" />
              <span>Statutory UK Hallmarking Act 1973 Guarantee</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300">
              Every precious metal article manufactured, traded, or supplied by Niraj Jewellers is independently tested, verified, and officially hallmarked by the London Assay Office (Goldsmiths&apos; Hall). Articles bear the statutory fineness marks (22ct / 916, 18ct / 750, 24ct / 999), the London Leopard&apos;s Head town mark, and our registered master goldsmith sponsor&apos;s mark.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-gold-300 font-medium">1. Bespoke Commissions & Production Protocol</h2>
            <p>
              All bespoke bridal sets, engagement rings, and custom heirlooms undergo a strict multi-stage quality review:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              <li><strong>Deposit Requirement:</strong> A non-refundable 30% initial deposit is required upon approval of the photorealistic 3D CAD render to commission physical wax casting and gemstone procurement.</li>
              <li><strong>Balance Settlement:</strong> The remaining 70% balance is payable prior to release or dispatch, following your physical in-person inspection at our Hayes showroom or via high-definition photographic/video sign-off for remote clients.</li>
              <li><strong>Bespoke Exclusions:</strong> Under Section 28(1)(b) of the Consumer Contracts Regulations 2013, bespoke items custom-crafted to unique buyer specifications, finger sizes, or personalised engravings are exempt from statutory cooling-off cancellation periods once production commences.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-gold-300 font-medium">2. Diamond & Gemstone Certification</h2>
            <p>
              All natural and lab-grown diamonds above 0.50 carats are accompanied by recognized, independent grading reports from the Gemological Institute of America (GIA) or International Gemological Institute (IGI). Diamond laser inscriptions matching certificate numbers are verified under digital microscope prior to final handover.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-gold-300 font-medium">3. Gold Bullion & Live Market Pricing</h2>
            <p>
              Bullion bars (24ct / 999.9 purity) and investment coins are priced dynamically against live LBMA (London Bullion Market Association) spot rates. Once a spot order or locked rate is confirmed in our showroom or via written VIP channel, it constitutes an immediate, binding financial contract not subject to market fluctuation cancellations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-gold-300 font-medium">4. Lifetime Craftsmanship Guarantee & Aftercare</h2>
            <p>
              All Niraj Jewellers bespoke mountings include a <strong>Complimentary Lifetime Craftsmanship Warranty</strong> covering:
            </p>
            <div className="grid sm:grid-cols-3 gap-3 my-3">
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
                <ShieldCheck className="w-5 h-5 text-gold-400 mx-auto mb-1.5" />
                <span className="text-xs font-semibold text-zinc-200 block">Prong Tightening</span>
                <span className="text-[11px] text-zinc-500">Annual claw tension inspection</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
                <Gem className="w-5 h-5 text-gold-400 mx-auto mb-1.5" />
                <span className="text-xs font-semibold text-zinc-200 block">Ultrasonic Cleaning</span>
                <span className="text-[11px] text-zinc-500">Complimentary showroom spa polish</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
                <Scale className="w-5 h-5 text-gold-400 mx-auto mb-1.5" />
                <span className="text-xs font-semibold text-zinc-200 block">First Resizing</span>
                <span className="text-[11px] text-zinc-500">Complimentary 1-size adjustment</span>
              </div>
            </div>
            <p className="text-xs text-zinc-500">
              Warranty excludes accidental impact, third-party goldsmith tampering, or normal metal wear over decades of wear.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-gold-300 font-medium">5. Governing Law & Jurisdiction</h2>
            <p>
              These terms are governed by and construed in accordance with the Laws of England and Wales. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the English Courts.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Niraj Jewellers London.</span>
          <Link href="/privacy" className="text-gold-400 hover:underline">
            Privacy Policy (UK GDPR) &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
