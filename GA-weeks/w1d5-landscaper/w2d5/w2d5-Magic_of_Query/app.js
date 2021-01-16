// if (typeof jQuery == 'undefined') {
//     console.log('oops! I still have to link my jQuery properly!');
// } else { console.log('I did it! I linked jQuery and this js file!') };

$(document).ready(function () {


    // year1
    var $container = $("#container")
    console.log($container);

    var $h1 = $("<h1></h1>")
    $h1.text("Hogwarts")

    $('body').append($h1)


    // year2
    var $h2 = $("<h2></h2>")
    $h2.text("Zafer");

    var $h3 = $("<h3></h3>");
    $h3.text("Gryffindor")

    var $h4 = $("<h4></h4>");
    $h4.text("Roben")
    $h4.addClass("dog")

    $('body').append($h2);
    $('body').append($h3);
    $('body').append($h4);



    // Year3

    var $ul = $("<ul></ul>")
    $li = $("<li></li>")
    $li.text("butter beer")
    $("body").append($ul);
    $($ul).append($li)
    $li1 = $("<li></li>")
    $li1.addClass("secret")
    $li1.text("invisibility cloak")
    $($ul).append($li1)
    $li2 = $("<li></li>")
    $li2.addClass("secret")
    $li2.text("magic map")
    $($ul).append($li2)
    $li3 = $("<li></li>")
    $li3.addClass("secret")
    $li3.text("time turnerr")
    $($ul).append($li3)
    $li4 = $("<li></li>")
    $li4.addClass("dogg")
    $li4.text("leash")
    $($ul).append($li4)
    $li5 = $("<li></li>")
    $li5.text("Bertie Bott's Every Flavor [Jelly] Beans.")
    $($ul).append($li5)

    $(".secret").css("opacity", "0.5")


    //  year 4
    $h5 = $("<h5></h5>")
    $h5.text("Spring 2017")
    $("body").append($h5);


    let tableElemets = ["$ table", "$ thead", "$ tr", "$ th"]

    $table = $("<table></table>");
    $thead = $("<thead></thead>");

    $th1 = $("<th></th>")
    $th2 = $("<th></th>")

    $("body").append($table);
    $table.append($thead);
    $thead.append($th1)
    $thead.append($th2)

    $th1.text("Day");
    $th2.text("Classes")


    $tbody1 = $("<tbody></tbody>");
    $tr1 = $("<tr></tr>");
    $td1 = $("<td></td>");
    $td2 = $("<td></td>");


    $table.append($tbody1);
    $tbody1.append($tr1);
    $tr1.append($td1);
    $tr1.append($td2);
    $td1.text("Monday-")
    $td2.text("Herbology, Divination, History of Magic, Charms, Potions")


    $tbody2 = $("<tbody></tbody>");
    $tr2 = $("<tr></tr>");
    $td3 = $("<td></td>");
    $td4 = $("<td></td>");

    $table.append($tbody2);
    $tbody2.append($tr2);
    $tr2.append($td3);
    $tr2.append($td4);
    $td3.text("Tuesday")
    $td4.text("Herbology, Divination, History of Magic, Charms, Potions")


    $tbody3 = $("<tbody></tbody>");
    $tr3 = $("<tr></tr>");
    $td5 = $("<td></td>");
    $td6 = $("<td></td>");

    $table.append($tbody3);
    $tbody3.append($tr3);
    $tr3.append($td5);
    $tr3.append($td6);
    $td5.text("Wednesday")
    $td6.text("Herbology, Divination, History of Magic, Charms, Potions")

    // Year 5

    $li.remove()
    $li = $("<li></li>")
    $li1.before($li)
    $li.text("butter beer")
    $li.css("color", "red")
    $(".dog").remove()


    var $h4 = $("<h4></h4>");
    $("html").append($h4)
    $h4.text("Roben")
    $h4.addClass("dog")
    $h3.after($h4)


    // Year 6
    $(".secret").hide().delay(2000)
    $(".secret").show("slow")


    $li4.addClass("cabbage")
    $li4.removeClass("cabbage")

    $h52 = $("<h5></h5>")
    $h52.text("Fall 2018")
    $("body").append($h52);

    $ul2 = $("<ul></ul>")
    $liul2 = $("<li></li>")
    $liul2.text("butter beer")
    $("body").append($ul2);
    $($ul2).append($liul2)


})



    // $tbody2 = $("<tbody></tbody>");
      // $tr2 = $("<tr></tr>");
      // $td3 = $("<td></td>");
      // $td4 = $("<td></td>");

      // $table.append($tbody2);
      // $tbody2.append($tr2);
      // $tr2.append($td3);
      // $tr2.append($td4);
      // $td3.text("Monday-")
      // $td4.text("Herbology, Divination, History of Magic, Charms, Potions")

      // const days = ["Monday Tuesday Wednesday Thursday Friday".split(" ")]
      // const classes = ["Herbology-Divination-History of Magic-Charms-Potions-Transfiguration-Defense-Against the Dark Arts-Quidditch practice".split("-")]

      // for (let i = 2; i < 10; i += 2) {
      //     $table.append($tbody[i]);
      //     $tbody[i] = $("<tbody></tbody>");
      //     $tr[i] = $("<tr></tr>");
      //     $td[i + 1] = $("<td></td>");
      //     $td[i + 2] = $("<td></td>");
      //     $tbody[i].append($tr[i]);
      //     $tr[i].append($td[i + 1]);
      //     $tr[i].append($td[i + 2]);
      //     $td[i + 1].text(days[i])
      //     $td[i + 2].text(`${classes[Math.floor(Math.random() * classes.length)]}, ${classes[Math.floor(Math.random() * classes.length)]},${classes[Math.floor(Math.random() * classes.length)]},${classes[Math.floor(Math.random() * classes.length)]},${classes[Math.floor(Math.random() * classes.length)]}`)

      // }