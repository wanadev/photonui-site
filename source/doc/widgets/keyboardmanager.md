title: KeyboardManager
layout: page-width-demo
demo_script: doc/widgets/keyboardmanager.js
---

This component allows you to track keyboard state in an intuitive way.


### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### Callbacks

One can register to keyboard callbacks:

```javascript
// Add a field to display things
var field = new photonui.TextAreaField({
    value: "Start writing here!",
    rows: 20
});
photonui.domInsert(field, "demo");

// Create our keyboard manager
var kb = new photonui.KeyboardManager(field, {safe: false});

// What to write to our label
var keys = [];
var printKeys = function() {
    field.value = "";
    for (var key in keys)
        field.value += key + " " + keys[key] + "\n";
};

// Register to basic callbacks
kb.registerCallback("kb1", "key-down", function(manager, kstate) {
    keys[kstate.key] = "down";
    printKeys();
});

kb.registerCallback("kb2", "key-hold", function(manager, kstate) {
    keys[kstate.key] = "hold";
    printKeys();
});

kb.registerCallback("kb3", "key-up", function(manager, kstate) {
    keys[kstate.key] = "up";
    printKeys();
});
```
