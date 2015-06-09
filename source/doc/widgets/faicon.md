title: FAIcon
layout: page-width-demo
demo_script: doc/widgets/faicon.js
---

This widget display icons using [Font Awesome](http://fontawesome.io).


### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### Icon list

* http://fontawesome.io/icons/


### Icon size

* http://fontawesome.io/examples/#larger


### Short declaration

`photonui.FAIcon` can be insancied in a shorter way:

```javascript
var icon = new photonui.FAIcon("fa-camera");
photonui.domInsert(icon, "demo");
```

With more params:

```javascript
var icon = new photonui.FAIcon("fa-camera", {
    size: "fa-3x",
    color: "#DB624F"
});

photonui.domInsert(icon, "demo");
```
