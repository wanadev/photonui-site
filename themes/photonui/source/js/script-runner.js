(function() {
    var e_code = document.getElementById("demo-code");
    var e_error = document.getElementById("demo-error");
    var e_btn = document.getElementById("run-script");
    var demoJs = document.getElementById("demo-code-content").textContent;
    var editor;

    function runScript() {
        var script = editor.getValue();

        // Hide error banner
        e_error.style.display = "none";

        // Find and destroy all existing widgets
        var tags = document.querySelectorAll("*");
        var widgets = [];
        var widget;
        for (var i=0 ; i<tags.length ; i++) {
            if (!tags[i].id) continue;
            widget = photonui.getWidget(tags[i].id);
            if (widget) widgets.push(widget);
        }
        while (widget = widgets.pop()) {  // jshint ignore:line
            try {
                widget.destroy();
            }
            catch (error) {
                console.error(error);
                // Don't care
            }
        }

        // Run the code
        try {
            var demoFunction = new Function(script);  // jshint ignore:line
            demoFunction();
        }
        catch (error) {
            e_error.textContent = error;
            e_error.style.display = "block";
        }
    }

    function addRunButton() {
        var codes = document.querySelectorAll("figure.highlight.javascript .code pre");

        for (var i=0 ; i<codes.length ; i++) {
            var e_figure = codes[i];
            while (e_figure && e_figure.nodeName != "FIGURE") {
                e_figure = e_figure.parentNode;
            }

            var btn = document.createElement("button");
            btn.className = "run-script";

            var icon = document.createElement("i");
            icon.className = "fa fa-play";
            btn.appendChild(icon);

            var text = document.createTextNode(" Run / Edit");
            btn.appendChild(text);

            btn.onclick = function() {
                scrollTo(0, photonui.Helpers.getAbsolutePosition("content").y);
                this.innerHTML = this.innerHTML.replace(/<br(\s*\/)?>(<\/br>)?/ig, "\n");
                editor.setValue(this.textContent);
                highlight();
                runScript();
            }.bind(codes[i]);

            e_figure.insertBefore(btn, e_figure.firstChild);
        }
    }

    function mkEditor() {
        editor = new CodeMirror(function(elt) {
            e_code.appendChild(elt);
        }, {
            value: demoJs,
            mode: "javascript",
            theme: "tomorrow-night-bright",
            smartIndent: true,
            indentUnit: 4,
            tabSize: 4,
            indentWithTabs: false,
            //keyMap: "vim",
            lineNumbers: false,
            inputStyle: "contenteditable",
            scrollbarStyle: "null",
            extraKeys: {
                "Ctrl-Enter": function() {
                    runScript();
                }
            }
        });
    }

    e_btn.onclick = runScript;

    window.addEventListener("load", function() {
        mkEditor();
        runScript();
        addRunButton();
    });

})();
