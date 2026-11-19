import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Niraj Jewellers (Shiva Technology Ltd) protects your personal data, appointment details, and customer information under UK GDPR.",
  alternates: {
    canonical: "https://nirajjewellers.co.uk/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Niraj Jewellers London",
    description:
      "UK GDPR data protection policies and client confidentiality standards at Niraj Jewellers London.",
    url: "https://nirajjewellers.co.uk/privacy",
    images: ["/og-image.jpg"],
  },
};

export default function PrivacyPolicyPage() {
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
            <Shield className="w-4 h-4" />
            <span>Legal Compliance & Data Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-zinc-100 font-semibold tracking-wide">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-sm text-zinc-500 mt-2">
            Last Updated: November 2026 • Compliant with UK Data Protection Act 2018 & UK GDPR
          </p>
        </header>

        <div className="space-y-10 text-sm leading-relaxed text-zinc-400">
          <section className="space-y-3">
            <h2 className="text-lg font-serif text-gold-300 font-medium">1. Data Controller Identification</h2>
            <p>
              This privacy notice outlines how Niraj Jewellers (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operating under Shiva Technology Ltd (Company No. 04870407), collect, process, and safeguard personal data acquired through our digital atelier (<span className="text-zinc-200">nirajjewellers.co.uk</span>) and our flagship showroom at <span className="text-zinc-200">136 Uxbridge Road, Hayes, Middlesex, UB4 0JH, United Kingdom</span>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-gold-300 font-medium">2. Information We Collect</h2>
            <p>We collect and process minimal personal information strictly required to deliver bespoke jewellery commissions, verify high-value transactions, and coordinate physical showroom appointments:</p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              <li><strong>Contact Identification:</strong> Full name, telephone/WhatsApp mobile number, and email address.</li>
              <li><strong>Bespoke Commission Specifications:</strong> Indicative budget tiers, ring sizes, gold karat preferences (22ct/18ct), custom engraving text, and CAD design references.</li>
              <li><strong>AML / KYC Verification (High-Value Bullion & Gold Purchases):</strong> In strict compliance with UK Money Laundering Regulations 2017 and HMRC High-Value Dealer supervision, transactions exceeding statutory thresholds require photographic government ID (Passport/Photocard Driving Licence) and proof of address.</li>
              <li><strong>Technical & Session Telemetry:</strong> Anonymized server logs, browser user-agent, and cookie preferences stored strictly to preserve user session security and language preferences.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-gold-300 font-medium">3. Lawful Basis for Processing</h2>
            <p>We process your data under the following Article 6 UK GDPR lawful bases:</p>
            <div className="grid sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <h3 className="font-semibold text-zinc-200 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Contractual Necessity
                </h3>
                <p className="text-xs text-zinc-400">Handcrafting custom jewellery, processing deposits, and arranging insured Royal Mail Special Delivery dispatch.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <h3 className="font-semibold text-zinc-200 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Legal Compliance
                </h3>
                <p className="text-xs text-zinc-400">UK Hallmarking Act 1973 recordkeeping and HMRC Anti-Money Laundering statutory compliance.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-gold-300 font-medium">4. Third-Party Disclosures & Security</h2>
            <p>
              We maintain a strict zero-sale policy: your personal information is never sold, leased, or monetized to third-party marketing networks. We share limited data strictly with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
              <li><strong>London Assay Office (Goldsmiths&apos; Hall):</strong> For hallmarking certification records.</li>
              <li><strong>Royal Mail Special Delivery / Specialized Couriers:</strong> Name and address strictly for tamper-evident, fully insured carriage.</li>
              <li><strong>WhatsApp Business / Meta:</strong> Direct end-to-end encrypted VIP messaging when you initiate a consultation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-gold-300 font-medium">5. Data Retention & Your Statutory Rights</h2>
            <p>
              Under UK GDPR, you retain the right to access, rectify, or request erasure of your personal data. Accounting and AML-related transaction records are retained for a statutory period of 6 years in accordance with UK law.
            </p>
            <p>
              To exercise any privacy rights or submit a Data Subject Access Request (DSAR), contact our compliance officer at <span className="text-gold-400 font-mono">compliance@nirajjewellers.co.uk</span> or write to: Data Compliance, Niraj Jewellers, 136 Uxbridge Road, Hayes, UB4 0JH, UK.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Niraj Jewellers. All rights reserved.</span>
          <Link href="/terms" className="text-gold-400 hover:underline">
            Atelier Terms & Hallmarking Guarantee &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
