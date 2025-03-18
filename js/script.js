
$(document).ready(function(){
    console.log("jQuery Loaded");
    
    if ($.fn.slick) {
        console.log("Slick Loaded Successfully");
    } else {
        console.log("Slick Failed to Load");
    }

    $('.photo-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        fade: false,
        infinite: true
    });
});
