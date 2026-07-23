import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const seoPaths = [
  "/",
  "/nosotros",
  "/servicios",
  "/blog",
  "/blog/cuanto-cuesta-software-a-medida",
  "/blog/software-a-medida-vs-empaquetado",
  "/terminos-y-condiciones",
  "/servicios/desarrollo-web",
  "/servicios/software-empresarial",
  "/servicios/aplicaciones-moviles",
  "/servicios/integraciones-apis",
  "/servicios/cloud-devops",
  "/servicios/consultoria",
];

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Top-level only — nesting under prerender is stripped by Zod
      pages: seoPaths.map((path) => ({
        path,
        prerender: { enabled: true },
      })),
      // SPA shell also registers path "/" and wins in the prerender Map merge,
      // overwriting the real home HTML with an empty shell. Disabled so "/"
      // prerenders to index.html with full content for SEO.
      spa: {
        enabled: false,
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
        failOnError: true,
        filter: ({ path }) => !path.includes("#"),
      },
    }),
    viteReact(),
  ],
});
