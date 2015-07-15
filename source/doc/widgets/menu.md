title: Menu
layout: page-width-demo
demo_script: doc/widgets/menu.js
---

`photonui.Menu` is a basic layout that is only meant to contain [`photonui.MenuItem`][menuitem-doc], [`photonui.SubMenuItem`][submenuitem-doc] and other `photonui.Menu` widgets.

[menuitem-doc]: menuitem.html
[submenuitem-doc]: submenuitem.html

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More examples

#### With a submenu

```javascript
var menu = new photonui.Menu({
    iconVisible: true,
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
        new photonui.SubMenuItem({
            text: "Menu Item 3",
            menuName: "submenu1",
            icon: new photonui.FAIcon("fa-paw")
        }),
        new photonui.Menu({
            visible: true,  // false to hide it by default
            name: "submenu1",
            iconVisible: true,
            children: [
                new photonui.MenuItem({
                    text: "Submenu Item 1",
                    icon: new photonui.FAIcon("fa-gamepad")
                }),
                new photonui.MenuItem({
                    text: "Sumbenu Item 2",
                    icon: new photonui.FAIcon("fa-flask")
                })
            ]
        }),
        new photonui.MenuItem({
            text: "Menu Item 2",
            icon: new photonui.FAIcon("fa-eye")
        }),
    ]
});

photonui.domInsert(menu, "demo");
```
