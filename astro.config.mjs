import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import sharp from "sharp";
import config from "./src/config/config.json";

// https://astro.build/config
export default defineConfig({
  site: 'https://kruegersruh.github.io',
  base: '/kruegersruh',
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: { service: sharp() },
  vite: { plugins: [tailwindcss()] },

  integrations: [
	react(), 
	sitemap(), 
	AutoImport({
		imports: [
		  "@/shortcodes/Button",
		  "@/shortcodes/Accordion",
		  "@/shortcodes/Notice",
		  "@/shortcodes/Video",
		  "@/shortcodes/Youtube",
		  "@/shortcodes/Tabs",
		  "@/shortcodes/Tab",
		],
  }), mdx()],

  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Inhaltsverzeichnis" }]],
    shikiConfig: { theme: "one-dark-pro", wrap: true },
    extendDefaultPlugins: true,
  }
});