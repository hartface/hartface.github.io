import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hartface.github.io",
  integrations: [
    mdx(),
    react({ experimentalReactChildren: true }),
    tailwind({ applyBaseStyles: false }),
  ],
});
