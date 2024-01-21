# Checkliste

## Authoren

Allyssa Ulz, Monika Popic, Natascha Baumgartner

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

- [ ] ~~Integrationstests implementiert (optional)~~
- [ ] ~~End-to-End Tests eingerichtet (optional)~~

### Deployment-Strategien
- [x] Deployment-Strategien identifizieren
    
  Eine Deployment-Strategie ist ein Plan oder eine Methode, die festlegt, wie Software-Updates in die Produktionsumgebung übertragen und den Endnutzern zugänglich gemacht werden. Um dies umzusetzen, gibt es verschiedene Strategien, die im Folgenden kurz erklärt werden.

  1. Blue-Green Deployment
    - Bei dieser Strategie werden zwei Produktionsumgebungen verwendet, die abwechselnd aktiv sind.
    - Die aktive Umgebung wird als "Blue" bezeichnet, während die inaktive Umgebung als "Green" bezeichnet wird.
    - Nachdem eine neue Version in der Green-Umgebung getestet wurde, wird der Datenverkehr von Blue zu Green umgeleitet.
  2. Canary Deployment
   - Bei dieser Strategie wird eine neue Version der Software in einer kleinen Teilmenge der Produktionsumgebung bereitgestellt.
   - Wenn die neue Version erfolgreich getestet wurde, wird sie in die gesamte Produktionsumgebung übertragen
  3. Rolling Deployment
    - Bei dieser Strategie wird die neue Version nach und nach auf unterschiedliche Server oder Cluster ausgerollt, 
      anstatt alle gleichzeitig zu aktualisieren, um Ausfallzeiten und Risiken zu minimieren.
  4. A/B Testing
    - Bei dieser Strategie wird die neue Version der Software in einer separaten Umgebung bereitgestellt, 
      die von einem Teil der Endbenutzer verwendet wird.
    - Die Ergebnisse werden dann mit denen der alten Version verglichen, um zu bestimmen, welche Version besser ist.

  #### Für dieses Webprojekt, wäre das Canary Deployment besonders von Vorteil.

  1. Kontrollierte Einführung neuer Features
   - Neue Feautures wie z.B. Design-Änderungen oder zusätzliche Funktionen können zuerst an einer kleinen Teilmenge der Nutzer getestet werden, bevor es für alle Nutzer verfügbar ist
   - Dies ist vorteilhaft für Webseiten, a Sie visuelle und funktionale Änderungen testen können, ohne das Erlebnis für alle Nutzer auf einmal zu verändern
  2. Nutzerfeedback
   - Durch die Einführung bei einer kleinen Benutzergruppe können Sie wertvolles Feedback erhalten
   - Dies ist besonders wichtig bei beispielsweise Designänderungen dir z.B. durch Tailwind CSS ermöglicht werden
  3. Risikominimierung 
    - Indem die Änderungen nur einem kleinen Teil der Nutzer zur Verfügung gestellt werden, wird das Risiko minimiert, dass alle Nutzer von einem bestimmten Fehler betroffen sind
  4. Flexibilität und Anpassungsfähigkeit
    - Wenn Nutzer positiv auf die Änderungen reagieren, können Sie schnell für alle verfügbar gemacht werden. 
    - Bei negativem Feedback oder unerwarteten Problemen besteht die Möglichkeit, das Update zurückzuziehen oder anzupassen, ohne größere Auswirkungen auf die Gesamtnutzerbasis zu haben


- [ ] ~~Rollback-Strategien (optional)~~

### Containerisierung
- [x] Docker oder ähnliche Technologien eingesetzt
  * Download Docker and open the app 
  * Führe diesen Befehl aus ```docker build -t techdemo-continiousdelivery``` um das Docker-Image zu bauen
  ![documentation-img](/src/docker_image.png)
  * Um Docker-Container auszuführen führe dieses Kommando aus: ```docker run -p 3000:3000 techdemo-continiousdelivery```
  * BILD EINFÜGEN
  ![documentation-img](/src/docker_container.png)

- [x] Integration in eine Build-Pipeline

### Konfigurationsmanagement
- [x] Konfigurationsdateien versioniert und zentralisiert
- [ ] Verwendung in einer Build-Pipeline

### Feedback-Schleifen & Benachrichtigungen
- [ ] ~~Feedback von Stakeholdern eingeholt und implementiert~~
- [x] Developer Benachrichtigungen
      In Github wurden zwei Mail-Adressen für die Benachrichtigung, sobald etwas gepusht wurde eingerichtet:
      ![documentation-img](/src/documentation-img-4.png)


### Sicherheit
- [x] Zugangsdaten sicher hinterlegt
  * Es wurde GitHub Secrets zur sicheren Speicherung der Docker Zugangsdaten verwendet. Dies ermöglicht es unseren GitHub Actions Workflows, sicher mit Docker Hub zu interagieren, ohne sensible Informationen wie Benutzernamen und Passwörter im Code oder in den Logdateien preiszugeben.

  #### Einrichtung von GitHub Secrets
  GitHub Secrets sind eine sichere Möglichkeit, um nicht-öffentliche Daten wie Passwörter, private Schlüssel und andere sensitive Informationen zu speichern. Secrets werden in GitHub verschlüsselt und sind nicht in den Logs der Workflows sichtbar.

  Für unser Projekt haben wir die folgenden Secrets eingerichtet:

  DOCKERHUB_USERNAME: Der Benutzername für den Docker Hub Account, der zum Hochladen unserer Docker Images benötigt wird.
  DOCKERHUB_PASSWORD: Ein Personal Access Token (PAT), der als Ersatz für das Docker Hub Passwort dient. Dieses Token gewährt unserem Workflow die erforderliche Berechtigung, um Images zu pushen und zu pullen, ohne das tatsächliche Passwort zu verwenden.

  Erstellung eines Personal Access Tokens (PAT): 
  Anstatt unser Docker Hub Passwort direkt zu verwenden, erzeugen wir ein PAT über die Docker Hub Website. Dieses Token bietet mehrere Sicherheitsvorteile:

  * Es kann spezifisch für den Zweck des CI/CD-Prozesses eingeschränkt werden.
  * Es lässt sich jederzeit widerrufen, ohne das Docker Hub Passwort zu ändern oder andere Services zu beeinträchtigen.
  * Es reduziert das Risiko, dass das Konto kompromittiert wird, falls der Token jemals offengelegt werden sollte.

  Verwendung der Secrets im Workflow: 
  Innerhalb unserer GitHub Actions Workflows verwenden wir die Secrets, um uns bei Docker Hub zu authentifizieren. Der Workflow lädt die Secrets dynamisch während der Ausführung und stellt sie den Schritten zur Verfügung, die eine Authentifizierung benötigen. Zum Beispiel sieht der Schritt zum Login bei Docker Hub folgendermaßen aus:

  ```- name: Login to DockerHub
  uses: docker/login-action@v1
  with:
    username: ${{ secrets.DOCKERHUB_USERNAME }}
    password: ${{ secrets.DOCKERHUB_PASSWORD }}
  ```

### Datenbanken
Folgende Punkte wurden nicht implementiert, da für das Projekt keine Datenbank notwendig ist.
- [ ] ~~Datenbank-Migrationen automatisiert~~
- [ ] ~~Datenbank-Backups und Recovery-Pläne~~

### Abschluss und Dokumentation
- [x] Projekt-Dokumentation vervollständigt
