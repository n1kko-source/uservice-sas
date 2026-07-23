import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { absoluteAsset, absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios de Desarrollo de Software | UService" },
      {
        name: "description",
        content:
          "Desarrollo web, software empresarial, apps móviles, integraciones, cloud/DevOps y consultoría tecnológica a medida. Cotiza con UService.",
      },
      { property: "og:title", content: "Servicios de Desarrollo de Software | UService" },
      {
        property: "og:description",
        content:
          "Un solo equipo para producto digital: web, apps, software empresarial, APIs, cloud y consultoría.",
      },
      { property: "og:url", content: absoluteUrl("/servicios") },
      { property: "og:image", content: absoluteAsset("/og-image.jpg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/servicios") }],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <Services />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
