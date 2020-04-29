---
title: '4 - Mehr HTML und CSS'
date: '2020-04-29T14:42:00.000Z'
description: 'Weitere HTML und CSS Befehle, um unsere Webseite noch geiler zu machen.'
module: 4
---

Wir machen hier weiter: https://jsbin.com/wesunuq/edit?html,output

### Bild

`img` - Image

```html {2}
<div style="background-color: red">
  <h1 style="color: yellow; background-color: green">Christiano Ronaldo</h1>
  <img
    href="https://de.wikipedia.org/wiki/Cristiano_Ronaldo#/media/Datei:Cristiano_Ronaldo_2018.jpg"
  />
  <p>Christiano erzielt viele Treffer</p>
  <div style="background-color: blue; width: 115px; height: 20px">
    Er schießt auch super Freistöße
  </div>
</div>
```

#### Quiz:

**Frage**: Was ist beim `img` tag anders?
**Antwort**: Es schließt sich selbst mit `<img />`. Kein schließender Tag.

#### Bild Größe

- Bei einem Bild muss entweder die Höhe oder die Breite festgesetzt werden.
- Das wird über CSS gemacht.
- Meistens wird ein Bild in ein `div` gepackt und das `img` selbst erhält dynamische Höhe und Breite, sprich `100%`.

### Listen

`ul` - Unordered list
`ol` - Ordered list
`li` - list item

### Weitere Elmente

Element `span`

### Wichtige CSS Befehle

- `background-color` oder `background`
- `color`

[Eine Übersicht aller Kommandos](https://www.html-seminar.de/css-definitionen-uebersicht.htm).

### Flexbox

- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) macht es einfacher Dinge anzuordnen.
- [Flexbox und Bilder](https://css-tricks.com/adaptive-photo-layout-with-flexbox/)

#### Commands

- `display: flex`
- `justify-content: column`
