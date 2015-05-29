title: Quick Start
layout: page-width-demo
demo_script: doc/empty-demo.js
---

Welcome to the PhotonUI quick start guide. If you want to learn how to build UI using PhotonUI, you are at the right place.


### Get PhotonUI

To start using PhotonUI in your projects, you first need to download it:

* [Download the latest zipped version on GitHub][zip]

* or clone the [git repository][gh]: `git clone git@github.com:wanadev/PhotonUI.git`

All find you need are in the `dist` folder. You just have to import

* `photonui-base.css` (must be inported first),

* `photonui-theme-particle.css`,

* and`photonui.js` (or `photonui.min.js`)

in your page:


```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link type="text/css" rel="stylesheet" href="photonui/photonui-base.css" />
        <link type="text/css" rel="stylesheet" href="photonui/photonui-theme-particle.css" />
        <script src="photonui/photonui.js"></script>
        
    </head>
    <body>
    </body>
</html>
```

[zip]: https://github.com/wanadev/PhotonUI/archive/master.zip
[gh]: https://github.com/wanadev/PhotonUI


### Using Your First Widgets

Some widgets, like [`photonui.Window`][doc-window] are "root widgets" ; that means they don't need a parent to be displayed on the page. To use a root widget, you just have to instantiate its class with the desired parameters:

```javascript
var win = new photonui.Window({
    title: "Hello World",
    height: 100,
    x: 100, y: 400,
    visible: true
});
```

The majority of the widgets are not "root widgets", they need a parent to be displayed.

You can give them any DOM element as parent:

```javascript
// Create a button
var btn = new photonui.Button();

// and insert it in the HTML element whose id is "demo"
photonui.domInsert(btn, "demo");
```

... or any PhotonUI widget that can contain other widgets ("container" and "layout" widgets):

```javascript
// Create a window
var win = new photonui.Window({
    title: "Hello World",
    padding: 10,
    x: 100, y: 400,
    visible: true
});

// Create a button
var btn = new photonui.Button();

// Add the button in the window
win.child = btn;
```

[doc-window]: widgets/window.html


### Binding Events

Each PhotonUI Widget comes with a set of defined events (called `wEvent`) to which you can attach one or more callbacks.

For example, the [`photonui.Button`][doc-button] widget has a `click` wEvent that is fired each time the user clicks on the button:

```javascript
// Create a button
var btn = new photonui.Button();

// define a callback for the "click" WEvent
function onBtnClicked(widget, event) {
    alert("Button clicked!");
}
btn.registerCallback(
    "clic-clac",   // id (any string you want, must be unique for the widget)
    "click",       // wEvent (the name of the event)
    onBtnClicked   // callback (called when the wEvent is fired)
);

// and insert it in the HTML element whose id is "demo"
photonui.domInsert(btn, "demo");
```

[doc-button]: widgets/button.html


### Here We Are

You are now able to start using PhotonUI on your own project.

