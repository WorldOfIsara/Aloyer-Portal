export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: 'Aloy - Reulos Orga',
  titleSuffix: 'Aloy Portal',
  description:
    'Offizielle Einstiegs- und Wissensplattform für die Aloyer Söldner: Mitspielen, Kernregeln, Welt und Chronik.',
  nav: [
    { label: 'Start', href: '/portal' },
    { label: 'IT-Bereich', href: '/it' },
    { label: 'OT-Bereich', href: '/ot' },
    { label: 'Kontakt', href: '/kontakt' },
  ] satisfies NavItem[],
  social: {
    worldAnvil: 'https://www.worldanvil.com/w/aloy-aloyersoeldner',
  },
};
