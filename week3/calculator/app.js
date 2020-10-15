

$(() => {

    let clickNumber = [];
    let secondNumber = []
    $(".button").on("click", (e) => {
        let clickedOp = []
        let result;
        var buttonType = $(e.target).eq(0)[0].classList[1]


        if (buttonType === "button-number") {
            $(".number-box").eq(0)[0].childNodes[1].innerText = clickNumber.join("");
        } if (clickNumber.length != 0 && buttonType === "button-operator") {
            clickedOp.push($(e.target).eq(0)[0].innerText);
            $(".number-box").eq(0)[0].childNodes[3].innerText = clickedOp.join("")
        } if (clickedOp.length != 0 && clickNumber.length != 0 && buttonType === "button-number") {
            secondNumber.push($(e.target).eq(0)[0].innerText)
            console.log("second number", $(".number-box").eq(0)[0].childNodes[5]);
            $(".number-box").eq(0)[0].childNodes[5].innerText = secondNumber.join("")
        }

        if (clickNumber && clickedOp && secondNumber && buttonType === $(e.target).eq(0)[0].innerHTML) {
            if (clickedOp === "+") {
                var res = Number(clickNumber) + Number(secondNumber)
                $(".number-box").eq(0)[0].childNodes[7].innerText = res
            }

        }





    })
})





