import { itNav } from './it';
import { portalNav } from './portal';
import { glossaryEntries } from './glossary';
import type { NavItem } from './site';

export interface SearchEntry {
  href: string;
  title: string;
  summary: string;
  group: string;
  keywords: string[];
}

const flattenNav = (items: NavItem[], group: string): SearchEntry[] => {
  const entries: SearchEntry[] = [];

  for (const item of items) {
    entries.push({
      href: item.href,
      title: item.label,
      summary: '',
      group,
      keywords: [],
    });

    for (const child of item.children ?? []) {
      entries.push({
        href: child.href,
        title: child.label,
        summary: item.label,
        group,
        keywords: [],
      });
    }
  }

  return entries;
};

const linkedSpecialPages: SearchEntry[] = [
  {
    href: '/',
    title: 'Landingpage',
    summary: 'Einstieg in das Aloyer Portal',
    group: 'Portal',
    keywords: [],
  },
  {
    href: '/it/rat/rothschild',
    title: 'Ignaz Rothschild',
    summary: 'Ratsherr und Förderer der Aloyer Chroniken',
    group: 'IT-Wiki',
    keywords: ['Ratsherr', 'Chroniken'],
  },
];

const navigationEntries = [
  ...linkedSpecialPages,
  ...flattenNav(portalNav, 'OT-Bereich'),
  ...flattenNav(itNav, 'IT-Wiki'),
];

const entriesByHref = new Map<string, SearchEntry>();

for (const entry of navigationEntries) {
  const key = entry.href.replace(/\/$/, '');
  const existing = entriesByHref.get(key);

  if (existing) {
    existing.keywords.push(...entry.keywords);
  } else {
    entriesByHref.set(key, { ...entry, keywords: [...entry.keywords] });
  }
}

for (const glossaryEntry of glossaryEntries) {
  const terms = [glossaryEntry.term, ...(glossaryEntry.aliases ?? [])];

  entriesByHref.set(`/it/akademie/glossar#${glossaryEntry.slug}`, {
    href: `/it/akademie/glossar#${glossaryEntry.slug}`,
    title: glossaryEntry.term,
    summary: glossaryEntry.definition,
    group: 'Glossar',
    keywords: terms,
  });

  for (const link of glossaryEntry.links) {
    const key = link.href.replace(/\/$/, '');
    const existing = entriesByHref.get(key);

    if (existing) {
      existing.keywords.push(...terms);
      continue;
    }

    entriesByHref.set(key, {
      href: link.href,
      title: link.title,
      summary: '',
      group: 'IT-Wiki',
      keywords: [...terms],
    });
  }
}

export const officialSearchIndex = [...entriesByHref.values()].map((entry) => ({
  ...entry,
  keywords: [...new Set(entry.keywords)],
}));
