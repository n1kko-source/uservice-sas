export type ServiceShape =
  | "roundedBox"
  | "sphere"
  | "torus"
  | "capsule"
  | "knot"
  | "dodeca";

export type Service = {
  slug: string;
  shape: ServiceShape;
  color: string;
  accent: string;
  title: string;
  desc: string;
  long: string;
  features: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "desarrollo-web",
    shape: "knot",
    color: "#3b6fa0",
    accent: "#a8c8ef",
    title: "Desarrollo Web a Medida",
    desc: "Sitios y plataformas web rápidas, escalables y optimizadas para conversión.",
    long: "Diseñamos y construimos experiencias web que cargan en milisegundos, lucen impecables en cualquier dispositivo y convierten visitantes en clientes. Desde landing pages hasta plataformas SaaS completas.",
    features: [
      "Arquitectura moderna con React, Next.js y TanStack",
      "Optimización de Core Web Vitals y SEO técnico",
      "Diseño responsive y accesible",
      "Integración con tu stack actual",
    ],
    deliverables: [
      "Discovery & wireframes",
      "Diseño UI premium",
      "Implementación full-stack",
      "Deploy + monitoreo",
    ],
  },
  {
    slug: "software-empresarial",
    shape: "roundedBox",
    color: "#0f1e36",
    accent: "#7aa7ff",
    title: "Software Empresarial",
    desc: "ERPs, CRMs y sistemas internos diseñados para tu operación.",
    long: "Construimos software a medida que se adapta a tus procesos, no al revés. ERPs, CRMs, portales internos y herramientas operativas que centralizan tu información y eliminan tareas manuales.",
    features: [
      "Módulos a medida según tu operación",
      "Roles, permisos y auditoría",
      "Dashboards y reportes en tiempo real",
      "Integración con sistemas legacy",
    ],
    deliverables: [
      "Análisis funcional",
      "Prototipo navegable",
      "Desarrollo iterativo",
      "Soporte y evolución",
    ],
  },
  {
    slug: "aplicaciones-moviles",
    shape: "sphere",
    color: "#2d8a9e",
    accent: "#5cbdb9",
    title: "Aplicaciones Móviles",
    desc: "Apps nativas y multiplataforma con experiencia de usuario impecable.",
    long: "Apps iOS y Android pensadas para la pantalla pequeña: rápidas, intuitivas y con una experiencia de marca consistente. Multiplataforma con React Native o nativas según tu necesidad.",
    features: [
      "React Native, Swift y Kotlin",
      "Push notifications y offline-first",
      "Publicación en App Store y Google Play",
      "Analytics y A/B testing",
    ],
    deliverables: [
      "UX research",
      "Diseño de producto",
      "MVP en 8–12 semanas",
      "Lanzamiento y mejoras continuas",
    ],
  },
  {
    slug: "integraciones-apis",
    shape: "torus",
    color: "#4f46e5",
    accent: "#a78bfa",
    title: "Integraciones & APIs",
    desc: "Conectamos tus sistemas, datos y servicios de terceros sin fricción.",
    long: "Hacemos que tus herramientas hablen el mismo idioma. Diseñamos APIs limpias y conectamos servicios de terceros (pasarelas de pago, ERPs, CRMs, marketing) para que tu información fluya.",
    features: [
      "APIs REST y GraphQL bien documentadas",
      "Webhooks, colas y eventos",
      "Conectores con Stripe, HubSpot, SAP, Salesforce",
      "Sincronización de datos en tiempo real",
    ],
    deliverables: [
      "Mapa de integraciones",
      "Diseño de contratos API",
      "Implementación y pruebas",
      "Documentación viva",
    ],
  },
  {
    slug: "cloud-devops",
    shape: "dodeca",
    color: "#0d7a5f",
    accent: "#73ffb8",
    title: "Cloud & DevOps",
    desc: "Infraestructura moderna, despliegues continuos y observabilidad.",
    long: "Llevamos tu producto a la nube con prácticas modernas: infraestructura como código, despliegues automáticos, escalado a demanda y observabilidad de extremo a extremo.",
    features: [
      "AWS, GCP, Azure y Cloudflare",
      "CI/CD con GitHub Actions",
      "Kubernetes, serverless y edge",
      "Monitoreo, logs y alertas",
    ],
    deliverables: [
      "Audit de infraestructura",
      "Migración o setup inicial",
      "Pipelines automatizados",
      "Runbook y handoff",
    ],
  },
  {
    slug: "consultoria",
    shape: "capsule",
    color: "#1d1d1f",
    accent: "#c9a84c",
    title: "Consultoría Tecnológica",
    desc: "Estrategia, arquitectura y acompañamiento para escalar tu negocio.",
    long: "Te acompañamos como aliado tecnológico: definimos roadmap, elegimos el stack, diseñamos la arquitectura y acompañamos a tu equipo en la ejecución. Pensamos a largo plazo.",
    features: [
      "Auditorías técnicas y de producto",
      "Roadmap a 3, 6 y 12 meses",
      "Arquitectura de software escalable",
      "Mentoring para tu equipo",
    ],
    deliverables: [
      "Diagnóstico inicial",
      "Estrategia documentada",
      "Workshops y sesiones de trabajo",
      "Seguimiento mensual",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
