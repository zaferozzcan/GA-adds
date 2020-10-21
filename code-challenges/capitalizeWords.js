// capitalize first world in string


function caseTitle(str) {
    return (str.toLowerCase().split(" ").map(x => x[0].toUpperCase() + x.slice(1))).join(" ")
}


console.log(caseTitle("hello there this is an example"));


