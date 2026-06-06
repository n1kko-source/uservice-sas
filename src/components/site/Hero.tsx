import { Hero3D } from "./Hero3D";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-[#050508] text-white"
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* 3D layer — full background, no clipping */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Hero3D />
        <div
          className="absolute left-[45%] top-[28%] h-[300px] w-[min(55vw,520px)] -translate-x-1/2 rounded-full opacity-55 blur-[110px] md:top-[24%] md:h-[380px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(168,85,247,0.35) 0%, rgba(34,211,238,0.18) 50%, transparent 72%)",
          }}
        />
      </div>

      {/* Readability overlays — left + top only, keep bottom clear */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#050508] from-0% via-[#050508]/55 via-30% to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-36 bg-gradient-to-b from-[#050508]/90 to-transparent" />

      {/* Content — above 3D */}
      <div className="relative z-10 grid min-h-[100svh] grid-rows-[1fr_auto] px-6 pt-28 md:px-10 md:pt-32 lg:px-16 lg:pt-36">
        {/* Headline — top left */}
        <div className="self-start pt-2 md:pt-6 lg:pt-10">
          <div className="max-w-[min(100%,42rem)] text-left lg:max-w-3xl xl:max-w-4xl">
            <h1
              className="font-display text-[2.65rem] font-semibold leading-[0.95] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem]"
              style={{ textShadow: "0 4px 60px rgba(0,0,0,0.55), 0 0 120px rgba(5,5,8,0.9)" }}
            >
              Soluciones tecnológicas
              <span className="mt-1 block text-white/90">que impulsan tu negocio.</span>
            </h1>
            <p className="mt-5 text-[11px] font-medium tracking-[0.22em] text-white/45 uppercase sm:mt-6 sm:text-xs">
              Software \ Web \ Móvil \ Cloud \ AI
            </p>
          </div>
        </div>

        {/* Description + CTAs — bottom right */}
        <div className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-24 lg:flex lg:justify-end">
          <div className="max-w-md lg:text-right">
            <p className="text-base leading-relaxed text-white/60 md:text-[17px]">
              En UService diseñamos, desarrollamos y desplegamos software empresarial, aplicaciones
              web y móviles con estándares de clase mundial.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 lg:justify-end">
              <a
                href="#contacto"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                Cotizar proyecto
              </a>
              <a
                href="#servicios"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#050508] transition-all hover:bg-white/90"
              >
                Conocer servicios
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f1e36] text-xs text-white transition-transform group-hover:scale-105">
                  +
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
