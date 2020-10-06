


$(function () {

    const toDoItemList = []

    // get the text item from the input and submit into the list array upon click button

    $("#submit").on("click", function () {
        var textItem = $("#input-box").val()
        toDoItemList.push(textItem)
    })





})
