$(() => {


    var isFlipped = false;
    $(".card").on("click", (e) => {
        console.log(e.target);
        $(e.target).toggleClass("flip")
        isFlipped = true
    });


})