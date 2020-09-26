
var winAmount = 1000;
var moneyEarned = 0;
var scissorNeeded = true;
var scissorBought = false
var pushLanwnMoverNeeded = true;
var pushLanwnMoverBought = false;
var powerLanwnMoverNeeded = true;
var powerLanwnMoverBought = false;
var teamNeeded = true;
var teamBought = false;


for (var i = 1; i <= 500; i++) {

    while (moneyEarned <= winAmount) {

        // scissor
        if (moneyEarned >= 5 && scissorNeeded) {
            var landScaperAnswer = prompt("Do you wanna buy a scissor? yes/no");
            if (landScaperAnswer == "yes" || landScaperAnswer == "YES" || landScaperAnswer == "Yes") {
                moneyEarned = moneyEarned - 5
                scissorNeeded = false
                scissorBought = true
                console.log("Landscaper has a scissor now!");
            }
        } else if (scissorBought) moneyEarned = moneyEarned + 5;
        else moneyEarned++


        // push lawnmower
        if (moneyEarned >= 25 && pushLanwnMoverNeeded) {
            var landScaperAnswer = prompt("Do you wanna buy a push lawnmower? yes/no");
            if (landScaperAnswer == "yes" || landScaperAnswer == "YES" || landScaperAnswer == "Yes") {
                moneyEarned = moneyEarned - 25
                pushLanwnMoverNeeded = false
                pushLanwnMoverBought = true;
                console.log("Landscaper has a push lawnmower now!");
            }
        } else if (pushLanwnMoverBought) moneyEarned = moneyEarned + 50;
        else moneyEarned = moneyEarned + 5;

        // powered lawnmower
        if (moneyEarned >= 250 && powerLanwnMoverNeeded) {
            var landScaperAnswer = prompt("Do you wanna buy a power lawnmower? yes/no");
            if (landScaperAnswer == "yes" || landScaperAnswer == "YES" || landScaperAnswer == "Yes") {
                moneyEarned = moneyEarned - 250
                powerLanwnMoverNeeded = false;
                powerLanwnMoverBought = true;
                console.log("Landscaper has a power lawnmower now!");
            }
        } else if (powerLanwnMoverBought) moneyEarned = moneyEarned + 100;
        else moneyEarned = moneyEarned + 25;


        // team 
        if (moneyEarned >= 500 && teamNeeded) {
            var landScaperAnswer = prompt("Do you wanna hire a team? yes/no");
            if (landScaperAnswer == "yes" || landScaperAnswer == "YES" || landScaperAnswer == "Yes") {
                moneyEarned = moneyEarned - 500;
                teamNeeded = false;
                teamBought = true;
                console.log("Landscaper has a team now!");
            }
        } else if (teamBought) moneyEarned = moneyEarned + 250;
        else moneyEarned = moneyEarned + 100;

    }
    console.log("Landscaper won!");
    console.log(moneyEarned)

}