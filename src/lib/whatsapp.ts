import { nurseryConfig } from "@/config/nursery.config";

export function buildWhatsAppUrl(customMessage?: string): string {
  const cleanNumber = nurseryConfig.contact.whatsappNumber.replace(/\D/g, "");
  const message = customMessage ?? nurseryConfig.contact.whatsappDefaultMessage;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
