


function repeatedString(str, num) {
    return str.repeat(num)
}

console.log(repeatedString("abc", 3))//expected return abcabcabc

//--------------------without string methdod------------------------


function repeatedStringV2(str, num) {
    var newStr = "";
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            newStr += str
        }
    } else {
        return ""
    }

    return newStr
}

console.log(repeatedStringV2("xyz", 3))//expected return abcabcabc