import type { NavItem } from './site';

export const itNav: NavItem[] = [
  {
    label: 'Vorrede',
    href: '/it/vorrede',
    children: [
      { label: 'Berichte', href: '/it/berichte' },
      { label: 'Geschichte Aloys', href: '/it/geschichte' },
    ],
  },
  {
    label: 'Das Land Aloy',
    href: '/it/aloy',
    children: [
      { label: 'Geographie Aloys', href: '/it/aloy/geographie-aloys' },
      { label: 'Grodaus, Hauptstadt der Republik', href: '/it/aloy/grodaus' },
      { label: 'Tiafunt, Hafen und Tor zur Welt', href: '/it/aloy/tiafunt' },
      { label: 'Ohm und die rote Akademie', href: '/it/aloy/ohm-akademie' },
      { label: 'Vormberg, Minen und Handwerk', href: '/it/aloy/vormberg' },
      { label: 'Umseck und Waidfuath', href: '/it/aloy/umseck-waidfuath' },
      { label: 'Bevölkerung Aloys', href: '/it/aloy/bevoelkerung' },
      { label: 'Handel, Münze und Waren', href: '/it/aloy/handel' },
    ],
  },
  {
    label: 'Republik & Rat',
    href: '/it/rat',
    children: [
      { label: 'Geschichte der Republik', href: '/it/rat/geschichte-der-republik' },
      { label: 'Der Aloyer Rat', href: '/it/rat/aloyer-rat' },
      { label: 'Städte, Zünfte und Stimmen', href: '/it/rat/staedte-zuenfte-stimmen' },
      { label: 'Wahlen und Ämter', href: '/it/rat/wahlen-aemter' },
      { label: 'Ratsarbeit heute', href: '/it/rat/ratsarbeit-heute' },
    ],
  },
  {
    label: 'Söldner',
    href: '/it/soeldner',
    children: [
      { label: 'Vom Söldnerwesen Aloys', href: '/it/soeldner/soeldnerwesen' },
      { label: 'Die reisenden Banner', href: '/it/soeldner/reisende-banner' },
      {
        label: '84. Banner, 1. Lanze',
        href: '/it/soeldner/84-banner-1-lanze',
        children: [
          { label: 'Bast Lercher', href: '/it/soeldner/84-banner-1-lanze/Bast' },
          { label: 'Clausz Andelsmann', href: '/it/soeldner/84-banner-1-lanze/Clausz' },
          { label: 'Hannes Böttcher', href: '/it/soeldner/84-banner-1-lanze/Hannes' },
          { label: 'Hansbert Fichtensplitter', href: '/it/soeldner/84-banner-1-lanze/Hansbert' },
          { label: 'Hartmut (Haddl) Wurz', href: '/it/soeldner/84-banner-1-lanze/Hartmut' },
          { label: 'Lars Spalter', href: '/it/soeldner/84-banner-1-lanze/Lars' },
          { label: 'Lenz', href: '/it/soeldner/84-banner-1-lanze/Lenz' },
          { label: 'Rosina „Rosi“ Hugendubel', href: '/it/soeldner/84-banner-1-lanze/Rosina' },
          { label: 'Tilly – Otillie Kreisch', href: '/it/soeldner/84-banner-1-lanze/Tilly' },
          { label: 'Tobalt', href: '/it/soeldner/84-banner-1-lanze/Tobalt' },
          { label: 'Tranquillo', href: '/it/soeldner/84-banner-1-lanze/Tranquillo' },
          { label: 'Vasil Schütze', href: '/it/soeldner/84-banner-1-lanze/Vasil' },
          { label: 'Wenzl aus Umseck', href: '/it/soeldner/84-banner-1-lanze/Wenzel' },
        ],
      },
      { label: 'Bekannte Hauptleute und Banner', href: '/it/soeldner/hauptleute-banner' },
      { label: 'Auftrag, Sold und Dienst', href: '/it/soeldner/auftrag-sold-dienst' },
      { label: 'Söldner im Ausland', href: '/it/soeldner/im-ausland' },
      { label: 'Lagerordnung', href: '/it/soeldner/lagerordnung' },
      { label: 'Kriegsbrauch und Verhalten im Feld', href: '/it/soeldner/kriegsbrauch-feld' },
      { label: 'Berichte von Reisen und Heerlagern', href: '/it/soeldner/reisen-heerlager' },
    ],
  },
  {
    label: 'Die Akademie',
    href: '/it/akademie',
    children: [
      { label: 'Geschichte der Akademie', href: '/it/akademie/geschichte' },
      { label: 'Die vier Zweige der Akademie', href: '/it/akademie/vier-zweige' },
      { label: 'Wissenschaft und Gelehrsamkeit', href: '/it/akademie/wissenschaft-gelehrsamkeit' },
      { label: 'Religion und Glaube', href: '/it/akademie/religion-glaube' },
      { label: 'Ausbildung und Kriegswesen', href: '/it/akademie/ausbildung-kriegswesen' },
      { label: 'Handwerk und Handel', href: '/it/akademie/handwerk-handel' },
      { label: 'Die rote Akademie zu Ohm', href: '/it/akademie/rote-akademie-ohm' },
      { label: 'Glossar der Akademie', href: '/it/akademie/glossar' },
    ],
  },
  {
    label: 'Glaube & Götter',
    href: '/it/glaube',
    children: [
      { label: 'Die Drei', href: '/it/glaube/die-drei' },
      { label: 'Weitere Götter', href: '/it/glaube/weitere-gottheiten' },
      { label: 'Priester und Tempel', href: '/it/glaube/priester-tempel' },
      { label: 'Glaube im Alltag', href: '/it/glaube/glaube-alltag' },
      { label: 'Bestattung, Tod und Seelenurteil', href: '/it/glaube/bestattung-seelenurteil' },
    ],
  },
  {
    label: 'Volk & Brauch',
    href: '/it/volk',
    children: [
      { label: 'Der gemeine Aloyer', href: '/it/volk/gemeiner-aloyer' },
      { label: 'Bauern, Handwerker und Bürger', href: '/it/volk/bauern-handwerker-buerger' },
      { label: 'Zünfte und ehrbare Gewerbe', href: '/it/volk/zunefte-gewerbe' },
      { label: 'Feste, Lieder und Gelage', href: '/it/volk/feste-lieder-gelage' },
      { label: 'Aloyer Redensarten', href: '/it/volk/redensarten' },
      { label: 'Sitten im Umgang mit Fremden', href: '/it/volk/sitten-fremde' },
      { label: 'Was der Aloyer über Adel denkt', href: '/it/volk/aloyer-adel' },
    ],
  },
  {
    label: 'Recht & Ordnung',
    href: '/it/recht',
    children: [
      { label: 'Aloyer Gerichtsordnung', href: '/it/recht/gerichtsordnung' },
      { label: 'Träger der Rechtsordnung', href: '/it/recht/traeger-der-rechtsordnung' },
      { label: 'Malefizgericht und schwere Vergehen', href: '/it/recht/malefizgericht-vergehen' },
      { label: 'Strafen und Bußen', href: '/it/recht/strafen-bussen' },
      { label: 'Ultima und die Wahrheit', href: '/it/recht/ultima-wahrheit' },
      { label: 'Bekannte Rechtsfälle', href: '/it/recht/rechtsfaelle' },
    ],
  },
  {
    label: 'Aloyer Umland',
    href: '/it/umland',
    children: [
      { label: 'Aloy in den Splitterlanden', href: '/it/umland/splitterlande' },
      { label: 'Bekannte Nachbarn', href: '/it/umland/nachbarn' },
      { label: 'Diplomatie und Beziehungen', href: '/it/umland/diplomatie-beziehungen' },
      { label: 'Handel und Söldnerverträge', href: '/it/umland/handel-soeldnervertraege' },
      { label: 'Karten und Reisewege', href: '/it/umland/karten-reisewege' },
    ],
  },
];

export const itBrandText = 'Aloyer Register und Chroniken';
export const itBrandAlt = 'Aloy-Wappen';
export const itBrandLogoSrc = '/logos/Aloy-Wappen_it.png';
export const itFooterDescription = 'Du befindest dich im IT-Bereich';
