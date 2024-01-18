const { exec } = require('child_process');
const express = require('express');
const path = require('path');

// Tailwind CSS build-Befehl
const tailwindBuildCommand = 'npx tailwindcss -i ./src/input.css -o ./dist/output.css';

// Funktion zum Ausführen von Shell-Befehlen
function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Fehler beim Ausführen des Befehls: ${error}`);
        reject(error);
      } else {
        console.log(stdout);
        resolve();
      }
    });
  });
}

// Funktion zum Builden von Tailwind CSS
async function buildTailwind() {
  try {
    console.log('Starte den Tailwind CSS Build...');
    await runCommand(tailwindBuildCommand);
    console.log('Tailwind CSS Build abgeschlossen.');
  } catch (error) {
    console.error('Fehler beim Tailwind CSS Build:', error);
  }
}

// Express.js-Server erstellen
const app = express();
const port = 3000;

// Statische Dateien aus dem "dist"-Ordner bereitstellen
app.use(express.static(path.join(__dirname, 'dist')));

// Route für die Hauptseite
app.use(express.static(path.join(__dirname, 'src')));
  

// Server auf Port 3000 starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});

// Führe den Tailwind CSS Build aus und starte dann den Server
buildTailwind().then(() => {
  // Starte den Express.js-Server nach dem Tailwind CSS Build
  // Hier könntest du deine HTML-Datei in den "dist"-Ordner kopieren oder erstellen
});
