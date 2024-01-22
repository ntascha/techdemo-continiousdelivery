# Verwenden Sie das offizielle Node.js-Image als Basis
FROM node:18

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Abhängigkeiten installieren
# Eine Wildcard wird verwendet, um sowohl package.json als auch package-lock.json zu kopieren
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Tailwind CSS builden
RUN npx tailwindcss -i ./src/input.css -o ./dist/output.css

# Füge diese Zeilen hinzu, um die Berechtigungen für /dist anzupassen
RUN mkdir -p /dist
RUN chown -R node:node /dist

# Ihr Port, der vom Anwendungen genutzt wird
EXPOSE 3000

# Befehl, um die App zu starten
CMD [ "node", "build.js" ]
