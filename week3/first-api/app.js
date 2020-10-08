const baseURL = `http://www.omdbapi.com/?`
const apiKey = `apikey=dd68ea7f`
const queryType = `t=`
let titleQuery = 'eraserhead'
let queryURL = baseURL + apiKey + '&' + queryType + titleQuery

console.log(queryURL)