title: ToggleButton
layout: page-width-demo
demo_script: doc/widgets/togglebutton.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More example

```javascript
var toggle = new photonui.ToggleButton({
    value: false,
    text: "Value: off",
    buttonColor: "red",
    callbacks: {
        "value-changed": function(widget, value) {
            widget.text = "Value: " + ((value) ? "on" : "off");
            widget.buttonColor = (value) ? "green" : "red";
        }
    }
});

photonui.domInsert(toggle, "demo");
```

