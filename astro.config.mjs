// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://reulos-orga.de',
  integrations: [sitemap()],
  redirects: {
    '/intime/aloyer-gotterwelt': '/welt-lore/goetterwelt',
    '/intime': '/welt-lore',
    '/start': '/portal',
    '/ot': '/ot/willkommen',
    '/it/aloy/umseck-weitfurth': '/it/aloy/umseck-waidfuath',
  },
});
