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
    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video' );
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if ( video !== null ) {
        video.pause();
    }
};

var modalFill = function ( vidID ) {
    var frame = document.getElementByID('modal-body');
    frame.innerContent = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vidID + '" frameborder="0" allowfullscreen></iframe>"';
}