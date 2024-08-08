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


#### Custom Widget formater

```javascript
var dataview = new photonui.DataView({
    containerElement: "div",
    itemElement: "div",
    items: [
        { name: "John", count: 2 },
        { name: "Jane", count: 4 },
        { name: "Janeth", count: 12 }
    ],
    customWidgetFormater: function(item) {
        return new photonui.BoxLayout({
            orientation: "horizontal",
            children: [
                new photonui.Label(item.name),
                new photonui.NumericField({ value: item.count })
            ]
        });
    }
});

photonui.domInsert(dataview, "demo");
```

#### Drag and drop

```javascript
var dataview = new photonui.DataView({
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
