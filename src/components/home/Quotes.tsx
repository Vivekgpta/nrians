import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "../Section";

const quotes = [
  { q: "We didn't realize we were making memories. We just knew we were having fun.", a: "Winnie the Pooh" },
  { q: "Some friendships become family.", a: "Anonymous" },
  { q: "Graduation ends classes, not memories.", a: "Batch 2022–2026" },
  { q: "The best mirror is an old friend.", a: "George Herbert" },
];

export function Quotes() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % quotes.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Words We Remember" title="Memory Quotes" />
        <div className="relative mt-14 h-[260px] sm:h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              className="glass absolute inset-0 flex flex-col items-center justify-center rounded-3xl p-8 text-center sm:p-12"
            >
              <Quote className="mb-6 text-gold/60" size={40} />
              <p className="text-gradient-gold font-display text-2xl italic leading-relaxed sm:text-3xl md:text-4xl">
                "{quotes[i].q}"
              </p>
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                — {quotes[i].a}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-gold" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
