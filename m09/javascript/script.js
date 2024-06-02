var  mybutton = document.querySelector("button");
var  select = document.getElementById("color");

mybutton.addEventListener("click", function(event) {


var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events

event.stopPropagation();

  }, false);

select.addEventListener("click", function(event) {
  event.stopPropagation();
}, false);

addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX -10) + "px";
    dot.style.top = (event.pageY -10) + "px";
    dot.style.background = document.getElementById("color").value;

    document.body.appendChild(dot);

  }, false);
