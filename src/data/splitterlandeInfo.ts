// Infotexte für das Klick-Fenster der interaktiven Splitterlande-Karte
// (src/components/SplitterlandeMap.astro).
//
// Zum Eintragen: "name" muss exakt dem Ländernamen aus dem "regions"-Array
// in SplitterlandeMap.astro entsprechen (Groß-/Kleinschreibung, Apostrophe
// etc. beachten). "text" ist der Fließtext im Popup, "ruler" ist optional
// und zeigt den Herrscher/die Herrscherin des Landes an, "href" ist
// ebenfalls optional und verlinkt z.B. auf eine eigene Unterseite oder das
// Glossar.
//
// Länder ohne Eintrag hier (oder mit leerem "text") zeigen automatisch den
// Platzhaltertext ("Zu diesem Land liegen der Akademie bislang keine
// gesicherten Aufzeichnungen vor.") aus SplitterlandeMap.astro.

export interface SplitterlandeCountryInfo {
  name: string;
  ruler?: string;
  text: string;
  href?: string;
}

export const splitterlandeInfo: SplitterlandeCountryInfo[] = [
  {
    name: 'Donnerinseln',
    ruler: 'Jarl Lithlamin Arngrimmsdottir',
    text: 'Die Donnerinseln sind eine große Inselgruppe des Königreich Ardalons. Es ist die Heimat der Sippe Vidgard.',
  },
  {
    name: 'Ardalon',
    ruler: 'Truchsess Finja Winterkalt',
    text: 'Aufgrund der Entfernung, zusätzlich bedingt durch den Krieg gegen die Otzlande und inneren Konflikten Ardalons, gab es lange Zeit wenig Austausch.',
  },
  {
    name: 'Noerdliche Otzlande',
    text:
      'In der Tundra ziehen halbnomadische Stämme umher, die zwar nicht an die Kampfkraft der südlichen Otzländer heranreichen, aber dafür erschreckend klug und listig sind. Noch weiter im Nordosten, in den weiten Steppen, haben es die Barbaren sogar vollbracht, Städte zu bauen und Reiche zu errichten, sogenannte Khagante. Die oft wechselnden Anführer leben im ständigen Krieg miteinander und nur selten herrscht Frieden.',
    href: '/it/akademie/glossar#otzlande',
  },
  {
    name: 'Suedliche Otzlande',
    text:
      'Hier leben die wilden und brutalen Kriegerstämme. Während der eine Teil nomadisch lebt und in ständiger Kampfeslust umherzieht, lebt der andere Teil in Dörfern an der Küste und misst sich jeden Tag mit dem Meer. Der Großteil der Bewohner sind aber die Sumpfbauern, die sich zu gerne den Barbaren andienen.',
    href: '/it/akademie/glossar#otzlande',
  },
  {
    name: 'Alfalter',
    text: '',
  },
  {
    name: 'Kronmark',
    text:
      'Historisch benachbartes Land, zu dem Aloy erneut diplomatische, wirtschaftliche und kulturelle Beziehungen aufnimmt.',
    href: '/it/akademie/glossar#kronmark',
  },
  {
    name: 'Maehnenbucht',
    text: 'Ein Inselreich südöstlich von Drachengard.',
  },
  {
    name: 'Morgon',
    text: 'Das Herzogtum befindet sich im Bürgerkrieg. Aloy selber hat sich bisher militärisch nicht in den inneren Konflikt eingemischt.',
  },
  {
    name: 'Kupferstein',
    ruler: 'Maximilian von Lowangen',
    text:
      'Fürstentum der Splitterlande, das in den erhaltenen Heerlagerberichten dem Machtbereich Kan Kuzguns zugerechnet wird.',
    href: '/it/akademie/glossar#kupferstein',
  },
  {
    name: 'Boffeld',
    text:
      'Inselstaat der Splitterlande, dessen Fürstentum Aloy durch Feste, Bündnisse und gemeinsame Unternehmungen bekannt ist.',
    href: '/it/akademie/glossar#neu-boffeld',
  },
  {
    name: "Shakeer's",
    text: 'Sultanat im tiefen Süden. So gut wie kein diplomatischer Kontakt.',
  },
  {
    name: 'Anruhn',
    ruler: 'König Konrad von Lichtenwald',
    text:
      'Auswärtiger Herrschaftsbereich, mit dessen Abgesandten Aloy Gespräche über Handel und die Anlage eines Hafens führte.',
    href: '/it/akademie/glossar#anruhn',
  },
  {
    name: 'Aloy',
    ruler: 'Der Rat der Besten',
    text: 'Aloy ist ein freies Land von überschaubarer Größe, doch von nicht geringer Bedeutung für jene, die seine Wege kennen, seine Tore passieren oder seine Bürger in fremden Landen antreffen. Es liegt geschützt zwischen Gebirge und Meer, eingebettet in natürliche Grenzen, die dem Land seit alters her Abgeschiedenheit, Eigenständigkeit und eine gewisse aloyische Sturheit bewahrt haben.',
  },
  {
    name: 'Drachengard',
    text:
      'Bedeutendes Kontaktland der Splitterlande und wiederkehrender Schauplatz des Heinrichsfestes sowie aloyischer Heerlagerberichte.',
    href: '/it/akademie/glossar#drachengard',
  },
  {
    name: 'Komarn',
    text:
      'Auswärtiges Königreich und wiederkehrender politischer Kontakt im Gefüge der Splitterlande.',
    href: '/it/akademie/glossar#komarn',
  },
  {
    name: 'Neu-Perricum',
    text: 'Neu-Perricum ist eine Hafenstadt auf einer gleichnamigen kleinen Insel südwestlich der Bucht von Antares. Sie ist ein aventurischer Außenposten.',
  },
  {
    name: 'Calistra',
    ruler: 'Hoher Rat von Calistra',
    text: 'Der Ordensstaat Calistra liegt im südlichen Teil der Splitterlande, Alyo hat kaum diplomatischer Kontakt.',
  },
  {
    name: 'Kan Kuzgun',
    ruler: 'Protektor Canis Supul Pascha',
    text:
      'Macht der Splitterlande, die nach den Berichten aloyischer Reisender mit Kupferstein und Drachengard in enger Beziehung steht.',
    href: '/it/akademie/glossar#kan-kuzgun',
  },
  {
    name: 'Salvadura',
    text: 'Eine kleine Inselkette. Mit der Stadt Puerto Astillo. Sie dient als Außenposten der tenerischen Seehandelsgilde aus den Mittellanden.',
  },
  {
    name: 'Empire of Lear',
    ruler: 'Imperator Rickrolf III',
    text: 'Ein Kaiserreich im Verbund der Arcogne.',
  },
  {
    name: 'Colmena',
    ruler: 'Königin Esmeralda II "die Eiserne" von Colmena',
    text: 'Colmena ist ein Königreich der Arcogne, welches ausschließlich von Königinnen regiert wird.',
  },
  {
    name: "L'Est d'Arc",
    text: 'Ein vom Patrizierrat geführtes Reich im Verbund der Arcogne.',
  },
  {
    name: 'Windmark',
    ruler: 'Kriegsfürst Sigmund von Gösselsgrund',
    text:
      'Region der Splitterlande, in deren Häfen nach den Expeditionsplänen die Einschiffung aloyischer Banner erfolgen sollte.',
    href: '/it/akademie/glossar#windmark',
  },
];
