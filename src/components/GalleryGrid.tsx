"use client";

import Image from "next/image";
import { useState } from "react";
import { Expand, X } from "lucide-react";
import type { NurseryConfig } from "@/config/nursery.config";

type GalleryItem = NurseryConfig["gallery"]["items"][number];

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            className="group relative overflow-hidden rounded-3xl border border-sky-100 bg-white text-right shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-sky-50">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
              <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-sky-800 shadow-sm">
                {item.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold text-slate-800">{item.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="إغلاق الصورة"
              className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md transition-colors hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <Image
                src={selected.imageUrl}
                alt={selected.alt}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <p className="text-xs font-bold text-sky-600">{selected.category}</p>
                <h4 className="text-lg font-extrabold text-slate-900">
                  {selected.title}
                </h4>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                صورة تجريبية (Unsplash)
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
