title: Translation
layout: page-width-demo
demo_script: doc/widgets/translation.js
---

`photonui.Translation` adds internationalization functionalities to your application.

**NOTE:** When you instantiate the translation widget, you can pass to it the `noGlobal` option to avoid the creation of the global `window._` function. If you do so, you will have to use the `lazyGettext()` method of `photonui.Translation` instead of the `_()` global function.


### Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


### Extracting strings and generating catalogs

`photonui.Translation` is based on *stone.js*. You can find its documentation on GitHub:

* https://github.com/flozz/stone.js


### More example

```javascript
// Translation
var tr = new photonui.Translation();
tr.addCatalogs({
    "fr": {
        "Hello World": "Bonjour le monde",
        'Browser language is "{lang}".': "La langue du navigateur est « {lang} ».",
        "Close": "Fermer"
    },
    "it": {
        "Hello World": "Buongiorno il mondo",
        'Browser language is "{lang}".': 'La lingua del browser è "{lang}".',
        "Close": "Chiudere"
    }
});
tr.locale = tr.guessUserLanguage();  // Browser language

// Language selector
var layout = new photonui.BoxLayout({
    orientation: "vertical",
    children: [
        new photonui.Label({
            text: _('Browser language is "{lang}".', {
                lang: tr.guessUserLanguage()
            })
        }),
        new photonui.Select({
            name: "lang",
            placeholder: "Choose a language...",
            value: tr.locale,
            children: [
                new photonui.MenuItem({value: "en", text: "English"}),
                new photonui.MenuItem({value: "fr", text: "Français"}),
                new photonui.MenuItem({value: "it", text: "Italiano"}),
            ],
            callbacks: {
                "value-changed": function(widget, value) {
                    tr.locale = value;
                }
            }
        })
    ]
});
photonui.domInsert(layout, "demo");

// A window
var pos = photonui.Helpers.getAbsolutePosition("demo");
var win = new photonui.Window({
    visible: true,
    title: _("Hello World"),
    x: pos.x, y: pos.y + 100,
    width: 250,
    padding: 20,
    child: new photonui.Button({
        text: _("Close"),
        callbacks: {
            "click": function() { win.hide(); }
        }
    }),
    callbacks: {
        "close-button-clicked": function(widget) { widget.hide(); }
    }
});

```


