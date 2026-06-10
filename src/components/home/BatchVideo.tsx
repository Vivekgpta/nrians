import { Play } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "../Section";

export function BatchVideo() {
  const [play, setPlay] = useState(false);
  return (
    <section className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="The Film"
          title="Our Story in 4 Minutes"
          description="A cinematic look back at the four years that shaped us."
        />
        <Reveal className="mt-12">
          <div className="glass relative aspect-video overflow-hidden rounded-3xl">
            {play ? (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Batch story"
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src="public/img/slider2.1.jpeg"
                  alt="Batch film"
                  className="h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button
                    onClick={() => setPlay(true)}
                    className="group relative"
                    aria-label="Play"
                  >
                    <span className="absolute inset-0 -m-6 animate-ping rounded-full bg-gold/30" />
                    <span className="btn-gold relative flex h-20 w-20 items-center justify-center rounded-full sm:h-24 sm:w-24">
                      <Play size={28} fill="currentColor" className="ml-1" />
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
