export interface HaubentaucherNote {
  title: string;
  text: string;
}

export interface HaubentaucherCharacter {
  /** URL-Segment unter /it/soeldner/84-banner-1-lanze/<slug> — bewusst identisch zu den bisherigen Dateinamen, damit sich keine Links ändern. */
  slug: string;
  name: string;

  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;

  rank?: string;
  deploymentArea?: string;
  origin?: string;
  role?: string;
  formerLife?: string;
  weapons?: string;

  summary?: string;
  notes?: HaubentaucherNote[];

  /** Fließtext-Absätze des Charakterbogens. */
  body: string[];
}

export const haubentaucherCharacters: HaubentaucherCharacter[] = [
  {
    slug: 'Bast',
    name: 'Bast Lercher',
    imageSrc: '/images/it/Charakter/Bast.png',
    imageAlt: 'Porträt von Bast Lercher',
    rank: 'Diplomat',
    origin: 'Vormberg',
    weapons: 'Mordaxt',
    summary:
      'Bast Lercher ist ein pragmatischer, loyaler und schweigsamer Diplomat und Offizier aus Vormberg – bis er zu reden beginnt, dann kann es dauern.',
    notes: [
      {
        title: 'Erscheinungsbild',
        text: 'Roter Bart, dazu passend fast immer ein rotes Barett, ein Ledergurt mit Dokumentenrolle und häufig eine Weste.',
      },
      {
        title: 'Charakter',
        text: 'Pragmatisch, loyal und schweigsam – seine Sprechweise gilt allerdings als ausschweifend und langwierig, sobald er einmal ins Reden kommt.',
      },
      {
        title: 'Stärken',
        text: 'Ein geschickter Diskutierer, der Ruhe in hitzige Runden bringt und die Führung übernimmt, wenn es niemand sonst tut.',
      },
      {
        title: 'Schwäche',
        text: 'Lässt sich von Frauen nur allzu leicht ablenken.',
      },
    ],
    body: [
      'Bast Lercher aus Vormberg dient als Diplomat und Offizier und trägt damit eine Verantwortung, die selten im Lärm des Gefechts, dafür umso häufiger am Verhandlungstisch liegt. Sein Ledergurt mit der Dokumentenrolle ist dabei ständiger Begleiter – ein Zeichen dafür, dass Worte und Verträge für ihn ebenso wichtig sind wie Klinge und Rüstung.',
      'Im Auftreten zeigt sich Bast als pragmatischer und loyaler Mann, der selten laut wird, dafür aber ausschweifend erzählen kann, wenn ihm ein Thema am Herzen liegt. Wer ihn um eine kurze Antwort bittet, sollte sich auf einen langen Weg dorthin einstellen.',
      'Man kennt ihn als jemanden, der in hitzigen Runden vermittelt, ordnet und, wenn nötig, auch die Führung übernimmt. Sein rot gefärbter Bart und das ebenso rote Barett machen ihn dabei schon von Weitem erkennbar.',
    ],
  },
  {
    slug: 'Clausz',
    name: 'Clausz Andelsmann',
    imageSrc: '/images/it/Charakter/Claus.png',
    imageAlt: 'Porträt von Clausz Andelsmann',
    rank: 'Hurenweibel',
    deploymentArea: '84. Banner',
    origin: 'Tiafunt (Hafenviertel)',
    role: 'Versorgung, Teil der Hauptweibls',
    formerLife: 'Kaufmannslehre in der Handelsfamilie Andelsmann',
    weapons: 'Dolch mit Scheide',
    summary:
      'Clausz Andelsmann ist Lagerweibel des 84. Banners: egalitär, pragmatisch und bequem – aber mit untrüglichem Blick für Ordnung, Vorräte und den Tross.',
    notes: [
      {
        title: 'Amt',
        text: 'Als Lagerweibel trägt er die Verantwortung für Versorgung, Ordnung und den gesamten Tross des Fähnleins und untersteht dabei unmittelbar dem Hauptmann.',
      },
      {
        title: 'Herkunft',
        text: 'Geboren in Tiafunt in die Handelsfamilie Andelsmann, die nach dem Sturz des Adels zu wohlhabenden Kaufleuten wurde. Clausz brach mit dem Standesdünkel der Familie und wurde Söldner.',
      },
      {
        title: 'Eigenheiten',
        text: 'Mag in Alkohol eingelegtes Obst und Wasserpfeifen etwas zu sehr.',
      },
      {
        title: 'Stärken',
        text: 'Planen und Ordnung halten – er weiß meist, wo sich Dinge befinden.',
      },
      {
        title: 'Schwäche',
        text: 'Schläft sehr gerne aus, was regelmäßig mit Morgenappellen und Frühstücksvorbereitungen kollidiert.',
      },
    ],
    body: [
      'Clausz Andelsmann ist Hurenweibel, im 84. Banner besser bekannt als Lagerweibel: verantwortlich für Versorgung, Ordnung und den gesamten Tross des Fähnleins. Er koordiniert Feldschere, Handwerker und Lagergesinde und sorgt dafür, dass die Einsatzbereitschaft aller nicht kämpfenden Dienste gewahrt bleibt – eine Aufgabe, von der gewöhnlichen Söldnerpflichten weitgehend entbindet, ihm im Gegenzug aber uneingeschränkte Weisungsbefugnis über den Tross verschafft.',
      'Geboren wurde Clausz in Tiafunt als Teil der Handelsfamilie Andelsmann. Nach dem Sturz des Adels vor 126 Jahren wandelte sich die Familie von Grundherren zu wohlhabenden Kaufleuten, hielt jedoch im Geheimen an altem Denken und Verbindungen zu Exilanten und Adelsgeschlechtern fest. Clausz selbst erhielt eine kaufmännische Ausbildung, entwickelte jedoch eine Abneigung gegen den Standesdünkel seiner Familie und brach weitgehend mit ihr.',
      'Seine kaufmännischen Kenntnisse und Kontakte im Hafenviertel von Tiafunt nutzt er heute, um den Tross zuverlässig mit Gütern zu versorgen. Im Auftreten ist Clausz egalitär, pragmatisch und bequem – oft unbeholfen und direkt, aber stets auf Augenhöhe mit seinen Leuten. Kein anderer im 84. Banner trägt einen derart üppig verzierten Gürtel wie er.',
    ],
  },
  {
    slug: 'Hannes',
    name: 'Hannes Böttcher',
    imageSrc: '/images/it/Charakter/Hannes.png',
    imageAlt: 'Porträt von Hannes Böttcher',
    rank: 'Diplomat',
    origin: 'Grodaus',
    weapons: 'Mordaxt',
    summary:
      'Hannes Böttcher ist ein prinzipientreuer, loyaler und rücksichtsvoller Diplomat aus Grodaus, der lieber einmal zu viel nachdenkt, bevor er redet.',
    notes: [
      {
        title: 'Erscheinungsbild',
        text: 'Kurzer, gepflegter Bart und eine sehr kleine, kaum auffallende Narbe im Gesicht, rechts neben der Nase.',
      },
      {
        title: 'Kleidung',
        text: 'Im Dienst Diplomatenmantel und Amtskette, ansonsten Söldner-Outfit oder Ausgehmantel.',
      },
      {
        title: 'Stärke',
        text: 'Begegnet fast jeder Situation zunächst mit diplomatischem Wissen.',
      },
      {
        title: 'Schwäche',
        text: 'Erkennt nicht immer, dass Diplomatie gerade keine Option mehr ist und man längst im „Halts Maul"-Modus angekommen ist.',
      },
    ],
    body: [
      'Hannes Böttcher aus Grodaus vertritt Aloy als Diplomat und ist damit einer jener Männer, die den Ruf der Republik nicht mit der Klinge, sondern mit dem Wort verteidigen. Im Dienst trägt er Diplomatenmantel und Amtskette, ansonsten unterscheidet er sich im Auftreten kaum von den Söldnern, mit denen er unterwegs ist.',
      'Sein Wesen gilt als prinzipientreu, loyal und rücksichtsvoll. Er redet ruhig und besonnen, denkt lieber erst nach und dafür dann ausführlich – wer eine schnelle Antwort von ihm erwartet, muss sich in Geduld üben.',
      'Diese Bedachtsamkeit ist zugleich seine größte Stärke und seine größte Schwäche: Hannes begegnet fast jeder Lage mit diplomatischem Wissen, übersieht dabei aber mitunter den Moment, in dem Verhandlungen längst keinen Sinn mehr ergeben und schlicht Klartext gefragt ist.',
    ],
  },
  {
    slug: 'Hansbert',
    name: 'Hansbert Fichtensplitter',
    imageSrc: '/images/it/Charakter/Hans.png',
    imageAlt: 'Porträt von Hansbert Fichtensplitter',
    rank: 'Söldner',
    role: 'Spießer und Barsinger-Geweihter',
    weapons: 'Mordaxt',
    summary:
      'Hansbert Fichtensplitter ist Söldner und zugleich Barsinger-Geweihter – ein Veteran, dessen Mordaxt ebenso Legende ist wie sein unerschöpflicher Durst, mit dem er sich das Herz jedes Splitterländlers trinkt.',
    notes: [
      {
        title: 'Erscheinungsbild',
        text: 'Vernarbt, breitschultrig und stets mit der Mordaxt in Reichweite – Hansbert sieht aus wie das lebende Beispiel dafür, dass man einen Kampf auch mit Anstand überleben kann, solange man danach ordentlich trinkt.',
      },
      {
        title: 'Charakter',
        text: 'Zwischen zwei Welten daheim: mit derselben Selbstverständlichkeit führt er die Mordaxt ins Gefecht wie den Becher an die Lippen, und Barsingers Segen scheint ihm bei beidem gewogen.',
      },
      {
        title: 'Stärken',
        text: 'Einer der erfahrensten Veteranen im gesamten Söldnerhaufen – mehr Feldzüge überstanden, als sich mancher Jüngling überhaupt vorstellen kann.',
      },
      {
        title: 'Bekannt für',
        text: 'Bei Splitterländlern aller Art überaus beliebt, weil er niemals Nein sagt, wenn ein Krug die Runde macht.',
      },
    ],
    body: [
      'Hansbert Fichtensplitter trägt zwei Namen in seinem Herzen, obwohl er nur einen führt: den des Söldners, der mit der Mordaxt so selbstverständlich umgeht wie andere mit einem Löffel, und den des Geweihten Barsingers, dem er in Tavernen wie auf dem Schlachtfeld gleichermaßen dient. Wo andere zwischen Pflicht und Vergnügen unterscheiden, hat Hansbert längst gelernt, dass beides für Barsinger ein und dasselbe ist.',
      'Als einer der Veteranen im Söldnerhaufen hat er mehr Schlachten, Feldzüge und durchzechte Nächte gesehen, als sich in einer einzigen Chronik ordentlich verzeichnen ließe. Seine Mordaxt trägt die Kerben dieser Jahre, und wer ihn kämpfen sieht, erkennt sofort: Hier führt keine Hand, die zum ersten Mal zuschlägt.',
      'Und doch ist es nicht allein sein Ruf als Kämpfer, der ihm die Türen öffnet. Unter den Splitterländlern gilt Hansbert als einer der beliebtesten Gesichter des Banners überhaupt – denn wo ein Krug kreist, ist er nie weit, und sein Lachen füllt die Taverne zuverlässiger als jedes Feuer. Man sagt, Barsinger selbst habe an Hansberts Durst seine wahre Freude, und mancher Wirt behauptet leise, allein sein Erscheinen mache jeden Abend zu einem Fest.',
    ],
  },
  {
    slug: 'Hartmut',
    name: 'Hartmut (Haddl) Wurz',
    imageSrc: '/images/it/Charakter/Haddl.png',
    imageAlt: 'Porträt von Hartmut (Haddl) Wurz',
    rank: 'Armbruster und Fahnenträger',
    deploymentArea: '84. Banner',
    origin: 'Ohm',
    formerLife: 'Ausbildung in der Gebirgsmarine',
    weapons: 'Armbrust',
    summary:
      'Hartmut, genannt Haddl, ist Armbruster und Fahnenträger des 84. Banners – ruhig, loyal und mit großer Klappe, wenn es die Lage verlangt.',
    notes: [
      {
        title: 'Erscheinungsbild',
        text: 'Keinen Bart, dafür lange Haare; trägt rot-weiße Hose, Weste und Barett unter voller Rüstung.',
      },
      {
        title: 'Sprechweise',
        text: 'Knapp und direkt, garniert mit dem oft wiederholten Satz: „Der Opa hat immer gesagt…“',
      },
      {
        title: 'Stärken',
        text: 'Kochen und Organisieren.',
      },
      {
        title: 'Schwäche',
        text: 'Neigt zu übermäßigem Alkoholkonsum.',
      },
    ],
    body: [
      'Hartmut Wurz, im Banner nur Haddl genannt, dient als Armbruster und Fahnenträger des 84. Banners aus Ohm. Statt der üblichen Langwehr führt er Armbrust und Pavese, dazu Eisenhut, Brustplatte, Panzerhandschuhe und Beinpanzer – schwer gerüstet, aber verlässlich in der Reihe.',
      'Vor seiner Zeit im Heer durchlief Haddl eine Ausbildung in der Gebirgsmarine, was ihn im Auftreten ruhig und loyal, aber mit einer großen Klappe zurückließ, sobald es etwas zu sagen gibt. Seine Sprechweise ist knapp und direkt, gerne unterlegt mit dem Satz „Der Opa hat immer gesagt…“, egal wie gut die Weisheit tatsächlich zur Lage passt.',
      'Im Lager ist Haddl für sein Kochen und seine Organisationsgabe bekannt – ebenso wie für seinen Hang, es mit dem Alkohol gelegentlich zu weit zu treiben.',
    ],
  },
  {
    slug: 'Lars',
    name: 'Lars Spalter',
    imageSrc: '/images/it/Charakter/Lars.png',
    imageAlt: 'Porträt von Lars Spalter',
    rank: 'Wachweibl',
    deploymentArea: '84. Banner',
    origin: 'Tiafunt',
    weapons: 'Mordaxt',
    role: 'Teil der Hauptweibls',
    formerLife: 'Mitglied der Tiafunter Rammböcke',
    summary:
      'Lars Spalter ist Wachweibl des 84. Banners – gewissenhaft, streng und leidenschaftlich, ein Bollwerk für seine Leute und einer der drei Sprecher der GWALT.',
    notes: [
      {
        title: 'Erscheinungsbild',
        text: 'Oft mit Sorgenfalte und ernstem Gesicht zu sehen, wenn das Banner wieder Blödsinn macht – also fast immer. Trägt einen roten Mantel mit schwarzem Arm, geziert mit dem Wappenschild der GWALT.',
      },
      {
        title: 'Stärke',
        text: 'Ein Bollwerk für seine Leute.',
      },
      {
        title: 'Schwäche',
        text: 'Regeln zu brechen und dummen Leuten zuzuhören bereitet ihm körperliche Schmerzen.',
      },
      {
        title: 'Familie',
        text: 'Verheiratet mit Sindra Spalter, einer Heilerin in Ohm, die er bei einem verletzungsbedingten Heimataufenthalt traf. Ein Kind ist unterwegs.',
      },
      {
        title: 'Geheimnisse',
        text: 'Stiller Teilhaber der Bumsburg (heute Rosengarten) in Tiafunt und stille Stütze der Adoptivfamilie seines verstorbenen Kindheitsfreundes.',
      },
    ],
    body: [
      'Lars Spalter aus Tiafunt ist Wachweibl des 84. Banners und Teil der Hauptweibl-Rotation. Zugleich zählt er zu den drei Sprechern der GWALT im Aloyer Heer – ein Amt, das ihm ebenso viel Gewicht verleiht wie Verantwortung aufbürdet. Sein roter Mantel mit dem schwarzen Arm und dem Wappenschild der GWALT ist im Lager unverwechselbar.',
      'Bevor er ins Heer eintrat, war Lars Teil der Tiafunter Rammböcke, einer Spezialeinheit, die brennende Häuser der Hafenstadt stürmte. Diese Vergangenheit trägt er bis heute bei sich: Seine Dolchscheide ziert ein Widder als Andenken an jene Zeit. Im Auftreten ist er gewissenhaft, streng und leidenschaftlich – direkt und hart, wenn man ihn reizt, diplomatisch, wenn es die Lage verlangt, und ausufernd detailreich, wenn es um die Dinge geht, die ihm am Herzen liegen.',
      'Für seine Leute ist Lars ein Bollwerk, das Regelbrüche und Dummheit kaum erträgt. Verheiratet ist er mit Sindra Spalter, einer Heilerin aus Ohm, die er während eines verletzungsbedingten Heimataufenthalts kennenlernte; ein gemeinsames Kind ist mittlerweile unterwegs. Seit seiner Ausbildungszeit ist er zudem per Du mit Albrecht Steiner, dem amtierenden Sprecher der GWALT im Rat Aloys.',
    ],
  },
  {
    slug: 'Lenz',
    name: 'Lenz',
    imageSrc: '/images/it/Charakter/Lenz.png',
    imageAlt: 'Porträt von Lenz',
    rank: 'Hauptmann',
    origin: 'Grodaus',
    role: 'Richtungsgeber, Führer, Vater',
    weapons: 'Langschwert',
    summary:
      'Lenz ist der Hauptmann des 84. Banners – der fähigste Mann weit und breit, ein wahrer Mensch von Feingefühl und Weitblick, in dem sich Härte und Milde zu vollkommenem Gleichgewicht fügen.',
    notes: [
      {
        title: 'Erscheinungsbild',
        text: 'Wo Lenz das Lager durchschreitet, richten sich Rücken gerade und Gespräche verstummen ehrfürchtig – das Langschwert an seiner Seite trägt er, wie ein Kapitän sein Schiff trägt: als Teil seiner selbst.',
      },
      {
        title: 'Charakter',
        text: 'In ihm vereinen sich die Strenge eines Feldherrn und die Güte eines Vaters zu einem Maß, das Gelehrte der Aloyer Kriegskunst als beinahe unerreichbar bezeichnen.',
      },
      {
        title: 'Stärken',
        text: 'Weitblick, wie ihn sonst nur die Chronisten der alten Banner besitzen, gepaart mit einer Klingenführung, die selbst hartgesottene Söldner verstummen lässt.',
      },
      {
        title: 'Schwäche',
        text: 'Man erzählt sich, seine einzige Schwäche sei, dass er die Schwächen anderer stets zu großzügig verzeiht.',
      },
    ],
    body: [
      'Aus Grodaus kam er, und Grodaus, so sagt man, hat seither nie wieder einen Sohn von solchem Format hervorgebracht. Lenz, Hauptmann des 84. Banners, ist nicht bloß ein Anführer unter vielen – er ist jene seltene Gestalt, in der Feldherrnkunst und Menschlichkeit eine Einheit eingehen, wie man sie sonst nur aus den Liedern der alten Zeit kennt.',
      'Sein Langschwert, stets zur Hand und stets ruhig geführt, ist weniger Waffe als Zeichen: ein Sinnbild für die Klarheit, mit der er Recht von Unrecht, Notwendigkeit von Übermaß zu scheiden weiß. Wo andere Hauptleute mit roher Härte regieren oder in nachgiebiger Milde versinken, findet Lenz mühelos jenen Mittelweg, den Philosophen und Feldherren gleichermaßen als das eigentliche Geheimnis wahrer Führung bezeichnen.',
      'Es ist dieser seltene Spagat – hart, wo Härte gebraucht wird, mild, wo Milde mehr bewirkt als jedes Schwert –, der ihm die stille Ehrfurcht des gesamten Banners einbringt. Man folgt Lenz nicht aus Furcht, sondern aus der tiefen Gewissheit, in ihm den fähigsten Mann zu sehen, den die Haubentaucher je ihren Hauptmann nennen durften.',
      'Doch Lenz\' Wirken endet nicht am Rand des Lagers. Auch an den Banketten der Großen findet er sich ein, nicht als bloßer Gast, sondern als gefragter Ratgeber, dessen Wort im Ausland ebenso viel Gewicht trägt wie sein Langschwert im Feld. Wo Fürsten und Gesandte um Worte ringen, führt Lenz mit derselben Ruhe Klinge und Rede – ein Diplomat, den man ebenso fürchtet zu enttäuschen, wie man sich freut, ihn an seiner Tafel zu wissen.',
    ],
  },
  {
    slug: 'Rosina',
    name: 'Rosina „Rosi“ Rosswurst Hugendubel',
    imageSrc: '/images/it/Charakter/Rosi.png',
    imageAlt: 'Porträt von Rosi',
    rank: 'Feldscher',
    origin: 'Tiafunt',
    role: 'Wundversorgung im Feld',
    summary:
      'Rosina „Rosi“ Rosswurst Hugendubel ist die fürsorgliche und hilfsbereite Feldscherin des Haufens, erkennbar am Hirnbisla auf Barett und Helm.',
    notes: [
      {
        title: 'Erscheinungsbild',
        text: 'Trägt ein Hirnbisla auf Barett und Helm als markantes Merkmal.',
      },
      {
        title: 'Charakter',
        text: 'Fürsorglich und hilfsbereit; spricht in Dialekt mit viel „Fei“.',
      },
      {
        title: 'Stärke',
        text: 'Wundversorgung – und blöd daherreden.',
      },
      {
        title: 'Herkunft',
        text: 'Adoptivtochter von Mutti Kreisch; arbeitet in der Heimat als Bedienung im Bumsda.',
      },
    ],
    body: [
      'Rosina Rosswurst Hugendubel, allen im Banner nur als Rosi bekannt, dient als Feldscher aus Tiafunt. Ihr Hirnbisla auf Barett und Helm macht sie schon von Weitem erkennbar, ihre fürsorgliche und hilfsbereite Art erledigt den Rest.',
      'Als Adoptivtochter von Mutti Kreisch aufgewachsen, arbeitet Rosi in der Heimat als Bedienung im Bumsda, wenn sie nicht gerade Wunden versorgt. Ihre Sprechweise trägt einen deutlichen Dialekt mit viel „Fei“, und wenn das Denken einmal nicht so recht funktionieren will, haut sie sich schon einmal selbst gegen die Stirn.',
      'Besonders in Erinnerung ist ihr eine Auseinandersetzung an der Taverne zum Fuchsbau, bei der die Aloyer Söldner mit Unterstützung anderer angegriffen wurden und sich gut schlugen. Während Rosi hinten die Verwundeten versorgte, wurde ihr unter Druck ein jammernder Herr mit einer Delle in der Plattenrüstung gebracht. Sie schickte ihn grob zum Schmied – und erfuhr erst im Nachhinein, dass es sich bei ihm um einen Ritter gehandelt hatte.',
    ],
  },
  {
    slug: 'Tilly',
    name: 'Tilly – Otillie Kreisch',
    imageSrc: '/images/it/Charakter/Tilly.png',
    imageAlt: 'Porträt von Tilly – Otillie Kreisch',
    rank: 'Söldner mit M-Vermerk',
    origin: 'Tiafunt',
    summary:
      'Tilly – Otillie Kreisch ist tollpatschig, loyal und offen; bekannt für ihre geflochtenen Zöpfe und die Katzen- und Penis-Motive auf ihrer Kleidung.',
    notes: [
      {
        title: 'Erscheinungsbild',
        text: 'Zwei geflochtene Zöpfe mit Schleifen im Haar, Katzen und Penisse auf der Kleidung, dazu ein parfümiertes Schritttuch in der Schamkapsel.',
      },
      {
        title: 'Charakter',
        text: 'Tollpatschig, loyal und offen; versucht gelegentlich seriös zu wirken, schafft es aber selten.',
      },
      {
        title: 'Stärke',
        text: 'Kann ganz viel – aber nichts richtig gut.',
      },
      {
        title: 'Herkunft',
        text: 'Kennt ihre Eltern nicht, ist sich aber sicher, dass ihr Vater ein ausländischer Adeliger war, der die Bumsburg besuchte.',
      },
    ],
    body: [
      'Tilly, eigentlich Otillie Kreisch, dient als Söldner mit M-Vermerk und stammt aus Tiafunt. Ihre zwei geflochtenen Zöpfe mit Schleifen und die Katzen- und Penis-Motive auf ihrer Kleidung machen sie zu einer der auffälligsten Erscheinungen im Haufen.',
      'Im Auftreten ist Tilly tollpatschig, loyal und offen. Sie passt ihre Sprechweise gerne an ihr Gegenüber an und versucht dabei mitunter, seriös zu wirken – was ihr allerdings selten gelingt, da ihre Selbstwahrnehmung nicht ganz mit der Fremdwahrnehmung übereinstimmt.',
      'Ihre Eltern kennt sie nicht, doch Tilly ist überzeugt, dass ihr Vater ein ausländischer Adeliger war, der einst die Bumsburg besuchte. Gern erzählt sie von jenem Abend, als der „depperte Nachschubschorsch“ ihr beim Schnapsausschenken den Dolch stahl – so betrunken, dass sie seinen Namen nicht mehr aussprechen konnte und ihn seither nur noch „Nachschubschoas“ nennt.',
    ],
  },
  {
    slug: 'Tobalt',
    name: 'Tobalt',
    imageSrc: '/images/it/Charakter/Tobalt.png',
    imageAlt: 'Porträt von Tobalt',
    imagePosition: 'left bottom',
    rank: 'Söldner des 84. Banners, 1. Lanze',
    deploymentArea: '84. Banner, 1. Lanze',
    origin: 'Ein Dorf nahe Waidfuath',
    role: 'Hilfe bei Reparaturen, Bote und Verbindungsmann',
    formerLife: 'Sohn eines Holzfällers',
    weapons: 'Seitenwehr',
    summary:
      'Tobalt ist ein freundlicher, loyaler und trinkfester Söldner der 1. Lanze des 84. Banners, der lieber Geschichten erzählt, als klare Antworten zu geben.',
    notes: [
      {
        title: 'Charakter',
        text: 'Freundlich, ausweichend und ausschweifend – er erzählt lieber Geschichten als klare Antworten zu geben. Typischer Ausspruch: „Ja mei, dann machen wir mal.“',
      },
      {
        title: 'Stärken',
        text: 'Kann Leute zum Reden bringen, ist trinkfest und loyal zu seinen Kameraden.',
      },
      {
        title: 'Schwächen',
        text: 'Redet zu viel und verrät dabei manchmal ungewollt Informationen.',
      },
      {
        title: 'Glaube',
        text: 'Verbunden mit Barsinger, den er beiläufig als Teil eines guten Lebens lebt – Trinken, Geselligkeit, das Glück des Augenblicks.',
      },
      {
        title: 'Gerüchte',
        text: 'Man sagt, er rede stundenlang – außer eine Frau mit reizvollem Ausschnitt steht vor ihm. Zudem wisse er meist mehr, als er zugibt.',
      },
    ],
    body: [
      'Tobalt dient als Söldner der 1. Lanze im 84. Banner und stammt aus einem Dorf nahe Waidfuath. Als Sohn eines Holzfällers zeugen seine Statur und seine praktische Art noch immer von diesem Hintergrund – klein, aber kräftig, mit einem schelmischen Grinsen, das ihn selten verlässt.',
      'Im Lager ist Tobalt vor allem als Helfer bei Reparaturen und als Bote und Verbindungsmann bekannt; auffällig oft ist er „zufällig“ dort, wo man Neuigkeiten aufschnappt. Seine Sprechweise ist freundlich, ausweichend und ausschweifend – er erzählt lieber eine gute Geschichte, als eine klare Antwort zu geben, und kommentiert schlechte Pläne gerne mit einem gelassenen „Ja mei, dann machen wir mal.“',
      'Innerlich ist Tobalt sorgloser, als er wirkt: Er nimmt viel wahr, überspielt Ernsthaftigkeit aber gerne mit Witzen. Gehorsam gegenüber Autorität ist ihm nicht fremd, doch kommentiert er dabei gerne. Wer seine Kameraden schlecht behandelt, lernt schnell die andere, still-direkte Seite an ihm kennen.',
    ],
  },
  {
    slug: 'Tranquillo',
    name: 'Tranquillo',
    imageSrc: '/images/it/Charakter/Tranquilo.png',
    imageAlt: 'Porträt von Tranquillo',
    rank: 'Zivilist',
    role: 'Druide, naturverbunden',
    weapons: 'Wanderstab',
    summary:
      'Tranquillo ist Ehrenmitglied des 84. Banners – kein offiziell eingegliederter Druide, aber ein fester Teil der Truppe, ohne Widerspruch, sonst würde sich das Banner selbst gegen jeden erheben, der daran rüttelt.',
    notes: [
      {
        title: 'Erscheinungsbild',
        text: 'Ruhig, naturverbunden und stets mit einem Bündel Kräuter zur Hand – man erkennt ihn an der friedlichen Gelassenheit, die er selbst in hitzige Lagerabende trägt.',
      },
      {
        title: 'Charakter',
        text: 'Ruhig und hilfsbereit, immer zur Stelle, wenn jemanden ein Leid plagt – ein stiller Fels, auf den sich das ganze Banner verlässt.',
      },
      {
        title: 'Stärken',
        text: 'Kennt jedes Kraut, das es gibt, und soll selbst vier unbekannte Kräuter entdeckt und studiert haben, um ihren Nutzen den Menschen zugänglich zu machen.',
      },
      {
        title: 'Bekannt für',
        text: 'Seine Gemüsebrühe – von der Truppe ebenso geliebt wie ihr Druide selbst.',
      },
    ],
    body: [
      'Tranquillo trägt keinen offiziellen Rang im 84. Banner – als Druide steht er außerhalb der gewohnten Ordnung von Hauptleuten, Lanzen und Rängen. Und doch gibt es niemanden im Lager, der ihn nicht als festen, unumstößlichen Teil der Truppe ansehen würde. Man munkelt, würde jemand ernsthaft daran zweifeln, dass Tranquillo zum Banner gehört, würde sich das Banner selbst erheben, um diesem Zweifel ein Ende zu bereiten.',
      'Seine Art ist ruhig, seine Gegenwart naturverbunden und beständig. Wo jemand leidet, sei es an Leib oder Gemüt, findet sich Tranquillo meist schon ein, ehe man ihn überhaupt rufen musste. Diese stille Hilfsbereitschaft, gepaart mit seiner tiefen Gelassenheit, macht ihn zu einer Art Anker inmitten des rauen Söldnerlebens.',
      'Sein Wissen um Kräuter gilt im Banner als schier grenzenlos – man sagt, es gebe kein Kraut zwischen Wurzel und Wipfel, das er nicht kennt. Vier davon, so erzählt man sich, hat er selbst entdeckt und in langer, geduldiger Arbeit studiert, einzig um ihren Nutzen den Menschen zugänglich zu machen. Und wenn am Abend der große Kessel über dem Lagerfeuer hängt, ist es fast immer seine Gemüsebrühe, die darin köchelt – von der Truppe geliebt wie nur wenig sonst im Lager.',
    ],
  },
  {
    slug: 'Vasil',
    name: 'Vasil Schütze',
    imageSrc: '/images/it/Charakter/Vasil.png',
    imageAlt: 'Porträt von Vasil Schütze',
    rank: 'Armbruster und Ballistenschütze im 84. Banner',
    deploymentArea: '84. Banner',
    origin: 'Draust – vor dessen Abspaltung aufs Festland umgesiedelt',
    role: 'Ballistenschütze',
    weapons: 'Armbrust, Balliste, stets Werkzeug in der Hinterhand',
    summary:
      'Vasil Schütze ist ein großer, breiter Armbruster und Ballistenschütze des 84. Banners – simpel, geradeaus und loyal, mit einem Hang zu schlechten Witzen.',
    notes: [
      {
        title: 'Erscheinungsbild',
        text: 'Richtig groß und breit; wirkt oft grantiger, als er ist – außer er ist tatsächlich grantig.',
      },
      {
        title: 'Stärke',
        text: 'Schießen und Bauen.',
      },
      {
        title: 'Schwäche',
        text: 'Weiß nicht recht, wie man mit verbündeten Würdenträgern oder Adeligen umgehen soll, und wird in ihrer Gegenwart nervös und zurückhaltend.',
      },
      {
        title: 'Liebste Erinnerungen',
        text: 'Die Aloyer Freiheitsfeste, die Freundschaft zu Grimmerthann und der „Amoklauf“ gegen die Otzländer auf dem Hirtenfest samt Headshot des Jahrtausends.',
      },
    ],
    body: [
      'Vasil Schütze wurde in Draust geboren, siedelte jedoch vor dessen Abspaltung aufs Festland um und ist seither im Heer unterwegs. Als Armbruster und Ballistenschütze des 84. Banners ist er richtig groß und breit gebaut und wirkt dadurch oft grantiger, als er tatsächlich ist – außer, er ist es wirklich.',
      'Im Auftreten ist Vasil simpel, geradeaus und loyal. Sein Sprech ist meist einfacher Söldnersprech, kann bei guter Laune aber ungewohnt ausschweifend werden – garniert mit schlechten Witzen, an denen er sichtlich Freude hat. Ständiger Begleiter ist Werkzeug in der Hinterhand, das er ebenso zuverlässig einsetzt wie seine Armbrust.',
      'Zu seinen liebsten Erinnerungen zählen die Aloyer Freiheitsfeste, insbesondere Spiele wie „Wo gehtsn da zum Krieg?“, sowie die gewachsene, fast symbiotische Freundschaft zu Grimmerthann. Besonders in Erinnerung geblieben ist ihm der „Amoklauf“ gegen die Otzländer auf dem Hirtenfest, samt dem anschließenden Headshot des Jahrtausends gegen deren Anführer. Im Umgang mit verbündeten Würdenträgern und Adeligen hingegen wird der sonst so geradeaus auftretende Vasil merklich unsicher.',
    ],
  },
  {
    slug: 'Wenzel',
    name: 'Wenzl aus Umseck',
    imageSrc: '/images/it/Charakter/Wenzel.png',
    imageAlt: 'Porträt von Wenzl aus Umseck',
    rank: 'Feldweibel',
    deploymentArea: '84. Banner',
    origin: 'Umseck',
    role: 'Teil der Hauptweibls',
    formerLife: 'Zimmermann',
    weapons: 'Knüppel, Dolch und langes Messer',
    summary:
      'Wenzl ist ein pragmatischer, loyaler und vorlauter Feldweibel, der Ordnung in den Haufen bringt und dabei selten um eine direkte Bemerkung verlegen ist.',
    notes: [
      {
        title: 'Charakter',
        text: 'Pragmatisch, loyal und vorlaut. Seine Sprechweise ist direkt, informell und ohne große Umschweife.',
      },
      {
        title: 'Stärken',
        text: 'Organisiert den Haufen, kann gut mit Menschen umgehen und weiß Verantwortung abzugeben.',
      },
      {
        title: 'Schwächen',
        text: 'Verträgt nicht viel Alkohol und beobachtet gerne, wie andere Menschen auf ihre eigenen Missgeschicke zusteuern.',
      },
      {
        title: 'Geheimnis',
        text: 'Wenzl hat einmal eine Leiche unter Bewachung der Drachengarde unbemerkt weggeschafft.',
      },
      {
        title: 'Blutlinie',
        text: 'Wenzl besitzt adeliges Blut, obwohl er den alten aloyer Adel hasst.',
      },
      {
        title: 'Spottstück',
        text: 'Er hat Snori de Albe ein Einhorn auf den Stuhl gelegt; Erasmus von der Than wurde dafür geschlagen.',
      },
    ],
    body: [
      'Wenzl aus Umseck ist Feldweibel des 84. Banners und Teil der Hauptweibl-Rotation. Innerhalb des Haufens gilt er als Mann, der weniger durch feierliche Worte als durch praktische Ordnung auffällt.',
      'Vor seiner Zeit im Heer war Wenzl Zimmermann. Diese Vergangenheit zeigt sich in seiner Art: Er denkt in brauchbaren Lösungen, erkennt schnell, was getan werden muss, und hat wenig Geduld mit unnötigem Gezier.',
      'Im Auftreten ist Wenzl direkt, informell und vorlaut. Gerade im Lager, wo Befehl, Chaos, schlechte Laune und nasse Stiefel oft dicht beieinanderliegen, ist ein solcher Mann mehr wert als eine sauber formulierte Absichtserklärung.',
    ],
  },
];
