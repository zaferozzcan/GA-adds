
{/* <div class="to-do-item">
    <p id="to-do-item-value">To Do Item Here</p>
    <button>COMPLETED</button>
</div> */}

$(function () {


    // push item to the list and send it to the DOM
    $("#submit").on("click", function () {
        var toDoItemList = []
        var textItem = $("#input-box").val()
        toDoItemList.push(textItem)

        for (let index = 0; index < toDoItemList.length; index++) {
            var div = $("<div>");
            div.addClass("to-do-item")
            div.attr("key", index);
            div.attr("type", "button")
            var p = $("<p>");
            p.text(toDoItemList[index])
            var button = $("<button>")
            button.addClass("button-completed")
            button.text("COMPLETED")
            div.append(p)
            div.append(button)
            $("#to-do-list").append(div)
        }


        // event listener on completed button and mote to the done list
        $(".button-completed").on("click", function (event) {
            var div = $(event.currentTarget).parent()
            console.log($(div.children()[1].innerHTML));
            div.children()[1].innerHTML = "REMOVE"
            $(div).removeClass().addClass("done-item")
            $("#completed").append(div)

        })

        $("done-item button").on("click", function () {

        })
    })






})




