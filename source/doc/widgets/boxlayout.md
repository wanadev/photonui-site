title: BoxLayout
layout: page-width-demo
demo_script: doc/widgets/boxlayout.js
---

`photonui.BoxLayout` is a layout widget that allow you to align widgets on vertical or horizontal boxes (1D grid).


### Globale Options

`photonui.BoxLayout` provides options to define its look and feel. Globale options are applied to the layout itself.


#### orientation

Define if the widgets must be displayed vertically or horizontally.

Possible values:

* `vertical` (default)
* `horizontal`

<p style="text-align: center;"><img src="boxlayout-orientation.png" alt="BoxLayout Orientation Schema" /></p>


#### spacing

Define the spacing between the widgets (5px by default). 

<p style="text-align: center;"><img src="boxlayout-spacing.png" alt="BoxLayout Spacing Schema" /></p>


#### verticalPadding

Define the spacing between the widgets and the left and right edge of the layout (0px by default).

<p style="text-align: center;"><img src="boxlayout-verticalpadding.png" alt="BoxLayout Vertical Padding Schema" /></p>


#### horizontalPadding

Define the spacing between the widgets and the top and bottom edge of the layout (0px by default).

<p style="text-align: center;"><img src="boxlayout-horizontalpadding.png" alt="BoxLayout Horizontal Padding Schema" /></p>


### Layout Options

`photonui.BoxLayout` allow widgets to sets plenty of options to customize the way they are displayed in the layout. Layout options are associated to only one widget of the layout.

#### align

Define how the widget must be aligned in the layout.

Possible values:

* `stretch` (default, alias: `expend`): the widget is stretched to take all available space in its box,

* `start` (alias: `top`, `left`): the widget is placed at the top or at the left of its box depending of the layout orientation,

* `center` (alias: `middle`): the widget centered in its box,

* `end` (alias: `bottom`, `right`): the widget is placed at the bottom or at the right of its box depending of the layout orientation.

<p style="text-align: center;"><img src="boxlayout-lo-align.png" alt="BoxLayout Align Layout Option Schema" /></p>


#### order

Define the order of the widgets (0 by default).

```javascript
var box = new photonui.BoxLayout({
    children: [
        new photonui.Button({
            text: "Third",
            layoutOptions: {
                order: 42
            }
        }),
        new photonui.Button({
            text: "First",
            layoutOptions: {
                order: 1
            }
        }),
        new photonui.Button({
            text: "Second",
            layoutOptions: {
                order: 2
            }
        })
    ]
});

photonui.domInsert(box, "demo");
```


#### width

Define the fixed width of the widget (default = `null`, `null` means "auto").


#### minWidth

Define the minimum width of the widget (default = `null`, `null` means no limitation).


#### maxWidth

Define the maximum width of the widget (default = `null`, `null` means no limitation).


#### height

Define the fixed height of the widget (default = `null`, `null` means "auto").


#### minHeight

Define the minimum height of the widget (default = `null`, `null` means no limitation).


#### maxHeight

Define the maximum height of the widget (default = `null`, `null` means no limitation).


### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### More example

```javascript
var box = new photonui.BoxLayout({
    orientation: "vertical",  // "vertical" or "horizontal"
    spacing: 10,              // spacing between widgets
    children: [

        // "align" layout option
        new photonui.Button({
            text: "align: stretch",
            layoutOptions: {
                align: "stretch" // default, alias: expend
            }
        }),
        new photonui.Button({
            text: "align: start",
            layoutOptions: {
                align: "start"   // alias: left, top
            }
        }),
        new photonui.Button({
            text: "align: center",
            layoutOptions: {
                align: "center"  // alias: middle
            }
        }),
        new photonui.Button({
            text: "align: end",
            layoutOptions: {
                align: "end"     // alias: right, bottom
            }
        }),

        // "order" layout option (if not defined, order = 0)
        new photonui.Button({
            text: "order: -1",
            layoutOptions: {
                order: -1,
            }
        }),
        new photonui.Button({
            text: "order: 2",
            layoutOptions: {
                order: 2,
            }
        }),
        new photonui.Button({
            text: "order: 1",
            layoutOptions: {
                order: 1,
            }
        }),

        // widget sizing layout options
        new photonui.Button({
            text: "width: 100px",
            layoutOptions: {
                width: 100
            }
        }),
        new photonui.Button({
            text: "maxWidth: 200px",
            layoutOptions: {
                maxWidth: 200
            }
        }),
        new photonui.Button({
            text: "minWidth: 300px",
            layoutOptions: {
                minWidth: 300
            }
        }),
        new photonui.Button({
            text: "height: 100px",
            layoutOptions: {
                height: 100
            }
        }),
        // ... and so on with minHeight and maxHeight

        // Of course you can mix options
        new photonui.Button({
            text: "MIX",
            layoutOptions: {
                align: "center",
                order: 42,
                width: 100,
                height: 100
            }
        }),
    ]
});

photonui.domInsert(box, "demo");
```


