title: CheckBox
layout: page-width-demo
demo_script: doc/widgets/checkbox.js
---

## Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


## More example

```javascript
var grid = new photonui.GridLayout({
    children: [
        new photonui.CheckBox({
            name: "checkbox1",
            value: true,
            layoutOptions: {
                gridX: 0,
                gridY: 0
            },
            callbacks: {
                "value-changed": function(widget, value) {
                    alert(widget.name + " = " + value);
                }
            }
        }),
        new photonui.Label({
            text: "CheckBox 1",
            forInputName: "checkbox1",
            layoutOptions: {
                gridX: 1,
                gridY: 0
            }
        })
    ]
});

photonui.domInsert(grid, "demo");
```


