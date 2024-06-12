buttonPrevious = document.getElementById("previous");
buttonNext = document.getElementById("next");
buttonAuto = document.getElementById("auto");
var images = new Array("images/a1.png",
                      "images/a2.png",
                       "images/a3.png",
                       "images/a4.png",
                       "images/a5.png"
                      )
var alts = new Array("Artifact 1",
                    "Artifact 2",
                    "Artifact 3",
                    "Artifact 4",
                    "Artifact 5")
var descriptions = new Array("Artifact 1 - HTML page of an arbitrary resume",
                            "Artifact 2 - Using <div> tags to create a chessboard",
                            "Artifact 3 - Creating a customizable rhombus using java",
                            "Artifact 4 - A form that validates entries using java",
                            "Artifact 5 - A slideshow of pictures that can auto-play")
var links = new Array("https://trevortsai.github.io/dev109/a1/index.html",
                     "https://trevortsai.github.io/dev109/a2/index.html",
                     "https://trevortsai.github.io/dev109/a3/index.html",
                     "https://trevortsai.github.io/dev109/a4/index.html",
                     "https://trevortsai.github.io/dev109/a5/index.html")
var imgIndex = 0;
var on = "Auto slideshow on"
var off = "Auto slideshow off"
buttonAuto.innerHTML = off;
buttonPrevious.addEventListener("click", function(event){
  funcPrevious();
}, false);

buttonNext.addEventListener("click", function(event){
    funcNext();
}, false);

buttonAuto.addEventListener("click", function(event){
    if (buttonAuto.innerHTML == on) {
        buttonAuto.innerHTML = off;
        clearInterval(autoSlideshow);
    } else {
        buttonAuto.innerHTML = on;
        autoSlideshow = setInterval(funcNext, 3000);
    }
}, false);

function funcPrevious() {
  if (imgIndex == 0) {
    imgIndex = 4;
  } else {
    imgIndex--;
  }
  console.log(imgIndex);
  document.getElementById("slide").src = images[imgIndex];
  document.getElementById("slide").alt = alts[imgIndex];
  document.getElementById("link").href = links[imgIndex];
  document.getElementById("dscr").innerHTML = "<h3>" + descriptions[imgIndex] + "</h3>";

}

function funcNext() {
  if (imgIndex == 4) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }
  console.log(imgIndex);
  document.getElementById("slide").src = images[imgIndex];
  document.getElementById("slide").alt = alts[imgIndex];
  document.getElementById("link").href = links[imgIndex];

  document.getElementById("dscr").innerHTML = "<h3>" + descriptions[imgIndex] + "</h3>";

}
