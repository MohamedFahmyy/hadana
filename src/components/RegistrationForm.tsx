"use client";

import { useState, type FormEvent } from "react";
import { Baby, CheckCircle2, MessageCircle, Phone, User } from "lucide-react";
import { nurseryConfig } from "@/config/nursery.config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function RegistrationForm() {
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childAge, setChildAge] = useState(
    nurseryConfig.registration.ageOptions[1] ?? ""
  );
  const [error, setError] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanName = parentName.trim();
    const cleanPhone = phone.trim();

    if (cleanName.length < 2) {
      setError("من فضلك أدخل اسم ولي الأمر بشكل صحيح.");
      return;
    }

    if (cleanPhone.replace(/\D/g, "").length < 8) {
      setError("من فضلك أدخل رقم هاتف صحيح للتواصل.");
      return;
    }

    setError("");

    const message = [
      `السلام عليكم، أرغب في تسجيل طفلي/طفلتي في ${nurseryConfig.brand.name}:`,
      `- اسم ولي الأمر: ${cleanName}`,
      `- رقم الهاتف: ${cleanPhone}`,
      `- سن الطفل / المرحلة: ${childAge}`,
      `أرجو تزويدي بالتفاصيل وموعد مناسب لزيارة الحضانة.`,
    ].join("\n");

    const whatsappUrl = buildWhatsAppUrl(message);
    setSubmittedUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/60 sm:p-8"
      noValidate
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="parentName"
            className="mb-1.5 block text-sm font-bold text-slate-700"
          >
            اسم ولي الأمر
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sky-500" />
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              placeholder="مثال: أ. محمد أحمد"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-sky-50/40 py-3 pr-10 pl-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="parentPhone"
            className="mb-1.5 block text-sm font-bold text-slate-700"
          >
            رقم الهاتف (يفضّل عليه واتساب)
          </label>
          <div className="relative">
            <Phone className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sky-500" />
            <input
              id="parentPhone"
              name="parentPhone"
              type="tel"
              inputMode="tel"
              dir="ltr"
              required
              placeholder="0100 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-sky-50/40 py-3 pr-10 pl-4 text-right text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="childAge"
            className="mb-1.5 block text-sm font-bold text-slate-700"
          >
            سن الطفل
          </label>
          <div className="relative">
            <Baby className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sky-500" />
            <select
              id="childAge"
              name="childAge"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-sky-50/40 py-3 pr-10 pl-4 text-sm font-medium text-slate-800 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100"
            >
              {nurseryConfig.registration.ageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-xs font-semibold text-rose-700"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-base font-extrabold text-white shadow-md shadow-emerald-200 transition-all hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
        >
          <MessageCircle className="h-5 w-5" />
          <span>{nurseryConfig.registration.submitLabel}</span>
        </button>

        <p className="text-center text-xs leading-relaxed text-slate-500">
          {nurseryConfig.registration.helperNote}
        </p>

        {submittedUrl && (
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-900">
            <span className="flex items-center gap-2 font-semibold">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
              تم تجهيز الرسالة بنجاح! إذا لم يفتح واتساب تلقائياً:
            </span>
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-bold underline"
            >
              افتح واتساب
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
