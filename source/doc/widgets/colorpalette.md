title: ColorPalette
layout: page-width-demo
demo_script: doc/widgets/colorpalette.js
---


### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More example

#### Custom palette

```javascript
var palette = new photonui.ColorPalette({
    palette: [
        ["#D32F2F", "#F44336", "#E91E63", "#9C27B0", "#673AB7"],
        ["#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688"],
        ["#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107"],
        ["#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"]
    ],
    callbacks: {
        "value-changed": function(widget, value) {
            var header = document.getElementsByTagName("header")[0];
            header.style.backgroundColor = value;
        }
    }
});

photonui.domInsert(palette, "demo");
```
