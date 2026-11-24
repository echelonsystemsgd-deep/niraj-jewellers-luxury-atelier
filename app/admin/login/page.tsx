import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lock, Shield, Sparkles, ArrowLeft } from "lucide-react";
import { loginAction } from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "Staff & Proprietor Portal | Niraj Jewellers Ltd",
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
    <div className="min-h-screen bg-[#FAF9F5] text-[#141416] flex flex-col justify-center items-center px-4 py-12 selection:bg-[#C6A75E]/30 relative overflow-hidden">
      {/* Subtle Hairline Frame Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A75E]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A75E]/40 to-transparent" />
      </div>

      <div className="relative w-full max-w-md bg-white border border-[#E7E2DA] rounded-2xl p-8 sm:p-10 shadow-xl">
        {/* Brand Crest Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-8">
          <div className="relative w-16 h-16 rounded-2xl bg-[#FAF9F5] border border-[#D4AF37] flex items-center justify-center shadow-xs overflow-hidden p-1.5">
            <Image
              src="/NIRAJ_LOGO9.png"
              alt="Niraj Jewellers Ltd Official Crest"
              width={52}
              height={52}
              unoptimized
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-wider uppercase text-[#141416]">
              NIRAJ JEWELLERS <span className="text-[#996515]">LTD</span>
            </h1>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#7A705E] mt-1">
              HAYES · LONDON · SINCE 1984
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8C6212] mt-1">
              Atelier Proprietor & Staff Portal
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
            <label className="block font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#544D42] mb-1.5">
              Staff Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@niraj-jewellers.co.uk"
              autoComplete="off"
              defaultValue=""
              className="w-full h-12 px-4 rounded-xl border border-[#E7E2DA] bg-[#FAF9F5] text-sm text-[#141416] placeholder:text-[#6B665E] focus:outline-none focus:border-[#C6A75E] focus:bg-white transition-all font-sans"
            />
          </div>

          <div>
            <label className="block font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#544D42] mb-1.5">
              Security Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••••••"
              autoComplete="new-password"
              defaultValue=""
              className="w-full h-12 px-4 rounded-xl border border-[#E7E2DA] bg-[#FAF9F5] text-sm text-[#141416] placeholder:text-[#6B665E] focus:outline-none focus:border-[#C6A75E] focus:bg-white transition-all font-sans"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-[#141416] hover:bg-[#C6A75E] hover:text-[#141416] text-[#FAF9F5] font-mono text-xs uppercase tracking-[0.18em] font-bold shadow-sm active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Lock className="w-4 h-4" />
            <span>Enter Atelier Dashboard</span>
          </button>
        </form>

        {/* Security Disclaimers */}
        <div className="mt-8 pt-6 border-t border-[#E7E2DA] text-center space-y-2 text-xs text-[#544D42]">
          <p className="flex items-center justify-center gap-1.5 font-medium text-[#8C6212] font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A75E]" />
            <span>Private Goldsmith Administration</span>
          </p>
          <p className="font-sans text-xs text-[#544D42]">
            Restricted access to authorized Niraj Jewellers Ltd personnel only.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="text-[#141416] hover:text-[#996515] font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Showroom</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
