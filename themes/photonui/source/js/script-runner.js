(function() {
    var e_code = document.getElementById("demo-code");
    var e_error = document.getElementById("demo-error");
    var e_btn = document.getElementById("run-script");

    function runScript() {
        var script = e_code.textContent;

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
        while (widget = widgets.pop()) {
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
            var demoFunction = new Function(script);
            demoFunction();
        }
        catch (error) {
            e_error.textContent = error;
            e_error.style.display = "block";
        }
    }

    function highlight() {
        hljs.highlightBlock(e_code);
        e_code.className = "";  // Remove styles applied to the <pre>
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
                e_code.textContent = this.textContent;
                highlight();
                runScript();
            }.bind(codes[i]);

            e_figure.insertBefore(btn, e_figure.firstChild);
        }
    }

    e_btn.onclick = runScript;

    e_code.onblur = function() {
        e_code.innerHTML = e_code.innerHTML.replace(/<br(\s*\/)?>(<\/br>)?/ig, "\n");
        highlight();
    }

    e_code.onfocus = function() {
        // Remove highlight
        var tags = document.querySelectorAll("#demo-code *");
        for (var i=0 ; i<tags.length ; i++) {
            tags[i].className = "";
        }
    }

    e_code.onkeydown = function(event) {
        // Ctrl + Enter -> RUN
        if (event.ctrlKey && event.keyCode == 13) {
            runScript();
            event.preventDefault();
        }
        // Tab -> insert spaces
        else if (event.keyCode == 9) {
            document.execCommand("insertText", false, "    ");
            event.preventDefault();
        }
    }

    window.addEventListener("load", function() {
        runScript();
        highlight();
        addRunButton();
    });

})();
