title: Select
layout: page-width-demo
demo_script: doc/widgets/select.js
---

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More example

```javascript
var select = new photonui.Select({
    iconVisible: true,
    children: [
        new photonui.MenuItem({
            value: "text-file",
            text: "Text",
            icon: new photonui.FAIcon("fa-file-text-o")
        }),
        new photonui.MenuItem({
            value: "image-file",
            text: "Image",
            icon: new photonui.FAIcon("fa-file-image-o")
        }),
        new photonui.MenuItem({
            value: "pdf-file",
            text: "PDF",
            icon: new photonui.FAIcon("fa-file-pdf-o")
        })
    ]
});

photonui.domInsert(select, "demo");
```


