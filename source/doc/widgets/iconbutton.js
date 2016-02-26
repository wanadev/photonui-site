var btn = new photonui.IconButton({
    icon: new photonui.FAIcon("fa-send"),
    callbacks: {
        click: function(widget, event) {
            alert("clicked!");
        }
    }
});

photonui.domInsert(btn, "demo");
