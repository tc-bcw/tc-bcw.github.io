var queryString = window.location.search;
console.log(queryString);
var urlParams = new URLSearchParams(queryString);
var videoID = urlParams.get('v')
if (videoID) {
    console.log("We're in the if statement.");
    var content = document.getElementById("pageContent");
    content.innerHTML = "<p>This worked ok</p>"
}