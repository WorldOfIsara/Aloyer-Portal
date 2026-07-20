export interface NavSubItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export const siteConfig = {
  name: 'Aloy - Reulos Orga',
  titleSuffix: 'Aloy Portal',
  description:
    'Offizielle Einstiegs- und Wissensplattform f�r die Aloyer S�ldner: Mitspielen, Kernregeln, Welt und Chronik.',
  nav: [
    { label: 'Start', href: '/portal' },
    { label: 'IT-Bereich', href: '/it/vorrede' },
    { label: 'OT-Bereich', href: '/ot' },
    { label: 'Kontakt', href: '/kontakt' },
  ] satisfies NavItem[],
  social: {
    worldAnvil: 'https://www.worldanvil.com/w/aloy-aloyersoeldner',
  },
};
