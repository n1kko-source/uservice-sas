import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { Toaster } from "@/components/ui/sonner";
import {
  getBlogPost,
  getRelatedPosts,
  type BlogBlock,
  type BlogPost,
} from "@/lib/blog-data";
import { getService } from "@/lib/services-data";
import { absoluteAsset, absoluteUrl } from "@/lib/site";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelatedPosts(params.slug) };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Artículo | UService" }] };

    const url = absoluteUrl(`/blog/${post.slug}`);
    const title = `${post.title} | UService`;

    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: absoluteAsset("/og-image.jpg") },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: post.description },
        { name: "twitter:image", content: absoluteAsset("/og-image.jpg") },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: absoluteAsset("/og-image.jpg"),
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "UService",
              url: absoluteUrl("/"),
            },
            publisher: {
              "@type": "Organization",
              name: "UService SAS",
              url: absoluteUrl("/"),
              logo: {
                "@type": "ImageObject",
                url: absoluteAsset("/og-image.jpg"),
              },
            },
            mainEntityOfPage: url,
            inLanguage: "es",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: absoluteUrl("/"),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: absoluteUrl("/blog"),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: url,
              },
            ],
          }),
        },
        ...(post.faq.length
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: post.faq.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: item.answer,
                    },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-5xl font-semibold">Artículo no encontrado</h1>
        <p className="mt-3 text-muted-foreground">
          El artículo que buscas no existe o fue movido.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          Ver el blog
        </Link>
      </div>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, related } = Route.useLoaderData() as {
    post: BlogPost;
    related: BlogPost[];
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28">
        <article className="mx-auto max-w-3xl px-6 pb-16">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            ← Blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-foreground/70">
              {post.category}
            </span>
            <time dateTime={post.date}>{post.dateLabel}</time>
            <span>{post.readingMinutes} min de lectura</span>
          </div>

          <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{post.description}</p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border">
            <img
              src={post.image}
              alt={post.imageAlt}
              width={1024}
              height={768}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          <div className="mt-12 space-y-5 text-base leading-relaxed text-foreground/90 md:text-[17px]">
            {post.body.map((block, i) => (
              <BlogBlockView key={`${block.type}-${i}`} block={block} />
            ))}
          </div>

          {post.faq.length > 0 && (
            <section className="mt-16 border-t border-border pt-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Preguntas frecuentes
              </h2>
              <div className="mt-8 space-y-6">
                {post.faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-display text-lg font-semibold">{item.question}</h3>
                    <p className="mt-2 text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {post.relatedServiceSlugs.length > 0 && (
            <section className="mt-14 rounded-3xl border border-border bg-secondary/40 p-6 md:p-8">
              <h2 className="font-display text-xl font-semibold">Servicios relacionados</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {post.relatedServiceSlugs.map((slug) => {
                  const service = getService(slug);
                  if (!service) return null;
                  return (
                    <li key={slug}>
                      <Link
                        to="/servicios/$slug"
                        params={{ slug }}
                        className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:border-primary/40"
                      >
                        {service.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Cotizar proyecto
            </a>
            <Link
              to="/blog"
              className="inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary"
            >
              Más artículos
            </Link>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-border py-16">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                También te puede interesar
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to="/blog/$slug"
                    params={{ slug: item.slug }}
                    className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        width={1024}
                        height={640}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-muted-foreground">
                        {item.category} · {item.dateLabel}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}

function BlogBlockView({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-muted-foreground">{block.text}</p>;
    case "h2":
      return (
        <h2 className="pt-4 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="pt-2 font-display text-xl font-semibold text-foreground">{block.text}</h3>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}
