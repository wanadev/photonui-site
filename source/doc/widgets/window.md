title: Window
layout: page-width-demo
demo_script: doc/widgets/window.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More examples

```javascript
// Get the position of the #demo area to display windows
// in the right place
var pos = photonui.Helpers.getAbsolutePosition("demo");

// Create a window with a button to center it (x axis) on the page
var win1 = new photonui.Window({
    title: "Window 1",
    visible: true,
    padding: 10,
    x: pos.x + 20, y: pos.y + 50,
    child: new photonui.Button({
        text: "Center Me",
        callbacks: {
            click: function(widget, event) {
                win1.center();
                win1.y = pos.y;
            }
        }
    }),
    callbacks: {
        "close-button-clicked": function(widget) {
            widget.destroy();
        }
    }
});

// Create a second window without "close" button
var win2 = new photonui.Window({
    title: "Window 2",
    visible: true,
    height: 100,
    closeButtonVisible: false,
    x: pos.x, y: pos.y
});

// Focus the first window
win1.show();

```
