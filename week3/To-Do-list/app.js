

$(function () {
    $('form').on('submit', (event) => {
        const inputValue = $('#input-box').val();
        console.log(inputValue);
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
    });

})