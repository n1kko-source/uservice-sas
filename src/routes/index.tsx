import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Clients } from "@/components/site/Clients";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
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
