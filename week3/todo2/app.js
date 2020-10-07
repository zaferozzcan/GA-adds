
$(function () {
    $("#submit").on("click", onAdd)

    function onAdd() {
        console.log("got click");
        var item = $("#input-box").val();
        let toDoItems = $("<div>").addClass("to-to-item")
        let p = ("<p>").text(item)
        item.addClass()
        let button = ("<button>").text("COMPLETE").addClass("buttonComplete").on
            ("click", complete)
    }


    let complete = (event) => {
        $("to-do-list").append()
    }

})


