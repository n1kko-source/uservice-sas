# Plan: Portafolio UService (estilo Apple)

Sitio de presentación para UService con estética **clara, minimalista y premium** inspirada en apple.com, secciones full-bleed con mucho aire, tipografía grande y componentes 3D sutiles pero impactantes.

## Decisiones de diseño

- **Inspiración**: apple.com — secciones a pantalla completa, titulares enormes, mucho whitespace, transiciones suaves al hacer scroll, fotografía/3D protagonista.
- **Paleta** (la entregada por ti):
  - `#f1f5f9` — fondo claro principal
  - `#0f1e36` — azul oscuro (acentos, CTAs, secciones de contraste)
  - `#1d1d1f` — gris casi negro (tipografía, estilo Apple)
- **Acciones / CTAs**: alternan entre **azul oscuro `#0f1e36`** y **claro `#f1f5f9`** según el fondo (botones oscuros sobre claro, botones claros con borde sobre oscuro). Hover sutil con transición suave.
- **Tipografía**: SF Pro–like → **Inter** (cuerpo) + **Space Grotesk** o **Inter tight** (titulares grandes 64–120px), tracking ajustado tipo Apple.
- **Layout**: secciones apiladas full-width, contenido centrado max-w-6xl, headers grandes, párrafos cortos.
- **Logo**: el logo UService subido, integrado en navbar (oscuro sobre fondo claro) y footer.
- **Idioma**: español.

## Secciones (single-page con navbar fijo translúcido tipo Apple)

1. **Inicio (Hero)** — Titular gigante centrado tipo Apple ("Soluciones de software que impulsan tu negocio"), subtítulo, dos CTAs ("Cotizar proyecto" azul oscuro + "Conocer servicios →" link azul). Debajo, escena 3D protagonista (objeto flotante con rotación suave).
2. **Nuestros Servicios** — Sección clara con tarjetas grandes apiladas estilo Apple (alternando layout imagen/texto), cada servicio con su propio icono 3D minimalista:
   - Desarrollo Web a Medida
   - Software Empresarial
   - Aplicaciones Móviles
   - Integraciones & APIs
   - Cloud & DevOps
   - Consultoría Tecnológica
3. **Clientes** — Marquee de logos en gris suave + bloque de métricas (proyectos, clientes, años, países) sobre fondo **azul oscuro** con texto claro (sección de contraste tipo Apple).
4. **Nosotros** — Misión, visión, valores en grid limpio + timeline de proceso (Descubrir → Diseñar → Desarrollar → Desplegar) con líneas finas y números grandes.
5. **Blog** — Grid de 3 posts destacados, cards minimal con imagen, categoría, título, fecha.
6. **CTA final + Contacto + Footer** — Banda **azul oscuro** con headline grande y CTA claro, formulario simple debajo (nombre/email/mensaje), footer minimal con logo, links y redes.

## Componentes 3D (sutiles, premium, no saturados)

- **Three.js + React Three Fiber + Drei**.
- **Hero**: objeto 3D flotante (esfera/torus con material tipo cristal/metal en tonos azul oscuro), rotación lenta automática + reacción suave al mouse.
- **Iconos de servicios**: formas geométricas 3D pequeñas (cubo, esfera, torus, prisma) en azul oscuro, con hover tilt.
- En móvil, el 3D se simplifica o sustituye por imagen estática para rendimiento.

## Detalles técnicos

- Stack: Vite + React + TypeScript + Tailwind + shadcn/ui (proyecto vacío, se construye desde cero).
- Dependencias nuevas: `three`, `@react-three/fiber`, `@react-three/drei`.
- Design tokens HSL en `index.css` + `tailwind.config.ts`:
  - `--background` → `#f1f5f9`
  - `--foreground` → `#1d1d1f`
  - `--primary` → `#0f1e36` (azul oscuro, para CTAs)
  - `--primary-foreground` → `#f1f5f9`
- Sin colores hardcoded en componentes; todo vía tokens semánticos.
- Animaciones de entrada al scroll (fade + slide sutil), transiciones de botones tipo Apple (300ms ease-out).
- Navbar fijo con blur (`backdrop-blur`) y fondo translúcido claro.
- SEO: title, meta description en español, H1 único, semantic HTML, alt texts.
- Responsive mobile-first.
- Componentes: `Navbar`, `Hero`, `Hero3D`, `Services`, `ServiceRow`, `Service3DIcon`, `Clients`, `Stats`, `About`, `Process`, `Blog`, `CtaBanner`, `Contact`, `Footer`.

## Contenido

Placeholders profesionales en español (servicios, descripciones, métricas, 3 posts de blog ficticios y logos de clientes placeholder). Fáciles de reemplazar después.

## Fuera de alcance

- Envío real del formulario (mostrará toast; se puede conectar Lovable Cloud luego).
- Páginas de detalle individuales de blog/servicios.
- Multi-idioma.

¿Apruebas para empezar a construir?
