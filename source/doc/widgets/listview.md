title: ListView
layout: page-width-demo
demo_script: doc/widgets/listview.js
---

### Documentation

* [Data views: DataView, FluidView, TableView](../data-views.html)

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More examples

#### Drag and drop

```javascript
var dataview = new photonui.ListView({
    dragAndDroppable: true,
    items: [
        { name: "John", count: 2 },
        { name: "Jane", count: 4 },
        { name: "Janeth", count: 12 }
    ],
    columns: [ "name", "count"],
    callbacks: {
        "item-sort": function(event, item) {
            item.value.count++;
        }
    },
});

photonui.domInsert(dataview, "demo");
```
