$(function () {

    const $colorPalette = $('#color-palette');
    const $myPalette = $('#my-palette');
    const $generate = $('#generate');

    $("#generate").on("click", () => {
        $("color-palette").empty()
        const headingPalette = $("<h1>").text('Color Palette')
        $("#color-palette").before(headingPalette)
        const myPalette = $("<h1>").text('My Palette')
        $("#color-palette").after(myPalette)

        for (let i = 0; i < 152; i++) {
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
        const color = $(event.currentTarget).css('background-color');
        const target = $(event.target)
        const $square = $('<div>');
        $square.addClass('square');
        $square.css('background-color', color);
        $myPalette.append($square)
        $("color-palette").remove(target)
    }

});

