# 3pc Coding Challenge React

## Voraussetzungen

**Du benötigst Node >= 8.9 auf Deinem lokalem Computer**.<br>
Falls nötig installiere Node von deren [Webseite](https://nodejs.org/en/).

Führe `npm i` im Root des Projekts durch um die erforderlichen Packages zu installieren.

## Start

Im Projektverzeichnis kannst Du folgenden Befehl ausführen:

### `npm start`

Startet die App im Development Modus.<br />
Öffne [http://localhost:3000](http://localhost:3000) um die App in Deinem Browser zu sehen.

Die App wird neugeladen, wenn Du Änderungen machst.<br />
Fehler werden Dir in der Console angezeigt.

## Deine Aufgabe

Erstelle eine App, mit der man Filme suchen und finden kann.

Die App besteht aus **zwei Seiten**:

- Die **Suche** besteht aus einem Input Feld und einer Liste der gefundenen Filme. Die Filme sollten nach **Popularität** sortiert sein.
- Die **Filmseite** zeigt Details des ausgewählten Films.

Du kannst Dich am vorgegebenen Design orientieren, es erweitern oder gar ändern.
Die Gestaltung der Detailseite ist Dir frei gestellt.

Bei einem Neuladen der Detail-Seite sollte diese korrekt geladen werden.

## Vorgaben

Benutze die [The Movie DB API](https://developers.themoviedb.org/3) für Deine Abfragen.

In der `.env.local` Datei sind 3 Dinge hinterlegt:

- Den `API Key` musst Du an jeden Request anhängen.
- Den `Pfad zur API`.
- Den `Pfad zu Bildern`. Wie Du diesen benutzt kannst Du [hier](https://developers.themoviedb.org/3/getting-started/images) nachlesen.

Du kannst alle Werte über `process.env.{KEY}` benutzen. Den `API Key` bindest Du z.B. mit `process.env.REACT_APP_API_KEY` ein.

> Falls Du das Projekt auf Github hochladen möchtest, versichere Dich dass Du nicht den API Key commitest.

---

Mehr über die Entwicklungsumgebung und seine Möglichkeiten findest Du in der [Create React App Dokumentation](https://create-react-app.dev/).
