buttonPrevious = document.getElementById("previous");
buttonNext = document.getElementById("next");
buttonAuto = document.getElementById("auto");
var images = new Array("https://cdn-icons-png.flaticon.com/256/1077/1077114.png",
                      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg",
                       "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                       "https://i.pinimg.com/736x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
                       "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740"
                      )
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
        autoSlideshow = setInterval(funcNext, 2000);
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
}

function funcNext() {
  if (imgIndex == 4) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }
  console.log(imgIndex);
  document.getElementById("slide").src = images[imgIndex];
}
