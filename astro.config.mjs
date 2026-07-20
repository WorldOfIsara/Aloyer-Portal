// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://worldofisara.github.io', //als temporärer Ersatz für 'https://reulos-orga.de' oder für z.B. www.aloyer-soeldner.de, https://www.aloy.de oder https://www.Soeldner-Aloy.de
  base: '/',

  integrations: [sitemap()],

  redirects: {
    '/intime/aloyer-gotterwelt': '/welt-lore/goetterwelt',
    '/intime': '/welt-lore',
    '/start': '/portal',
    '/ot': '/ot/willkommen',
    '/it/aloy/umseck-weitfurth': '/it/aloy/umseck-waidfuath',
  },
});
