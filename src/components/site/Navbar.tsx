import logoWhite from "@/assets/us-logo-white.png";
import logo from "@/assets/us-logo.png";
import { Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useState } from "react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/", hash: "clientes", label: "Clientes" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/blog", label: "Blog" },
] as const;

function isOverHero(hero: HTMLElement) {
  const rect = hero.getBoundingClientRect();
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 72);
  const ratio = visibleHeight / rect.height;
  return rect.bottom > 72 && ratio >= 0.08;
}

export function Navbar() {
  const [overHero, setOverHero] = useState(false);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const hero = document.getElementById("inicio");
    setOverHero(hero ? isOverHero(hero) : false);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const sync = () => setOverHero(isOverHero(hero));

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting && entry.intersectionRatio >= 0.08);
      },
      { threshold: [0, 0.08, 0.25, 0.5], rootMargin: "-72px 0px 0px 0px" },
    );

    observer.observe(hero);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 border-b transition-[opacity,background-color,border-color,backdrop-filter] duration-500 ease-in-out ${
          overHero
            ? "border-transparent bg-transparent opacity-0 backdrop-blur-none"
            : "border-border/60 bg-background/80 opacity-100 backdrop-blur-xl"
        }`}
      />

      <nav className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-6 mt-10">
        <Link to="/" className="flex items-center gap-2">
          <span className="relative h-12 w-12 shrink-0">
            <img
              src={logo}
              alt=""
              aria-hidden={overHero}
              className={`absolute inset-0 h-12 w-12 rounded-md object-contain transition-opacity duration-500 ease-in-out ${
                overHero ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={logoWhite}
              alt=""
              aria-hidden={!overHero}
              className={`absolute inset-0 h-12 w-12 rounded-md object-contain transition-opacity duration-500 ease-in-out ${
                overHero ? "opacity-100" : "opacity-0"
              }`}
            />
            <span className="sr-only">UService logo</span>
          </span>
          <span
            className={`font-display text-[20px] font-semibold tracking-tight transition-colors duration-500 ease-in-out ${
              overHero ? "text-white" : "text-foreground"
            }`}
          >
            UService
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={"hash" in l ? l.hash : undefined}
                className={`text-[13px] transition-colors duration-500 ease-in-out ${
                  overHero
                    ? "text-white/75 hover:text-white"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          hash="contacto"
          className={`hidden rounded-full px-4 py-2 text-[13px] font-medium transition-[color,background-color,border-color] duration-500 ease-in-out md:inline-flex ${
            overHero
              ? "border border-white/25 text-white hover:border-white/50 hover:bg-white/5"
              : "border border-transparent bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          Cotizar proyecto
        </Link>

        <button aria-label="Abrir menú" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <div className="space-y-1.5">
            <span
              className={`block h-px w-6 transition-colors duration-500 ease-in-out ${
                overHero ? "bg-white" : "bg-foreground"
              }`}
            />
            <span
              className={`block h-px w-6 transition-colors duration-500 ease-in-out ${
                overHero ? "bg-white" : "bg-foreground"
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="relative border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={"hash" in l ? l.hash : undefined}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <Link
              to="/"
              hash="contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Cotizar proyecto
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
