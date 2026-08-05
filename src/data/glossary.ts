export interface GlossaryLink {
  href: string;
  title: string;
}

export interface GlossaryEntry {
  slug: string;
  term: string;
  aliases?: string[];
  definition: string;
  links: GlossaryLink[];
}

export const glossaryEntries: GlossaryEntry[] = [
  {
    slug: '84-banner-1-lanze',
    term: '84. Banner, 1. Lanze',
    aliases: ['84. Banner', 'Erste Lanze'],
    definition:
      'Eine konkret benannte aloyische Söldnereinheit und Teil der überlieferten Bannerordnung.',
    links: [
      { href: '/it/soeldner/84-banner-1-lanze', title: '84. Banner, 1. Lanze' },
      { href: '/it/soeldner/reisende-banner', title: 'Die reisenden Banner' },
      { href: '/it/soeldner/hauptleute-banner', title: 'Bekannte Hauptleute und Banner' },
    ],
  },
  {
    slug: 'akademie-aloys',
    term: 'Akademie Aloys',
    aliases: ['Aloyer Akademie', 'Akademie'],
    definition:
      'Republikanische Lehr-, Prüfungs- und Verwaltungsinstitution für Wissenschaft, Glaube, Militär, Handwerk und Handel.',
    links: [
      { href: '/it/akademie', title: 'Die Akademie' },
      { href: '/it/akademie/geschichte', title: 'Geschichte der Akademie' },
      { href: '/it/akademie/vier-zweige', title: 'Die vier Zweige der Akademie' },
      {
        href: '/it/akademie/wissenschaft-gelehrsamkeit',
        title: 'Wissenschaft und Gelehrsamkeit',
      },
    ],
  },
  {
    slug: 'aloy',
    term: 'Aloy',
    aliases: ['Freie Republik Aloy', 'Republik Aloy'],
    definition:
      'Freie, vom Rat regierte Republik und Heimat der Aloyer Söldner, deren Land und Leute in diesen Registern verzeichnet werden.',
    links: [
      { href: '/it/vorrede', title: 'Vorrede' },
      { href: '/it/aloy', title: 'Das Land Aloy' },
      { href: '/it/rat', title: 'Republik & Rat' },
      { href: '/it/umland/splitterlande', title: 'Aloy in den Splitterlanden' },
    ],
  },
  {
    slug: 'aloyer-rat',
    term: 'Aloyer Rat',
    aliases: ['Rat der Besten', 'Rat'],
    definition:
      'Oberste politische Körperschaft der Republik, in der Städte, Zünfte und weitere Stimmen Aloys vertreten sind.',
    links: [
      { href: '/it/rat', title: 'Republik & Rat' },
      { href: '/it/rat/aloyer-rat', title: 'Der Aloyer Rat' },
      { href: '/it/rat/staedte-zuenfte-stimmen', title: 'Städte, Zünfte und Stimmen' },
      { href: '/it/rat/wahlen-aemter', title: 'Wahlen und Ämter' },
      { href: '/it/rat/ratsarbeit-heute', title: 'Ratsarbeit heute' },
    ],
  },
  {
    slug: 'befreiung-aloys',
    term: 'Befreiung Aloys',
    aliases: ['Befreiung', 'B.A.'],
    definition:
      'Der politische Umbruch, mit dem die alte Adelsherrschaft endete und die Grundlage der freien Republik entstand.',
    links: [
      { href: '/it/rat/geschichte-der-republik', title: 'Geschichte der Republik' },
      { href: '/it/akademie/geschichte', title: 'Geschichte der Akademie' },
    ],
  },
  {
    slug: 'berichte',
    term: 'Berichte',
    aliases: ['Chroniken', 'Registereinträge'],
    definition:
      'Datierte Aufzeichnungen über Ereignisse, Reisen, Heerlagen und andere bestätigte Begebenheiten.',
    links: [
      { href: '/it/berichte', title: 'Berichte' },
      { href: '/it/soeldner/reisen-heerlager', title: 'Berichte von Reisen und Heerlagern' },
    ],
  },
  {
    slug: 'buettel',
    term: 'Büttel',
    aliases: ['Gerichtsbüttel'],
    definition:
      'Amtspersonen, die richterliche und obrigkeitliche Anordnungen vollziehen und die öffentliche Ordnung unterstützen.',
    links: [
      { href: '/it/recht/traeger-der-rechtsordnung', title: 'Träger der Rechtsordnung' },
      { href: '/it/recht/gerichtsordnung', title: 'Aloyer Gerichtsordnung' },
      { href: '/it/recht/strafen-bussen', title: 'Strafen und Bußen' },
    ],
  },
  {
    slug: 'dkwddk',
    term: 'DKWDDK',
    aliases: ['Du kannst, was du darstellen kannst'],
    definition:
      'Außerhalb der Register gebräuchliche Lehre, nach der allein als vollbracht gelten soll, was für die Anwesenden glaubhaft dargestellt wurde.',
    links: [
      { href: '/ot/willkommen#regelwerk', title: 'Regelwerk' },
      { href: '/ot/willkommen#wer-wir-sind', title: 'Wer wir sind' },
    ],
  },
  {
    slug: 'die-drei',
    term: 'Die Drei',
    aliases: ['Dreiglaube', 'Glaube an die Drei'],
    definition:
      'Die drei zentralen Gottheiten des aloyischen Glaubens: Limbar der Weiße, Miram die Graue und Hortum der Schwarze.',
    links: [
      { href: '/it/glaube', title: 'Glaube & Götter' },
      { href: '/it/glaube/die-drei', title: 'Die Drei' },
      { href: '/it/akademie/religion-glaube', title: 'Religion und Glaube' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
    ],
  },
  {
    slug: 'freiheitserklaerung',
    term: 'Freiheitserklärung',
    aliases: ['Aloyer Freiheitserklärung'],
    definition:
      'Grundlegende Erklärung der neuen republikanischen Ordnung nach der Befreiung Aloys.',
    links: [
      { href: '/it/rat/geschichte-der-republik', title: 'Geschichte der Republik' },
    ],
  },
  {
    slug: 'grodaus',
    term: 'Grodaus',
    aliases: ['Hauptstadt Grodaus'],
    definition:
      'Hauptstadt der Republik und wichtiger Sitz von Rat, Verwaltung und akademischen Einrichtungen.',
    links: [
      { href: '/it/aloy/grodaus', title: 'Grodaus, Hauptstadt der Republik' },
      { href: '/it/rat/aloyer-rat', title: 'Der Aloyer Rat' },
      { href: '/it/aloy/handel', title: 'Handel, Münze und Waren' },
    ],
  },
  {
    slug: 'haubentaucher',
    term: 'Haubentaucher',
    aliases: ['Aloyer Haubentaucher'],
    definition:
      'Beiname einer reisenden Gemeinschaft aloyischer Söldner, Trossleute und Begleiter, die unter dem 84. Banner in den Splitterlanden auftritt.',
    links: [
      { href: '/it/soeldner/84-banner-1-lanze', title: '84. Banner, 1. Lanze' },
      { href: '/it/soeldner', title: 'Söldner' },
      { href: '/ot/willkommen#wer-wir-sind', title: 'Wer wir sind' },
    ],
  },
  {
    slug: 'hortum',
    term: 'Hortum',
    aliases: ['Hortum der Schwarze', 'der Schwarze'],
    definition:
      'Eine der Drei und in der aloyischen Glaubensordnung mit Tod, Ende und abschließender Ordnung verbunden.',
    links: [
      { href: '/it/glaube/die-drei#hortum', title: 'Die Drei: Hortum' },
      { href: '/it/glaube/bestattung-seelenurteil', title: 'Bestattung, Tod und Seelenurteil' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
    ],
  },
  {
    slug: 'limbar',
    term: 'Limbar',
    aliases: ['Limbar der Weiße', 'der Weiße'],
    definition:
      'Eine der Drei und in der aloyischen Glaubensordnung mit Licht, Heil und bewahrender Ordnung verbunden.',
    links: [
      { href: '/it/glaube/die-drei#limbar', title: 'Die Drei: Limbar' },
      { href: '/it/glaube/priester-tempel', title: 'Priester und Tempel' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
    ],
  },
  {
    slug: 'magie',
    term: 'Magie',
    aliases: ['Aloyer Magie', 'geringe Magie'],
    definition:
      'Seltene und schwer zugängliche Kraft, die in Aloy mit Vorsicht gelehrt, geprüft und erforscht wird.',
    links: [
      { href: '/it/akademie/wissenschaft-gelehrsamkeit', title: 'Wissenschaft und Gelehrsamkeit' },
      { href: '/it/akademie/vier-zweige', title: 'Die vier Zweige der Akademie' },
      { href: '/ot/willkommen#hintergrund', title: 'Hintergrund' },
    ],
  },
  {
    slug: 'malefizgericht',
    term: 'Malefizgericht',
    aliases: ['Malefiz', 'Malefizverfahren'],
    definition:
      'Gerichtliche Ordnung für besonders schwere Vergehen und entsprechend gewichtige Verfahren.',
    links: [
      {
        href: '/it/recht/malefizgericht-vergehen',
        title: 'Malefizgericht und schwere Vergehen',
      },
      { href: '/it/recht/gerichtsordnung', title: 'Aloyer Gerichtsordnung' },
      { href: '/it/recht/rechtsfaelle', title: 'Bekannte Rechtsfälle' },
    ],
  },
  {
    slug: 'miram',
    term: 'Miram',
    aliases: ['Miram die Graue', 'die Graue'],
    definition:
      'Eine der Drei und in der aloyischen Glaubensordnung mit Maß, Ausgleich und abwägender Urteilskraft verbunden.',
    links: [
      { href: '/it/glaube/die-drei#miram', title: 'Die Drei: Miram' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
    ],
  },
  {
    slug: 'nach-vor-befreiung',
    term: 'n.B.A. / v.B.A.',
    aliases: ['nach Befreiung Aloys', 'vor Befreiung Aloys', 'Zeitrechnung'],
    definition:
      'Aloyer Zeitangaben für Jahre nach beziehungsweise vor der Befreiung Aloys.',
    links: [
      { href: '/it/rat/geschichte-der-republik', title: 'Geschichte der Republik' },
      { href: '/it/akademie/geschichte', title: 'Geschichte der Akademie' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'ohm',
    term: 'Ohm',
    aliases: ['Stadt Ohm'],
    definition:
      'Aloyer Ort, der besonders durch militärische Ausbildung und die Rote Akademie geprägt ist.',
    links: [
      { href: '/it/aloy/ohm-akademie', title: 'Ohm und die rote Akademie' },
      { href: '/it/akademie/rote-akademie-ohm', title: 'Die rote Akademie zu Ohm' },
      { href: '/it/akademie/ausbildung-kriegswesen', title: 'Ausbildung und Kriegswesen' },
    ],
  },
  {
    slug: 'priesterschaft',
    term: 'Priesterschaft',
    aliases: ['Priester', 'Akolythen', 'Novizen'],
    definition:
      'Die religiösen Lehr- und Amtsträger Aloys, die den Glauben auslegen und begleiten, ohne weltliche Herrschaft auszuüben.',
    links: [
      { href: '/it/glaube/priester-tempel', title: 'Priester und Tempel' },
      { href: '/it/akademie/religion-glaube', title: 'Religion und Glaube' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
    ],
  },
  {
    slug: 'raeterepublik',
    term: 'Räterepublik',
    aliases: ['Republik', 'republikanische Ordnung'],
    definition:
      'Staatsform Aloys, in der gewählte und entsandte Stimmen im Rat statt eines erblichen Adels entscheiden.',
    links: [
      { href: '/it/rat', title: 'Republik & Rat' },
      { href: '/it/rat/aloyer-rat', title: 'Der Aloyer Rat' },
      { href: '/it/rat/staedte-zuenfte-stimmen', title: 'Städte, Zünfte und Stimmen' },
      { href: '/it/rat/geschichte-der-republik', title: 'Geschichte der Republik' },
    ],
  },
  {
    slug: 'reisende-banner',
    term: 'Reisende Banner',
    aliases: ['Banner', 'Söldnerbanner'],
    definition:
      'Geordnete aloyische Söldnereinheiten, die für Dienst, Handel und Kontakte außerhalb Aloys reisen.',
    links: [
      { href: '/it/soeldner/reisende-banner', title: 'Die reisenden Banner' },
      { href: '/it/soeldner/soeldnerwesen', title: 'Vom Söldnerwesen Aloys' },
      { href: '/it/soeldner/im-ausland', title: 'Söldner im Ausland' },
      { href: '/it/umland/handel-soeldnervertraege', title: 'Handel und Söldnerverträge' },
    ],
  },
  {
    slug: 'rote-akademie',
    term: 'Rote Akademie',
    aliases: ['Rote Akademie zu Ohm'],
    definition:
      'Die eng mit militärischer Ausbildung und aloyischer Wehrlehre verbundene Akademiestätte zu Ohm.',
    links: [
      { href: '/it/akademie/rote-akademie-ohm', title: 'Die rote Akademie zu Ohm' },
      { href: '/it/aloy/ohm-akademie', title: 'Ohm und die rote Akademie' },
      { href: '/it/akademie/ausbildung-kriegswesen', title: 'Ausbildung und Kriegswesen' },
    ],
  },
  {
    slug: 'schultheiss',
    term: 'Schultheiß',
    aliases: ['Schultheiss'],
    definition:
      'Amtsträger der örtlichen Rechts- und Verwaltungsordnung mit richterlichen oder ordnenden Aufgaben.',
    links: [
      { href: '/it/recht/traeger-der-rechtsordnung', title: 'Träger der Rechtsordnung' },
      { href: '/it/recht/gerichtsordnung', title: 'Aloyer Gerichtsordnung' },
    ],
  },
  {
    slug: 'schwertgesellen',
    term: 'Schwertgesellen',
    aliases: ['Schwertgeselle'],
    definition:
      'Akademisch geprägte Kämpfer, deren Ausbildung Kriegskunst mit Disziplin, Haltung und Verantwortung verbindet.',
    links: [
      { href: '/it/akademie', title: 'Die Akademie' },
      { href: '/it/akademie/ausbildung-kriegswesen', title: 'Ausbildung und Kriegswesen' },
    ],
  },
  {
    slug: 'soeldnerwesen',
    term: 'Söldnerwesen',
    aliases: ['Söldnerdienst', 'Söldner'],
    definition:
      'Die aloyische Ordnung von Ausbildung, Auftrag, Sold, Dienst und Verhalten reisender Kämpfer.',
    links: [
      { href: '/it/soeldner', title: 'Söldner' },
      { href: '/it/soeldner/soeldnerwesen', title: 'Vom Söldnerwesen Aloys' },
      { href: '/it/soeldner/auftrag-sold-dienst', title: 'Auftrag, Sold und Dienst' },
      { href: '/it/soeldner/lagerordnung', title: 'Lagerordnung' },
      { href: '/it/soeldner/kriegsbrauch-feld', title: 'Kriegsbrauch und Verhalten im Feld' },
    ],
  },
  {
    slug: 'soeldnervertrag',
    term: 'Söldnervertrag',
    aliases: ['Söldnerverträge', 'Dienstvertrag'],
    definition:
      'Vereinbarung über Auftrag, Sold, Pflichten und Grenzen eines aloyischen Söldnerdienstes.',
    links: [
      { href: '/it/soeldner/auftrag-sold-dienst', title: 'Auftrag, Sold und Dienst' },
      { href: '/it/soeldner/im-ausland', title: 'Söldner im Ausland' },
      { href: '/it/umland/handel-soeldnervertraege', title: 'Handel und Söldnerverträge' },
    ],
  },
  {
    slug: 'splitterlande',
    term: 'Splitterlande',
    aliases: ['Aloyer Umland'],
    definition:
      'Sammelname für die Länder und Herrschaften jenseits Aloys, mit denen die Republik durch Reise, Handel, Krieg und Gesandtschaft verbunden ist.',
    links: [
      { href: '/it/umland', title: 'Aloyer Umland' },
      { href: '/it/umland/splitterlande', title: 'Aloy in den Splitterlanden' },
      { href: '/it/umland/nachbarn', title: 'Bekannte Nachbarn' },
      { href: '/it/umland/karten-reisewege', title: 'Karten und Reisewege' },
    ],
  },
  {
    slug: 'tiafunt',
    term: 'Tiafunt',
    aliases: ['Hafenstadt Tiafunt'],
    definition:
      'Aloyer Hafenstadt und wichtiges Tor für Handel, Reisen und Kontakte über das Meer.',
    links: [
      { href: '/it/aloy/tiafunt', title: 'Tiafunt, Hafen und Tor zur Welt' },
      { href: '/it/aloy/handel', title: 'Handel, Münze und Waren' },
      { href: '/it/umland/karten-reisewege', title: 'Karten und Reisewege' },
    ],
  },
  {
    slug: 'ultima',
    term: 'Ultima',
    aliases: ['Ultima und die Wahrheit'],
    definition:
      'Gottheit, deren Anrufung und Deutung in Aloy besonders mit Wahrheit und Recht verbunden wird.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Weitere Götter' },
      { href: '/it/recht/ultima-wahrheit', title: 'Ultima und die Wahrheit' },
      { href: '/it/recht/gerichtsordnung', title: 'Aloyer Gerichtsordnung' },
    ],
  },
  {
    slug: 'umseck',
    term: 'Umseck',
    aliases: ['Stadt Umseck'],
    definition:
      'Aloyer Stadt, die in den Landesregistern gemeinsam mit dem benachbarten Waidfuath geführt wird.',
    links: [
      { href: '/it/aloy/umseck-waidfuath', title: 'Umseck und Waidfuath' },
      { href: '/it/aloy', title: 'Das Land Aloy' },
      { href: '/it/aloy/handel', title: 'Handel, Münze und Waren' },
    ],
  },
  {
    slug: 'vormberg',
    term: 'Vormberg',
    aliases: ['Stadt Vormberg'],
    definition:
      'Aloyer Ort, der besonders mit Bergbau, Minen und handwerklicher Arbeit verbunden ist.',
    links: [
      { href: '/it/aloy/vormberg', title: 'Vormberg, Minen und Handwerk' },
      { href: '/it/akademie/handwerk-handel', title: 'Handwerk und Handel' },
      { href: '/it/volk/zunefte-gewerbe', title: 'Zünfte und ehrbare Gewerbe' },
    ],
  },
  {
    slug: 'waidfuath',
    term: 'Waidfuath',
    aliases: ['Stadt Waidfuath'],
    definition:
      'Aloyer Stadt, die in älteren, inzwischen berichtigten Abschriften noch unter dem Namen Weitfurth erscheint.',
    links: [
      { href: '/it/aloy/umseck-waidfuath', title: 'Umseck und Waidfuath' },
      { href: '/it/aloy', title: 'Das Land Aloy' },
      { href: '/it/aloy/handel', title: 'Handel, Münze und Waren' },
    ],
  },
  {
    slug: 'zunft',
    term: 'Zunft',
    aliases: ['Zünfte', 'ehrbare Gewerbe'],
    definition:
      'Geordneter Zusammenschluss eines Gewerbes, der Ausbildung, Qualität, Interessen und politische Stimme mitprägt.',
    links: [
      { href: '/it/volk/zunefte-gewerbe', title: 'Zünfte und ehrbare Gewerbe' },
      { href: '/it/rat/staedte-zuenfte-stimmen', title: 'Städte, Zünfte und Stimmen' },
      { href: '/it/akademie/handwerk-handel', title: 'Handwerk und Handel' },
      { href: '/it/volk/bauern-handwerker-buerger', title: 'Bauern, Handwerker und Bürger' },
    ],
  },
  {
    slug: '33-regiment',
    term: '33. Regiment',
    aliases: ['Dreiunddreißigstes Regiment'],
    definition:
      'Aloyischer Heeresverband, dessen wechselnde Aufgaben und Umgliederungen in den militärischen Registern überliefert sind.',
    links: [
      { href: '/it/soeldner/soeldnerwesen', title: 'Vom Söldnerwesen Aloys' },
      { href: '/it/soeldner/hauptleute-banner', title: 'Bekannte Hauptleute und Banner' },
      { href: '/it/soeldner/84-banner-1-lanze', title: '84. Banner, 1. Lanze' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'akademiezweige',
    term: 'Vier Zweige der Akademie',
    aliases: [
      'Blauer Zweig',
      'Grüner Zweig',
      'Roter Zweig',
      'Brauner Zweig',
      'Akademiezweige',
    ],
    definition:
      'Die farblich geordneten Hauptbereiche Wissenschaft und Magie, Religion und Glaube, Militär und Krieg sowie Handwerk und Handel.',
    links: [
      { href: '/it/akademie/vier-zweige', title: 'Die vier Zweige der Akademie' },
      { href: '/it/akademie/wissenschaft-gelehrsamkeit', title: 'Wissenschaft und Gelehrsamkeit' },
      { href: '/it/akademie/religion-glaube', title: 'Religion und Glaube' },
      { href: '/it/akademie/ausbildung-kriegswesen', title: 'Ausbildung und Kriegswesen' },
      { href: '/it/akademie/handwerk-handel', title: 'Handwerk und Handel' },
    ],
  },
  {
    slug: 'aloyer-gebirgsmarine',
    term: 'Aloyer Gebirgsmarine',
    aliases: ['Gebirgsmarine', 'Aloyer Marine', '3. Aloyer Flottenverband'],
    definition:
      'Unter diesem Namen führen die Register die aloyischen Seestreitkräfte, deren Schiffe, Vorräte und Einsätze vornehmlich mit Tiafunt verbunden sind.',
    links: [
      { href: '/it/aloy/tiafunt', title: 'Tiafunt, Hafen und Tor zur Welt' },
      { href: '/it/akademie/ausbildung-kriegswesen', title: 'Ausbildung und Kriegswesen' },
      { href: '/it/soeldner/hauptleute-banner', title: 'Bekannte Hauptleute und Banner' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'aloyer-muenzordnung',
    term: 'Aloyer Münzordnung',
    aliases: ['Münzordnung', 'Silber', 'Kupfer', 'aloyische Münze'],
    definition:
      'Geordnete Verwendung von Münzwerten, insbesondere Silber und Kupfer, für amtliche Zahlungen und den Handel der Republik.',
    links: [
      { href: '/it/aloy/handel', title: 'Handel, Münze und Waren' },
      { href: '/it/akademie/handwerk-handel', title: 'Handwerk und Handel' },
      { href: '/it/umland/handel-soeldnervertraege', title: 'Handel und Söldnerverträge' },
    ],
  },
  {
    slug: 'anruhn',
    term: 'Anruhn',
    aliases: [],
    definition:
      'Auswärtiger Herrschaftsbereich, mit dessen Abgesandten Aloy Gespräche über Handel und die Anlage eines Hafens führte.',
    links: [
      { href: '/it/umland/splitterlande', title: 'Aloy in den Splitterlanden' },
      { href: '/it/umland/diplomatie-beziehungen', title: 'Diplomatie und Beziehungen' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'articulusbrief',
    term: 'Articulusbrief',
    aliases: ['Artikelbrief', 'Kriegsartikel'],
    definition:
      'Schriftliche Grundlage der militärischen Lager- und Dienstordnung, auf die sich die Vorschriften des 84. Banners beziehen.',
    links: [
      { href: '/it/soeldner/lagerordnung', title: 'Lagerordnung' },
      { href: '/it/soeldner/kriegsbrauch-feld', title: 'Kriegsbrauch und Verhalten im Feld' },
      { href: '/it/soeldner/auftrag-sold-dienst', title: 'Auftrag, Sold und Dienst' },
    ],
  },
  {
    slug: 'asar',
    term: 'Asar',
    aliases: ['Asar der Hexer'],
    definition:
      'Seeliger der Zauberei und Magie. Der Akademie liegen zu seiner Herkunft und seiner Ordnung bislang nur wenige verlässliche Schriften vor.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/akademie/wissenschaft-gelehrsamkeit', title: 'Wissenschaft und Gelehrsamkeit' },
    ],
  },
  {
    slug: 'august-stierhammer',
    term: 'August Stierhammer',
    aliases: ['Obrist Stierhammer'],
    definition:
      'Aloyischer Obrist, dessen Name in den Heeresregistern vornehmlich beim 33. Regiment geführt wird.',
    links: [
      { href: '/it/soeldner/soeldnerwesen', title: 'Vom Söldnerwesen Aloys' },
      { href: '/it/soeldner/hauptleute-banner', title: 'Bekannte Hauptleute und Banner' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'barsinger',
    term: 'Barsinger',
    aliases: ['Barsinger der Spielmann', 'Spielmann'],
    definition:
      'Seeliger der Musik, Spiele, Trinkfreude und fahrenden Leute; sein Name dient zugleich als verbreiteter aloyischer Trinkspruch.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
      { href: '/it/volk/feste-lieder-gelage', title: 'Feste, Lieder und Gelage' },
    ],
  },
  {
    slug: 'carphon',
    term: 'Carphon',
    aliases: ['Carphon der Wissende'],
    definition:
      'Seeliger der Wissenschaften, Alchemie und Gelehrsamkeit, der Erkenntnis mit verantwortungsvoller Forschung verbindet.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/akademie/wissenschaft-gelehrsamkeit', title: 'Wissenschaft und Gelehrsamkeit' },
    ],
  },
  {
    slug: 'drachengard',
    term: 'Drachengard',
    aliases: ['Großherzogtum Drachengard'],
    definition:
      'Bedeutendes Kontaktland der Splitterlande und wiederkehrender Schauplatz des Heinrichsfestes sowie aloyischer Heerlagerberichte.',
    links: [
      { href: '/it/umland/nachbarn', title: 'Bekannte Nachbarn' },
      { href: '/it/umland/diplomatie-beziehungen', title: 'Diplomatie und Beziehungen' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'drei-goetter-kirche',
    term: 'Drei-Götter-Kirche',
    aliases: ['Kirche der Drei', 'Hohepriester der Drei-Götter-Kirche'],
    definition:
      'Geistliche Ordnung des Glaubens an die Drei, deren Hohepriester zugleich den Vorsitz im Aloyer Rat führt.',
    links: [
      { href: '/it/glaube/priester-tempel', title: 'Priester und Tempel' },
      { href: '/it/glaube/die-drei', title: 'Die Drei' },
      { href: '/it/akademie/religion-glaube', title: 'Religion und Glaube' },
      { href: '/it/rat/aloyer-rat', title: 'Der Aloyer Rat' },
    ],
  },
  {
    slug: 'favilla',
    term: 'Favilla',
    aliases: ['Favilla die Totengräberin', 'bleiche Göttin'],
    definition:
      'Seelige des friedlichen Todes, die Verstorbene aus dem Leben geleitet und deren Seele dem Urteil Hortums zuführt.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/bestattung-seelenurteil', title: 'Bestattung, Tod und Seelenurteil' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
    ],
  },
  {
    slug: 'feldscher',
    term: 'Feldscher',
    aliases: ['Feldscherer', 'Wundarzt'],
    definition:
      'Für Wundversorgung und praktische Heilkunde ausgebildete Begleitperson von Heer, Banner und Feldlager.',
    links: [
      { href: '/it/akademie', title: 'Die Akademie' },
      { href: '/it/akademie/ausbildung-kriegswesen', title: 'Ausbildung und Kriegswesen' },
      { href: '/it/soeldner/soeldnerwesen', title: 'Vom Söldnerwesen Aloys' },
      { href: '/it/soeldner/84-banner-1-lanze', title: '84. Banner, 1. Lanze' },
      { href: '/it/soeldner/reisende-banner', title: 'Die reisenden Banner' },
    ],
  },
  {
    slug: 'festfriede',
    term: 'Festfriede',
    aliases: ['Friedensgebot des Festes'],
    definition:
      'Während aloyischer Feierlichkeiten geltendes Gebot gegen Kampf, Raufhandel und mutwillige Gewalt.',
    links: [
      { href: '/it/volk/feste-lieder-gelage', title: 'Feste, Lieder und Gelage' },
      { href: '/it/volk/sitten-fremde', title: 'Sitten im Umgang mit Fremden' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'festkalender',
    term: 'Aloyer Festkalender',
    aliases: [
      'Schöpfungsfeier',
      'Totengedenken',
      'Toten Ehren',
      'Limbarfest',
      'Lewensteinerfest',
      'Hortumnacht',
      'Erntedank',
      'Wintersonnenwende',
      'Sommersonnenwende',
    ],
    definition:
      'Überlieferte Folge religiöser, republikanischer und jahreszeitlicher Feste und Gedenktage im aloyischen Jahr.',
    links: [
      { href: '/it/volk/feste-lieder-gelage', title: 'Feste, Lieder und Gelage' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'freiheitsfest',
    term: 'Aloyer Freiheitsfest',
    aliases: ['Freiheitsfest', 'Feier der Freiheit Aloys'],
    definition:
      'Herbstliches Erinnerungsfest an die Entstehung der Republik und die Gleichstellung der freien Bürger Aloys.',
    links: [
      { href: '/it/volk/feste-lieder-gelage', title: 'Feste, Lieder und Gelage' },
      { href: '/it/rat/geschichte-der-republik', title: 'Geschichte der Republik' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'fulgor',
    term: 'Fulgor',
    aliases: ['Fulgor der Durchscheinende', 'Sphärenwandler'],
    definition:
      'Seeliger zwischen Sphären und Welten, dem Intuition, Menschenkenntnis und ein Gespür für Täuschung zugeschrieben werden.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
    ],
  },
  {
    slug: 'gwalt',
    term: 'GWALT',
    aliases: ['Gilde der Wächter Aloys für Land und Truppen', 'Wächtergilde'],
    definition:
      'Dem Aloyer Rat unterstellte Gilde, welche vereidigte und zeitweise verpflichtete Wächter im In- und Ausland vertritt.',
    links: [
      { href: '/it/recht/traeger-der-rechtsordnung', title: 'Träger der Rechtsordnung' },
      { href: '/it/recht', title: 'Recht und Ordnung' },
      { href: '/it/rat/aloyer-rat', title: 'Der Aloyer Rat' },
    ],
  },
  {
    slug: 'hallech',
    term: 'Hallech',
    aliases: ['Hallech der lügende Schelm'],
    definition:
      'Seeliger von List, Wandel und Regelbruch, der starre oder ungerechte Strukturen durch Unordnung aufzubrechen sucht.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
      { href: '/it/aloy/handel', title: 'Handel, Münze und Waren' },
    ],
  },
  {
    slug: 'halma',
    term: 'Halma',
    aliases: ['Halma das Herdfeuer'],
    definition:
      'Seelige von Heim und Feuer, deren Wärme Schutz und Handwerk ermöglicht, deren Macht aber ebenso Zerstörung bringen kann.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
      { href: '/it/volk/feste-lieder-gelage', title: 'Feste, Lieder und Gelage' },
    ],
  },
  {
    slug: 'heinrichsfest',
    term: 'Heinrichsfest',
    aliases: ['Heinrichsfest in Drachengard'],
    definition:
      'Wiederkehrendes Heerlager in Drachengard, das in den Chroniken als Ort von Dienst, Diplomatie und Begegnungen erscheint.',
    links: [
      { href: '/it/berichte', title: 'Berichte' },
      { href: '/it/umland/nachbarn', title: 'Bekannte Nachbarn' },
      { href: '/it/soeldner/reisen-heerlager', title: 'Berichte von Reisen und Heerlagern' },
    ],
  },
  {
    slug: 'ignaz-rothschild',
    term: 'Ignaz Rothschild',
    aliases: ['Ratsherr Rothschild', 'Vertreter der Händler zu Land'],
    definition:
      'Ratsherr und Vertreter der Händler zu Land, der in den Chroniken mit besonderem Nachdruck zur Mitarbeit am Register aufruft.',
    links: [
      { href: '/it/rat/aloyer-rat', title: 'Der Aloyer Rat' },
      { href: '/it/rat/rothschild', title: 'Ignaz Rothschild braucht dich!' },
      { href: '/it/rat/staedte-zuenfte-stimmen', title: 'Städte, Zünfte und Stimmen' },
    ],
  },
  {
    slug: 'julius-ferdinand-kraut',
    term: 'Julius Ferdinand Kraut II.',
    aliases: ['Patriarch Kraut', 'Vorsitzender des Aloyer Rates'],
    definition:
      'Patriarch der Drei-Götter-Kirche und laut den erhaltenen Sitzungsprotokollen Vorsitzender des Aloyer Rates.',
    links: [
      { href: '/it/rat/aloyer-rat', title: 'Der Aloyer Rat' },
      { href: '/it/glaube/priester-tempel', title: 'Priester und Tempel' },
      { href: '/it/rat/wahlen-aemter', title: 'Wahlen und Ämter' },
    ],
  },
  {
    slug: 'kan-kuzgun',
    term: 'Kan Kuzgun',
    aliases: [],
    definition:
      'Macht der Splitterlande, die nach den Berichten aloyischer Reisender mit Kupferstein und Drachengard in enger Beziehung steht.',
    links: [
      { href: '/it/umland/splitterlande', title: 'Aloy in den Splitterlanden' },
      { href: '/it/umland/nachbarn', title: 'Bekannte Nachbarn' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'komarn',
    term: 'Komarn',
    aliases: ['Königreich Komarn'],
    definition:
      'Auswärtiges Königreich und wiederkehrender politischer Kontakt im Gefüge der Splitterlande.',
    links: [
      { href: '/it/umland/nachbarn', title: 'Bekannte Nachbarn' },
      { href: '/it/umland/diplomatie-beziehungen', title: 'Diplomatie und Beziehungen' },
      { href: '/it/umland/splitterlande', title: 'Aloy in den Splitterlanden' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'kreszentia-waldstein',
    term: 'Kreszentia Eusebia Waldstein',
    aliases: ['Erzmarschallin Waldstein', 'Lewensteiner'],
    definition:
      'Erzmarschallin, Lewensteiner und Mitglied des Rates der Besten; ihr Name erscheint in den Registern zur Heeresaufstellung und Gebirgsmarine.',
    links: [
      { href: '/it/rat/aloyer-rat', title: 'Der Aloyer Rat' },
      { href: '/it/soeldner/soeldnerwesen', title: 'Vom Söldnerwesen Aloys' },
      { href: '/it/soeldner/hauptleute-banner', title: 'Bekannte Hauptleute und Banner' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'kronenfieber',
    term: 'Kronenfieber',
    aliases: ['Kronenfieber-Maßnahmen'],
    definition:
      'Als Kronenfieber führen die Botenregister jene Krankheits- und Krisenzeit, die Handel und Reisen hemmte und den Rat zu besonderen Maßnahmen zwang.',
    links: [
      { href: '/it/berichte', title: 'Berichte' },
      { href: '/it/aloy/handel', title: 'Handel, Münze und Waren' },
      { href: '/it/aloy/tiafunt', title: 'Tiafunt, Hafen und Tor zur Welt' },
    ],
  },
  {
    slug: 'kronmark',
    term: 'Kronmark',
    aliases: ['Fürstentum Kronmark'],
    definition:
      'Historisch benachbartes Land, zu dem Aloy erneut diplomatische, wirtschaftliche und kulturelle Beziehungen aufnimmt.',
    links: [
      { href: '/it/umland/nachbarn', title: 'Bekannte Nachbarn' },
      { href: '/it/umland/diplomatie-beziehungen', title: 'Diplomatie und Beziehungen' },
      { href: '/it/umland/handel-soeldnervertraege', title: 'Handel und Söldnerverträge' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'kupferstein',
    term: 'Kupferstein',
    aliases: ['Fürstentum Kupferstein'],
    definition:
      'Fürstentum der Splitterlande, das in den erhaltenen Heerlagerberichten dem Machtbereich Kan Kuzguns zugerechnet wird.',
    links: [
      { href: '/it/umland/splitterlande', title: 'Aloy in den Splitterlanden' },
      { href: '/it/umland/nachbarn', title: 'Bekannte Nachbarn' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'lanze',
    term: 'Lanze',
    aliases: ['militärische Lanze', 'Lanzenführer'],
    definition:
      'Kleinere militärische und soziale Gliederung innerhalb eines Banners, in der Dienst, Lager, Wache und Verantwortung organisiert werden.',
    links: [
      { href: '/it/soeldner/soeldnerwesen', title: 'Vom Söldnerwesen Aloys' },
      { href: '/it/soeldner/84-banner-1-lanze', title: '84. Banner, 1. Lanze' },
      { href: '/it/soeldner/reisende-banner', title: 'Die reisenden Banner' },
      { href: '/it/soeldner/auftrag-sold-dienst', title: 'Auftrag, Sold und Dienst' },
    ],
  },
  {
    slug: 'lenz-aus-grodaus',
    term: 'Lenz aus Grodaus',
    aliases: ['Hauptmann Lenz', 'Lenz'],
    definition:
      'Hauptmann des 84. Banners, dessen Name in aloyischen Feld-, Reise- und Heerlagerberichten wiederkehrt.',
    links: [
      { href: '/it/soeldner/84-banner-1-lanze/Lenz', title: 'Lenz' },
      { href: '/it/soeldner/84-banner-1-lanze', title: '84. Banner, 1. Lanze' },
      { href: '/it/soeldner/hauptleute-banner', title: 'Bekannte Hauptleute und Banner' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'neu-boffeld',
    term: 'Neu-Boffeld',
    aliases: ['Neu Boffeld', 'Fürstentum Boffeld', 'Boffeld'],
    definition:
      'Inselstaat der Splitterlande, dessen Fürstentum Aloy durch Feste, Bündnisse und gemeinsame Unternehmungen bekannt ist.',
    links: [
      { href: '/it/umland/nachbarn', title: 'Bekannte Nachbarn' },
      { href: '/it/umland/diplomatie-beziehungen', title: 'Diplomatie und Beziehungen' },
      { href: '/it/umland/splitterlande', title: 'Aloy in den Splitterlanden' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'oblectatia',
    term: 'Oblectatia',
    aliases: ['Oblectatia die Sinnliche'],
    definition:
      'Seelige der Liebe, Lust, Fruchtbarkeit und Ekstase, die besonders bei Hochzeiten, Festen und Kinderwunsch angerufen wird.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
      { href: '/it/volk/feste-lieder-gelage', title: 'Feste, Lieder und Gelage' },
    ],
  },
  {
    slug: 'ohmer-woelfe',
    term: 'Ohmer Wölfe',
    aliases: ['Eliteregiment Ohmer Wölfe'],
    definition:
      'Aloyisches Eliteregiment aus der Militärstadt Ohm, dessen Name in den Heeresregistern mit besonderem Ansehen geführt wird.',
    links: [
      { href: '/it/soeldner/soeldnerwesen', title: 'Vom Söldnerwesen Aloys' },
      { href: '/it/soeldner/hauptleute-banner', title: 'Bekannte Hauptleute und Banner' },
      { href: '/it/aloy/ohm-akademie', title: 'Ohm und die rote Akademie' },
      { href: '/it/akademie/ausbildung-kriegswesen', title: 'Ausbildung und Kriegswesen' },
    ],
  },
  {
    slug: 'oleas',
    term: 'Oleas',
    aliases: ['Oleas der Händler'],
    definition:
      'Seeliger des Handels und gerechten Tausches, der die materielle Bewegung und Umverteilung von Gütern verkörpert.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/aloy/handel', title: 'Handel, Münze und Waren' },
      { href: '/it/akademie/handwerk-handel', title: 'Handwerk und Handel' },
      { href: '/it/umland/handel-soeldnervertraege', title: 'Handel und Söldnerverträge' },
    ],
  },
  {
    slug: 'otzlande',
    term: 'Otzlande',
    aliases: ['Expedition in die Otzlande'],
    definition:
      'Auswärtiges Land, in das eine aloyische Expedition führte. Gesicherte Kunde über Land, Leute und ihre Haltung zur Republik bleibt begrenzt.',
    links: [
      { href: '/it/umland/nachbarn', title: 'Bekannte Nachbarn' },
      { href: '/it/umland/splitterlande', title: 'Aloy in den Splitterlanden' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'pelaga',
    term: 'Pelaga',
    aliases: ['Pelaga die Stürmische'],
    definition:
      'Seelige von Wetter, Wasser, Meer und Gezeiten, die besonders von Seefahrern, Fischern und Bauern angerufen wird.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
      { href: '/it/aloy/tiafunt', title: 'Tiafunt, Hafen und Tor zur Welt' },
      { href: '/it/aloy/handel', title: 'Handel, Münze und Waren' },
    ],
  },
  {
    slug: 'rogon',
    term: 'Rogon',
    aliases: ['Rogon der Handwerker und Bauer'],
    definition:
      'Seeliger von Handwerk, Kunst, Ackerbau und praktischem Fortschritt, der eng mit Zünften und Ausbildung verbunden ist.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
      { href: '/it/akademie/handwerk-handel', title: 'Handwerk und Handel' },
      { href: '/it/volk/zunefte-gewerbe', title: 'Zünfte und ehrbare Gewerbe' },
      { href: '/it/volk/bauern-handwerker-buerger', title: 'Bauern, Handwerker und Bürger' },
    ],
  },
  {
    slug: 'sania',
    term: 'Sania',
    aliases: ['Sania die Blutige'],
    definition:
      'Seelige der gewaltsam Verstorbenen, des Schlachtfeldes und des aloyischen Brauchs, ihr das Blut erschlagener Feinde zu weihen.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/bestattung-seelenurteil', title: 'Bestattung, Tod und Seelenurteil' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
      { href: '/it/soeldner/kriegsbrauch-feld', title: 'Kriegsbrauch und Verhalten im Feld' },
    ],
  },
  {
    slug: 'schoeffe',
    term: 'Schöffe',
    aliases: ['Schöffen', 'Gerichtsschöffe'],
    definition:
      'Geeigneter und unparteiischer Beisitzer eines aloyischen Gerichts, der gemeinsam mit Richter oder Schultheiß an Verfahren mitwirkt.',
    links: [
      { href: '/it/recht/gerichtsordnung', title: 'Aloyer Gerichtsordnung' },
      { href: '/it/recht/traeger-der-rechtsordnung', title: 'Träger der Rechtsordnung' },
      { href: '/it/recht/malefizgericht-vergehen', title: 'Malefizgericht und schwere Vergehen' },
    ],
  },
  {
    slug: 'seelingen',
    term: 'Seelingen',
    aliases: ['Seelige', 'Seeliger', 'Seeligen-Pantheon', 'weitere Götter'],
    definition:
      'Heilige Kinder und Diener im Gefüge der Drei, denen einzelne Lebensbereiche, Berufe und Kräfte anvertraut sind.',
    links: [
      { href: '/it/glaube', title: 'Glaube und Götter' },
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
    ],
  },
  {
    slug: 'sethos',
    term: 'Sethos',
    aliases: ['Sethos der Zerstörer', 'Dämonenhort'],
    definition:
      'Dunkler Seeliger und religiöser Gegenspieler, der mit korrumpierten Seelen, dämonischen Wesen und schwerer Zauberei verbunden wird.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/recht/malefizgericht-vergehen', title: 'Malefizgericht und schwere Vergehen' },
      { href: '/it/akademie/wissenschaft-gelehrsamkeit', title: 'Wissenschaft und Gelehrsamkeit' },
    ],
  },
  {
    slug: 'suehnedienst',
    term: 'Sühnedienst',
    aliases: ['Dienst zur Sühne'],
    definition:
      'Schwere aloyische Straffolge, bei der freie Selbstbestimmung zugunsten einer auferlegten Buße und Dienstpflicht verloren geht.',
    links: [
      { href: '/it/recht/strafen-bussen', title: 'Strafen und Bußen' },
      { href: '/it/recht/malefizgericht-vergehen', title: 'Malefizgericht und schwere Vergehen' },
      { href: '/it/recht/rechtsfaelle', title: 'Bekannte Rechtsfälle' },
    ],
  },
  {
    slug: 'tross',
    term: 'Tross',
    aliases: ['Trossleute', 'Trossangehörige'],
    definition:
      'Nicht nur kämpfender Teil eines Banners, der Versorgung, Handwerk, Heilung, Handel, Schrift und Lagerleben trägt.',
    links: [
      { href: '/it/soeldner/soeldnerwesen', title: 'Vom Söldnerwesen Aloys' },
      { href: '/it/soeldner/reisende-banner', title: 'Die reisenden Banner' },
      { href: '/it/soeldner/84-banner-1-lanze', title: '84. Banner, 1. Lanze' },
      { href: '/it/soeldner/lagerordnung', title: 'Lagerordnung' },
      { href: '/it/aloy/bevoelkerung', title: 'Bevölkerung Aloys' },
    ],
  },
  {
    slug: 'tsund',
    term: 'Tsund',
    aliases: ['Tsund der Heiler', 'Heilung und Genesung'],
    definition:
      'Seeliger der Heilung und Leidenslinderung, der bei Krankheit, Verwundung, Feldlazarett und Sterbebegleitung angerufen wird.',
    links: [
      { href: '/it/glaube/weitere-gottheiten', title: 'Die Seelingen Aloys' },
      { href: '/it/glaube/glaube-alltag', title: 'Glaube im Alltag' },
      { href: '/it/glaube/priester-tempel', title: 'Priester und Tempel' },
    ],
  },
  {
    slug: 'wachweibel',
    term: 'Wachweibel',
    aliases: ['Wachweibl', 'Weibel der Wache'],
    definition:
      'Für Wachdienst, Wachordnung und Entscheidungen während einer Wache verantwortlicher Amtsträger eines Banners.',
    links: [
      { href: '/it/soeldner/lagerordnung', title: 'Lagerordnung' },
      { href: '/it/soeldner/84-banner-1-lanze', title: '84. Banner, 1. Lanze' },
      { href: '/it/soeldner/84-banner-1-lanze/Lars', title: 'Lars Spalter' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
  {
    slug: 'windmark',
    term: 'Windmark',
    aliases: [],
    definition:
      'Region der Splitterlande, in deren Häfen nach den Expeditionsplänen die Einschiffung aloyischer Banner erfolgen sollte.',
    links: [
      { href: '/it/umland/splitterlande', title: 'Aloy in den Splitterlanden' },
      { href: '/it/umland/karten-reisewege', title: 'Karten und Reisewege' },
      { href: '/it/berichte', title: 'Berichte' },
    ],
  },
];

export const sortedGlossaryEntries = [...glossaryEntries].sort((a, b) =>
  a.term.localeCompare(b.term, 'de', { sensitivity: 'base', numeric: true }),
);
