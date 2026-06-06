const clients = [
  "NovaBank",
  "Helix Health",
  "Quantum Logistics",
  "Skyline Retail",
  "Aurora Energy",
  "Pixel Foundry",
  "Vertex Studios",
  "Northwind Co.",
  "Solaris",
  "Indigo Labs",
  "Meridian Group",
  "OrbitWorks",
];

function ClientItem({ name }: { name: string }) {
  return (
    <span className="client-item inline-block shrink-0 cursor-default select-none px-3 py-1 font-display text-2xl font-medium tracking-tight text-foreground/55 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110">
      {name}
    </span>
  );
}

export function Clients() {
  return (
    <section id="clientes" className="border-y border-border bg-secondary/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Empresas que confían en nosotros
        </p>
        <div className="relative mt-10 overflow-hidden">
          <div className="marquee marquee-pausable flex w-max items-center gap-10 md:gap-16">
            {[...clients, ...clients].map((c, i) => (
              <ClientItem key={i} name={c} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary/90 to-transparent" />
        </div>
      </div>
    </section>
  );
}
