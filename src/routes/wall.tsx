import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Send } from "lucide-react";
import { SectionHeading } from "../components/Section";

export const Route = createFileRoute("/wall")({
  head: () => ({
    meta: [
      { title: "The Wall · Batch 2022–2026" },
      { name: "description", content: "Leave a message on the memory wall of B.Tech Batch 2022–2026." },
      { property: "og:title", content: "The Wall · Batch 2022–2026" },
      { property: "og:description", content: "Write something you'll want to read in ten years." },
    ],
  }),
  component: Wall,
});

type Msg = { id: string; name: string; text: string; date: string; likes: number };

const SEED: Msg[] = [
  { id: "1", name: "Aarav", text: "Best 4 years of my life ❤️", date: "2026-05-12", likes: 24 },
  { id: "2", name: "Ananya", text: "Miss those classroom moments.", date: "2026-05-10", likes: 18 },
  { id: "3", name: "Rohan", text: "Forever Batch 2022-2026 🥂", date: "2026-05-09", likes: 31 },
  { id: "4", name: "Diya", text: "From canteen chai to convocation — what a ride.", date: "2026-05-08", likes: 12 },
];

const KEY = "batch_wall_v1";

function Wall() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      setMsgs(raw ? JSON.parse(raw) : SEED);
    } catch {
      setMsgs(SEED);
    }
  }, []);

  const save = (next: Msg[]) => {
    setMsgs(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const m: Msg = {
      id: crypto.randomUUID(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toISOString().slice(0, 10),
      likes: 0,
    };
    save([m, ...msgs]);
    setName("");
    setText("");
  };

  const like = (id: string) => save(msgs.map((m) => (m.id === id ? { ...m, likes: m.likes + 1 } : m)));

  return (
    <div className="px-4 pb-20 pt-16">
      <SectionHeading
        eyebrow="Leave a Note"
        title="The Wall"
        description="Write something you'll want to read in ten years."
      />

      <form onSubmit={submit} className="glass mx-auto mt-12 max-w-2xl rounded-3xl p-6 sm:p-8">
        <div className="grid gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-gold"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Your message to the batch…"
            rows={4}
            className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-gold"
          />
          <button
            type="submit"
            className="btn-gold btn-gold-hover inline-flex items-center justify-center gap-2 self-end rounded-full px-6 py-3 text-sm uppercase tracking-wider"
          >
            Post Memory <Send size={14} />
          </button>
        </div>
      </form>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {msgs.map((m) => (
            <motion.div
              layout
              key={m.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="glass flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:gold-glow"
            >
              <p className="font-display text-lg italic leading-relaxed text-foreground">"{m.text}"</p>
              <div className="mt-auto flex items-end justify-between pt-6">
                <div>
                  <div className="text-sm font-medium text-gold">{m.name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.date}</div>
                </div>
                <button
                  onClick={() => like(m.id)}
                  className="flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1.5 text-xs text-gold transition hover:bg-gold/10"
                >
                  <Heart size={12} fill="currentColor" /> {m.likes}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
