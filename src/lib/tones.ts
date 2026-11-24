import type { AccentTone } from "@/config/nursery.config";

export const toneClasses: Record<
  AccentTone,
  {
    cardBg: string;
    cardBorder: string;
    iconBg: string;
    iconText: string;
    badgeBg: string;
    badgeText: string;
    checkText: string;
  }
> = {
  sky: {
    cardBg: "bg-sky-50/70",
    cardBorder: "border-sky-200/80",
    iconBg: "bg-sky-100",
    iconText: "text-sky-600",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    checkText: "text-sky-600",
  },
  sun: {
    cardBg: "bg-amber-50/75",
    cardBorder: "border-amber-200/80",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
    checkText: "text-amber-600",
  },
  mint: {
    cardBg: "bg-emerald-50/70",
    cardBorder: "border-emerald-200/80",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
    checkText: "text-emerald-600",
  },
};
