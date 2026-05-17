import { useState } from "react";
import { toast } from "sonner";

const countries = [
  "Colombia", "México", "Argentina", "Chile", "Perú", "Ecuador",
  "Venezuela", "Uruguay", "Paraguay", "Bolivia", "Costa Rica",
  "Panamá", "Guatemala", "Honduras", "El Salvador", "Nicaragua",
  "República Dominicana", "Puerto Rico", "Cuba",
  "España", "Estados Unidos", "Canadá", "Brasil", "Reino Unido",
  "Francia", "Alemania", "Italia", "Portugal", "Otro",
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("¡Gracias! Te contactaremos en menos de 24h.");
      (e.target as HTMLFormElement).reset();
    }, 700);
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
            Cuéntanos lo que tienes en mente. Te respondemos en menos de 24 horas
            con una propuesta clara, sin compromiso.
          </p>

          <dl className="mt-10 space-y-4 text-sm text-primary-foreground/80">
            <div>
              <dt className="text-primary-foreground/50">Email</dt>
              <dd className="mt-1">hola@uservice.com</dd>
            </div>
            <div>
              <dt className="text-primary-foreground/50">Teléfono</dt>
              <dd className="mt-1">+57 300 000 0000</dd>
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
