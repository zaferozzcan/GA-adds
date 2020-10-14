

$(() => {





    $(".button").on("click", (e) => {
        var valueClicked = $(e.target).eq(0)[0].innerText
        var buttonType = $(e.target).eq(0)[0].classList[1]


        if (buttonType === "button-number") {
            console.log(valueClicked)
            $("number-box").innerHTML = valueClicked
        }

    })







})