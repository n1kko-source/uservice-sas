import { Hero3D } from "./Hero3D";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-24 md:pt-36 md:pb-32">
      {/* Subtle radial backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 600px at 50% 0%, rgba(15,30,54,0.10), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="mx-auto mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
          Soluciones tecnológicas
          <span className="block text-primary">que impulsan tu negocio.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
          En UService diseñamos, desarrollamos y desplegamos software empresarial, aplicaciones web
          y móviles con estándares de clase mundial.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contacto"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90"
          >
            Cotizar proyecto
          </a>
          <a
            href="#servicios"
            className="rounded-full px-6 py-3 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Conocer servicios →
          </a>
        </div>
      </div>

      {/* 3D stage */}
      <div className="relative mx-auto mt-16 h-[420px] w-full max-w-6xl px-6 md:h-[520px]">
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-background to-secondary">
          <Hero3D />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
