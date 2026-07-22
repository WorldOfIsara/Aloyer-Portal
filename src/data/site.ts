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
    { label: 'Start', href: '/ot/willkommen' },
    { label: 'IT-Bereich', href: '/it/vorrede' },
    { label: 'OT-Bereich', href: '/ot' },
    { label: 'Kontakt', href: '/ot/kontakt' },
  ] satisfies NavItem[],
  social: {
    worldAnvil: 'https://www.worldanvil.com/w/aloy-aloyersoeldner',
    instagram: 'https://www.instagram.com/aloyer_soeldnerkorps?igsh=MWt1M3lzNXl0c2Zycg==',
    facebook: 'https://www.facebook.com/100087384241066/',
    discord: 'https://discord.gg/KN2B7vfvz',
  },
};
