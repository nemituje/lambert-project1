$(document).ready(function(){
    $('.photo-slider').slick({
        vertical: false,          // Enable vertical slide
        infinite: true,          // Infinite scroll
        speed: 500,              // Speed of sliding
        slidesToShow: 1,         // Show one image at a time
        slidesToScroll: 1,       // Scroll one image at a time
        autoplay: true,          // Enable auto slide
        autoplaySpeed: 3000,     // Speed of auto slide in ms
        arrows: true,           // Disable arrows if not needed
        dots: false,              // Enable dots for navigation
        adaptiveHeight: true     // Adapt height of each slide
    });
});
