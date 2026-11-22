import { Metadata } from "next";
import {
  HelpCircle,
  LogIn,
  Edit3,
  PlusCircle,
  Camera,
  Layers,
  Sparkles,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Atelier Handbook & Help Guide | Niraj Jewellers Ltd",
  description: "Plain English step-by-step guide for store management.",
};

export default function AdminHelpGuidePage() {
  const guides = [
    {
      icon: LogIn,
      title: "1. How to Log In From Your Phone",
      steps: [
        "Open www.niraj-jewellers.co.uk on your Safari or Chrome browser.",
        "Scroll to the very bottom footer and tap 'Staff Portal' (or bookmark /admin).",
        "Type your email (nirajjewellers@hotmail.com) and your password.",
        "Tap 'Enter Atelier Dashboard' to open your store controls.",
      ],
    },
    {
      icon: Edit3,
      title: "2. How to Change a Price or Weight",
      steps: [
        "Tap 'Vault Pieces' on the bottom bar of your screen.",
        "Search or find the piece you wish to edit (e.g. Calcutta Filigree Suite).",
        "Tap 'Edit Details & Photos'.",
        "Update the gold weight in grams or price label.",
        "Tap 'Publish Live' at the top right. Changes will appear live on the website in seconds!",
      ],
    },
    {
      icon: PlusCircle,
      title: "3. How to Add a New Jewelry Piece",
      steps: [
        "Tap the gold ＋ button (or 'Add New Piece').",
        "Enter the title of the piece (e.g. '22ct Solid Gold Temple Kada').",
        "Select the category (Bridal, 22ct Gold, Rings, or Polki).",
        "Enter the gold weight, hallmark stamp (London Assay 916), and description.",
        "Paste or upload your photo.",
        "Tap 'Publish Live' to showcase it immediately to bridal customers.",
      ],
    },
    {
      icon: Camera,
      title: "4. Uploading Photos From Your Phone",
      steps: [
        "Tap 'Media' on your bottom navigation bar.",
        "Tap 'Tap to choose photo from iPhone / Gallery'.",
        "Select a photo from your camera roll or take a fresh photo in the showroom.",
        "The system will automatically shrink the file size so your website stays super fast and 100% free.",
        "Tap 'Copy Link' and paste it into any piece's photo field.",
      ],
    },
    {
      icon: Layers,
      title: "5. Changing What Appears on the Homepage",
      steps: [
        "Tap 'Vault Pieces' and open any piece you love.",
        "Tick 'Top 3 Masterpiece Slider' if you want it featured at the very top of the homepage with looping video.",
        "Tick 'Infinite Motion Ribbon' to feature it in the 12 continuously gliding pieces.",
        "Tap 'Publish Live' to update the homepage immediately.",
      ],
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
          Atelier Store Management Handbook
        </h1>
        <p className="text-xs text-[#5A5960] mt-1">
          Simple, plain-English instructions for managing Niraj Jewellers Ltd from your smartphone.
        </p>
      </div>

      {/* Support Card */}
      <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-[#8C6212] shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-sm font-bold text-[#141416]">
              Developer Managed & Protected
            </h3>
            <p className="text-xs text-[#5A5960]">
              Need a structural design change, new section, or complex edit? We manage the code for you.
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold text-[#8C6212] bg-[#FAF8F5] border border-[#E8DEC8] px-3 py-1.5 rounded-lg shrink-0">
          Monthly Retainer Active (£10/mo)
        </span>
      </div>

      {/* Guide Cards */}
      <div className="space-y-4">
        {guides.map((g, idx) => {
          const Icon = g.icon;
          return (
            <div
              key={idx}
              className="p-5 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-3"
            >
              <h3 className="font-serif text-base font-bold text-[#141416] flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-[#8C6212]" />
                <span>{g.title}</span>
              </h3>

              <ol className="space-y-2 pl-6 list-decimal text-xs text-[#4A4A52] leading-relaxed">
                {g.steps.map((step, sIdx) => (
                  <li key={sIdx}>{step}</li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
}
