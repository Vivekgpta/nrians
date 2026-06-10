import { Link } from "@tanstack/react-router";
import { GraduationCap, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold/15 px-4 pb-8 pt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="rounded-xl bg-gold/10 p-2 ring-1 ring-gold/30">
              <GraduationCap className="text-gold" size={20} />
            </span>
            <span className="text-gradient-gold font-display text-2xl">B.Tech</span>
          </div>
          <p className="text-gradient-gold mt-4 font-display text-3xl">Batch 2022–2026</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A luxury digital yearbook preserving every laugh, lecture and late-night memory.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {[
              ["/journey", "The Journey"],
              ["/yearbook", "Yearbook"],
              ["/media-vault", "Media Vault"],
              ["/wall", "The Wall"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="transition hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-gold">Follow The Story</h4>
          <div className="mt-5 flex gap-3">
            {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="https://www.instagram.com/nrians.cs26/"
                className="rounded-full border border-gold/30 p-2.5 text-muted-foreground transition hover:border-gold hover:text-gold hover:gold-glow"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border/40 pt-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
        © 2026 Batch 2022–2026. Built with <span className="text-gold">❤</span> by Friends.
      </div>
    </footer>
  );
}
