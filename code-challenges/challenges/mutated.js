
// check if the first string owns all chars in second string 

function mutation(str1, str2) {
    return str2.split("").every(item => {
        let itemm = item
        return str1.split("").includes(itemm)

    })
}
console.log(mutation("hello", "hel"));