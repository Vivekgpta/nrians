import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeading } from "../components/Section";

export const Route = createFileRoute("/media-vault")({
  head: () => ({
    meta: [
      { title: "Media Vault · Batch 2022–2026" },
      { name: "description", content: "Photos, videos, events, farewell and graduation moments from B.Tech Batch 2022–2026." },
      { property: "og:title", content: "Media Vault · Batch 2022–2026" },
      { property: "og:description", content: "Every captured moment, archived in gold." },
    ],
  }),
  component: MediaVault,
});

type Item = { src: string; cat: "Photos" | "Events" | "Farewell" | "Graduation" | "Videos"; h: number };

const items: Item[] = [
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80", cat: "Photos", h: 500 },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80", cat: "Events", h: 700 },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=900&q=80", cat: "Graduation", h: 600 },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80", cat: "Photos", h: 550 },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80", cat: "Farewell", h: 750 },
  { src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=900&q=80", cat: "Events", h: 500 },
  { src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=900&q=80", cat: "Graduation", h: 700 },
  { src: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=900&q=80", cat: "Graduation", h: 600 },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80", cat: "Photos", h: 550 },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80", cat: "Photos", h: 700 },
  { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=80", cat: "Farewell", h: 500 },
  { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80", cat: "Events", h: 650 },
  { src: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=900&q=80", cat: "Videos", h: 600 },
  { src: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=900&q=80", cat: "Photos", h: 700 },
  { src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=900&q=80", cat: "Farewell", h: 550 },
  { src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=900&q=80", cat: "Events", h: 600 },
];

const cats = ["All", "Photos", "Videos", "Events", "Farewell", "Graduation"] as const;

function MediaVault() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => (cat === "All" ? items : items.filter((i) => i.cat === cat)), [cat]);

  return (
    <div className="px-4 pb-20 pt-16">
      <SectionHeading
        eyebrow="The Archive"
        title="Media Vault"
        description="Every photograph, every event, every smile — all in one place."
      />

      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-wider transition ${
              cat === c
                ? "border-gold bg-gold/15 text-gold gold-glow"
                : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-7xl columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
        {filtered.map((it, i) => (
          <motion.button
            key={it.src + i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.4) }}
            onClick={() => setOpen(it.src)}
            className="glass group mb-4 block w-full overflow-hidden rounded-2xl"
            style={{ breakInside: "avoid" }}
          >
            <div className="relative overflow-hidden">
              <img
                src={it.src}
                alt={it.cat}
                className="w-full object-cover transition duration-700 group-hover:scale-110"
                style={{ height: it.h * 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-wider text-gold opacity-0 ring-1 ring-gold/40 backdrop-blur transition group-hover:opacity-100">
                {it.cat}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-gold/20"
              onClick={() => setOpen(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={open}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
