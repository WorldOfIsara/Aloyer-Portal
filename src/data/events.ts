export interface AloyEvent {
  id: string;
  title: string;
  // ISO-Datum (YYYY-MM-DD). dateEnd optional für mehrtägige Veranstaltungen.
  dateStart: string;
  dateEnd?: string;
  location?: string;
  description: string;
  registrationUrl?: string;
  status?: 'geplant' | 'bestätigt' | 'ausgebucht';
}

/*
  Platzhalter-Eintrag, damit die Aktuelles-Seite nicht leer ist. Bitte
  durch echte Termine ersetzen bzw. weitere Einträge ergänzen – einfach
  diesen Block kopieren und ausfüllen. Die Seite sortiert automatisch
  nach dateStart und zeigt den nächsten anstehenden Termin mit Countdown.
  dateFormat: YYYY-MM-dd
*/
export const events: AloyEvent[] = [
  {
    id: 'kronmark2',
    title: 'Kronmark 2 - Herbstfest auf der Theresienwiese',
    dateStart: '2026-10-02',
    dateEnd: '2026-10-04',
    location: 'Wullendorf, 94344 Wiesenfelden ',
    description:
      'Zu Ehren Ihrer Durchlaucht Fürstin Theresia Gabriela Aurelia Calanthe von Kronfels und Hohenstein lädt die Kronmark zum großen Jahrmarkt auf der Theresienwiese. Anlässlich ihres Wiegenfests soll das Volk ausgelassen feiern – ganz nach dem Wunsch der Fürstin: ohne steifen Prunk, dafür mit Lachen, Spiel und gutem Essen. Zwischen Hohenlinden und Grantlbrück verwandelt sich die Theresienwiese in einen bunten Markt voller Geschicklichkeits- und Glücksspiele, kleiner Wettkämpfe und Kurzweil für Jung und Alt. Vom Feuer duften herzhafte Speisen, süße Leckereien und würzige Köstlichkeiten. Ob Ritter, Magd ob Edelmann – im Fuchsbau feiert jedermann. Jeder ist willkommen, um Teil dieses besonderen Tages zu werden. Kommt und zelebriert mit uns – zu Ehren der Fürstin und zur Freude aller.',
    status: 'bestätigt',
  },
  {
    id: 'kronmark2',
    title: 'Heerlager XVII',
    dateStart: '2027-04-28',
    dateEnd: '2027-05-02',
    location: 'Zur Staustufe, 91301 Forchheim',
    description:
      'Das legendäre Heinrichsfest in Drachengard. Beim Patrozinium der Seligen der Liebenden wurden Kriege erklärt und Fehden begonnen... wir haben euch gehört, wir haben euch verstanden. Hiebe statt Liebe!',
    status: 'geplant',
  },
];
