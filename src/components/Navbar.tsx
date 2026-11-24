"use client";

import { useState } from "react";
import { Menu, MessageCircle, Star, X } from "lucide-react";
import { nurseryConfig } from "@/config/nursery.config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { href: "#about", label: "عن الحضانة" },
  { href: "#stages", label: "المراحل" },
  { href: "#features", label: "المميزات" },
  { href: "#gallery", label: "المعرض" },
  { href: "#pricing", label: "المواعيد والأسعار" },
  { href: "#location", label: "الموقع" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/90 backdrop-blur-md">
      {nurseryConfig.isDemo && (
        <div className="bg-gradient-to-l from-sky-600 via-sky-500 to-emerald-500 px-4 py-1.5 text-center text-xs font-semibold text-white sm:text-sm">
          {nurseryConfig.demoNotice}
        </div>
      )}

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-amber-300 text-white shadow-sm">
            <Star className="h-5 w-5 fill-white" />
          </span>
          <div className="leading-tight">
            <span className="block text-base font-extrabold text-slate-900 sm:text-lg">
              {nurseryConfig.brand.name}
            </span>
            <span className="block text-[11px] font-medium text-sky-700">
              {nurseryConfig.brand.city}
            </span>
          </div>
        </a>

        <nav
          aria-label="التنقل الرئيسي"
          className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-1 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-600 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            <span>واتساب</span>
          </a>

          <a
            href="#register"
            className="rounded-full bg-amber-400 px-4 py-2 text-xs font-bold text-slate-900 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-amber-300 sm:text-sm"
          >
            احجز لطفلك
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-slate-700 transition-colors hover:bg-sky-100 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="قائمة الموبايل"
          className="border-t border-sky-100 bg-white px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              <span>تواصل عبر واتساب</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
