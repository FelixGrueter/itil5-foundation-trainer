/* Prüfungsspezifische Konfiguration – die EINZIGE Stelle, die sich zwischen Trainer-Apps unterscheidet.
   Alles andere (app.js, index.html) ist generisch. Bei Änderungen hier den Versionsparameter in index.html erhöhen. */
window.APP_CONFIG = {
  appId: 'itil5-foundation-trainer',            // steht in Verlaufs-Exporten; Import akzeptiert nur Dateien mit dieser ID
  appTitle: 'ITIL® 5 Foundation Trainer',        // Browser-Tab, Kopfzeile, Berichte
  brand: 'ITIL® 5 · Foundation',                 // kleine Überschrift auf der Startseite und im Bericht
  liveUrl: 'felixgrueter.github.io/itil5-foundation-trainer',   // GitHub Pages, passwortgeschützt
  // Kopfzeile: Logo (aus dem offiziellen Cover, 2-fache Auflösung) + Wort daneben im Stil der Wortmarke
  logo: 'img/logo-itil.png',
  logoAlt: 'ITIL',
  brandWord: 'Foundation',
  // brandColor: bewusst nicht gesetzt – die Farbe der Wortmarke steht als --brand (hell/dunkel) in index.html
  // Links in der Kopfzeile zu verwandten Trainer-Apps (öffnen in neuem Tab) – derzeit keine
  otherApps: [],
  // Eigener Präfix ist Pflicht: alle Apps unter felixgrueter.github.io teilen sich denselben Browser-Speicher.
  // Jede App mit eigenem Präfix; hier 'it5-' (Abgleich mit der Projektübersicht in ~/Projekte/CLAUDE.md).
  storagePrefix: 'it5-',
  reportPrefix: 'ITIL5-Foundation',              // Dateinamen von Bericht und Verlaufs-Export

  // Prüfungen: code = Präfix in katalog.json → origin (z. B. "MP1-19" = Musterprüfung 1, Frage 19)
  exams: [
    { code: 'MP1', title: 'Musterprüfung 1', sub: 'Offizielle PeopleCert-Musterprüfung, Version 5.0', official: true },
    { code: 'MP2', title: 'Musterprüfung 2', sub: 'Offizielle PeopleCert-Musterprüfung, Version 5.0', official: true },
    // Mock A/B: offizielle Mock-Prüfungsfragen; eine Erklärung je Frage statt Begründung je Option, keine Lehrplan-Referenz (Themenbereiche per KI zugeordnet)
    { code: 'MOA', title: 'Mock A', sub: 'Offizielle Mock-Prüfung', official: true, badge: 'mit Erklärung',
      hint: 'Offizielle Mock-Prüfungsfragen mit Erklärung zur richtigen Antwort.' },
    { code: 'MOB', title: 'Mock B', sub: 'Offizielle Mock-Prüfung', official: true, badge: 'mit Erklärung',
      hint: 'Offizielle Mock-Prüfungsfragen mit Erklärung zur richtigen Antwort.' },
    // Leecon 1/2: Übungsfragen aus dem Leecon-Kurs (keine offiziellen Prüfungen); eine Erklärung je Frage, keine Lehrplan-Referenz (Themenbereiche per KI zugeordnet)
    { code: 'LC1', title: 'Leecon 1', sub: 'Übungsprüfung aus dem Leecon-Kurs', official: false, badge: 'mit Erklärung',
      hint: 'Übungsfragen aus dem Leecon-Kurs mit Erklärung zur richtigen Antwort.' },
    { code: 'LC2', title: 'Leecon 2', sub: 'Übungsprüfung aus dem Leecon-Kurs', official: false, badge: 'mit Erklärung',
      hint: 'Übungsfragen aus dem Leecon-Kurs mit Erklärung zur richtigen Antwort.' },
  ],
  countStep: 10,                                 // Schieberegler im Trainingsmodus: 10er-Schritte bis zur Katalogsgröße (rechts = „Alle“)
  passRate: 0.65,                                // 65 % → 26 von 40
  examInfo: '60 min für 40 Fragen',              // Text im Tooltip der Tempo-Leiste (Prüfungsregel in Worten)
  secondsPerQuestion: 60 * 60 / 40,              // echte Prüfung: 60 Minuten für 40 Fragen (Countdown bei Simulation); Closed Book

  sourceNote: 'Fragen, Lösungen und Begründungen: ITIL® Foundation Version 5, Musterprüfung 1 und 2 (jeweils Version 5.0, Mai 2026; PeopleCert, offizielle Schulungsunterlagen); Mock A und Mock B: offizielle Mock-Prüfungsfragen mit Erklärungen; Leecon 1 und Leecon 2: Übungsfragen aus dem Leecon-Kurs mit Erklärungen.',
  topicNote: 'Hinweis: Die Themenbereiche der Mock- und Leecon-Fragen (Mock A und B, Leecon 1 und 2) wurden von einer KI zugeordnet – eine Einschätzung, keine offizielle Lehrplan-Zuordnung.',
  topicNoteShort: 'durch KI zugeordnet',            // hinter dem Themenbereich von Fragen ohne Lehrplan-Referenz
  trademark: 'ITIL® ist eine eingetragene Marke von PeopleCert International Limited.',
  explHint: 'Mit offizieller Begründung zu jeder Antwortoption und Verweis ins offizielle ITIL-Buch.',
  refHint: '„Siehe x.y“ = Abschnitt im offiziellen ITIL-Buch',
};
