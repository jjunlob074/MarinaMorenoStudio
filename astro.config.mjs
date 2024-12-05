import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  vite: {
    build: {
      sourcemap: true, // Habilitar sourcemaps para la construcción
    },
    resolve: {
      preserveSymlinks: true, // Preservar los enlaces simbólicos
    },
    css: {
      devSourcemap: true, // Habilitar sourcemaps en desarrollo
      transformer: "postcss", // Usar PostCSS para transformar CSS
    },
  },
});
