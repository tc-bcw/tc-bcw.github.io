window.addEventListener('load', (event) => {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var videoID = urlParams.get('v');
    if (videoID) {
        var vidContent = document.getElementById("video-content");
        vidContent.innerHTML = "<iframe id=\"video-embed\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"+videoID+"?rel=0\" frameborder=\"0\" allowfullscreen></iframe>";
        if (window.innerWidth > 576) {
            setTimeout(function() { window.scrollTo(0,188); }, 6);
        }
    }
});
