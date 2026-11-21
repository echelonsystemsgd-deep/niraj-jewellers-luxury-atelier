import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, CheckCircle2 } from 'lucide-react';
import { NIRAJ_SHOWROOM_ADDRESS, NIRAJ_UK_PHONE, NIRAJ_COMPANY_REG } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: "Privacy Policy | Niraj Jewellers Ltd London",
  description:
    "How Niraj Jewellers Ltd protects your personal data, consultation details, and customer information under UK GDPR.",
  alternates: {
    canonical: "https://www.niraj-jewellers.co.uk/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Niraj Jewellers Ltd London",
    description:
      "UK GDPR data protection policies and client confidentiality standards at Niraj Jewellers Ltd London.",
    url: "https://www.niraj-jewellers.co.uk/privacy",
    images: ["/og-image.jpg"],
  },
};

export default function PrivacyPolicyPage() {
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
            <Shield className="w-4 h-4" />
            <span>Legal Compliance &amp; Data Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#141416] font-normal tracking-wide">
            Privacy Policy &amp; Data Protection
          </h1>
          <p className="text-sm text-[#7A7880] mt-2">
            Compliant with UK Data Protection Act 2018 &amp; UK GDPR • Niraj Jewellers Ltd
          </p>
        </header>

        <div className="space-y-10 text-sm leading-relaxed text-[#4A4A52]">
          <section className="space-y-3">
            <h2 className="text-lg font-serif text-[#141416] font-medium">1. Data Controller Identification</h2>
            <p>
              This privacy notice outlines how Niraj Jewellers Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), registered in England &amp; Wales, collects, processes, and safeguards personal data acquired through our digital atelier (<span className="text-[#141416] font-medium">niraj-jewellers.co.uk</span>) and our flagship showroom at <span className="text-[#141416] font-medium">{NIRAJ_SHOWROOM_ADDRESS}</span>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-[#141416] font-medium">2. Information We Collect</h2>
            <p>We collect and process minimal personal information strictly required to deliver bespoke jewellery commissions, verify high-value transactions, and coordinate bespoke showroom consultations:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#141416]">
              <li><strong>Contact Identification:</strong> Full name, telephone/WhatsApp mobile number, and email address.</li>
              <li><strong>Bespoke Commission Specifications:</strong> Indicative budget tiers, ring sizes, gold karat preferences (22ct/18ct), custom engraving text, and CAD design references.</li>
              <li><strong>AML / KYC Verification (High-Value Bullion &amp; Gold Purchases):</strong> In strict compliance with UK Money Laundering Regulations 2017 and HMRC High-Value Dealer supervision, transactions exceeding statutory thresholds require photographic government ID (Passport/Photocard Driving Licence) and proof of address.</li>
              <li><strong>Technical &amp; Session Telemetry:</strong> Anonymized server logs, browser user-agent, and cookie preferences stored strictly to preserve user session security and language preferences.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-[#141416] font-medium">3. Lawful Basis for Processing</h2>
            <p>We process your data under the following Article 6 UK GDPR lawful bases:</p>
            <div className="grid sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8]">
                <h3 className="font-semibold text-[#141416] mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Contractual Necessity
                </h3>
                <p className="text-xs text-[#5A5960]">Handcrafting custom jewellery, processing deposits, and arranging insured Royal Mail Special Delivery dispatch.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8]">
                <h3 className="font-semibold text-[#141416] mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Legal Compliance
                </h3>
                <p className="text-xs text-[#5A5960]">UK Hallmarking Act 1973 recordkeeping and HMRC Anti-Money Laundering statutory compliance.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-[#141416] font-medium">4. Third-Party Disclosures &amp; Security</h2>
            <p>
              We maintain a strict zero-sale policy: your personal information is never sold, leased, or monetized to third-party marketing networks. We share limited data strictly with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#141416]">
              <li><strong>London Assay Office (Goldsmiths&apos; Hall):</strong> For hallmarking certification records.</li>
              <li><strong>Royal Mail Special Delivery / Specialized Couriers:</strong> Name and address strictly for tamper-evident, fully insured carriage.</li>
              <li><strong>WhatsApp Business / Meta:</strong> Direct end-to-end encrypted VIP messaging when you initiate a consultation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-serif text-[#141416] font-medium">5. Data Retention &amp; Your Statutory Rights</h2>
            <p>
              Under UK GDPR, you retain the right to access, rectify, or request erasure of your personal data. Accounting and AML-related transaction records are retained for a statutory period of 6 years in accordance with UK law.
            </p>
            <p>
              To exercise any privacy rights, contact our workshop team at <span className="text-[#8C6212] font-mono font-semibold">{NIRAJ_UK_PHONE}</span>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E8DEC8] flex flex-col sm:flex-row justify-between items-center text-xs text-[#7A7880] gap-3">
          <span>&copy; {new Date().getFullYear()} Niraj Jewellers Ltd. All rights reserved.</span>
          <Link href="/terms" className="text-[#8C6212] hover:underline font-semibold">
            Atelier Terms &amp; Hallmarking Guarantee &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
