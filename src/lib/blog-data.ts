import arquitecturaImg from "@/assets/blog/arquitectura-saas.jpg";
import metricasImg from "@/assets/blog/metricas-producto.jpg";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type BlogFaq = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  dateLabel: string;
  image: string;
  imageAlt: string;
  readingMinutes: number;
  relatedServiceSlugs: string[];
  faq: BlogFaq[];
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-cuesta-software-a-medida",
    title: "Cuánto cuesta desarrollar software a medida en 2026",
    description:
      "Rangos reales de inversión para MVP, sistemas internos y apps. Factores que mueven el precio y cómo cotizar sin sorpresas.",
    category: "Producto",
    date: "2026-07-22",
    dateLabel: "22 Jul 2026",
    image: metricasImg,
    imageAlt: "Planificación de presupuesto para un producto digital",
    readingMinutes: 9,
    relatedServiceSlugs: ["software-empresarial", "desarrollo-web", "aplicaciones-moviles"],
    faq: [
      {
        question: "¿Cuánto cuesta un MVP de software a medida?",
        answer:
          "En 2026, un MVP bien acotado suele moverse entre USD 3.000 y USD 12.000 según alcance, integraciones y calidad de diseño. Lo crítico es definir qué problema valida y qué queda fuera de la primera versión.",
      },
      {
        question: "¿Es más barato un software empaquetado que uno a medida?",
        answer:
          "A corto plazo suele serlo. A medio plazo, licencias, adaptaciones forzadas y trabajo manual pueden superar el costo de una solución a medida si tus procesos son el diferencial del negocio.",
      },
      {
        question: "¿Qué incluye una cotización seria?",
        answer:
          "Alcance funcional, supuestos, exclusiones, timeline por fases, stack propuesto, modelo de soporte y criterios de aceptación. Si solo recibes un número redondo sin eso, pide detalle.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Una de las preguntas más frecuentes cuando una empresa evalúa desarrollo de software a medida es también la más difícil de responder con una sola cifra: cuánto cuesta. En 2026 el rango sigue siendo amplio, porque el precio no depende solo de “hacer una app”, sino del problema que resuelves, de cuántos sistemas tocas y de qué tan rápido necesitas aprender del mercado.",
      },
      {
        type: "p",
        text: "Esta guía resume rangos orientativos, los factores que más mueven el presupuesto y cómo leer una cotización sin sorpresas. No es una lista de precios cerrada: es un marco para decidir con criterio.",
      },
      {
        type: "h2",
        text: "Rangos orientativos en 2026",
      },
      {
        type: "p",
        text: "Los siguientes rangos asumen un equipo pequeño y remoto, con diseño incluido y calidad profesional (no un prototipo descartable). Están expresados en USD para comparar LatAm y España con más facilidad:",
      },
      {
        type: "ul",
        items: [
          "MVP / validación (4–10 semanas): USD 3.000 – 12.000",
          "Sistema interno o portal operativo (2–4 meses): USD 10.000 – 35.000",
          "Producto digital con roles, reportes e integraciones (4–8 meses): USD 25.000 – 80.000",
          "Plataforma avanzada o con IA / alta complejidad: desde USD 40.000+",
        ],
      },
      {
        type: "p",
        text: "Un precio por debajo del rango inferior suele recortar discovery, pruebas, seguridad o mantenibilidad. Un precio muy por encima no siempre significa mejor resultado: a veces refleja alcance difuso o capas de gestión innecesarias.",
      },
      {
        type: "h2",
        text: "Qué hace subir (o bajar) el costo",
      },
      {
        type: "h3",
        text: "1. Claridad del alcance",
      },
      {
        type: "p",
        text: "El mayor generador de sobrecostos no es la tecnología: es cambiar de opinión a mitad de camino. Un discovery corto (objetivos, usuarios, flujos críticos y “no-negociables”) reduce retrabajo y cotizaciones infladas “por si acaso”.",
      },
      {
        type: "h3",
        text: "2. Integraciones",
      },
      {
        type: "p",
        text: "Conectar pasarelas de pago, ERPs, CRMs, WhatsApp Business o sistemas legacy puede representar una parte grande del proyecto. Cada integración suma diseño de contratos, manejo de errores, seguridad y monitoreo.",
      },
      {
        type: "h3",
        text: "3. Calidad de experiencia (UX/UI)",
      },
      {
        type: "p",
        text: "Una interfaz “aceptable” y una experiencia que convierte no cuestan lo mismo. Si tu producto vende o opera procesos diarios, invertir en UX suele salir más barato que corregir abandono o errores humanos después.",
      },
      {
        type: "h3",
        text: "4. Multiplataforma y compliance",
      },
      {
        type: "p",
        text: "Web + iOS + Android, roles complejos, auditoría, privacidad (GDPR/datos sensibles) o SLAs altos aumentan esfuerzo. No siempre los necesitas en el día uno: a menudo conviene fasear.",
      },
      {
        type: "h2",
        text: "MVP vs “versión completa”",
      },
      {
        type: "p",
        text: "El error clásico es pedir la versión soñada en el primer contrato. Un MVP útil responde una pregunta de negocio: ¿la gente usa esto?, ¿ahorra tiempo?, ¿genera ingresos? Todo lo demás puede esperar.",
      },
      {
        type: "ol",
        items: [
          "Define el resultado de negocio (no la lista de pantallas).",
          "Elige 1–2 flujos críticos y mátalos de calidad.",
          "Deja integraciones secundarias para la fase 2.",
          "Mide uso real durante 30–60 días antes de ampliar.",
        ],
      },
      {
        type: "h2",
        text: "Cómo cotizar sin sorpresas",
      },
      {
        type: "p",
        text: "Pide siempre, como mínimo:",
      },
      {
        type: "ul",
        items: [
          "Alcance por módulos o historias de usuario priorizadas",
          "Supuestos y exclusiones explícitas",
          "Cronograma por fases con hitos revisables",
          "Quién mantiene el producto después del lanzamiento",
          "Qué pasa si el alcance crece (change request)",
        ],
      },
      {
        type: "p",
        text: "En UService trabajamos por fases: discovery → prototipo o arquitectura → desarrollo iterativo → deploy y evolución. Así controlas inversión y aprendizaje, en lugar de apostar todo a un “big bang”.",
      },
      {
        type: "h2",
        text: "¿Cuándo sí vale la pena el software a medida?",
      },
      {
        type: "ul",
        items: [
          "Tus procesos son el diferencial competitivo",
          "Las herramientas genéricas te obligan a trabajar “al revés”",
          "Gastas demasiado tiempo en Excel, correos o doble digitación",
          "Necesitas integrar varias fuentes de verdad en un solo flujo",
        ],
      },
      {
        type: "p",
        text: "Si tu caso es estándar y no cambia, un SaaS empaquetado puede ser la decisión correcta. El software a medida brilla cuando el ajuste fino del proceso genera margen, velocidad o una mejor experiencia al cliente.",
      },
      {
        type: "h2",
        text: "Siguiente paso",
      },
      {
        type: "p",
        text: "Si ya tienes una idea o un dolor operativo claro, el mejor siguiente paso no es “pedir el precio final”: es un diagnóstico corto de alcance. Con eso puedes estimar rango, riesgos y una primera fase accionable.",
      },
      {
        type: "p",
        text: "¿Quieres una estimación orientativa para tu proyecto? Cuéntanos el problema, los usuarios y el plazo deseado. Te respondemos con una propuesta clara, sin compromiso.",
      },
    ],
  },
  {
    slug: "software-a-medida-vs-empaquetado",
    title: "Software a medida vs empaquetado: cuál conviene a tu empresa",
    description:
      "Comparativa clara entre construir a medida y comprar un SaaS/ERP genérico: costos, velocidad, control y cuándo elegir cada camino.",
    category: "Estrategia",
    date: "2026-07-22",
    dateLabel: "22 Jul 2026",
    image: arquitecturaImg,
    imageAlt: "Comparación de arquitectura de software a medida y soluciones empaquetadas",
    readingMinutes: 8,
    relatedServiceSlugs: ["software-empresarial", "consultoria", "integraciones-apis"],
    faq: [
      {
        question: "¿Qué es software empaquetado?",
        answer:
          "Es una solución lista para usar (SaaS, ERP o CRM genérico) con procesos prediseñados. Se configura, pero no se rediseña por completo alrededor de tu operación.",
      },
      {
        question: "¿El software a medida tarda mucho más?",
        answer:
          "La primera versión puede tardar más que activar un SaaS. A cambio, evitas adaptarte a procesos ajenos y reduces fricción operativa a medio plazo si tu flujo es complejo.",
      },
      {
        question: "¿Se pueden combinar ambos?",
        answer:
          "Sí. Muchas empresas usan SaaS para lo estándar (correo, contabilidad básica) y construyen a medida el núcleo que genera ventaja competitiva, conectado por APIs.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Elegir entre software a medida y una solución empaquetada no es una discusión de “moderno vs antiguo”. Es una decisión de negocio: velocidad de entrada, costo total de propiedad y qué tanto control necesitas sobre tus procesos.",
      },
      {
        type: "p",
        text: "Esta comparativa te ayuda a decidir con criterios prácticos, sin romanticizar el código a medida ni subestimar el costo oculto de las herramientas genéricas.",
      },
      {
        type: "h2",
        text: "Qué es cada opción",
      },
      {
        type: "h3",
        text: "Software empaquetado (SaaS / ERP / CRM)",
      },
      {
        type: "p",
        text: "Llega con módulos ya construidos. Tú configuras, capacitás al equipo y adaptas tu operación a la herramienta (o a sus límites). Escalas rápido si tu caso es común.",
      },
      {
        type: "h3",
        text: "Software a medida",
      },
      {
        type: "p",
        text: "Se diseña alrededor de tus flujos, roles y datos. Toma más discovery al inicio, pero elimina trabajo manual y “trucos” para que la herramienta genérica se comporte como tu empresa.",
      },
      {
        type: "h2",
        text: "Comparativa rápida",
      },
      {
        type: "ul",
        items: [
          "Tiempo al primer uso: empaquetado gana (días/semanas) vs a medida (semanas/meses)",
          "Ajuste al proceso real: a medida gana con claridad",
          "Costo inicial: empaquetado suele ser menor; a medida invierte más al inicio",
          "Costo a 2–3 años: depende de licencias, personalizaciones y horas humanas ocultas",
          "Dependencia del proveedor: alta en ambos, pero de distinta forma (licencia vs código/equipo)",
          "Integraciones profundas: a medida suele ser más limpia si el proceso es crítico",
        ],
      },
      {
        type: "h2",
        text: "Cuándo elegir empaquetado",
      },
      {
        type: "ul",
        items: [
          "Tu proceso es estándar en la industria",
          "Necesitas operar ya y puedes adaptar el equipo a la herramienta",
          "No hay ventaja competitiva en “cómo” haces ese proceso",
          "El presupuesto de capital es bajo y prefieres gasto operativo predecible",
        ],
      },
      {
        type: "h2",
        text: "Cuándo elegir software a medida",
      },
      {
        type: "ul",
        items: [
          "El proceso es tu diferencial (pricing, operación, experiencia del cliente)",
          "Ya “parchaste” un SaaS con hojas de cálculo, WhatsApp y trabajo manual",
          "Necesitas una fuente de verdad única entre varios sistemas",
          "Las personalizaciones del ERP/CRM se volvieron caras e inestables",
        ],
      },
      {
        type: "h2",
        text: "El costo oculto del empaquetado",
      },
      {
        type: "p",
        text: "La licencia mensual es solo una línea. Suma: consultores de implementación, add-ons, límites de API, usuarios extra, reportes que no existen y tiempo del equipo haciendo doble digitación. Ese costo humano rara vez aparece en la demo de ventas.",
      },
      {
        type: "h2",
        text: "El error del “a medida para todo”",
      },
      {
        type: "p",
        text: "Construir todo desde cero también puede ser un error. Correo, contabilidad básica o firmas electrónicas suelen resolverse mejor con productos maduros. La regla práctica: compra lo estándar, construye lo que te diferencia.",
      },
      {
        type: "h2",
        text: "Un enfoque híbrido que funciona",
      },
      {
        type: "ol",
        items: [
          "Mapea procesos críticos vs procesos commodity.",
          "Deja en SaaS lo commodity.",
          "Diseña a medida el núcleo operativo o la experiencia del cliente.",
          "Conecta ambos con integraciones y APIs bien definidas.",
        ],
      },
      {
        type: "p",
        text: "Así reduces tiempo de llegada al mercado sin renunciar al control donde realmente importa.",
      },
      {
        type: "h2",
        text: "Cómo decidir en una reunión de 30 minutos",
      },
      {
        type: "ul",
        items: [
          "¿Este proceso nos da ventaja competitiva?",
          "¿Cuántas horas/semana perdemos hoy en trabajo manual?",
          "¿Qué pasa si el proveedor SaaS cambia precios o cierra un módulo?",
          "¿Necesitamos datos y reglas que ninguna herramienta estándar modela bien?",
        ],
      },
      {
        type: "p",
        text: "Si tres o más respuestas apuntan a complejidad propia, vale la pena explorar una solución a medida —aunque sea empezando por un MVP del flujo crítico.",
      },
      {
        type: "h2",
        text: "¿Hablamos de tu caso?",
      },
      {
        type: "p",
        text: "En UService ayudamos a elegir con honestidad: a veces la mejor recomendación es un SaaS; otras, un sistema a medida o un híbrido. Si quieres un diagnóstico breve, cuéntanos tu operación actual y qué te está frenando.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
}
