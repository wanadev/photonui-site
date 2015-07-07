title: PopupMenu
layout: page-width-demo
demo_script: doc/widgets/popupmenu.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More example

#### Contextual menu

Contextual menus on PhotonUI widgets are automaticaly managed:

```javascript
var popup = new photonui.PopupMenu({
    children: [
        new photonui.MenuItem({
            text: "Menu Item 1",
            icon: new photonui.FAIcon("fa-paper-plane"),
            callbacks: {
                click: function(widget, event) {
                    alert("You clicked on me!");
                }
            }
        }),
        new photonui.MenuItem({
            text: "Menu Item 2",
            icon: new photonui.FAIcon("fa-gears")
        }),
        new photonui.MenuItem({
            text: "Menu Item 3",
            icon: new photonui.FAIcon("fa-paw")
        })
    ]
});

var button = new photonui.Button({
    text: "Right click on me!",
    buttonColor: "blue",
    contextMenu: popup   // Defines the context menu
                         // displayed on right click
});

photonui.domInsert(button, "demo");
```
