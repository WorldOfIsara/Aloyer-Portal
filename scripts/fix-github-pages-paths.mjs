import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/').at(-1);
const configuredBase = process.env.GITHUB_PAGES_BASE ?? (repositoryName ? `/${repositoryName}` : '/Aloyer-Portal');
const base = `/${configuredBase.replace(/^\/+|\/+$/g, '')}`;

const textExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.mjs',
  '.svg',
  '.txt',
  '.webmanifest',
  '.xml',
]);

const hasBase = (path) => path === base || path.startsWith(`${base}/`);

function prefixPath(path) {
  if (!path.startsWith('/') || path.startsWith('//') || hasBase(path)) {
    return path;
  }

  return path === '/' ? `${base}/` : `${base}${path}`;
}

function rewriteSrcset(value) {
  return value
    .split(',')
    .map((candidate) => {
      const trimmed = candidate.trim();
      if (!trimmed) return trimmed;

      const separatorIndex = trimmed.search(/\s/);
      const url = separatorIndex === -1 ? trimmed : trimmed.slice(0, separatorIndex);
      const descriptor = separatorIndex === -1 ? '' : trimmed.slice(separatorIndex);
      return `${prefixPath(url)}${descriptor}`;
    })
    .join(', ');
}

function rewriteContent(content) {
  let rewritten = content;

  // Normale HTML-Attribute: Links, Bilder, Formulare und Videos.
  rewritten = rewritten.replace(
    /\b(href|src|action|poster|data-src)=(['"])(\/[^'"]*)\2/gi,
    (match, attribute, quote, path) => `${attribute}=${quote}${prefixPath(path)}${quote}`,
  );

  // Responsive Bilder enthalten mehrere URLs innerhalb eines Attributs.
  rewritten = rewritten.replace(
    /\bsrcset=(['"])(.*?)\1/gi,
    (match, quote, value) => `srcset=${quote}${rewriteSrcset(value)}${quote}`,
  );

  // CSS-Hintergrundbilder und Schriftdateien, auch ohne Anführungszeichen.
  rewritten = rewritten.replace(
    /url\(\s*(['"]?)(\/(?!\/)[^)'"\s]+)\1\s*\)/gi,
    (match, quote, path) => `url(${quote}${prefixPath(path)}${quote})`,
  );

  // Von Astro erzeugte JSON- und JavaScript-Daten, z. B. Suche und Fotostrecke.
  // Der einzelne String "/" bleibt unverändert, damit Tastaturkürzel weiter funktionieren.
  rewritten = rewritten.replace(
    /(['"`])(\/(?!\/)[^'"`\s<>]+)\1/g,
    (match, quote, path) => `${quote}${prefixPath(path)}${quote}`,
  );

  // Redirect-Seiten können Zielpfade als url=/pfad ausgeben.
  rewritten = rewritten.replace(
    /(\burl=)(\/(?!\/)[^'"\s;>]*)/gi,
    (match, prefix, path) => `${prefix}${prefixPath(path)}`,
  );

  return rewritten;
}

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(path)));
    } else if (entry.isFile() && textExtensions.has(extname(entry.name).toLowerCase())) {
      files.push(path);
    }
  }

  return files;
}

const outputStats = await stat(outputDirectory).catch(() => null);
if (!outputStats?.isDirectory()) {
  throw new Error(`Build-Ausgabe nicht gefunden: ${outputDirectory}`);
}

const files = await collectFiles(outputDirectory);
let changedFiles = 0;

for (const file of files) {
  const original = await readFile(file, 'utf8');
  const rewritten = rewriteContent(original);

  if (rewritten !== original) {
    await writeFile(file, rewritten, 'utf8');
    changedFiles += 1;
  }
}

console.log(`GitHub-Pages-Pfade in ${changedFiles} Datei(en) auf ${base} angepasst.`);
