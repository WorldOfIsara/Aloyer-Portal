export type LifecycleStatus = 'MVP' | 'Phase2' | 'Archiv';

export type ContentSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BaseRecord = {
  slug: string;
  title: string;
  summary: string;
  updatedAt: string;
  tags: string[];
  related: string[];
  source: string[];
  status: LifecycleStatus;
};

export type LoreRecord = BaseRecord & {
  contentType: 'LoreArticle' | 'City' | 'Faction' | 'Deity';
  sections: ContentSection[];
};

export type EventRecord = BaseRecord & {
  contentType: 'EventLog';
  date: string;
  location: string;
  sections: ContentSection[];
};

export type DownloadRecord = BaseRecord & {
  contentType: 'DownloadAsset';
  fileType: 'PDF' | 'DOCX' | 'ZIP';
  fileSize: string;
  filename: string;
  sections: ContentSection[];
};

export const loreRecords: LoreRecord[] = [
  {
    slug: 'grodaus',
    title: 'Grodaus - Hauptstadt der Republik',
    summary: 'Politisches Zentrum Aloys und Sitz des Roten Rats.',
    contentType: 'City',
    updatedAt: '2026-04-23',
    tags: ['Stadt', 'Politik', 'Republik'],
    related: ['roter-rat', 'gwalt', 'chronik-ratssitzung-2023-05'],
    source: ['Aloy Drive Complete.pdf p.168, p.196-231'],
    status: 'MVP',
    sections: [
      {
        id: 'ueberblick',
        heading: 'Überblick',
        paragraphs: [
          'Grodaus ist der politische Kern der Aloyer Republik. Hier tagt der Rote Rat, hier laufen militaerische Berichte zusammen, und hier werden Initiativen für Handel, Schutz und Diplomatie abgestimmt.',
          'Im Stadtbild trifft Verwaltung auf Handwerk und Soldkultur. Das macht Grodaus zu einem idealen Startpunkt für neue Charaktere und für Plot-Aufhaenger rund um Politik, Verhandlungen und Kommandostrukturen.'
        ]
      },
      {
        id: 'spielrelevanz',
        heading: 'Spielrelevanz',
        paragraphs: [
          'Viele Ingame-Entscheidungen werden auf Ratssitzungen vorbereitet oder nachbereitet. Das bietet eine klare Bruecke zwischen Lore und aktivem Spiel.'
        ],
        bullets: [
          'Gute Einstiegsrolle: Abgesandte, Schreiber, Miliz, Zunftvertretung.',
          'Typische Konflikte: Ressourcen, Grenzschutz, Diplomatie, Rechtsauslegung.',
          'Empfohlene Verknuepfung: Chronik-Einträge mit Beschlusslage.'
        ]
      }
    ]
  },
  {
    slug: 'umseck',
    title: 'Umseck - Ordnung und Ausbildung',
    summary: 'Knotenpunkt für Ausbildung von Waechtern und Ordenskriegern.',
    contentType: 'City',
    updatedAt: '2026-04-23',
    tags: ['Stadt', 'Militaer', 'Ausbildung'],
    related: ['gwalt', 'kernregeln', 'mitspielen'],
    source: ['Aloy Drive Complete.pdf p.168-183'],
    status: 'MVP',
    sections: [
      {
        id: 'rolle',
        heading: 'Rolle in Aloy',
        paragraphs: [
          'Umseck steht für Disziplin, Ausbildung und Truppenstruktur. Die Region ist ein glaubwuerdiger Ort für Laufbahnen, in denen Loyalitaet, Drill und Dienstrecht eine zentrale Rolle spielen.',
          'Als Spielort eignet sich Umseck für Rekrutierung, Pruefungen und Konflikte zwischen Pragmatismus und Ideal.'
        ]
      },
      {
        id: 'anspielpunkte',
        heading: 'Anspielpunkte',
        paragraphs: [
          'Innerhalb des Portals wird Umseck bewusst knapp und spielpraktisch dargestellt. Tiefe Sondertexte wandern in Phase 2 nach.'
        ],
        bullets: [
          'Ausbildungsstation für Neulinge im Spiel.',
          'Verbindung zu Waffen-, Schild- und Wachdienstplots.',
          'Gute Schnittstelle zur Gilde GWALT.'
        ]
      }
    ]
  },
  {
    slug: 'roter-rat',
    title: 'Der Rote Rat',
    summary: 'Entscheidungsgremium für Gesetz, Sicherheit und Außenbeziehungen.',
    contentType: 'Faction',
    updatedAt: '2026-04-23',
    tags: ['Fraktion', 'Rat', 'Verwaltung'],
    related: ['grodaus', 'chronik-ratssitzung-2023-05', 'kernregeln'],
    source: ['Aloy Drive Complete.pdf p.196-231'],
    status: 'MVP',
    sections: [
      {
        id: 'mandat',
        heading: 'Mandat',
        paragraphs: [
          'Der Rote Rat entscheidet ueber zentrale Fragen der Republik und bildet die politische Bühne für Konflikte und Kompromisse.',
          'Auf der Website wird der Rat als verbindendes Element zwischen Lore, Chronik und Mitspiel-Orientierung modelliert.'
        ]
      },
      {
        id: 'typische-themen',
        heading: 'Typische Themen',
        paragraphs: [
          'Ratssitzungen behandeln Schutzstatus, Expeditionen, Zunftanliegen und diplomatische Schritte.'
        ],
        bullets: [
          'Sicherheits- und Kriegslage',
          'Handels- und Minenthemen',
          'Beziehungen zu Nachbarregionen'
        ]
      }
    ]
  },
  {
    slug: 'gwalt',
    title: 'GWALT - Waechter Aloys',
    summary: 'Gilde für Land- und Truppenschutz mit hohem Spielwert.',
    contentType: 'Faction',
    updatedAt: '2026-04-23',
    tags: ['Fraktion', 'Waechter', 'Sicherheit'],
    related: ['umseck', 'kernregeln', 'mitspielen'],
    source: ['Aloy Drive Complete.pdf p.181-183'],
    status: 'MVP',
    sections: [
      {
        id: 'auftrag',
        heading: 'Auftrag',
        paragraphs: [
          'GWALT sichert Wege, Lager und Personen und steht zugleich für Ordnung im Alltag der Siedlungen.',
          'Für die neue Seite wird GWALT als klarer Mitspiel-Anker aufgebaut: Wer Wache, Schutz oder Ermittlung spielen will, findet hier Einstiegspunkte.'
        ]
      },
      {
        id: 'spielhaken',
        heading: 'Spielhaken',
        paragraphs: [
          'GWALT funktioniert gut für neue Gruppen, weil klare Rollen und Aufgaben direkt ausspielbar sind.'
        ],
        bullets: [
          'Patrouillen, Zeugenaussagen, Spurensuche',
          'Zusammenarbeit mit Rat und Dorfmiliz',
          'Konflikt zwischen Recht und Notwendigkeit'
        ]
      }
    ]
  },
  {
    slug: 'goetterwelt',
    title: 'Aloyer Goetterwelt',
    summary: 'Kompakter Einstieg in zentrale Gottheiten und ihre Spielwirkung.',
    contentType: 'LoreArticle',
    updatedAt: '2026-04-23',
    tags: ['Lore', 'Glaube', 'Rituale'],
    related: ['miram', 'hortum', 'favilla', 'kernregeln'],
    source: ['Aloy Drive Complete.pdf p.165-176'],
    status: 'MVP',
    sections: [
      {
        id: 'ueberblick',
        heading: 'Überblick',
        paragraphs: [
          'Der Glaube ist in Aloy alltagsnah. Gottheiten strukturieren Werte, Rechtsverstaendnis und Trost in Krisen.',
          'Diese Seite bietet einen verdaulichen Einstieg. Einzeltexte zu Gottheiten sind als verknuepfte Detailseiten angelegt.'
        ]
      },
      {
        id: 'im-spiel',
        heading: 'Im Spiel',
        paragraphs: [
          'Rituale, Schwoere und Beerdigungssitten erzeugen starke Szenen. Die Website verbindet Glaubensartikel darum direkt mit Mitspiel-Hinweisen.'
        ],
        bullets: [
          'Miram: Recht, Urteil, Gewissen',
          'Hortum: Unterwelt, Tod, Verantwortung',
          'Favilla: Grablege, Abschied, Totenwache'
        ]
      }
    ]
  },
  {
    slug: 'miram',
    title: 'Miram - Die Graue',
    summary: 'Gottheit des Rechts und der geordneten Entscheidung.',
    contentType: 'Deity',
    updatedAt: '2026-04-23',
    tags: ['Gottheit', 'Recht', 'Urteil'],
    related: ['goetterwelt', 'kernregeln', 'roter-rat'],
    source: ['Aloy Drive Complete.pdf p.166'],
    status: 'MVP',
    sections: [
      {
        id: 'deutung',
        heading: 'Deutung',
        paragraphs: [
          'Miram steht für besonnene Gerechtigkeit und gegen willkuerliche Rache. Ihre Symbolik passt daher direkt zu Gericht, Eid und Verhandlungsspiel.',
          'Szenisch wirkt Miram besonders in Dilemmata: Was ist gerecht, wenn keine Option ohne Schaden ist?'
        ]
      }
    ]
  },
  {
    slug: 'hortum',
    title: 'Hortum - Der Schwarze',
    summary: 'Herr der Unterwelt und Waechter der letzten Ordnung.',
    contentType: 'Deity',
    updatedAt: '2026-04-23',
    tags: ['Gottheit', 'Unterwelt', 'Tod'],
    related: ['goetterwelt', 'favilla', 'chronik-erntekonvoi-2024-09'],
    source: ['Aloy Drive Complete.pdf p.167, p.326'],
    status: 'MVP',
    sections: [
      {
        id: 'deutung',
        heading: 'Deutung',
        paragraphs: [
          'Hortum verleiht Endgueltigkeit und Ernst. Seine Anrufung ist oft mit Verantwortung gegenueber den Verstorbenen verbunden.',
          'Im Spiel eignet sich Hortum für Schwur-Szenen und Fragen von Schuld, Suehne und Erinnerung.'
        ]
      }
    ]
  },
  {
    slug: 'favilla',
    title: 'Favilla - Die Totengraeberin',
    summary: 'Rituelle Begleiterin für Abschied und Würde der Gefallenen.',
    contentType: 'Deity',
    updatedAt: '2026-04-23',
    tags: ['Gottheit', 'Bestattung', 'Ritual'],
    related: ['goetterwelt', 'hortum', 'mitspielen'],
    source: ['Aloy Drive Complete.pdf p.169, p.176'],
    status: 'MVP',
    sections: [
      {
        id: 'deutung',
        heading: 'Deutung',
        paragraphs: [
          'Favilla ist für viele Figuren die letzte Instanz von Würde und Ruhe. Das macht ihre Symbolik zentral für Trauerspiel und Versoehnung.',
          'Auf dem Portal dient die Seite als Bruecke zwischen Lore und konkreten Ritualvorschlaegen für Spielabende.'
        ]
      }
    ]
  }
];

export const chronikRecords: EventRecord[] = [
  {
    slug: 'chronik-ratssitzung-2023-05',
    title: 'Ratssitzung in Grodaus (Mai 2023)',
    summary: 'Beschlusslage zu Schutzstatus, Expedition und Zunftanliegen.',
    contentType: 'EventLog',
    date: '2023-05-24',
    location: 'Grodaus',
    updatedAt: '2026-04-23',
    tags: ['Ratssitzung', 'Politik'],
    related: ['grodaus', 'roter-rat'],
    source: ['Aloy Drive Complete.pdf p.196-206'],
    status: 'MVP',
    sections: [
      {
        id: 'kernpunkte',
        heading: 'Kernpunkte',
        paragraphs: [
          'Die Sitzung behandelte den regionalen Schutzstatus sowie eine zeitkritische Expedition. Mehrere eingebrachte Punkte wurden abgestimmt und protokolliert.',
          'Für das Portal wurde die Sitzung in einer lesbaren Kurzform aufbereitet, damit neue Spieler Entscheidungen historisch einordnen können.'
        ]
      }
    ]
  },
  {
    slug: 'chronik-akademiebericht-2023-08',
    title: 'Akademiebericht und Lehrlage (August 2023)',
    summary: 'Lehrkoerper, Schuelerstand und Prioritaeten der Ausbildung.',
    contentType: 'EventLog',
    date: '2023-08-12',
    location: 'Grodaus / Akademie',
    updatedAt: '2026-04-23',
    tags: ['Akademie', 'Bildung'],
    related: ['umseck', 'mitspielen'],
    source: ['Aloy Drive Complete.pdf p.219-223'],
    status: 'MVP',
    sections: [
      {
        id: 'kernpunkte',
        heading: 'Kernpunkte',
        paragraphs: [
          'Die Protokolle beschreiben Kapazitaeten, Lehrkoerper und Ausbildungszweige. Daraus ergibt sich eine klare Einordnung für Charakterhintergruende.',
          'Die Webfassung konzentriert sich auf Spielrelevanz und verzichtet im MVP auf tiefes Verwaltungsdetail.'
        ]
      }
    ]
  },
  {
    slug: 'chronik-erntekonvoi-2024-09',
    title: 'Erntekonvoi und Nachtwache (September 2024)',
    summary: 'Konvoiabsicherung, Zwischenfaelle und lokale Reaktion.',
    contentType: 'EventLog',
    date: '2024-09-17',
    location: 'Vorland zwischen Doerfern',
    updatedAt: '2026-04-23',
    tags: ['Sicherheit', 'Wache', 'Dorfspiel'],
    related: ['gwalt', 'hortum', 'mitspielen'],
    source: ['Aloy Drive Complete.pdf p.291-322'],
    status: 'MVP',
    sections: [
      {
        id: 'kernpunkte',
        heading: 'Kernpunkte',
        paragraphs: [
          'Wachen, Alarmablauf und Folgeszenen zeigen gut, wie Alltagsbedrohungen in Spieltermine uebersetzt werden.',
          'Der Eintrag dient als Beispiel, wie Chronik auf der neuen Seite handlungsorientiert formuliert wird.'
        ]
      }
    ]
  }
];

export const downloadRecords: DownloadRecord[] = [
  {
    slug: 'gewandungsleitfaden',
    title: 'Gewandungsleitfaden Aloy',
    summary: 'Orientierung für Einsteiger zu Stil, Farben und Auftreten.',
    contentType: 'DownloadAsset',
    fileType: 'PDF',
    fileSize: '2.3 MB',
    filename: 'Gewandungsleitfaden-Aloy.pdf',
    updatedAt: '2026-04-23',
    tags: ['Einstieg', 'Gewandung'],
    related: ['mitspielen', 'kernregeln'],
    source: ['Aloy Drive Complete.pdf p.1'],
    status: 'MVP',
    sections: [
      {
        id: 'inhalt',
        heading: 'Inhalt',
        paragraphs: [
          'Der Leitfaden zeigt die visuelle Richtung der Aloyer Söldner: spaetmittelalterliche Basis, rot/natur als Leitfarben und praxistaugliche Beispiele.',
          'Im MVP wird der Leitfaden als Kern-Download priorisiert, da er sofortigen Nutzen für neue Teilnehmer schafft.'
        ]
      }
    ]
  },
  {
    slug: 'charakterbogen',
    title: 'Charakterbogen v1',
    summary: 'Standardbogen für Spielwerte, Hintergrund und Kontakte.',
    contentType: 'DownloadAsset',
    fileType: 'PDF',
    fileSize: '1.1 MB',
    filename: 'Charakterbogen-Aloy-v1.pdf',
    updatedAt: '2026-04-23',
    tags: ['Charakter', 'Formular'],
    related: ['mitspielen', 'chronik-akademiebericht-2023-08'],
    source: ['Aloy Drive Complete.pdf p.415-447'],
    status: 'MVP',
    sections: [
      {
        id: 'inhalt',
        heading: 'Inhalt',
        paragraphs: [
          'Der Bogen deckt Kernangaben, Staerken, Abhaengigkeiten und spielrelevante Kontakte ab.',
          'Versionierung ist im neuen Portal klar sichtbar, damit immer nur die aktuelle Fassung genutzt wird.'
        ]
      }
    ]
  },
  {
    slug: 'nsc-gsc-leitfaden',
    title: 'NSC/GSC Leitfaden',
    summary: 'Leitfaden für Nebenrollen, Spielauftraege und Plausibilitaet.',
    contentType: 'DownloadAsset',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    filename: 'NSC-GSC-Leitfaden-Aloy.pdf',
    updatedAt: '2026-04-23',
    tags: ['Leitfaden', 'NSC', 'GSC'],
    related: ['mitspielen', 'gwalt', 'chronik-erntekonvoi-2024-09'],
    source: ['Aloy Drive Complete.pdf p.551-749'],
    status: 'MVP',
    sections: [
      {
        id: 'inhalt',
        heading: 'Inhalt',
        paragraphs: [
          'Der Leitfaden enthält Rollenhilfe, Hintergrundwissen und modulare Aufgaben für NSC/GSC.',
          'Im Redesign wird er als eigene Downloadseite mit klaren Einsatzszenarien und Verlinkungen gepflegt.'
        ]
      }
    ]
  }
];

export const contentClusterMap = [
  {
    cluster: 'Einstieg & Mitmachen',
    sourceFocus: 'Gewandung, Mitspielhinweise, Kernregeln',
    status: 'MVP' as LifecycleStatus,
    singleSource: 'Onepager /ot/willkommen (Wer wir sind / Regelwerk)',
  },
  {
    cluster: 'Welt & Lore',
    sourceFocus: 'Staedte, Fraktionen, Goetterwelt',
    status: 'MVP' as LifecycleStatus,
    singleSource: 'Portalbereich /welt-lore',
  },
  {
    cluster: 'Chronik & Protokolle',
    sourceFocus: 'Ratssitzungen, Ereignisse, Akademieberichte',
    status: 'MVP' as LifecycleStatus,
    singleSource: 'Portalbereich /chronik',
  },
  {
    cluster: 'Tiefdokumente / Archivmaterial',
    sourceFocus: 'Lange Einzeltexte, Varianten, Dubletten',
    status: 'Archiv' as LifecycleStatus,
    singleSource: 'Archivverweise und spaetere Phase-2-Migration',
  },
  {
    cluster: 'Erweiterte Lore-Tiefe',
    sourceFocus: 'Zusatzgoetter, Randregionen, Spezialdossiers',
    status: 'Phase2' as LifecycleStatus,
    singleSource: 'Phase-2-Backlog',
  },
];

export const topLevelPages = [
  {
    slug: 'portal',
    title: 'Start',
    summary: 'Schneller Einstieg in Welt, Mitspielen und Kernregeln.',
    href: '/ot/willkommen',
  },
  {
    slug: 'mitspielen',
    title: 'Mitspielen',
    summary: 'Schritte für den Einstieg und erste Rollenideen.',
    href: '/ot/willkommen',
  },
  {
    slug: 'kernregeln',
    title: 'Kernregeln',
    summary: 'Leitlinien für faires und stimmiges Spiel.',
    href: '/ot/willkommen#regelwerk',
  },
  {
    slug: 'welt-lore',
    title: 'Welt & Lore',
    summary: 'Staedte, Fraktionen und Glauben kompakt erklaert.',
    href: '/welt-lore',
  },
  {
    slug: 'chronik',
    title: 'Chronik',
    summary: 'Ereignisse und Beschlüsse in zeitsortierter Form.',
    href: '/chronik',
  },
  {
    slug: 'downloads',
    title: 'Downloads',
    summary: 'Leitfäden und Spielunterlagen für die Praxis.',
    href: '/downloads',
  },
  {
    slug: 'kontakt',
    title: 'Kontakt',
    summary: 'Kontakt und Onboarding für neue Interessenten.',
    href: '/ot/kontakt',
  },
];

export const searchIndex = [
  ...topLevelPages.map((page) => ({
    href: page.href,
    title: page.title,
    summary: page.summary,
    group: 'Portal',
  })),
  ...loreRecords.map((record) => ({
    href: `/welt-lore/${record.slug}`,
    title: record.title,
    summary: record.summary,
    group: 'Welt & Lore',
  })),
  ...chronikRecords.map((record) => ({
    href: `/chronik/${record.slug}`,
    title: record.title,
    summary: record.summary,
    group: 'Chronik',
  })),
  ...downloadRecords.map((record) => ({
    href: `/downloads/${record.slug}`,
    title: record.title,
    summary: record.summary,
    group: 'Downloads',
  })),
];

