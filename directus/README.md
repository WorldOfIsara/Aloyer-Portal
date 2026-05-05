# Directus Setup

Diese Implementierung nutzt Astro als Frontend und bereitet Directus als Headless CMS vor.

## Schnellstart (lokal)

1. `docker compose -f docker-compose.directus.yml up -d`
2. Directus unter `http://localhost:8055` aufrufen.
3. Admin erstellen.
4. Collections gemaess `directus/schema/collections.json` anlegen.

## Collections

- landing_pages
- standard_pages
- lore_articles
- cities
- factions
- deities
- characters
- event_logs
- download_assets

## Felder (gemeinsam)

- title (string)
- summary (text)
- content (richtext)
- tags (json/relational)
- source_notes (text)
- updated_at (datetime)
- related_content (many-to-many)
- status (draft/review/published)
