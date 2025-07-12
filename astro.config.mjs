import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://kruegersruh.de',
  integrations: [mdx(), icon(), compress(), react()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@graphics': fileURLToPath(new URL('./src/assets/graphics', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@content': fileURLToPath(new URL('./src/content', import.meta.url)),
        '@images': fileURLToPath(new URL('./src/content/images', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@public': fileURLToPath(new URL('./public', import.meta.url))
      },
    },
  },
})