import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Particles } from "./Particles";

const SUB = "4 Years. 1 Family. Infinite Memories.";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [typed, setTyped] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const t = setInterval(() => {
        i++;
        setTyped(SUB.slice(0, i));
        if (i >= SUB.length) {
          clearInterval(t);
          setTimeout(() => setShowBtn(true), 400);
        }
      }, 45);
    }, 1200);
    return () => clearTimeout(start);
  }, []);

  const handleStart = () => {
    setExiting(true);
    setTimeout(onDone, 900);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background"
        >
          <Particles count={60} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--gold)/0.15,transparent_60%)]" />

          <motion.h1
            initial={{ opacity: 0, y: 30, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-gradient-gold text-center text-4xl font-light uppercase sm:text-6xl md:text-7xl"
          >
            Batch 2022–2026
          </motion.h1>

          <div className="mt-8 h-7 font-sans text-base text-muted-foreground sm:text-lg">
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-gold align-middle" />
          </div>

          <AnimatePresence>
            {showBtn && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={handleStart}
                className="btn-gold btn-gold-hover mt-12 rounded-full px-9 py-4 text-sm uppercase tracking-[0.25em]"
              >
                Click To Start The Journey
              </motion.button>
            )}
          </AnimatePresence>

          <div className="absolute bottom-8 text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
            A digital yearbook
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
