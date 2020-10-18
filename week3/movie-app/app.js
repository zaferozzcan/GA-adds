$(() => {
    $("<h1>Welcome the movie app</h1>").css("text-align", "center").appendTo($("body"));

    const baseURL = `http://www.omdbapi.com/?`
    const apiKey = `apikey=53aa2cd6`
    const queryType = `t=`
    let titleQuery = 'eraserhead'
    let queryURL = baseURL + apiKey + '&' + queryType

    const getMovie = () => {
        $.ajax({
            url: queryURL + titleQuery
        }).then((movieData) => {
            $('.container').html(`
      <h2> ${movieData.Title} </h2>
      <h3> ${movieData.Year} </h3>
      <h4> ${movieData.Rated} <h4>
      <h5> ${movieData.Genre} <h5>
      <p>  ${movieData.Plot} </p>
      `)
            const $img = $('<img>').attr('src', movieData.Poster).attr('alt', movieData.Title)
            $('.container').append($img)
        }, (error) => {
            console.error(error)
        })
    }

    $(() => {
        getMovie()

        $('form').on('submit', (event) => {
            event.preventDefault()
            console.log('clicky')
            titleQuery = $('input[type="text"]').val()
            getMovie()
        })
    })
})