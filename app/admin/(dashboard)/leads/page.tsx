import { Metadata } from "next";
import { getLeads, calculateLeadMetrics } from "@/lib/db/leads";
import { LeadsTable } from "@/components/admin/leads-table";
import { Inbox, Sparkles, Calendar, PhoneCall, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Enquiries & Leads | Niraj Jewellers Ltd",
  description: "Review and manage in-house consultation requests and viewing appointments.",
};

export default async function AdminLeadsPage() {
  const leads = await getLeads();
  const metrics = calculateLeadMetrics(leads);

  return (
    <div className="p-3.5 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-4 sm:space-y-6">
      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-serif text-xl sm:text-3xl font-bold tracking-tight text-[#141416]">
            Client Enquiries &amp; Consultations
          </h1>
          <p className="text-[11px] sm:text-xs text-[#5A5960] mt-0.5">
            Manage incoming requests from the In-House Quote Form and Atelier Consultation Form.
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF5E8] border border-[#D4AF37]/50 text-xs font-semibold text-[#8C6212] self-start sm:self-auto shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
          <span>Real-Time Lead Capture Active</span>
        </span>
      </div>

      {/* 2. Responsive Metrics Strip */}
      {/* Mobile 2x2 Stats Strip (< sm) */}
      <div className="sm:hidden grid grid-cols-2 gap-2">
        <div className="p-3 bg-white border border-[#E8DEC8] rounded-xl shadow-luxury-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#544D42] block">
            Total Enquiries
          </span>
          <span className="font-serif text-xl font-bold text-[#141416] block mt-0.5">
            {metrics.total}
          </span>
        </div>
        <div className="p-3 bg-white border border-[#E8DEC8] rounded-xl shadow-luxury-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block">
              New Enquiries
            </span>
            {metrics.newLeads > 0 && (
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            )}
          </div>
          <span className="font-serif text-xl font-bold text-emerald-800 block mt-0.5">
            {metrics.newLeads}
          </span>
        </div>
        <div className="p-3 bg-white border border-[#E8DEC8] rounded-xl shadow-luxury-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6212] block">
            Booked
          </span>
          <span className="font-serif text-xl font-bold text-[#8C6212] block mt-0.5">
            {metrics.booked}
          </span>
        </div>
        <div className="p-3 bg-white border border-[#E8DEC8] rounded-xl shadow-luxury-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#544D42] block">
            Contacted
          </span>
          <span className="font-serif text-xl font-bold text-[#141416] block mt-0.5">
            {metrics.contacted}
          </span>
        </div>
      </div>

      {/* Desktop 4-Card Grid (sm+) */}
      <div className="hidden sm:grid sm:grid-cols-4 gap-3">
        <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl shadow-luxury-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#544D42] block">
            Total Enquiries
          </span>
          <span className="font-serif text-2xl font-bold text-[#141416] mt-0.5 block">
            {metrics.total}
          </span>
        </div>

        <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl shadow-luxury-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block">
              New Enquiries
            </span>
            {metrics.newLeads > 0 && (
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            )}
          </div>
          <span className="font-serif text-2xl font-bold text-emerald-800 mt-0.5 block">
            {metrics.newLeads}
          </span>
        </div>

        <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl shadow-luxury-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6212] block">
            Consultations Booked
          </span>
          <span className="font-serif text-2xl font-bold text-[#8C6212] mt-0.5 block">
            {metrics.booked}
          </span>
        </div>

        <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl shadow-luxury-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#544D42] block">
            In Progress / Contacted
          </span>
          <span className="font-serif text-2xl font-bold text-[#141416] mt-0.5 block">
            {metrics.contacted}
          </span>
        </div>
      </div>

      {/* 3. Luxury Leads Table & Filters */}
      <LeadsTable initialLeads={leads} />
    </div>
  );
}
