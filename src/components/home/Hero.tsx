import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "We Entered as Strangers",
    subtitle: "Four years ago, a thousand new faces in one corridor.",
    image: "public/img/slider1.jpg",
  },
  {
    title: "We Became Family",
    subtitle: "Late nights, last benches, lifelong bonds.",
    image: "public/img/slider5.jpg",
  },
  {
    title: "Memories That Will Never Fade",
    subtitle: "From first lectures to final farewells.",
    image: "public/img/slider4.jpg",
  },
  {
    title: "Batch 2022–2026",
    subtitle: "Our story, etched in gold.",
    image: "public/img/slider2.1.jpeg",
  },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative -mt-20 h-screen min-h-[640px] w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img src={slides[i].image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_90%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          key={`eyebrow-${i}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-gold"
        >
          ·  A Digital Yearbook  ·
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.h1
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="text-gradient-gold font-display text-5xl font-light leading-[1.05] sm:text-7xl md:text-[5.5rem]"
          >
            {slides[i].title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {slides[i].subtitle}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <Link
            to="/media-vault"
            className=" btn-gold-hover inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em]"
          >
            Explore Memories <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="absolute bottom-10 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-10 bg-gold gold-glow" : "w-2 bg-muted-foreground/30 hover:bg-gold/50"
              }`}
              aria-label={`slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
