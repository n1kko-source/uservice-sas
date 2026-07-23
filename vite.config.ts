import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const prerenderPages = [
  "/",
  "/nosotros",
  "/blog",
  "/terminos-y-condiciones",
  "/servicios/desarrollo-web",
  "/servicios/software-empresarial",
  "/servicios/aplicaciones-moviles",
  "/servicios/integraciones-apis",
  "/servicios/cloud-devops",
  "/servicios/consultoria",
].map((path) => ({ path }));

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      spa: {
        enabled: true,
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
        failOnError: true,
        filter: ({ path }) => !path.includes("#"),
        pages: prerenderPages,
      },
    }),
    viteReact(),
  ],
});
