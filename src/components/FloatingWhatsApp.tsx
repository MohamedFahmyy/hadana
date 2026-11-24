import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-4 py-3 text-sm font-extrabold text-white shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
      </span>
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">تواصل واتساب</span>
    </a>
  );
}
