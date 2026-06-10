import { Reveal, SectionHeading } from "../Section";
import { Calendar, Sparkles } from "lucide-react";

export function MemoryOfDay() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Today's Highlight" title="Memory of the Day" />
        <Reveal className="mt-12">
          <div className="glass grid items-center gap-8 overflow-hidden rounded-3xl md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
              <img
                src="public/img/Highlight.jpg"
                alt="Memory of the day"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/80" />
            </div>
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
                <Calendar size={14} /> {today}
              </div>
              <h3 className="text-gradient-gold mt-4 font-display text-3xl sm:text-4xl">
               The Last Dance, 2026
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The days that shaped us, challenged us, and gave us memories for a lifetime. From the first lecture and classroom laughter to late-night assignments, events, trips, and friendships, every moment became a part of our journey. These weren't just college days—they were the years that turned strangers into family and memories into stories we'll tell forever.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
                <Sparkles size={14} /> A new memory surfaces every 24 hours
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
