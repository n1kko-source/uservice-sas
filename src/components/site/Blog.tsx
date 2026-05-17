import { useReveal } from "@/hooks/use-reveal";

const posts = [
  {
    cat: "Desarrollo",
    title: "5 patrones de arquitectura para escalar tu SaaS",
    date: "12 May 2026",
    grad: "from-[#0f1e36] to-[#2a4a7f]",
  },
  {
    cat: "Cloud",
    title: "Migrar a serverless sin romper tu equipo",
    date: "28 Abr 2026",
    grad: "from-[#1d1d1f] to-[#0f1e36]",
  },
  {
    cat: "Producto",
    title: "Cómo medir el éxito real de un producto digital",
    date: "10 Abr 2026",
    grad: "from-[#0f1e36] to-[#7aa7ff]",
  },
];

function PostCard({ post, i }: { post: (typeof posts)[number]; i: number }) {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href="#"
      className="fade-up group block overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,30,54,0.35)]"
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      <div
        className={`aspect-[4/3] w-full bg-gradient-to-br ${post.grad} transition-transform duration-700 group-hover:scale-[1.03]`}
      />
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-foreground/70">
            {post.cat}
          </span>
          <span>{post.date}</span>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
          {post.title}
        </h3>
        <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
          Leer artículo →
        </div>
      </div>
    </a>
  );
}

export function Blog() {
  return (
    <section id="blog" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Blog
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Ideas para construir mejor software.
            </h2>
          </div>
          <a
            href="#"
            className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Ver todos →
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <PostCard key={p.title} post={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
