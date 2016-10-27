title: Color
layout: page-width-demo
demo_script: doc/widgets/color.js
---

`photonui.Color` is a class that abstracts colors. It supports two colorimetric spaces ([RGB][] and [HSL][]) and multiple representations (hexadecimal, CSS `rgb()`/`rgba()`,...).

To see it in action, please look at the [`photonui.ColorPickerDiaog`][colorpickerdoc] documentation.


[colorpickerdoc]: colorpickerdialog.html
[RGB]: https://en.wikipedia.org/wiki/RGB_color_model
[HSL]: https://en.wikipedia.org/wiki/HSL_and_HSV


### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More examples

```javascript
var color = new photonui.Color("red");

console.log(color.rgbHexString);
// "#FF0000"

console.log(color.rgbaHexString);
// "#FF0000FF"

console.log(color.cssRgbString);
// "rgb(255, 0, 0)"

console.log(color.cssRgbaString);
// "rgb(255, 0, 0, 1.00)"

console.log(color.getRGB());
// Array [ 255, 0, 0 ]

console.log(color.getRGBA());
// Array [ 255, 0, 0, 255 ]

console.log(color.red, color.green, color.blue);
// 255 0 0

console.log(color.hue, color.saturation, color.brightness);
// 0 100 100

color.brightness = 50;
console.log(color.rgbHexString);
// "#7F0000"

color.hue = 204;
console.log(color.rgbHexString);
// #004C7F
```
