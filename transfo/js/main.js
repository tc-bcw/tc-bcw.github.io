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

$("#modal").on('hide.bs.modal', function () {
    alert("Function is working...");
    // $("#modal-body").html('<div class="loader"></div>');
});

var stopVideo = function () {
    // var frame = document.getElementById('modal-body');
    // frame.innerHTML = '<div class="loader"></div>';
};

var vidModalFill = function ( vidId ) {
    var frame = document.getElementById('modal-body');
    frame.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vidId + '?rel=0" frameborder="0" allowfullscreen></iframe>"';
};
