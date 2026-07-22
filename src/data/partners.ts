// Zwei getrennte Listen: "Partnergruppen" (feste, enge Kooperationen/
// gemeinsamer Hintergrund) und "Freundesgruppen" (befreundete Gruppen ohne
// engere Bindung). Beide werden auf /ot/partner und im Onepager-Block
// (pages/ot/partner-block.astro) untereinander mit eigener Überschrift
// gerendert - siehe PartnerGrid.astro (nimmt die jeweilige Liste als Prop).
//
// Zum Eintragen: einfach ein neues Objekt in das passende Array einfügen.
// logoSrc ist optional - fehlt es, wird automatisch ein Anfangsbuchstaben-
// Monogramm angezeigt. Bilder unter public/images/ot/partner/ ablegen und
// hier mit z. B. '/images/ot/partner/dateiname.png' verlinken.
export interface PartnerGroup {
  slug: string;
  name: string;
  description: string;
  url: string;
  logoSrc?: string;
}

export const partnerGroups: PartnerGroup[] = [
  {
    slug: 'drachengard',
    name: 'Großherzogtum Drachengard',
    description:
      'Das Großherzogtum Drachengard ist unser seit 2002 existierender LARP-Hintergrund. Eine feudale Monarchie, vom Aufbau angelehnt an das HRRDN, in einer mitteleuropäischen Klimazone.',
    url: 'https://drachengard.de/',
    logoSrc: '/images/ot/partner/drachengard.png',
  },
  {
    slug: 'kronmark',
    name: 'Fürstentums Kronmark',
    description:
      'Im Jahr 124 hat sich die Kronmark selbst zum Fürstentum Kronmark ausgerufen. Aufgrund der noch etwas unklaren Lage im Land sind bisher wenige Neuigkeiten und Informationen nach außen gedrungen.',
    url: 'https://koenigreich-komarn-1.jimdosite.com/',
    logoSrc: '/images/ot/partner/kronmark.png',
  },
  {
    slug: 'boffeld',
    name: 'Fürstentums Boffeld',
    description:
      'Fürstentum Boffeld, ehemals Neu-Boffeld. ',
    url: 'https://www.facebook.com/Neuboffeld/?locale=de_DE',
    logoSrc: '/images/ot/partner/boffeld.png',
  },
  
];

// Freundesgruppen: aktuell noch leer - hier eure befreundeten Gruppen
// eintragen, gleiches Format wie oben bei partnerGroups.
export const friendGroups: PartnerGroup[] = [
  {
    slug: 'komarn',
    name: 'Königreich Komarn',
    description:
      'Das stolze Volk der Komarner hat dank der Vereinigung sich stark verändert und ist verschmolzen, zu dem was es heute darstellt.',
    url: 'https://koenigreich-komarn-1.jimdosite.com/',
  },
  {
    slug: 'arcogne',
    name: 'Die Arcogne',
    description:
      'Die Arcogne',
    url: 'https://www.facebook.com/people/Die-Arcogne/100064555397896/',
    logoSrc: '/images/ot/partner/argogne.png',
  },

];
