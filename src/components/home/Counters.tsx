import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../Section";

const stats = [
  { value: 100, suffix: "+", label: "Students" },
  { value: 1000, suffix: "+", label: "Photos" },
  { value: 4, suffix: "", label: "Years Together" },
  { value: 100, suffix: "+", label: "Memories" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="text-gradient-gold font-display text-5xl font-light sm:text-6xl md:text-7xl">
      {n}
      {suffix}
    </span>
  );
}

export function Counters() {
  return (
    <section className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="text-center">
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { motion };
