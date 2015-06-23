title: Button
layout: page-width-demo
demo_script: doc/widgets/button.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More example

#### Icons

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

#### Alternative appearances and colors

```javascript
var grid = new photonui.GridLayout({
    children: [
        new photonui.Button({
            text: "default, normal",
            layoutOptions: {
                gridX: 0,
                gridY: 0
            }
        }),
        new photonui.Button({
            text: "default, flat",
            appearance: "flat",
            layoutOptions: {
                gridX: 1,
                gridY: 0
            }
        }),

        new photonui.Button({
            text: "blue, normal",
            buttonColor: "blue",
            layoutOptions: {
                gridX: 0,
                gridY: 1
            }
        }),
        new photonui.Button({
            text: "blue, flat",
            buttonColor: "blue",
            appearance: "flat",
            layoutOptions: {
                gridX: 1,
                gridY: 1
            }
        }),

        new photonui.Button({
            text: "red, normal",
            buttonColor: "red",
            layoutOptions: {
                gridX: 0,
                gridY: 2
            }
        }),
        new photonui.Button({
            text: "red, flat",
            buttonColor: "red",
            appearance: "flat",
            layoutOptions: {
                gridX: 1,
                gridY: 2
            }
        }),

        new photonui.Button({
            text: "yellow, normal",
            buttonColor: "yellow",
            layoutOptions: {
                gridX: 0,
                gridY: 3
            }
        }),
        new photonui.Button({
            text: "yellow, flat",
            buttonColor: "yellow",
            appearance: "flat",
            layoutOptions: {
                gridX: 1,
                gridY: 3
            }
        }),

        new photonui.Button({
            text: "green, normal",
            buttonColor: "green",
            layoutOptions: {
                gridX: 0,
                gridY: 4
            }
        }),
        new photonui.Button({
            text: "green, flat",
            buttonColor: "green",
            appearance: "flat",
            layoutOptions: {
                gridX: 1,
                gridY: 4
            }
        })
    ]

});

photonui.domInsert(grid, "demo");
```
