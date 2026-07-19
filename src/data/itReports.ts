export interface ItReportEntry {
  id: string;
  year: string;
  type: 'Originalbericht' | 'Originalmeldung' | 'Originalausschreibung' | 'Bestätigte Kurzmeldung';
  title: string;
  originalLabel?: string;
  original?: string;
  facts?: string[];
}

export const itReportEntries: ItReportEntry[] = [
  {
    id: 'aloy-grenzsituation-alfalter',
    year: '121 n.B.A.',
    type: 'Originalbericht',
    title: 'Offizieller Bericht zur Aloyer Grenzsituation nach Alfalter',
    originalLabel: 'Originalbericht vollständig lesen',
    original: `Offizieller Bericht zur Aloyer Grenzsituation nach Alfalter

Alfalter gliedert sich in mehrere verfeindete Stadtstaaten. Grundsätzlich geht von diesen Gruppierungen keine Gefahr für Aloy aus, dennoch sind diese auch nicht positiv gegenüber ausländischen Gruppier eingestellt. So möchte der direkt an Aloy angrenzende Stadtstaat Groß Heigold Wegzölle für Reisen durch ihr Gebiet. Aloy hat kein Interesse daran diese Zölle zu bezahlen, da der Stadtstaat dieses Geld vollständig in den Aufbau seiner militärische Kräfte stecken möchte.

Groß Heigold befindet sich mit dem nördlich liegenden Stadtstaat Ignimark und dem östlich liegenden Stadtstaat Wenarsweid im Zwist. Vor allem Wenarsweid ist Groß Heigold ein Dorn im Auge, da diese einen Zugang zum Meer haben.

Groß Heigold fordert die Wegzölle mithilfe ihrer Wachtruppen ein, welche scheinbar willkürlich Reisende zur Kasse bitten. Diese patrouillieren auf den Landesstraßen - wie sie die viel benutzen Feldwege bezeichnen - oft in der Nähe von Ortschaften. Kann der Wegzoll nicht bezahlt werden greifen sie schnell zur Waffe und rauben einen im besten Fall nur aus.

Für Reisen nach Drachengard wird empfohlen den Seeweg zu nutzen. Bei einer Reise durch Alfalter ist bekannt, dass der erste mögliche Zugang zu Drachengard Nord-Westlich nach dem Ohmer Tor liegt.

Späherberichte lieferten die gezeigte Karte, das Tor nach Drachengard konnte hierbei nicht erreicht werden.

Das erste Dorf Fahrenzhausen, nach der Brücke südlich gelegen, ist Aloyern freundlich gesinnt und erhofft sich auf eine baldige Lockerung der Beziehungen zwischen Aloy und Groß Heigold, da so auch sie von Handelsbeziehungen profitieren könnten.

Weiter westlich befindet sich ein größerer See, dessen Quellen entspringen in einer unüberwindbaren Bergkette, welche den direkten Weg nach Drachengard versperrt.

Verschlüsselung: MARSCHBEFEHL

Das Dorf Cadolzberg ist treu seinem Stadtstaat gegenüber und sollte von Aloyern gemieden werden, da die Patrouillen hier viel Gold von Reisenden verlangen. Die Straße zwischen Cadolzberg und der Brücke wird von kleineren Truppen regelmäßig patroulliert.`,
  },
  {
    id: 'spaehbericht-heiner',
    year: '121 n.B.A.',
    type: 'Originalbericht',
    title: 'Bericht des Aloyer Spähers „Heiner“',
    originalLabel: 'Originalbericht vollständig lesen',
    original: `Bericht des Aloyer Spähers “Heiner”

Tag 1:

Gleich nachdem ich das wuchtige Tor Ohms und dessen schützenden Mauern verließ, begab ich mich auf einen alten Feldweg, der Gen Osten Richtung Berge und landeinwärts führt. Nach etwa einem langen Tag Marsch erreichte ich eine kleine steinerne Brücke, die über einen größeren Fluß führte. An dieser Stelle war der Fluß etwas schmäler, was ein perfekter Platz für diese Brücke darstellt. Hier verweilte ich kurz, um mich etwas genauer Umzusehen. Ich befand mich in einem sehr weiten Tal, das umrandet von Bergketten war. Hinter mir konnte ich noch die Berge erkennen, hinter denen sich mein geliebtes Aloy verschanzte. Das Tor Ohms konnte ich allerdings hinter dem Wald nicht erkennen, was mich sehr erleichterte - da Feinde es ebenfalls schwer hatten, es dann zu erspähen. Den Fluß hinab konnte ich in weiter Ferne das Meer erkennen. Etwa zwei bis drei Tagesmärsche würde der Weg an die Küste dauern. Auf halber Strecke erblickte ich etwas was wie ein größeres befestigtes Lager aussah. Mit einigen Rauchsäulen schien es sich nicht verstecken zu wollen. Ich erkannte die Warnung und widmete mich wieder der Route, die ich ursprünglich geplant hatte - gen Norden zwischen den Bergketten entlang.

Auf Höhe der Flussgabelung suchte ich abseits des Weges einen Lagerplatz für die Nacht.

Tag 2:

Im Morgengrauen marschierte ich weiter auf dem Weg nach Norden.

Weg.von.Ohm.bis.Dorf.keine.Patrouillen

WZSMVB,MJH.MOOUMTBTG.TPKIZGWHGTVSOZPUA

Am Abend erreichte ich ein kleines Dörfchen namens “Tröstau”, das nur aus ein paar Hütten und einem Wirtshaus bestand. Hier verbrachte ich eine Nacht für wenig Kupfer und einem kargen Mahl. Die Dorfbewohner konnten als griesgrämig bezeichnet werden, waren allerdings offen für Gespräche und mir als Reisenden nicht feindlich gesinnt. Proviant konnte ich hier auch über den Wirt erwerben.

Tag 3:

Ich machte mich weiter auf gen Norden, wo sich eine ähnliche Ortschaft verbergen soll, die etwa eine Tagesreise entfernt sei. Der Weg sei allerdings etwas beschwerlicher. Trotzdem seien die beiden Ortschaften in regen Austausch. Was das genau bedeutet, konnte mir niemand genauer beschreiben.

Keine.Patrouillen.bis.Langerringen.Weg.beschwerlich

EZWSUQOBQEH,CUZFIQKKPQZBI,PYNO,IUAGOU,GCUFLJWZTPCXV

Mein Tagesmarsch bestätigt diese Aussagen. Am späten Abend erreichte ich das besagte Dorf “Langerringen”. Auch hier fand ich das Wirtshaus schnell, allerdings war es weitaus besser besucht. Da aufgrund meiner späten Anreise schon viel Bier geflossen war, zeigten sich die Gäste sehr redselig.

Einen Tagesmarsch südlich über den Fluss befindet sich Groß Heigold, das Herz des gleichnamigen Stadtstaates, das hier alles beherrscht. Täglich machen hier Krieger Heigolds Rast und treiben Gold und Silber ein, holen sich einen “Zehnt” von den Dorfbewohnern Langerringens oder sehen nach dem Rechten. Zufrieden sei niemand mit denen. Mir wurde geraten, denen aus dem Weg zu gehen, wenn mir meine Haut lieb sei.

Tag 4:

Noch vor dem Morgengrauen machte ich mich auf den Weg, um keinesfalls einer der Krieger in die Hände zu fallen. Ich ging nach Westen und überquerte den Fluß erst dort. Etwas weiter nördlich befand sich ein weiteres Dorf namens “Pfatter”, das ich auskundschaften wollte. Den Dreien sei Dank, ich war vorsichtig genug nicht einfach in das Dorf hinein zu spazieren. Der Hauptplatz war gefüllt mit bewaffneten Kriegern, die sich anscheinend einige Fässer Bier aus der Dorftaverne angeeignet hatten und gröhlend nördlich aus dem Dorf marschierten. Ich schlug mich in den nahen Wald und folgte ihnen unbemerkt.

Noerdlich.Pfatter.Feind.Lager.Viele.Krieger

IBPYTUWDBQOGHGMFNQQFCANMFVSFNQBKUUPMEEWFAZT

Hier vorbeizukommen war kaum möglich, und ich hatte bereits genügend Informationen, die schleunigst nach Aloy zurück sollten. Ich machte nun einen großen Bogen nach Westen.

Bei.Quelle.Pass.nach.Westen.Richtung.Drachengard

OZWMLIPPFZGWHFUMIVLJ.KPZQZ,MNOLJQI,I.YTBRHPSAVTE

Tag 5:

Mein Weg gen Süden und zurück Richtung Aloy führte durch ein immer schmäler werdendes Tal, zu dessen Beginn ich eine kleine Ortschaft erblickte.

Dorf nicht gut gesinnt, wurde auf meinen Dialekt angesprochen, Leute zornig, verschwinde.

Leute verfolgen mich. Versuche Schriftstück zu verstecken, bevor sie mich haben. Möge Hortum mir gnädig sein.

Schlüssel: Hortum`,
  },
  {
    id: 'freiheitsfest-122',
    year: '122 n.B.A.',
    type: 'Originalausschreibung',
    title: 'Aloyer Freiheitsfest',
    originalLabel: 'Originalausschreibung, IT-Teil lesen',
    original: `Wie jedes Jahr feiert ganz Aloy die Gründung der Republik und die Gleichstellung aller Aloyer. Nach altem Brauch wird dieses Fest mit Freunden und Bekannten gefeiert. Die gesamte Bevölkerung ist in Feierlaune und im ganzen Land werden Feste im Großen und Kleinen veranstaltet. So lädt auch das 84. Banner im Jahr 122 n.B.A. ein.

Hauptmann Lenz hat Nachricht in die ganzen Splitterlande entsandt und Verbündete und Freunde eingeladen das Ambiente zwischen Marktständen, Schänken und Spiel zu genießen.

Zur Feier des Tages werden traditionelle Wettkämpfe ausgerichtet, in denen in verschiedene Disziplinen wichtige geschichtliche Ereignisse der Republik nachgestellt werden.

Im Zeichen der Gleichstellung ist jeder aufgefordert sich zu beweisen und schlussendlich den Ruhm zu erringen den Hut der Freiheit zu beanspruchen.

Wer wird siegreich hervorgehen und der neue ehrenvolle Träger des Hutes werden?`,
  },
  {
    id: 'heinrichsfest-122',
    year: '122 n.B.A.',
    type: 'Originalbericht',
    title: 'Danksagung des 84. Banners nach dem Heinrichsfest',
    originalLabel: 'Originale Danksagung vollständig lesen',
    original: `Wir, das 84. Banner Aloys, möchten uns auch ganz herzlich bei der Orga bedanken, die ein so phantastisches Heinrichsfest auf die Beine gestellt hat, für so viel Plot und ein so mannigfaltiges Angebot an allen möglichen Eindrücken. Ihr seid die Besten! Außerdem geht natürlich ein großen Dankeschön an alle Gruppen und Chars mit denen wir Spielen durften.

Im besonderen (aber natürlich nicht ausschließlich) ein Danke an

die Priesterin für viele witzige Gespräche und dass du uns den Ahnen näher gebracht hast

Neu-Boffeld für die alte Freundschaft und die Geschenke (ihr seid Wahnsinnige). Wir lieben euch, aber den Schnaps von eurem Ritter könnt ihr behalten

Komarn, die gefühlt bei uns gewohnt haben und uns in ihre Liederkunde einblicken ließen und eure Herrin, die uns einfach nicht hat schlafen lassen

den Greifen-Orden für den Met, das Holz und eure Geschichten am Lagerfeuer. Ihr habt uns die Zeit im wahrsten Sinne versüßt

Akkadien, die uns gemeines Volk einen Blick in die Welt des Hochadels gewährt habt, auch wenn wir den Schinken schuldig geblieben sind

die wahnsinnigen Imperiums-Knechte für ein geradezu unheimlich geiles Charakterspiel

die Vires Elementa und bitte meldet euch, da wir euch noch ein Dokument schuldig sind

die Devotionalienhändler, für die täglichen Sprüche und das schöne Spiel mit euch! Leider konnte der Händler ja Elsas Herz nicht erobern, sie hat sich aber sehr über die Minne gefreut

alle die Gruppen, welche unserem Weibel so bereitwillig ihren Wein gegeben haben

das gute Drachengard, dass uns ein wunderbares Spiel ermöglicht hat

Leider war es uns nicht möglich, mit noch mehr von euch tollen Gruppen ins Spiel zu kommen und eure interessanten Länder besser kennen zu lernen. Das wollen wir auf kommenden Festen kräftig nachholen (wir bringen auch Met)!

PS: Erasmus, du schuldest uns noch Sold!!!`,
  },
  {
    id: 'diplomatischer-besuch-123',
    year: '123 n.B.A.',
    type: 'Originalmeldung',
    title: '84. Banner auf diplomatischem Besuch am drachengarder Heinrichsfest',
    originalLabel: 'Originalmeldung aus dem Aloyer Boten lesen',
    original: `Unter Hauptmann Lenz zieht das 84. Aloyer Banner erneut nach Drachengard auf das alljährliche Heinrichsfest. Ziel der Unternehmung ist es die diplomatischen Beziehungen zu unseren Nachbarn in den Splitterlanden zu verbessern. Des Weiteren sollen neue Handerouten für die Handels- und Handwerksgilden ermöglicht werden. Neben politischen Verhandlungen dient das Banner auch dem Ruf und Ansehen der Aloyer Räterepublik. So soll die Kampfkraft und Disziplin der Aloyer Soldaten zur Schau gestellt und gegen Kupfer und Silber an andere verliehen werden. Die Reiseberichte des Banners werden mit Spannung von der Redaktion erwartet.`,
  },
  {
    id: 'kronenfieber-beendet-123',
    year: '123 n.B.A.',
    type: 'Originalmeldung',
    title: 'Kronenfieber-Maßnahmen offiziell beendet',
    originalLabel: 'Originalmeldung aus dem Aloyer Boten lesen',
    original: `Der Aloyer Rat gibt bekannt, dass die Maßnahmen zur Eindämmung des Kronenfiebers offiziell beendet sind. Es sind keine weiteren Schutzmaßnahmen notwendig, das Tragen von Masken in Postkutschen ist nun auch nicht mehr notwendig. Damit ist nun auch die letzte Maßnahme aufgehoben. Die Maßnahmen der Ausgangsbeschränkung wurden bereits im Vorjahr vollständig aufgehoben. Fieberüberprüfungen sind auch nicht mehr notwendig.`,
  },
  {
    id: 'flottenverband-piraten-123',
    year: '123 n.B.A.',
    type: 'Originalmeldung',
    title: '3. Aloyer Flottenverband macht Feiertagsgeschenk',
    originalLabel: 'Originalmeldung aus dem Aloyer Boten lesen',
    original: `Der 3. Aloyer Flottenverband hat einen wichtigen Sieg gegen die Piraten im Tiafunter Meer erringen können. Mit Beginn des Kronenfiebers war der Handel mit anderen Ländern bereits stark erschwert. Hinzu kam die Bedrohung einer kleinen, aber nicht zu unterschätzenden Flotte von Piraten, die den Seehandel über die letzten Jahre stark erschwert hatten. Der Aloyer Rat schickte die Schiffe des 3. Aloyer Flottenverbandes, ausgerüstet mit neuester Kriegsmaschinerie, in die Gegend vor Tiafunt Richtung Alfalter Meer. Am Lewensteiner Tag konnte ein glorreicher Sieg gegen die plündernden Schiffe errungen werden. Die Flotte kam mit großer Beute zurück in den Tiafunter Hafen. Die Handelsrouten sind wieder sicherer geworden und die Handelsgilde ließ zur Feier des Tages und für das alljährliche Lewensteinerfest mehrere Fass Bier springen.`,
  },
  {
    id: 'limbarfest-123',
    year: '123 n.B.A.',
    type: 'Originalmeldung',
    title: 'Limbarfest zum Beginn des Frühlings',
    originalLabel: 'Originalmeldung aus dem Aloyer Boten lesen',
    original: `Traditionell wurde der Frühlingsbeginn mit dem Limbarfest gefeiert. Das Paar der Fruchtbarkeit wurde dieses Jahr von Hildegard aus Vormberg und Waldemar aus Schofbrück dargestellt. Das Kleid der Fruchtbarkeitsbraut war ein Hauch von Moosgrün mit Eicheln als Zierschmuck. Etwas einfallslos, da auch das Kleid im Vorjahr schon mit Eicheln verziert war. Das Gewand des Bräutigams war klassisch braun mit einem Gürtel aus Rüben. Das Paar zog mit einem großen Aufgebot durch die Straßen von Grodaus und wurde von der Bevölkerung gefeiert, als sie in die Limbargrotte gingen für das zermonielle Stelldichein. Auf dass unser Land mit Fruchtbarkeit gesegnet sei.`,
  },
  {
    id: 'waidfuather-gesetz-123',
    year: '123 n.B.A.',
    type: 'Originalmeldung',
    title: 'Waidfuather Gesetzesänderung',
    originalLabel: 'Originalmeldung aus dem Aloyer Boten lesen',
    original: `Der Waidfuather Stadtrat hat ein neues Gesetz verabschiedet. So ist es in Waidfuath und Umland verboten, an seinem Hochzeitstag den Beischlaf zu verüben, wenn man am gleichen Tag vor hat, jagen oder fischen zu gehen. Es wird gemunkelt, dass hier die Frau des Oberbürgermeisters ihre Finger im Spiel hatte, da ihr Mann zu oft den Hochzeitstag mit Freunden bei der Jagd verbracht hatte.`,
  },
  {
    id: 'nachruf-brottinger-123',
    year: '123 n.B.A.',
    type: 'Originalmeldung',
    title: 'Nachruf auf Bernd Brottinger, genannt „Der Grummlige“',
    originalLabel: 'Originalen Nachruf aus dem Aloyer Boten lesen',
    original: `Im Alter von 87 Jahren ist das langjährige Ratsmitglied Bernd Brottinger, Vertreter der Bäckerszunft, Ende Februar verstorben. Er gilt als Erfinder des Kastenbrots, was ihm viel Ansehen in Aloy und vor allem in seiner Zunft einbrachte. Über 15 Jahre diente er der Republik als Ratsherr.

Möge Hortum seiner Seele gnädig sein und möge er bald mit Limbars Hilfe zurückkehren auf diese Welt.`,
  },
  {
    id: 'schweinebraten-123',
    year: '123 n.B.A.',
    type: 'Originalmeldung',
    title: 'Die Tiafunter Schweinebraten-Affäre',
    originalLabel: 'Die drei Originalmeldungen lesen',
    original: `Nachtwache rettet Schweinebraten!

Tiafunt - Mit einem heißen Einsatz am Herd hat die Nachtwache in Tiafunt einen Schweinebraten gerettet und ein drohendes Inferno verhindert.

"Im letzten Moment gelang es den Wächtern, in den frühen Abendstunden einen Schweinebraten aus der Kochstelle eines Hauses zu bergen", teilte die GWALT mit. Bei großer Hitze sei die Soße "stark reduziert" und das Fleisch "schon sehr gar" gewesen.

Eine 79-Jährige Schuhmacherswitwe hatte den Braten vergessen, als sie sich am frühen Morgen auf den Weg in die Stadt machte. Die Wächter wurden während ihrer ersten Wachrunde auf die Rauchentwicklung aufmerksam und griffen beherzt und ohne zu Zögern ein. Durch ihren Heldenmut konnte ein verheerender Brand gerade noch verhindert werden. Pflichtbewusst wartete man bis zur Rückkehr der Hausfrau, bei der der Schreck tief saß.

Schuhmacherswitwe zeigt Diebstahl von Schweinebraten an!

Tiafunt - Zu einem Diebstahl schändlichster Art kam es kürzlich in Tiafunt. Die Schuhmacherswitwe Amalie Leistner, 79 Lenzen jung beklagte den Verlust ihres feiertäglichen Schweinebratens. Nachdem sie das beachtliche Stück vom Nacken samt Biersoße in den Ofen schob, verließ sie das Haus Richtung Markt, um Kartoffeln für die dazugehörigen Knödel zu kaufen. Als sie nur wenige Stunden später zurückkehrte, war der Schreck groß. Die Tür aufgebrochen und vom Braten keine Spur.

“Wer tut einer armen alten Witwe nur so etwas Schreckliches an?” beklagte sich die resolute alte Dame bei ihrer Anzeige und zeigte sich verwirrt. Derzeit gibt es keine heiße Spur.

Sturz ins Glück: Metzgergilde stolpert über ganze halbe Sau

Einen gar wunderlichen und doch wunderbaren Fund hat die Metzgergilde Aloys kürzlich gemacht - lag da gar eine ganze halbe Sau mitten auf dem Weg. Fundort ist laut offiziellen Berichten eine Au hinter Grodaus. Im Gespräch mit dem Boten berichtet Ludwig Knöcherlsülzer: "Es ist einfach unglaublich. Wir waren gemeinsam auf dem Weg von der letzten Sitzung zurück in unsere Lagerstätte. Plötzlich stolperte mein Kollege Kurt und lag danieder. Während wir den Trottel noch auslachten, wurde uns bewusst, wie bedeutend sein Sturz eigentlich war!"

Aufgeregt musste die angetrunkene Gruppe feststellen, das mitten auf der Straße in der Au eine ganze halbe Sau lag. Eine ganze halbe Sau! Und das in Zeiten der trockenen Sommer. Woher das tote Tier stammt, konnte bisher nicht geklärt werden. Auf Nachfrage der Redaktion war auch nicht mehr zu klären, wo sich die Sau mittlerweile befindet.`,
  },
  {
    id: 'freiheitsfest-123',
    year: '123 n.B.A.',
    type: 'Originalausschreibung',
    title: 'Aloyer Freiheitsfest',
    originalLabel: 'Originalausschreibung, IT-Teil lesen',
    original: `Vernehmet die frohe Kunde!

Das 84. Banner lädt im Jahr 123 n.B.A. zum zweiten Mal ein, gemeinsam das aloyer Freiheitsfest zu begehen.

Hauptmann Lenz hat bereits Anfang des Jahres Nachricht in die ganzen Splitterlande entsandt. Verbündete und Freunde sind eingeladen, das Ambiente zwischen Marktständen, Schänken und Spiel zu genießen. So sollen bestehende Freundschaften und diplomatische Beziehungen vertieft werden. Der Trupp garantiert und sichert den Festfrieden. Der Hauptmann hofft, so allen Splitterländlern ein schönes Fest zu bescheren. Nicht ganz uneigennützig rechnet er sich aus, so auch Abgesandte und Bürger aller Länder des Kontinents zu erreichen, mit denen Aloy noch keine Beziehungen pflegt.

Wie jedes Jahr feiert ganz Aloy im Herbst die Gründung der Republik und die Gleichstellung aller Aloyer. Nach altem Brauch wird dieses Fest mit Freunden und Bekannten gefeiert. Die gesamte Bevölkerung ist in Feierlaune und im ganzen Land werden Feste im Großen und Kleinen veranstaltet. Das 84. Banner scheut keine Kosten und Mühen, das Fest auszurichten. Das Feldlager wird geschmückt und mit Hilfe von angeworbenem fahrenden Volk mit Leben gefüllt. So hofft der Trupp, den Gästen die aloyer Geschichte mit Spielen wie “Tschuldigung, wo gehts denn da zum Krieg?” näherzubringen. Dieses Spiel, wie auch der Hochecker Schanzensturm, fanden im letzten Jahr viele begeisterte Teilnehmer.

Auch dieses Jahr werden zu den Feierlichkeiten traditionelle Wettkämpfe ausgerichtet. Um wiederholten Besuchern keinen unlauteren Vorteil zu geben, werden jedes Jahr zufällige Disziplinen aus dem reichen aloyer Kulturgut gewählt. Gäste erwartet eine bunte Mischung aus bekannten Klassikern und neuen Herausforderungen.

Der Tradition gemäß ist auch in diesem Jahr ein jeder dazu aufgefordert, sich zu beweisen und schlussendlich den Ruhm zu erringen und den Hut der Freiheit zu beanspruchen. Kenner wissen um die besonderen Vorteile, Inhaber dieser Bannertradition zu sein.

Wer wird siegreich hervorgehen und der ehrenvolle Träger des Hutes werden?`,
  },
  {
    id: 'rat-berichte-123',
    year: '123 n.B.A.',
    type: 'Bestätigte Kurzmeldung',
    title: 'Berichte vor der 526. Ratssitzung',
    facts: [
      'Aus dem Schmiedehandwerk wurde der Verlust von etwa 450 Schwertern aus den städtischen Waffenlagern Vormbergs gemeldet.',
      'Die Erzmarschallin berichtete von zwei überfallenen Materialtransporten und noch laufenden Erhebungen zum Heeresmaterial.',
      'Für die Landwirtschaft wurde infolge der Dürre eine schlechte Kornernte erwartet. Die Vertreter beider Händlergilden versicherten, mögliche Verluste ausgleichen zu können.',
      'Der Rat beschloss eine zeitweilige Senkung der Steuern auf Branntwein und Wein um ein Drittel für die Dauer des Freiheitsfestes.',
      'Die Akademie erhielt Mittel, um die Ursachen des gemeldeten Geburtenrückgangs zu untersuchen.',
    ],
  },
  {
    id: 'rat-beschluesse-123',
    year: '123 n.B.A.',
    type: 'Bestätigte Kurzmeldung',
    title: 'Weitere Beschlüsse des Rates im Jahre 123',
    facts: [
      'Der Rat erklärte Aloy im Krieg gegen die Otzlande für neutral, beschloss jedoch die Teilnahme von 40 bis 100 Soldaten an der gemeinsamen Expedition nach Ardalon.',
      'Für den südwestlichen Teil Alfalters wurde die Ausarbeitung einer Besetzung und Annexion beschlossen. Die Umsetzung blieb offen; spätere Beratungen und Beschlüsse wurden unter höchste Geheimhaltung gestellt.',
      'Nach der gewaltsamen Entleibung des ersten Bürgermeisters von Waidfuath empfahl der Rat eine Verstärkung der dortigen Wache und nahm den zweiten Bürgermeister bis zu Neuwahlen als Vertretung auf.',
      'Gegenüber Komarn bekräftigte der Rat freundschaftliche Beziehungen, lehnte jedoch sowohl ein militärisches Bündnis als auch einen bindenden Friedensvertrag ab.',
      'Die Gilde der Wächter sollte in Ohm und Tiafunt jeweils mindestens fünfzig neue Wächter vereidigen.',
    ],
  },
  {
    id: 'hirtenfest-neu-boffeld-123',
    year: '123 n.B.A.',
    type: 'Originalbericht',
    title: 'Bericht zur Teilnahme am Hirtenfest in Neu-Boffeld',
    originalLabel: 'Originalbericht vollständig lesen',
    original: `Werter Obrist Stierhammer,

anbei übersende ich dir meine Notizen zum Neu-Boffelder Hirtenfest.

Das Fest wurde einem Bündnis aus Otzlängern, Widgardern und Orks angegriffen.

Wir konnten unseren Freunden aus Neu-Boffeld und Komarn beistehen und den Feind abwehren.

Neu-Boffeld hat sich mit Segen Drachengards zum unabhängigen Land Boffeld erklärt. Baron Max ist jetzt Fürst Max v. Eisenschild.

Mit kameradschaftlichen Grüßen

Lenz aus Grodaus, Hauptmann 84. Banner, 33. Regiment`,
  },
  {
    id: 'heinrichsfest-123',
    year: '123 n.B.A.',
    type: 'Bestätigte Kurzmeldung',
    title: 'Bestätigte Vorkommnisse des Heinrichsfestes',
    facts: [
      'Das 84. Banner lagerte gemeinsam mit Neu-Boffeld und Cherubin.',
      'Eine kleine Gruppe Otzländer wurde am Splitterlandtisch abgewiesen und erklärte den anwesenden Ländern den Krieg.',
      'Die Devotionalienhändler entlohnten das Banner für Schutzdienste; eine Bedrohung konnte durch Präsenz abgeschreckt werden.',
      'Das Banner nahm an Manövern teil und vermittelte in einem Streit zwischen den Knechten des Imperiums und benachbarten Nordländern.',
      'Beim Admiralitätstisch wurde Neu-Boffeld als Führung einer nördlichen Expedition bestimmt. Aloy sagte die Teilnahme von höchstens zwei bis drei Bannern und den Landmarsch zur Einschiffung in der Windmark zu.',
      'Mit Anrühn wurden Handelsbeziehungen über einen geplanten Hafen besprochen.',
      'Vasil gewann das Einhornschießen des Ordo Carolus.',
    ],
  },
  {
    id: 'otzlande-123',
    year: '123 n.B.A.',
    type: 'Originalbericht',
    title: 'Ruhmreiche Rückkehr der Aloyer Expedition aus den Otzlanden',
    originalLabel: 'Originalbericht des 84. Banners vollständig lesen',
    original: `Merket auf liebe Leute, den uns liegt ein Bericht unsrer tapferen Söldner vor, die auszogen um die gefährlichen, unbekannten Otzlande zu erkunden.

Bericht des 84.Banners von Aloy:

Als wir nach Tagen der ermüdenden Überfahrt endlich an Land gingen, waren wir voll Tatendrang nun dieses fremde Land zu erkunden und auch endlich den vermaledeiten Schiffszwieback hinter uns zu lassen. Doch empfing uns die Otzlande mit allerlei Plackerei, denn dichtes Unterholz kratze an uns und was an ihnen nicht hängen blieb, verloren wir in den Sümpfen, die uns nicht nur feuchte Füße bescherten. Als wir aber nach einer gefühlten Ewigkeit nun das Landesinnere erblickten, war es die Anstrengungen wert. Das Land zeigte sich in seiner wahren, unberührten Schönheit voller Wälder, Flüsse und Täler, welche so manchen von uns voll Staunen innehalten ließ.

Uns wart aber keine Ruhe vergönnt, da alsbald die feigen Überfälle der Otzländer begannen, auch wenn deren klägliche Versuche uns aufzuhalten ihnen nur blutige Nasen einbrachten. Erst die Orks boten einen guten Kampf, auch wenn diese elenden Schweinenasen eine Art Alchemie oder Magie wirkten, welche uns blendete und keuchend taumeln ließ. Doch selbst mit all diese feigen Tricks konnten sie unsren Vormarsch nicht bremsen und was nicht von uns erschlagen wurde, floh panisch kopflose Hühner. So haben wir dann als bald auch die Geisel und das Raubgut zurückgefordert!

Den Raub gesühnt und das Land und deren Bewohner erforscht, traten wir die lange Heimreise an. Dies war keinen Rückzug vor dem Feinde wie so mancher Hasenfuss das vielleicht behaupten mag! Wir hatten schlicht genug vom Herumstampfen in den Wäldern und den feigen Überfällen dieser Wilden, die nicht mal davor zurück schrecken, einem auf dem Abbort mit Pfeilen zu spiken! Wegen dem zusätzlichen Gut und den Verletzten, waren wir nun aber langsamer und so blieben wir Aloyer in der Nachhut, denn scheinbar wollte man uns nicht ohne Abschied ziehen lassen. Es dauerte nicht lange, da schleuderte das Land seine Scheusale auf uns, aus jedem Loch krochen sie hervor. In großer Unterzahl und gegen gar Feuer und Gift spuckende Gegner, verkauften wir teuer unsere Haut. Wir hatten wahrlich Schwierigkeiten, standen wir doch bald bis zu den Knien in erschlagenen Feinden und deren Blut trübte uns die Sicht. Es war wahrlich verdrießliche und schier endlose Arbeit, riss doch der Ansturm nicht ab. Und so hätten wir wohl noch Tage in diesem Gemetzel gefochten, da befahl unser Hauptmann den Rückzug, „sonst wäre es für uns zu spät!"

Da merkten wir, wie lange wir schon fochten und uns wurde schrecklich bewusst, was er meinte. So eilten wir geschwindt zu den Schiffen, damit sie nicht ohne uns fuhren. Denn was für Aloyer wären wir, würden wir das Freiheitsfest verpassen?`,
  },
  {
    id: 'heinrichsfest-124',
    year: '124 n.B.A.',
    type: 'Originalbericht',
    title: 'Heinrichsfest 338, oder richtig: 124 nBA',
    originalLabel: 'Originalen Gruppenrückblick vollständig lesen',
    facts: [
      'Das Banner versah eine gut angenommene Torwache und hielt Appell sowie Waffentraining ab.',
      'Am Splitterlandtisch wurde Frieden zwischen Kan Kuzgun und Drachengard verkündet. Kupferstein wurde als Fürstentum Kan Kuzguns und Boffeld als Fürstentum Drachengards anerkannt.',
      'Anrühn ersuchte um Unterstützung gegen Ork-Piraten, die sich in einer Stadtruine verschanzt hatten.',
    ],
    original: `Heinrichsfest 338, oder richtig: 124 nBA

Während man in den Splitterlanden den Frieder feiert, lecken wir noch unsere Wunden nach der "reudigen Damen Runde":
An den hohen Tafeln reichte man sich Salz und wir verkosteten die Waffenpolitur vom Pack.
Der ganz normale Alltag im Aloyer Haufen könnte man also sagen.

Es war reichlich viel geboten dieses Jahr und wir mussten uns sputen auch halbwegs alles und jeden zu schubsen.
Wir wollen euch auch nicht mit zu vielen Infos langweilen, also werfen wir mit Schlagworten!
Oktokneten
Wreidel
Federn am Weibel
Von Obstsalat wird man lustig
Wieder mal den Wettstreit gewonnen
WTF Fötengrube
Kopfmassagen
reichlich Tee
LuS ist endlich beim "Du" angekommen
Lehrgang zum Thema Tischmanieren
"Aloys erster Ritter"
Minnen-Battle
den Groll des Packs auf sich gezogen
Brennender Kreis
Marschieren mit Stöcken
Lampenöl wirkt auch von Innen
Zuckervater
Krawallschorle
Alis Teestube durchgespielt

bleibt uns noch zu sagen:
vielen Dank an die Orga, die wieder mal was Grandioses auf die Beine gestellt hat und danke auch an alle Menschen
die mit uns gespielt haben und uns erneut ertragen haben.`,
  },
  {
    id: 'streitlande-124',
    year: '124 n.B.A.',
    type: 'Bestätigte Kurzmeldung',
    title: 'Das Banner in den Streitlanden',
    facts: [
      'Aloyer Söldner zogen mit der Söldnergilde Neu-Ostringen in die Streitlande und bereiteten hierfür gemeinsam Ausrüstung, Verpflegung und Lager vor.',
      'Nach der Rückkehr wurden umfangreiche Bildserien aus dem Lager geteilt.',
      'Die Aloyer sind im Jahresrückblick „HDC2024 The Rise“ bei 3:49 zu sehen.',
    ],
  },
  {
    id: 'freiheitsfest-124',
    year: '124 n.B.A.',
    type: 'Bestätigte Kurzmeldung',
    title: 'Freiheitsfest im kleinen Rahmen',
    facts: [
      'Vom 13. bis 15. September fand ein internes Gewandungs- und Lagerwochenende statt; Buchung, Anreise und anschließende Abrechnung sind dokumentiert.',
      'Für den Freitag war ein Ratsspiel mit gesetztem Thema vorgesehen.',
      'Am Samstag trat die Gruppe mit ihren Söldnerfiguren auf und beging am Abend eine kleine Festlichkeit im Geiste des Freiheitsfestes.',
      'Konkrete Ergebnisse des Ratsspiels sind in den vorliegenden Unterlagen nicht festgehalten.',
    ],
  },
  {
    id: 'hortumnacht-124',
    year: '124 n.B.A.',
    type: 'Originalmeldung',
    title: 'Gruß zur Hortumnacht',
    originalLabel: 'Originalen Hortumnacht-Gruß vollständig lesen',
    original: `Liebste Kameraden, ihr wunderschönen Söldner von Aloy (und Söldner mit M vermerk),
ich wünsch euch eine wunderbare Hortumnacht, die längste Nacht des Jahres, ab jetzt werden die Tage wieder länger. Zündet ein Licht für Limbar an und erinnert euch an die schönen warmen Tage des vergangenen Jahres.
Gedenket unserer wunderbaren Republik und entsagt dem schändlichem Adelspack, welches unser Land so lange unterdrückt hat.
Stellt die Hortumbäume auf, welche das ganze Jahr grün sind und sorgt für ganz viel Limbar gefälliges Licht auf diesem Baum. Hängt noch ein paar Miram Kugeln dazu. Und wenn ihr an einen der vielen anderen Götter glaub, hängt auch noch für denjenigen etwas an den Baum.
Aber am wichtigsten, hebt den Becher mit heißem Wein und trinkt auf Barsinger.

Ich wünsch euch allen ein frohes Fest.

BARSINGER`,
  },
  {
    id: 'kronmark-beziehungen-125',
    year: '125 n.B.A.',
    type: 'Originalmeldung',
    title: 'Lang vergessen, nie verschwunden – Neue Beziehungen mit der Kronmark',
    originalLabel: 'Originalmeldung aus dem Aloyer Boten lesen',
    original: `Aloy – Die Tinte auf den alten Grenzverträgen war nie wirklich verblasst, doch der Blick der Welt war lange woanders: Die Kronmark, einst vertrauter Nachbar, tritt wieder ins Licht der Geschichte – und Aloy reicht die Hand.

Nach Jahren des stillen Nebeneinanders beginnen nun wieder offizielle diplomatische und wirtschaftliche Beziehungen zwischen Aloy und der Kronmark. Vertreter beider Seiten trafen sich kürzlich zu ersten Gesprächen über Handelsrouten, gegenseitige Unterstützung und kulturellen Austausch.

„Sie waren nie fort – nur in unseren Köpfen vergraben wie ein verstaubter Lagervertrag hinter dem Weinfass“, bemerkte ein gewitzter Grenzbeamter bei der Ankunft der ersten Händlerwagen aus dem Nordwesten.

Besonders gespannt blickt man auf die angekündigten Umzüge ganzer Häuser, Zünfte und Gefolge, die in der Kronmark neue Wurzeln schlagen wollen – unter anderem aus dem Adelshaus Rosenschlag und Münzthal. Aloy zeigt sich offen: Für neue Geschichten, alte Freunde und künftige Bündnisse auf festem Boden.

Im Gegenzug wurde bekannt, dass die Kronmark bereits erste Vertreter benannt hat, die an künftigen Runden der Splitterland-Bündnisse teilnehmen sollen. Auch die Zünfte zeigen sich interessiert: Rohstoffe aus dem unerschlossenen Land, Handelswege, neue Werkstätten – all das lockt mit neuen Möglichkeiten.

Was zunächst im Verborgenen geschah – mit dem Bau kleiner Anlegeplätze, dem Abtragen alter Häuser in den Herkunftslanden, dem stillen Zusammenrufen der Verbündeten – ist nun zur offen gelebten Realität geworden.`,
  },
  {
    id: 'kurzmeldungen-125',
    year: '125 n.B.A.',
    type: 'Bestätigte Kurzmeldung',
    title: 'Kurze Nachrichten aus den Botenregistern',
    facts: [
      'Das 84. Banner unterstützte die Kronmark auf der Tourney vom Einhorn.',
      'Die Gilde der Wächter Aloys für Land und Truppen wählte Weibel Lars Spalter vom 84. Banner als neues Gilden-Ratsmitglied für die Truppen.',
      'Für das Heinrichsfest wurde eine Tombola des Luigi Handelskontors zugunsten der Kriegswaisen aus dem Krieg gegen die Otzlande angekündigt.',
    ],
  },
  {
    id: 'kronmark-fuchsbau-125',
    year: '125 n.B.A.',
    type: 'Originalbericht',
    title: 'Feldbericht des Wachweibls Lars Spalter, 84. Banner 1. Lanze',
    originalLabel: 'Originalbericht vollständig lesen',
    original: `Kronenmark im Jahre 125 n.d.B.

Geschätzer Rat der Weißesten und Besten,

ich will euch von den Geschehnissen von und nach der Hochzeit der Adelsgeschlechter Heinricht von Grimmerthann und Silva von Rosenschlag berichten, zu der das 84. Banner 1. Lanze, die Haubentaucher, als Delegation Aloys geladen war.

Die Hochzeit war gar prächtig, mit viel Glanz, Gesang, Essen und Getränken und auch wenn wir uns unter viel Adel befanden, kann ich doch mit Freude verkünden, das sich die Männer allesamt vorbildlich gegeben haben. Das will ich deswegen hier hervorheben, da es mit der Anwesenheit des Adelsmannes Tarean Valentin von Gockeltrutz und seiner Gemahlin für uns zu einer Probe des Friedens kam, da uns gesagt wurde, dass für dessen Geschenk, ein protziges Schiff, durch Sondersteuern eines seiner Dörfer vollkommen ruiniert und dessen Bewohner verhungert seien. In Anbetracht, wie er vor unseren Augen seine Leibeigene - ja, keine Knechte - behandelte, scheint uns dieses Gerücht durchaus plausibel.

Leider muss ich berichten, dass unsere eigenen Geschenke beinahe einen Eklat verursacht hätten. Trotz guter Intensionen und der Überzeugung, damit für Heiterkeit zu sorgen, würden dieses als Zitat "überaus obszön" wahrgenommen. Einzig dem diplomatischen Geschick der Gastgeberin Frau Silva und der Diplomaten unseres Banners ist es zu verdanken, dass wir zumindest für den Moment keine Strafe fürchten müssen.

Herr Heinrich hat jedoch schon angedroht, es zu gegebener Zeit nochmal zur Sprache zu bringen, daher müssen wir weiterhin auf unsere geschätzten Diplomaten vertrauen.

Nach der Hochzeit teilte sich unser Banner auf, ein Teil unter Führung des Hauptmanns und des Weibels zog über den Landweg zurück gen Heimat, waren doch Dinge für das kommende Heinrichsfest in Drachengard zu planen und besorgen.

Ein anderer Teil unter meiner Führung zog hinunter ins Tal um im Gasthaus "Zum Fuchsbau" auf die Diplomaten zu warten, welche noch einen Tag in der Burg Hohenlinden ausharten und versuchten, die Wogen zu glätten.

Nun will ich mit den durchaus turbulenten Geschehnissen vor Ort berichten, denn die Zeit dort verlief deutlich anders als von uns geplant.

Den Anfang kann ich kurz fassen, denn wir kamen ohne Probleme an und da wir vor Ort auf viele der Hochzeitsgäste trafen, waren wir mit guter Laune, tranken mit den Knechten und waren auch so gut versorgt.

Dann am Abend geschah das unerwartete, denn Gäste und Belegschaft, uns eingeschlossen, vielen von einen auf den anderen Moment in tiefen Schlaf oder erlebten eine Art von Benommenheit, die man sonst nur erfährt, wenn man sich in Tiafunt in die falsche Spielunke verirrt. Aber ich schweife ab, verzeiht. Zu meiner Schande, zu der ich stehen will, war ich zu dieser Zeit gerade abseits meiner Männer, denn ich hatte mich just in diesem Augenblick ausruhen wollen. Was ich jedoch von meinen Kameraden erzählt bekam war, dass nach dem Aufwachen zwei Tote in der Schankstube gefunden wurden, die jedoch keine kannte und ein uns unbekanntes Zeichen trugen. Zudem. und ich berufe mich dabei auf Augenzeugen der Gäste, tanzte und wütete ein Bär im Gasthaus, welcher jedoch mit Musik weggelockt werden konnte.

Das schlimmste an der Situation aber war, dass uns allen, meinen Kameraden, mir und allen Gästen, alles Geld, die Waffen und auch vereinzelt die Rüstung gestohlen worden war.

Nun fand sowohl ich wie auch der Söldner (m) Tilly eine Notiz in unter unserem Wams, welche Klarheit brachte. Hinter dieser Tat steckte eine Söldnergruppe, ansässig in der Kronenmark, welche den Namen "Die 3 Münzen" trug.

Es wurde sogleich unter den Sprechern der gegenwärtigen Gruppen eine Versammlung einberufen, ausrechnet von diesem verruchten Adeligen Tarean von Gockeltrutz. Ich will eure Zeit nicht mit den umnachteten Überlegungen der Adeligen in dieser Runde verschwenden, daher komme ich gleich auf die andere anwesenden Sölndergruppe "Schwarze Sau" zu sprechen, welche die Ringe für die Hochzeit bewacht und mit ihrer Auftraggeberin, der Edelsteinschleiferin Garnet Perdell, wie wir noch eine Pause in vor der Weiterreise eingelegt hatte. Auch ihnen wurde eine Notiz zugesteckt, daher trafen wir uns abseits und beredeten unser Vorgehen. Die 3 Münzen wollten uns beide zu unterschiedlichen Zeit am Morgen treffen, daher beschlossen wir uns gegenseitig zu informieren und im Notfall geschlossen zu verteidigen.

Beim Treffen, welches ich mit den Söldnern Tilly und Rosi aufsuchte, wurde an uns die Forderung gestellt, wir sollten alle lagernden Adelsleut umbringen und auch gleich das Gasthaus niederbrennen. Unsere Abneigung gegen den Adel in allen Ehren, aber natürlich konnten wir unmöglich darauf eingehen. Diese Strauchdiebe von Söldnern hatten sich aber auch erdreist, unsere Farben zu stehlen, sahen wir doch UNSER BANNER und FAHNE in deren armseligen Versuch eines Lagers! Daher war es schnell für mich klar, es gab nur einen Weg und das war der des Schwertes.

Nach kurzer Unterredung mit dem Hauptmann der Schwarzen Sau weiten wir die anderen Gäste ein und als dann der Feind vor der Schwelle auftauchte um unseren Teil der Abmachung einzufordern, begrüßten wir ihn mit allen was wir bis dahin gefunden hatten. Stock und Stein, wie auch alte Wandzier traf sie und wir prügelten die Hunde erstmals in die Flucht. Dabei nahmen wir alles an Waffen, was diese dabei fallen ließen. Selbst Gefangene nahmen wir. Ein wahre Schande, dieser sogenannte "Söldnerhaufen".

Nun, beim Schluss kann ich mich kurz fassen. Als wir nach weiteren Angriffen genug an Waffen zurück erbeutet hatten, zogen wir gegen den Feind ins Feld und überrollten sie dabei mit unserem Sturmangriff. Da diese Hunde, feige wie sie sind, im Wald Sprengfallen aufgestellt hatten, nutzen wir unseren Gefangenen, um diese zu umgehen. Hier möchte ich auch erwähnen, das Selbiger schnell merkte, wie weit es mit deren Kameradschaft stand, wollten sie ihn doch gleich mit abschlachten. Da sich zeigte, das für diesen traurigen Kerl Hoffnung auf Besserung steckte, wurde er noch im Feld für unser Banner rekrutiert und befindet sich nun mit uns auf den Weg in die Heimat. Dort wird sich zeigen, ob er das Zeug für einen wahren Aloyer hat.

Um meinen Bericht zu beenden kann ich bestätigen, dass die feindliche Gruppierung zerhauen und deren Hauptmann von uns erschlagen wurde. Möglicherweise können wir dies bei zukünftigen Verhandlungen für uns nutzen. Dabei spiele ich nochmal auf das misslungene Geschenk an den Herrn Ritter an.

Zur Zeit dieses Schreibens befinden wir uns nahe des Hafens, südlich von Ostlinden, wo wir ein Schiff nach Tiafunt nehmen und uns dort für die kommende Reise nach Drachengard vorbereiten werden.

Hochachtungsvoll

Lars Spalter, Wachweibel des 84. Banners, 1. Lanze`,
  },
  {
    id: 'heinrichsfest-125',
    year: '125 n.B.A.',
    type: 'Bestätigte Kurzmeldung',
    title: 'Das Banner auf dem Heinrichsfest',
    facts: [
      'Das 84. Banner trat auf dem Heinrichsfest geschlossen auf und führte Drill sowie einen bezahlten Aufmarsch für einen Auftraggeber durch.',
      'Im Lager wurde erstmals der Aloyer Amüsier Abend veranstaltet.',
      'Das Banner beteiligte sich an einer Tombola und pflegte den Austausch mit den übrigen Gruppen der Splitterlande.',
    ],
  },
  {
    id: 'bericht-tilly-125',
    year: '125 n.B.A.',
    type: 'Originalbericht',
    title: 'Bericht Tilly Kreischs an den Hauptmann',
    originalLabel: 'Persönlichen Originalbericht vollständig lesen',
    original: `Bericht an den Hauptmann

Lieber Hauptmann und der Rest vom Saufhaufen,

die Wache beim Ritter auf dem Turnier wurde planmäßig durchgeführt. Es gab keinerlei Zwischenfälle, der Auftrag wurde ohne Auffälligkeiten erfüllt. Der Befehl lautete überwiegend, Präsenz zu zeigen und den Festlichkeiten beizuwohnen – was wir mit angemessener Hingabe umgesetzt haben.

Die Taverne vor Ort wurde aufgesucht und sendet kameradschaftliche Grüße an das restliche Korps.

Zudem erhielten wir eine Einladung zu einem Schützenfest, die wir bei Gelegenheit wahrnehmen könnten.

Erwähnenswert ist außerdem, dass barsingergefällig ein neues Trinkspiel eingeführt wurde, das sich großer Beliebtheit erfreute und als fester Bestandteil unserer abendlichen Kameradschaftspflege galt.

Abschließend ist zu berichten, dass Aloyer Söldner möglicherweise für eine Wachmission auf einem Versorgungsschiff in ein Kriegsgebiet entsandt werden könnten, sofern der Rat seine Zustimmung erteilt.

Mit kameradschaftlichem Gruß,

Tilly Kreisch`,
  },
  {
    id: 'heerlager-lauf-126',
    year: '126 n.B.A.',
    type: 'Originalbericht',
    title: 'Wenzel schreibt seinem Freund in Ums Eck',
    originalLabel: 'Originalbrief vollständig lesen',
    original: `Mein lieber Luki,

ich schreibe dir diese Zeilen in einer Stunde, in der man sich fragt, was ein Wort oder ein Vertrag in diesen Tagen überhaupt noch wert ist. Du weißt, ich bin kein Mann der großen Politik, aber was sich hier im Lager zu Lauf abspielt, bereitet mir schlaflose Nächte.

Du weißt, wir hatten im Banner alle gehofft, dass die Sache mit Alfalter endlich zum Abschluss kommt. Es war doch schon ersichtlich, dass wir uns Südalfalter einverleiben – eine ordentliche Einnahme durch Aloy, damit dort endlich Ruhe herrscht und das Land unter unser Banner kommt. Wir waren bereit, die Grenze für unser Land zu sichern und das Ganze professionell zu beenden.

Doch statt einer geordneten Übernahme durch Aloy haben wir jetzt das reinste Chaos. Sera de Alba hat uns alle kalt erwischt – Komarn hat Alfalter den Krieg erklärt. Mitten auf dem Fest, vor aller Augen. Die Kronmark hat natürlich sofort reagiert, denn niemand will Komarn als Nachbarn an der eigenen Grenze. Sie stehen jetzt offiziell auf Alfalters Seite.

Und was machen wir? Was macht unser Aloy? Offiziell heißt es, wir seien neutral. Aber du kennst das Banner. Wir sind bereits für die Seite der Kronmark eingegliedert, das Gold ist geflossen. Wir stehen also mittendrin in einem Krieg, den wir offiziell gar nicht führen. Für einen Soldaten wie mich ist das ein gefährliches Pflaster – wir kämpfen unter fremden Befehlen für eine Sache, bei der sich unsere eigene Regierung die Hände nicht schmutzig machen will.

Aber ich sag’s dir: Wenigstens gab es was zu lachen. Du hättest dabei sein müssen! Der Spiegelberger wollte seinen Jungen Burkhart mit Gewalt von Snorri de Alba zurückholen und hat ein Gefolge aus den dunkelsten Ecken mitgebracht. Aber Snorri war nicht allein – unsere braven Aloyer Jungs und die Hellersbrunner standen wie eine Wand hinter ihm.

Der Kerl marschiert auf Snorri de Alba zu und verpasst ihm vor versammelter Mannschaft eine schallende Ohrfeige! In dem Moment brach die Hölle los. Ich sag’s dir, Luki, so schnell konntest du gar nicht „Festfrieden“ sagen, wie die ersten Fäuste flogen. Für mich gab es kein Halten mehr. Ich bin freudestrahlend und ohne nachzudenken einfach nach vorne gerannt – ich wollte mir den Spaß nicht entgehen lassen!

Dummerweise standen da vier üble Gestalten vom „Streithahn“ und anderes Räubergesindel, die der Spiegelberger mitgebracht hatte. Die haben nicht lange gefackelt und mich gemeinsam von den Beinen geholt. Ich habe ordentlich einstecken müssen, mein ganzer Körper ist eine einzige Prellung, aber bei den Dreyn: Es war ein Riesenspaß! Eine Keilerei, wie man sie nur einmal im Jahrzehnt erlebt. Dass das trotz des Friedensgebots so dermaßen eskaliert ist, hat jeden hier überrascht – aber ich hätte den Tanz um nichts in der Welt verpassen wollen. Die Fäuste flogen, die Kerle flogen, und unsere Jungs haben gezeigt, dass sie im Gemenge nichts verlernt haben. Ein herrlicher Spektakel!

Und jetzt kommt das Beste: Unsere Freunde vom Imperium standen ja erst auf der Seite vom Spiegelberger. Aber kaum war der Kerl verhaftet und es kam raus, dass er seine Zahlungen an Konrad nicht leisten kann, hat sich das Blatt gewendet. Konrad hat nicht lange gefackelt und hat sich kurzerhand der Fehde gegen den Spiegelberger angeschlossen, nur um seine Goldstücke einzutreiben! Wenn es ums Geld geht, kennt die imperiale Treue eben auch ihre Grenzen.

Ich werde meine Wunden pflegen und zusehen, dass ich die Jungs vom 84. wieder in Reih und Glied kriege, bevor die Kronmark uns den nächsten Marschbefehl gibt. Trink einen auf meine Gesundheit und mein buntes Gesicht!

In Treue zu Aloy,

Wenzel

Feldwaibel, 84. Banner`,
  },
  {
    id: 'vormberger-stollen-126',
    year: '126 n.B.A.',
    type: 'Originalmeldung',
    title: 'Einsturz im alten Stollen beendet drei Schichten und zwei Erbschaften',
    originalLabel: 'Originalmeldung aus dem Aloyer Boten lesen',
    original: `In einem stillgelegten Seitenstollen bei Vormberg kam es zu einem Einsturz, bei dem drei Männer ums Leben kamen, die nach ersten Ermittlungen dort unerlaubt nach Restadern gesucht hatten. Die Behörden sprechen von einem tragischen Unglück. Die Witwen sprechen von vorhersehbarer Dummheit.

Nach Aussage der Grubenleitung war der Zugang seit Monaten gesperrt, was in Vormberg offenbar von manchen als freundlicher Hinweis und nicht als Verbot verstanden wird. Einer der Toten soll noch am Vorabend erklärt haben, er kenne den Berg besser als seine eigene Frau. Die Frau selbst bestätigte dies, fügte jedoch an, dass beides wenig Eindruck auf sie mache.

Die Bergung erwies sich als schwierig. Ein zwergischer Aufseher soll nach Sichtung der Lage nur den Kopf geschüttelt und bemerkt haben, Menschen hätten die seltene Gabe, selbst mit Warnschildern zu streiten. Die Schmiede der Stadt hielten am Abend eine Schweigeminute. Danach sprach man vor allem darüber, wer die Werkzeuge der Verstorbenen übernehmen dürfe.`,
  },
  {
    id: 'gebirgsmarine-material-126',
    year: '126 n.B.A.',
    type: 'Originalmeldung',
    title: 'Bekanntmachung der Heeresleitung zu Ohm',
    originalLabel: 'Originale Bekanntmachung vollständig lesen',
    original: `Auf Anweisung der Lewensteiners und Erzmarschallin Kreszentia Eusebia Waldstein wird kundgetan, dass bei einer ordentlichen Nachsicht von Materialbeständen in einem Depot nördlich von Ohm das Fehlen mehrerer Gegenstände aus Beständen der Aloyer Gebirgsmarine festgestellt worden ist.

Art, Zahl, Beschaffenheit und Zweck des fehlenden Geräts werden aus Gründen des Dienstes und der allgemeinen Sicherheit nicht öffentlich benannt.

Allen Personen, welche in den vergangenen Tagen im fraglichen Gebiet unterwegs waren, wird auferlegt, aufgefundenes Gerät, Kistenwerk, Eisenwerk, vermessungstaugliches Handzeug, beschlagene Behälter oder sonstige Gegenstände unbekannter militärischer Herkunft nicht zu öffnen, zerlegen, essen, darin zu baden oder an Dritte weiterzugeben, sondern unverzüglich der zuständigen Stelle in Ohm oder der nächstliegenden Wache zu melden.

Gegeben zu Ohm,
im Namen der Heeresleitung Aloys`,
  },
];
