const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}



$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })



    // AOS Instance
    AOS.init();

});

    // click to scroll top
$('.move-up span').click(function () {
    $('html, body').animate({
    scrollTop: 0
    }, 1000);
})

$(function () {
    var width = window.innerWidth;

    window.addEventListener('resize', function () {
       if (window.innerWidth !== width) {
           window.location.reload(true);
       }
    });
});

// owl-carousel for blog
$('.owl-carousel').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    dots: true,
    singleItem: true,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
});