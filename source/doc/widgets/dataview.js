var dataview = new photonui.DataView({
    items: [
        { name: "John", count: 2 },
        { name: "Jane", count: 4 },
        { name: "Janeth", count: 12 }
    ],
    columns: [ 
        {
            id: "name",
            value: function(item) { return `${item.name}: ` }
        }, 
        {
            id: "count",
            value: function (item) { return item.count }
        }
    ]
});

photonui.domInsert(dataview, "demo");