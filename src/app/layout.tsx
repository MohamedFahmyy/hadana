import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { nurseryConfig } from "@/config/nursery.config";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: nurseryConfig.seo.title,
  description: nurseryConfig.seo.description,
  keywords: nurseryConfig.seo.keywords,
  openGraph: {
    title: nurseryConfig.seo.title,
    description: nurseryConfig.seo.description,
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f8fcff] text-slate-800 selection:bg-sky-200 selection:text-sky-950">
        {children}
      </body>
    </html>
  );
}
