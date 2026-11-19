/**
 * WhatsApp routing utility for Niraj Jewellers
 * Direct line to Viky: +44 7955 565137
 */

export const NIRAJ_PHONE_NUMBER = "447955565137";
export const NIRAJ_DISPLAY_PHONE = "+44 7955 565137";
export const NIRAJ_EMAIL = "nirajjewellersuk@gmail.com";
export const NIRAJ_SHOWROOM_ADDRESS = "136 Uxbridge Road, Hayes, Middlesex, UB4 0JH, UK";
export const NIRAJ_MAPS_LINK = "https://maps.google.com/?q=136+Uxbridge+Road+Hayes+UB4+0JH+UK";
export const NIRAJ_COMPANY_REG = "04870407";
export const NIRAJ_VAT_NUMBER = "GB 842 9617 32"; // Shiva Technology Ltd t/a Niraj Jewellers

export interface WhatsAppMessageOptions {
  source?: string;
  pieceTitle?: string;
  metalPurity?: string;
  category?: string;
  stones?: string;
  estimatedBudget?: string;
  visitDate?: string;
  visitPurpose?: string;
  clientName?: string;
  customNote?: string;
}

export function buildWhatsAppLink(options: WhatsAppMessageOptions = {}): string {
  const {
    source = "website_direct",
    pieceTitle,
    metalPurity,
    category,
    stones,
    estimatedBudget,
    visitDate,
    visitPurpose,
    clientName,
    customNote,
  } = options;

  let message = `Namaste Viky, I am contacting Niraj Jewellers regarding a bespoke consultation.\n\n`;

  if (clientName) {
    message += `👤 *Client Name:* ${clientName}\n`;
  }

  if (pieceTitle) {
    message += `✨ *Piece of Interest:* ${pieceTitle}\n`;
  }

  if (category) {
    message += `💎 *Category:* ${category}\n`;
  }

  if (metalPurity) {
    message += `🌟 *Metal Specification:* ${metalPurity}\n`;
  }

  if (stones) {
    message += `💠 *Stone Preference:* ${stones}\n`;
  }

  if (estimatedBudget) {
    message += `💷 *Estimated Budget:* ${estimatedBudget}\n`;
  }

  if (visitPurpose) {
    message += `🏛️ *Showroom Visit Purpose:* ${visitPurpose}\n`;
  }

  if (visitDate) {
    message += `📅 *Preferred Date/Time:* ${visitDate}\n`;
  }

  if (customNote) {
    message += `📝 *Notes:* ${customNote}\n`;
  }

  message += `\n📍 *Source:* Niraj Digital Atelier (${source})\n`;
  message += `I would love to discuss custom workshop craftsmanship, pricing, and timing with you.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${NIRAJ_PHONE_NUMBER}?text=${encodedMessage}`;
}
