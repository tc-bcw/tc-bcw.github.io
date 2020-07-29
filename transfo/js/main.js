// Carousel controls

$(function () {
    $('#myCarousel').carousel({
        interval:2000,
        pause: "false"
    });
    
    $('#playButton').click(function () {
        $('#myCarousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#myCarousel').carousel('pause');
    });
});