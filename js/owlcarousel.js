// https://owlcarousel2.github.io/OwlCarousel2/
$(document).ready(function() {
    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 5
    //         }
    //     }
    // })
    $('.carousel__inner').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 40,
        responsive: {
            1600: {
                items: 1
            }
        }
    });
});