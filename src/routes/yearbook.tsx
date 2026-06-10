import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MapPin, Search, Sparkles } from "lucide-react";
import { students } from "../lib/students";
import { SectionHeading } from "../components/Section";

export const Route = createFileRoute("/yearbook")({
  head: () => ({
    meta: [
      { title: "Yearbook · Batch 2022–2026" },
      { name: "description", content: "Meet every face from B.Tech Batch 2022–2026. Search by name, nickname or branch." },
      { property: "og:title", content: "Yearbook · Batch 2022–2026" },
      { property: "og:description", content: "Every name. Every face. Every dream." },
    ],
  }),
  component: Yearbook,
});

const filters = ["All Students", "Team07", "IT", "Civil", "Mechanical", "Electrical"] as const;

function Yearbook() {
  const [q, setQ] = useState("");
  const [f, setF] = useState<(typeof filters)[number]>("All Students");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return students.filter((s) => {
      if (f !== "All Students" && s.branch !== f) return false;
      if (!query) return true;
      return (
        s.name.toLowerCase().includes(query) ||
        s.nickname.toLowerCase().includes(query) ||
        s.branch.toLowerCase().includes(query)
      );
    });
  }, [q, f]);

  return (
    <div className="px-4 pb-20 pt-16">
      <SectionHeading
        eyebrow="The Faces"
        title="The Yearbook"
        description="Every face has a story. Tap a card to remember why."
      />

      <div className="mx-auto mt-12 max-w-5xl">
        <div className="glass flex items-center gap-3 rounded-full px-5 py-3">
          <Search size={18} className="text-gold" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, nickname, or branch…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {filters.map((label) => (
            <button
              key={label}
              onClick={() => setF(label)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition ${
                f === label
                  ? "border-gold bg-gold/15 text-gold gold-glow"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "student" : "students"}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((s, i) => (
          <motion.div
            key={s.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.03, 0.4) }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition duration-500 hover:-translate-y-2 hover:gold-glow"
          >
            <div className="absolute right-4 top-4 rounded-full bg-gold/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold ring-1 ring-gold/30">
              {s.branch}
            </div>
            <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/40 ring-offset-4 ring-offset-card transition group-hover:ring-gold">
              <img src={s.photo} alt={s.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-5 text-center">
              <h3 className="font-display text-xl text-foreground">{s.name}</h3>
              <div className="text-xs italic text-gold">"{s.nickname}"</div>
            </div>
            <div className="mt-5 space-y-2 border-t border-border/50 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-gold" /> {s.hometown}
              </div>
              <div className="flex items-start gap-2">
                <Sparkles size={12} className="mt-0.5 text-gold shrink-0" />
                <span>{s.memory}</span>
              </div>
              <div className="pt-1 italic">→ {s.dream}</div>
            </div>
            <a
              href={s.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-gold/30 py-2 text-xs text-gold transition hover:bg-gold/10"
            >
              <Instagram size={12} /> Follow
            </a>
          </motion.div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="mt-20 text-center text-muted-foreground">No memories match that search.</div>
      )}
    </div>
  );
}
