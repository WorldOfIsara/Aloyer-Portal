import type { NavItem } from './site';

export const itNav: NavItem[] = [
  {
    label: 'Vorrede',
    href: '/it/vorrede',
    children: [{ label: 'Berichte', href: '/it/berichte' }],
  },
  {
    label: 'Das Land Aloy',
    href: '/it/aloy',
    children: [
      { label: 'Lage und Grenzen Aloys', href: '/it/aloy/lage-grenzen' },
      { label: 'Gebirge, Meer und Wege ins Land', href: '/it/aloy/gebirge-meer-wege' },
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
      { label: 'Die Befreiung Aloys', href: '/it/rat/befreiung' },
      { label: 'Die Freiheitserklärung', href: '/it/rat/freiheitserklaerung' },
      { label: 'Der Aloyer Rat', href: '/it/rat/aloyer-rat' },
      { label: 'Städte, Zünfte und Stimmen', href: '/it/rat/staedte-zuenfte-stimmen' },
      { label: 'Wahlen und Ämter', href: '/it/rat/wahlen-aemter' },
      { label: 'Vom fehlenden Adel', href: '/it/rat/fehlender-adel' },
      { label: 'Bekannte Streitfragen des Rates', href: '/it/rat/streitfragen' },
      { label: 'Beschlüsse und Verlautbarungen', href: '/it/rat/beschluesse' },
    ],
  },
  {
    label: 'Söldner',
    href: '/it/soeldner',
    children: [
      { label: 'Vom Söldnerwesen Aloys', href: '/it/soeldner/soeldnerwesen' },
      { label: 'Die reisenden Banner', href: '/it/soeldner/reisende-banner' },
      { label: '84. Banner, 1. Lanze', href: '/it/soeldner/84-banner-1-lanze' },
      { label: 'Bekannte Hauptleute und Banner', href: '/it/soeldner/hauptleute-banner' },
      { label: 'Auftrag, Sold und Dienst', href: '/it/soeldner/auftrag-sold-dienst' },
      { label: 'Söldner im Ausland', href: '/it/soeldner/im-ausland' },
      { label: 'Lagerordnung', href: '/it/soeldner/lagerordnung' },
      { label: 'Kriegsbrauch und Verhalten im Feld', href: '/it/soeldner/kriegsbrauch-feld' },
      { label: 'Berichte von Reisen und Heerlagern', href: '/it/soeldner/reisen-heerlager' },
    ],
  },
  {
      label: 'Haubentaucher',
      href: '/it/soeldner/haubentaucher',
      children: [
        { label: 'Wenzel', href: '/it/soeldner/haubentaucher/Wenzel' },
        { label: 'Charaktername 2', href: '/it/soeldner/haubentaucher/charaktername-2' },
        { label: 'Charaktername 3', href: '/it/soeldner/haubentaucher/charaktername-3' },
      ],
    },
  {
    label: 'Die Akademie',
    href: '/it/akademie',
    children: [
      { label: 'Geschichte der Akademie', href: '/it/akademie/geschichte' },
      { label: 'Die vier Zweige der Akademie', href: '/it/akademie/vier-zweige' },
      { label: 'Wissenschaft und Magie', href: '/it/akademie/wissenschaft-magie' },
      { label: 'Religion und Glaube', href: '/it/akademie/religion-glaube' },
      { label: 'Militär und Krieg', href: '/it/akademie/militaer-krieg' },
      { label: 'Handwerk und Handel', href: '/it/akademie/handwerk-handel' },
      { label: 'Die rote Akademie zu Ohm', href: '/it/akademie/rote-akademie-ohm' },
      { label: 'Ausbildung der Soldaten', href: '/it/akademie/ausbildung-soldaten' },
      { label: 'Gelehrte, Schreiber und Meister', href: '/it/akademie/gelehrte-schreiber-meister' },
    ],
  },
  {
    label: 'Glaube & Götter',
    href: '/it/glaube',
    children: [
      { label: 'Die Drei', href: '/it/glaube/die-drei' },
      { label: 'Weitere Götter', href: '/it/glaube/weitere-gottheiten' },
      { label: 'Priester und Tempel', href: '/it/glaube/priester-tempel' },
      { label: 'Gebete und Segenssprüche', href: '/it/glaube/gebete-segenssprueche' },
      { label: 'Glaube im Alltag', href: '/it/glaube/glaube-alltag' },
      { label: 'Glaube im Feldlager', href: '/it/glaube/glaube-feldlager' },
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
      { label: 'Feste und Feiertage', href: '/it/volk/feste-feiertage' },
      { label: 'Speis, Trank und Gelage', href: '/it/volk/speis-trank-gelage' },
      { label: 'Lieder, Spiele und Geschichten', href: '/it/volk/lieder-spiele-geschichten' },
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
      { label: 'Vom Richter und Schultheiß', href: '/it/recht/richter-schultheiss' },
      { label: 'Vom Rat als oberster Ordnung', href: '/it/recht/rat-oberste-ordnung' },
      { label: 'Malefizgericht und schwere Vergehen', href: '/it/recht/malefizgericht-vergehen' },
      { label: 'Strafen und Bußen', href: '/it/recht/strafen-bussen' },
      { label: 'Büttel, Wachen und Schreiber', href: '/it/recht/buettel-wachen-schreiber' },
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
      { label: 'Diplomatische Kontakte', href: '/it/umland/diplomatische-kontakte' },
      { label: 'Handel und Söldnerverträge', href: '/it/umland/handel-soeldnervertraege' },
      { label: 'Berichte von Heerlagern', href: '/it/umland/berichte-heerlager' },
      {
        label: 'Freunde, Verbündete und schwierige Leute',
        href: '/it/umland/freunde-verbuendete-schwierige-leute',
      },
      { label: 'Offene Gesandtschaften', href: '/it/umland/offene-gesandtschaften' },
      { label: 'Karten und Reisewege', href: '/it/umland/karten-reisewege' },
    ],
  },
];

export const itBrandText = 'Aloyer Register und Chroniken';
export const itBrandAlt = 'Aloy-Wappen';
export const itBrandLogoSrc = '/logos/Aloy-Wappen.png';
export const itFooterDescription = 'Du befindest dich im IT-Bereich';
