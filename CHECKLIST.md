# Checkliste

## allgemeine Hinweise zur Checkliste
Bitte beachten Sie, dass die Checkliste eine dynamische Grundlage ist, die im Laufe des Semesters angepasst oder erweitert werden kann. Zudem sind die Punkte der Checkliste nicht stets gleichgewichtend; einige Aspekte könnten schwerwiegender sein als andere, abhängig von den Anforderungen des jeweiligen Projekts.

Wenn bestimmte Punkte der Checkliste in Ihrem Projekt nicht umgesetzt werden, ist es erforderlich, dass Sie begründen, warum diese für Ihr gewähltes Beispiel nicht relevant sind. Dies dient nicht nur der Vollständigkeit, sondern auch der Qualität der Dokumentation und wird bei der finalen Beurteilung berücksichtigt.

Es wird dringend empfohlen, diese Checkliste in Ihr eigenes Projekt-Repository zu kopieren und dort als eigenständige Datei zu führen. Auf diese Weise können Sie den Fortschritt Ihres Projekts kontinuierlich und transparent nachverfolgen. Neben dem Abhaken der erledigten Punkte ist es ebenfalls ratsam, fortlaufend zu dokumentieren, wie Sie die einzelnen Inhalte konkret implementiert haben. Diese Dokumentation kann sowohl als Lernressource für Sie selbst dienen als auch den Lehrenden und Kolleg:innen einen detaillierten Einblick in Ihre Arbeitsweise geben. Durch diese fortlaufende Dokumentation erleichtern Sie sich zudem die abschließende Projektdokumentation und stellen sicher, dass Ihr Projekt im Rahmen der Beurteilung vollumfänglich gewürdigt werden kann.

## Checkliste für die eigene fortlaufende Übung in Continuous Delivery

### Einführung und Grundlagen
- [x] Verständnis von Continuous Delivery und dessen Bedeutung

    = Bessere Software schneller liefern, Ziel ist es den Veröffentlichungszyklus zu beschleunigen, während die Qualität erhalten oder verbessert wird.

- [x] Unterschiede zwischen Continuous Integration, Continuous Delivery und Continuous Deployment

    Continuous Integration: Regelmäßige Integration von Code in ein gemeinsames Repository, um Konflikte frühzeitig zu erkennen und automatisierte Tests durchzuführen.

    Continuous Delivery: Kurze Zykluszeiten für die Bereitstellung von Software, aber die Veröffentlichung erfolgt nicht automatisch.

    Continuous Deployment: Automatische Bereitstellung von Codeänderungen in die Produktionsumgebung, sobald die Tests bestanden sind.

- [x] CI-Anti Pattern identifizieren

    Große Code-Commits: Das seltene Zusammenführen großer Code-Commits führt zu Konflikten und erschwert die Integration, was den CI-Prozess verlangsamen kann.

        
    Unzureichende Testabdeckung: Wenn Tests unvollständig sind oder nur oberflächlich ausgeführt werden, können Fehler und Inkonsistenzen unentdeckt bleiben und die Stabilität des Codes beeinträchtigen.

    Nicht funktionierende Builds: Ein nicht funktionierender Build kann die Integration für alle Teammitglieder blockieren und zu Verzögerungen bei der Entwicklung führen.

    Isolierte Entwicklungszweige: Die Arbeit an isolierten Entwicklungs- oder Feature-Zweigen kann zu längeren Integrationszeiten und potenziellen Konflikten führen, wenn sie in den Hauptzweig zusammengeführt werden.

    Manuelle Prozesse: Wenn CI-Schritte nicht automatisiert sind, können manuelle Schritte zu Verzögerungen, Inkonsistenzen und menschlichen Fehlern führen.


### Automatisierung
- [x] Automatisierte Builds eingerichtet

    * Abhängigkeiten hinzugefügt
      ```
      npm install express
      ```
    * Build-Skript ``build.js`` erstellt - Damit werden die Befehle ausgeführt, die zum Erstellen des Tailwind CSS-Builds erforderlich sind.
    * Build-Skript zu package.json hinzugefügt bzw. aufgrund von Tailwind CSS korrigiert
      ```json
      "scripts": {
        "start": "node build.js && npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
      },
      ```
    * Build ausführen
      ```
      npm start
      ```

- [x] Automatisierte Tests implementiert

    * Jest zum Testen installieren
      ```
      npm install --save-dev jest
      ```
    * Test-Skript ```simple.test.js``` erstellt
    * Test zu package.json hinzugefügt
      ```json
      "scripts": {
        "test": "jest"
      },
      ```
    * Test ausführen
      ```
      npm test
      ```

- [x] Automatisierte Deployments konfiguriert
    * Auf Github die Datei ```node.js.yml``` für den Github-Worflow erstellt - damit wird alles automatisiert

### Testing
- [x] Unit Tests geschrieben und automatisiert
  * Jsdom installieren um tests einzurichten
  ```npm install --save-dev jsdom```

- [ ] Integrationstests implementiert (optional)
- [ ] End-to-End Tests eingerichtet (optional)

### Deployment-Strategien
- [ ] Deployment-Strategien identifizieren
- [ ] Rollback-Strategien (optional)

### Containerisierung
- [ ] Docker oder ähnliche Technologien eingesetzt
- [ ] Integration in eine Build-Pipeline

### Konfigurationsmanagement
- [ ] Konfigurationsdateien versioniert und zentralisiert
- [ ] Verwendung in einer Build-Pipeline

### Feedback-Schleifen & Benachrichtigungen
- [ ] Feedback von Stakeholdern eingeholt und implementiert
- [ ] Developer Benachrichtigungen

### Sicherheit
- [ ] Zugangsdaten sicher hinterlegt

### Datenbanken
- [ ] Datenbank-Migrationen automatisiert
- [ ] Datenbank-Backups und Recovery-Pläne

### Abschluss und Dokumentation
- [ ] Projekt-Dokumentation vervollständigt
