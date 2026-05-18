import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/us-logo.png";

const links = [
  { to: "/", hash: "inicio", label: "Inicio" },
  { to: "/", hash: "servicios", label: "Servicios" },
  { to: "/", hash: "clientes", label: "Clientes" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/blog", label: "Blog" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 mt-10">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="UService logo"
            className="h-12 w-12 rounded-md object-contain"
          />
          <span className="font-display text-[20px] font-semibold tracking-tight">
            UService
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={"hash" in l ? l.hash : undefined}
                className="text-[13px] text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          hash="contacto"
          className="hidden rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Cotizar proyecto
        </Link>

        <button
          aria-label="Abrir menú"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block h-px w-6 bg-foreground" />
            <span className="block h-px w-6 bg-foreground" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
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
