const stats = [
  { value: "+250", label: "Proyectos entregados" },
  { value: "+80", label: "Clientes activos" },
  { value: "10", label: "Años de experiencia" },
  { value: "12", label: "Países atendidos" },
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
            Una década construyendo software para empresas en crecimiento, con entregas puntuales y
            un compromiso real por cada producto.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-y-12 md:grid-cols-4">
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
