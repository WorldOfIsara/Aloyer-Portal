import type { NavItem } from './site';

export const portalNav: NavItem[] = [
  { label: 'Willkommen', href: '/ot/willkommen' },
  {
    label: 'Wer wir sind',
    href: '/ot/willkommen#wer-wir-sind',
    children: [{ label: 'Was wir tun', href: '/ot/willkommen#was-wir-tun' }],
  },
  {
    label: 'Hintergrund',
    href: '/ot/willkommen#hintergrund',
    children: [
      { label: 'Gewandung', href: '/ot/willkommen#gewandung' },
      { label: 'Regelwerk', href: '/ot/willkommen#regelwerk' },
    ],
  },
  { label: 'Aktuelles', href: '/ot/willkommen#aktuelles' },
  { label: 'Packliste', href: '/ot/packliste' },
  { label: 'Freundesgruppen', href: '/ot/willkommen#partner' },
  {
    label: 'Kontakt',
    href: '/ot/willkommen#kontakt',
    children: [{ label: 'Impressum & Datenschutz', href: '/ot/impressum' }],
  },
];

export const portalBrandText = 'Aloyer S\u00f6ldner';
export const portalBrandAlt = 'Haubentaucher-Wappen der Aloyer S\u00f6ldner';
export const portalFooterTitle = 'Aloyer S\u00f6ldner Portal';
export const portalFooterDescription = 'Du befindest dich im OT-Bereich';
