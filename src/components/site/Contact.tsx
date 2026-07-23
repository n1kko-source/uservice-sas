import { trackGenerateLead } from "@/lib/analytics";
import { useState } from "react";
import { toast } from "sonner";
import juanPerfil from "../../assets/juan-perfil.webp";
import julianaPerfil from "../../assets/juliana-perfil.webp";
import nicolasPerfil from "../../assets/nicolas-perfil.webp";

const countries = [
  "Colombia",
  "México",
  "Argentina",
  "Chile",
  "Perú",
  "Ecuador",
  "Venezuela",
  "Uruguay",
  "Paraguay",
  "Bolivia",
  "Costa Rica",
  "Panamá",
  "Guatemala",
  "Honduras",
  "El Salvador",
  "Nicaragua",
  "República Dominicana",
  "Puerto Rico",
  "Cuba",
  "España",
  "Estados Unidos",
  "Canadá",
  "Brasil",
  "Reino Unido",
  "Francia",
  "Alemania",
  "Italia",
  "Portugal",
  "Otro",
];

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
// TODO: Obtén tu clave gratuita en https://web3forms.com/ y colócala aquí
const WEB3FORMS_ACCESS_KEY = "9fa42aaa-d678-4852-8c9f-f2cfb9ca17d5";

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validación básica
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const country = String(formData.get("country") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    if (!name || name.length > 100) return toast.error("Nombre inválido.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return toast.error("Email inválido.");
    if (!country) return toast.error("Selecciona tu país.");
    if (!message || message.length > 2000)
      return toast.error("Mensaje inválido (máx. 2000 caracteres).");

    // Opciones de Web3Forms
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `Nuevo contacto UService — ${name}`);
    formData.append("from_name", "UService Web");

    setLoading(true);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        trackGenerateLead({ method: "contact_form", country });
        toast.success("¡Gracias! Te contactaremos en menos de 24h.");
        form.reset();
      } else {
        toast.error("No pudimos enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch {
      toast.error("Error de conexión. Revisa tu internet e inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 md:py-40">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
            Contacto
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Hablemos de tu próximo proyecto.
          </h2>
          <p className="mt-6 max-w-md text-primary-foreground/70 md:text-lg">
            Cuéntanos lo que tienes en mente. Te respondemos en menos de 24 horas con una propuesta
            clara, sin compromiso.
          </p>

          <div className="mt-10 flex gap-8">
            <div className="flex flex-col items-center">
              <img
                src={juanPerfil}
                alt="Juan"
                className="h-24 w-24 rounded-full object-cover border-2 border-primary-foreground/20 shadow-lg"
              />
              <span className="mt-2 text-xs font-medium uppercase tracking-wider text-primary-foreground/80">
                Latinoamérica
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={julianaPerfil}
                alt="Juliana"
                className="h-24 w-24 rounded-full object-cover border-2 border-primary-foreground/20 shadow-lg"
              />
              <span className="mt-2 text-xs font-medium uppercase tracking-wider text-primary-foreground/80">
                Europa
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={nicolasPerfil}
                alt="Integrante Europa"
                className="h-24 w-24 rounded-full object-cover border-2 border-primary-foreground/20 shadow-lg"
              />
              <span className="mt-2 text-xs font-medium uppercase tracking-wider text-primary-foreground/80">
                Europa
              </span>
            </div>
          </div>

          <dl className="mt-10 space-y-4 text-sm text-primary-foreground/80">
            <div>
              <dt className="text-primary-foreground/50">Email</dt>
              <dd className="mt-1">uservicesas@gmail.com</dd>
            </div>
            <div>
              <dt className="text-primary-foreground/50">Teléfono</dt>
              <dd className="mt-1">+57 320 644 8690</dd>
              <dd className="mt-1">+57 310 851 3283</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
        >
          <Field label="Nombre" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Empresa" name="company" required={false} />

          <div>
            <label className="mb-2 block text-xs uppercase tracking-wider text-primary-foreground/60">
              País
            </label>
            <select
              name="country"
              required
              defaultValue=""
              className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-primary-foreground focus:border-white/30 focus:outline-none"
            >
              <option value="" disabled className="bg-primary text-primary-foreground">
                Selecciona tu país…
              </option>
              {countries.map((c) => (
                <option key={c} value={c} className="bg-primary text-primary-foreground">
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-wider text-primary-foreground/60">
              Cuéntanos sobre tu proyecto
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-white/30 focus:outline-none"
              placeholder="Brevemente, qué necesitas…"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-all hover:scale-[1.01] disabled:opacity-60"
          >
            {loading ? "Enviando…" : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wider text-primary-foreground/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-white/30 focus:outline-none"
      />
    </div>
  );
}
