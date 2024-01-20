# Dokumentation für das Techdemo 
In diesem Dokument wird erklärt, was genau umgesetzt wurde und wie die einzelnen Punkte aus der Checkliste implementiert wurden.

## Einführung und Grundlagen
- **Verständnis von Continuous Delivery und dessen Bedeutung**

  = Bessere Software schneller liefern, Ziel ist es den Veröffentlichungszyklus zu beschleunigen, während die Qualität erhalten oder verbessert wird.

- **Unterschiede zwischen Continuous Integration, Continuous Delivery und Continuous Deployment**

  Continuous Integration: Regelmäßige Integration von Code in ein gemeinsames Repository, um Konflikte frühzeitig zu erkennen und automatisierte Tests durchzuführen.

  Continuous Delivery: Kurze Zykluszeiten für die Bereitstellung von Software, aber die Veröffentlichung erfolgt nicht automatisch.

  Continuous Deployment: Automatische Bereitstellung von Codeänderungen in die Produktionsumgebung, sobald die Tests bestanden sind.

- **CI-Anti Pattern identifizieren**

  Große Code-Commits: Das seltene Zusammenführen großer Code-Commits führt zu Konflikten und erschwert die Integration, was den CI-Prozess verlangsamen kann.


    Unzureichende Testabdeckung: Wenn Tests unvollständig sind oder nur oberflächlich ausgeführt werden, können Fehler und Inkonsistenzen unentdeckt bleiben und die Stabilität des Codes beeinträchtigen.

    Nicht funktionierende Builds: Ein nicht funktionierender Build kann die Integration für alle Teammitglieder blockieren und zu Verzögerungen bei der Entwicklung führen.

    Isolierte Entwicklungszweige: Die Arbeit an isolierten Entwicklungs- oder Feature-Zweigen kann zu längeren Integrationszeiten und potenziellen Konflikten führen, wenn sie in den Hauptzweig zusammengeführt werden.

    Manuelle Prozesse: Wenn CI-Schritte nicht automatisiert sind, können manuelle Schritte zu Verzögerungen, Inkonsistenzen und menschlichen Fehlern führen.
## Automatisierung

## Testing

## Deployment-Strategien
Eine Deployment-Strategie ist ein Plan oder eine Methode, die festlegt, wie Software-Updates in die Produktionsumgebung 
übertragen und den Endnutzern zugänglich gemacht werden.
Um dies umzusetzen, gibt es verschiedene Strategien, die im Folgenden kurz erklärt werden.

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

### Deployment-Strategien identifiezieren
Für dieses Webprojekt, wäre das Canary Deployment besonders von Vorteil.
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

