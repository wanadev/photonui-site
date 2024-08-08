var dataview = new photonui.FluidView({
    containerElement: "div",
    itemElement: "div",
    columnElement: "div",
    itemsWidth: 70,
    itemsHeight: 30,
    verticalPadding: 10,
    horizontalPadding: 20,
    verticalSpacing: 5,
    horizontalSpacing: 10,
    items: [
        { name: "John", count: 2, color: "red" },
        { name: "Jane", count: 4, color: "blue" },
        { name: "Janeth", count: 12, color: "green" }
    ],
    columns: [ 
        "name", 
        "count", 
        {
            id: "color",
            label: "Color",
            value: function(item) {
                return new photonui.ColorButton({ value: item.color })
            }
        }
    ],
});

photonui.domInsert(dataview, "demo");