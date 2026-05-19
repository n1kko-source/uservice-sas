import { useReveal } from "@/hooks/use-reveal";

const values = [
  {
    title: "Excelencia técnica",
    desc: "Código limpio, arquitecturas escalables y prácticas modernas en cada entrega.",
  },
  {
    title: "Cercanía real",
    desc: "Acompañamos a nuestros clientes como un socio, no como un proveedor.",
  },
  {
    title: "Resultados",
    desc: "Medimos el impacto. Optimizamos lo que importa. Iteramos sin freno.",
  },
];

const process = [
  { n: "01", t: "Descubrir", d: "Entendemos tu negocio, usuarios y objetivos." },
  { n: "02", t: "Diseñar", d: "Definimos producto, arquitectura y experiencia." },
  { n: "03", t: "Desarrollar", d: "Construimos con sprints cortos y entregas continuas." },
  { n: "04", t: "Desplegar", d: "Lanzamos, monitoreamos y evolucionamos contigo." },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="nosotros" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="fade-up grid items-start gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Nosotros</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Construimos software con propósito.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
              UService es un equipo de ingenieros, diseñadores y estrategas apasionados por
              transformar ideas en productos digitales que generan valor real para las personas y
              las empresas.
            </p>
          </div>

          <div className="grid gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-24">
          <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Nuestro proceso
          </h3>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
            {process.map((p) => (
              <div key={p.n} className="bg-card p-8">
                <div className="font-display text-4xl font-semibold text-primary">{p.n}</div>
                <div className="mt-4 font-display text-lg font-semibold">{p.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
