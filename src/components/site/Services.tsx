import { Link } from "@tanstack/react-router";
import { Service3DIcon } from "./Service3DIcon";
import { useReveal } from "@/hooks/use-reveal";
import { services, type Service } from "@/lib/services-data";

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="fade-up group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_60px_-30px_rgba(15,30,54,0.35)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="-ml-3 -mt-3 mb-4">
        <Service3DIcon
          shape={service.shape}
          color={service.color}
          accent={service.accent}
        />
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.desc}
      </p>
      <Link
        to="/servicios/$slug"
        params={{ slug: service.slug }}
        className="mt-6 inline-flex items-center text-sm font-medium text-primary transition-opacity"
      >
        Saber más →
      </Link>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Nuestros servicios
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Todo lo que tu producto digital necesita.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-muted-foreground md:text-lg">
            De la idea al lanzamiento. De la operación al crecimiento. Un solo
            equipo, una sola promesa: excelencia técnica.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
