// Carousel controls

$(function () {
    $('#carouselIndicators').carousel({
        interval:2000,
        pause: "false"
    });
    
    $('#playButton').click(function () {
        $('#carouselIndicators').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#carouselIndicators').carousel('pause');
    });
});