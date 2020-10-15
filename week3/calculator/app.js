

$(() => {


    var firstNumber = []
    let secondNumber = []
    let operator = [];

    $(".button").on("click", (e) => {
        var buttonType = $(e.target).eq(0)[0].classList[1]
        let result = 0;
        function wrappper(array, node) {
            if (buttonType == "button-number") {
                array.push($(e.target).eq(0)[0].innerText)
                $(".number-box").eq(0)[0].childNodes[node].innerText = array.join("");
            } else {
                array.push($(e.target).eq(0)[0].innerText)
                $(".number-box").eq(0)[0].childNodes[node].innerText = array.join("");
            }
            console.log("first", firstNumber)
            console.log("second", secondNumber)
            console.log("operator", operator)

        }

        function opr(op) {
            var first = Number(firstNumber.join(""))
            var second = Number(secondNumber.join(""))
            if (op == "+") {
                return first + second
            } else if (op == "-") {
                return first - second
            } else if (op == "x") {
                return first * second
            } else {
                return first / second
            }
        }



        if (buttonType === "button-number" && operator.length < 1) {
            wrappper(firstNumber, 1)
        } else if (firstNumber.length >= 1 && buttonType === "button-number" && operator.length >= 1) {
            wrappper(secondNumber, 5)
        } else if (buttonType != "button-number" && operator.length < 1) {
            wrappper(operator, 3)
        }

        if ($(e.target).eq(0)[0].innerText == "=") {
            if (firstNumber.length != 0 && secondNumber !== 0 && operator.length != 0) {
                $(".number-box").eq(0)[0].childNodes[7].innerText = opr(operator[0]);
            }
        }



    })
})





