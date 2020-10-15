

$(() => {

    $(".button").on("click", (e) => {
        let clickArray = [];
        clickArray.push($(e.target).eq(0)[0].innerText);
        var buttonType = $(e.target).eq(0)[0].classList[1]
        console.log(clickArray)

        if (buttonType === "button-number") {
            $(".number-box").eq(0)[0].childNodes[1].innerText = clickArray.join("");
        }







    })
})





