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

//  Populate video modal with YouTube iFrame
var vidModalFill = function ( vidId ) {
    $('#modal-video').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vidId + '?rel=0" frameborder="0" allowfullscreen></iframe>"');
};

// Empty contents on modal close
$(document).ready(function(){
    $("#videoModal").on('hide.bs.modal', function () {
        // alert("Function is working...");
        $("#modal-video").html('<div class="loader"></div>');
    });
});

console.log("test v7");