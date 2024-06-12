buttonPrevious = document.getElementById("previous");
buttonNext = document.getElementById("next");
buttonAuto = document.getElementById("auto");
var images = new Array("images/m1.png",
                      "images/m2.png",
                       "images/m3.png",
                       "images/m4.png",
                       "images/m5.png",
                       "images/m7.png",
                       "images/m8.png",
                       "images/m9.png"
                       )
var alts = new Array("Module 1",
                    "Module 2",
                    "Module 3",
                    "Module 4",
                    "Module 5",
                    "Module 7",
                    "Module 8",
                    "Module 9")
var descriptions = new Array("Module 1 - Pictures that link to recipes",
                            "Module 2 - Table that shows a meal planner",
                            "Module 3 - Use CSS to alter text",
                            "Module 4 - Use div, flexboxes, and background images to create a blank webpage",
                            "Module 5 - Use javascript to create a multiplication cheat sheet",
                            "Module 7 - Use javascript to alter HTML of a webpage",
                            "Module 8 - Add items to a groceries list",
                            "Module 9 - Draw dots wherever you want on a webpage"
                            )
var links = new Array("https://trevortsai.github.io/dev109/m01/index.html",
                      "https://trevortsai.github.io/dev109/module02/index.html",
                      "https://trevortsai.github.io/dev109/m03/index.html",
                     "https://trevortsai.github.io/dev109/m04/index.html",
                     "https://trevortsai.github.io/dev109/m05/index.html",
                     "https://trevortsai.github.io/dev109/m07/index.html",
                     "https://trevortsai.github.io/dev109/m08/index.html",
                     "https://trevortsai.github.io/dev109/m09/index.html")
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
    imgIndex = 7;
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
  if (imgIndex == 7) {
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
