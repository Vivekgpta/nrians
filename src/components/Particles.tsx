import { useMemo } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 6,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 ${p.size * 4}px var(--gold)`,
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}
