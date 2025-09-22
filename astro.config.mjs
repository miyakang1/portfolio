// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://miyakang1.github.io",
  base: "/portfolio", // MUST match your repo name
  vite: {
    plugins: [tailwindcss()],
  },
});
