title: SpriteIcon
layout: widget
demo_script: doc/widgets/sprite-icon.js
---

## Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


## More example

```javascript
// Create the sprite sheet
var spriteSheet = new photonui.SpriteSheet({
    name: "default",
    imageUrl: "./spritesheet.png",
    size: 16,
    icons: {
        "remove":    [ 0,  0],
        "add":       [16,  0],
        "grayHeart": [32,  0],
        "redHeart":  [48,  0],
        "battery1":  [ 0, 16],
        "battery2":  [16, 16],
        "battery3":  [32, 16],
        "battery4":  [48, 16]
    }
});

// Use a SpriteIcon in a Button
var btn = new photonui.Button({
    text: "Sprite Icon",
    leftIcon: new photonui.SpriteIcon("default/grayHeart"),
    callbacks: {
        click: function(widget, event) {
            if (widget.leftIcon.iconName == "grayHeart") {
                widget.leftIcon.iconName = "redHeart";
            }
            else {
                widget.leftIcon.iconName = "grayHeart";
            }
        }
    }
});

photonui.domInsert(btn, "demo");
```
