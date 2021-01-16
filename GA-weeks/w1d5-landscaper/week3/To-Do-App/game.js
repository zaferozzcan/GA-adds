$(() => {

    let input;
    function handleClik() {
        input = $("input").val();

        let $div = $("<div>").addClass("to-do-item");
        let $p = $("<p>").addClass("item-head");
        $p.text(input)
        let $button = $("<button class=button-completed>").on("click", handleCompleted)
        $button.text("Completed")
        $div.append($p);
        $div.append($button);
        $("#to-do-list").append($div)

    }

    function handleCompleted(e) {
        // done-item
        var clickedItem = $(e.target).parent();
        clickedItem.removeClass().addClass("done-item")
        clickedItem[0].children[1].remove();
        let $remButton = $("<button class=button-remove>").on("click", handleRemove);
        $remButton.text("Remove")
        clickedItem.append($remButton)
        $("#completed").append(clickedItem);

    }

    function handleRemove(e) {
        var clickedItem = $(e.target).parent();
        clickedItem.remove()
    }

    $("#submit").on("click", handleClik)
    $(".button-completed").on("click", handleCompleted)

})