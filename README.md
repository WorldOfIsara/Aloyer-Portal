# Aloy Portal (MVP)

Astro-Frontend mit vorbereitetem Headless-CMS-Setup (Directus) fuer das Redesign der Reulos/Aloy-Website.

## Ziele dieser Implementierung

- Oeffentliches, einsteigerfreundliches Portal+Wiki
- MVP-Informationsarchitektur mit 23 Seiten
- Kuratierte Migration aus bestehendem Material
- Designsystem mit wiederverwendbaren Komponenten
- Vorbereitetes Directus-Content-Modell
- Redirect-Matrix fuer Altpfade

## Tech Stack

- Astro 6
- @astrojs/sitemap
- Directus (vorbereitet via Docker Compose)

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Dev-URL: http://localhost:4321

## Build und Checks

```bash
npm run check
npm run build
npm run preview
```

## Wichtige Pfade

- `src/pages/*` - Portal-, Lore-, Chronik- und Download-Seiten
- `src/components/*` - Hero, Breadcrumbs, TOC, DownloadBox, Related Content
- `src/data/content.ts` - kuratierte MVP-Inhalte
- `src/data/site.ts` - Navigation und Site-Konfiguration
- `docs/*` - Audit, Workflow, Backlog, QA, Redirect-Matrix
- `directus/schema/collections.json` - Content-Modell fuer CMS
- `docker-compose.directus.yml` - lokaler Directus-Start

## Directus lokal starten

```bash
docker compose -f docker-compose.directus.yml up -d
```

Danach Directus unter http://localhost:8055 aufrufen.
