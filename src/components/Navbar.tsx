import { Link } from "@tanstack/react-router";
import { GraduationCap, Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { DonateModal } from "./DonateModal";

const links = [
  { to: "/journey", label: "The Journey" },
  { to: "/yearbook", label: "Yearbook" },
  { to: "/media-vault", label: "Media Vault" },
  { to: "/wall", label: "The Wall" },
] as const;

export function Navbar() {
  const [donate, setDonate] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 ${
            scrolled ? "glass-strong rounded-2xl py-2.5" : "py-2"
          }`}
          style={scrolled ? { margin: "0 1rem", maxWidth: "calc(80rem - 2rem)" } : undefined}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="rounded-xl bg-gold/10 p-2 ring-1 ring-gold/30 transition group-hover:bg-gold/20">
              <GraduationCap className="text-gold" size={20} />
            </span>
            <span className="text-gradient-gold font-display text-2xl font-medium tracking-wide">
              B.Tech
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative rounded-full px-4 py-2 text-sm tracking-wide text-muted-foreground transition hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDonate(true)}
              className="btn-gold btn-gold-hover hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm md:inline-flex"
            >
              Donate <Heart size={14} fill="currentColor" />
            </button>
            <button
              className="rounded-full p-2 text-gold md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass-strong mx-4 mt-2 rounded-2xl p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-muted-foreground transition hover:bg-gold/10 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    setDonate(true);
                  }}
                  className="btn-gold btn-gold-hover flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm"
                >
                  Donate <Heart size={14} fill="currentColor" />
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <DonateModal open={donate} onClose={() => setDonate(false)} />
    </>
  );
}
