const stats = [
  { value: "12", label: "Proyectos entregados" },
  { value: "8", label: "Clientes activos" },
  { value: "1", label: "Año de experiencia" },
];

export function Stats() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-end gap-12 md:grid-cols-2">
          <h2 className="text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Resultados que se miden, no que se cuentan.
          </h2>
          <p className="text-balance text-primary-foreground/70 md:text-lg">
            Desarrollamos soluciones digitales modernas con atención cercana y compromiso en cada
            entrega.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-primary-foreground/65">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
