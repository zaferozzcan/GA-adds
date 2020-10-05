
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


function elementCreatorText(e, text) {
    var a = $(`<${a}></${a}>`)
    a.text(`${text}`)
    $("body").append(a)

}

function elementCreatorHr() {
    var a = $(`<hr>`)
    $("body").append(a)

}



elementCreatorHr()


// sandwich section
elementCreatorText("h4", "Click To Eat Sandwich");
a.css("Color", "red")


var peanutJelly = $("<h1></h1>");
var grilledCheese = $("<h1></h1>");
var roastBeef = $("<h1></h1>");

peanutJelly.text("Peanut Butter Jelly")
grilledCheese.text("Grilled Cheese");
roastBeef.text("Roast Beef")

$("body").append(peanutJelly)
$("body").append(grilledCheese)
$("body").append(roastBeef)

function handlePBclick() {
    var peanutJellyCount = 0
    peanutJellyCount++
    var newImage = $("<img>")
    newImage.attr("src", "./img/peanut.jpeg")
    peanutJelly.after(newImage)
    alert("Yummy Peanut Jelly Sandwich!");
    alert(`You just had ${peanutJellyCount}`)
}

function handleGCclick() {
    var grilledCheeseCount = 0
    grilledCheese++
    var newImage = $("<img>")
    newImage.attr("src", "./img/grilled.jpeg")
    grilledCheese.after(newImage)
    alert("Yummy Peanut Grilled Cheese!");
    alert(`You just had ${grilledCheeseCount}`)
}
function handleRBclick() {
    var roastBeefCount = 0
    roastBeefCount++
    var newImage = $("<img>")
    newImage.attr("src", "./img/roast.jpeg")
    roastBeef.after(newImage)
    alert("Yummy Peanut Roast Beef!");
    alert(`You just had ${roastBeefCount++}`)
}


peanutJelly.click(handlePBclick)
grilledCheese.click(handleGCclick)
roastBeef.click(handleRBclick)


elementCreatorHr()





// random number generator
var container = $("<div>")
var n4Rand = $("<h4>").text("Generate Random Number")
container.append(n4Rand)
container.css("background-color", "gray");
container.css("height", "50px")


$("body").append(container)





