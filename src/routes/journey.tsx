import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "../components/Section";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "The Journey · Batch 2022–2026" },
      { name: "description", content: "A year-by-year timeline of B.Tech Batch 2022–2026 — from the first day of college to graduation." },
      { property: "og:title", content: "The Journey · Batch 2022–2026" },
      { property: "og:description", content: "Year by year. Memory by memory." },
    ],
  }),
  component: Journey,
});

const years = [
  {
    year: "2022",
    title: "The Beginning",
    desc: "The first day of college. New faces. New dreams. Orientation week was a blur of nameplates, free t-shirts, and nervous laughter that would soon turn into our loudest inside jokes.",
    image: "public/img/firstyear.jpg",
  },
  {
    year: "2023",
    title: "Finding Our Rhythm",
    desc: "The library became a hangout, the canteen became a counsellor, and 'attendance shortage' became a shared trauma. We learned C, calculus, and chai-table diplomacy.",
    image: "public/img/secondyear.jpg",
  },
  {
    year: "2024",
    title: "The Golden Year",
    desc: "Tech fests, cultural nights, late-night project crunches and our first paid internships. Suddenly we were the seniors. Suddenly we knew what we were doing — almost.",
    image: "public/img/thirdyear.jpg",
  },
  {
    year: "2025",
    title: "The Final Lap",
    desc: "Placement season changed everything. Offer letters traded in WhatsApp groups, mock interviews over Zoom, and a strange new awareness that this was almost over.",
    image: "public/img/forthyear.jpg",
  },
  {
    year: "2026",
    title: "Graduation",
    desc: "The end of one chapter. The beginning of another. The gowns, the photos, the long hugs that didn't want to end. We came as strangers. We left as family.",
    image: "public/img/Highlight.jpg",
  },
];

function Journey() {
  return (
    <div className="px-4 pb-20 pt-16">
      <SectionHeading
        eyebrow="2022 → 2026"
        title="The Journey"
        description="Four years, told in five chapters."
      />
      <div className="relative mx-auto mt-20 max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:left-1/2" />
        {years.map((y, i) => {
          const right = i % 2 === 1;
          return (
            <Reveal key={y.year} delay={0.05}>
              <div className="relative mb-16 grid gap-8 md:grid-cols-2 md:items-center">
                <div className={`pl-12 md:pl-0 ${right ? "md:order-2 md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                  <div className="text-gradient-gold font-display text-6xl font-light md:text-7xl">{y.year}</div>
                  <h3 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">{y.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{y.desc}</p>
                </div>
                <div className={`pl-12 md:pl-0 ${right ? "md:order-1 md:pr-12" : "md:pl-12"}`}>
                  <div className="glass overflow-hidden rounded-2xl">
                    <img src={y.image} alt={y.year} className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105" />
                  </div>
                </div>
                <div className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-gold gold-glow ring-4 ring-background md:left-1/2" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
