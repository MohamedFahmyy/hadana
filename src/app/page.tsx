import Image from "next/image";
import {
  Apple,
  Baby,
  CalendarDays,
  Camera,
  CheckCircle2,
  Clock,
  GraduationCap,
  HeartHandshake,
  Info,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Puzzle,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Trees,
} from "lucide-react";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Navbar } from "@/components/Navbar";
import { RegistrationForm } from "@/components/RegistrationForm";
import { nurseryConfig } from "@/config/nursery.config";
import { toneClasses } from "@/lib/tones";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const aboutIconMap = {
  shield: ShieldCheck,
  heart: HeartHandshake,
  puzzle: Puzzle,
};

const featureIconMap = {
  camera: Camera,
  teacher: GraduationCap,
  apple: Apple,
  palette: Palette,
  trees: Trees,
  smile: Smile,
};

function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
}: {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "center" | "right";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-10 max-w-2xl text-center sm:mb-12"
          : "mb-8 max-w-2xl text-right"
      }
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold text-sky-800 sm:text-sm">
        <Sparkles className="h-3.5 w-3.5 text-amber-500" />
        <span>{badge}</span>
      </span>
      <h2 className="mt-3 text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const {
    brand,
    contact,
    hero,
    about,
    stages,
    features,
    gallery,
    scheduleAndPricing,
    testimonials,
    map,
    registration,
    footer,
  } = nurseryConfig;

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-[#f8fcff] to-white pb-14 pt-8 sm:pb-20 sm:pt-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
            <div className="animate-fade-up lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold text-amber-800 shadow-xs sm:text-sm">
                <Star className="h-4 w-4 fill-amber-400 text-amber-500" />
                <span>{hero.badge}</span>
              </span>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                {hero.headline}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {hero.subheadline}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3.5 text-base font-extrabold text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{hero.primaryCta}</span>
                </a>

                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sky-200 bg-white px-6 py-3.5 text-base font-bold text-sky-800 shadow-xs transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50"
                >
                  <Phone className="h-4 w-4 text-sky-600" />
                  <span>
                    {hero.secondaryCta} ({contact.phoneDisplay})
                  </span>
                </a>
              </div>

              <ul className="mt-7 flex flex-wrap gap-3">
                {hero.highlights.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-2xl border border-emerald-100 bg-white/90 px-3.5 py-2 text-xs font-bold text-slate-700 shadow-xs sm:text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative lg:col-span-6">
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-sky-100 shadow-xl shadow-sky-200/50">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={hero.imageUrl}
                    alt={hero.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="animate-float-slow mt-4 rounded-3xl border border-amber-200 bg-white/95 p-4 shadow-lg sm:absolute sm:-bottom-5 sm:right-6 sm:mt-0 sm:max-w-xs">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Baby className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">
                      {hero.floatingCardTitle}
                    </p>
                    <p className="text-xs text-slate-600">
                      {hero.floatingCardSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Section */}
        <section id="about" className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeader
              badge={about.badge}
              title={about.title}
              subtitle={about.description}
            />

            <div className="mb-8 rounded-3xl border border-sky-100 bg-gradient-to-l from-sky-50 via-amber-50/40 to-emerald-50/50 p-6 text-center sm:p-8">
              <p className="text-sm font-extrabold text-sky-800">
                {about.missionTitle}
              </p>
              <p className="mx-auto mt-2 max-w-3xl text-base font-semibold leading-relaxed text-slate-700 sm:text-lg">
                {about.missionText}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {about.values.map((val) => {
                const Icon = aboutIconMap[val.icon];
                const tone = toneClasses[val.tone];
                return (
                  <article
                    key={val.id}
                    className={`rounded-3xl border ${tone.cardBorder} ${tone.cardBg} p-6 transition-transform duration-300 hover:-translate-y-1`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone.iconBg} ${tone.iconText}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                      {val.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {val.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Age Stages Section */}
        <section id="stages" className="bg-[#f4faff] py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeader
              badge={stages.badge}
              title={stages.title}
              subtitle={stages.subtitle}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {stages.items.map((stage) => {
                const tone = toneClasses[stage.tone];
                return (
                  <article
                    key={stage.id}
                    className="flex flex-col justify-between rounded-3xl border border-sky-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`inline-flex rounded-full px-3.5 py-1 text-xs font-extrabold ${tone.badgeBg} ${tone.badgeText}`}
                        >
                          {stage.ageRange}
                        </span>
                        <Baby className={`h-5 w-5 ${tone.iconText}`} />
                      </div>
                      <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                        {stage.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {stage.summary}
                      </p>

                      <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                        {stage.highlights.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 text-sm font-medium text-slate-700"
                          >
                            <CheckCircle2
                              className={`mt-0.5 h-4 w-4 shrink-0 ${tone.checkText}`}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#register"
                      className="mt-6 inline-flex items-center justify-center rounded-2xl border border-sky-200 bg-sky-50/60 px-4 py-2.5 text-sm font-bold text-sky-800 transition-colors hover:bg-sky-100"
                    >
                      استفسر عن هذه المرحلة
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Features Section */}
        <section id="features" className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeader
              badge={features.badge}
              title={features.title}
              subtitle={features.subtitle}
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.items.map((feat) => {
                const Icon = featureIconMap[feat.icon];
                const tone = toneClasses[feat.tone];
                return (
                  <article
                    key={feat.id}
                    className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone.iconBg} ${tone.iconText}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {feat.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Gallery Section */}
        <section id="gallery" className="bg-[#f6fcf9] py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeader
              badge={gallery.badge}
              title={gallery.title}
              subtitle={gallery.subtitle}
            />
            <GalleryGrid items={gallery.items} />
          </div>
        </section>

        {/* 6. Schedule & Pricing Section */}
        <section id="pricing" className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeader
              badge={scheduleAndPricing.badge}
              title={scheduleAndPricing.title}
              subtitle={scheduleAndPricing.subtitle}
            />

            <div className="mb-8 flex items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-xs font-bold text-amber-900 sm:text-sm">
              <Info className="h-4 w-4 shrink-0 text-amber-600" />
              <span>{scheduleAndPricing.demoNote}</span>
            </div>

            {/* Schedule Table */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-sky-100 bg-sky-50/40 shadow-xs">
              <div className="border-b border-sky-100 bg-sky-100/60 px-6 py-4">
                <h3 className="flex items-center gap-2 text-base font-extrabold text-sky-950 sm:text-lg">
                  <Clock className="h-5 w-5 text-sky-600" />
                  <span>جدول المواعيد اليومية (قيم تجريبية)</span>
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[540px] text-right text-sm">
                  <thead>
                    <tr className="border-b border-sky-100 text-slate-600">
                      <th className="px-6 py-3.5 font-bold">الفترة</th>
                      <th className="px-6 py-3.5 font-bold">التوقيت</th>
                      <th className="px-6 py-3.5 font-bold">التفاصيل</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sky-100 bg-white">
                    {scheduleAndPricing.schedules.map((row) => (
                      <tr key={row.label} className="hover:bg-sky-50/40">
                        <td className="px-6 py-4 font-bold text-slate-900">
                          {row.label}
                        </td>
                        <td className="px-6 py-4 font-semibold text-sky-700">
                          {row.time}
                        </td>
                        <td className="px-6 py-4 text-slate-600">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {scheduleAndPricing.plans.map((plan) => {
                const tone = toneClasses[plan.tone];
                return (
                  <article
                    key={plan.id}
                    className={`relative flex flex-col justify-between rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                      plan.popular
                        ? "border-amber-300 bg-gradient-to-b from-amber-50/70 to-white shadow-lg shadow-amber-100"
                        : "border-slate-200 bg-white shadow-xs"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-extrabold ${tone.badgeBg} ${tone.badgeText}`}
                        >
                          {plan.hours}
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
                          سعر تجريبي
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                        {plan.name}
                      </h3>

                      <div className="mt-4 flex items-baseline gap-1.5">
                        <span className="text-3xl font-extrabold text-slate-900">
                          {plan.priceEgp}
                        </span>
                        <span className="text-sm font-semibold text-slate-500">
                          {plan.period}
                        </span>
                      </div>

                      <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                        {plan.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <CheckCircle2
                              className={`mt-0.5 h-4 w-4 shrink-0 ${tone.checkText}`}
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={buildWhatsAppUrl(
                        `السلام عليكم، أرغب في الاستفسار عن "${plan.name}" في ${brand.name}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold transition-colors ${
                        plan.popular
                          ? "bg-amber-400 text-slate-900 hover:bg-amber-300"
                          : "bg-sky-600 text-white hover:bg-sky-700"
                      }`}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>احجز بهذه الباقة</span>
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. Demo Testimonials Section */}
        <section id="testimonials" className="bg-[#f4faff] py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeader
              badge={testimonials.badge}
              title={testimonials.title}
              subtitle={testimonials.subtitle}
            />

            <div
              role="note"
              className="mx-auto mb-8 flex max-w-3xl items-start gap-3 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/90 p-4 text-xs font-bold leading-relaxed text-amber-950 sm:text-sm"
            >
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <span>{testimonials.demoDisclaimer}</span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.items.map((item) => {
                const tone = toneClasses[item.tone];
                return (
                  <article
                    key={item.id}
                    className={`flex flex-col justify-between rounded-3xl border ${tone.cardBorder} bg-white p-6 shadow-xs`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div
                          className="flex items-center gap-0.5 text-amber-400"
                          aria-label={`تقييم ${item.rating} من 5`}
                        >
                          {Array.from({ length: item.rating }).map((_, idx) => (
                            <Star
                              key={idx}
                              className="h-4 w-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-800">
                          {item.demoLabel}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-slate-700">
                        {item.quote}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <p className="text-sm font-extrabold text-slate-900">
                        {item.parentName}
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        {item.childStage}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. Location + 9. Registration Form */}
        <section id="location" className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              {/* 8. Location & Map */}
              <div className="lg:col-span-6">
                <SectionHeader
                  badge="موقعنا وساعات العمل"
                  title="يسعدنا زيارتكم والتعرف على الحضانة"
                  subtitle="يمكنك معاينة الفصول والحديقة والالتقاء بالإدارة قبل التسجيل."
                  align="right"
                />

                <div className="space-y-4 rounded-3xl border border-sky-100 bg-sky-50/50 p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-500">العنوان</p>
                      <p className="text-sm font-bold text-slate-800 sm:text-base">
                        {contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <CalendarDays className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-500">
                        أيام وساعات العمل
                      </p>
                      <p className="text-sm font-bold text-slate-800">
                        {contact.workingDays} — {contact.workingHours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-500">
                        رقم التواصل المباشر
                      </p>
                      <a
                        href={contact.phoneHref}
                        dir="ltr"
                        className="inline-block text-sm font-extrabold text-emerald-700 hover:underline sm:text-base"
                      >
                        {contact.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-3xl border border-sky-100 bg-slate-100 shadow-sm">
                  <iframe
                    title={`خريطة موقع ${brand.name}`}
                    src={map.embedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full border-0 sm:h-72"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-2 bg-sky-50 px-4 py-3 text-xs text-slate-600">
                    <span>{map.note}</span>
                    <a
                      href={map.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sky-700 hover:underline"
                    >
                      افتح في خرائط جوجل
                    </a>
                  </div>
                </div>
              </div>

              {/* 9. Registration Form */}
              <div id="register" className="scroll-mt-24 lg:col-span-6">
                <SectionHeader
                  badge={registration.badge}
                  title={registration.title}
                  subtitle={registration.subtitle}
                  align="right"
                />
                <RegistrationForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="border-t border-sky-100 bg-slate-900 py-10 text-slate-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-amber-300 text-white">
                  <Star className="h-4 w-4 fill-white" />
                </span>
                <span className="text-lg font-extrabold text-white">
                  {brand.name}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {footer.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-white">روابط سريعة</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-sky-300">
                    عن الحضانة
                  </a>
                </li>
                <li>
                  <a href="#stages" className="hover:text-sky-300">
                    المراحل العمرية
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-sky-300">
                    المواعيد والأسعار
                  </a>
                </li>
                <li>
                  <a href="#register" className="hover:text-sky-300">
                    نموذج التسجيل
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-white">تواصل معنا</h3>
              <p className="mt-3 text-sm text-slate-400">{contact.address}</p>
              <p className="mt-1.5 text-sm text-slate-400">
                الهاتف:{" "}
                <a
                  href={contact.phoneHref}
                  dir="ltr"
                  className="font-bold text-white hover:text-sky-300"
                >
                  {contact.phoneDisplay}
                </a>
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-extrabold text-white hover:bg-emerald-600"
              >
                <MessageCircle className="h-4 w-4" />
                <span>مراسلة واتساب</span>
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row">
            <p>
              © {brand.copyrightYear} {brand.name}. جميع الحقوق محفوظة.
            </p>
            <p className="rounded-full bg-slate-800 px-3 py-1 font-semibold text-amber-300">
              {footer.demoCredit}
            </p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}
