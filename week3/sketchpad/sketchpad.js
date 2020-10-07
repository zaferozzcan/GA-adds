$(() => {

    $("#submit").on("click", function () {
        const value = $("#input-box").val()
        $("#input-box").val("")

        const changeColor = (event) => {
            $(event.target).addClass('pink');
        }

        for (let i = 0; i < value; i++) {
            let $div = $('<div>');
            $div.addClass('square');
            $('body').append($div);
        }

        $('div').on('mouseover', changeColor);

    })




});