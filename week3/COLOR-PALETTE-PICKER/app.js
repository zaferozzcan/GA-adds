$(function () {


    $("#generate").on("click", () => {
        const headingPalette = $("<h1>").text('Color Palette')
        $("#color-palette").before(headingPalette)
        const myPalette = $("<h1>").text('My Palette')
        $("#color-palette").after(myPalette)

        for (let i = 0; i < 150; i++) {
            const $square = $('<div>');
            $square.addClass('square');
            $square.on("click", move)
            $("#color-palette").append($square);
            const red = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
            $square.css('background-color', color);
        }
    })

    function move(event) {
        const target = $(event)
        console.log(target);
        // $("#my-palette").append(target)
        // target.remove()
    }


});

