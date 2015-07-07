title: MenuItem
layout: page-width-demo
demo_script: doc/widgets/menuitem.js
---

`photonui.MenuItem` is a widget that can be used inside any [`photonui.Menu`][menu-doc], [`photonui.Select`][select-doc] or [`photonui.Popupmenu`][popupmenu-doc] widgets.

[menu-doc]: menu.html
[select-doc]: select.html
[popupmenu-doc]: popupmenu.html


### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More example

#### Inside a photonui.Select

```javascript
var select = new photonui.Select({
    value: "item1",
    children: [
        new photonui.MenuItem({value: "item1", text: "Item 1"}),
        new photonui.MenuItem({value: "item2", text: "Item 2"}),
        new photonui.MenuItem({value: "item3", text: "Item 3"})
    ],
    callbacks: {
        "value-changed": function(widget, value) {
            alert("Value changed: " + value);
        }
    }
});

photonui.domInsert(select, "demo");
```
