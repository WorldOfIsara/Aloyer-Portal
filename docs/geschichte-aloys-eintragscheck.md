# Geschichte Aloys - Eintrags- und Quellencheck

Stand: 5. August 2026

## Zweck

Diese Datei ist die redaktionelle Grundlage für eine spätere IT-Seite **„Geschichte Aloys“**. Sie sammelt mögliche Einträge aus dem Aloyer Dokumentenfundus, bewertet deren Belastbarkeit und trennt Staatsgeschichte, ausgespielte Zeitgeschichte, Entwürfe und veraltete Archivbestände.

Die Seite selbst wurde bewusst noch nicht gebaut. Vor der Umsetzung sollte aus den untenstehenden Kandidaten festgelegt werden, welche Dichte die öffentliche Chronik erhalten soll.

## Geprüfter Bestand

- `B:\CODEX\Aloyer-Söldner` einschließlich aller Unterordner
- 523 textrelevante Word-, PDF-, Markdown- und Textdateien
- 429 maschinell lesbare Dokumente, davon 251 mit Datums- oder Ereignisbezug
- 90 Dateien mit konkreten Datumsfundstellen
- `B:\CODEX\Aloy Drive Complete.pdf` mit 2.338 Seiten als zusätzlicher Vollständigkeitsabgleich
- bestehende Website-Texte und die bereits kuratierte Berichtsfolge in `src/data/itReports.ts`
- der vom Nutzer bereitgestellte Screenshot des früheren WorldAnvil-Zeitstrahls

Reine Con-Fotos, Bildsammlungen, Schnittmuster, externe Gewandungsbücher, private Organisationsdaten und mehrfach vorhandene PDF-/Word-Doppelungen wurden nicht als eigenständige Geschichtsquellen gewertet.

## Bewertungsstufen

- **A - tragfähig:** finale oder mehrfach bestätigte Setzung; für die Hauptchronik geeignet.
- **B - gut belegt:** veröffentlichte Meldung, Protokoll oder ausgespieltes Ereignis; als Zeitgeschichte geeignet.
- **C - Entwurf oder Detail unsicher:** der Kern kann verwendbar sein, einzelne Namen, Zahlen oder Tagesdaten brauchen aber Bestätigung.
- **D - Altbestand:** ausdrücklich archiviert/deprecated oder mit der heutigen Setzung unvereinbar; nicht ohne erneute Kanonentscheidung veröffentlichen.
- **W - WorldAnvil-only:** nur im alten Zeitstrahl belegt; im aktuellen Dokumentenfundus nicht wiedergefunden.

## Zeitrechnung und notwendige redaktionelle Setzung

Die Quellen verwenden mehrere Schreibweisen:

- **n.W.**: ältere monarchische Jahreszählung; die Freiheitserklärung beschreibt sie als Jahre seit der Thronbesteigung des ersten Königs.
- **v.B.A. / n.B.A.**: Jahre vor beziehungsweise nach der Befreiung Aloys.
- **s.B.A.**: alte Archivschreibweise, vermutlich „seit Befreiung Aloys“. Sie wird in veralteten Texten auch für Jahre verwendet, die aus heutiger Sicht noch in der Zukunft lägen.
- **n.d.B.**: vereinzelt in Feldberichten; nach bisheriger Praxis eine abweichende Schreibweise für n.B.A.

Aus der Freiheitserklärung, dem alten Zeitstrahl und der redaktionellen Festlegung vom 5. August 2026 ergibt sich:

> 1309 n.W. entspricht dem Ende der Monarchie und dem Jahr 1 n.B.A.

Damit entspricht die Gründung der Königlichen Akademie im Jahr 556 n.W. dem Jahr 753 v.B.A. Das erste freie Jahr wird verbindlich als **1 n.B.A.** geführt.

## Empfehlung für den Aufbau der späteren Seite

Die Chronik sollte nicht jeden Bericht gleich groß darstellen. Sinnvoll sind drei sichtbare Ebenen:

1. **Hauptmarken:** Staatsgründung, Befreiung, Akademiereform und große außenpolitische Wendepunkte.
2. **Registereinträge:** bestätigte Ratsbeschlüsse, Expeditionen, Feldzüge und diplomatische Ereignisse.
3. **Randnotizen:** lokale, kulturelle oder kuriose Ereignisse aus dem Aloyer Boten.

Technisch bietet sich derselbe erzählerische Graph-Stil wie bei `/it/berichte` an, ergänzt um Filter für **Monarchie**, **Befreiung**, **Frühe Republik**, **Gegenwart**, **Rat**, **Akademie**, **Heer**, **Außenpolitik** und **Alltag**.

# Empfohlene Chronik

## Grundlegende Geschichte Aloys

### 1. Beginn der alten monarchischen Zeitrechnung

- **Zeit:** 1 n.W. / 1309 v.B.A.
- **Status:** A nach redaktioneller Festlegung
- **Kategorie:** Monarchie
- **Vorschlag für den Eintrag:** Mit der Errichtung der alten Königsherrschaft begann die frühere aloyische Jahreszählung. Von diesem Jahr an verzeichneten spätere Schreiber 1309 Jahre monarchischer und adeliger Herrschaft bis zur Befreiung Aloys.
- **Quellen:** `Aloyer Landesinformationen\Freiheitserklärung Aloy.docx`; alter WorldAnvil-Zeitstrahl.
- **Festlegung:** Der Name des ersten Königs wird in diesem Eintrag nicht genannt.

### 2. Gründung der Königlichen Aloyer Akademie

- **Zeit:** 556 n.W. / 753 v.B.A.
- **Status:** A
- **Kategorie:** Akademie, Monarchie
- **Vorschlag für den Eintrag:** Unter der Monarchie wurde die Königliche Aloyer Akademie gegründet. Sie blieb über Jahrhunderte eine vornehmlich von Adel und vermögenden Protegés getragene Lehranstalt und wurde später zur Grundlage der republikanischen Akademie.
- **Quellen:** `Aloyer Landesinformationen\Akademie\Aloyer Akademie.docx`; alter WorldAnvil-Zeitstrahl; heutige Seite `/it/akademie/geschichte`.
- **Festlegung:** Es wird nur das Jahr, kein erfundener Tag genannt.

### 3. Der blutdürstige Richter von Grodaus

- **Zeit:** 728 n.W. / 581 v.B.A.
- **Status:** A nach Kanonentscheidung vom 5. August 2026
- **Kategorie:** Recht, Monarchie
- **Vorschlag für den Eintrag:** In Grodaus wirkte ein Richter, der zunächst als gewissenhafter Amtsträger galt, dann aber zunehmend Gefallen an Todesurteilen und grausamen Hinrichtungen fand. Als die Verbrechen zurückgingen, soll er selbst des Nachts Menschen verfolgt und ermordet haben. Der Fall blieb als abschreckende Überlieferung über ungebremste richterliche Gewalt erhalten.
- **Quelle:** `Archiv\Reulos-Orga (deprecated)\Cons und andere Veranstaltungen\Taverne zum stummen Barden II - 2014\Plot - IT\Legende_Richter.docx`.
- **Festlegung:** Der Stoff wird wieder in den Kanon aufgenommen. Auf der Website sollte er als akademisch überlieferter historischer Fall erscheinen, da die Quelle selbst legendenhaft erzählt.

### 4. Beginn der Erhebungen gegen die Adelsherrschaft

- **Zeit:** 6 v.B.A.
- **Status:** A nach redaktioneller Datierung
- **Kategorie:** Befreiung
- **Vorschlag für den Eintrag:** Aus Demonstrationen in den größeren Orten entstanden örtliche Bauernaufstände. Aufständische Haufen griffen kleinere Garnisonen und adelige Verbände an, während König Eberwin III. den Heerbann ausrief und die Adeligen zur Lehnstreue verpflichtete.
- **Quellen:** `Cons\AFF 122\AUsschreibung und Spieler informationen\NSC Sachen.docx`; `Cons\AFF 123\NSC\NSC Wissen.docx`; `Aloyer Landesinformationen\Befreiungskrieg - DRAFT.docx`.
- **Festlegung:** Der Beginn der Erhebungen wird pauschal sechs Jahre vor dem Ende der Monarchie angesetzt.

### 5. Emmerich von Lewenstein schließt sich der Erhebung an

- **Zeit:** zwischen 6 und 1 v.B.A.
- **Status:** A/B
- **Kategorie:** Befreiung, Heer
- **Vorschlag für den Eintrag:** Emmerich von Lewenstein verweigerte Eberwin III. die Heerfolge, stellte sich auf die Seite der Bauern und Handwerker und übernahm die Führung der Revolutionsarmee. Er vereinigte die zerstreuten Haufen unter einer gemeinsamen Ordnung und ließ sie heimlich in einem Waldstück bei Waidfuath ausbilden.
- **Quellen:** `Cons\AFF 122\AUsschreibung und Spieler informationen\NSC Sachen.docx`; `Cons\AFF 123\NSC\NSC Wissen.docx`.

### 6. Schlacht bei Hocheck

- **Zeit:** 14. März 1309 n.W. / 1 n.B.A.
- **Status:** A nach Kanonentscheidung; Truppenstärken weiterhin nicht festgelegt
- **Kategorie:** Befreiung, Heer
- **Vorschlag für den Eintrag:** Vor Hocheck traf die vereinte Revolutionsarmee auf das königliche Heer. Regen schwächte die Armbrustschützen, unkoordinierte Reiterangriffe brachen im Pfeilhagel zusammen und die königlichen Truppen flohen schließlich vom Feld. Die Schlacht entschied den Befreiungskrieg zugunsten der Aufständischen.
- **Quellen:** `Aloyer Landesinformationen\Befreiungskrieg - DRAFT.docx`; `Cons\AFF 122\AUsschreibung und Spieler informationen\NSC Sachen.docx`; `Cons\AFF 123\NSC\NSC Wissen.docx`; heutige Seite `/it/rat/befreiung`.

### 7. Sturm auf Hocheck und Hochecker Bluttat

- **Zeit:** unmittelbar nach dem 14. März 1 n.B.A.
- **Status:** A/B
- **Kategorie:** Befreiung, Recht
- **Vorschlag für den Eintrag:** Die Aufständischen nahmen die kaum noch verteidigte Burg Hocheck, plünderten sie und legten sie in Brand. König Eberwin III. und seine Getreuen wurden nach einem hastigen Tribunal durch die Spieße gerichtet. Königin und Prinz blieben am Leben und wurden der Überlieferung nach auf einem Mistwagen nach Grodaus gebracht. Die Akademie führt die Tat als Hochecker Bluttat und als Warnung vor ungeordneter Rache.
- **Quellen:** `Aloyer Landesinformationen\Hochecker Bluttat.docx`; `Cons\AFF 122\AUsschreibung und Spieler informationen\NSC Sachen.docx`; `Cons\AFF 123\NSC\NSC Wissen.docx`; heutige Seiten `/it/rat/befreiung` und `/it/recht/rechtsfaelle`.

### 8. Abschaffung des Adels und Ultimatum an die alten Herren

- **Zeit:** nach der Hochecker Bluttat, 1 n.B.A.
- **Status:** A/B
- **Kategorie:** Befreiung, Republik
- **Vorschlag für den Eintrag:** Um weiteres Blutvergießen zu verhindern, wurde der Adel als Stand abgeschafft. Ehemalige Herren durften als rechtlich gleiche Bürger in Aloy bleiben oder das Land verlassen. Ein großer Teil nahm die neue Ordnung an; andere flohen oder verloren ihre frühere Stellung.
- **Quellen:** `Aloyer Landesinformationen\Befreiungskrieg - DRAFT.docx`; heutige Seite `/it/rat/befreiung`.

### 9. Freiheitserklärung zu Grodaus

- **Zeit:** zehnter Tag des Sommers, 1 n.B.A.
- **Status:** A
- **Kategorie:** Republik, Recht
- **Vorschlag für den Eintrag:** Zu Grodaus wurde die Freiheitserklärung verkündet. Sie erklärte alle Bürger an Recht und Pflicht für gleich, schaffte den Adel ab, begründete die Ratsordnung und hielt Bürgerrecht, Glauben, Landesverteidigung und das Recht zum Waffentragen fest. Abschriften wurden im Land verbreitet.
- **Quellen:** `Aloyer Landesinformationen\Freiheitserklärung Aloy.docx`; heutige Seite [Die Freiheitserklärung](/it/rat/freiheitserklaerung/).
- **Seitenverknüpfung:** Der spätere Zeitstrahl-Eintrag soll direkt auf `/it/rat/freiheitserklaerung/` führen.

### 10. Entstehung der Aloyer Räterepublik

- **Zeit:** 21. Juni 1 n.B.A.
- **Status:** A nach Kanonentscheidung
- **Kategorie:** Republik, Rat
- **Vorschlag für den Eintrag:** Emmerich von Lewenstein und einflussreiche Bürger schufen nach der Befreiung die Grundlagen der Räterepublik. Königliche und erbliche Herrschaft wurden durch Rat, Städte, Zünfte, Akademie und Glauben ersetzt.
- **Quellen:** `Cons\AFF 122\AUsschreibung und Spieler informationen\NSC Sachen.docx`; `Cons\AFF 123\NSC\NSC Wissen.docx`; `Aloyer Landesinformationen\Freiheitserklärung Aloy.docx`; alter WorldAnvil-Zeitstrahl.

### 11. Republikanische Neuordnung der Akademie

- **Zeit:** 10. September 12 n.B.A.
- **Status:** A nach Kanonentscheidung
- **Kategorie:** Akademie, Republik, Heer
- **Vorschlag für den Eintrag:** Der Rat wandelte die Königliche Aloyer Akademie mit großer Mehrheit in die Aloyer Akademie des wahren Glaubens der Drei um. Handwerk und Handel wurden eingegliedert, Kasernen und Soldatenausbildung unter akademische Verwaltung gestellt und der Zugang zur Lehre für das ganze Volk geöffnet.
- **Quellen:** `Aloyer Landesinformationen\Akademie\Aloyer Akademie.docx`; alter WorldAnvil-Zeitstrahl; heutige Seite `/it/akademie/geschichte`.

### 12. Wiederbesteigung der Waidfuather Großnosn

- **Zeit:** 32 n.B.A.
- **Status:** A nach Kanonentscheidung
- **Kategorie:** Land, Grenzen
- **Vorschlag für den Eintrag:** Die Waidfuather Großnosn wurde erstmals wieder bestiegen und in den neueren Archiven beschrieben. Der Berg nordwestlich Aloys wurde zum Gegenstand eines Streits mit Morvon. Da keine Seite aus seinem Besitz einen hinreichenden strategischen Vorteil gewann, wurde er keinem der beiden Länder dauerhaft zugesprochen.
- **Quelle:** alter WorldAnvil-Zeitstrahl; Kanonbestätigung vom 5. August 2026.
- **Hinweis:** Schreibweise und Grenzbeschreibung folgen vorerst dem alten Zeitstrahl.

## Quellenlücke zwischen 32 und 121 n.B.A.

Nach der Großnosn-Besteigung im Jahr 32 n.B.A. enthält der geprüfte Fundus bis 121 n.B.A. keinen weiteren belastbaren, datierten Vorgang der Landesgeschichte. Eine Interviewmitschrift aus 120 n.B.A. dokumentiert ein Söldnerlager, aber kein historisches Staatsereignis. Weitere scheinbare Zwischendaten stammen aus dem verworfenen Taverne- und Kreaturenjäger-Altbestand.

Diese Lücke sollte auf der Website offen als **„Aus diesen Jahrzehnten sind bislang keine datierten Registereinträge erschlossen“** behandelt werden. Eine ruhige Unterbrechung im Zeitstrahl ist redaktionell ehrlicher als erfundene Ereignisse.

## Landesrelevante Zeitgeschichte

### Tod Bernd Brottingers

- **Zeit:** Ende Februar 123 n.B.A.
- **Status:** B
- **Eintrag:** Das langjährige Ratsmitglied und der Erfinder des Kastenbrots starb im Alter von 87 Jahren. Über 15 Jahre hatte er der Republik als Vertreter der Bäckerszunft gedient.
- **Quelle:** `AloyerBote_Apr123.pdf`.

### Limbarfest zu Grodaus

- **Zeit:** Frühlingsbeginn 123 n.B.A.
- **Status:** B
- **Eintrag:** Das Paar der Fruchtbarkeit zog durch Grodaus zur Limbargrotte und beging dort den überlieferten Frühlingsritus.
- **Quelle:** `AloyerBote_Apr123.pdf`.

### Ende der Kronenfieber-Maßnahmen

- **Zeit:** 123 n.B.A.
- **Status:** B
- **Eintrag:** Der Rat hob die letzten Maßnahmen gegen das Kronenfieber auf. Masken in Postkutschen und Fieberüberprüfungen entfielen; Ausgangsbeschränkungen waren bereits im Vorjahr beendet worden.
- **Quelle:** `AloyerBote_Apr123.pdf`.

### Sieg des 3. Flottenverbandes über Piraten

- **Zeit:** Lewensteiner Tag 123 n.B.A.
- **Status:** B
- **Eintrag:** Der 3. Aloyer Flottenverband besiegte Piraten im Tiafunter Meer und machte die durch Kronenfieber und Überfälle belasteten Handelswege wieder sicherer.
- **Quelle:** `AloyerBote_Apr123.pdf`.

### Waidfuather Bürgermeister ermordet

- **Zeit:** 123 n.B.A.
- **Status:** B
- **Eintrag:** Nach der gewaltsamen Entleibung des ersten Bürgermeisters empfahl der Rat eine Verstärkung der Wache und nahm den zweiten Bürgermeister bis zu Neuwahlen als Vertretung auf.
- **Quellen:** Ratsprotokolle; `AloyerBote_Sept123.pdf`.

### Steuersenkung zum Freiheitsfest

- **Zeit:** 123 n.B.A.
- **Status:** A/B
- **Eintrag:** Der Rat senkte die Steuern auf Wein und Branntwein für die Dauer des Freiheitsfestes um ein Drittel.
- **Quelle:** `Ratssitzung 003 - 15.07.2023.docx`.

### 526. Ratssitzung und außenpolitische Entscheidungen

- **Zeit:** 15. Juli 123 n.B.A.
- **Status:** A/B
- **Eintrag:** Der Rat beriet Berichte aus Handel, Heer, Landwirtschaft und Städten. In diesem Umfeld wurden Aloys Neutralität im Krieg gegen die Otzlande, eine begrenzte Expedition nach Ardalon, Planungen für Südalfalter und die Beziehungen zu Komarn behandelt.
- **Quellen:** `Ratssitzung 003 - 15.07.2023.docx`; `Ratssitzung 002 - 24.05.2023.docx`; `AloyerBote_Sept123.pdf`.
- **Hinweis:** Südalfalter blieb Planung; eine Annexion ist nicht bestätigt.

### Hortumnacht

- **Zeit:** 124 n.B.A.
- **Status:** B
- **Eintrag:** Ein überlieferter Gruß beschreibt die Hortumnacht mit Licht für Limbar, immergrünem Hortumbaum, Schmuck für Miram und einem Becher heißen Weins auf Barsinger.
- **Quelle:** Discord; bestehende Berichtsseite.

### Erneute Beziehungen zur Kronmark

- **Zeit:** 125 n.B.A.
- **Status:** B
- **Eintrag:** Aloy und die Kronmark nahmen wieder offizielle diplomatische und wirtschaftliche Beziehungen auf. Gespräche betrafen Handelsrouten, gegenseitige Unterstützung, kulturellen Austausch und Bündnisrunden der Splitterlande.
- **Quellen:** `AloyerBote_Apr125.pdf`; `src/data/itReports.ts`.

### Krieg Komarns gegen Alfalter

- **Zeit:** 126 n.B.A.
- **Status:** B
- **Eintrag:** Komarn erklärte Alfalter den Krieg, worauf sich die Kronmark auf die Seite Alfalters stellte. Aloy blieb nach dem vorliegenden Feldbrief offiziell neutral, während das bereits von der Kronmark besoldete 84. Banner in deren Aufgebot stand.
- **Quellen:** `Discord\#söldner-intern\Inhalt.md`, Feldbrief vom 12. Mai 2026; `src/data/itReports.ts`.
- **Hinweis:** Die Neutralität ist als berichtete politische Haltung und nicht als bislang aufgefundener Ratsbeschluss zu formulieren.

### Einsturz im Vormberger Stollen

- **Zeit:** 126 n.B.A.
- **Status:** B/C, Botenmeldung im Entwurf
- **Eintrag:** Drei Männer starben bei der unerlaubten Suche nach Restadern in einem gesperrten Seitenstollen bei Vormberg.
- **Quelle:** `Aloyer Bote - 126.pdf` beziehungsweise kommende Ausgabe.

## Aktivitäten des 84. Banners

### Erste belegte Expeditionen nach Alfalter

- **Zeit:** 121 n.B.A.
- **Status:** B
- **Eintrag:** Aloyer Späher erkundeten Wege und politische Verhältnisse Alfalters. Ihre Berichte beschrieben Groß Heigold, Wegzölle, Konflikte der Stadtstaaten und mögliche Routen nach Drachengard.
- **Quellen:** `Erster Alfalter Bericht.docx`; `Bericht des Aloyer Spähers “Heiner”.docx`; `src/data/itReports.ts`.

### Das 84. Banner richtet das Freiheitsfest aus

- **Zeit:** 122 n.B.A.
- **Status:** B
- **Eintrag:** Das Banner lud Freunde und Verbündete zum Freiheitsfest. Historische Spiele erinnerten an Befreiung, Hocheck und Gleichstellung und machten das Fest zu einem Ort auswärtiger Begegnung.
- **Quellen:** `Cons\AFF 122\AUsschreibung und Spieler informationen\Ausschreibung.docx`; `NSC Sachen.docx`.

### Teilnahme am drachengarder Heinrichsfest

- **Zeit:** 122 n.B.A.
- **Status:** B
- **Eintrag:** Das Banner nahm am Heinrichsfest teil und vertiefte Kontakte zu Drachengard, Neu-Boffeld, Komarn, dem Greifenorden und weiteren Gruppen der Splitterlande.
- **Quelle:** `Cons\Heerlager 2022\Danksagung HL 2022.docx`.

### Zweites öffentliches Freiheitsfest des 84. Banners

- **Zeit:** 123 n.B.A.
- **Status:** B
- **Eintrag:** Das Banner lud erneut Gesandte und Freunde ein. Traditionelle Spiele vermittelten die republikanische Geschichte und vertieften diplomatische Beziehungen.
- **Quelle:** `Cons\AFF 123\1. Ausschreibung.docx`.

### Hirtenfest, Angriff und Unabhängigkeit Boffelds

- **Zeit:** 123 n.B.A.
- **Status:** B
- **Eintrag:** Beim Hirtenfest unterstützten Aloyer Söldner Neu-Boffeld und Komarn gegen einen Angriff. Nach dem Fest erklärte sich Neu-Boffeld mit Drachengards Segen zum unabhängigen Fürstentum Boffeld.
- **Quelle:** Originalbericht des Hauptmanns in `src/data/itReports.ts`.

### Expedition in die Otzlande

- **Zeit:** 123 n.B.A.
- **Status:** B
- **Eintrag:** Eine aloyische Expedition drang in die Otzlande vor, erstritt Raubgut und eine Geisel zurück und kehrte nach schweren Gefechten rechtzeitig zum Freiheitsfest heim.
- **Quellen:** `AloyerBote_Sept123_Extrablatt.pdf`; vollständiger Originalbericht in `src/data/itReports.ts`.
- **Hinweis:** Als zugeschriebener Feldbericht und nicht als allwissende Darstellung kennzeichnen.

### Hochzeit in der Kronmark und Kampf gegen die Drei Münzen

- **Zeit:** 125 n.B.A.
- **Status:** B
- **Eintrag:** Eine Delegation besuchte die Hochzeit Heinrichs von Grimmerthann und Silvas von Rosenschlag. Nach einem Raub im Gasthaus „Zum Fuchsbau“ schlugen Aloyer und Schwarze Sau die Söldnergruppe Drei Münzen.
- **Quellen:** `Discord\#söldner-intern\Inhalt.md`, Beitrag vom 14. April 2025; `src/data/itReports.ts`.
- **Hinweis:** Als persönlicher Bericht Lars Spalters kennzeichnen.

# Bewusst nicht für diese Geschichtsseite ausgewählt

Die folgenden belegten Inhalte bleiben im Quellenbestand und teilweise auf der Berichtsseite erhalten, werden aber nicht als eigene Knoten in die Geschichte Aloys übernommen:

- akademische Untersuchung des Geburtenrückgangs
- Heinrichsfeste, Heerlager und Splitterlandtische ohne bleibende landespolitische Folge
- Unternehmung des Banners in den Streitlanden
- Freiheitsfest 124 n.B.A. im kleinen Rahmen
- Tourney, Gildenwahl und Aloyer Amüsier Abend
- einzelne Wachdienste und noch nicht ausgeführte Auftragsmöglichkeiten
- das bislang nur als Entwurf belegte fehlende Material der Gebirgsmarine

Diese Auswahl ist keine Verwerfung der Ereignisse. Sie trennt lediglich die Landesgeschichte von der ausführlicheren Chronik persönlicher Reisen und Banneraktivitäten.

# Weiterhin ausgeschlossene Altbestände

## Tolorus der Starke

- **Zeit:** Ausbildung 463 n.W.; überliefertes Ereignis 478 n.W.; Tod 583 n.W.
- **Status:** D
- **Inhalt:** Geschichte eines aloyischen Magiers, der nach Reisen in die Heimat zurückkehrt und Hofmagier werden will.
- **Quellen:** `Archiv\Reulos-Orga (deprecated)\...\Legende_Magier.docx`; `Legendenbuch_Magiergeschichten.docx`.
- **Problem:** Der gesamte Ursprung liegt im als deprecated markierten Taverne-Archiv und enthält unfertige Blindtexte. Nicht als aktuelle Akademiegeschichte übernehmen.

## Mord- und Geisterfälle aus dem alten Taverne-Archiv

- **Zeitangaben:** 1012 n.W.; 68, 133, 180 und 314 s.B.A.
- **Status:** D
- **Inhalt:** Morde in Vormberg, Besessenheit, ruhelose Seelen in Tiafunt sowie ein Brief an die Priesterin des damals noch „Weitfurth“ genannten Ortes.
- **Quellen:** `Legende_aehnlicheVorfallJaeger.docx`; `Legendenbuch.docx`; `Brief aus Grodaus.txt`; `Schrein_Texte.pdf`.
- **Probleme:** Veralteter Kreaturenjäger-/Tavernenplot, alte Ortsnamen und eine Zeitrechnung, die mit dem heutigen Jahr 126 n.B.A. teilweise weit in die Zukunft führt. Das gruppenintern verworfene Kreaturenjäger-Thema darf nicht wieder eingeführt werden.

Die Wiederbesteigung der Waidfuather Großnosn und der blutdürstige Richter von Grodaus gehören nach der Kanonentscheidung vom 5. August 2026 nicht mehr zu den ausgeschlossenen Altbeständen. Sie sind in die grundlegende Geschichte aufgenommen.

# Verbindliche Festlegungen

- Das erste freie Jahr wird als **1 n.B.A.** geführt; ein Jahr 0 n.B.A. wird nicht verwendet.
- Die Schlacht bei Hocheck wird auf den **14. März 1 n.B.A.** datiert.
- Die Freiheitserklärung folgt am überlieferten **zehnten Tag des Sommers**; eine Gleichsetzung mit dem 1. Juli wird ohne weiteren Beleg nicht vorgenommen.
- Die Entstehung der Aloyer Räterepublik wird auf den **21. Juni 1 n.B.A.** datiert.
- Die republikanische Neuordnung der Akademie wird auf den **10. September 12 n.B.A.** datiert.
- Die Wiederbesteigung der Waidfuather Großnosn im Jahr **32 n.B.A.** wird als Kanon geführt.
- Der blutdürstige Richter von Grodaus wird als von der Akademie überlieferter historischer Fall geführt.
- Für die Zeit ab 121 n.B.A. werden **Landesgeschichte** und **Aktivitäten des 84. Banners** getrennt dargestellt.
- Unbestätigte Truppenstärken des Befreiungskrieges erscheinen nicht in der öffentlichen Chronik.

# Empfohlener Umfang für Version 1

Die erste Fassung der Seite „Geschichte Aloys“ kann sämtliche oben ausgewählten Einträge enthalten, sollte sie aber in drei unterscheidbare Ebenen gliedern:

1. **Grundlegende Geschichte:** 12 große Knoten von der alten Zeitrechnung bis zur Wiederbesteigung der Großnosn.
2. **Landesrelevante Zeitgeschichte:** politische, gesellschaftliche, religiöse und wirtschaftliche Ereignisse ab 123 n.B.A.
3. **Aktivitäten des 84. Banners:** Reisen, Heerfahrten, Feste und Feldberichte ab 121 n.B.A.

In der späteren Darstellung sollten die beiden jüngeren Stränge ein- und ausblendbar sein. So bleibt die Hauptlinie verständlich, während die belegten kleineren Ereignisse trotzdem vollständig zugänglich sind.

# Quellenfazit

Der alte WorldAnvil-Zeitstrahl war deutlich zu knapp. Der Fundus trägt ohne spekulative Ergänzungen eine belastbare Geschichte von der Monarchie über Befreiung und republikanische Reform bis zur aktuellen Außenpolitik der Jahre 121 bis 126 n.B.A.

Zwischen 32 und 121 n.B.A. bleibt nach dem gegenwärtigen Quellenstand eine echte Überlieferungslücke. Der Fundus enthält für diesen Zeitraum keine weiteren zuverlässig datierten landesgeschichtlichen Ereignisse. Diese Lücke sollte auf der Seite sichtbar benannt und nicht mit erfundenen Zwischenereignissen geschlossen werden.

Besonders belastbar sind:

- Freiheitserklärung und Befreiungsüberlieferung
- Gründung und Neuordnung der Akademie
- dokumentierte Entwicklung der Räterepublik
- Ratsprotokolle des Jahres 123 n.B.A.
- veröffentlichte Aloyer-Bote-Meldungen
- freigegebene persönliche Feldberichte und ausgespielte Ereignisse ab 121 n.B.A.

Nicht übernommen werden Platzhalter und unbestätigte Zahlen aus dem Befreiungskrieg-Draft sowie sämtliche verworfenen Kreaturenjäger- und Taverne-Altbestände.
