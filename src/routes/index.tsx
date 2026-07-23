import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Clients } from "@/components/site/Clients";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { SITE_URL, absoluteAsset } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desarrollo de Software a Medida | UService" },
      {
        name: "description",
        content:
          "Software empresarial, web, apps y cloud para equipos en LatAm y España. Cotiza tu proyecto con UService SAS — remoto.",
      },
      { property: "og:title", content: "Desarrollo de Software a Medida | UService" },
      {
        property: "og:description",
        content: "Software a medida, desarrollo web, apps móviles y consultoría tecnológica.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: absoluteAsset("/og-image.jpg") },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
