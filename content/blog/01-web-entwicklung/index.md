---
title: '1 - Web Entwicklung'
date: '2020-04-29T14:32:00.00Z'
description: 'Die ersten Schritte zur Webentwicklung.'
module: 1
---

Wir starten hier in dem Online Code Editor [jsbin](https://jsbin.com/).

[Unser Start-Code](https://jsbin.com/kopinop/1/edit?html,output):

```html
<h1>Hi!</h1>
```

## HTML

Die Sachen, die man eingibt, nennt man beim Programmieren **Befehle**.

> Ej, mach gefälligst den Hintergrund rot! --- Danke.
> Bitte..

--> Das ist schon TikTak tauglich!

[Eine Übersicht einiger HTML Befehle](https://www.html-seminar.de/befehlsuebersicht.htm)

### Der Tag

Immer, wenn wir etwas definieren wollen, müssen wir sagen, wo es anfängt und wo es aufhört. Dafür nutzen wir Tags. Man spricht es **TÄG**, schreibt es aber wie einen **Tag**.

Zum Beispiel der tag `h1`:

Anfang: `<h1>`
Ende: `</h1>`

### Text schreiben

Titel: `h1`, `h2`, `h3`, `h4`, `h5` und `h6`

```html
<h1>Christiano Ronaldo</h1>
```

Paragraph `p` - enthält Abstand oben und unten.

```html
<h1>Christiano Ronaldo</h1>
<p>Christiano erzielt viele Treffer</p>
<p>Er schießt auch super Freistöße</p>
```

### Box (Gruppierungen) mit `div`

Es steht für **division** (**section**) - also eine Sektion, ein Teil einer Seite.

Alles in eine Box. HTML Elemente können andere Elemente **enthalten**.

```html
<div>
  <h1>Christiano Ronaldo</h1>
  <p>Christiano erzielt viele Treffer</p>
  <p>Er schießt auch super Freistöße</p>
</div>
```

Mehr `html` folgt später.

## Style

Das `style` Attribut.

### Farben

`background-color: red` (`background: red` macht das gleiche).

```html
<div style="background-color: red">
  <h1 style="background-color: yellow">Christiano Ronaldo</h1>
  <p>Christiano erzielt viele Treffer</p>
  <p>Er schießt auch super Freistöße</p>
</div>
```

- Man kann sich auch hier Farben aussuchen: [Color picker](https://www.w3schools.com/colors/colors_picker.asp)

Die Sprache für Style nennt man **CSS** - **C**ascading **S**tyle **S**heets.

#### Quiz

**Frage**: Warum ist `<p>Hier ist ein Text</p>` noch rot?
**Antwort**: Weil wir vorhin das umschließende `div` rot eingefärbt haben.

```html
<div style="background-color: red">
  <h1 style="background-color: yellow">Christiano Ronaldo</h1>
  <p>Christiano erzielt viele Treffer</p>
</div>
```

#### Quiz

**Frage**: Was ist hier falsch in Zeile 4? Was fehlt?
**Antwort**: Anführungszeichen.

```html {4}
<div style="background-color: red">
  <h1 style="background-color: yellow">Christiano Ronaldo</h1>
  <p>Christiano erzielt viele Treffer</p>
  <div style="background-color:" blue>
    Er schießt auch super Freistöße
  </div>
</div>
```

#### Quiz

**Aufgabe**: `Christiano Ronaldo` Überschrift bitte mit **grünem** Hintergrund (gelbe Textfarbe bitte beibelassen).

```html {2}
<div style="background-color: red">
  <h1 style="color: yellow">Christiano Ronaldo</h1>
  <p>Christiano erzielt viele Treffer</p>
  <div style="background-color: blue;">
    Er schießt auch super Freistöße
  </div>
</div>
```

**Lösung**

```html {2}
<div style="background-color: red">
  <h1 style="color: yellow; background-color: green">Christiano Ronaldo</h1>
  <p>Christiano erzielt viele Treffer</p>
  <div style="background-color: blue;">
    Er schießt auch super Freistöße
  </div>
</div>
```

### Höhe und Breite

- `height` und `width`

#### Aufgabe: Verändere Höhe und Breite

```html {2}
<div style="background-color: red">
  <h1 style="color: yellow; background-color: green">Christiano Ronaldo</h1>
  <p>Christiano erzielt viele Treffer</p>
  <div style="background-color: blue; width: 115px; height: 20px">
    Er schießt auch super Freistöße
  </div>
</div>
```

### Alle Webseiten sind mit HTML gemacht

Schauen wir uns mal eine solche Seite an, z.B. [diese simple Seite](http://beispiel.de/).

[einen Online-Artikel der Welt](https://www.welt.de/regionales/hamburg/article206837251/Corona-Hamburg-Maskenpflicht-und-ueber-4200-Infizierte-alle-Infos.html)

#### Quellcode ansehen

Das ist von Browser zu Browser unterschiedlich.

1. Rechtsklick
2. `View Page Source`
