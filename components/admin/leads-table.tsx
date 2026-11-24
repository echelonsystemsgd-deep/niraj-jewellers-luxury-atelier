"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  Trash2,
  ExternalLink,
  ChevronDown,
  Sparkles,
  User,
  Inbox,
  FileText,
  X,
  Edit3,
  Check,
} from "lucide-react";
import { LeadItem } from "@/lib/db/leads";
import {
  updateLeadStatusAction,
  updateLeadNotesAction,
  deleteLeadAction,
} from "@/app/admin/actions";

interface LeadsTableProps {
  initialLeads: LeadItem[];
}

const STATUS_CONFIG: Record<
  LeadItem["status"],
  { label: string; bg: string; text: string; border: string; dot: string }
> = {
  new: {
    label: "New Enquiry",
    bg: "bg-emerald-50",
    text: "text-emerald-800",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
  },
  contacted: {
    label: "Contacted",
    bg: "bg-blue-50",
    text: "text-blue-800",
    border: "border-blue-200",
    dot: "bg-blue-500",
  },
  consultation_booked: {
    label: "Consultation Booked",
    bg: "bg-amber-50",
    text: "text-amber-800",
    border: "border-amber-200",
    dot: "bg-amber-500",
  },
  completed: {
    label: "Completed",
    bg: "bg-stone-100",
    text: "text-stone-700",
    border: "border-stone-200",
    dot: "bg-stone-400",
  },
  archived: {
    label: "Archived",
    bg: "bg-gray-50",
    text: "text-gray-600",
    border: "border-gray-200",
    dot: "bg-gray-400",
  },
};

export function LeadsTable({ initialLeads }: LeadsTableProps) {
  const [leads, setLeads] = useState<LeadItem[]>(initialLeads);

  // Sync state with server updates / revalidations
  useEffect(() => {
    setLeads(initialLeads);
  }, [initialLeads]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedSource, setSelectedSource] = useState<string>("all");
  const [activeLeadModal, setActiveLeadModal] = useState<LeadItem | null>(null);
  const [notesInput, setNotesInput] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Lock background scroll when modal is open
  useEffect(() => {
    if (activeLeadModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeLeadModal]);

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        lead.full_name.toLowerCase().includes(q) ||
        lead.contact.toLowerCase().includes(q) ||
        (lead.phone && lead.phone.toLowerCase().includes(q)) ||
        (lead.email && lead.email.toLowerCase().includes(q)) ||
        lead.service.toLowerCase().includes(q) ||
        lead.message.toLowerCase().includes(q) ||
        (lead.notes && lead.notes.toLowerCase().includes(q));

      const matchesStatus =
        selectedStatus === "all" || lead.status === selectedStatus;

      const matchesSource =
        selectedSource === "all" || lead.source === selectedSource;

      return matchesSearch && matchesStatus && matchesSource;
    });
  }, [leads, searchQuery, selectedStatus, selectedSource]);

  // Handle status update
  const handleStatusChange = async (id: string, newStatus: LeadItem["status"]) => {
    setUpdatingId(id);
    try {
      await updateLeadStatusAction(id, newStatus);
      setLeads((prev) =>
        prev.map((l) =>
          l.id === id ? { ...l, status: newStatus, updated_at: new Date().toISOString() } : l
        )
      );
      if (activeLeadModal && activeLeadModal.id === id) {
        setActiveLeadModal((prev) => prev ? { ...prev, status: newStatus } : null);
      }
      showToast(`✓ Lead marked as ${STATUS_CONFIG[newStatus].label}`);
    } catch (err) {
      console.error(err);
      showToast("✕ Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  // Handle saving notes
  const handleSaveNotes = async () => {
    if (!activeLeadModal) return;
    setSavingNotes(true);
    try {
      await updateLeadNotesAction(activeLeadModal.id, notesInput.trim());
      setLeads((prev) =>
        prev.map((l) =>
          l.id === activeLeadModal.id
            ? { ...l, notes: notesInput.trim(), updated_at: new Date().toISOString() }
            : l
        )
      );
      setActiveLeadModal((prev) => (prev ? { ...prev, notes: notesInput.trim() } : null));
      showToast("✓ Workshop notes saved");
    } catch (err) {
      console.error(err);
      showToast("✕ Failed to save notes");
    } finally {
      setSavingNotes(false);
    }
  };

  // Handle delete lead
  const handleDeleteLead = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to remove the enquiry from "${name}"?`)) {
      return;
    }
    try {
      await deleteLeadAction(id);
      setLeads((prev) => prev.filter((l) => l.id !== id));
      if (activeLeadModal?.id === id) {
        setActiveLeadModal(null);
      }
      showToast("✓ Lead removed");
    } catch (err) {
      console.error(err);
      showToast("✕ Failed to delete lead");
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    const headers = [
      "ID",
      "Date",
      "Name",
      "Contact",
      "Phone",
      "Email",
      "Service",
      "Preferred Contact",
      "Source",
      "Status",
      "Message",
      "Notes",
    ];

    const rows = filteredLeads.map((l) => [
      `"${l.id}"`,
      `"${new Date(l.created_at).toLocaleString('en-GB')}"`,
      `"${l.full_name.replace(/"/g, '""')}"`,
      `"${l.contact.replace(/"/g, '""')}"`,
      `"${(l.phone || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${l.service.replace(/"/g, '""')}"`,
      `"${l.preferred_contact}"`,
      `"${l.source === 'in_house_quote' ? 'In-House Quote Form' : 'Atelier Consultation'}"`,
      `"${STATUS_CONFIG[l.status]?.label || l.status}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `Niraj_Jewellers_Leads_${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("✓ Leads exported to CSV");
  };

  // Build clean WhatsApp Concierge link for quick response
  const getWhatsAppLink = (lead: LeadItem) => {
    let cleanPhone = (lead.phone || lead.contact).replace(/[^\d+]/g, "");
    if (cleanPhone.startsWith("0")) {
      cleanPhone = "44" + cleanPhone.substring(1);
    } else if (cleanPhone.startsWith("+")) {
      cleanPhone = cleanPhone.substring(1);
    }
    const greeting = encodeURIComponent(
      `Hello ${lead.full_name}, thank you for contacting Niraj Jewellers Ltd regarding your inquiry for "${lead.service}". How can our master goldsmiths assist you today?`
    );
    return `https://wa.me/${cleanPhone}?text=${greeting}`;
  };

  const getCleanPhone = (lead: LeadItem) => {
    return (lead.phone || lead.contact).replace(/[^\d+]/g, "");
  };

  const formatLeadDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoStr;
    }
  };

  const formatLeadDay = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return isoStr;
    }
  };

  const formatLeadTime = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "";
    }
  };

  return (
    <div className="space-y-5">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#141416] text-[#FAF8F5] px-4 py-3 rounded-xl border border-[#D4AF37]/50 shadow-2xl text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Search & Filter Toolbar */}
      <div className="bg-white border border-[#E8DEC8] rounded-2xl p-3.5 sm:p-5 shadow-luxury-sm space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#7A705E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search enquiries by customer name, phone, email, or message..."
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#FAF8F5] border border-[#E8DEC8] text-xs text-[#141416] placeholder:text-[#9A98A0] focus:outline-none focus:border-[#996515] transition-colors"
            />
          </div>

          {/* Export & Filter Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleExportCSV}
              className="px-3.5 py-2.5 rounded-xl border border-[#E8DEC8] bg-white hover:bg-[#FAF8F5] text-xs font-semibold text-[#141416] transition-colors flex items-center gap-1.5 shadow-xs"
              title="Download client enquiries as CSV spreadsheet"
            >
              <Download className="w-3.5 h-3.5 text-[#8C6212]" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#F0E8D8]">
          {/* Status Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedStatus("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedStatus === "all"
                  ? "bg-[#996515] text-white shadow-xs"
                  : "bg-[#FAF8F5] text-[#5A5960] hover:bg-[#F3EDE0]"
              }`}
            >
              All Statuses ({leads.length})
            </button>

            {(
              [
                "new",
                "consultation_booked",
                "contacted",
                "completed",
              ] as LeadItem["status"][]
            ).map((st) => {
              const count = leads.filter((l) => l.status === st).length;
              return (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    selectedStatus === st
                      ? "bg-[#141416] text-[#DFBF7A] shadow-xs"
                      : "bg-[#FAF8F5] text-[#5A5960] hover:bg-[#F3EDE0]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${STATUS_CONFIG[st].dot}`}
                  />
                  <span>
                    {STATUS_CONFIG[st].label} ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Source Dropdown Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#544D42]">Source:</span>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="h-8 px-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8DEC8] text-xs font-medium text-[#141416] focus:outline-none focus:border-[#996515] cursor-pointer"
            >
              <option value="all">All Channels</option>
              <option value="in_house_quote">In-House Quote Form</option>
              <option value="atelier_consultation">Atelier Consultation Form</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leads Content: Table on Desktop, Cards on Mobile */}
      {filteredLeads.length === 0 ? (
        <div className="bg-white border border-[#E8DEC8] rounded-2xl p-12 text-center shadow-luxury-sm space-y-3">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#FAF8F5] border border-[#E8DEC8] flex items-center justify-center text-[#8C6212]">
            <Inbox className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#141416]">
            No client enquiries found
          </h3>
          <p className="text-xs text-[#544D42] max-w-sm mx-auto">
            {searchQuery || selectedStatus !== "all" || selectedSource !== "all"
              ? "No leads matched your filter criteria. Try resetting filters."
              : "All new customer enquiries from the in-house quote form and consultation form will appear here."}
          </p>
        </div>
      ) : (
        <>
          {/* 1. Desktop Luxury Table (md+) */}
          <div className="hidden md:block bg-white border border-[#E8DEC8] rounded-2xl overflow-hidden shadow-luxury-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse table-fixed">
                <colgroup>
                  <col className="w-[19%]" />
                  <col className="w-[20%]" />
                  <col className="w-[25%]" />
                  <col className="w-[12%]" />
                  <col className="w-[12%]" />
                  <col className="w-[12%]" />
                </colgroup>
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-[#E8DEC8] text-xs font-bold uppercase tracking-wider text-[#8C6212]">
                    <th className="py-3 px-2.5">Client</th>
                    <th className="py-3 px-2.5">Service &amp; Channel</th>
                    <th className="py-3 px-2.5">Requirements</th>
                    <th className="py-3 px-2">Received</th>
                    <th className="py-3 px-2">Status</th>
                    <th className="py-3 px-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0E8D8] text-xs">
                  {filteredLeads.map((lead) => {
                    const statusMeta = STATUS_CONFIG[lead.status] || STATUS_CONFIG.new;
                    const initials = lead.full_name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase();

                    return (
                      <tr
                        key={lead.id}
                        className="hover:bg-[#FAF8F5]/60 transition-colors group"
                      >
                        {/* Client Column */}
                        <td className="py-3 px-2.5 overflow-hidden">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FAF5E8] to-[#F5ECE0] border border-[#D4AF37]/50 text-[#8C6212] font-serif font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                              {initials}
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="font-semibold text-[#141416] block truncate">
                                {lead.full_name}
                              </span>
                              <div className="flex flex-col gap-0.5 text-xs text-[#544D42] mt-0.5">
                                {lead.phone && (
                                  <a
                                    href={`tel:${getCleanPhone(lead)}`}
                                    className="hover:text-[#996515] inline-flex items-center gap-1 transition-colors truncate"
                                    title="Call customer"
                                  >
                                    <Phone className="w-3 h-3 text-[#8C6212] shrink-0" />
                                    <span className="truncate">{lead.phone}</span>
                                  </a>
                                )}
                                {lead.email && (
                                  <a
                                    href={`mailto:${lead.email}`}
                                    className="hover:text-[#996515] inline-flex items-center gap-1 transition-colors truncate"
                                    title="Email customer"
                                  >
                                    <Mail className="w-3 h-3 text-[#8C6212] shrink-0" />
                                    <span className="truncate">{lead.email}</span>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Service & Channel */}
                        <td className="py-3 px-2.5 overflow-hidden">
                          <span className="font-semibold text-[#141416] block truncate">
                            {lead.service}
                          </span>
                          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8C6212] bg-[#FAF5E8] px-1.5 py-0.5 rounded border border-[#E8DEC8] shrink-0">
                              {lead.source === "in_house_quote"
                                ? "Quote"
                                : "Consultation"}
                            </span>
                            <span className="text-[11px] text-[#544D42] truncate">
                              Via {lead.preferred_contact}
                            </span>
                          </div>
                        </td>

                        {/* Message Preview */}
                        <td className="py-3 px-2.5 overflow-hidden">
                          <p
                            className="text-[#544D42] line-clamp-2 leading-relaxed cursor-pointer hover:text-[#141416]"
                            onClick={() => {
                              setActiveLeadModal(lead);
                              setNotesInput(lead.notes || "");
                            }}
                            title="Click to view full message"
                          >
                            {lead.message || "(No details provided)"}
                          </p>
                          {lead.notes && (
                            <span className="inline-flex items-center gap-1 text-xs text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 mt-1 font-medium truncate max-w-full">
                              <FileText className="w-3 h-3 text-amber-700 shrink-0" />
                              <span className="truncate">Note: {lead.notes}</span>
                            </span>
                          )}
                        </td>

                        {/* Date Received */}
                        <td className="py-3 px-2 text-[#544D42] text-xs whitespace-nowrap overflow-hidden">
                          <span className="block font-medium text-[#141416]">
                            {formatLeadDay(lead.created_at)}
                          </span>
                          <span className="block text-[11px] text-[#7A705E]">
                            {formatLeadTime(lead.created_at)}
                          </span>
                        </td>

                        {/* Status Dropdown */}
                        <td className="py-3 px-2 whitespace-nowrap overflow-hidden">
                          <select
                            value={lead.status}
                            disabled={updatingId === lead.id}
                            onChange={(e) =>
                              handleStatusChange(
                                lead.id,
                                e.target.value as LeadItem["status"]
                              )
                            }
                            className={`text-xs font-bold px-2 py-1 rounded-lg border cursor-pointer focus:outline-none transition-colors w-full ${statusMeta.bg} ${statusMeta.text} ${statusMeta.border}`}
                          >
                            <option value="new">● New</option>
                            <option value="contacted">● Contacted</option>
                            <option value="consultation_booked">● Booked</option>
                            <option value="completed">● Completed</option>
                            <option value="archived">● Archived</option>
                          </select>
                        </td>

                        {/* Actions */}
                        <td className="py-3 px-2 text-right whitespace-nowrap overflow-hidden">
                          <div className="flex items-center justify-end gap-1">
                            {/* WhatsApp Button */}
                            <a
                              href={getWhatsAppLink(lead)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                              title="Message customer on WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>

                            {/* View / Edit Notes */}
                            <button
                              type="button"
                              onClick={() => {
                                setActiveLeadModal(lead);
                                setNotesInput(lead.notes || "");
                              }}
                              className="p-1.5 rounded-lg border border-[#E8DEC8] bg-[#FAF8F5] text-[#8C6212] hover:bg-white hover:border-[#996515] transition-colors"
                              title="View full enquiry & workshop notes"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>

                            {/* Delete Button */}
                            <button
                              type="button"
                              onClick={() => handleDeleteLead(lead.id, lead.full_name)}
                              className="p-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                              title="Delete enquiry"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Mobile Responsive Cards Grid (< md) */}
          <div className="md:hidden space-y-3.5">
            {filteredLeads.map((lead) => {
              const statusMeta = STATUS_CONFIG[lead.status] || STATUS_CONFIG.new;
              return (
                <div
                  key={lead.id}
                  className="bg-white border border-[#E8DEC8] rounded-2xl p-4 shadow-luxury-sm space-y-3"
                >
                  {/* Card Header: Client & Status */}
                  <div className="flex items-start justify-between gap-2 border-b border-[#F0E8D8] pb-3">
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#141416]">
                        {lead.full_name}
                      </h4>
                      <span className="text-xs text-[#544D42] block mt-0.5">
                        {formatLeadDate(lead.created_at)}
                      </span>
                    </div>

                    <select
                      value={lead.status}
                      disabled={updatingId === lead.id}
                      onChange={(e) =>
                        handleStatusChange(
                          lead.id,
                          e.target.value as LeadItem["status"]
                        )
                      }
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg border cursor-pointer ${statusMeta.bg} ${statusMeta.text} ${statusMeta.border}`}
                    >
                      <option value="new">● New</option>
                      <option value="contacted">● Contacted</option>
                      <option value="consultation_booked">● Booked</option>
                      <option value="completed">● Completed</option>
                      <option value="archived">● Archived</option>
                    </select>
                  </div>

                  {/* Service & Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#8C6212]">
                        {lead.service}
                      </span>
                      <span className="text-xs text-[#544D42]">
                        Via {lead.preferred_contact}
                      </span>
                    </div>
                    <p className="text-xs text-[#5A5960] line-clamp-3 leading-relaxed">
                      {lead.message || "(No details provided)"}
                    </p>
                    {lead.notes && (
                      <div className="p-2 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 mt-1">
                        <strong>Workshop Note:</strong> {lead.notes}
                      </div>
                    )}
                  </div>

                  {/* Mobile Quick Contact & Action Buttons */}
                  <div className="pt-2 border-t border-[#F0E8D8] flex items-center gap-2">
                    <a
                      href={getWhatsAppLink(lead)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    {lead.phone && (
                      <a
                        href={`tel:${getCleanPhone(lead)}`}
                        className="py-2 px-3 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-[#141416] text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#8C6212]" />
                        <span>Call</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        setActiveLeadModal(lead);
                        setNotesInput(lead.notes || "");
                      }}
                      className="py-2 px-3 rounded-xl border border-[#E8DEC8] bg-white text-[#8C6212] text-xs font-semibold"
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* 3. Detail & Workshop Notes Modal */}
      {activeLeadModal && (
        <div
          className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveLeadModal(null)}
        >
          <div
            className="bg-white rounded-2xl border border-[#E8DEC8] shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E8DEC8] bg-[#FAF8F5] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6212] block">
                  Client Enquiry Dossier
                </span>
                <h3 className="font-serif text-lg font-bold text-[#141416]">
                  {activeLeadModal.full_name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveLeadModal(null)}
                className="w-8 h-8 rounded-xl border border-[#E8DEC8] bg-white hover:bg-[#FAF8F5] text-[#544D42] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 custom-scrollbar text-xs">
              {/* Meta Grid */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-[#FAF8F5] rounded-xl border border-[#E8DEC8]">
                <div>
                  <span className="text-xs text-[#544D42] uppercase block font-semibold">
                    Service Requested
                  </span>
                  <span className="font-bold text-[#141416] block mt-0.5">
                    {activeLeadModal.service}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#544D42] uppercase block font-semibold">
                    Preferred Contact
                  </span>
                  <span className="font-bold text-[#8C6212] block mt-0.5">
                    {activeLeadModal.preferred_contact}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#544D42] uppercase block font-semibold">
                    Submission Channel
                  </span>
                  <span className="font-semibold text-[#141416] block mt-0.5">
                    {activeLeadModal.source === "in_house_quote"
                      ? "In-House Quote Form"
                      : "Atelier Consultation Form"}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#544D42] uppercase block font-semibold">
                    Received Date
                  </span>
                  <span className="font-semibold text-[#141416] block mt-0.5">
                    {formatLeadDate(activeLeadModal.created_at)}
                  </span>
                </div>
              </div>

              {/* Contact Direct Line */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6212] block mb-1.5">
                  Client Contact Coordinates
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeLeadModal.phone && (
                    <a
                      href={`tel:${getCleanPhone(activeLeadModal)}`}
                      className="px-3 py-2 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] hover:bg-white text-xs font-semibold text-[#141416] flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#8C6212]" />
                      <span>{activeLeadModal.phone}</span>
                    </a>
                  )}
                  {activeLeadModal.email && (
                    <a
                      href={`mailto:${activeLeadModal.email}`}
                      className="px-3 py-2 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] hover:bg-white text-xs font-semibold text-[#141416] flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#8C6212]" />
                      <span>{activeLeadModal.email}</span>
                    </a>
                  )}
                  <a
                    href={getWhatsAppLink(activeLeadModal)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Launch WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Customer Message */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6212] block mb-1.5">
                  Requirements &amp; Project Description
                </span>
                <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl text-xs leading-relaxed text-[#141416]">
                  {activeLeadModal.message || "No custom message entered."}
                </div>
              </div>

              {/* Workshop Internal Notes */}
              <div className="pt-2 border-t border-[#F0E8D8]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C6212]">
                    Private Workshop &amp; Staff Notes
                  </span>
                  <span className="text-xs text-[#544D42]">
                    Visible only to atelier staff
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={notesInput}
                  onChange={(e) => setNotesInput(e.target.value)}
                  placeholder="Record viewing dates, bullion quotes given, or ring size notes..."
                  className="w-full p-3 rounded-xl border border-[#E8DEC8] bg-[#FAF8F5] text-xs text-[#141416] focus:bg-white focus:border-[#996515] focus:outline-none transition-colors"
                />
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    disabled={savingNotes}
                    onClick={handleSaveNotes}
                    className="px-4 py-2 rounded-xl bg-[#141416] hover:bg-[#8C6212] text-white text-xs font-semibold transition-colors flex items-center gap-1.5 disabled:opacity-50"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{savingNotes ? "Saving..." : "Save Notes"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:p-4 border-t border-[#E8DEC8] bg-[#FAF8F5] flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleDeleteLead(activeLeadModal.id, activeLeadModal.full_name)}
                className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 px-2 py-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Lead</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveLeadModal(null)}
                className="px-4 py-2 rounded-xl border border-[#E8DEC8] bg-white text-xs font-semibold text-[#141416]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
