import { Service3DIcon } from "./Service3DIcon";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    shape: "octahedron" as const,
    title: "Desarrollo Web a Medida",
    desc: "Sitios y plataformas web rápidas, escalables y optimizadas para conversión.",
  },
  {
    shape: "box" as const,
    title: "Software Empresarial",
    desc: "ERPs, CRMs y sistemas internos diseñados para tu operación.",
  },
  {
    shape: "sphere" as const,
    title: "Aplicaciones Móviles",
    desc: "Apps nativas y multiplataforma con experiencia de usuario impecable.",
  },
  {
    shape: "torus" as const,
    title: "Integraciones & APIs",
    desc: "Conectamos tus sistemas, datos y servicios de terceros sin fricción.",
  },
  {
    shape: "icosa" as const,
    title: "Cloud & DevOps",
    desc: "Infraestructura moderna, despliegues continuos y observabilidad.",
  },
  {
    shape: "cone" as const,
    title: "Consultoría Tecnológica",
    desc: "Estrategia, arquitectura y acompañamiento para escalar tu negocio.",
  },
];

function ServiceCard({
  shape,
  title,
  desc,
  delay,
}: (typeof services)[number] & { delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="fade-up group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_60px_-30px_rgba(15,30,54,0.35)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="-ml-3 -mt-3 mb-4">
        <Service3DIcon shape={shape} />
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <div className="mt-6 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Saber más →
      </div>
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
            <ServiceCard key={s.title} {...s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
