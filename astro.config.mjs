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
    '/start': '/ot/willkommen',
    '/ot': '/ot/willkommen',
    '/it/aloy/umseck-weitfurth': '/it/aloy/umseck-waidfuath',
    '/kernregeln': '/ot/willkommen#regelwerk',
    '/kontakt': '/ot/kontakt',
    '/mitspielen': '/ot/willkommen',
    '/ueber-aloy': '/ot/willkommen',

    // Zusammengeführte IT-Seiten (Entschlankung des IT-Bereichs, 2026-08):
    '/it/rat/befreiung': '/it/rat/geschichte-der-republik',
    '/it/rat/freiheitserklaerung': '/it/rat/geschichte-der-republik',
    '/it/rat/fehlender-adel': '/it/rat/geschichte-der-republik',
    '/it/rat/streitfragen': '/it/rat/ratsarbeit-heute',
    '/it/rat/beschluesse': '/it/rat/ratsarbeit-heute',
    '/it/akademie/ausbildung-soldaten': '/it/akademie/ausbildung-kriegswesen',
    '/it/akademie/militaer-krieg': '/it/akademie/ausbildung-kriegswesen',
    '/it/akademie/gelehrte-schreiber-meister': '/it/akademie/wissenschaft-gelehrsamkeit',
    '/it/akademie/wissenschaft-magie': '/it/akademie/wissenschaft-gelehrsamkeit',
    '/it/glaube/gebete-segenssprueche': '/it/glaube/glaube-alltag',
    '/it/glaube/glaube-feldlager': '/it/glaube/glaube-alltag',
    '/it/volk/feste-feiertage': '/it/volk/feste-lieder-gelage',
    '/it/volk/speis-trank-gelage': '/it/volk/feste-lieder-gelage',
    '/it/volk/lieder-spiele-geschichten': '/it/volk/feste-lieder-gelage',
    '/it/recht/richter-schultheiss': '/it/recht/traeger-der-rechtsordnung',
    '/it/recht/buettel-wachen-schreiber': '/it/recht/traeger-der-rechtsordnung',
    '/it/recht/rat-oberste-ordnung': '/it/recht/traeger-der-rechtsordnung',
    '/it/umland/diplomatische-kontakte': '/it/umland/diplomatie-beziehungen',
    '/it/umland/offene-gesandtschaften': '/it/umland/diplomatie-beziehungen',
    '/it/umland/freunde-verbuendete-schwierige-leute': '/it/umland/diplomatie-beziehungen',
    '/it/aloy/lage-grenzen': '/it/aloy/geographie-aloys',
    '/it/aloy/gebirge-meer-wege': '/it/aloy/geographie-aloys',

    // Haubentaucher-Seite entfernt (redundant mit 84. Banner, 1. Lanze);
    // Charaktere liegen jetzt direkt unter 84. Banner, 1. Lanze (2026-08):
    '/it/soeldner/haubentaucher': '/it/soeldner/84-banner-1-lanze',
    '/it/soeldner/84-banner-1-lanze/haubentaucher': '/it/soeldner/84-banner-1-lanze',
    '/it/soeldner/haubentaucher/Bast': '/it/soeldner/84-banner-1-lanze/Bast',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Bast': '/it/soeldner/84-banner-1-lanze/Bast',
    '/it/soeldner/haubentaucher/Clausz': '/it/soeldner/84-banner-1-lanze/Clausz',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Clausz': '/it/soeldner/84-banner-1-lanze/Clausz',
    '/it/soeldner/haubentaucher/Hannes': '/it/soeldner/84-banner-1-lanze/Hannes',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Hannes': '/it/soeldner/84-banner-1-lanze/Hannes',
    '/it/soeldner/haubentaucher/Hansbert': '/it/soeldner/84-banner-1-lanze/Hansbert',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Hansbert': '/it/soeldner/84-banner-1-lanze/Hansbert',
    '/it/soeldner/haubentaucher/Hartmut': '/it/soeldner/84-banner-1-lanze/Hartmut',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Hartmut': '/it/soeldner/84-banner-1-lanze/Hartmut',
    '/it/soeldner/haubentaucher/Lars': '/it/soeldner/84-banner-1-lanze/Lars',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Lars': '/it/soeldner/84-banner-1-lanze/Lars',
    '/it/soeldner/haubentaucher/Lenz': '/it/soeldner/84-banner-1-lanze/Lenz',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Lenz': '/it/soeldner/84-banner-1-lanze/Lenz',
    '/it/soeldner/haubentaucher/Rosina': '/it/soeldner/84-banner-1-lanze/Rosina',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Rosina': '/it/soeldner/84-banner-1-lanze/Rosina',
    '/it/soeldner/haubentaucher/Tilly': '/it/soeldner/84-banner-1-lanze/Tilly',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Tilly': '/it/soeldner/84-banner-1-lanze/Tilly',
    '/it/soeldner/haubentaucher/Tobalt': '/it/soeldner/84-banner-1-lanze/Tobalt',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Tobalt': '/it/soeldner/84-banner-1-lanze/Tobalt',
    '/it/soeldner/haubentaucher/Tranquillo': '/it/soeldner/84-banner-1-lanze/Tranquillo',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Tranquillo': '/it/soeldner/84-banner-1-lanze/Tranquillo',
    '/it/soeldner/haubentaucher/Vasil': '/it/soeldner/84-banner-1-lanze/Vasil',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Vasil': '/it/soeldner/84-banner-1-lanze/Vasil',
    '/it/soeldner/haubentaucher/Wenzel': '/it/soeldner/84-banner-1-lanze/Wenzel',
    '/it/soeldner/84-banner-1-lanze/haubentaucher/Wenzel': '/it/soeldner/84-banner-1-lanze/Wenzel',
  },
});
