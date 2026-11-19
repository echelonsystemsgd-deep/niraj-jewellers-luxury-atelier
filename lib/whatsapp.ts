/**
 * WhatsApp routing utility & business credentials for Niraj Jewellers
 * Direct line to Master Jeweller Viky: +44 7955 565137
 */

export const NIRAJ_PHONE_NUMBER = "447955565137";
export const NIRAJ_DISPLAY_PHONE = "+44 7955 565137";
export const NIRAJ_EMAIL = "nirajjewellersuk@gmail.com";
export const NIRAJ_SHOWROOM_ADDRESS = "136 Uxbridge Road, Hayes, Middlesex, UB4 0JH, UK";
export const NIRAJ_MAPS_LINK = "https://maps.google.com/?q=136+Uxbridge+Road+Hayes+UB4+0JH+UK";

// Business credentials placeholders (to be confirmed by Viky)
export const NIRAJ_COMPANY_REG = "[Pending Registration]";
export const NIRAJ_VAT_NUMBER = "[Pending Registration]";

export interface WhatsAppMessageOptions {
  source?: string;
  pieceTitle?: string;
  metalPurity?: string;
  category?: string;
  stones?: string;
  estimatedBudget?: string;
  visitDate?: string;
  visitTime?: string;
  visitPurpose?: string;
  clientName?: string;
  customNote?: string;
  intent?: "bespoke" | "wholesale" | "repair" | "scrap" | "viewing" | "general";
}

/**
 * Builds natural, professional WhatsApp click-to-chat links for clients contacting Viky.
 * Messages sound human, polite, and directly address the client's intent without awkward bot codes.
 */
export function buildWhatsAppLink(options: WhatsAppMessageOptions = {}): string {
  const {
    pieceTitle,
    metalPurity,
    category,
    stones,
    estimatedBudget,
    visitDate,
    visitTime,
    visitPurpose,
    clientName,
    customNote,
    intent = "general",
  } = options;

  let message = "";

  // 1. Wholesale Bullion & Scrap Inquiries
  if (intent === "wholesale") {
    message = `Hi Viky, I am viewing your live gold bullion rates on the Niraj Jewellers website.\n\nCould you please share your current wholesale rates and availability for 24ct / 22ct bullion investment?`;
    if (customNote) {
      message += `\n\n${customNote}`;
    }
  } 
  // 2. Scrap Gold Trade-in
  else if (intent === "scrap") {
    message = `Hi Viky, I have some gold / scrap jewellery that I would like to get valued for trade-in at your Hayes showroom. Could you please let me know your current trade-in rate per gram?`;
    if (customNote) {
      message += `\n\n${customNote}`;
    }
  }
  // 3. Jewellery Repairs & Restorations
  else if (intent === "repair") {
    message = `Hi Viky, I would like to enquire about an in-house jewellery repair at your Hayes workshop.`;
    if (visitPurpose) {
      message += `\n\nService: ${visitPurpose}`;
    }
    if (customNote) {
      message += `\nDetails: ${customNote}`;
    }
  }
  // 4. Showroom VIP Viewing Booking
  else if (intent === "viewing") {
    message = `Hi Viky, I would like to book a private VIP consultation at your 136 Uxbridge Road showroom.`;
    if (clientName) message += `\n\nName: ${clientName}`;
    if (visitPurpose) message += `\nPurpose: ${visitPurpose}`;
    if (visitDate) message += `\nPreferred Date: ${visitDate} ${visitTime ? `at ${visitTime}` : ""}`;
    if (customNote) message += `\nNotes: ${customNote}`;
  }
  // 5. Bespoke Commission Configuration
  else if (intent === "bespoke" || pieceTitle || stones || estimatedBudget) {
    message = `Hi Viky, I've just configured a bespoke jewellery piece on your website:`;
    if (pieceTitle) message += `\n• Piece: ${pieceTitle}`;
    if (category) message += `\n• Category: ${category}`;
    if (metalPurity) message += `\n• Metal: ${metalPurity}`;
    if (stones) message += `\n• Stones: ${stones}`;
    if (estimatedBudget) message += `\n• Budget Tier: ${estimatedBudget}`;
    if (customNote) message += `\n\n${customNote}`;
    else message += `\n\nCould we discuss design options and lead times?`;
  }
  // 6. Natural Fallback / General Enquiries
  else {
    if (customNote) {
      message = customNote;
    } else {
      message = `Hi Viky, I am reaching out from the Niraj Jewellers website and would like to ask a quick question.`;
    }
  }

  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${NIRAJ_PHONE_NUMBER}?text=${encodedMessage}`;
}
