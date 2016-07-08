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
// Create our keyboard manager
var kb = new photonui.KeyboardManager(document);

// Add a label to display things
var label = new photonui.Label({text: ""});
photonui.domInsert(label, "demo");

// What to write to our label
var keys = [];
var printKeys = function() {
    label.text = "";
    for (var key in keys)
        label.text += key + " " + keys[key] + "\n";
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
