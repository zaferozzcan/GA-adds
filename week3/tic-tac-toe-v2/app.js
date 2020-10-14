$(() => {

    // create the grid!



    for (let i = 0; i < 3; i++) {
        let $row = $("<div>")
        $row.addClass(`row ${i}`)
        $("body").append($row)

        for (let j = 0; j < 3; j++) {
            let $square = $("<div>")
            $square.addClass(`square ${i}${j}`)
            $row.append($square)
        }
    }

    let move = 1
    let play = true;

    $(`.square`).click((e) => {
        var string = $($(".square")[0]).children()[0].innerHTML
        let sq = $(e.target)
        console.log(sq[0].classList[1]);

        if (move % 2 == 1) {
            let $h1 = $(`<h1>`).addClass("added-letter")
            $($h1).text("X")
            sq.append($h1)
        } else {
            let $h1 = $(`<h1>`).addClass("added-letter")
            $($h1).text("O")
            sq.append($h1)
        }
        move++
    })







})

// sq[0].classList[0] 00