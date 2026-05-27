import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";

import { Toaster } from "@/components/ui/sonner";
import { getService, services, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: s
        ? [
            { title: `${s.title} — UService` },
            { name: "description", content: s.desc },
            { property: "og:title", content: `${s.title} — UService` },
            { property: "og:description", content: s.desc },
          ]
        : [{ title: "Servicio — UService" }],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-5xl font-semibold">Servicio no encontrado</h1>
        <p className="mt-3 text-muted-foreground">El servicio que buscas no existe o fue movido.</p>
        <Link
          to="/"
          hash="servicios"
          className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          Ver todos los servicios
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="font-display text-3xl font-semibold">Algo salió mal</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          Reintentar
        </button>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-24 md:pt-16">
          <Link
            to="/"
            hash="servicios"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Servicios
          </Link>

          <div className="mt-8 grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Servicio
              </p>
              <h1 className="mt-4 text-balance font-display text-5xl font-semibold tracking-tight md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 text-balance text-lg text-muted-foreground">{service.long}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/"
                  hash="contacto"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90"
                >
                  Cotizar este servicio
                </Link>
                <Link
                  to="/"
                  hash="servicios"
                  className="rounded-full px-6 py-3 text-sm font-medium text-primary hover:text-primary/80"
                >
                  Ver otros servicios →
                </Link>
              </div>
            </div>

            <div
              className="relative h-[360px] overflow-hidden rounded-3xl border border-border md:h-[480px]"
              style={{
                background: `linear-gradient(135deg, ${service.color} 0%, ${service.accent} 100%)`,
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Image + text block */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border">
              <img
                src={service.image}
                alt={`Imagen ilustrativa de ${service.title}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Lo que incluye
              </h2>
              <p className="mt-4 text-muted-foreground">
                Cada proyecto se adapta a tu contexto, pero estos son los componentes que más valor
                aportan en este servicio.
              </p>
              <ul className="mt-8 space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm md:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="bg-secondary/60">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Cómo trabajamos
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Un proceso claro, con entregables definidos en cada etapa.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {service.deliverables.map((d, i) => (
                <div key={d} className="rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-3xl font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-3 font-medium">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Otros servicios
            </h2>
            <Link to="/" hash="servicios" className="text-sm font-medium text-primary">
              Ver todos →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/servicios/$slug"
                params={{ slug: o.slug }}
                className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,30,54,0.35)]"
              >
                <div
                  className="h-32 w-full rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${o.color} 0%, ${o.accent} 100%)`,
                  }}
                />
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
                <span className="mt-4 inline-flex text-sm font-medium text-primary">
                  Saber más →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
