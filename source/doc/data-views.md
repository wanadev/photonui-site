title: Data views
layout: page-width-demo
demo_script: doc/empty-demo.js
---

Data views are PhotoUI Widgets that can display a list of data items and provide basic events on those.

### DataView

The base class of data view is [`photonui.DataView`][doc-dataview]

It takes a parameter `items` as an array of key-value object.

By default, the [`photonui.DataView`][doc-dataview] renders as below:
* The list is a `<ul>` HTML element.
* Each item is a `<li>` element
* Each property of an item can be defined as a "column", rendered with a `<span>`

```javascript
var dataview = new photonui.DataView({
    items: [
        { name: "John", count: 2, color: "red" },
        { name: "Jane", count: 4, color: "blue" },
        { name: "Janeth", count: 12, color: "green" }
    ],
});
photonui.domInsert(dataview, "demo");
```

Those HTML elements can be override with parameters

```javascript
var dataview = new photonui.DataView({
    containerElement: "table",
    itemElement: "tr",
    columnElement: "td",
    items: [
        { name: "John", count: 2, color: "red" },
        { name: "Jane", count: 4, color: "blue" },
        { name: "Janeth", count: 12, color: "green" }
    ],
});
photonui.domInsert(dataview, "demo");
```


#### Columns

Columns can be manually defined as DataView parameter, in different ways:
* by property name
* with an id and a function returning a value
* with an id and a function returning a `photonui.Widget` 

```javascript
var dataview = new photonui.DataView({
    items: [
        { name: "John", count: 2, color: "red" },
        { name: "Jane", count: 4, color: "blue" },
        { name: "Janeth", count: 12, color: "green" }
    ],
    columns: [
        "count",
        {
            id: "name",
            label: "Name",
            value: function(item) {
                return `My name is ${item.name}`
            }
        },
        {
            id: "color",
            label: "Color",
            value: function(item) { // define value to display
                return new photonui.ColorButton({ value: item.color })
            }
        }
        
    ]
});
photonui.domInsert(dataview, "demo");
```

#### Custom Widget Formater

To override this item column rendering, we can define a `customWidgetFormater` to build a `photonui.Widget` for each row.

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

Drag and drop behaviour can be enabled to change items order.

A callback on event `item-sort` can be defined.

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

#### Click event

A callback `item-click` can be defined

```javascript
var dataview = new photonui.DataView({
    items: [
        { name: "John", count: 2 },
        { name: "Jane", count: 4 },
        { name: "Janeth", count: 12 }
    ],
    columns: [ 
        {
            id: "name",
            value: function(item) { return `${item.name}: ` }
        }, 
        "count"
    ],
    callbacks: {
        "item-click": function(event, item) {
            item.value.count++;
            item.node.querySelector(".photonui-dataview-column-count")
                .innerText = item.value.count;
        },
    }
});

photonui.domInsert(dataview, "demo");
```

[doc-dataview]: widgets/dataview.html
[doc-tableview]: widgets/tableview.html
[doc-fluidview]: widgets/fluidview.html


