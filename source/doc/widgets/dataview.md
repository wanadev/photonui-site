title: DataView
layout: page-width-demo
demo_script: doc/widgets/dataview.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More examples

#### Define html elements

```javascript
var dataview = new photonui.DataView({
    containerElement: "table",
    itemElement: "tr",
    columnElement: "td",
    items: [
        { name: "John", count: 2 },
        { name: "Jane", count: 4 },
        { name: "Janeth", count: 12 }
    ],
    columns: [ "name", "count"],
});

photonui.domInsert(dataview, "demo");
```
