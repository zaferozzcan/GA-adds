
$("body").css("text-align", "center")
var header = $("<h4></h4>");
header.text("Drink Section")
header.css("font-size", "35px");
header.css("color", "turquoise")

$("body").append(header)

var line = $("hr")
$("body").append(line)


var drinkList = "Coffee Espresso Cappuccino Latte-Tea Ice-Coffee Ice-Espreso Ice-Latte Ice-Tea".split(" ")




for (let index = 1; index < drinkList.length; index++) {
    var a = $("<h4></h4>")
    a.text(drinkList[index])
    $("body").append(a)
}
