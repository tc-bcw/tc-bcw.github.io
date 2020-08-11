window.addEventListener('load', (event) => {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var videoID = urlParams.get('v');
    if (videoID) {
        var vidContent = document.getElementById("video-content");
        var position = document.getElementById("video-back").getBoundingClientRect();
        vidContent.innerHTML = "<iframe id=\"video-embed\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"+videoID+"?rel=0\" frameborder=\"0\" allowfullscreen></iframe>";
        console.log(position.top)
        window.scrollTo(0,position.top);
    }
});
