title: Label
layout: page-width-demo
demo_script: doc/widgets/label.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### Short declaration

`photonui.Label` can be instantiated in a shorter way:

```javascript
var label = new photonui.Label("My Label");
photonui.domInsert(label, "demo");
```

With more params:

```javascript
var label = new photonui.Label("My Label", {
    textAlign: "right"
});

photonui.domInsert(label, "demo");
```


### More examples

```javascript
var grid = new photonui.BoxLayout({
    orientation: "horizontal",
    children: [
        new photonui.Label({
            text: "My Label:",
            forInputName: "my-text-field"
        }),
        new photonui.TextField({
            name: "my-text-field"
        })
    ]
});

photonui.domInsert(grid, "demo");
```


