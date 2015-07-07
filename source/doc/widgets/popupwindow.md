title: PopupWindow
layout: page-width-demo
demo_script: doc/widgets/popupwindow.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More example

#### Popup next to a widget

```javascript
var popup = new photonui.PopupWindow({
    width: 200,
    height: 200
});

var button = new photonui.Button({
    text: "Click me to display the popup",
    buttonColor: "blue",
    callbacks: {
        click: function(widget, event) {
            popup.popupWidget(widget);
        }
    }
});

photonui.domInsert(button, "demo");
```
