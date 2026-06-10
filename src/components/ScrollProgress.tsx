import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total ? (h.scrollTop / total) * 100 : 0);
    };
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft transition-[width] duration-150"
          style={{ width: `${p}%`, boxShadow: "0 0 12px var(--gold)" }}
        />
      </div>
      {p > 15 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="glass fixed bottom-6 right-6 z-[55] rounded-full p-3 text-gold transition hover:gold-glow"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
