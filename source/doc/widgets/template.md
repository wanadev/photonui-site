title: Template
layout: page-width-demo
demo_script: doc/widgets/template.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### Templating Syntax

The `photonui.Template` widget use lodash to generates template. Please read the lodash documentation for mode informations:

* [https://lodash.com/docs#template](https://lodash.com/docs#template)


### More examples

```javascript
var TEMPLATE = "";
TEMPLATE += "<ul>";
TEMPLATE += "<% for (var i = 0 ; i < list.length ; i++) { %>";
TEMPLATE += "<li><%- list[i] %></li>";
TEMPLATE += "<% } %>";
TEMPLATE += "</ul>";

var tpl = new photonui.Template({
    template: TEMPLATE,
    data: {
        list: ["Item 1", "Item 2", "Item 3"]
    }
});

var field = new photonui.TextField({
    value: "Item"
});

var btn = new photonui.Button({
    text: "Add",
    callbacks: {
        click: function (widget) {
            tpl.data.list.push(field.value);
        }
    }
})

var box = new photonui.BoxLayout({
    children: [
        new photonui.BoxLayout({
            orientation: "horizontal",
            children: [field, btn]
        }),
        tpl
    ]
});

photonui.domInsert(box, "demo");;
```
