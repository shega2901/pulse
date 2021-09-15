// https://github.com/ganlanyuan/tiny-slider

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 1200,
    controls: false,
    nav: false,
    responsive: {
        640: {
            edgePadding: 0,
            gutter: 0,
            items: 1
        },
        900: {
            gutter: 0,
            items: 1
        },
        1200: {
            gutter: 0,
            items: 1
        }
    }
});

// document.querySelector('.prev').onclick = function() {
document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');
});
// document.querySelector('.next').onclick = function() {
document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
});