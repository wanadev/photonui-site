title: Quick Start
layout: page-width-demo
demo_script: doc/empty-demo.js
---

Welcome to the PhotonUI quick start guide. If you want to learn how to build a UI using PhotonUI, you are in the right place.


### Get PhotonUI

#### Standalone Version

To start using the standalone version of PhotonUI in your projects, you first need to download it:

* [Download the latest zipped version on GitHub][zip]

* or clone the [git repository][gh]: `git clone git@github.com:wanadev/PhotonUI.git`

All the files you need are in the `dist` folder. You just have to import

* `photonui-base.css` (must be imported first),

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


#### NPM and Browserify

If you are using [Browserify][browserify] in your project, a [NPM package][npm] is available. To install it, juste type:

```
npm install --save photonui
```

then, to use it in your project you just have to import PhotonUI:

```js
var photonui = require("photonui");
```


[browserify]: http://browserify.org/
[npm]: https://www.npmjs.com/package/photonui


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


### Building More Complex UI Using Layouts

There are 5 main types of widgets in PhotonUI:

* **Interactive widgets:** widgets used to get feedback from the user (e.g. [`photonui.Button`][doc-button], [`photonui.TextField`][doc-textfield],...),

* **Visual-Only widgets:** only intended to be displayed, no interaction with the user (e.g. [`photonui.FAIcon`][doc-faicon], [`photonui.Label`][doc-label], [`photonui.Separator`][doc-separator],...),

* **Non-Visual widgets:** widgets that do not display anything but that work behind the scene (e.g. [`photonui.Translation`][doc-translation], [`photonui.FileManager`][doc-filemanager], [`photonui.MouseManager`][doc-mousemanager],...),

* **Container widgets:** widgets, interactive or not, that can contain **one** child widget (e.g. [`photonui.Window`][doc-window], [`photonui.MenuItem`][doc-menuitem],...),

* and **Layout widgets:** widgets used to arrange other widgets in order to create a UI (e.g. [`photonui.BoxLayout`][doc-boxlayout], [`photonui.GridLayout`][doc-gridlayout],...).


So if we want to create a window with two buttons inside, we will need to use a layout. The most basic and simple layout widget is [`photonui.BoxLayout`][doc-boxlayout]. Let's use it to build our UI:


```javascript
// Create each widget of the UI
var win = new photonui.Window({
    title: "Layout Example",
    x: 100, y: 400,
    visible: true
});

var box = new photonui.BoxLayout({
    orientation: "vertical"
});

var btn1 = new photonui.Button({
    text: "Button 1"
});

var btn2 = new photonui.Button({
    text: "Button 2"
});

// Build the UI using the layout
box.addChild(btn1);  // Alternative syntax:
box.addChild(btn2);  // box.children = [btn1, btn2];

win.child = box;

// Add a callback to the first button
btn1.registerCallback("foobar", "click", function(widget, event) {
    alert("Button clicked!");
});
```


### One more thing

In the examples above, we "manually" built the UI by declaring several variables to store widgets and then assembling everything. There is a more efficient way to build your UI (called "declarative way") that is used in most of the example of the PhotonUI documentation.

Let's rewrite our last example (the window with two buttons) in the declarative way:

```javascript
new photonui.Window({
    title: "Layout Example",
    x: 100, y: 400,
    visible: true,
    child: new photonui.BoxLayout({
        orientation: "vertical",
        children: [
            new photonui.Button({
                text: "Button 1",
                callbacks: {
                    click: function(widget, event) {
                        alert("Button clicked!");
                    }
                }
            }),
            new photonui.Button({
                text: "Button 2"
            })
        ]
    })
});
```


### Here We Are

You are now ready to start using PhotonUI on your own project. :)



[doc-window]: widgets/window.html
[doc-button]: widgets/button.html
[doc-translation]: widgets/translation.html
[doc-faicon]: widgets/faicon.html
[doc-boxlayout]: widgets/boxlayout.html
[doc-gridlayout]: widgets/gridlayout.html
[doc-separator]: widgets/separator.html
[doc-label]: widgets/label.html
[doc-textfield]: widgets/textfield.html
[doc-menuitem]: widgets/menuitem.html
[doc-filemanager]: widgets/filemanager.html
[doc-mousemanager]: widgets/mousemanager.html

