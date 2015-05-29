title: TextField
layout: page-width-demo
demo_script: doc/widgets/textfield.js
---

## Class Reference

* [{{ title }} class reference](../../ref/classes/photonui.{{ title }}.html)


## More example

```javascript
var grid = new photonui.GridLayout({
    verticalSpacing: 5,
    horizontalSpacing: 5,
    children: [
        new photonui.TextField({
            name: "username-field",
            placeholder: "Username",
            value: "Anakin",
            layoutOptions: {
                gridX: 1,
                gridY: 0
            }
        }),
        new photonui.Label({
            text: "Username:",
            forInputName: "username-field",
            layoutOptions: {
                gridX: 0,
                gridY: 0
            }
        }),
        new photonui.TextField({
            name: "password-field",
            type: "password",
            placeholder: "password",
            value: "D4RK51D3",
            layoutOptions: {
                gridX: 1,
                gridY: 1
            }
        }),
        new photonui.Label({
            text: "Password:",
            forInputName: "password-field",
            layoutOptions: {
                gridX: 0,
                gridY: 1
            }
        }),
        new photonui.Button({
            text: "Login",
            leftIcon: new photonui.FAIcon("fa-sign-in"),
            callbacks: {
                click: function(widget, event) {
                    var usernameField = photonui.getWidget("username-field");
                    var passwordField = photonui.getWidget("password-field");
                    alert(
                        "Username: " + usernameField.value +
                        ", Password: " + passwordField.value
                    );
                }
            },
            layoutOptions: {
                gridX: 0,
                gridY: 2,
                gridWidth: 2
            }
        })
    ]
});

photonui.domInsert(grid, "demo");
```
