






let baseUrl = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=`
function get911Data() {
    $.ajax({
        url: baseUrl,
        type: "GET",
        data: {
            "$limit": 5000,
            "$$app_token": "hGuJmXfBX9I6XiP8fkMRwtdKk"
        }
    }).then((data) => {
        console.log(data);
    })
}
$(() => {
    $('form').on('submit', (event) => {
        event.preventDefault()
        let borough = $('input[type="text"]').val()
        get911Data()
    })

})
