import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { blogPosts, type BlogPost } from "@/lib/blog-data";

function PostCard({ post, i }: { post: BlogPost; i: number }) {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="fade-up group block overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,30,54,0.35)]"
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-foreground/70">
            {post.category}
          </span>
          <span>{post.dateLabel}</span>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.description}</p>
        <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
          Leer artículo →
        </div>
      </div>
    </Link>
  );
}

export function Blog() {
  return (
    <section id="blog" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Blog</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Ideas para construir mejor software.
            </h2>
          </div>
          <Link
            to="/blog"
            className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Ver todos →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p, i) => (
            <PostCard key={p.slug} post={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
