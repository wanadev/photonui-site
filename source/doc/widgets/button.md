title: Button
layout: page-width-demo
demo_script: doc/widgets/button.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More example

```javascript
var grid = new photonui.GridLayout({
    children: [
        new photonui.Button({
            text: "Options",
            leftIcon: new photonui.FAIcon("fa-cog"),
            layoutOptions: {
                gridX: 0,
                gridY: 0
            }
        }),
        new photonui.Button({
            textVisible: false,
            leftIcon: new photonui.FAIcon("fa-cog"),
            layoutOptions: {
                gridX: 1,
                gridY: 0
            }
        }),
        new photonui.Button({
            text: "Next",
            rightIcon: new photonui.FAIcon("fa-arrow-right"),
            layoutOptions: {
                gridX: 0,
                gridY: 1,
                gridWidth: 2
            }
        })
    ]

});

photonui.domInsert(grid, "demo");
```


