title: Create a Custom Widget
layout: page-width-demo
demo_script: doc/empty-demo.js
---

Creating a PhotonUI widget is not difficult, but you will need to learn a few things about how PhotonUI is built and works behind the scene, especially the Class system, the widgets hierarchy and the automagical functionality of the Base PhotonUI class ([`photonui.Base`][ref-base]).

Also, I recommend you to look at the [class reference documentation][ref] and at the existing widgets to have a better understanding of how widgets work.


### Class System

The heart of the PhotonUI class system is based on a tiny javascript library called [Classy][classy].


#### Dealing With Classes

Declaring a class using Classy is very simple:

```js
var MyClass = Class.$extend({

    __init__: function(param1, param2) {
        // Constructor code here...
    },
    
    myMethod: function(param1, param2) {
        // Code of myMethod here...
    }
});
```

... and using it is straightforward:

```js
var foo = new MyClass(param1, param2);
foo.myMethod(param1, param2);
```

Extending an existing class is also simple:

```js
var MySecondClass = MyClass.$extend({

    myMethod: function(param1, param2) {
        this.$super(param1, param2);  // Call the myMethod of the parent class
        // Some more stuff...
    },
    
    mySecondMethod: function() {
        // Code for mySecondMethod...
    }
});
```

Classy provides a lot of interesting functionalities like mixin and class vars... For more information [read the Classy documentation][classy].

__NOTE¹:__ PhotonUI does not exposes the `Class` object in the global scope. If you want to use it, use `photonui.lib.Class` instead.


#### The "Base" Class

In PhotonUI, no widget directly extends the `Class` class from Classy. All widgets extend at least the [`photonui.Base`][ref-base] class, and most often, the [`photonui.Widget`][ref-widget] class.

##### Automagical Properties

The [`photonui.Base`][ref-base] automatically creates properties from available getters and setters. To understand the principle, let's study a simple example:

```js
var Person = photonui.Base.$extend({

    _firstName: "",          //  !!!!!!  NOTE¹
    
    getFirstName: function() {
        return this._firstName;
    },
    
    setFirstName: function(firstName) {
        this._firstName = firstName.toLocaleLowerCase();
    }

});
```

There are many ways to get and set the `firstName` of the `Person` class:

```js
// When instantiating the class
var p = new Person({firstName: "Anakin"});

// Using getter and setter
p.setFirstName("Leia");
var name = p.getFirstName();

// Using the automagically created property
p.firstName = "Han";
var name = p.firstName;

```

__NOTE¹:__ Pay attention to the underscore when we defined the `_firstName` attribute. Since the `firstName` property will be automatically created by the [`photonui.Base`][ref-base] class, you will create an infinite loop if you name your private property the same way.



##### The Constructor

The constructor method of all PhotonUI widgets **always** calls the constructor method of the [`photonui.Base`][ref-base] class, generally using the `this.$super(params)`. The constructor method of each widgets also **always** takes one argument: a parameter object that should be passed to the [`photonui.Base`][ref-base] class constructor.

A simple example to understand:

```js
var MyWidget = photonui.Widget.$extend({

    __init__: function(params) {
        this.$super(params);
        // Your constructor code here...
    }

});
```


### Choosing The Right Base Class

When you create a PhotonUI widget, you will extend different classes depending of what kind of widget you want to create.

There are mostly 5 types of widgets in PhotonUI:

* For **Interactive widgets** (like [`photonui.Button`][doc-button], [`photonui.TextField`][doc-textfield],...) or **Visual-Only widgets:** (like [`photonui.FAIcon`][doc-faicon], [`photonui.Label`][doc-label] or [`photonui.Separator`][doc-separator]), you will generally extend the [`photonui.Widget`][ref-widget] class,

* for **Non-Visual widgets** (like [`photonui.Translation`][doc-translation], [`photonui.FileManager`][doc-filemanager] or [`photonui.MouseManager`][doc-mousemanager]), you will extend the [`photonui.Base`][ref-base] class,

* for **Container widgets** (like [`photonui.Window`][doc-window] or [`photonui.MenuItem`][doc-menuitem]), you will probably extend the [`photonui.Container`][ref-container] class,

* and for **Layout widgets** (like [`photonui.BoxLayout`][doc-boxlayout] or [`photonui.GridLayout`][doc-gridlayout]) you should extend the [`photonui.Layout`][ref-layout] class.

Of course, if you want to build a more specific widget, you can extend more specialized classes.



### Minimal Widget Templates

Depending on what kind of widget you want to create, you will inherit from different classes, and you will have to define different methods to make things work.


#### Template for "Non-Visual" Widgets

Non-visual widgets have no specific method to overwrite to make things work:

```javascript
var MyWidget = photonui.Base.$extend({

    // Your methods and attributes here

});
```

You can however override the `destroy` method if it is relevant:

```js
    destroy: function() {
        // Clean things here...
        this.$super();
    }
```


#### Template for "Interactive" and "Visual-Only" Widgets

For interactive and visual widgets, you should at least implement the `getHtml` and the `_buildHtml` methods:

```javascript
var MyWidget = photonui.Widget.$extend({

    __init__: function(params) {
        this.$super(params);
        // Widget constructor...
    },

    getHtml: function() {
        // Return the outer HTML element of the widget
        return this.__html.div;
    },

    _buildHtml: function() {
        // We build the widget's HTML in this method.
        
        // All the HTML nodes go in the "this.__html" object
        this.__html.div = document.createElement("div");
        
        // All PhotonUI Widget have the "photonui-wiget" class on their
        // outer HTML elements
        this.__html.div.className = "photonui-widget photonui-mywidget";
    }

});
```


#### Template for "Container" Widgets

The container widgets have the same methods as the interactive and visual widgets **plus** `getContainerNode`:

```javascript
var MyWidget = photonui.Container.$extend({

    __init__: function(params) {
        this.$super(params);
        // Widget constructor
    },

    getHtml: function() {
        return null;  // Return the outer HTML element of the widget
    },
    
    getContainerNode: function() {
        return null;  // Return the HTML node that will contain the child 
    },

    _buildHtml: function() {
        // Build the HTML here
    }

});
```


#### Template for "Layout" Widgets

The layout widgets are the most difficult to build: in addition to `getHtml` and `_buildHtml` methods, you have to implement the `_updateLayout` method which will have to build the HTML that glues children widgets together in the layout.

You can look at the [`photonui.BoxLayout`][code-boxlayout] code if you want a simple example of layout widget. 

```javascript
var MyWidget = photonui.Layout.$extend({

    __init__: function(params) {
        this.$super(params);
        // Widget constructor...
    },

    getHtml: function() {
        return null;  // Return the outer HTML element of the widget
    },

    _buildHtml: function() {
        // Build the base HTML here
    },
    
    _updateLayout: function() {
        // Build / Update the HTML layout with the widgets listed in
        // this.children
    },

});
```


### Example: Creating a Simple Button Widget

No more theory, let's build a real widget: a simple button with a `text` property to define... the button's text, a `click` wEvent, and even the internationalisation support.


#### HTML and Basic Code

Here we just apply everything we saw before to create the visual part of the button. You can also add a bit of CSS to make it looks better, but that's not the topic.

```js
var SimpleButton = photonui.Widget.$extend({

    __init__: function(params) {
        this.$super(params);
    },

    getHtml: function() {
        return this.__html.button;
    },

    _buildHtml: function() {
        this.__html.button = document.createElement("button");
        this.__html.button.className = "photonui-widget photonui-simplebutton";
    }

});
```


#### The "text" Property

Then we add our `text` property that allows to set the button's text:

```js
_text: "Button",

getText: function() {
    return this._text;
},

setText: function(text) {
    this._text = text;
    photonui.Helpers.cleanNode(this.__html.button);
    this.__html.button.appendChild(document.createTextNode(text));
}

```

__NOTE:__ The code as we wrote it here works, but if the user never sets the `text` property, the widget will not display the default text defined in the class (in the `_text` attribute) since the setter is never called. To force properties to be refreshed even when not set, you must use the `_updateProperties` method:

```js
__init__: function(params) {
    ...
    this._updateProperties(["text"]);
},
```


#### Adding Interactivity (wEvent)

There are two kinds of events to deal with when you build a PhotonUI widget:

* The native javascript events, that will be used only behind the scene by the widget,

* and the wEvents, that are exposed through the widget API

So the widget binds native js event to its DOM elements and can expose a corresponding wEvent if required.

First, we have to declare the available wEvents of the widget. This can be done with the `_registerWEvents`:

```js
__init__: function(params) {
    ...
    this._registerWEvents(["click"]);
}
```

Then, we have to bind the native javascript `click` event to the button. For binding native js events, PhotonUI provides an event manager that will automatically unbind the events when the widget is destroyed; you can use it through two methods: `_bindEvent` and `_unbindEvent`.

```js
__init__: function(params) {
    ...
    this._bindEvent(
        "button-click",       // id (any string you want, unique in the widget)
        this.__html.button,   // HTML element
        "click",              // Native event name 
        this.__onButtonClicked.bind(this)  // Internal (private) callback
    );
}
```

Finally we create our internal callback that will be in charge of calling the callbacks of our wEvent using the `_callCallbacks` method:

```js
__onButtonClicked: function(event) {
    this._callCallbacks(
        "click",   // wEvent name
        [event]    // List of additionnal params passed to the callbacks
    );
}
```

__NOTE:__ The first argument of all the wEvent callbacks is always the widget that called it:

```js
function myWEventCallback( widget [, additionalParam1 [, additionalParam2 [, ...]]] ) {
    // Callback code here
}
```


#### The Final Code

```javascript
var SimpleButton = photonui.Widget.$extend({

    __init__: function(params) {
        //  /!\ WARNING: we have to register wEvents BEFORE calling
        //  the parent constructor, otherwise the declarative syntax will
        //  fail to register the callbacks...
        this._registerWEvents(["click"]);
    
        this.$super(params);
        
        this._updateProperties(["text"]);
        this._bindEvent(
            "button-click",
            this.__html.button,
            "click",
            this.__onButtonClicked.bind(this)
        );
    },
    
    _text: "Button",
    
    getText: function() {
        return this._text;
    },
    
    setText: function(text) {
        this._text = text;
        photonui.Helpers.cleanNode(this.__html.button);
        this.__html.button.appendChild(document.createTextNode(text));
    },

    getHtml: function() {
        return this.__html.button;
    },

    _buildHtml: function() {
        this.__html.button = document.createElement("button");
        this.__html.button.className = "photonui-widget photonui-simplebutton";
    },
    
    __onButtonClicked: function(event) {
        this._callCallbacks("click", [event]);
    }

});


// A bit of code to test our widget
var btn = new SimpleButton({
    text: "My First Widget",
    callbacks: {
        click: function(widget, event) {
            alert("Button clicked!");
        }
    }
});

photonui.domInsert(btn, "demo");
```


### Here We Are

Voilà, you created your first PhotonUI widget. Not too difficult right ? ;)



[classy]: http://web.archive.org/web/20140331110526/http://classy.pocoo.org/

[ref]: ../ref/
[ref-base]: ../ref/classes/photonui.Base.html
[ref-widget]: ../ref/classes/photonui.Widget.html
[ref-container]: ../ref/classes/photonui.Container.html
[ref-layout]: ../ref/classes/photonui.Layout.html

[code-boxlayout]: ../ref/files/src_container_layout_boxlayout.js.html#l42

[doc-window]: widgets/window.html
[doc-button]: widgets/button.html
[doc-translation]: widgets/translation.html
[doc-faicon]: widgets/faicon.html
[doc-boxlayout]: ../ref/classes/photonui.BoxLayout.html
[doc-gridlayout]: ../ref/classes/photonui.GridLayout.html
[doc-separator]: widgets/separator.html
[doc-label]: ../ref/classes/photonui.Label.html
[doc-textfield]: widgets/textfield.html
[doc-menuitem]: ../ref/classes/photonui.MenuItem.html
[doc-filemanager]: ../ref/classes/photonui.FileManager.html
[doc-mousemanager]: ../ref/classes/photonui.MouseManager.html



