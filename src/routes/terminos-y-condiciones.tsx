import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terminos-y-condiciones")({
  component: TerminosYCondiciones,
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — UService" },
      { name: "description", content: "Términos y condiciones de uso de UService." },
    ],
  }),
});

function TerminosYCondiciones() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Términos y Condiciones
          </h1>
          <p className="mt-4 text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-sm md:prose-base dark:prose-invert mt-12 max-w-none text-muted-foreground">
            <h2 className="text-foreground font-display font-semibold text-2xl mt-8 mb-4">1. Aceptación de los términos</h2>
            <p className="mb-4">
              Al acceder y utilizar el sitio web y los servicios de UService, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder al servicio.
            </p>

            <h2 className="text-foreground font-display font-semibold text-2xl mt-8 mb-4">2. Descripción del Servicio</h2>
            <p className="mb-4">
              UService es una empresa dedicada al desarrollo de software, diseño de sitios web, aplicaciones móviles y consultoría tecnológica. Nos reservamos el derecho de modificar o suspender el servicio en cualquier momento, con o sin previo aviso.
            </p>

            <h2 className="text-foreground font-display font-semibold text-2xl mt-8 mb-4">3. Propiedad Intelectual</h2>
            <p className="mb-4">
              Todo el contenido, diseño, gráficos, código y materiales proporcionados a través de nuestro sitio web son propiedad exclusiva de UService o de nuestros licenciantes y están protegidos por las leyes de propiedad intelectual aplicables.
            </p>

            <h2 className="text-foreground font-display font-semibold text-2xl mt-8 mb-4">4. Obligaciones del Usuario</h2>
            <p className="mb-4">
              Te comprometes a utilizar nuestros servicios y sitio web únicamente con fines lícitos y de una manera que no infrinja los derechos de, ni restrinja o inhiba el uso y disfrute del sitio por parte de cualquier tercero.
            </p>

            <h2 className="text-foreground font-display font-semibold text-2xl mt-8 mb-4">5. Limitación de Responsabilidad</h2>
            <p className="mb-4">
              En ningún caso UService, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo sin limitación, pérdida de beneficios, datos, uso, fondo de comercio, u otras pérdidas intangibles, que resulten de tu acceso o uso de nuestros servicios.
            </p>
            
            <h2 className="text-foreground font-display font-semibold text-2xl mt-8 mb-4">6. Contacto</h2>
            <p className="mb-4">
              Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en <a href="mailto:hola@uservice.com" className="text-primary hover:underline">hola@uservice.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
