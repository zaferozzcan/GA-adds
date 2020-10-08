$(() => {



    $(".grid").on("click", makeMove)

    var move = 1
    let play = true;



    var gameSequence = ["", "", "", "", "", "", "", "", ""]
    function makeMove(e) {

        var clickedGrid = $(e.target)
        console.log();
        $(clickedGrid.children()[0]).addClass("letter-added")
        if ($(clickedGrid.children()[0]).text() == "" && play) {
            if ((move % 2) == 1) {
                clickedGrid.children()[0].innerHTML = `X`
                gameSequence.push("X")
                console.log(gameSequence)
                if (gameSequence.length >= 5 && gameSequence.length <= 9) {
                    checkWinner()
                }

            } else if (move % 2 == 0) {
                clickedGrid.children()[0].innerHTML = `O`
                gameSequence.push("O")
                console.log(gameSequence)
                if (gameSequence.length >= 5 && gameSequence.length <= 9) {
                    checkWinner()
                }

            }
            move++

        }


    }

    function assignSequence(num) {
        clickedGrid.children()[0].id
    }

    function checkWinner() {
        var box1 = $(".row")[0]

        if (gameSequence[1] == gameSequence[0] & gameSequence[2] == gameSequence[0]) {
            return $(".banner").children()[0].innerHTML = `${gameSequence[0]} wins the game`

        } else if (gameSequence[4] == gameSequence[2] & gameSequence[6] == gameSequence[2]) {
            return $(".banner").children()[0].innerHTML = `${gameSequence[2]} wins the game`

        }
    }


})




// const gameSequance = ["", "", "", "", "", "", "", "", "",]
// const turnArray = [["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]];
// var selectedArray = turnArray[Math.floor(Math.random() * 2)];
// var gameIndex = 0



// gameIndex++
// var clickedGrid = $(e.target)
// console.log(clickedGrid);
// if (clickedGrid.children()[0].innerHTML == "") {
//     $(clickedGrid.children()[0]).addClass("letter-added")
//     clickedGrid.children()[0].innerHTML = `${selectedArray[gameIndex]}`
//     if (gameIndex >= 9) {
//         $(".banner").children()[0].innerHTML = "Game is over."
//     }
// } else {
//     $(".banner").children()[0].innerHTML("")
// }

// var clickedGrid = $(e.target)
//         console.log($(clickedGrid.children()[0]).innerText);
//         if ($(clickedGrid.children()[0].innerText) != "") {
//             $(clickedGrid.children()[0]).addClass("letter-added")
//             clickedGrid.children()[0].innerHTML = `${selectedArray[gameIndex]}`
//             gameSequance.push(`${clickedGrid.children()[0].innerHTML}`)
//             if (gameIndex > 3 && gameIndex < 9) {
//                 checkWinner()
//             }
//         } else {
//             alert("you need to click on an occupied box")
//         }