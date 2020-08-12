// Carousel controls

$(function () {
    $('#carouselIndicators').carousel({
        interval:5000,
        pause: "false"
    });
    
    $('#playButton').click(function () {
        $('#carouselIndicators').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#carouselIndicators').carousel('pause');
    });
});

var stopVideo = function ( element ) {
    var frame = document.getElementById('modal-body');
    frame.innerHTML = "";
};

var vidModalFill = function ( vidId ) {
    var frame = document.getElementById('modal-body');
    frame.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vidId + '" frameborder="0" allowfullscreen></iframe>"';
}