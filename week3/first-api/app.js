const baseURL = `http://www.omdbapi.com/?`
const apiKey = `apikey=`
const queryType = `t=`
let titleQuery = 'eraserhead'
let queryURL = baseURL + apiKey + '&' + queryType + titleQuery

console.log(queryURL)

const movieData = $.ajax({
    url: queryURL
})

const getMovie = () => {
    $.ajax({
        url: queryURL
    }).then((movieData) => {
        console.log(movieData)
    }, (error) => {
        console.error(error)
    })
}

getMovie()