$(document).ready(function(){
    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        slidesToScroll: 1,
        slidesToShow: 8,
        responsive: [
            {breakpoint: 1200, settings: {slidesToShow: 6}},
            {breakpoint: 1000, settings: {slidesToShow: 5}},
            {breakpoint:  800, settings: {slidesToShow: 4}},
            {breakpoint:  600, settings: {slidesToShow: 3}},
            {breakpoint:  400, settings: {slidesToShow: 2}},
            {breakpoint:  200, settings: {slidesToShow: 1}},
        ]
    });
});