import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lock, Shield, Sparkles } from "lucide-react";
import { loginAction } from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "Staff Login | Niraj Jewellers Ltd",
  description: "Authorized owner and staff portal for Niraj Jewellers Ltd Hayes London.",
  robots: {
    index: false,
    follow: false,
  },
};

interface LoginPageProps {
  searchParams: Promise<{ next?: string; error?: string }>;
}

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const next = params.next || "/admin";
  const errorMessage = params.error;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141416] flex flex-col justify-center items-center px-4 py-12 selection:bg-gold-200">
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#E8DEC8_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative w-full max-w-md bg-white border border-[#E8DEC8] rounded-2xl p-8 sm:p-10 shadow-luxury-md">
        {/* Brand Crest Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-8">
          <div className="relative w-16 h-16 rounded-2xl bg-[#FAF8F5] border border-[#D4AF37]/50 flex items-center justify-center shadow-sm overflow-hidden p-1">
            <Image
              src="/NIRAJ_LOGO9.png"
              alt="Niraj Jewellers Ltd Emblem"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-wide uppercase text-[#141416]">
              NIRAJ JEWELLERS <span className="text-[#996515]">LTD</span>
            </h1>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C6212] mt-0.5">
              Hayes • Atelier Staff Portal
            </p>
          </div>
        </div>

        {/* Error Alert if redirected with error */}
        {errorMessage && (
          <div className="mb-6 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2.5">
            <Shield className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form action={loginAction} className="space-y-5">
          <input type="hidden" name="next" value={next} />

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
              Staff Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="nirajjewellers@hotmail.com"
              autoComplete="email"
              className="w-full h-12 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-sm text-[#141416] placeholder:text-[#9A98A0] focus:outline-none focus:border-[#996515] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
              Security Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••••••"
              autoComplete="current-password"
              className="w-full h-12 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-sm text-[#141416] placeholder:text-[#9A98A0] focus:outline-none focus:border-[#996515] focus:bg-white transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-gradient-to-r from-[#85560C] via-[#996515] to-[#85560C] text-white font-medium text-sm tracking-wide shadow-sm hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            <span>Enter Atelier Dashboard</span>
          </button>
        </form>

        {/* Security Disclaimers */}
        <div className="mt-8 pt-6 border-t border-[#E8DEC8] text-center space-y-2 text-[11px] text-[#7A7880]">
          <p className="flex items-center justify-center gap-1.5 font-medium text-[#8C6212]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Goldsmith Administration</span>
          </p>
          <p>Restricted access to authorized Niraj Jewellers Ltd personnel only.</p>
          <div className="pt-2">
            <Link
              href="/"
              className="text-[#996515] hover:underline font-medium inline-flex items-center gap-1"
            >
              ← Return to Public Showroom
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
