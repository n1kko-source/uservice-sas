import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";
import { SITE_URL, absoluteAsset } from "@/lib/site";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "UService",
  legalName: "UService SAS",
  url: SITE_URL,
  logo: absoluteAsset("/og-image.jpg"),
  image: absoluteAsset("/og-image.jpg"),
  description:
    "UService diseña y desarrolla software empresarial, aplicaciones web y móviles a medida para empresas en LatAm y España.",
  taxID: "902.066.769-0",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CO",
  },
  areaServed: [
    { "@type": "Country", name: "Colombia" },
    { "@type": "Country", name: "Spain" },
    { "@type": "Place", name: "Latin America" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "uservicesas@gmail.com",
    telephone: "+57-320-644-8690",
    contactType: "sales",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: ["https://linkedin.com/company/uservice", "https://instagram.com/uservice"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UService",
  url: SITE_URL,
  description: "Desarrollo de software a medida, web, apps y cloud para empresas.",
  inLanguage: "es",
  publisher: {
    "@type": "Organization",
    name: "UService SAS",
    url: SITE_URL,
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Desarrollo de Software a Medida | UService" },
      {
        name: "description",
        content:
          "Software empresarial, web, apps y cloud para equipos en LatAm y España. Cotiza tu proyecto con UService SAS — remoto.",
      },
      { name: "author", content: "UService" },
      { property: "og:title", content: "Desarrollo de Software a Medida | UService" },
      {
        property: "og:description",
        content: "Software a medida, desarrollo web, apps móviles y consultoría tecnológica.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "UService" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: absoluteAsset("/og-image.jpg") },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Desarrollo de Software a Medida | UService" },
      {
        name: "twitter:description",
        content: "Software a medida, desarrollo web, apps móviles y consultoría tecnológica.",
      },
      { name: "twitter:image", content: absoluteAsset("/og-image.jpg") },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", type: "image/png", href: "/favicon-48x48.png", sizes: "48x48" },
      { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAnalytics />
      <Outlet />
    </QueryClientProvider>
  );
}
