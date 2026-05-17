import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Clients } from "@/components/site/Clients";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Blog } from "@/components/site/Blog";
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
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
