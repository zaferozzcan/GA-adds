
{/* <div class="to-do-item">
    <p id="to-do-item-value">To Do Item Here</p>
    <button>COMPLETED</button>
</div> */}

$(function () {

    const toDoItemList = []

    // push item to the list and send it to the DOM
    $("#submit").on("click", function () {
        var textItem = $("#input-box").val()
        toDoItemList.push(textItem)

        for (let index = 0; index < toDoItemList.length; index++) {
            var div = $("<div>");
            div.addClass("to-do-item")
            var p = $("<p>");
            p.text(toDoItemList[index])
            var button = $("<button>")
            button.append("COMPLETED")
            div.append(p)
            div.append(button)
            $("#to-do-list").append(div)
        }

    })


    // event listener to completed button 






})
