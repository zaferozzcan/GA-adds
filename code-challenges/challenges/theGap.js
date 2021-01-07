//write a function loneliest(str) which accepts a string like this:
//'a b  z   p c'


// and should return array of character(s) that have the most spaces to their right and left.
//'    a b  sc     p     t   k'  => ['p'] you should consider both sides sum of space



const str = '    a b  sc     p     t   k';

function loneliest(str) {
    if (str.length > 1) {
        let gapCount = 0;
        let gapArray = []
        for (let i = 0; i < str.length; i++) {
            if (str[i] == " ") {
                gapCount++
            } else {
                gapArray.push(gapCount);
                gapCount = 0;
                gapArray.push(str[i])
            }
        }
        var maxGap = 0
        var letter;

        for (let i = 0; i < gapArray.length; i++) {
            // console.log(typeof gapArray[i]);
            if (typeof gapArray[i] == "string") {
                var sum = gapArray[i - 1] + gapArray[i + 1]
                if (sum > maxGap) {
                    maxGap = sum;
                    letter = gapArray[i]
                }

            }
        }
        return [letter]
    }

}


console.log(loneliest(str))
