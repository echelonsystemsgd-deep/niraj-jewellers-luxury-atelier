import { Metadata } from "next";
import { getGlobalSettings } from "@/lib/db";
import { ShowroomForm } from "@/components/admin/showroom-form";

export const metadata: Metadata = {
  title: "Showroom Hours & Business Legal | Niraj Jewellers Ltd",
  description: "Update showroom hours, direct phone line and VAT credentials.",
};

export default async function AdminShowroomPage() {
  const settings = await getGlobalSettings();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
          Showroom Operating Hours & Legal
        </h1>
        <p className="text-xs text-[#5A5960] mt-1">
          Keep your Hayes atelier phone, opening hours, and VAT details accurate.
        </p>
      </div>

      <ShowroomForm initialSettings={settings} />
    </div>
  );
}
