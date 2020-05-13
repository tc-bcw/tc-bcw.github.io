function languageSwap(lang, txt) {
  console.log("<a id=\"lang-link\" href=\"#\">");
  console.log(lang);
  console.log("<a id=\"lang-link\" href=\"" + lang + "\">");
  var ugh = txt.search("<a id=\"lang-link\" href=\"#\">");
  console.log(ugh);
  txt.replace("<a id=\"lang-link\" href=\"#\">","<a id=\"lang-link\" href=\"" + lang + "\">");
  return txt;
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            lang = elmnt.getAttribute("lang");
            console.log("here's a try");
            if (lang) {
              elmnt.innerHTML = languageSwap(lang, this.responseText);
            } else {
              elmnt.innerHTML = this.responseText;
              console.log("something is wrong");
            }
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
