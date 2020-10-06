$(function () {

    var card = $(".card").on("click", (event) => {
        $(event.currentTarget).toggleClass("card-back")
    });


    // function to flip a card

    const playHand = () => {
        if (handOfCards.length === 2) {
            checkHand()
        } else {
            handOfCards.push($(event.currentTarget).children().eq(1).text())
            // if after pushing the length is NOW 2
            if (handOfCards.length === 2) {
                playHand()
            }
        }
    }


})