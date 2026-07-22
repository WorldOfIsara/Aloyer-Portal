// Partnergruppen, auf die von /ot/partner verlinkt wird. Aktuell nur
// Platzhalter - bitte mit echten Namen, Logos und Links befüllen, sobald
// die Liste feststeht. logoSrc ist optional (z. B. unter /logos/ ablegen).
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
    description: 'Das Großherzogtum Drachengard ist unser seit 2002 existierender LARP-Hintergrund. Eine feudale Monarchie, vom Aufbau angelehnt an das HRRDN, in einer mitteleuropäischen Klimazone.',
    url: 'https://drachengard.de/',
    logoSrc: '/images/ot/partner/drachengard.png'
  },
  {
    slug: 'komarn',
    name: 'Königreich Komarn',
    description: 'Das stolze Volk der Komarner hat dank der Vereinigung sich stark verändert und ist verschmolzen, zu dem was es heute darstellt. ',
    url: 'https://koenigreich-komarn-1.jimdosite.com/',
  },
  
];
