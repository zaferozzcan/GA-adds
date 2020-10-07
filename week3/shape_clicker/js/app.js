console.log('shape clicker js file is connected');

//remember to set up your window onload!
$(() => {

    // let clickCount = 0;

    // $(".row").on("click", (e) => {

    //     if (clickCount === 0) {
    //         const selectedElement = $(e.target);
    //         selectedElement.removeClass().addClass('circle')
    //     } else if (clickCount === 1) {
    //         const selectedElement = $(e.target);
    //         selectedElement.removeClass().addClass('square')
    //     } else if (clickCount === 2) {
    //         const selectedElement = $(e.target);
    //         selectedElement.removeClass().addClass('triangle-down')
    //     } else if (clickCount === 3) {
    //         const selectedElement = $(e.target);
    //         selectedElement.removeClass().addClass('octagon')
    //     } else if (clickCount === 4) {
    //         const selectedElement = $(e.target);
    //         selectedElement.removeClass().addClass('heart')
    //     } else if (clickCount > 5) {
    //         clickCount = 0
    //         if (clickCount === 0) {
    //             const selectedElement = $(e.target);
    //             selectedElement.removeClass().addClass('circle')
    //         } else if (clickCount === 1) {
    //             const selectedElement = $(e.target);
    //             selectedElement.removeClass().addClass('square')
    //         } else if (clickCount === 2) {
    //             const selectedElement = $(e.target);
    //             selectedElement.removeClass().addClass('triangle-down')
    //         } else if (clickCount === 3) {
    //             const selectedElement = $(e.target);
    //             selectedElement.removeClass().addClass('octagon')
    //         } else if (clickCount === 4) {
    //             const selectedElement = $(e.target);
    //             selectedElement.removeClass().addClass('heart')
    //         }
    //     }
    //     clickCount++

    // })



    // let clickCount = 0;




    // function elementChanger(shape) {
    //     let selectedElement = $(e.target);
    //     selectedElement.removeClass().addClass(shape)

    // }


    // $(".row").on("click", (e) => {
    //     let shapes = ["circle", "square", "triangle-down", "octagon", "heart"]
    //     clickCount++
    //     if (clickCount === 0) {
    //         elementChanger(shapes[clickCount])
    //     } else if (clickCount === 1) {
    //         elementChanger(shapes[clickCount])
    //     } else if (clickCount === 2) {
    //         elementChanger(shapes[clickCount])
    //     } else if (clickCount === 3) {
    //         elementChanger(shapes[clickCount])
    //     } else if (clickCount === 4) {
    //         elementChanger(shapes[clickCount])
    //     } else if (clickCount > 5) {
    //         clickCount = 0
    //         if (clickCount === 0) {
    //             elementChanger(shapes[clickCount])
    //         } else if (clickCount === 1) {
    //             elementChanger(shapes[clickCount])
    //         } else if (clickCount === 2) {
    //             elementChanger(shapes[clickCount])
    //         } else if (clickCount === 3) {
    //             elementChanger(shapes[clickCount])
    //         } else if (clickCount === 4) {
    //             elementChanger(shapes[clickCount])
    //         }
    //     }

    // })


    let shapes = ["circle", "square", "triangle-down", "octagon", "heart"]
    while (true) {
        let count = 0
        try {
            const selectedElement = $(e.target);
            selectedElement.removeClass().addClass(shapes[count])
            count++
        } catch (error) {

        }
    }


})