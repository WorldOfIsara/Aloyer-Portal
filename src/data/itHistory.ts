export type ItHistoryPeriod = 'Monarchie' | 'Befreiung' | 'Frühe Republik' | 'Jüngere Chronik';

export type ItHistoryType =
  | 'Grundlegende Geschichte'
  | 'Landesgeschichte'
  | '84. Banner'
  | 'Registervermerk';

export interface ItHistoryEntry {
  id: string;
  date: string;
  period: ItHistoryPeriod;
  type: ItHistoryType;
  title: string;
  summary: string;
  details?: string[];
  link?: {
    href: string;
    label: string;
  };
}

export const itHistoryPeriods: ItHistoryPeriod[] = [
  'Monarchie',
  'Befreiung',
  'Frühe Republik',
  'Jüngere Chronik',
];

export const itHistoryEntries: ItHistoryEntry[] = [
  {
    id: 'beginn-monarchische-zeitrechnung',
    date: '1 n.W. / 1309 v.B.A.',
    period: 'Monarchie',
    type: 'Grundlegende Geschichte',
    title: 'Beginn der alten monarchischen Zeitrechnung',
    summary:
      'Mit der Errichtung der alten Königsherrschaft begann die frühere aloyische Jahreszählung. Von diesem Jahr an verzeichneten spätere Schreiber 1309 Jahre monarchischer und adeliger Herrschaft bis zur Befreiung Aloys.',
  },
  {
    id: 'gruendung-koenigliche-akademie',
    date: '556 n.W. / 753 v.B.A.',
    period: 'Monarchie',
    type: 'Grundlegende Geschichte',
    title: 'Gründung der Königlichen Aloyer Akademie',
    summary:
      'Unter der Monarchie wurde die Königliche Aloyer Akademie gegründet. Sie blieb über Jahrhunderte eine vornehmlich von Adel und vermögenden Protegés getragene Lehranstalt und wurde später zur Grundlage der republikanischen Akademie.',
    link: { href: '/it/akademie/geschichte', label: 'Zur Geschichte der Akademie' },
  },
  {
    id: 'blutduerstiger-richter',
    date: '728 n.W. / 581 v.B.A.',
    period: 'Monarchie',
    type: 'Grundlegende Geschichte',
    title: 'Der blutdürstige Richter von Grodaus',
    summary:
      'In Grodaus wirkte ein Richter, der zunächst als gewissenhafter Amtsträger galt, dann aber zunehmend Gefallen an Todesurteilen und grausamen Hinrichtungen fand. Als die Verbrechen zurückgingen, soll er selbst des Nachts Menschen verfolgt und ermordet haben.',
    details: [
      'Die Akademie führt den Fall als abschreckende, legendenhaft überlieferte Kunde über ungebremste richterliche Gewalt.',
    ],
    link: { href: '/it/recht/rechtsfaelle', label: 'Zu den bekannten Rechtsfällen' },
  },
  {
    id: 'beginn-erhebungen',
    date: '6 v.B.A.',
    period: 'Befreiung',
    type: 'Grundlegende Geschichte',
    title: 'Beginn der Erhebungen gegen die Adelsherrschaft',
    summary:
      'Aus Demonstrationen in den größeren Orten entstanden örtliche Bauernaufstände. Aufständische Haufen griffen kleinere Garnisonen und adelige Verbände an, während König Eberwin III. den Heerbann ausrief und die Adeligen zur Lehnstreue verpflichtete.',
  },
  {
    id: 'emmerich-schliesst-sich-an',
    date: 'Zwischen 6 und 1 v.B.A.',
    period: 'Befreiung',
    type: 'Grundlegende Geschichte',
    title: 'Emmerich von Lewenstein schließt sich der Erhebung an',
    summary:
      'Emmerich von Lewenstein verweigerte Eberwin III. die Heerfolge, stellte sich auf die Seite der Bauern und Handwerker und übernahm die Führung der Revolutionsarmee. Er vereinigte die zerstreuten Haufen unter einer gemeinsamen Ordnung und ließ sie heimlich bei Waidfuath ausbilden.',
  },
  {
    id: 'schlacht-hocheck',
    date: '14. März 1 n.B.A.',
    period: 'Befreiung',
    type: 'Grundlegende Geschichte',
    title: 'Schlacht bei Hocheck',
    summary:
      'Vor Hocheck traf die vereinte Revolutionsarmee auf das königliche Heer. Regen schwächte die Armbrustschützen, unkoordinierte Reiterangriffe brachen im Pfeilhagel zusammen und die königlichen Truppen flohen schließlich vom Feld. Die Schlacht entschied den Befreiungskrieg zugunsten der Aufständischen.',
    link: { href: '/it/rat/befreiung', label: 'Zur Befreiung Aloys' },
  },
  {
    id: 'hochecker-bluttat',
    date: 'Nach dem 14. März 1 n.B.A.',
    period: 'Befreiung',
    type: 'Grundlegende Geschichte',
    title: 'Sturm auf Hocheck und Hochecker Bluttat',
    summary:
      'Die Aufständischen nahmen die kaum noch verteidigte Burg Hocheck, plünderten sie und legten sie in Brand. König Eberwin III. und seine Getreuen wurden nach einem hastigen Tribunal durch die Spieße gerichtet.',
    details: [
      'Königin und Prinz blieben am Leben und wurden der Überlieferung nach auf einem Mistwagen nach Grodaus gebracht.',
      'Die Akademie führt die Tat als Hochecker Bluttat und als Warnung vor ungeordneter Rache.',
    ],
    link: { href: '/it/recht/rechtsfaelle', label: 'Zu den bekannten Rechtsfällen' },
  },
  {
    id: 'abschaffung-adel',
    date: '1 n.B.A.',
    period: 'Befreiung',
    type: 'Grundlegende Geschichte',
    title: 'Abschaffung des Adels und Ultimatum an die alten Herren',
    summary:
      'Um weiteres Blutvergießen zu verhindern, wurde der Adel als Stand abgeschafft. Ehemalige Herren durften als rechtlich gleiche Bürger in Aloy bleiben oder das Land verlassen. Ein großer Teil nahm die neue Ordnung an; andere flohen oder verloren ihre frühere Stellung.',
    link: { href: '/it/rat/fehlender-adel', label: 'Vom fehlenden Adel' },
  },
  {
    id: 'freiheitserklaerung',
    date: 'Zehnter Tag des Sommers 1 n.B.A.',
    period: 'Befreiung',
    type: 'Grundlegende Geschichte',
    title: 'Freiheitserklärung zu Grodaus',
    summary:
      'Zu Grodaus wurde die Freiheitserklärung verkündet. Sie erklärte alle Bürger an Recht und Pflicht für gleich, schaffte den Adel ab, begründete die Ratsordnung und hielt Bürgerrecht, Glauben, Landesverteidigung und das Recht zum Waffentragen fest. Abschriften wurden im Land verbreitet.',
    link: { href: '/it/rat/freiheitserklaerung', label: 'Die Freiheitserklärung lesen' },
  },
  {
    id: 'entstehung-raeterepublik',
    date: '21. Juni 1 n.B.A.',
    period: 'Befreiung',
    type: 'Grundlegende Geschichte',
    title: 'Entstehung der Aloyer Räterepublik',
    summary:
      'Emmerich von Lewenstein und einflussreiche Bürger schufen nach der Befreiung die Grundlagen der Räterepublik. Königliche und erbliche Herrschaft wurden durch Rat, Städte, Zünfte, Akademie und Glauben ersetzt.',
    link: { href: '/it/rat/aloyer-rat', label: 'Zum Aloyer Rat' },
  },
  {
    id: 'neuordnung-akademie',
    date: '10. September 12 n.B.A.',
    period: 'Frühe Republik',
    type: 'Grundlegende Geschichte',
    title: 'Republikanische Neuordnung der Akademie',
    summary:
      'Der Rat wandelte die Königliche Aloyer Akademie mit großer Mehrheit in die Aloyer Akademie des wahren Glaubens der Drei um. Handwerk und Handel wurden eingegliedert, Kasernen und Soldatenausbildung unter akademische Verwaltung gestellt und der Zugang zur Lehre für das ganze Volk geöffnet.',
    link: { href: '/it/akademie/geschichte', label: 'Zur Geschichte der Akademie' },
  },
  {
    id: 'grossnosn',
    date: '32 n.B.A.',
    period: 'Frühe Republik',
    type: 'Grundlegende Geschichte',
    title: 'Wiederbesteigung der Waidfuather Großnosn',
    summary:
      'Die Waidfuather Großnosn wurde erstmals wieder bestiegen und in den neueren Archiven beschrieben. Der Berg nordwestlich Aloys wurde zum Gegenstand eines Streits mit Morvon. Da keine Seite aus seinem Besitz einen hinreichenden strategischen Vorteil gewann, wurde er keinem der beiden Länder dauerhaft zugesprochen.',
  },
  {
    id: 'registerluecke',
    date: '33 bis 120 n.B.A.',
    period: 'Frühe Republik',
    type: 'Registervermerk',
    title: 'Noch nicht erschlossene Registerjahre',
    summary:
      'Aus diesen Jahrzehnten sind bislang keine belastbar datierten landesgeschichtlichen Registereinträge erschlossen. Die Akademie lässt diese Stelle offen, statt die Lücke mit ungesicherter Kunde zu füllen.',
  },
  {
    id: 'expeditionen-alfalter',
    date: '121 n.B.A.',
    period: 'Jüngere Chronik',
    type: '84. Banner',
    title: 'Erste belegte Expeditionen nach Alfalter',
    summary:
      'Aloyer Späher erkundeten Wege und politische Verhältnisse Alfalters. Ihre Berichte beschrieben Groß Heigold, Wegzölle, Konflikte der Stadtstaaten und mögliche Routen nach Drachengard.',
    link: { href: '/it/berichte', label: 'Zu den überlieferten Berichten' },
  },
  {
    id: 'freiheitsfest-122',
    date: '122 n.B.A.',
    period: 'Jüngere Chronik',
    type: '84. Banner',
    title: 'Das 84. Banner richtet das Freiheitsfest aus',
    summary:
      'Das Banner lud Freunde und Verbündete zum Freiheitsfest. Historische Spiele erinnerten an Befreiung, Hocheck und Gleichstellung und machten das Fest zu einem Ort auswärtiger Begegnung.',
  },
  {
    id: 'heinrichsfest-122',
    date: '122 n.B.A.',
    period: 'Jüngere Chronik',
    type: '84. Banner',
    title: 'Teilnahme am drachengarder Heinrichsfest',
    summary:
      'Das Banner nahm am Heinrichsfest teil und vertiefte Kontakte zu Drachengard, Neu-Boffeld, Komarn, dem Greifenorden und weiteren Gruppen der Splitterlande.',
  },
  {
    id: 'tod-bernd-brottinger',
    date: 'Ende Februar 123 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: 'Tod Bernd Brottingers',
    summary:
      'Das langjährige Ratsmitglied und der Erfinder des Kastenbrots starb im Alter von 87 Jahren. Über 15 Jahre hatte er der Republik als Vertreter der Bäckerszunft gedient.',
  },
  {
    id: 'limbarfest-123',
    date: 'Frühlingsbeginn 123 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: 'Limbarfest zu Grodaus',
    summary:
      'Das Paar der Fruchtbarkeit zog durch Grodaus zur Limbargrotte und beging dort den überlieferten Frühlingsritus.',
  },
  {
    id: 'kronenfieber-ende',
    date: '123 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: 'Ende der Kronenfieber-Maßnahmen',
    summary:
      'Der Rat hob die letzten Maßnahmen gegen das Kronenfieber auf. Masken in Postkutschen und Fieberüberprüfungen entfielen; Ausgangsbeschränkungen waren bereits im Vorjahr beendet worden.',
  },
  {
    id: 'flottenverband-piraten',
    date: 'Lewensteiner Tag 123 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: 'Sieg des 3. Flottenverbandes über Piraten',
    summary:
      'Der 3. Aloyer Flottenverband besiegte Piraten im Tiafunter Meer und machte die durch Kronenfieber und Überfälle belasteten Handelswege wieder sicherer.',
  },
  {
    id: 'waidfuather-buergermeister',
    date: '123 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: 'Waidfuather Bürgermeister ermordet',
    summary:
      'Nach der gewaltsamen Entleibung des ersten Bürgermeisters empfahl der Rat eine Verstärkung der Wache und nahm den zweiten Bürgermeister bis zu Neuwahlen als Vertretung auf.',
  },
  {
    id: 'steuersenkung-freiheitsfest',
    date: '123 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: 'Steuersenkung zum Freiheitsfest',
    summary:
      'Der Rat senkte die Steuern auf Wein und Branntwein für die Dauer des Freiheitsfestes um ein Drittel.',
  },
  {
    id: 'ratssitzung-526',
    date: '15. Juli 123 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: '526. Ratssitzung und außenpolitische Entscheidungen',
    summary:
      'Der Rat beriet Berichte aus Handel, Heer, Landwirtschaft und Städten. In diesem Umfeld wurden Aloys Neutralität im Krieg gegen die Otzlande, eine begrenzte Expedition nach Ardalon, Planungen für Südalfalter und die Beziehungen zu Komarn behandelt.',
    details: ['Südalfalter blieb Planung; eine Annexion ist nicht bestätigt.'],
  },
  {
    id: 'freiheitsfest-123',
    date: '123 n.B.A.',
    period: 'Jüngere Chronik',
    type: '84. Banner',
    title: 'Zweites öffentliches Freiheitsfest des 84. Banners',
    summary:
      'Das Banner lud erneut Gesandte und Freunde ein. Traditionelle Spiele vermittelten die republikanische Geschichte und vertieften diplomatische Beziehungen.',
  },
  {
    id: 'hirtenfest-boffeld',
    date: '123 n.B.A.',
    period: 'Jüngere Chronik',
    type: '84. Banner',
    title: 'Hirtenfest, Angriff und Unabhängigkeit Boffelds',
    summary:
      'Beim Hirtenfest unterstützten Aloyer Söldner Neu-Boffeld und Komarn gegen einen Angriff. Nach dem Fest erklärte sich Neu-Boffeld mit Drachengards Segen zum unabhängigen Fürstentum Boffeld.',
  },
  {
    id: 'otzlande-expedition',
    date: '123 n.B.A.',
    period: 'Jüngere Chronik',
    type: '84. Banner',
    title: 'Expedition in die Otzlande',
    summary:
      'Eine aloyische Expedition drang in die Otzlande vor, erstritt Raubgut und eine Geisel zurück und kehrte nach schweren Gefechten rechtzeitig zum Freiheitsfest heim.',
    details: ['Der Eintrag folgt einem zugeschriebenen Feldbericht und ist keine allwissende Darstellung.'],
    link: { href: '/it/berichte', label: 'Zum überlieferten Feldbericht' },
  },
  {
    id: 'hortumnacht-124',
    date: '124 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: 'Hortumnacht',
    summary:
      'Ein überlieferter Gruß beschreibt die Hortumnacht mit Licht für Limbar, immergrünem Hortumbaum, Schmuck für Miram und einem Becher heißen Weins auf Barsinger.',
  },
  {
    id: 'kronmark-beziehungen',
    date: '125 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: 'Erneute Beziehungen zur Kronmark',
    summary:
      'Aloy und die Kronmark nahmen wieder offizielle diplomatische und wirtschaftliche Beziehungen auf. Gespräche betrafen Handelsrouten, gegenseitige Unterstützung, kulturellen Austausch und Bündnisrunden der Splitterlande.',
  },
  {
    id: 'hochzeit-kronmark',
    date: '125 n.B.A.',
    period: 'Jüngere Chronik',
    type: '84. Banner',
    title: 'Hochzeit in der Kronmark und Kampf gegen die Drei Münzen',
    summary:
      'Eine Delegation besuchte die Hochzeit Heinrichs von Grimmerthann und Silvas von Rosenschlag. Nach einem Raub im Gasthaus „Zum Fuchsbau“ schlugen Aloyer und Schwarze Sau die Söldnergruppe Drei Münzen.',
    details: ['Der Eintrag folgt dem persönlichen Bericht Lars Spalters.'],
  },
  {
    id: 'komarn-alfalter-krieg',
    date: '126 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: 'Krieg Komarns gegen Alfalter',
    summary:
      'Komarn erklärte Alfalter den Krieg, worauf sich die Kronmark auf die Seite Alfalters stellte. Aloy blieb nach dem vorliegenden Feldbrief offiziell neutral, während das bereits von der Kronmark besoldete 84. Banner in deren Aufgebot stand.',
    details: ['Die Neutralität ist als berichtete politische Haltung und nicht als aufgefundener Ratsbeschluss verzeichnet.'],
  },
  {
    id: 'vormberger-stollen',
    date: '126 n.B.A.',
    period: 'Jüngere Chronik',
    type: 'Landesgeschichte',
    title: 'Einsturz im Vormberger Stollen',
    summary:
      'Drei Männer starben bei der unerlaubten Suche nach Restadern in einem gesperrten Seitenstollen bei Vormberg.',
  },
];
