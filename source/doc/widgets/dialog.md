title: Dialog
layout: page-width-demo
demo_script: doc/widgets/dialog.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More examples

```javascript
// Get the position of the #demo area to display windows
// in the right place
var pos = photonui.Helpers.getAbsolutePosition("demo");

new photonui.Dialog({
    title: "My Modal Dialog",
    visible: true,
    x: pos.x, y: pos.y,
    child: new photonui.Label("Do you want to close this dialog?"),
    modal: true,
    padding: 10,
    buttons: [
        new photonui.Button({
            leftIcon: new photonui.FAIcon("fa-check"),
            text: "Yes",
            buttonColor: "green",
            callbacks: {
                click: function(widget, event) {
                    widget.parent.destroy();
                }
            }
        }),
        new photonui.Button({
            leftIcon: new photonui.FAIcon("fa-times"),
            text: "Nope",
            buttonColor: "red"
        })
    ],
    callbacks: {
        "close-button-clicked": function(widget) {
            widget.destroy();
        }
    }
});
```
