

$(() => {

    let clickNumber = [];
    $(".button").on("click", (e) => {
        let clickedOp = []
        var buttonType = $(e.target).eq(0)[0].classList[1]


        if (buttonType === "button-number") {
            clickNumber.push($(e.target).eq(0)[0].innerText);
            $(".number-box").eq(0)[0].childNodes[1].innerText = clickNumber.join("");
        } if (buttonType === "button-operator") {
            clickOp.push($(e.target).eq(0)[0].innerText);
            $(".number-box").eq(0)[0].childNodes[3].innerText = clickArray.join("")
        }








    })
})





