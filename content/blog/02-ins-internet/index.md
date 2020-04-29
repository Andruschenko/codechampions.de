---
title: '2 - Ins Internet'
description: 'Vom Online Editor zum eigenen Editor am Computer'
module: 2
date: '2020-04-29T14:39:00.000Z'
---

Wir wollen nicht bloß im Sandkasten vor uns hin programmieren, sondern unser Projekt mit der ganzen Welt teilen.

### VS Code installieren

- Code Editor installieren: [VSCode](https://code.visualstudio.com/Download)

#### Deutsch als Sprache einstellen

1. Tastenkombination `Cmd ⌘ + Shift ⇧ + p` (also `Command` und großes `P`)
2. Gebe `display` in die Leiste ein
3. Klicke auf `Configure Display Language`
4. Dann klicke auf `Install additional languages...`
5. In der linken Leiste wählst du das Language Pack mit `German` im Titel drin. Vielleicht musst du etwas nach unten scrollen.
6. Auf den grünen `Install` button klicken.
7. Es installiert und danach sollte rechts unten ein kleines Fenster erscheinen. Klicke dort zum Neustart (`restart`) von Visual Studio Code.
8. Jetzt sollte alles auf Deutsch sein.

Diese Anleitung wurde von [dieser Englischen Fassung](https://code.visualstudio.com/docs/getstarted/locales) übersetzt.

### Programm zum Hochladen

#### Installation

Wir müssen jetzt noch ein wenig mehr installieren. Die folgenden Schritte sind alle auf dem System **Mac (OSX)**:

- [Node.js](https://nodejs.org/de/)

  1.  Gehe auf [nodejs.org](https://nodejs.org/de/) und lade die `LTS` version für dein Betriebssystem herunter (nicht die `Aktuell` version)
  2.  Stelle sicher, dass der `node` Befehl installiert ist. Dazu öffnest du das **Terminal** und gibst folgendes ein:

  ```bash
  node -v && npm -v
  ```

  Wenn du so etwas ähnliches bekommst, ist alles gut:

  ```bash
  v10.14.1
  6.14.4
  ```

  Die Zahlen können gerne anders sein, es sollte bloß kein Fehler erscheinen wie `-bash: node: command not found` oder so.

- [Surge](http://surge.sh/)

  1. Gebe folgenden Befehl ins **Terminal** ein, um das Kommandozeilen Programm `surge` zu installieren.

  ```bash
  npm install --global surge
  ```

  Bekommst du solch einen Fehler?

  ```bash
  npm install --global surge
  npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
  npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules
  npm ERR! code EACCES
  npm ERR! syscall access
  npm ERR! path /usr/local/lib/node_modules
  npm ERR! errno -13
  npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
  npm ERR!  [Error: EACCES: permission denied, access '/usr/local/lib/node_modules'] {
  npm ERR!   stack: "Error: EACCES: permission denied, access '/usr/local/lib/node_modules'",
  npm ERR!   errno: -13,
  npm ERR!   code: 'EACCES',
  npm ERR!   syscall: 'access',
  npm ERR!   path: '/usr/local/lib/node_modules'
  npm ERR! }
  npm ERR!
  npm ERR! The operation was rejected by your operating system.
  npm ERR! It is likely you do not have the permissions to access this file as the current user
  ```

  Falls ja, musst du es nochmal hiermit probieren

  ```bash
  sudo npm install --global surge
  ```

  Du wirst nach deinem Passwort gefragt. Das ist dein Nutzer-Passwort vom Mac. Tippe es ein und drücke `Enter`. Du siehst während der Eingabe die Zeichen nicht. Das ist etwas komisch.

Jetzt müssen wir mit der Kommandozeile noch in deinen Ordner gelangen:

- mit den Terminal:

  1. Öffne das **Terminal** am besten über Spotlight. Drücke die Tasten `Cmd` + `Leertaste` und gebe dann **Terminal** ein. Jetzt drückst du wieder enter, um das Terminal Programm auszuwählen.
  2. Wir geben ins Terminal `cd` ein und machen erstmal dort nichts weiter. Achte auf den Abstand nach dem `cd`!
  3. Im Finder navigieren wir zu dem Ordner mit der Datei und ziehen den Ordner einfach in die Kommandozeile.
  4. Und jetzt drücken wir `Enter` (Deutsch: Eingabetaste)
  5. Mit `pwd` können wir sehen, wo wir gerade sind.

- mit dem Terminal in VSCode:
  1. Aus **VSCode**: Rechts-klick (zwei Finger) auf die Datei und wähle `In Terminal öffnen`.

#### Homepage hochladen

1. Wir geben `surge` ein und drücken `Enter`.
2. Du wählst Benutzername und Passwort.
3. Du änderst die Domäne zu `DEIN_NAME.surge.sh`
4. Erstelle eine Datei `CNAME` im selben Ordner und geben dort in die erste Zeile die Domäne ein. Dann Speichern.
5. Jetzt kannst du Neuerungen einfach mit dem Befehl `surge` ausführen.

#### Offline (local) updaten:

1. Rechtsklick auf index.html
2. Dann "Im Finder anzeigen" auswählen
3. Finder öffnet sich. Doppelklick auf index.html

```html
<!--
  Zum Updaten:

  1. Etwas ändern
  2. Speichern mit Cmd + s

  Online updaten:

  2. Falls das Terminal nicht offen ist: Öffne ein Terminal mit einem Recht-Klick auf index.html
  3. Im Terminal surge eingeben und Enter drücken
  3. Nochmal Enter drücken und warten bis du "Success" in grün siehst.
  4. Webseite auf www.adelkamran.surge.sh betrachten

  Offline (local) updaten:

  1. Rechtsklick auf index.html
  2. Dann "Im Finder anzeigen" auswählen
  3. Finder öffnet sich. Doppelklick auf index.html
-->

<div style="background-color: rgb(139, 16, 74)">
  <h1 style="color: rgb(230, 32, 18)">Meine Homepage</h1>
  <p>Hier ist ein Text</p>
  <div
    style="background-color: rgb(53, 175, 74); width: 325px; height: 20px; color: white"
  >
    Das soll blau sein
  </div>
  <div style="height: 300px; background: rgb(23, 19, 231)">
    <p>Hier ist ein Text</p>
    <p>Hier ist ein Text</p>
    <p>Hier ist ein Text</p>
    <p>Hier ist ein Text</p>
    <div>
      Noch eine Box
    </div>
    <p>Hier ist ein neuer Text</p>
  </div>
</div>
```
