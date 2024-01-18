const { exec } = require('child_process');

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

// Führe den Build aus
buildTailwind();
