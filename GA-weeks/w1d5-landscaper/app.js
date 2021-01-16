
// // alert("JS is working!");

// function Landscaper() {
//     var landscaperGame = {
//         currentLevel: 0,
//         tools: {
//             toolName: ["teeth", "scissor", "pushLawnmower", "powerLawnmower", "team"],
//             toolCost: [0, 5, 25, 250, 500],
//             toolBenefit: [1, 5, 50, 100, 250],
//             toolNeeded: [false, true, true, true, true],
//             toolOwned: [true, false, false, false, false]

//         },
//         goal: 1000,
//         moneyEarned: 0,
//         gameFunctions: {
//             start: () => {
//                 console.log("Started making money with using " + landscaperGame.tools.toolName[landscaperGame.currentLevel]);

//             },
//             levelUp: () => {
//                 var currentLevel = 0
//                 // for (let i = 0; i < landscaperGame.tools.toolName.length - 1; i++) {
//                 if (landscaperGame.moneyEarned >= landscaperGame.tools.toolCost[landscaperGame.currentLevel + 1] && landscaperGame.tools.toolNeeded[landscaperGame.currentLevel + 1]) {

//                     var toolRequired = prompt("Do you wanna buy a " + landscaperGame.tools.toolName[landscaperGame.currentLevel + 1] + " or you can restart the game?  yes/no/restart");
//                     if (toolRequired.toLowerCase() === "yes") {
//                         landscaperGame.moneyEarned = landscaperGame.moneyEarned - landscaperGame.tools.toolCost[currentLevel++];
//                         landscaperGame.tools.toolNeeded[currentLevel++] = false;
//                         landscaperGame.tools.toolOwned[currentLevel++] = true;
//                         console.log("Landscaper has a ", landscaperGame.tools.toolName[landscaperGame.currentLevel + 1], " now!");
//                         currentLevel++
//                     }
//                 } else if (landscaperGame.tools.toolOwned[landscaperGame.currentLevel]) landscaperGame.moneyEarned = landscaperGame.moneyEarned + landscaperGame.tools.toolBenefit[currentLevel + 1];
//                 else landscaperGame.moneyEarned = landscaperGame.moneyEarned + landscaperGame.tools.toolBenefit[landscaperGame.currentLevel]
//                 // }
//             },
//             reset: () => {
//                 var makeSure = this.prompt("You will lose thetools you have had! Are you sure you wanna start over?");
//                 if (makeSure.toLowerCase() === "yes") {
//                     landscaperGame.moneyEarned = 0;
//                     landscaperGame.currentLevel = 0;
//                     landscaperGame.gameFunctions.start()
//                 }
//             }
//         }

//     }


//     for (let i = 1; i < 20; i++) {
//         landscaperGame.gameFunctions.start();
//         landscaperGame.gameFunctions.levelUp();
//     }



// }




// Landscaper();




var winAmount = 1000;
var moneyEarned = 0;
var currentToolIndex = 0;
var tools = {
    toolName: ["teeth", "scissor", "pushLawnmower", "powerLawnmower", "team"],
    toolCost: [0, 5, 25, 250, 500],
    toolBenefit: [1, 5, 50, 100, 250],
    toolNeeded: [false, true, true, true, true],
    toolOwned: [true, false, false, false, false]
}

function start() {
    console.log("Started working!");
};



function upgradeTool() {

    if (moneyEarned >= tools.toolCost[currentToolIndex + 1] && tools.toolNeeded[currentToolIndex + 1]) {
        var ifWanted = prompt("Do you wanna buy a " + tools.toolName[currentToolIndex + 1] + " or you can reset the game? yes/no/reset");
        if (ifWanted.toLowerCase() === "yes") {
            console.log("You just owned a ", tools.toolName[currentToolIndex + 1]);
            tools.toolNeeded[currentToolIndex + 1] = false;
            tools.toolOwned = true;
            moneyEarned = moneyEarned - tools.toolCost[currentToolIndex + 1]
            console.log("You don't need a " + tools.toolName[currentToolIndex] + "any more.");
            currentToolIndex++;
        } else if (ifWanted.toLowerCase() === "no") {
            console.log("You chose to keep using ", tools.toolName[currentToolIndex]);
        } else if (ifWanted.toLowerCase() == "reset") {
            start();
            upgradeTool();
            ifWanted = ""
            currentToolIndex = 0;
        } else {
            alert("You entered an invalid value, try yes/no/reset.");
        }
    } else moneyEarned = moneyEarned + tools.toolBenefit[currentToolIndex];



};


function work() {

    console.log("Day", i);
    moneyEarned = moneyEarned + tools.toolBenefit[currentToolIndex]
    console.log("Money Earned", moneyEarned);
    return moneyEarned

};



for (var i = 1; i < Infinity; i++) {

    if (moneyEarned < winAmount) {
        start();
        work();
        if (i % 5 === 0 && moneyEarned <= 1000) {
            upgradeTool();
        }
    } else {
        console.log("Landscaper won the game!");
        break;
    }



}

