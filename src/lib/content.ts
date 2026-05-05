import {
  chronikRecords,
  downloadRecords,
  loreRecords,
  topLevelPages,
  type BaseRecord,
  type DownloadRecord,
  type EventRecord,
  type LoreRecord,
} from '../data/content';

type AnyRecord = LoreRecord | EventRecord | DownloadRecord;

type LinkItem = {
  title: string;
  href: string;
};

const bySlug = new Map<string, AnyRecord>([
  ...loreRecords.map((record) => [record.slug, record] as const),
  ...chronikRecords.map((record) => [record.slug, record] as const),
  ...downloadRecords.map((record) => [record.slug, record] as const),
]);

const topLevelBySlug = new Map(topLevelPages.map((page) => [page.slug, page] as const));

const toHref = (record: AnyRecord) => {
  if (record.contentType === 'EventLog') return `/chronik/${record.slug}`;
  if (record.contentType === 'DownloadAsset') return `/downloads/${record.slug}`;
  return `/welt-lore/${record.slug}`;
};

export const getRelatedLinks = (related: string[]): LinkItem[] =>
  related
    .map((slug) => {
      const record = bySlug.get(slug);
      if (record) {
        return {
          title: record.title,
          href: toHref(record),
        };
      }

      const top = topLevelBySlug.get(slug);
      if (top) {
        return {
          title: top.title,
          href: top.href,
        };
      }

      return null;
    })
    .filter((item): item is LinkItem => Boolean(item));

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('de-DE', {
    dateStyle: 'long',
  }).format(new Date(date));

export const formatMeta = (record: BaseRecord) =>
  `Aktualisiert: ${formatDate(record.updatedAt)} | Status: ${record.status}`;
