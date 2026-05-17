import logo from "@/assets/uservice-logo.jpg";

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
        </div>

        <div>
          <h4 className="text-sm font-semibold">Empresa</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#nosotros" className="hover:text-foreground">Nosotros</a></li>
            <li><a href="#servicios" className="hover:text-foreground">Servicios</a></li>
            <li><a href="#blog" className="hover:text-foreground">Blog</a></li>
            <li><a href="#contacto" className="hover:text-foreground">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Privacidad</a></li>
            <li><a href="#" className="hover:text-foreground">Términos</a></li>
            <li><a href="#" className="hover:text-foreground">Cookies</a></li>
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
