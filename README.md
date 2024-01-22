# tailwindcss
Dieses README.md-Dokument bietet eine Zusammenfassung der Inhalte der Präsentation, die über tailwindcss am 24.04.2023 von Natascha Baumgartner gehalten wurde.

## Überblick
Tailwind ist eine CSS-Bibliothek, die es Entwicklern ermöglicht, schnell und einfach responsive und benutzerdefinierte Benutzeroberflächen zu erstellen, ohne tief in CSS-Styling-Details eintauchen zu müssen. Die Bibliothek bietet eine umfangreiche Sammlung von vorgefertigten Klassen, die auf Elemente angewendet werden können, um das Styling anzupassen. Dadurch wird der Entwicklungsprozess beschleunigt und die Wartung vereinfacht, da die Klassen klar und benutzerfreundlich benannt sind.

## Funktionen von tailwindcss
Tailwind CSS bietet eine Vielzahl von Funktionen, die es Entwicklern ermöglichen, schnell und einfach komplexe Layouts und benutzerdefinierte Benutzeroberflächen zu erstellen. Hier sind einige der wichtigsten Funktionen:

* Farben: Tailwind bietet eine umfangreiche Palette von Farben, die über Klassen auf Elemente angewendet werden können. Entwickler können die Farben nach Bedarf anpassen oder eigene Farben hinzufügen.
* Typografie: Mit Tailwind können Entwickler schnell und einfach Typografie-Stile wie Schriftgröße, Schriftfamilie, Textausrichtung und Textfarbe festlegen.
* Abstände: Mit Tailwind können Entwickler schnell und einfach Abstände zwischen Elementen festlegen, indem sie Klassen wie m-2 (margin 2) oder p-4 (padding 4) verwenden.

## Vorteile von Tailwind - Why is it cool?
Zusammenfassend bietet Tailwind die folgenden Vorteile:

* Beschleunigte Entwicklung durch Verwendung von vorgefertigten Klassen
* Vereinfachte Wartung durch benutzerfreundliche Benennung der Klassen
* Hohe Anpassbarkeit durch einfache Überschreibung oder Erstellung eigener Klassen

## Notwendige Ressourcen
Um mit der Installation von Tailwindcss zu starten sind folgende Ressourcen notwendig und sollten vorab installiert werden:

* Visual Studio Code --> https://code.visualstudio.com/download
* LTS Version von Node.js --> https://nodejs.org/en/

## Installation

1. In VSC Terminal öffnen

2. Projekt bzw. package.json-Datei erstellen:
   ```
   npm init -y
   ```

3. Installieren von tailwindcss via npm und erstellen der tailwind.config.js-Datei:
   ```
   npm install -D tailwindcss
   npx tailwindcss init
   ```

4. In der tailwind.config.js den Pfad für alle template-Dateien hinzufügen:
   ```
   module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
            extend: {},
        },
        plugins: [],
    }
    ```

1. In der input.css folgende Imports hinzufügen:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. In der package.json-Datei "scripts" auf folgendes korrigieren:
   
   ```
   "scripts": {
    "dev": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch" },
   ```

3. Datei ausführen 

   ```
   npm start
   ```

4. Im output.css sieht man nun alle tailwindcss Klassen.

## Weitere Ressourcen
Es gibt eine Vielzahl von Ressourcen, die Entwicklern helfen können, Tailwind CSS effektiver zu nutzen. Die folgenden Webseiten bzw. Plugins sind sehr hilfreich:

* Die offizielle Tailwind-Dokumentation: Hier finden Entwickler eine umfassende Anleitung zur Verwendung von Tailwind CSS, einschließlich einer vollständigen Liste der verfügbaren Klassen und Funktionen --> https://tailwindcss.com/
* Tailwind Cheat Sheet: Eine Zusammenfassung der wichtigsten Tailwind-Klassen und -Funktionen auf einer Seite, die Entwicklern helfen kann, schnell zu finden, was sie suchen --> https://nerdcave.com/tailwind-cheat-sheet
* Tailwind CSS IntelliSense: Tailwind CSS IntelliSense verbessert die Tailwind-Entwicklungserfahrung, indem es Benutzern von Visual Studio Code erweiterte Funktionen wie Autovervollständigung und Syntaxhervorhebungen bietet --> https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

## Fazit
Zusammenfassend bietet Tailwind CSS eine schnelle und effektive Möglichkeit, benutzerdefinierte Benutzeroberflächen und Layouts zu erstellen. Mit der Fülle an vorgefertigten Klassen und Funktionen können Entwickler Zeit sparen und sich auf die Gestaltung der Benutzeroberfläche konzentrieren, anstatt sich um das Schreiben von CSS-Code zu kümmern. Die Anpassbarkeit von Tailwind ermöglicht es auch, die Bibliothek an die spezifischen Anforderungen eines Projekts anzupassen. Insgesamt ist Tailwind eine leistungsstarke und flexible Bibliothek, die jedem Entwickler helfen kann, effizienter und effektiver zu arbeiten.