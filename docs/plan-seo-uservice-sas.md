# Plan SEO — UService SAS

**Dominio canónico objetivo:** `https://www.userviceglobal.com`  
**Empresa:** UService SAS (NIT 902.066.769-0)  
**Nicho:** Desarrollo de software a medida, web, apps, cloud/DevOps, integraciones, consultoría  
**Modelo:** remoto / servicio digital (hoy Tunja, Boyacá; en ~1 mes base en España)  
**Mercado de SEO:** español global — Colombia + LatAm + España (sin apostar a “Tunja” como keyword principal)  
**Objetivo principal:** leads / cotizaciones (formulario + email/WhatsApp)  
**Presupuesto SEO:** **$0** (solo herramientas gratis + tiempo propio)  
**Horizonte:** 90 días para base técnica + primeras rankings; 6–12 meses para autoridad  
**Fecha:** 22 jul 2026 (intake confirmado)  

### Intake confirmado

| Dato | Respuesta | Implicación |
|------|-----------|-------------|
| Ubicación | Tunja ahora → España en ~1 mes; operación remota | **No** construir SEO local de Tunja ni páginas ciudad-Colombia frágiles. Posicionar como empresa remota hispanohablante. Schema: `ProfessionalService` + `areaServed` (CO, ES, LatAm), sin forzar dirección física falsa |
| GSC / GA4 / GBP | Ninguno | Alta prioridad: crear **GSC + GA4** (gratis). **GBP opcional/diferido**: solo si hay dirección verificable; con remoto puro, no inventar sede local |
| Presupuesto | $0 | Plan 100% gratuito viable; el “costo” es tiempo (dev + contenido). Sin Semrush/Ahrefs de pago, sin guest posts pagos, sin links comprados |

> **Sí es posible posicionar gratis.** No es posible garantizar posición #1 en “desarrollo de software a medida” frente a sitios con años de autoridad. Con $0 sí se puede: indexar bien, rankear long-tail comercial, y conseguir leads. Lo que no se compra con dinero se paga con consistencia (técnico + 2 contenidos/mes mínimo).

---

## TOP 5 — Mes 1 (hacer primero)

| # | Acción | Quién | Impacto | Estado |
|---|--------|-------|---------|--------|
| 1 | **SSR/prerender del HTML** (hoy el body llega vacío; solo meta en head) | Dev | Crítico — sin esto Google ve poco contenido | ✅ Hecho (prerender estático de rutas clave) |
| 2 | Unificar dominio canónico (`www`), alinear redirects + canonical/OG/schema | Dev | Crítico — evita dilución de señales | ✅ Hecho (`www.userviceglobal.com`) |
| 3 | Crear `robots.txt` + `sitemap.xml` reales (hoy sirven HTML del SPA) | Dev | Crítico — indexación | ✅ Hecho (`public/`) |
| 4 | Verificar GSC + GA4 + enviar sitemap; Bing Webmaster | Cliente + Dev | Crítico — medición | 🟡 GSC+GA4 listos — **falta enviar sitemap en GSC tras deploy** |
| 5 | On-page home + 6 servicios + 2 artículos reales (titles, H1, schema, posts con URL) | Dev + Contenido | Alto — ranking + leads | ✅ Hecho (2 artículos en `/blog/...`) |

---

## Fase 1 — Diagnóstico (audit)

### 1A — Técnico

| Hallazgo | Severidad | Evidencia | Acción |
|----------|-----------|-----------|--------|
| **HTML sin contenido en el body** (CSR): meta/title sí llegan, pero no hay `<h1>`, `<main>` ni texto de servicios en el HTML inicial (~5 KB shell + scripts) | **Crítico** | Respuesta live de `www.userviceglobal.com` | Activar SSR/prerender real con TanStack Start para home, servicios, blog y nosotros. Sin esto, el resto del SEO rinde a medias |
| `robots.txt` y `sitemap.xml` devuelven HTML del shell (~5 KB SPA), no archivos reales | **Crítico** | `www.userviceglobal.com/robots.txt` y `/sitemap.xml` → `<!DOCTYPE html>` | Servir archivos estáticos en `/public` y excluirlos del rewrite de Vercel |
| Canonical apunta a `https://userviceglobal.com` (sin www) pero el sitio vive en `www` | **Crítico** | `__root.tsx` + redirect 308 apex→www | Elegir **una** versión canónica (`www` recomendado) y alinear redirects, canonical, OG, schema, GSC |
| Sitemap inexistente / no enviable | **Crítico** | Sin archivo real en `public/` | Generar sitemap con home, nosotros, blog, términos, 6 servicios |
| Home sin `head()` propio; title genérico `"UService"` | **Importante** | `index.tsx` sin meta; root title corto | Title con keyword + marca; description con CTA |
| Canonical global fijo a homepage en todas las rutas | **Importante** | `rel: canonical` solo en root | Canonical por ruta (`/servicios/...`, `/blog`, etc.) |
| Schema Organization incompleto (sin areaServed ni modelo remoto) | **Importante** | Solo `addressCountry: CO` | Usar `ProfessionalService` + `areaServed` (Colombia, España, LatAm). **No** LocalBusiness de Tunja si la operación pasa a remota/España |
| Blog es thin/placeholder (cards a `#`, sin posts indexables) | **Crítico** (contenido) | `Blog.tsx` | Convertir a posts reales con URL propia o noindex temporal del listado vacío |
| Hero 3D (Three.js) puede degradar LCP/INP | **Importante** | `Hero.tsx` + `Hero3D` | Medir PSI; lazy/defer ya parcial; priorizar LCP text/image; reducir JS above-the-fold |
| Links sociales genéricos (`linkedin.com`, `instagram.com`) | **Mejora** | `Footer.tsx` | Perfiles reales de empresa (también en `sameAs` del schema) |
| Privacidad apunta a `#` | **Mejora** | Footer | Página real o quitar del crawl |
| Rewrite Vercel `/(.*) → /_shell.html` | **Importante** | `vercel.json` | Asegurar SSR/prerender de meta para crawlers; excepciones para `robots.txt`, `sitemap.xml`, assets |
| OG image relativa `/og-image.jpg` | **Mejora** | root head | URL absoluta `https://www.userviceglobal.com/og-image.jpg` |

### 1B — Contenido

| Hallazgo | Severidad | Acción |
|----------|-----------|--------|
| H1 home genérico (“Soluciones tecnológicas…”) sin keyword comercial ni geo | **Importante** | Reescribir H1 hacia intención transaccional Colombia/LatAm |
| 6 servicios con buen copy corto, pero sin profundidad SEO (FAQ, precios orientativos, casos, intención “contratar / a medida Colombia”) | **Importante** | Expandir cada servicio a 800–1200 palabras útiles + FAQ schema |
| Blog sin URLs de artículo → cero topical authority | **Crítico** | Arquitectura pillar + cluster (ver Fase 3B) |
| Posible canibalización home vs “desarrollo web” / “software empresarial” | **Mejora** | Home = marca + hub; cada servicio = keyword primaria exclusiva |
| Falta contenido comercial de alta conversión (costos, comparativas, “vs software empaquetado”) | **Importante** | Landings/artículos de intención comercial |

### 1C — Autoridad (off-page)

| Hallazgo | Severidad | Acción |
|----------|-----------|--------|
| Marca joven; backlinks probablemente bajos vs. competidores con años en SERP | **Importante** | Link building orgánico + citas locales + PR digital |
| Competidores tipificados con SEO on-page agresivo (keyword en H1 + “Colombia”) | **Importante** | No pelear head terms KD alto primero; atacar long-tail + servicios + ciudad |
| Sin perfiles de medición ni citas de marca | **Importante** | Crear GSC+GA4; LinkedIn Company real; directorios gratis. GBP solo si hay dirección verificable en España/CO |

### 1D — Keywords actuales

Sin acceso a GSC aún: baseline = 0 medible.  
**Acción inmediata:** verificar propiedad, esperar 7–14 días de datos, exportar queries y marcar quick wins (posiciones 4–15).

---

## Fase 2 — Mapa de keywords

Volúmenes/KD son **estimaciones orientativas** para Colombia (es). Validar con Keyword Planner / Ahrefs/Semrush.

### 2A — Por intención

| Intención | Ejemplos | Destino |
|-----------|----------|---------|
| Navegacional | uservice, uservice sas, userviceglobal | Home |
| Transaccional | desarrollo de software a medida colombia, contratar desarrollo web empresa, empresa desarrollo apps móviles colombia | Servicios + home |
| Comercial | software a medida vs sap, cuánto cuesta desarrollar software colombia, mejor empresa desarrollo software pyme | Blog / landings |
| Informacional | qué es software a medida, patrones arquitectura saas, migrar a serverless | Blog |

### 2B — Asignación 1 primaria por página

| Página | Keyword primaria | Secundarias | Prioridad |
|--------|------------------|-------------|-----------|
| `/` | desarrollo de software a medida | empresa desarrollo software, soluciones tecnológicas empresas, uservice | P0 |
| `/servicios/software-empresarial` | software empresarial a medida | erp a medida, crm a medida, sistemas internos | P0 |
| `/servicios/desarrollo-web` | desarrollo web a medida | desarrollo sitios web empresas, plataformas web saas | P0 |
| `/servicios/aplicaciones-moviles` | desarrollo de aplicaciones móviles | app ios android a medida, react native empresa | P0 |
| `/servicios/integraciones-apis` | integración de apis empresas | conectar erp crm, webhooks, apis rest | P1 |
| `/servicios/cloud-devops` | cloud devops para empresas | ci/cd aws, migración cloud | P1 |
| `/servicios/consultoria` | consultoría tecnológica | auditoría técnica, arquitectura software | P1 |
| `/nosotros` | uservice sas / equipo uservice | empresa software remota, proceso de trabajo | P2 |
| `/blog` (hub) | blog desarrollo software | guías producto digital | P1 |
| `/blog/cuanto-cuesta-software-a-medida` | cuánto cuesta software a medida | precio desarrollo app, costo mvp 2026 | P0 |
| `/blog/software-a-medida-vs-empaquetado` | software a medida vs empaquetado | erp genérico vs custom | P0 |
| `/blog/como-elegir-empresa-desarrollo-software` | cómo elegir empresa de desarrollo de software | checklist proveedor tech | P1 |

> Con operación remota + mudanza a España: **evitar** “Tunja” y no saturar “Colombia” en todos los H1. Mencionar cobertura LatAm/España en copy y schema; usar “Colombia” solo en piezas donde la intención de búsqueda lo pida (ej. artículo de costos si el público es CO).

### 2C — Long-tail (primer cluster, 90 días)

1. Cuánto cuesta un MVP en Colombia 2026  
2. Software a medida vs SaaS empaquetado para pymes  
3. Checklist para elegir proveedor de desarrollo  
4. ERP a medida: cuándo sí y cuándo no  
5. Integrar pasarela de pagos + ERP sin fricción  
6. Migrar a la nube sin parar la operación  
7. Core Web Vitals: por qué tu web no convierte  
8. App nativa vs React Native para startups  

---

## Fase 3 — Plan por horizonte

### 3A — Plan técnico (semanas 1–4)

| Tarea | Quién | Impacto | Verificación |
|-------|-------|---------|--------------|
| Decidir canónico `www` y 301/308 consistente apex↔www | Dev | Crítico | curl -I ambas hosts |
| Actualizar todos los `canonical`, `og:url`, schema `url` a www | Dev | Crítico | Ver HTML fuente |
| Añadir `public/robots.txt` + `public/sitemap.xml` | Dev | Crítico | Content-Type text; GSC sin error |
| Excluir robots/sitemap del rewrite a `_shell.html` en Vercel | Dev | Crítico | No devolver HTML |
| `head()` en `/` con title/description/OG propios | Dev | Alto | Rich preview + GSC |
| Canonical + OG + schema `Service` en cada `/servicios/$slug` | Dev | Alto | Rich Results Test |
| Schema `BreadcrumbList` en internas | Dev | Medio | Rich Results Test |
| Medir PSI mobile home + 1 servicio; plan CWV si LCP > 2.5s | Dev | Alto | PageSpeed Insights |
| Instalar GSC + GA4 (evento `generate_lead` en form) | Dev + Cliente | Crítico | DebugView / GSC |
| Bing Webmaster + Ahrefs Webmaster Tools | Cliente | Medio | Cuentas activas |
| Página Privacidad o quitar link | Dev | Bajo | Sin 404/# |

**Stack mínimo (gratis, no negociable):** GSC, GA4, PageSpeed Insights, Rich Results Test, Keyword Planner, Bing Webmaster, Ahrefs WT.

### 3B — Arquitectura de contenido (silos)

```
Home (pillar marca + hub servicios)
├── Software empresarial (pillar servicio)
│   ├── Caso: sistema interno / CRM
│   └── Artículo: ERP a medida cuándo sí
├── Desarrollo web (pillar)
│   ├── Artículo: CWV y conversión
│   └── Artículo: landing vs plataforma
├── Apps móviles (pillar)
│   └── Artículo: nativa vs RN
├── Integraciones & APIs
├── Cloud & DevOps
├── Consultoría
├── Blog hub
│   └── Clusters informacionales/comerciales
└── Nosotros + Contacto (confianza / NAP)
```

**Mapa de URLs propuesto (añadir):**

- `/blog/{slug}` — artículos reales  
- `/casos/{slug}` — 2–3 casos (aunque sean anonimizados)  
- `/privacidad`  
- Opcional mes 4+: `/servicios/desarrollo-web-bogota` solo si hay operación local real y contenido único

### 3C — Calendario editorial (90 días)

**Frecuencia realista:** 2 piezas/mes (si el equipo es chico) o 1/semana si hay redactor.

| Semana | Pieza | Formato | CTA |
|--------|-------|---------|-----|
| 1 | On-page home + servicios (copy SEO) | Landing | Cotizar |
| 2 | Cuánto cuesta software a medida en Colombia | Artículo 1800–2500p | Cotizar MVP |
| 3 | Caso de estudio #1 | Caso 800–1200p | Hablar con el equipo |
| 4 | Software a medida vs empaquetado | Artículo comparativo | Diagnóstico gratis |
| 6 | Cómo elegir empresa de desarrollo | Checklist | Cotizar |
| 8 | FAQ ampliada en 3 servicios + schema FAQ | On-page | Formulario |
| 10 | Integraciones API para pymes | Artículo | Contacto |
| 12 | Actualizar top 2 posts con datos GSC | Refresh | — |

### 3D — Autoridad / link building ($0)

1. **LinkedIn Company + Instagram Business** con URL canónica (arreglar footer)  
2. Directorios gratis: Directorio.co, Páginas Amarillas (si aplica), listados tech gratuitos LatAm/ES  
3. Perfil en comunidades: Product Hunt (cuando haya case), foros/dev.to/artículos propios  
4. Guest posts **gratis** (pitch a blogs que acepten aporte a cambio de byline)  
5. Link reclamation: menciones de “UService” / “UService SAS” sin enlace  
6. Contenido linkable: artículo de rangos de costo MVP (atrae enlaces naturales)  
7. **GBP:** diferir hasta tener dirección física verificable en España (o no usarlo). No crear ficha falsa en Tunja si te mudas  

**Fuera de alcance con $0:** Semrush/Ahrefs de pago, links editoriales pagos, PR de pago.

**Stack gratis obligatorio:**

| Herramienta | Para qué | Cuándo |
|-------------|----------|--------|
| Google Search Console | Indexación, queries, CTR | Esta semana |
| Google Analytics 4 | Tráfico + leads | Esta semana |
| PageSpeed Insights | CWV | Tras cada deploy técnico |
| Rich Results Test | Schema | Tras JSON-LD |
| Keyword Planner | Volúmenes (cuenta Ads, sin gastar) | Investigación keywords |
| Bing Webmaster | Indexación extra | Mes 1 |
| Ahrefs Webmaster Tools | Backlinks básicos gratis | Mes 1 |
| AnswerThePublic / AlsoAsked / Trends | Ideas de contenido | Editorial |

### 3E — KPIs

| KPI | Baseline | Meta 90 días | Meta 6 meses |
|-----|----------|--------------|--------------|
| Páginas indexadas (GSC) | ? | ≥ 12 URLs útiles | ≥ 25 |
| Impresiones orgánicas / mes | ~0–bajo | +300% vs mes 1 | crecimiento estable |
| Clics orgánicos / mes | bajo | ≥ 80–150 | ≥ 400 |
| Keywords en top 20 (lista monitor) | 0 | ≥ 5 | ≥ 15 |
| Leads atribuidos a orgánico (GA4) | 0 | ≥ 3–5 | ≥ 15 |
| CWV mobile home | medir | “Bueno” o sin “Deficiente” | mantener |

**Keywords a monitorear (15):**  
desarrollo de software a medida · empresa desarrollo software · desarrollo web a medida · desarrollo aplicaciones móviles · software empresarial a medida · cuánto cuesta software a medida · uservice · uservice sas · consultoría tecnológica · integración apis empresas · cloud devops empresas · erp a medida · contratar desarrollo software · cómo elegir empresa desarrollo software · software a medida vs empaquetado

---

## Fase 4 — Briefs prioritarios (3)

### BRIEF 1 — Homepage

```
Título SEO / H1 propuesto: Desarrollo de software a medida para empresas | UService
Keyword primaria: desarrollo de software a medida
Keywords secundarias: empresa desarrollo software, web apps cloud, uservice
Intención: navegacional + transaccional
URL: /
Meta title: Desarrollo de Software a Medida | UService
Meta description: Software empresarial, web, apps y cloud para equipos en LatAm y España. Cotiza tu proyecto con UService SAS — remoto.
Estructura: H1 → propuesta remota → servicios → prueba social → proceso → CTA
Longitud: 400–700 palabras + bloques
Schema: ProfessionalService + WebSite (areaServed: CO, ES, LatAm)
CTA: Cotizar proyecto
```

### BRIEF 2 — Artículo costos (P0)

```
Título SEO: Cuánto cuesta desarrollar software a medida en 2026
Keyword primaria: cuánto cuesta software a medida
Secundarias: costo mvp, precio desarrollo app, rangos inversión software
Intención: comercial
URL: /blog/cuanto-cuesta-software-a-medida
Meta title: Cuánto Cuesta el Software a Medida en 2026 | UService
Meta description: Rangos reales para MVP, sistemas internos y apps. Factores de precio y cómo cotizar sin sorpresas.
Estructura: factores → rangos → errores al cotizar → FAQ → CTA
Longitud: 1800–2500 palabras
Schema: Article + FAQPage
Internos: /servicios/software-empresarial, /servicios/desarrollo-web, #contacto
Diferenciador: rangos honestos + criterios; mención opcional LatAm vs España
```

### BRIEF 3 — Servicio software empresarial

```
Título SEO: Software empresarial a medida | UService
Keyword primaria: software empresarial a medida
Secundarias: erp a medida, crm a medida, sistemas internos empresas
Intención: transaccional
URL: /servicios/software-empresarial
Meta title: Software Empresarial a Medida | UService
Meta description: ERPs, CRMs y sistemas internos adaptados a tu operación. Análisis, prototipo y desarrollo iterativo — remoto.
Estructura: H1 → para quién → problemas → features → entregables → FAQ → CTA
Longitud: 900–1400 palabras
Schema: Service + FAQPage + BreadcrumbList
CTA: Cotizar sistema interno
```

---

## Setup gratis esta semana (cuenta Google)

### A) Google Search Console
1. [search.google.com/search-console](https://search.google.com/search-console)
2. Propiedad **Prefijo de URL**: `https://www.userviceglobal.com`
3. Verificar por etiqueta HTML o DNS
4. Cuando exista el archivo: enviar sitemap
5. Opcional: verificar también el apex si redirige

### B) Google Analytics 4
1. [analytics.google.com](https://analytics.google.com) → cuenta UService → propiedad GA4
2. Stream Web → `https://www.userviceglobal.com`
3. Copiar `G-XXXXXXXX` e integrarlo en el sitio
4. Evento `generate_lead` al enviar el formulario

### C) Google Business Profile
- **Ahora:** no prioritario (remoto + mudanza)
- **Después:** solo con dirección verificable en España

### D) Ritmo con $0
| Recurso | Cadencia |
|---------|----------|
| Fixes técnicos | Semanas 1–3 |
| Contenido | Mínimo 2 artículos/mes |
| Revisión GSC | 30 min/mes |
| Autoridad gratis | 1 directorio u outreach/semana |

---

## Fase 5 — Seguimiento

### Checklist mensual
- [ ] Posiciones de las 15 keywords en GSC / herramienta
- [ ] Páginas con caída >20% MoM
- [ ] Errores de cobertura / CWV nuevos
- [ ] Backlinks nuevos/perdidos (Ahrefs WT)
- [ ] Leads orgánicos en GA4
- [ ] 1–2 mejoras on-page en URLs con impresiones altas y CTR bajo

### Checklist trimestral
- [ ] Reporte vs KPIs
- [ ] Refresh de contenidos perdedores
- [ ] Revisión SERP competidores (Códigos, NuevasTic, Emerald, etc.)
- [ ] Ajuste del calendario según queries reales de GSC

---

## Orden de implementación en este repo (backlog dev)

1. **SSR/prerender** de rutas indexables (prioridad #1 del proyecto)  
2. `public/robots.txt` + `public/sitemap.xml`  
3. Ajuste `vercel.json` (no reescribir robots/sitemap; revisar rewrite a `_shell.html`)  
4. Canónico www en `__root.tsx` + heads por ruta  
5. `head()` rico en `index.tsx` y `servicios.$slug.tsx` (Service JSON-LD)  
6. Rutas `/blog/$slug` + contenido real; retirar `href="#"`  
7. Evento GA4 en `Contact.tsx`  
8. Optimización CWV del hero 3D según medición  

---

## Pregunta abierta restante

1. ¿2–3 competidores que hoy les quiten clientes o que admiren en SERP? (opcional; no bloquea mes 1)
