import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail } from "lucide-react";
import logo from "@/assets/us-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="UService logo"
              className="h-7 w-7 rounded-md object-contain"
            />
            <span className="font-display text-base font-semibold tracking-tight">
              UService
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Soluciones tecnológicas, software a medida y desarrollo web para
            empresas que quieren crecer.
          </p>
          <p className="mt-3 text-sm font-medium">NIT: 901.000.000-0</p>
          <div className="mt-6 flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:uservicesas@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Empresa</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/nosotros" className="hover:text-foreground">Nosotros</Link></li>
            <li><Link to="/" hash="servicios" className="hover:text-foreground">Servicios</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/" hash="contacto" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Privacidad</a></li>
            <li><Link to="/terminos-y-condiciones" className="hover:text-foreground">Términos y Condiciones</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} UService. Todos los derechos reservados.</p>
          <p>Hecho con precisión en Colombia.</p>
        </div>
      </div>
    </footer>
  );
}
