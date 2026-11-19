import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian text-platinum flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-atelier border border-atelier-border shadow-2xl">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-950/60 border border-gold-500/30 text-gold-400 mx-auto">
          <Compass className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400">Error 404</p>
          <h1 className="font-serif text-3xl font-light text-white tracking-tight">Piece Not Found</h1>
          <p className="text-sm text-platinum-muted leading-relaxed">
            The page or bespoke archive you are seeking is unavailable or has been relocated within our atelier catalog.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-obsidian font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Atelier</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
