$(() => {


    var isFlipped = false;
    $(".card").on("click", (e) => {
        console.log(e.target);
        if (isFlipped == false) {
            $(e.target).addClass("flip")
            isFlipped = true;
        } else {
            $(e.target).removeClass("flip")
            isFlipped = false;
        }
    });


})