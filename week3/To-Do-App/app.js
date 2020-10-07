
{/* <div class="to-do-item">
    <p id="to-do-item-value">To Do Item Here</p>
    <button>COMPLETED</button>
</div> */}

$(function () {

    var toDoItemList = []
    // push item to the list and send it to the DOM
    $("#submit").on("click", function () {


        var textItem = $("#input-box").val()
        toDoItemList.push(textItem)

        for (let index = 0; index < toDoItemList.length; index++) {
            console.log(`toDoItem${index}`, toDoItemList);
            var div = $("<div>").addClass("to-do-item")
            var p = $("<p>").text(toDoItemList[index])
            var button = $("<button>").text("COMPLETED").addClass("button-completed")
            div.append(p)
            div.append(button)
            $("#to-do-list").append(div)
        }

        // add event listener on completed button and mote to the done list
        $(".button-completed").on("click", function (event) {
            var div = $(event.currentTarget).parent()
            console.log("div", div);
            var newdiv = $("<div>");
            newdiv.addClass("done-item")
            var p = $("<p>");
            p.text(div.children()[0].innerHTML)
            let deleteButton = $(`<button>`).text(`REMOVE`).attr(`id`, `removeButton`).on(`click`, remove)
            newdiv.append(p)
            newdiv.append(deleteButton)
            $("#completed").append($(newdiv))
            div.remove()

        })


        function remove() {
            $(".done-item").remove()

        }
    })

})

























// $(function () {


//     // push item to the list and send it to the DOM
//     $("#submit").on("click", function () {
//         var toDoItemList = []
//         var textItem = $("#input-box").val()
//         toDoItemList.push(textItem)

//         for (let index = 0; index < toDoItemList.length; index++) {
//             let div = $(`<div>`).addClass("to-do-item")
//             let p = $("<p>").text(toDoItemList[0]).addClass("item-text")
//             let button = $(`<button>`).text("COMPLETED").addClass(`completeButton`).on("click", complete)
//             div.append(p)
//             div.append(button)
//             $("#to-do-list").append(div);
//         }

//         // add event listener on completed button and mote to the done list
//         $(".button-completed").on("click", function (event) {
//             var newdiv = $("<div>");
//             newdiv.addClass("done-item")
//             var p = $("<p>");
//             p.text(div.children()[0].innerHTML)
//             let deleteButton = $(`<button>`).text(`REMOVE`).attr(`id`, `removeButton`).on(`click`, remove)

//         })

//         function complete() {
//             var selected = $(event.currentTarget).parent()
//             console.log(selected.children()[0]);
//             selected.removeClass().addClass("done-item");
//             selected.children()[1].innerHTML = "REMOVE"
//             $("#completed").append(selected);

//         }

//         function remove() {
//             $(".done-item").remove()

//         }


//     })

// })


