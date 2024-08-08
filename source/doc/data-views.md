title: Data views
layout: page-width-demo
demo_script: doc/empty-demo.js
---

Data views are PhotoUI Widgets that can display a list of data items and provide basic events on those.

There are three classes:
* [`photonui.DataView`][doc-dataview], parent class
* [`photonui.TableView`][doc-tableview]
* [`photonui.FluidView`][doc-dataview]

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

#### Selection

[`photonui.DataView`][doc-dataview] handles selection and multiselection of items. Default parameters are:
* `selectable: true`
* `multiSelectable: false`

There are callbacks for `item-select` and `item-unselect`. When an item is selected, its HTML node get the CSS class `selected`.

Multi-selection is handled by Ctrl+Click.

```javascript
var dataview = new photonui.DataView({
    selectable: true, // default: true
    multiSelectable: true, // default: false
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
        "item-select": function(event, item) {
            item.node.style.fontWeight = "bold"
        },
        "item-unselect": function(event, item) {
            item.node.style.fontWeight = ""
        },
    }
});
photonui.domInsert(dataview, "demo");
```
### TableView

[`photonui.TableView`][doc-tableview] is a DataView that renders as a `<table>` HTML element.
* There is a header for column labels
  * the header can be hidden with parameter `showHeader: false`
* Rows are `<tr>` HTML Elements
* Columns are `<td>` HTML Elements

```javascript
var dataview = new photonui.TableView({
    items: [
        { name: "John", count: 2, color: "red" },
        { name: "Jane", count: 4, color: "blue" },
        { name: "Janeth", count: 12, color: "green" }
    ],
    columns: [ 
        "name", 
        "count", 
        {
            id: "color",
            label: "Color",
            value: function(item) {
                return new photonui.ColorButton({ value: item.color })
            }
        }
    ],
    multiSelectable: true,
    dragAndDroppable: true,
});

photonui.domInsert(dataview, "demo");
```

### FluidView

[`photonui.TableView`][doc-tableview] is a DataView that can render elements with fixed dimensions and spacing.
Items are displayed inline, until there is no space and goes to a new line.

Parameters are :
* `itemsWidth`
* `itemsHeight`
* `verticalPadding`
* `horizontalPadding`
* `verticalSpacing`
* `horizontalSpacing`


```javascript
var dataview = new photonui.FluidView({
    containerElement: "div",
    itemElement: "div",
    columnElement: "div",
    itemsWidth: 70,
    itemsHeight: 30,
    verticalPadding: 10,
    horizontalPadding: 20,
    verticalSpacing: 5,
    horizontalSpacing: 10,
    items: [
        { name: "Bicycle", icon: "fa-bicycle", color: "green" },
        { name: "Subway", icon: "fa-subway", color: "blue" },
        { name: "Train", icon: "fa-train", color: "red" },
        { name: "Car", icon: "fa-car", color: "yellow" },
        { name: "Ship", icon: "fa-ship", color: "cyan" },
        { name: "Plane", icon: "fa-plane", color: "magenta" },
    ],
    columns: [
        {
            id: "icon",
            label: "Icon",
            value: function(item) {
                return new photonui.FAIcon({
                    iconName: item.icon,
                    color: item.color,
                })
            }
        },
        "name", 
    ],
});

photonui.domInsert(dataview, "demo");
```


[doc-dataview]: widgets/dataview.html
[doc-tableview]: widgets/tableview.html
[doc-fluidview]: widgets/fluidview.html


