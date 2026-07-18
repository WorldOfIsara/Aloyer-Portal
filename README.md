# Aloyer Portal

Redesign der öffentlichen Website der Aloyer Söldner als deutschsprachiges
Portal und umfangreiche In-Time-Chronik. Das Projekt trennt seine Inhalte klar
in einen OT- und einen IT-Bereich und wird schrittweise aus den vorhandenen
Gruppendokumenten, Discord-Inhalten und Bildsammlungen aufgebaut.

## Aktueller Stand

- Astro-Website mit rund 120 statisch erzeugten Seiten
- separate Navigation und Gestaltung für IT und OT
- responsive Header, ausklappbare IT-Untermenüs und fixierter Footer
- Landingpage mit Einstieg in das Portal
- OT-Fotostrecke mit automatischem und manuellem Bildwechsel
- umfangreicher IT-Bereich mit Chroniken zu Land, Rat, Söldnern, Akademie,
  Glauben, Volk, Recht und Umland
- historische Illustrationen mit Bildunterschriften und Bildnachweisen
- Sitemap, Canonical URLs, Metadaten und Weiterleitungen für alte Pfade
- vorbereitetes Directus-Modell für eine spätere CMS-Anbindung

## Bereiche

### OT-Bereich

Der Out-Time-Bereich stellt die reale LARP-Gruppe vor:

- Willkommen
- Aktuelles
- Wer wir sind
- Was wir tun
- Hintergrund
- Gewandung
- Regelwerk

Die Seiten liegen unter `src/pages/ot/`. Die OT-Navigation wird in
`src/data/portal.ts` gepflegt.

### IT-Bereich

Der In-Time-Bereich ist als **Aloyer Register und Chroniken** gestaltet und
spricht aus der Perspektive der Aloyer Akademie. Seine Hauptbereiche sind:

- Vorrede und Berichte
- Das Land Aloy
- Republik und Rat
- Söldner
- Die Akademie
- Glaube und Götter
- Volk und Brauch
- Recht und Ordnung
- Aloyer Umland

Die Seiten liegen unter `src/pages/it/`. Hauptnavigation und Untermenüs werden
zentral in `src/data/it.ts` gepflegt.

## Technik

- [Astro 6](https://astro.build/)
- TypeScript
- `@astrojs/sitemap`
- statische Seitengenerierung
- Directus als vorbereitetes Headless CMS
- Docker Compose für eine optionale lokale Directus-Instanz

Die Website verwendet aktuell überwiegend direkt in den Astro-Dateien gepflegte
Inhalte. Directus ist vorbereitet, aber noch nicht die primäre Inhaltsquelle.

## Lokale Vorschau

Voraussetzung ist Node.js ab Version `22.12`.

```bash
npm install
npm run dev
```

Danach ist die Website normalerweise unter
[http://localhost:4321](http://localhost:4321) erreichbar.

Soll die Vorschau im lokalen Netzwerk erreichbar sein:

```bash
npm run dev -- --host
```

## Build und Prüfung

```bash
npm run check
npm run build
npm run preview
```

Der fertige statische Build wird im Ordner `dist/` erzeugt.

## Inhalte bearbeiten

Eine einzelne IT-Seite besteht aus einer `.astro`-Datei. Die Vorrede befindet
sich beispielsweise hier:

```text
src/pages/it/vorrede.astro
```

Eine typische IT-Seite verwendet `ItContentPage`:

```astro
---
import ItContentPage from '../../components/ItContentPage.astro';
---

<ItContentPage title="Seitentitel">
  <p>Inhalt der Chronik.</p>
</ItContentPage>
```

Neue Unterseiten benötigen:

1. eine neue `.astro`-Datei im passenden Ordner unter `src/pages/it/`
2. bei Bedarf einen Eintrag in `src/data/it.ts`
3. passende Illustrationen unter `public/images/it/`
4. einen Bildnachweis in `docs/bildnachweise-it.md`

## Bilder und Dateien

- `public/images/it/` enthält die eingebauten IT-Illustrationen.
- `public/logos/` enthält die verwendeten Wappen und Logos.
- `public/backgrounds/` enthält die Hintergründe der Website.
- `user_files/Fotostrecke/` speist die Fotostrecke im OT-Bereich.
- `user_files/` enthält weitere lokal übernommene Projektdateien.
- `docs/bildnachweise-it.md` dokumentiert Herkunft und Lizenz der IT-Bilder.

Die Einbindung historischer Bilder erfolgt über die Komponenten
`ItIllustration.astro` und `ItIllustrationGrid.astro`. Alt-Texte und
Bildunterschriften werden direkt auf der jeweiligen Seite gepflegt.

## Projektdokumentation

Im Ordner `docs/` befinden sich unter anderem:

- Inhaltsmaps der ausgewerteten Aloy-Dokumente
- Content-Audit und Migrations-Backlog
- Redaktionsworkflow und QA-Checkliste
- Abgleich der IT-Inhalte mit den Quellen
- Redirect-Matrix
- Bildnachweise

Die ursprünglichen Arbeitsdokumente und Discord-Exporte liegen bewusst außerhalb
dieses Repositorys im lokalen Aloy-Archiv.

## Directus optional starten

Die Zugangsdaten aus `.env.example` in eine lokale `.env` übernehmen und danach:

```bash
docker compose -f docker-compose.directus.yml up -d
```

Directus ist anschließend unter
[http://localhost:8055](http://localhost:8055) erreichbar. Das vorbereitete
Schema befindet sich unter `directus/schema/`.

## Repository

[github.com/WorldOfIsara/Aloyer-Portal](https://github.com/WorldOfIsara/Aloyer-Portal)
