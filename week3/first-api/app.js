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
        $('.container').html(`
        <h2> ${movieData.Title} </h2>
        <h3> ${movieData.Year} </h3>
        <h4> ${movieData.Rated} <h4>
        <h5> ${movieData.Genre} <h5>
        <p> ${movieData.Plot} </p>
        `)
    }, (error) => {
        console.error(error)
    })
}

getMovie()