title: IconView
layout: page-width-demo
demo_script: doc/widgets/iconview.js
---

### Documentation

* [Data views: DataView, FluidView, TableView, ...](../data-views.html)

### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More examples

#### Images

```javascript
var iconview = new photonui.IconView({
    iconWidth: 32,
    iconHeight: 32,
    items: [
        { image: "../../images/favicon.png" },
        { image: "../../images/favicon.png" },
        { image: "../../images/favicon.png" },
        { image: "../../images/favicon.png" },
        { image: "../../images/favicon.png" },
        { image: "../../images/favicon.png" },
    ],
});

photonui.domInsert(iconview, "demo");
```
