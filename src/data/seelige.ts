import type { SeeligeBeadItem } from '@components/SeeligeBeadSlider.astro';

/*
  Das Seelige Pantheon – echte Einträge für den Perlenschnur-Slider
  (SeeligeBeadSlider). Jeder Eintrag entspricht einer Perle in der Kette.

  Felder:
  - id:      eindeutiger, URL-sicherer Kurzname (kleingeschrieben,
             Bindestriche statt Leerzeichen). Wird intern zum Zuordnen von
             Perle <-> Inhalt genutzt, taucht nirgends sichtbar auf.
  - name:    voller Name des/der Seeligen. Der erste Buchstabe von "name"
             erscheint automatisch auf der Perle selbst, daher lohnt es
             sich, hier mit dem tatsächlichen Namen zu beginnen und nicht
             mit einem Titel/Artikel wie "Der/Die ...".
  - epithet: kurzer Beiname/Titel, erscheint kursiv direkt unter dem Namen
             (optional).
  - sphere:  welchem der drei Hauptgötter (Drey) der/die Seelige
             zugeordnet ist: 'Limba' | 'Miram' | 'Hortum'. Wird als Text
             angezeigt UND sorgt automatisch dafür, dass im Inhaltsbereich
             (nicht auf der Perle) das Siegel des jeweiligen Hauptgottes
             mit eingeblendet wird (Zuordnung passiert in
             SeeligeBeadSlider.astro über deitySymbols).
  - text:    der eigentliche Beschreibungstext, erscheint im Inhaltsblock
             unter der Perlenkette.
  - quote:   optional – ein Spruch/Zitat (z. B. ein Weihespruch), wird als
             ItQuoteBlock unter dem Text angezeigt. variant: 'quote'
             (Standard), 'poem' oder 'flanked'.

  Neuen Seeligen hinzufügen: einfach diesen Block kopieren und ausfüllen.
*/
/*
  Reihenfolge der Einträge (= Reihenfolge der Perlen in der Kette):
  zuerst alle Kinder Limbas, dann alle Kinder Mirams, dann alle Kinder
  Hortums; Seelige mit zwei Elternteilen stehen am Ende der Liste.
*/
export const seelige: SeeligeBeadItem[] = [
  {
    id: 'rogon',
    name: 'Rogon',
    epithet: 'der Handwerker und Bauer',
    sphere: 'Limba',
    text: 'Rogon, ein Kind Limbars, ist der Heilige des Handwerks, der Kunst und des praktischen Fortschritts. Er lehrte die Menschen, aus einfachen Elementen neue Dinge zu schaffen, Felder zu bestellen und Häuser zu bauen, und steht in enger Verbindung zum Zunftwesen. Seine sterblichen Kinder sollen den Menschen einzelne Fähigkeiten gelehrt haben; ihre Seelen kehren nach dem Tod in neue Körper zurück, wodurch über Generationen hinweg herausragende Handwerker entstehen. Diese Vorstellung erklärt religiös Meisterschaft im Handwerk, Berufstraditionen, Zunftheilige und den hohen Stellenwert praktischer Bildung in Aloy. Rogon ist besonders wichtig für Bauern, Handwerker, Zünfte, Baumeister, Künstler sowie Lehrlinge, Gesellen und Meister.',
  },

  {
    id: 'pelaga',
    name: 'Pelaga',
    epithet: 'die Stürmische',
    sphere: 'Limba',
    text: 'Pelaga, eine Tochter Limbars, bestimmt den Lauf des Wetters, besänftigt Meere und Gezeiten und sichert durch den Wasserkreislauf das Überleben von Pflanzen, Tieren und Menschen. Sie ist launenhaft wie das Wasser: friedlich wie ein Bach, aufbrausend wie Stromschnellen, gefährlich wie die tobende See. Fischer, Seefahrer, die Bewohner von Hafenstädten wie Tiafunt sowie Bauern, die auf Regen und fruchtbare Böden angewiesen sind, rufen sie ebenso an wie Reisende über Wasser. Ihr Zorn äußert sich in Regen, Dürre, Gewittern, Wolkenmassen, Blitz und Donner.',
  },

  {
    id: 'oblectatia',
    name: 'Oblectatia',
    epithet: 'die Sinnliche',
    sphere: 'Limba',
    text: 'Oblectatia ist die Heilige der Liebe, Lust, Fruchtbarkeit und Ekstase – Tochter Limbars und einer Sterblichen, also ein Kind göttlicher Schöpferkraft und sterblicher Schönheit. Sie wird bei Festen, Feiern und Kinderwunsch angerufen, und manche Alchemisten arbeiten in ihrem Dienst oder berufen sich auf sie, insbesondere bei Mitteln, deren Wirkung auf Liebe, Fruchtbarkeit oder Sinnlichkeit abzielt. Sie ist bedeutsam für Fruchtbarkeit, Liebesbeziehungen, Hochzeiten und Feste, körperliche Freude und die ausgelassene aloyer Feierkultur.',
  },

  {
    id: 'barsinger',
    name: 'Barsinger',
    epithet: 'der Spielmann',
    sphere: 'Limba',
    text: 'Barsinger, ein Sohn Limbars, ist ein geselliger Heiliger, der die Welt mit Musik, Spielen und Trinkgenüssen beschenkt. Musiker, Spielmänner, Gaukler, Abenteurer und das fahrende Volk legen ihr Glück in seine Hände; man erkennt ihn an seinem heiteren Gemüt und einer Flöte, mit der er Herzen zum Singen bringt. Er ist wichtig für Tavernen, Gelage, Musik, Würfelspiel, Schausteller, Abenteurer und Söldner auf Wanderschaft und prägt stark die aloyer Fest- und Tavernenkultur – der Ausruf „Barsinger!“ gilt als allgemeiner aloyer Trinkspruch. Der Legende nach hat Barsinger selbst die aloyer Freiheitserklärung unterschrieben, weshalb es als gute Sitte gilt, in Wirtshäusern auf sie zu trinken.',
  },

  {
    id: 'ultima',
    name: 'Ultima',
    epithet: 'die Gerechte',
    sphere: 'Miram',
    text: 'Ultima vereint Gerechtigkeit, Urteil und Vergeltung und gilt bereinigt als Heilige der gerechten Wiederherstellung: Sie straft Ungerechte und hilft jenen, denen Unrecht widerfahren ist. Vor ihren Tempeln, Schreinen und Statuen darf nur die Wahrheit gesprochen werden – Lügen an solchen Orten ziehen ihre Missgunst nach sich. Sie ist Schutzpatronin der Wächter, der Rechtsprechung, der Wahrheitssuche und des gerechten Urteils, insbesondere dort, wo staatliches oder menschliches Recht versagt. In manchen Erzählungen erscheint sie zudem als Verkörperung von Mirams gerechtem Zorn und gewährt ihren Günstlingen auf mythische Weise Hilfe, etwa durch Flüche oder wundersame Verwandlungen.',
  },

  {
    id: 'carphon',
    name: 'Carphon',
    epithet: 'der Wissende',
    sphere: 'Miram',
    text: 'Carphon ist Patron der Wissenschaften, der Alchemie und aller Gelehrten; seine Aufgabe ist es, den Sterblichen die Augen für die Erkenntnisse der Welt zu öffnen, Limbars göttlichen Funken verständlich zu machen und Wissen zu verbreiten. Zugleich steht er für verantwortungsvolle Forschung und erinnert daran, dass Wissen begrenzt ist und Forschung Demut braucht. Er gilt als neugieriger, aufgeschlossener und menschenfreundlicher Vermittler zwischen den allwissenden Göttern und den Sterblichen und soll menschliche Gestalt annehmen können, um zu inspirieren, zu mahnen oder von selbstsüchtigem Tun abzubringen. Carphon ist bedeutsam für Wissenschaft und Magie, Alchemie, Rhetorik, Philosophie, Geschichte und Staatskunde, für Gelehrte und die Akademie – im „Pfad der 3“ wird als Beispiel für ein Zweitstudium ausdrücklich ein Carphon-Geweihter genannt.',
  },

  {
    id: 'oleas',
    name: 'Oleas',
    epithet: 'der Händler',
    sphere: 'Miram',
    text: 'Oleas, ein Kind Mirams beziehungsweise von ihr geprägt, steht für die Umverteilung von Gütern durch Handel – wie Miram mit Ausgleich und Bewegung verbunden, jedoch im materiellen Sinn. Er handelt mit allem Erdenklichen und kennt dabei kaum moralische Schranken; seine einzige Grenze ist das Gesetz des gerechten Tausches, nach dem jeder Handel, so hart oder teuer er auch sein mag, im eigenen Sinne ausgeglichen sein muss. Er ist wichtig für Händler, Märkte, Handelsgilden, Tauschgeschäfte, Verträge und die wirtschaftliche Ausgleichslogik. Zu Hallech steht er in einem spannungsreichen Verhältnis: Während Oleas den fairen Tausch betont, verschieben Diebe und Schlitzohren im Namen Hallechs Besitz oft gerade, ohne einen solchen Handel einzugehen.',
  },

  {
    id: 'hallech',
    name: 'Hallech',
    epithet: 'der lügende Schelm',
    sphere: 'Miram',
    text: 'Hallech, ein Kind Mirams, treibt ihren Wandel-Aspekt auf die Spitze: Sein Ziel scheint es zu sein, bestehende Strukturen aufzubrechen und durch bessere zu ersetzen. Er ist anpassungsfähig und schwer fassbar und wird von sehr unterschiedlichen Menschen aus sehr unterschiedlichen Gründen angerufen – von Reisenden vor dem Aufbruch, von Dieben vor riskanten Streichen, von Menschen, die verlorenen Besitz zurückerlangen wollen, von Gelehrten, die Wandel und Systembruch erforschen, und von jenen, die ungerechte Strukturen umstoßen wollen. Anders als Ultima steht er nicht für klassische Gerechtigkeit und anders als Oleas nicht für fairen Handel, sondern für Bewegung, List, Korrektur durch Unordnung und Veränderung durch Regelbruch.',
  },

  {
    id: 'asar',
    name: 'Asar',
    epithet: 'der Hexer',
    sphere: 'Miram',
    text: 'Asar erscheint in der dörflichen Kurzfassung als Heiliger der Zauberei und Magie. Anders als Limbar oder Carphon ist er in den Quellen kaum ausgearbeitet – seine Abstammung und genauere Zuständigkeit gelten als nur knapp belegt und bedürfen weiterer Ausarbeitung.',
  },

  {
    id: 'sania',
    name: 'Sania',
    epithet: 'die Blutige',
    sphere: 'Hortum',
    text: 'Sania ist eine der beiden Töchter Hortums. Ihre Aufgabe ist es, die Seelen jener zu holen, deren Leben gewaltsam endet. Sie ist vor allem mit Schlachtfeldern, Blutopfern und Kriegerbrauch verbunden. Unter aloyer Kriegsleuten ist es Brauch, erschlagene Gegner Sania zu weihen, damit sie deren Blut anstelle des eigenen nehme. Der bekannte Weihespruch lautet sinngemäß:',
     quote: {
       text: 'Sania, ich weihe dir diesen Körper; nimm sein Blut statt meines.',
       source: '',
    },
  },

  {
    id: 'favilla',
    name: 'Favilla',
    epithet: 'die Totengräberin',
    sphere: 'Hortum',
    text: 'Sania ist eine der beiden Töchter Hortums. Ihre Aufgabe ist es, die Seelen jener zu holen, deren Leben gewaltsam endet. Sie ist vor allem mit Schlachtfeldern, Blutopfern und Kriegerbrauch verbunden. Unter aloyer Kriegsleuten ist es Brauch, erschlagene Gegner Sania zu weihen, damit sie deren Blut anstelle des eigenen nehme. Der bekannte Weihespruch lautet sinngemäß:',
    //  quote: {
    //    text: 'Sania, ich weihe dir diesen Körper; nimm sein Blut statt meines.',
    //    source: '',
    // },
  },

  {
    id: 'halma',
    name: 'Halma',
    epithet: 'das Herdfeuer',
    sphere: 'Hortum',
    text: 'Halma, aus Limbar und Hortum hervorgegangen, ist der Heilige des Heims, des Feuers und der Alchemie. Sie spendet Wärme und Licht, kann aber auch Hab, Gut und Leben nehmen, wenn sie erzürnt wird oder Menschen achtlos mit Feuer umgehen – Feuer wärmt und schützt vor Kälte, ermöglicht Handwerk und Alchemie, kann aber ebenso Häuser, Vorräte und Leben zerstören. Damit fügt sich Halma in die aloyer Grundlogik des Gleichgewichts: Jede Gabe hat eine Schattenseite. Sie ist relevant für Haushalte, Köche und Wirte, Alchemisten, Handwerker mit Feuerbezug, Brandschutz sowie den Umgang mit Winter und Kälte.',
  },

  {
    id: 'sethos',
    name: 'Sethos',
    epithet: 'der Zerstörer',
    sphere: 'Hortum',
    text: 'Sethos, ein Sohn Hortums, ist eine dunkle Gestalt der aloyer Götterwelt und gilt als religiöser Gegenspieler sowie Ursprung dämonischer Bedrohungen. Ursprünglich sollte er korrumpierte Seelen jagen, die Hortum entkommen waren, und sie in die Unterwelt zerren; nach Jahrhunderten der Jagd begann er jedoch, diese Wesen zu studieren und für vollkommener als das fleischgebundene Leben zu halten. Er erschuf den Dämonenhort, sammelt dort korrumpierte Seelen und dämonische Wesen und gilt seitdem als Auslöser des göttlichen Kampfes um die Seelen der Sterblichen. Die aloyer Malefizordnung verbindet schwere Zauberei mit der Abkehr vom Glauben der Drei und einem Bündnis mit Sethos; wer den Glauben der Drei verleugnet, mit ihm Umgang hat, Zauberei treibt und Menschen oder Vieh schädigt, fällt unter schwerste religiös-rechtliche Vergehen.',
  },

  {
    id: 'tsund',
    name: 'Tsund',
    epithet: 'Heilung und Genesung',
    sphere: 'Miram & Hortum',
    text: 'Tsund ist ein Kind Mirams und Hortums und steht für Heilung, Linderung von Leid und das Hinauszögern eines zu frühen Todes – nicht für dessen vollständige Aufhebung. Er wird bei Krankheiten, schweren Wunden, Wundfieber, in Feldlazaretten und Spitälern angerufen und begleitet Sterbende, wenn Heilung nicht mehr möglich ist. Jeder Ort der Heilung gilt als sein Tempel; kann eine Krankheit nicht aufgehalten werden, lindert Tsund das Leiden und übergibt die Verstorbenen schließlich Favilla. Er entsteht aus Mirams Mitleid mit den Leidenden und Hortums Pflicht, die Toten aufzunehmen, und verkörpert so den Ausgleich zwischen natürlichem Tod und menschlichem Leid.',
  },

  {
    id: 'fulgor',
    name: 'Fulgor',
    epithet: 'der Durchscheinende',
    sphere: 'Hortum',
    text: 'Fulgor, ein Kind Mirams und Hortums, ist der Sphärenwandler: nicht an Zeit und Raum gebunden, wandelt er zwischen Sphären und Welten, ist gestaltlos oder schwer fassbar und bleibt den Lebenden meist verborgen. Er schenkt Intuition, Menschenkenntnis, spontane richtige Entscheidungen, Improvisationsfähigkeit und ein Gespür für Täuschung – ein bekannter Ausruf an Marktständen lautet sinngemäß: „In Fulgors Namen, wolltest du mich über den Tisch ziehen?“ Zudem hilft er wandernden Seelen beim Übergang und unterstützt damit sowohl Mirams Ausgleich als auch Hortums Totenordnung.',
  },
];
