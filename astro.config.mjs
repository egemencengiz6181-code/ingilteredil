import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site.ts';

// noindex sayfalar sitemap'e girmez (Ads landing, teşekkür sayfası)
const EXCLUDE = ['/lp/', '/tesekkurler/'];

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDE.some((p) => page.includes(p)),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
});
