import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { absoluteAsset, absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros | UService" },
      {
        name: "description",
        content:
          "Conoce a UService: misión, valores y proceso de trabajo del equipo detrás de tu próximo producto digital.",
      },
      { property: "og:title", content: "Nosotros | UService" },
      {
        property: "og:description",
        content:
          "Equipo de ingenieros, diseñadores y estrategas construyendo software con propósito.",
      },
      { property: "og:url", content: absoluteUrl("/nosotros") },
      { property: "og:image", content: absoluteAsset("/og-image.jpg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/nosotros") }],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
