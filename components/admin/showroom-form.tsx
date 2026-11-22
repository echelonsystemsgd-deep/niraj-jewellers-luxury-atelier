"use client";

import { useState } from "react";
import { Save, Check, AlertCircle, Store, Phone, Clock, FileText } from "lucide-react";
import { updateSettingsAction, SettingsPayload } from "@/app/admin/actions";

interface ShowroomFormProps {
  initialSettings: SettingsPayload;
}

export function ShowroomForm({ initialSettings }: ShowroomFormProps) {
  const [formData, setFormData] = useState<SettingsPayload>(initialSettings);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: keyof SettingsPayload, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleHourChange = (day: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      opening_hours: {
        ...prev.opening_hours,
        [day]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (!formData.vat_number.trim() || !formData.company_reg.trim()) {
      setError("VAT Number and Company Registration are legally required.");
      setLoading(false);
      return;
    }

    try {
      const res = await updateSettingsAction(formData);
      if (res.error) {
        setError(res.error);
      } else {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to update settings.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const days = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>✓ Showroom contact and opening hours updated live across the entire website!</span>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-800 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      {/* A. Business Credentials & Legal (Required) */}
      <div className="p-5 sm:p-6 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-4">
        <h2 className="font-serif text-base font-bold text-[#141416] border-b border-[#E8DEC8]/60 pb-3 flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#8C6212]" />
          <span>Legal & Business Registration (Required)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
              VAT Registration Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.vat_number}
              onChange={(e) => handleChange("vat_number", e.target.value)}
              placeholder="e.g. GB 674 7451 05"
              className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-medium text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
              Companies House Registration <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.company_reg}
              onChange={(e) => handleChange("company_reg", e.target.value)}
              placeholder="e.g. Registered in England & Wales"
              className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs font-medium text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* B. Direct Contact & WhatsApp */}
      <div className="p-5 sm:p-6 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-4">
        <h2 className="font-serif text-base font-bold text-[#141416] border-b border-[#E8DEC8]/60 pb-3 flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#8C6212]" />
          <span>Showroom Contact Lines</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
              UK Display Phone
            </label>
            <input
              type="text"
              value={formData.phone_uk}
              onChange={(e) => handleChange("phone_uk", e.target.value)}
              className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
              WhatsApp Direct Number (No + sign)
            </label>
            <input
              type="text"
              value={formData.whatsapp_number}
              onChange={(e) => handleChange("whatsapp_number", e.target.value)}
              className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A52] mb-1.5">
            Storefront Address (Hayes)
          </label>
          <input
            type="text"
            value={formData.showroom_address}
            onChange={(e) => handleChange("showroom_address", e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416]"
          />
        </div>
      </div>

      {/* C. London Operating Hours */}
      <div className="p-5 sm:p-6 bg-white border border-[#E8DEC8] rounded-2xl shadow-luxury-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8DEC8]/60 pb-3">
          <h2 className="font-serif text-base font-bold text-[#141416] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8C6212]" />
            <span>Hayes Atelier Operating Hours</span>
          </h2>

          <button
            type="button"
            onClick={() => {
              setFormData((prev) => ({
                ...prev,
                opening_hours: {
                  monday: "12:00 to 17:00",
                  tuesday: "11:00 to 17:30",
                  wednesday: "11:00 to 17:30",
                  thursday: "11:00 to 17:30",
                  friday: "11:00 to 17:30",
                  saturday: "11:00 to 17:30",
                  sunday: "Closed (Festive Sundays Open)",
                },
              }));
            }}
            className="text-[11px] font-bold text-[#8C6212] bg-[#FAF5E8] hover:bg-[#E8DEC8] px-3 py-1.5 rounded-xl border border-[#D4AF37]/50 transition-colors self-start sm:self-auto"
          >
            Apply Official Hayes Atelier Schedule
          </button>
        </div>

        <div className="space-y-3">
          {days.map((day) => (
            <div
              key={day.key}
              className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DEC8]/60 space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#141416] w-28 shrink-0">
                  {day.label}
                </span>
                <input
                  type="text"
                  value={formData.opening_hours[day.key] || ""}
                  onChange={(e) => handleHourChange(day.key, e.target.value)}
                  placeholder="e.g. 11:00 to 17:30 or Closed"
                  className="flex-1 h-9 px-3 rounded-lg border border-[#E8DEC8] bg-white text-xs text-[#141416] focus:border-[#996515] focus:outline-none"
                />
              </div>

              {/* Quick Preset Pills for this Day */}
              <div className="flex flex-wrap items-center gap-1.5 pl-0 sm:pl-28">
                <span className="text-[9.5px] font-semibold text-[#7A705E]">Presets:</span>
                {[
                  "11:00 to 17:30",
                  "12:00 to 17:00",
                  "Closed (Festive Sundays Open)",
                  "By Appointment Only",
                ].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleHourChange(day.key, preset)}
                    className="text-[9px] font-medium px-2 py-0.5 rounded-md bg-white border border-[#E8DEC8] text-[#5A5960] hover:text-[#996515] hover:border-[#D4AF37] transition-colors"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#85560C] via-[#996515] to-[#85560C] text-white text-xs font-semibold tracking-wider uppercase shadow-sm hover:opacity-95 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          <span>{loading ? "Saving Changes..." : "Save Showroom Details"}</span>
        </button>
      </div>
    </form>
  );
}
