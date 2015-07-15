title: Switch
layout: page-width-demo
demo_script: doc/widgets/switch.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More examples

```javascript
var grid = new photonui.GridLayout({
    children: [
        new photonui.Switch({
            name: "switch1",
            value: true,
            layoutOptions: {
                gridX: 1,
                gridY: 0
            },
            callbacks: {
                "value-changed": function(widget, value) {
                    alert(widget.name + " = " + value);
                }
            }
        }),
        new photonui.Label({
            text: "Switch:",
            forInputName: "switch1",
            layoutOptions: {
                gridX: 0,
                gridY: 0
            }
        })
    ]
});

photonui.domInsert(grid, "demo");
```


