title: Slider
layout: page-width-demo
demo_script: doc/widgets/slider.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More examples

```javascript
var box = new photonui.BoxLayout({
    children: [
        new photonui.Slider({
            fieldVisible: false,
            min: 0, max: 100,
            step: 5,
            value: 50
        }),
        new photonui.Slider({
            fieldVisible: true,
            min: -100, max: 100,
            step: 10,
            value: -50
        }),
        new photonui.Slider({
            fieldVisible: true,
            min: 0, max: 1,
            decimalDigits: 2,
            decimalSymbol: ".",
            step: 0.05,
            value: 0.5
        })
    ]
});

photonui.domInsert(box, "demo");
```


