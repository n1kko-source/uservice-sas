import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — UService" },
      {
        name: "description",
        content:
          "Ideas, guías y aprendizajes del equipo UService sobre desarrollo de software, cloud y producto.",
      },
      { property: "og:title", content: "Blog — UService" },
      {
        property: "og:description",
        content: "Artículos sobre desarrollo, arquitectura y producto digital.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
