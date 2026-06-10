import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

export function DonateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative w-full max-w-lg rounded-3xl p-8 sm:p-10"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition hover:bg-white/5 hover:text-gold"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex justify-center">
              <div className="rounded-full bg-gold/15 p-4 gold-glow">
                <Heart className="text-gold" size={28} fill="currentColor" />
              </div>
            </div>

            <h2 className="text-gradient-gold mt-6 text-center text-3xl font-light sm:text-4xl">
              Support This Memory Book
            </h2>

            <div className="mt-6 space-y-3 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p className="italic">Your memories are priceless.</p>
              <p>Please donate your time and effort for this batch memory project.</p>
              <p>Every photo, story and memory makes this journey more beautiful.</p>
              <p className="pt-2 font-medium text-gold">❤️ Thank You Batch 2022–2026</p>
            </div>

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={onClose}
                className="rounded-full border border-border px-6 py-3 text-sm uppercase tracking-wider text-muted-foreground transition hover:border-gold hover:text-gold"
              >
                Maybe Later
              </button>
              <button
                onClick={onClose}
                className="btn-gold btn-gold-hover rounded-full px-6 py-3 text-sm uppercase tracking-wider"
              >
                I'll Contribute
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
